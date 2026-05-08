import Image from "next/image";

export default function CoursesHero() {
  const decorativeImages = [
    "/images/hero-1.png", // Replace with your actual paths
    "/images/hero-2.png",
    "/images/hero-3.png",
    "/images/hero-4.png",
  ];

  return (
    <section
      className="w-full bg-[#080C0F] flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "150px", paddingBottom: "160px" }}
    >
      {/* Text Content */}
      <div className="text-center" style={{ marginBottom: "48px" }}>
        <h1
          className="text-white text-4xl md:text-6xl font-bold tracking-tight"
          style={{ marginBottom: "16px", fontFamily: "var(--font-syne)" }}
        >
          Master AI with Techatrax
        </h1>
        <p
          className="text-[#7DD3FC] text-xl md:text-2xl font-medium tracking-wide"
          style={{ opacity: 0.9 }}
        >
          Hands-On AI Education
        </p>
      </div>

      {/* Image Row Container */}
      <div
        className="flex flex-wrap justify-center items-center w-full max-w-6xl"
        style={{ gap: "20px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        {decorativeImages.map((src, index) => (
          <div
            key={index}
            className="relative rounded-xl border border-white/10 overflow-hidden group"
            style={{
              width: "240px",
              height: "140px",
              backgroundColor: "#111",
            }}
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-t from-[#00E5FF]/10 to-transparent pointer-events-none" />

            <Image
              src={src}
              alt={`AI Concept ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Decorative Radial Background (Optional, adds that deep glow seen in the image) */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)",
          top: "20%",
          zIndex: 0,
        }}
      />
    </section>
  );
}
