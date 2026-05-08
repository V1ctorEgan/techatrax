"use client";
import { useState } from "react";

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enrolling:", formData);
    alert("Enrollment Initiated!");
  };

  return (
    <section
      className="bg-[#080C0F] flex justify-center items-center"
      style={{
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div className="">
        {/* Section Header */}
        <div className="text-center " style={{ marginBottom: "48px" }}>
          <h2
            className="text-white text-xl font-bold"
            style={{ marginBottom: "12px" }}
          >
            Ready to Start?
          </h2>
          <p className="text-white/40 text-sm  mx-auto leading-relaxed w-full ">
            Submit your details to receive the full curriculum catalog and
            schedule a consultation with our faculty.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0D1117] border border-white/5 rounded-3xl"
          style={{ padding: "42px" }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "24px", marginBottom: "24px" }}
          >
            {/* Full Name */}
            <div className="flex flex-col">
              <label
                className="text-[#00E5FF] text-[10px] font-black uppercase tracking-widest"
                style={{ marginBottom: "8px" }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-[#080C0F] border border-white/5 rounded-xl text-white outline-none focus:border-[#00E5FF]/50 transition-colors"
                style={{ padding: "16px" }}
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label
                className="text-[#00E5FF] text-[10px] font-black uppercase tracking-widest"
                style={{ marginBottom: "8px" }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@institute.ai"
                className="bg-[#080C0F] border border-white/5 rounded-xl text-white outline-none focus:border-[#00E5FF]/50 transition-colors"
                style={{ padding: "16px" }}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col" style={{ marginBottom: "40px" }}>
            <label
              className="text-[#00E5FF] text-[10px] font-black uppercase tracking-widest"
              style={{ marginBottom: "8px" }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="bg-[#080C0F] border border-white/5 rounded-xl text-white outline-none focus:border-[#00E5FF]/50 transition-colors"
              style={{ padding: "16px" }}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00E5FF] hover:bg-[#00D4AA] text-[#080C0F] font-black py-4 rounded-xl text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,170,0.4)]"
            style={{ paddingTop: "16px", paddingBottom: "16px" }}
          >
            Initiate Enrollment
          </button>
        </form>
      </div>
    </section>
  );
}
