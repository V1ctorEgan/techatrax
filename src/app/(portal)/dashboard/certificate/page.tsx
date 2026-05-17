"use client";
import {
  ShieldCheck,
  Download,
  Share2,
  Lock,
  Award,
  CheckCircle2,
} from "lucide-react";

const COMPLETED_CERTS = [
  {
    id: "tx-1",
    title: "Advanced Neural Architectures",
    issueDate: "Oct 2026",
    verifyCode: "TX-993-VSRFY",
  },
  {
    id: "tx-2",
    title: "Quantum Heuristics",
    issueDate: "Sep 2026",
    verifyCode: "TX-993-VSRFY",
  },
];

export default function CertificationsPage() {
  return (
    <div style={{ padding: "40px" }}>
      {/* 1. Header Section */}
      <header style={{ marginBottom: "40px" }}>
        <h1
          className="text-4xl font-bold text-white mb-2"
          style={{ marginBottom: "8px" }}
        >
          Neural Certifications
        </h1>
        <p className="text-white/40 text-sm">
          Official recognition of your architectural mastery.
        </p>
      </header>

      {/* 2. Authenticity Verification Input */}
      <div className="max-w-md mb-12" style={{ marginBottom: "48px" }}>
        <div className="relative">
          <ShieldCheck
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
            size={16}
          />
          <input
            type="text"
            placeholder="Verify Authenticity (Enter tx-code...)"
            style={{
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingRight: "16px",
              paddingLeft: "48px",
            }}
            className="w-full bg-[#0D1117] border border-white/5 rounded-lg py-3 pl-12 pr-4 text-[11px] text-white/60 placeholder:text-white/20 focus:border-[#00E5FF]/30 outline-none transition-all"
          />
        </div>
      </div>

      {/* 3. Certificate Grid */}
      <div
        className="grid grid-cols-2 gap-8 mb-12"
        style={{ marginBottom: "48px" }}
      >
        {COMPLETED_CERTS.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#0D1117] border border-white/5 rounded-3xl overflow-hidden"
            style={{ padding: "40px" }}
          >
            <div
              className="flex justify-between items-start mb-12"
              style={{ marginBottom: "48px" }}
            >
              <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                Techatrax
              </div>
              <div className="w-10 h-10 bg-[#00E5FF]/10 rounded-full flex items-center justify-center border border-[#00E5FF]/20">
                <Award size={20} className="text-[#00E5FF]" />
              </div>
            </div>

            <div className="mb-12" style={{ marginBottom: "48px" }}>
              <div
                className="text-[8px] font-black text-[#00E5FF] uppercase tracking-widest mb-2"
                style={{ marginBottom: "8px" }}
              >
                Official Certification
              </div>
              <h2 className="text-3xl font-bold text-white leading-tight">
                {cert.title}
              </h2>
            </div>

            <div className="flex gap-12 mb-12" style={{ marginBottom: "48px" }}>
              <div>
                <div
                  className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1"
                  style={{ marginBottom: "4px" }}
                >
                  Issue Date
                </div>
                <div className="text-[11px] font-bold text-white/80">
                  {cert.issueDate}
                </div>
              </div>
              <div>
                <div
                  className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1"
                  style={{ marginBottom: "4px" }}
                >
                  Verification Code
                </div>
                <div className="text-[11px] font-bold text-white/80">
                  {cert.verifyCode}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-[#00E5FF] text-[#080C0F] rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all">
                <Download size={14} /> Download PDF
              </button>
              <button className="w-14 py-4 bg-white/5 border border-white/10 text-white rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Pending / Locked Certification Section */}
      <section
        className="bg-[#0D1117] border border-white/5 rounded-4xl"
        style={{ padding: "48px" }}
      >
        <div className="flex justify-between items-center">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 px-3 py-1 rounded-full mb-6"
              style={{
                marginBottom: "24px",
                paddingTop: "4px",
                paddingBottom: "4px",
                paddingRight: "12px",
                paddingLeft: "12px",
              }}
            >
              <div className="w-1 h-1 bg-[#22C55E] rounded-full" />
              <span className="text-[#22C55E] text-[8px] font-black uppercase">
                In-Review
              </span>
            </div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ marginBottom: "1rem" }}
            >
              Neural Synthesis Mastery
            </h3>
            <p
              className="text-white/40 text-sm mb-8 leading-relaxed"
              style={{ marginBottom: "32px" }}
            >
              Complete the final module of the Synthetic Logic course to unlock
              your advanced architecture master certificate.
            </p>

            <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#22C55E] w-[88%]" />
              </div>
              <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                <span className="text-white/20">Progress 88%</span>
                <span className="text-white/40">Step 4/5 Pending</span>
              </div>
            </div>
          </div>

          <div className="w-64 h-40 bg-[#05070A] border border-white/5 rounded-2xl flex items-center justify-center relative opacity-50">
            <Lock size={32} className="text-white/10" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0D1117] to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
