"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Bell, Grid, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Profile = {
  full_name: string | null;
  avatar_url: string | null;
};

export default function DashboardNavbar() {
  const router = useRouter();
  const supabase = createClient();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      setEmail(user.email ?? "");

      const { data } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", user.id)
        .single();

      if (data) setProfile(data as Profile);
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  // Display name: full_name from profile, or email prefix
  const displayName = profile?.full_name
    ? profile.full_name.split(" ")[0]
    : email.split("@")[0];

  // Avatar: real avatar or dicebear generated from name
  const avatarUrl =
    profile?.avatar_url ??
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${displayName}`;

  return (
    <nav
      className="w-full bg-[#05070A] border-b border-white/5 flex items-center justify-between sticky top-0 z-50"
      style={{ height: "80px", padding: "0 40px" }}
    >
      {/* 1. Branding */}
      <div className="flex items-center">
        <span className="text-[#00E5FF] font-black text-2xl tracking-tighter uppercase italic">
          Techatrax
        </span>
      </div>

      {/* 2. Centered Search Bar */}
      <div
        className="flex-1 flex justify-center"
        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
      >
        <div className="relative w-full max-w-xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
            size={18}
          />
          <input
            type="text"
            placeholder="Search neural database..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0D1117] border border-white/5 rounded-full text-sm text-white outline-none focus:border-[#00E5FF]/50 transition-all placeholder:text-white/10"
            style={{
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "3rem",
              paddingRight: "1.5rem",
            }}
          />
        </div>
      </div>

      {/* 3. Utility Icons & Profile */}
      <div className="flex items-center gap-6">
        <button className="relative text-white/40 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00E5FF] rounded-full border-2 border-[#05070A]" />
        </button>

        <button className="text-white/40 hover:text-white transition-colors">
          <Grid size={20} />
        </button>

        <div className="h-8 w-px bg-white/5 mx-2" />

        {/* Profile button with dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 group"
          >
            <div className="text-right">
              <div className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">
                Operative
              </div>
              <div className="text-xs font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                {displayName}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#00E5FF]/30 p-0.5 group-hover:border-[#00E5FF] transition-all">
              <img
                src={avatarUrl}
                alt="Profile"
                className="w-full h-full rounded-full bg-[#0D1117]"
              />
            </div>
          </button>

          {/* Dropdown */}
          {showDropdown && (
            <div
              className="absolute right-0 top-14 bg-[#0D1117] border border-white/5 rounded-2xl overflow-hidden shadow-2xl"
              style={{ minWidth: "180px" }}
            >
              <div style={{ padding: "16px" }}>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-black">
                  Signed in as
                </p>
                <p className="text-xs text-white font-bold truncate mt-1">
                  {email}
                </p>
              </div>
              <div className="border-t border-white/5" />
              <button
                onClick={() => router.push("/dashboard/profile")}
                className="w-full text-left text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all font-bold"
                style={{ padding: "12px 16px" }}
              >
                My Profile
              </button>
              <button
                onClick={() => router.push("/dashboard")}
                className="w-full text-left text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all font-bold"
                style={{ padding: "12px 16px" }}
              >
                Dashboard
              </button>
              <div className="border-t border-white/5" />
              <button
                onClick={handleLogout}
                className="w-full text-left text-xs text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all font-bold flex items-center gap-2"
                style={{ padding: "12px 16px" }}
              >
                <LogOut size={12} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
