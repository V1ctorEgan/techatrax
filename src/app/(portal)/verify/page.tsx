"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Mail, RotateCcw, ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function VerifyNeuralIdentity() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("student@techatrax.ai");
  const [resendStatus, setResendStatus] = useState<
    "idle" | "loading" | "sent" | "error"
  >("idle");
  const [countdown, setCountdown] = useState(0);

  // Get the email from the current session
  useEffect(() => {
    const getEmail = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user?.email) setEmail(user.email);
    };
    getEmail();
  }, []);

  // Poll for email verification every 3 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user?.email_confirmed_at) {
        clearInterval(interval);
        router.push("/portal/verified");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Countdown timer for resend button
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResend = async () => {
    if (countdown > 0) return;
    setResendStatus("loading");

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/portal/verified`,
      },
    });

    if (error) {
      setResendStatus("error");
      setTimeout(() => setResendStatus("idle"), 3000);
      return;
    }

    setResendStatus("sent");
    setCountdown(60); // 60 second cooldown
    setTimeout(() => setResendStatus("idle"), 3000);
  };

  const handleChangeEmail = () => {
    router.push("/portal/login");
  };

  const handleBack = () => {
    router.push("/portal/login");
  };

  return (
    <main
      className="min-h-screen bg-[#080C0F] flex items-center justify-center"
      style={{ padding: "24px" }}
    >
      {/* Background Decorative Element */}
      <div className="absolute top-10 right-10 opacity-20">
        <div className="w-24 h-24 border border-[#00E5FF]/30 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-16 h-16 border border-[#00E5FF]/20 rounded-full" />
        </div>
      </div>

      <div
        className="w-full max-w-lg bg-[#0D1117] border border-white/5 text-center shadow-2xl"
        style={{ padding: "64px 48px", borderRadius: "32px" }}
      >
        {/* Shield Icon with Glow */}
        <div className="flex justify-center" style={{ marginBottom: "48px" }}>
          <div className="w-20 h-20 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full bg-[#00E5FF]/20 blur-xl animate-pulse" />
            <ShieldCheck size={36} className="text-[#00E5FF] relative z-10" />
          </div>
        </div>

        <h1
          className="text-4xl font-bold text-white leading-tight"
          style={{ marginBottom: "24px" }}
        >
          Verify Your Neural Identity
        </h1>

        <p
          className="text-white/60 text-sm leading-relaxed"
          style={{ marginBottom: "8px" }}
        >
          A verification link has been sent to
        </p>
        <p
          className="text-[#00E5FF] font-bold text-base"
          style={{ marginBottom: "32px" }}
        >
          {email}
        </p>

        <p
          className="text-white/40 text-xs leading-relaxed"
          style={{ marginBottom: "48px", padding: "0 20px" }}
        >
          Click the link in your email to verify your account, then you will be
          logged in automatically.
        </p>

        {/* Status Indicator */}
        <div
          className="flex items-center justify-center"
          style={{ gap: "12px", marginBottom: "64px" }}
        >
          <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
          <span className="text-[#22C55E] text-[10px] font-black uppercase tracking-[0.2em]">
            Waiting for Verification...
          </span>
        </div>

        {/* Actions */}
        <div className="space-y-6">
          <button
            onClick={handleResend}
            disabled={resendStatus === "loading" || countdown > 0}
            className="w-full py-4 bg-transparent border border-white/10 rounded-xl text-white/60 text-xs font-black uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <RotateCcw
              size={14}
              className={resendStatus === "loading" ? "animate-spin" : ""}
            />
            {resendStatus === "sent"
              ? "✓ Email Sent!"
              : resendStatus === "error"
                ? "Failed — Try Again"
                : countdown > 0
                  ? `Resend in ${countdown}s`
                  : "Resend Verification Email"}
          </button>

          <button
            onClick={handleChangeEmail}
            className="flex items-center justify-center gap-2 mx-auto text-[9px] font-black text-white/20 uppercase tracking-[0.2em] hover:text-[#00E5FF] transition-colors"
          >
            <Mail size={12} />
            Change Email Address
          </button>
        </div>

        {/* Back link */}
        <button
          onClick={handleBack}
          className="flex items-center justify-center gap-2 mx-auto text-[9px] font-black text-white/20 uppercase tracking-[0.2em] hover:text-white transition-colors"
          style={{ marginTop: "32px" }}
        >
          <ArrowLeft size={12} />
          Back to Login
        </button>
      </div>
    </main>
  );
}
