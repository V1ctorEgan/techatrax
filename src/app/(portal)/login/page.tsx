"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  Shield,
  AtSign,
  Key,
  User,
  Phone,
  ChevronDown,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type View = "login" | "signup";
type Status = "idle" | "loading" | "error";

export default function AuthPage() {
  const router = useRouter();
  const supabase = createClient();

  const [view, setView] = useState<View>("login");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [specialization, setSpecialization] = useState(
    "Artificial Intelligence",
  );

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setErrorMsg("");
    setStatus("idle");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email.trim() || !password) {
      setErrorMsg("Please enter your email and password.");
      return;
    }

    setStatus("loading");

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setStatus("error");
      setErrorMsg(
        error.message === "Invalid login credentials"
          ? "Incorrect email or password."
          : error.message,
      );
      return;
    }

    router.push("/dashboard");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim() || !email.trim() || !password) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setStatus("loading");

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: fullName.trim(),
          phone: phone.trim(),
          specialization,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/verified`,
      },
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }

    router.push("/verify");
  };

  const switchView = (v: View) => {
    setView(v);
    resetForm();
  };

  return (
    <main className="min-h-screen bg-[#080C0F] text-white flex flex-col lg:flex-row">
      {/* LEFT SIDE: Brand & Data Visualization */}
      <section
        className="flex-1 relative overflow-hidden flex flex-col justify-center"
        style={{ padding: "64px" }}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#00E5FF]/5 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-lg">
          <h1
            className="text-6xl font-bold leading-tight"
            style={{ marginBottom: "64px" }}
          >
            The Future of Intelligence Starts Here
          </h1>

          {/* Grid of Widgets */}
          <div className="grid grid-cols-2" style={{ gap: "20px" }}>
            {/* Neural Sync Chart */}
            <div
              className="col-span-2 bg-[#0D1117]/80 border border-white/5 rounded-2xl backdrop-blur-md"
              style={{ padding: "24px" }}
            >
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: "32px" }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  Neural Sync Activity
                </span>
                <Activity size={16} className="text-[#00E5FF]" />
              </div>
              <div
                className="flex items-end justify-between h-32"
                style={{ gap: "8px" }}
              >
                {[40, 70, 50, 85, 45, 95, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all bg-white/10"
                    style={{
                      height: `${h}%`,
                      backgroundColor: h > 80 ? "#00E5FF" : "",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* System Status */}
            <div
              className="bg-[#0D1117]/80 border border-white/5 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center"
              style={{ padding: "24px" }}
            >
              <span
                className="text-[9px] font-black uppercase tracking-[0.2em] text-[#22C55E]"
                style={{ marginBottom: "16px" }}
              >
                System Status
              </span>
              <div className="relative w-16 h-16 rounded-full border-2 border-[#22C55E]/20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-[#22C55E] border-t-transparent animate-spin" />
                <span className="text-[10px] font-bold text-[#22C55E]">
                  LIVE
                </span>
              </div>
            </div>

            {/* Neural Nodes */}
            <div
              className="bg-[#0D1117]/80 border border-white/5 rounded-2xl backdrop-blur-md"
              style={{ padding: "24px" }}
            >
              <span
                className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Neural Nodes
              </span>
              <div className="space-y-3">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/20 w-3/4" />
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/20 w-1/2" />
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/20 w-2/3" />
                </div>
              </div>
            </div>

            {/* Security Protocol */}
            <div
              className="col-span-2 bg-[#0D1117]/80 border border-white/5 rounded-2xl backdrop-blur-md flex items-center"
              style={{ padding: "20px" }}
            >
              <div
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center"
                style={{ marginRight: "16px" }}
              >
                <Shield size={18} className="text-white/60" />
              </div>
              <div>
                <div className="text-[11px] font-bold">
                  Security Protocol Alpha
                </div>
                <div className="text-[9px] text-white/30 uppercase tracking-widest">
                  Encryption Level: Quantum-7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE: Auth Forms */}
      <section
        className="flex-1 bg-[#0D1117]/30 flex flex-col items-center justify-center"
        style={{ padding: "40px" }}
      >
        <div
          className="w-full max-w-md bg-[#0D1117] border border-white/5 shadow-2xl"
          style={{ padding: "48px", borderRadius: "32px" }}
        >
          {/* Tabs */}
          <div
            className="flex border-b border-white/5"
            style={{ marginBottom: "40px" }}
          >
            {(["login", "signup"] as View[]).map((v) => (
              <button
                key={v}
                onClick={() => switchView(v)}
                className="flex-1 text-sm font-bold transition-all"
                style={{
                  color: view === v ? "white" : "rgba(255,255,255,0.3)",
                  borderBottom:
                    view === v ? "2px solid white" : "2px solid transparent",
                  paddingBottom: "1rem",
                }}
              >
                {v === "login" ? "Login" : "Sign Up"}
              </button>
            ))}
          </div>

          <form
            onSubmit={view === "login" ? handleLogin : handleSignup}
            className="space-y-6"
          >
            {/* Full Name — signup only */}
            {view === "signup" && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#080C0F] border border-white/10 rounded-xl text-sm outline-none focus:border-[#00E5FF] transition-all"
                    style={{ padding: "1rem 1rem 1rem 3rem" }}
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                Neural ID (Email)
              </label>
              <div className="relative">
                <AtSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="agent@techatrax.ai"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#080C0F] border border-white/10 rounded-xl text-sm outline-none focus:border-[#00E5FF] transition-all"
                  style={{ padding: "1rem 1rem 1rem 3rem" }}
                />
              </div>
            </div>

            {/* Phone — signup only */}
            {view === "signup" && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                  Contact Protocol (Phone)
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    size={16}
                  />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#080C0F] border border-white/10 rounded-xl text-sm outline-none focus:border-[#00E5FF] transition-all"
                    style={{ padding: "1rem 1rem 1rem 3rem" }}
                  />
                </div>
              </div>
            )}

            {/* Password fields */}
            <div
              className={
                view === "signup" ? "grid grid-cols-2 gap-4" : "space-y-2"
              }
            >
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                    {view === "signup"
                      ? "Security Key"
                      : "Security Key (Password)"}
                  </label>
                  {view === "login" && (
                    <span
                      onClick={() => router.push("/forgot-password")}
                      className="text-[9px] text-white/30 hover:text-[#00E5FF] cursor-pointer transition-colors"
                    >
                      Forgot Password?
                    </span>
                  )}
                </div>
                <div className="relative">
                  <Key
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    size={16}
                  />
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#080C0F] border border-white/10 rounded-xl text-sm outline-none focus:border-[#00E5FF] transition-all"
                    style={{ padding: "1rem 1rem 1rem 3rem" }}
                  />
                </div>
              </div>

              {view === "signup" && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                    Confirm Key
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-[#080C0F] border border-white/10 rounded-xl text-sm outline-none focus:border-[#00E5FF] transition-all"
                    style={{ padding: "1rem" }}
                  />
                </div>
              )}
            </div>

            {/* Specialization — signup only */}
            {view === "signup" && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                  Specialization Interest
                </label>
                <div className="relative">
                  <select
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="w-full bg-[#080C0F] border border-white/10 rounded-xl text-sm outline-none appearance-none focus:border-[#00E5FF] transition-all cursor-pointer"
                    style={{ padding: "1rem" }}
                  >
                    <option>Artificial Intelligence</option>
                    <option>Robotics Engineering</option>
                    <option>Computational Physics</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
            )}

            {/* Error message */}
            {errorMsg && (
              <p className="text-red-400 text-xs tracking-wide">{errorMsg}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: view === "login" ? "#00E5FF" : "#00D4AA",
                color: "#080C0F",
                marginTop: "1rem",
                padding: "1rem",
                boxShadow:
                  view === "login"
                    ? "0 0 20px rgba(0,229,255,0.2)"
                    : "0 0 20px rgba(0,212,170,0.2)",
              }}
            >
              {status === "loading"
                ? "Processing..."
                : view === "login"
                  ? "Initialize Session"
                  : "Create Account"}
            </button>
          </form>

          <p
            className="text-center text-[9px] text-white/20 leading-relaxed italic"
            style={{ marginTop: "32px" }}
          >
            Authentication required. New recruits will undergo <br /> OTP
            verification via encrypted channels.
          </p>
        </div>
      </section>
    </main>
  );
}
