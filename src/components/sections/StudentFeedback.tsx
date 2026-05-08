"use client";
import { useState } from "react";

const FEEDBACKS = [
  {
    name: "Elena Vance",
    role: "ML BATCH 1 ALUMNI",
    quote:
      "The level of technical depth at Techatrax is unparalleled. We weren't just running scripts; we were building the architectures from scratch. The hands-on lab sessions changed my entire career trajectory.",
  },
  {
    name: "Marcus Thorne",
    role: "EMBEDDED AI STUDENT",
    quote:
      "Transitioning from standard engineering to Embedded AI felt daunting until I joined this course. The mentors are literal pioneers in the field, and the glass-morphic lab environment makes every session feel like the future.",
  },
];

export default function StudentFeedback() {
  return (
    <section
      className="bg-[#080C0F]"
      style={{
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className="flex flex-col items-center"
          style={{ marginBottom: "64px" }}
        >
          <h2
            className="text-white text-xs font-black uppercase tracking-[0.4em]"
            style={{ marginBottom: "12px" }}
          >
            Student Feedback
          </h2>
          {/* The Green Accent Line from image_fd3a3c.jpg */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(to right, #00D4AA, #00E5FF)",
              borderRadius: "99px",
            }}
          />
        </div>

        {/* Cards Container */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "24px" }}
        >
          {FEEDBACKS.map((item, i) => (
            <div
              key={i}
              className="bg-[#11161D] border border-white/5 rounded-2xl relative overflow-hidden"
              style={{ padding: "40px" }}
            >
              {/* Giant Background Quote Mark */}
              <span
                className="absolute text-white/5 font-serif select-none"
                style={{
                  fontSize: "120px",
                  right: "30px",
                  top: "10px",
                  lineHeight: 1,
                }}
              >
                ”
              </span>

              <div
                className="flex items-center"
                style={{ gap: "16px", marginBottom: "24px" }}
              >
                {/* User Icon Placeholder */}
                <div
                  className="bg-[#1C232B] flex items-center justify-center rounded-full border border-white/10"
                  style={{ width: "48px", height: "48px" }}
                >
                  <span className="text-white/40 text-xs">👤</span>
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">
                    {item.name}
                  </h4>
                  <p
                    className="text-[#00D4AA] text-[10px] font-black uppercase tracking-widest"
                    style={{ marginTop: "2px" }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="text-white/70 italic leading-relaxed text-sm">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
