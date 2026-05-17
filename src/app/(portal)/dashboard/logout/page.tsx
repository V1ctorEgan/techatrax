"use client";
import { ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#05070A]">
      {/* 1. Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 blur-sm scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#05070A]/80 to-[#05070A] z-10" />

      {/* 2. Logout Modal */}
      <div
        className="relative z-20 w-full max-w-120 bg-[#0D1117]/80 backdrop-blur-xl border border-white/10 rounded-4xl text-center shadow-2xl"
        style={{ padding: "64px 48px" }}
      >
        {/* Security Icon */}
        <div
          className="flex justify-center mb-10"
          style={{ marginBottom: "40px" }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full border border-[#00E5FF]/30 flex items-center justify-center bg-[#00E5FF]/5 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              <ShieldCheck size={36} className="text-[#00E5FF]" />
            </div>
            {/* Decorative data points */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#22C55E] rounded-full border-2 border-[#0D1117]" />
          </div>
        </div>

        {/* Content */}
        <h1
          className="text-3xl font-bold text-white mb-6"
          style={{ marginBottom: "24px" }}
        >
          Securely End Session?
        </h1>
        <p
          className="text-white/40 text-sm leading-relaxed mb-12"
          style={{ marginBottom: "48px" }}
        >
          You will be logged out of your{" "}
          <span className="text-[#00E5FF] font-bold">
            neural command center
          </span>
          . All active research threads will be encrypted.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <button
            onClick={() => router.push("/login")}
            className="w-full py-4 bg-[#00E5FF] text-[#080C0F] rounded-xl font-black uppercase tracking-[0.2em] text-[11px] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            Sign Out
          </button>

          <button
            onClick={() => router.back()}
            className="w-full py-4 bg-transparent border border-white/10 text-white/60 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* 3. Footer Branding */}
      <div className="absolute bottom-10 right-10 z-20">
        <div className="text-right">
          <div className="text-[#00E5FF] font-black text-xl tracking-tighter uppercase italic leading-none">
            Techatrax
          </div>
          <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mt-1">
            Technical Core
          </div>
        </div>
      </div>
    </div>
  );
}
