"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResearchHero() {
  const router = useRouter();

  const handleViewPapers = () => {
    const section = document.getElementById("research-grid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCollaborate = () => {
    router.push("/contact");
  };
  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/research-image.png" // Place your circuit/chip image here
          alt="AI Research Circuitry"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,12,15,0.95) 30%, rgba(8,12,15,0.4) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        <div className="max-w-2xl">
          <h1
            className="text-white text-5xl md:text-7xl font-bold tracking-tight"
            style={{ marginBottom: "16px", lineHeight: 1.1 }}
          >
            Cutting-Edge <span className="text-[#00E5FF]">AI Research</span>
          </h1>

          <p
            className="text-white text-2xl md:text-3xl font-medium"
            style={{ marginBottom: "48px", opacity: 0.9 }}
          >
            Innovate with Us
          </p>

          <div className="flex flex-wrap" style={{ gap: "20px" }}>
            {/* View Papers Button */}
            <button
              onClick={handleViewPapers}
              className="bg-[#00E5FF] hover:bg-[#00D4AA] text-[#080C0F] font-black rounded-lg flex items-center transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              style={{
                padding: "16px 32px",
                fontSize: "14px",
                gap: "8px",
                letterSpacing: "0.05em",
              }}
            >
              VIEW PAPERS <span>→</span>
            </button>

            {/* Collaborate Button */}
            <button
              onClick={handleCollaborate}
              className="border border-[#00D4AA] text-[#00D4AA] hover:bg-[#00D4AA]/10 font-black rounded-lg transition-all"
              style={{
                padding: "16px 32px",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              COLLABORATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
