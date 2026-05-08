"use client";

import { useRouter } from "next/navigation";

export default function AboutCTA() {
  const router = useRouter();

  return (
    <section
      className="bg-[#041408b6] flex justify-center"
      style={{ padding: "100px 24px 160px", marginTop: "5px" }}
    >
      <div
        className="max-w-4xl mx-auto bg-[#0D1117] border border-white/5 rounded-[40px] text-center flex flex-col justify-center items-center gap-8"
        style={{ padding: "80px 40px" }}
      >
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
          Ready to Shape the Future?
        </h2>

        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Applications for our 2026 Batch are opening soon. Join the ranks of
          Nigeria&apos;s technical elite.
        </p>

        <button
          onClick={() => router.push("/courses")}
          style={{ padding: "15px" }}
          className="bg-[#00D4AA] hover:bg-[#00E5FF] text-[#080C0F] font-black py-4 px-10 rounded-full transition-all duration-300 flex items-center gap-3 mx-auto group shadow-[0_0_30px_rgba(0,212,170,0.2)]"
        >
          Join Us
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
