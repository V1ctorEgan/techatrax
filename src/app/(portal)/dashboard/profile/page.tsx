"use client";
import {
  User,
  Shield,
  Bell,
  Zap,
  MapPin,
  Terminal,
  Smartphone,
  Edit3,
} from "lucide-react";

export default function ProfileSettingsPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1
        className="text-4xl font-bold text-white mb-8"
        style={{ marginBottom: "32px" }}
      >
        Account Settings
      </h1>

      <div className="grid grid-cols-12" style={{ gap: "32px" }}>
        {/* Left Column: Avatar & Sub-Nav */}
        <div className="col-span-3 space-y-8">
          <div
            className="bg-[#0D1117] border border-white/5 rounded-4xl text-center"
            style={{ padding: "40px 24px" }}
          >
            <div
              className="relative inline-block mb-6"
              style={{ marginBottom: "24px" }}
            >
              <div
                className="w-32 h-32 rounded-full border-2 border-[#00E5FF] p-1"
                style={{ padding: "4px" }}
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kaelen"
                  alt="Operative"
                  className="w-full h-full rounded-full bg-[#080C0F]"
                />
              </div>
              <div
                className="absolute bottom-1 right-1 bg-[#00E5FF] text-[#080C0F] p-1.5 rounded-full border-2 border-[#0D1117]"
                style={{ padding: "6px" }}
              >
                <Zap size={14} fill="currentColor" />
              </div>
            </div>
            <h2
              className="text-2xl font-black text-white mb-2"
              style={{ marginBottom: "8px" }}
            >
              Operative Kaelen
            </h2>
            <div
              className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full px-4 py-1 mb-6"
              style={{
                paddingTop: "4px",
                paddingBottom: "4px",
                paddingRight: "16px",
                paddingLeft: "16px",
                marginBottom: "24px",
              }}
            >
              <span className="text-[#22C55E] text-[10px] font-black uppercase tracking-widest">
                Neural Rank: ELITE III
              </span>
            </div>
            <p className="text-white/40 text-[11px] leading-relaxed font-medium">
              Senior Neural Architect specializing in large-scale cognitive
              synchronization and data integrity protocols.
            </p>
          </div>

          <nav
            className="bg-[#0D1117] border border-white/5 rounded-4xl overflow-hidden"
            style={{ marginTop: "1rem" }}
          >
            {[
              { name: "Personal Info", icon: User, active: true },
              { name: "Security", icon: Shield },
              { name: "Notifications", icon: Bell },
              { name: "Learning Preferences", icon: Zap },
            ].map((item) => (
              <button
                key={item.name}
                style={{
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  paddingRight: "32px",
                  paddingLeft: "32px",
                }}
                className={`w-full flex items-center gap-4 py-4 px-8 text-xs font-bold transition-all border-l-2 ${
                  item.active
                    ? "bg-[#00E5FF]/5 text-white border-[#00E5FF]"
                    : "text-white/30 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={16} />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Column: Information Forms */}
        <div className="col-span-9 space-y-8">
          {/* Personal Information */}
          <section
            className="bg-[#0D1117] border border-white/5 rounded-4xl"
            style={{ padding: "40px", marginBottom: "1rem" }}
          >
            <div
              className="flex justify-between items-center mb-10"
              style={{ marginBottom: "40px" }}
            >
              <h3 className="flex items-center gap-3 text-lg font-bold text-white">
                <User size={18} className="text-[#00E5FF]" />
                Personal Information
              </h3>
              <button
                style={{
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingRight: "16px",
                  paddingLeft: "16px",
                }}
                className="border border-white/10 rounded-lg px-4 py-2 text-[10px] font-black uppercase text-white/60 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <Edit3 size={12} /> Edit Profile
              </button>
            </div>

            <div
              className="grid grid-cols-2 gap-8 mb-8"
              style={{ marginBottom: "32px" }}
            >
              <div>
                <label
                  className="block text-[10px] font-black text-white/20 uppercase tracking-widest mb-3"
                  style={{ marginBottom: "12px" }}
                >
                  Full Name
                </label>
                <input
                  readOnly
                  value="Operative Kaelen"
                  style={{
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingRight: "24px",
                    paddingLeft: "24px",
                  }}
                  className="w-full bg-[#05070A] border border-white/5 rounded-xl py-4 px-6 text-sm text-white/80"
                />
              </div>
              <div>
                <label
                  className="block text-[10px] font-black text-white/20 uppercase tracking-widest mb-3"
                  style={{ marginBottom: "12px" }}
                >
                  Email Address
                </label>
                <input
                  readOnly
                  value="kaelen@techatrax.inst"
                  style={{
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingRight: "24px",
                    paddingLeft: "24px",
                  }}
                  className="w-full bg-[#05070A] border border-white/5 rounded-xl py-4 px-6 text-sm text-white/80"
                />
              </div>
            </div>

            <div className="mb-8" style={{ marginBottom: "32px" }}>
              <label className="block text-[10px] font-black text-white/20 uppercase tracking-widest mb-3">
                Bio / Professional Directive
              </label>
              <textarea
                readOnly
                style={{
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  paddingRight: "24px",
                  paddingLeft: "24px",
                }}
                className="w-full bg-[#05070A] border border-white/5 rounded-xl py-4 px-6 text-sm text-white/80 min-h-25"
                defaultValue="Architecting the bridge between human cognition and synthetic intelligence at the Aetheris Institute. Focused on Neural Sync optimization."
              />
            </div>

            <div>
              <label
                className="block text-[10px] font-black text-white/20 uppercase tracking-widest mb-3"
                style={{ marginBottom: "12px" }}
              >
                Location Offset
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-[#00E5FF]"
                  size={16}
                />
                <input
                  readOnly
                  value="Sector 7G, Neo-San Francisco"
                  style={{
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingRight: "24px",
                    paddingLeft: "56px",
                  }}
                  className="w-full bg-[#05070A] border border-white/5 rounded-xl py-4 pl-14 pr-6 text-sm text-white/80"
                />
              </div>
            </div>
          </section>

          {/* Neural Security Protocols */}
          <section
            className="bg-[#0D1117] border border-white/5 rounded-4xl"
            style={{ padding: "40px", marginBottom: "1rem" }}
          >
            <h3
              className="flex items-center gap-3 text-lg font-bold text-white mb-10"
              style={{ marginBottom: "40px" }}
            >
              <Shield size={18} className="text-[#00E5FF]" />
              Neural Security Protocols
            </h3>

            <div
              className="grid grid-cols-3 gap-6 mb-10"
              style={{ marginBottom: "40px" }}
            >
              {["Current Password", "New Password", "Confirm New"].map(
                (label) => (
                  <div key={label}>
                    <label
                      className="block text-[10px] font-black text-white/20 uppercase mb-3"
                      style={{ marginBottom: "12px" }}
                    >
                      {label}
                    </label>
                    <input
                      type="password"
                      value="********"
                      readOnly
                      style={{
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        paddingRight: "24px",
                        paddingLeft: "24px",
                      }}
                      className="w-full bg-[#05070A] border border-white/5 rounded-xl py-4 px-6 text-white/40"
                    />
                  </div>
                ),
              )}
            </div>

            <div
              className="bg-[#05070A] border border-[#22C55E]/10 rounded-3xl flex items-center justify-between"
              style={{ padding: "24px 32px", marginBottom: "40px" }}
            >
              <div className="flex items-center gap-4">
                <div className="text-[#22C55E]">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Two-Factor Authentication
                  </div>
                  <div className="text-[10px] text-white/30">
                    Require biometric confirmation for all neural uplinks.
                  </div>
                </div>
              </div>
              <div
                className="w-12 h-6 bg-[#22C55E] rounded-full relative p-1"
                style={{ padding: "4px" }}
              >
                <div className="w-4 h-4 bg-white rounded-full ml-auto" />
              </div>
            </div>

            {/* Active Sessions */}
            <div className="space-y-4">
              <label
                className="block text-[10px] font-black text-white/20 uppercase tracking-widest mb-4"
                style={{ marginBottom: "16px" }}
              >
                Active Neural Sessions
              </label>
              {[
                {
                  name: "Neural Terminal X-128",
                  sub: "Mac OS • Active Now",
                  icon: Terminal,
                  current: true,
                },
                {
                  name: "Personal Uplink Unit",
                  sub: "London Hub • 4 hours ago",
                  icon: Smartphone,
                },
              ].map((session, i) => (
                <div
                  key={i}
                  style={{ paddingBottom: "1rem" }}
                  className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-white/20">
                      <session.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-white">
                        {session.name}
                      </div>
                      <div className="text-[10px] text-white/30">
                        {session.sub}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-[9px] font-black uppercase ${session.current ? "text-[#00E5FF]" : "text-red-500/60"}`}
                  >
                    {session.current ? "Current" : "Revoke"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Grid: Notifications & Learning Prefs */}
          <div className="grid grid-cols-2 gap-8">
            <section
              className="bg-[#0D1117] border border-white/5 rounded-4xl"
              style={{ padding: "32px" }}
            >
              <h4
                className="flex items-center gap-3 text-sm font-black text-white uppercase mb-8"
                style={{ marginBottom: "32px" }}
              >
                <Bell size={16} className="text-[#00E5FF]" /> Notifications
              </h4>
              <div className="space-y-6">
                {["Neural Link Updates", "Course Reminders"].map((label, i) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                    style={{ marginBottom: "4px" }}
                  >
                    <span className="text-xs text-white/60">{label}</span>
                    <div className="w-4 h-4 border border-[#00E5FF] rounded bg-[#00E5FF]/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#00E5FF] rounded-[1px]" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="bg-[#0D1117] border border-white/5 rounded-4xl"
              style={{ padding: "32px" }}
            >
              <h4
                className="flex items-center gap-3 text-sm font-black text-white uppercase mb-8"
                style={{ marginBottom: "32px" }}
              >
                <Zap size={16} className="text-[#00E5FF]" /> Learning Prefs
              </h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">
                    Focus Mode Defaults
                  </span>
                  <div
                    className="w-10 h-5 bg-[#00E5FF] rounded-full relative p-0.5"
                    style={{ padding: "2px" }}
                  >
                    <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                  </div>
                </div>
                <div>
                  <div
                    className="flex justify-between text-[10px] font-black text-white/20 uppercase mb-2"
                    style={{ marginBottom: "8px" }}
                  >
                    Cognitive Load Limit
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#22C55E] w-[82%]" />
                  </div>
                  <div className="text-[8px] text-right text-white/20 mt-1 uppercase">
                    82% Optimization
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
