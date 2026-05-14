"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Server, Zap, Lock } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function NeuralIdentityVerified() {
  const router = useRouter();
  const supabase = createClient();

  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Confirm the session is valid on this page
    const confirmSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // If no session, send back to login
      if (!session) {
        router.push("/login");
        return;
      }
    };

    confirmSession();

    // Progress bar — fills over 3 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Redirect to dashboard after 3 seconds
    const redirectTimer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(countdownInterval);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#080C0F] flex items-center justify-center relative overflow-hidden">
      {/* Background Telemetry Data */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 space-y-8 opacity-20">
        <div>
          <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30 mb-1">
            Secure Channel
          </div>
          <div className="text-[10px] font-bold text-white/60 flex items-center gap-2">
            <Lock size={10} /> TLS_1.3_ENCRYPTED
          </div>
        </div>
        <div>
          <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30 mb-1">
            Latency Sync
          </div>
          <div className="text-[10px] font-bold text-white/60 flex items-center gap-2">
            <Zap size={10} /> 0.0024ms
          </div>
        </div>
        <div>
          <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30 mb-1">
            Neural Bitrate
          </div>
          <div className="text-[10px] font-bold text-white/60">12.4 TB/S</div>
        </div>
      </div>

      {/* Main Verification Card */}
      <div
        className="w-full max-w-2xl bg-[#0D1117] border border-white/5 relative shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        style={{ padding: "80px 48px", borderRadius: "32px" }}
      >
        <div className="absolute top-8 right-8 text-white/10">
          <Server size={24} />
        </div>

        {/* Verified Badge */}
        <div className="flex justify-center" style={{ marginBottom: "48px" }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#22C55E]/30 blur-2xl animate-pulse" />
            <div className="w-24 h-24 rounded-full border-2 border-[#22C55E] flex items-center justify-center bg-[#080C0F] relative z-10">
              <ShieldCheck size={48} className="text-[#22C55E]" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1
            className="text-5xl font-bold text-white"
            style={{ marginBottom: "16px" }}
          >
            Neural Identity Verified
          </h1>
          <p
            className="text-white/40 text-sm font-medium"
            style={{ marginBottom: "48px" }}
          >
            Initializing student workspace...
          </p>

          {/* Progress Bar */}
          <div
            className="max-w-md mx-auto h-1.5 bg-white/5 rounded-full overflow-hidden"
            style={{ marginBottom: "48px" }}
          >
            <div
              className="h-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(to right, rgba(34,197,94,0.5), #22C55E)",
              }}
            />
          </div>

          {/* Redirect indicator */}
          <div className="flex justify-center">
            <div
              className="inline-flex items-center bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full"
              style={{ padding: "12px 24px", gap: "10px" }}
            >
              <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
              <span className="text-[#22C55E] text-[10px] font-black uppercase tracking-[0.2em]">
                Redirecting to Dashboard in {countdown}s...
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
