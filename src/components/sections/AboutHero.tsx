import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center text-center"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "100px",
      }}
    >
      {/* Background Skyline */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.png"
          alt="Nigeria Tech Hub Skyline"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Dark Vignette Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(8,12,15,0.4) 0%, rgba(8,12,15,0.9) 100%)",
          }}
        />
      </div>

      {/* Waveform Overlay (Abstract data lines) */}
      <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
        <Image
          src="/images/waveform-overlay.png"
          alt="Data Waveform"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-6 flex flex-col justify-center items-center">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          style={{
            marginBottom: "24px",
            background: "linear-gradient(to right, #00E5FF, #00D4AA, #22C55E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
          }}
        >
          Our Story: From Vision to AI Reality in Nigeria
        </h1>

        <p
          className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          style={{ letterSpacing: "0.01em" }}
        >
          Pioneering the next frontier of intelligent systems, deep within the
          heart of Africa's most vibrant tech ecosystem.
        </p>
      </div>
    </section>
  );
}
