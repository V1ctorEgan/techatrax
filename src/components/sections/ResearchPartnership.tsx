"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type FormData = {
  fullName: string;
  organization: string;
  researchArea: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ResearchPartnership() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    organization: "",
    researchArea: "Neural Architectures",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic validation
    if (!formData.fullName.trim() || !formData.organization.trim()) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    const { error } = await supabase.from("partnership_inquiries").insert([
      {
        full_name: formData.fullName.trim(),
        organization: formData.organization.trim(),
        research_area: formData.researchArea,
      },
    ] as any);

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setFormData({
      fullName: "",
      organization: "",
      researchArea: "Neural Architectures",
    });
  };

  return (
    <section
      className="bg-[#080C0F]"
      style={{
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        className="max-w-6xl mx-auto bg-[#0D1117] border border-white/5 rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center"
        style={{ padding: "60px" }}
      >
        {/* Left Column: Content & Stats */}
        <div className="flex-1" style={{ paddingRight: "40px" }}>
          <h2
            className="text-white text-5xl font-bold"
            style={{ marginBottom: "32px" }}
          >
            Partner?
          </h2>
          <p
            className="text-white/50 text-lg leading-relaxed"
            style={{ marginBottom: "48px", maxWidth: "480px" }}
          >
            Techatrax collaborates with industry leaders and academic
            institutions to push the boundaries of what&apos;s possible. Join
            our research ecosystem today.
          </p>

          <div className="flex items-center" style={{ gap: "48px" }}>
            <div>
              <div
                className="text-[#00D4AA] text-3xl font-black"
                style={{ marginBottom: "4px" }}
              >
                42+
              </div>
              <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                Active Labs
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <div
                className="text-[#00E5FF] text-3xl font-black"
                style={{ marginBottom: "4px" }}
              >
                150+
              </div>
              <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                Publications
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="w-full md:w-115">
          <div
            className="bg-[#161B22]/50 border border-white/5 rounded-3xl backdrop-blur-xl"
            style={{ padding: "40px" }}
          >
            {/* Success state */}
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center text-center"
                style={{ gap: "16px", minHeight: "280px" }}
              >
                <div className="w-16 h-16 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h3 className="text-white text-xl font-bold">
                  Inquiry Submitted
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Thank you. Our research team will reach out to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#00E5FF] text-xs font-black uppercase tracking-widest hover:text-white transition-colors"
                  style={{ marginTop: "8px" }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col"
                style={{ gap: "24px" }}
              >
                <div>
                  <label
                    className="text-white/40 text-[10px] font-black uppercase tracking-widest block"
                    style={{ marginBottom: "10px" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. John Doe"
                    required
                    className="w-full bg-[#080C0F] border border-white/5 rounded-xl text-white outline-none focus:border-[#00E5FF]/40 transition-all"
                    style={{ padding: "16px" }}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    className="text-white/40 text-[10px] font-black uppercase tracking-widest block"
                    style={{ marginBottom: "10px" }}
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Institute / Corp"
                    required
                    className="w-full bg-[#080C0F] border border-white/5 rounded-xl text-white outline-none focus:border-[#00E5FF]/40 transition-all"
                    style={{ padding: "16px" }}
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    className="text-white/40 text-[10px] font-black uppercase tracking-widest block"
                    style={{ marginBottom: "10px" }}
                  >
                    Research Area
                  </label>
                  <select
                    className="w-full bg-[#080C0F] border border-white/5 rounded-xl text-white outline-none appearance-none cursor-pointer"
                    style={{ padding: "16px" }}
                    value={formData.researchArea}
                    onChange={(e) =>
                      setFormData({ ...formData, researchArea: e.target.value })
                    }
                  >
                    <option>Neural Architectures</option>
                    <option>Embedded Systems</option>
                    <option>Quantum Computing</option>
                  </select>
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
                  className="w-full bg-[#00E5FF] hover:bg-[#00D4AA] text-[#080C0F] font-black rounded-xl uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(0,229,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    padding: "18px",
                    marginTop: "12px",
                    fontSize: "12px",
                  }}
                >
                  {status === "loading" ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
