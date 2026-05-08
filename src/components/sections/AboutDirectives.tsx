const STATS = [
  { value: "10+", label: "Projects", color: "text-[#00E5FF]" },
  { value: "50", label: "Students", color: "text-[#00E5FF]" },
  { value: "5", label: "Courses", color: "text-[#00E5FF]" },
  { value: "2026", label: "Launch", color: "text-[#22C55E]" },
];

const DIRECTIVES = [
  {
    title: "Research",
    icon: "💡",
    description:
      "Pushing the boundaries of Machine Learning and Neural Networks to solve uniquely African challenges in logistics and infrastructure.",
  },
  {
    title: "Dev",
    icon: " < > ",
    description:
      "Architecting robust, scalable AI platforms that serve as the backbone for the next generation of Nigerian digital startups.",
  },
  {
    title: "Education",
    icon: "📖",
    description:
      "Cultivating a elite tier of technical talent through intensive, research-driven curriculum designed for the digital frontier.",
  },
];

export default function AboutDirectives() {
  return (
    <section
      className="bg-[#080C0F] text-white"
      style={{ paddingBottom: "120px" }}
    >
      {/* Stats Bar */}
      <div
        className="border-y border-white/5 bg-[#0D1117]/30"
        style={{ marginBottom: "100px", padding: "60px 0" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i}>
              <div
                className={`text-4xl font-black ${stat.color}`}
                style={{
                  marginBottom: "12px",
                  filter: "drop-shadow(0 0 10px currentColor)",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Directives Grid */}
      <div
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
        className=" mx-auto px-6 text-center "
      >
        <h2
          className="text-4xl font-bold inline-block relative"
          style={{ marginBottom: "80px" }}
        >
          The Core Directives
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#00E5FF]"
            style={{ borderRadius: "2px" }}
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  w-full">
          {DIRECTIVES.map((item, i) => (
            <div
              key={i}
              className="bg-[#0D1117] border border-white/5 rounded-2xl text-left transition-all hover:border-white/10"
              style={{ padding: "48px" }}
            >
              <div
                className="w-12 h-12 rounded-xl bg-[#161B22] flex items-center justify-center text-[#00E5FF] text-xl"
                style={{
                  marginBottom: "32px",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ marginBottom: "20px" }}
              >
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
