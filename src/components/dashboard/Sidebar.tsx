"use client";

import {
  LayoutDashboard,
  BookOpen,
  Microscope,
  BarChart3,
  Settings,
  Terminal,
  LogOut,
  Award,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const NAV_ITEMS = [
  { name: "Neural Hub", icon: LayoutDashboard, href: "/dashboard" },
  { name: "My Courses", icon: BookOpen, href: "/dashboard/mycourses" },
  { name: "Exams", icon: Microscope, href: "/dashboard/exams" },
  { name: "Progress", icon: BarChart3, href: "/dashboard/progress" },
  { name: "Certificates", icon: Award, href: "/dashboard/certificate" },
  { name: "Profile", icon: Settings, href: "/dashboard/profile" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <aside
      className="w-65 border-r border-white/5 bg-[#080C0F] flex flex-col h-screen sticky top-0"
      style={{ padding: "24px" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3" style={{ marginBottom: "48px" }}>
        <div className="w-8 h-8 bg-[#00E5FF] rounded flex items-center justify-center">
          <Terminal size={20} className="text-[#080C0F]" />
        </div>
        <span className="font-black tracking-tighter text-xl text-white">
          NEURAL HUB
        </span>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              style={{
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
              className={`w-full flex items-center gap-4 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                isActive
                  ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}

        {/* Logout — separated at bottom of nav */}
        <button
          onClick={handleLogout}
          style={{
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
          className="w-full flex items-center gap-4 py-3 px-4 rounded-xl text-sm font-bold transition-all text-red-400/60 hover:text-red-400 hover:bg-red-500/5"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>

      {/* Node Capacity Widget */}
      <div
        className="bg-[#0D1117] border border-white/5 rounded-2xl"
        style={{ padding: "20px" }}
      >
        <div
          className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40"
          style={{ marginBottom: "12px" }}
        >
          <span>Node Capacity</span>
          <span className="text-white">84%</span>
        </div>
        <div
          className="h-1.5 bg-white/5 rounded-full overflow-hidden"
          style={{ marginBottom: "16px" }}
        >
          <div className="h-full bg-[#00E5FF] w-[84%]" />
        </div>
        <button
          onClick={() => router.push("/courses")}
          className="w-full py-2 bg-[#00E5FF] text-[#080C0F] text-[10px] font-black uppercase rounded-lg hover:bg-[#00D4AA] transition-colors"
        >
          Upgrade Node
        </button>
      </div>
    </aside>
  );
}
