"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { SOCIAL_LINKS } from "@/lib/constants";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const supabase = createClient();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setErrorMsg("Please fill in your name, email and message.");
      return;
    }

    setStatus("loading");

    const { error } = await supabase.from("contact_messages").insert([
      {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.phone.trim() || null,
        message: formData.message.trim(),
      },
    ] as any);

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main
      className="bg-[#080C0F] text-white min-h-screen"
      style={{
        paddingTop: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingBottom: "80px",
      }}
    >
      <div className="mx-auto">
        {/* Top Header */}
        <div className="text-center mb-20" style={{ marginBottom: "80px" }}>
          <div
            style={{ paddingLeft: "12px", paddingRight: "12px" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#00D4AA]">
              Neural Connection Online
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ marginBottom: "16px" }}
          >
            Let&apos;s Build AI Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Form */}
          <div className="space-y-10">
            <div>
              <h1
                className="text-5xl font-bold mb-6"
                style={{ marginBottom: "24px" }}
              >
                Get in Touch
              </h1>
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                Initiate a direct link with our lead engineers and research
                fellows. Expect a response within 12 neural cycles.
              </p>
            </div>

            {/* Success state */}
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center text-center bg-[#0D1117] border border-white/5 rounded-2xl"
                style={{ gap: "16px", padding: "60px 40px" }}
              >
                <div className="w-16 h-16 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 flex items-center justify-center text-2xl text-[#00D4AA]">
                  ✓
                </div>
                <h3 className="text-white text-xl font-bold">Message Sent</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  We&apos;ve received your message and will respond within 24
                  hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#00E5FF] text-xs font-black uppercase tracking-widest hover:text-white transition-colors"
                  style={{ marginTop: "8px" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Identity String"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-white/10 py-3 px-4 text-[#080C0F] outline-none focus:ring-2 focus:ring-[#00E5FF]/50 transition-all"
                      style={{
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="neural@network.link"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-white/10 py-3 px-4 text-[#080C0F] outline-none focus:ring-2 focus:ring-[#00E5FF]/50 transition-all"
                      style={{
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 000 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-white/10 py-3 px-4 text-[#080C0F] outline-none focus:ring-2 focus:ring-[#00E5FF]/50 transition-all"
                    style={{
                      paddingLeft: "16px",
                      paddingRight: "16px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Brief project scope or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 rounded-md py-3 px-4 text-white outline-none focus:border-[#00E5FF] transition-all resize-none"
                    style={{
                      paddingLeft: "16px",
                      paddingRight: "16px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                  />
                </div>

                {/* Error message */}
                {errorMsg && (
                  <p className="text-red-400 text-xs tracking-wide">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ paddingTop: "16px", paddingBottom: "16px" }}
                  className="w-full py-4 bg-[#00E5FF] text-[#080C0F] font-black uppercase tracking-widest text-xs rounded-md hover:bg-[#00D4AA] transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Info & Map */}
          <div className="flex flex-col justify-center space-y-12">
            {/* Map */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#0D1117] shadow-2xl">
              <div className="absolute inset-0 opacity-40 bg-[url('/images/map-grid.png')] bg-cover" />
              <div
                className="absolute bottom-6 left-6 flex items-center gap-3 bg-[#080C0F]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg"
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                <span className="text-[10px] font-bold tracking-wider">
                  Victoria Island Nucleus, Lagos
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Nexus Location</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 text-[11px] text-[#00D4AA] leading-relaxed">
                    <MapPin size={14} className="shrink-0" />
                    <span>
                      Port Harcourt,
                      <br />
                      Nigeria, West Africa
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#00D4AA]">
                    <Phone size={14} />
                    <span>+234 8162878498</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#00D4AA]">
                    <Mail size={14} />
                    <span>techatrax12@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Digital Presence</h3>
                <div className="flex gap-4">
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all cursor-pointer"
                  >
                    IN
                  </a>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all cursor-pointer"
                  >
                    X
                  </a>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all cursor-pointer"
                  >
                    GH
                  </a>
                </div>
                <p className="text-[10px] text-white/30 italic leading-relaxed">
                  Operational transparency and neural telemetry provided across
                  all encrypted channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
