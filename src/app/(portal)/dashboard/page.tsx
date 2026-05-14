"use client";
import { BarChart3, BrainCircuit, Play } from "lucide-react";

export default function NeuralHubPage() {
  return (
    <div style={{ padding: "40px" }}>
      {/* 1. Welcome Hero Widget */}
      <div
        className="bg-[#0D1117] border border-white/5 rounded-4xl flex items-center justify-between relative overflow-hidden"
        style={{ padding: "48px", marginBottom: "32px" }}
      >
        <div className="relative z-10 text-white">
          <div
            className="flex items-center gap-3"
            style={{ marginBottom: "16px" }}
          >
            <div
              className="bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full px-3 py-1 flex items-center gap-2"
              style={{
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
              }}
            >
              <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="text-[#22C55E] text-[10px] font-black uppercase">
                Online Operative
              </span>
            </div>
            <span className="text-white/20 text-[10px] font-mono">
              ID: TX-8829-Ω
            </span>
          </div>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ marginBottom: "1rem" }}
          >
            Welcome Back, Operative Kaelen
          </h1>
          <p className="text-white/40 text-sm max-w-xl">
            Neural integration at 94%. Your current learning velocity is 12%
            above the institute average.
          </p>
        </div>

        {/* Rank Badge */}
        <div
          className="bg-[#161B22] border border-white/5 rounded-3xl flex items-center gap-6 text-white"
          style={{ padding: "24px 32px" }}
        >
          <div className="relative w-16 h-16 rounded-full border-4 border-[#00E5FF] flex items-center justify-center">
            <span className="text-xl font-black" style={{ padding: "1rem" }}>
              09
            </span>
          </div>
          <div>
            <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">
              Neural Rank
            </div>
            <div className="text-2xl font-black">ELITE III</div>
            <div className="text-[#22C55E] text-[10px] font-bold">
              +240 XP Today
            </div>
          </div>
        </div>
      </div>

      {/* 2. Grid for Stats and Active Path */}
      <div className="grid grid-cols-12" style={{ gap: "32px" }}>
        {/* Neural Statistics Section */}
        <div
          className="col-span-4 bg-[#0D1117] border border-white/5 rounded-4xl"
          style={{ padding: "32px" }}
        >
          <div
            className="flex justify-between items-center"
            style={{ marginBottom: "32px" }}
          >
            <h3 className="font-bold text-lg text-white">Neural Statistics</h3>
            <BarChart3 size={18} className="text-white/20" />
          </div>
          <div className="flex" style={{ gap: "16px", marginBottom: "40px" }}>
            <div
              className="flex-1 bg-[#161B22] rounded-2xl text-center"
              style={{ padding: "24px" }}
            >
              <div className="text-2xl font-black text-white">1.2k</div>
              <div className="text-[9px] text-white/20 uppercase font-bold">
                Credits
              </div>
            </div>
            <div
              className="flex-1 bg-[#161B22] rounded-2xl text-center"
              style={{ padding: "24px" }}
            >
              <div className="text-2xl font-black text-[#22C55E]">#14</div>
              <div className="text-[9px] text-white/20 uppercase font-bold">
                Global Rank
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div
                className="flex justify-between text-[10px] font-bold text-white/40 mb-2 uppercase"
                style={{ marginBottom: "0.25rem" }}
              >
                Cognitive Load <span className="text-white">68%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#00E5FF]/60 w-[68%]" />
              </div>
            </div>
            <div>
              <div
                className="flex justify-between text-[10px] font-bold text-white/40 mb-2 uppercase"
                style={{ marginBottom: "0.25rem" }}
              >
                Path Completion <span className="text-white">42%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#22C55E] w-[42%]" />
              </div>
            </div>
          </div>
        </div>

        {/* THE DEEP LEARNING DIV */}
        <div
          className="col-span-8 bg-[#0D1117] border border-white/5 rounded-4xl relative overflow-hidden flex flex-col justify-between"
          style={{ padding: "40px" }}
        >
          {/* Background brain decoration */}
          <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
            <BrainCircuit size={120} className="text-white" />
          </div>

          <div>
            <span
              className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white/60"
              style={{
                marginBottom: "24px",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              Active Neural Path
            </span>
            <h2
              className="text-5xl font-bold leading-tight text-white"
              style={{ marginBottom: "16px", maxWidth: "80%" }}
            >
              Deep Learning Architectures & Synthetic Models
            </h2>
            <p
              className="text-white/40 text-sm"
              style={{ marginBottom: "48px" }}
            >
              Module 4: Transformer Optimization and Attention Mechanism
              Deployment.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-xs">
              <div
                className="flex justify-between text-[10px] font-black text-white/30 uppercase mb-2"
                style={{ marginBottom: "0.5rem" }}
              >
                <span>Progress 72%</span>
                <span>24/32 Units</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#22C55E] w-[72%]" />
              </div>
            </div>
            <button
              className="flex items-center gap-3 bg-[#00E5FF] text-[#080C0F] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              style={{
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                marginLeft: "1rem",
              }}
            >
              <Play size={16} fill="currentColor" />
              Resume Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
