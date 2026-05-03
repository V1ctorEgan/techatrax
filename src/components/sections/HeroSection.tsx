"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const NeuralBackground = dynamic(
  () => import("@/components/sections/NeuralBackground"),
  { ssr: false },
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080C0F]">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <NeuralBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center mt-[-10vh]">
        {/* Main Headline - Matches the heavy, wide font and glow in image_bf54be.jpg */}
        <h1
          className="text-[42px] md:text-[80px] lg:text-[50px] font-black leading-[0.9] tracking-[-0.04em] text-[#00E5FF] mb-10"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            textShadow: "0 0 40px rgba(0, 229, 255, 0.4)",
          }}
        >
          Pioneering AI Innovation in Africa
        </h1>
        <div className="w-90 h-10" />

        {/* Subheadline - Sharp, clean white text */}
        <p className=" my-2 mt-10  text-sm md:text-xl font-bold text-white mb-10 tracking-tight opacity-90">
          Research, Development, Education in AI/ML/Data Science
        </p>

        {/* CTA Buttons - Exact match for shape and styling */}
        <div className="w-90 h-10" />
        <div className="flex flex-row items-center justify-center mt-6 gap-4 mb-24">
          <Link
            href="/courses"
            className=" font-bold flex items-center justify-center px-8 py-2.5 w-25 h-10 text-center rounded-full bg-[#00E5FF] text-[#080C0F] text-sm  hover:brightness-110 transition-all shadow-[0_0_25px_rgba(0,229,255,0.5)]"
          >
            Enroll Now
          </Link>

          <Link
            href="/research"
            className="px-8 py-2.5 rounded-full border w-35 h-10 flex items-center justify-center border-[#00D4AA] text-[#00D4AA] text-sm font-bold hover:bg-[#00D4AA]/10 transition-all"
          >
            Explore Research
          </Link>
        </div>

        {/* Stats Row - Centered and floating as seen in image_bf54be.jpg */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 max-w-4xl mx-auto pt-10">
          {[
            { value: "10+", label: "PROJECTS1" },
            { value: "50", label: "STUDENTS" },
            { value: "5", label: "COURSES" },
            { value: "2026", label: "LAUNCH" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span
                className="text-4xl md:text-5xl font-black text-[#00D4AA]"
                style={{ textShadow: "0 0 20px rgba(0,212,170,0.4)" }}
              >
                {stat.value}
              </span>
              <span className="text-[10px] tracking-[0.4em] text-white/40 font-bold mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>*/}
      </div>
    </section>
  );
}
