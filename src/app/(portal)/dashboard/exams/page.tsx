"use client";
import {
  Trophy,
  Activity,
  CheckCircle,
  Lock,
  ShieldAlert,
  Clock,
  ChevronRight,
  Monitor,
} from "lucide-react";

export default function ExamsPage() {
  return (
    <div style={{ padding: "40px" }}>
      {/* 1. Header & Global Rank */}
      <header
        className="flex justify-between items-start"
        style={{ marginBottom: "40px" }}
      >
        <div>
          <h1
            className="text-4xl font-bold text-white mb-2"
            style={{ marginBottom: "8px" }}
          >
            Exam & Assessment Center
          </h1>
          <p className="text-white/40 text-sm">
            Secure access to neural simulation protocols and academic
            certification.
          </p>
        </div>
        <div
          className="bg-[#161B22] border border-[#22C55E]/20 rounded-2xl flex items-center gap-4"
          style={{ padding: "16px 24px" }}
        >
          <div className="w-10 h-10 bg-[#22C55E]/10 rounded-lg flex items-center justify-center text-[#22C55E]">
            <Trophy size={20} />
          </div>
          <div>
            <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">
              Neural Rank
            </div>
            <div className="text-xl font-black text-[#22C55E]">Top 2%</div>
          </div>
        </div>
      </header>

      {/* 2. Top Stats Row */}
      <div
        className="grid grid-cols-3"
        style={{ gap: "24px", marginBottom: "48px" }}
      >
        <div
          className="bg-[#0D1117] border border-white/5 rounded-3xl"
          style={{ padding: "32px" }}
        >
          <div
            className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2"
            style={{ marginBottom: "8px" }}
          >
            Average Accuracy
          </div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-black text-white">94.8%</span>
            <span
              className="text-[#22C55E] text-[10px] font-bold mb-1"
              style={{ marginBottom: "4px" }}
            >
              +2.4% vs last term
            </span>
          </div>
        </div>
        <div
          className="bg-[#0D1117] border border-white/5 rounded-3xl"
          style={{ padding: "32px" }}
        >
          <div
            className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2"
            style={{ marginBottom: "8px" }}
          >
            Completed Assessments
          </div>
          <div
            className="text-4xl font-black text-white mb-4"
            style={{ marginBottom: "16px" }}
          >
            12 <span className="text-white/20 text-xl">/ 15 Total</span>
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#22C55E] w-[80%]" />
          </div>
        </div>
        <div
          className="bg-[#0D1117] border border-white/5 rounded-3xl"
          style={{ padding: "32px" }}
        >
          <div
            className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2"
            style={{ marginBottom: "8px" }}
          >
            Neural Rank Impact
          </div>
          <div className="text-4xl font-black text-white">
            +185 <span className="text-[#00E5FF] text-xl">XP Points</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12" style={{ gap: "32px" }}>
        {/* 3. Left Column: Assessments & History */}
        <div className="col-span-8 space-y-10">
          {/* Active Assessments */}
          <section>
            <div
              className="flex items-center justify-between mb-8"
              style={{ marginBottom: "32px" }}
            >
              <h2 className="flex items-center gap-3 text-lg font-bold text-white">
                <Activity size={18} className="text-[#00E5FF]" />
                Active Assessments
              </h2>
              <div
                className="bg-[#00E5FF]/5 border border-[#00E5FF]/20 px-3 py-1 rounded-md"
                style={{
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  paddingRight: "12px",
                  paddingLeft: "12px",
                }}
              >
                <span className="text-[#00E5FF] text-[9px] font-black uppercase tracking-widest">
                  Real-time Monitoring Active
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2" style={{ gap: "24px" }}>
              {/* In Progress Card */}
              <div
                className="bg-[#0D1117] border border-[#00E5FF]/30 rounded-4xl overflow-hidden"
                style={{ padding: "32px" }}
              >
                <div
                  className="flex justify-between mb-8"
                  style={{ marginBottom: "32px" }}
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/40">
                    <Monitor size={24} />
                  </div>
                  <span
                    className="bg-[#22C55E]/10 text-[#22C55E] text-[8px] font-black px-3 py-1 rounded-full h-fit uppercase"
                    style={{
                      paddingTop: "4px",
                      paddingBottom: "4px",
                      paddingRight: "12px",
                      paddingLeft: "12px",
                    }}
                  >
                    In Progress
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ marginBottom: "8px" }}
                >
                  Convolutional Neural Networks Simulation
                </h3>
                <div
                  className="space-y-2 mb-8"
                  style={{ marginBottom: "32px" }}
                >
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-medium">
                    <Clock size={12} /> 120 Minutes Duration
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-medium">
                    <ShieldAlert size={12} /> Level 4 Security Clearance
                  </div>
                </div>
                <button
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                  className="w-full py-4 bg-[#00E5FF] text-[#080C0F] rounded-xl font-black uppercase text-[10px] tracking-widest hover:scale-[1.02] transition-transform"
                >
                  Resume Simulation
                </button>
              </div>

              {/* Locked/Upcoming Card */}
              <div
                className="bg-[#0D1117]/50 border border-white/5 rounded-4xl grayscale opacity-50"
                style={{ padding: "32px" }}
              >
                <div
                  className="flex justify-between mb-8"
                  style={{ marginBottom: "2rem" }}
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/20">
                    <Lock size={24} />
                  </div>
                  <span
                    className="bg-white/5 text-white/40 text-[8px] font-black px-3 py-1 rounded-full h-fit uppercase"
                    style={{
                      paddingTop: "4px",
                      paddingBottom: "4px",
                      paddingRight: "12px",
                      paddingLeft: "12px",
                    }}
                  >
                    Upcoming
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-white/40 mb-2"
                  style={{ marginBottom: "8px" }}
                >
                  Advanced Quantum Heuristics
                </h3>
                <div
                  className="space-y-2 mb-8"
                  style={{ marginBottom: "32px" }}
                >
                  <div className="flex items-center gap-2 text-white/20 text-[10px] font-medium">
                    <Clock size={12} /> Tomorrow, 09:00 AM
                  </div>
                </div>
                <button
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                  className="w-full py-4 bg-white/5 border border-white/10 text-white/20 rounded-xl font-black uppercase text-[10px] tracking-widest cursor-not-allowed"
                >
                  Locked
                </button>
              </div>
            </div>
          </section>

          {/* Academic History Table */}
          <section>
            <h2
              className="flex items-center gap-3 text-lg font-bold text-white mb-8"
              style={{ marginBottom: "32px" }}
            >
              <CheckCircle size={18} className="text-[#22C55E]" />
              Academic History
            </h2>
            <div className="bg-[#0D1117] border border-white/5 rounded-4xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 text-[10px] font-black text-white/20 uppercase tracking-widest">
                    <th style={{ padding: "24px 32px" }}>Assessment Title</th>
                    <th style={{ padding: "24px 32px" }}>Status</th>
                    <th style={{ padding: "24px 32px" }}>Score</th>
                    <th style={{ padding: "24px 32px" }}>Action</th>
                  </tr>
                </thead>
                <tbody className="text-white text-sm">
                  {[
                    {
                      title: "Neural Architecture Search",
                      status: "GRADED",
                      score: "98/100",
                      color: "text-[#22C55E]",
                    },
                    {
                      title: "Ethical AI Frameworks",
                      status: "SUBMITTED",
                      score: "PENDING",
                      color: "text-white/40",
                    },
                    {
                      title: "Vector Database Theory",
                      status: "GRADED",
                      score: "91/100",
                      color: "text-[#22C55E]",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-white/2 transition-colors"
                    >
                      <td
                        className="font-bold"
                        style={{ padding: "24px 32px" }}
                      >
                        {row.title}
                      </td>
                      <td style={{ padding: "24px 32px" }}>
                        <span className={`text-[9px] font-black ${row.color}`}>
                          ● {row.status}
                        </span>
                      </td>
                      <td
                        className="font-mono font-bold"
                        style={{ padding: "24px 32px" }}
                      >
                        {row.score}
                      </td>
                      <td style={{ padding: "24px 32px" }}>
                        <button className="text-[10px] font-black uppercase text-white/20 hover:text-[#00E5FF]">
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* 4. Right Column: Focus Mode & Integrity */}
        <div className="col-span-4 space-y-8">
          {/* Focus Mode Controller */}
          <div
            className="bg-[#0D1117] border border-white/10 rounded-4xl"
            style={{ padding: "32px" }}
          >
            <div
              className="flex items-center justify-between mb-8"
              style={{ marginBottom: "32px" }}
            >
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-[#00E5FF]" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  Focus Mode Active
                </span>
              </div>
              <span className="text-[8px] text-white/20 font-mono">
                V 2.0.4
              </span>
            </div>

            <div
              className="bg-[#05070A] rounded-2xl text-center border border-white/5"
              style={{ padding: "24px", marginBottom: "32px" }}
            >
              <div
                className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] mb-2"
                style={{ marginBottom: "8px" }}
              >
                Secure Uplink Status
              </div>
              <div className="text-[11px] font-black text-[#22C55E] tracking-widest">
                STABLE / ENCRYPTED
              </div>
            </div>

            <div className="text-center" style={{ marginBottom: "40px" }}>
              <div
                className="text-[10px] font-black text-white/20 uppercase mb-2"
                style={{ marginBottom: "8px" }}
              >
                Time Remaining
              </div>
              <div className="text-5xl font-black text-white font-mono tracking-tighter">
                00:48:22
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold border transition-all ${
                    i < 3
                      ? "bg-[#00E5FF] text-[#080C0F] border-[#00E5FF]"
                      : "bg-white/5 text-white/20 border-white/5 hover:border-white/20"
                  }`}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </div>
              ))}
            </div>
          </div>

          {/* Integrity Protocol */}
          <div
            className="bg-[#161B22]/50 border border-red-500/10 rounded-4xl"
            style={{ padding: "32px" }}
          >
            <h3
              className="flex items-center gap-3 text-sm font-black text-white uppercase tracking-widest mb-6"
              style={{ marginBottom: "24px" }}
            >
              <ShieldAlert size={18} className="text-red-500/50" />
              Integrity Protocol
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[11px] text-white/40 leading-relaxed">
                <CheckCircle size={14} className="text-[#00E5FF] shrink-0" />
                Neural biometric authentication required for all active
                simulation sequences.
              </li>
              <li className="flex gap-3 text-[11px] text-white/40 leading-relaxed">
                <CheckCircle size={14} className="text-[#00E5FF] shrink-0" />
                Real-time eye tracking and attention monitoring enabled.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
