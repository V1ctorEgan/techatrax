"use client";
import {
  TrendingUp,
  BarChart,
  Award,
  AlertTriangle,
  Flame,
  Target,
} from "lucide-react";

export default function ProgressPage() {
  return (
    <div style={{ padding: "40px" }}>
      {/* 1. Header & Top Level Mastery */}
      <header
        className="flex justify-between items-end"
        style={{ marginBottom: "40px" }}
      >
        <div>
          <h1
            className="text-4xl font-bold text-white mb-2 leading-tight"
            style={{ marginBottom: "8px" }}
          >
            NEURAL
            <br />
            PERFORMANCE
            <br />
            OVERVIEW
          </h1>
          <p className="text-white/40 text-[11px] font-medium uppercase tracking-widest">
            Real-time cognitive alignment and proficiency metrics.
          </p>
        </div>

        <div className="flex gap-4">
          <div
            className="bg-[#0D1117] border border-white/5 rounded-2xl text-center"
            style={{ padding: "20px 32px" }}
          >
            <div className="text-3xl font-black text-[#22C55E]">14</div>
            <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">
              Days Streak
            </div>
          </div>
          <div
            className="bg-[#0D1117] border border-white/5 rounded-2xl flex items-center gap-6"
            style={{ padding: "20px 32px" }}
          >
            <div className="relative w-12 h-12">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-white/5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-[#00E5FF]"
                  strokeDasharray="125"
                  strokeDashoffset="31"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                75%
              </span>
            </div>
            <div className="text-left">
              <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">
                Overall Mastery
              </div>
              <div className="text-xl font-black text-white">Optimal</div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12" style={{ gap: "24px" }}>
        {/* 2. Cognitive Sync Progress Graph */}
        <div
          className="col-span-8 bg-[#0D1117] border border-white/5 rounded-4xl"
          style={{ padding: "32px" }}
        >
          <div
            className="flex justify-between items-start mb-10"
            style={{ marginBottom: "40px" }}
          >
            <div>
              <h3
                className="text-xl font-bold text-white mb-1"
                style={{ marginBottom: "4px" }}
              >
                Cognitive Sync Progress
              </h3>
              <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest">
                Neural bandwidth optimization over the last 30 cycles.
              </p>
            </div>
            <div className="flex gap-2">
              <span
                style={{
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  paddingRight: "12px",
                  paddingLeft: "12px",
                }}
                className="bg-[#00E5FF]/10 text-[#00E5FF] text-[8px] font-black px-3 py-1 rounded-md border border-[#00E5FF]/20"
              >
                MIN
              </span>
              <span
                style={{
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  paddingRight: "12px",
                  paddingLeft: "12px",
                }}
                className="bg-[#00E5FF]/10 text-[#00E5FF] text-[8px] font-black px-3 py-1 rounded-md border border-[#00E5FF]/20"
              >
                MAX
              </span>
            </div>
          </div>

          {/* Mock Graph */}
          <div
            className="relative h-64 w-full flex items-end justify-between px-4"
            style={{ paddingLeft: "16px", paddingRight: "16px" }}
          >
            <div
              className="absolute inset-0 flex flex-col justify-between py-2"
              style={{ paddingTop: "8px", paddingBottom: "8px" }}
            >
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full border-t border-white/2" />
              ))}
            </div>
            <svg
              className="absolute inset-0 h-full w-full px-4 overflow-visible"
              style={{ paddingLeft: "16px", paddingRight: "16px" }}
            >
              <polyline
                fill="none"
                stroke="#00E5FF"
                strokeWidth="3"
                points="0,180 80,220 160,150 240,190 320,120 400,160 480,90 560,110 640,40"
                className="drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              />
            </svg>
            {["CYCLE 01", "CYCLE 08", "CYCLE 15", "CYCLE 22", "CYCLE 30"].map(
              (label) => (
                <span
                  key={label}
                  className="text-[8px] font-black text-white/10 tracking-widest uppercase relative z-10"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </div>

        {/* 3. Skill Matrix */}
        <div
          className="col-span-4 bg-[#0D1117] border border-white/5 rounded-4xl"
          style={{ padding: "32px" }}
        >
          <h3
            className="text-xl font-bold text-white mb-8"
            style={{ marginBottom: "32px" }}
          >
            Skill Matrix
          </h3>
          <div className="space-y-8">
            {[
              { label: "NEURAL ARCHITECTURES", val: 88, color: "bg-[#00E5FF]" },
              { label: "EMBEDDED AI", val: 64, color: "bg-[#00E5FF]" },
              { label: "DATA SYNTHESIS", val: 82, color: "bg-[#22C55E]" },
              { label: "CAD OPTIMIZATION", val: 45, color: "bg-[#00E5FF]" },
            ].map((skill) => (
              <div key={skill.label}>
                <div
                  className="flex justify-between text-[9px] font-black text-white/40 uppercase mb-3 tracking-widest"
                  style={{ marginBottom: "12px" }}
                >
                  {skill.label} <span className="text-white">{skill.val}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={skill.color + " h-full"}
                    style={{ width: `${skill.val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Achievement Badges */}
        <div
          className="col-span-8 bg-[#0D1117] border border-white/5 rounded-4xl"
          style={{ padding: "32px" }}
        >
          <div
            className="flex justify-between items-center mb-8"
            style={{ marginBottom: "32px" }}
          >
            <h3 className="text-xl font-bold text-white uppercase tracking-tighter">
              Achievement Badges
            </h3>
            <button className="text-[9px] font-black text-[#00E5FF] uppercase tracking-widest hover:underline">
              View All
            </button>
          </div>
          <div className="flex justify-around">
            {[
              { icon: TrendingUp, label: "Early Adopter" },
              { icon: Target, label: "Core Architect" },
              { icon: Award, label: "Neural Path" },
              { icon: null, label: "Locked", locked: true },
            ].map((badge, i) => (
              <div key={i} className="text-center group">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all ${badge.locked ? "bg-white/5 border border-white/5" : "bg-[#161B22] border border-white/10 group-hover:border-[#00E5FF]/40 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]"}`}
                  style={{ marginBottom: "16px" }}
                >
                  {badge.icon ? (
                    <badge.icon
                      size={28}
                      className="text-[#00E5FF] opacity-60 group-hover:opacity-100"
                    />
                  ) : (
                    <TrendingUp size={28} className="text-white/5" />
                  )}
                </div>
                <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Optimization Alert */}
        <div
          className="col-span-4 bg-[#0D1117] border border-white/5 rounded-4xl"
          style={{ padding: "32px" }}
        >
          <div
            className="flex items-center gap-3 text-red-500/80 mb-8"
            style={{ marginBottom: "32px" }}
          >
            <AlertTriangle size={18} />
            <h3 className="text-lg font-bold uppercase tracking-tighter">
              Optimization
            </h3>
          </div>
          <div
            className="bg-[#161B22] border border-red-500/10 rounded-2xl"
            style={{ padding: "24px" }}
          >
            <div
              className="flex justify-between items-start mb-4"
              style={{ marginBottom: "16px" }}
            >
              <div className="text-[9px] font-black text-red-500/60 uppercase leading-tight">
                Weak Area
                <br />
                Identified
              </div>
              <div className="text-xl font-black text-white">46%</div>
            </div>
            <div
              className="text-sm font-bold text-white mb-2"
              style={{ marginBottom: "8px" }}
            >
              Transformer Logic
            </div>
            <p
              className="text-[11px] text-white/30 leading-relaxed mb-8"
              style={{ marginBottom: "32px" }}
            >
              System detected low retention on multi-head attention vectors.
              Supplemental lab session recommended.
            </p>
            <button
              style={{ paddingTop: "12px", paddingBottom: "12px" }}
              className="w-full py-3 border border-red-500/20 rounded-xl text-[10px] font-black uppercase text-red-500/60 hover:bg-red-500 hover:text-white transition-all tracking-widest"
            >
              Review Now
            </button>
          </div>
        </div>

        {/* 6. Quick Stats Footer */}
        <div
          className="col-span-4 bg-[#0D1117] border border-white/5 rounded-3xl flex items-center gap-6"
          style={{ padding: "24px 32px" }}
        >
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/20">
            <BarChart size={24} />
          </div>
          <div>
            <div className="text-3xl font-black text-white">42</div>
            <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">
              Completed Lessons
            </div>
          </div>
        </div>
        <div
          className="col-span-4 bg-[#0D1117] border border-white/5 rounded-3xl flex items-center gap-6"
          style={{ padding: "24px 32px" }}
        >
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/20">
            <Flame size={24} />
          </div>
          <div>
            <div className="text-3xl font-black text-white">128h</div>
            <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">
              Total Compute Hours
            </div>
          </div>
        </div>
        <div
          className="col-span-4 bg-[#0D1117] border border-white/5 rounded-3xl flex items-center gap-6"
          style={{ padding: "24px 32px" }}
        >
          <div className="w-12 h-12 bg-[#00E5FF]/10 rounded-xl flex items-center justify-center text-[#00E5FF]">
            <Target size={24} />
          </div>
          <div>
            <div className="text-3xl font-black text-[#00E5FF]">ELITE II</div>
            <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">
              Neural Rank
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
