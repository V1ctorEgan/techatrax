"use client";
import { Search, Bell, Grid, UserCircle } from "lucide-react";

export default function DashboardNavbar() {
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
        className="flex-1 flex justify-center px-10"
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
            className="w-full bg-[#0D1117] border border-white/5 rounded-full py-3 pl-12 pr-6 text-sm text-white outline-none focus:border-[#00E5FF]/50 transition-all placeholder:text-white/10"
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

        <button className="flex items-center gap-3 group">
          <div className="text-right">
            <div className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">
              Operative
            </div>
            <div className="text-xs font-bold text-white group-hover:text-[#00E5FF] transition-colors">
              Kaelen.AI
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border border-[#00E5FF]/30 p-0.5 group-hover:border-[#00E5FF] transition-all">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kaelen"
              alt="Profile"
              className="w-full h-full rounded-full bg-[#0D1117]"
            />
          </div>
        </button>
      </div>
    </nav>
  );
}
