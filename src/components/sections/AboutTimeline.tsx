const TIMELINE_EVENTS = [
  {
    year: "2024",
    title: "Registered & Founded",
    description: "The architectural phase begins in the digital realm.",
    color: "text-[#00E5FF]",
    borderColor: "border-[#00E5FF]",
    icon: "🖊️",
    position: "left",
  },
  {
    year: "2025",
    title: "Infrastructure Integration",
    description: "Physical and cloud laboratories established across Lagos.",
    color: "text-[#22C55E]",
    borderColor: "border-[#22C55E]",
    icon: "⚙️",
    position: "right",
  },
  {
    year: "2026",
    title: "First Batch Launch",
    description: "Deployment of our flagship AI Engineering program.",
    color: "text-[#00E5FF]",
    borderColor: "border-[#00E5FF]",
    icon: "🚀",
    position: "left",
  },
];

export default function AboutTimeline() {
  return (
    <section className="bg-[#080C0F] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-24">
          Temporal Progression
        </h2>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-bottom from-[#00E5FF] via-[#22C55E] to-[#00E5FF]" />

          <div className="space-y-24">
            {TIMELINE_EVENTS.map((event, i) => (
              <div
                key={i}
                className={`relative flex items-center justify-between w-full ${event.position === "right" ? "flex-row-reverse" : ""}`}
              >
                {/* Content Side */}
                <div className="w-[45%] text-right group">
                  <div
                    className={`${event.position === "right" ? "text-left" : "text-right"}`}
                  >
                    <div
                      className={`text-3xl font-black ${event.color} mb-2 tracking-tighter`}
                    >
                      {event.year}
                    </div>
                    <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-70 ml-auto mr-0 inline-block">
                      <span className="text-white font-bold block mb-1">
                        {event.title}.
                      </span>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0D1117] border-2 ${event.borderColor} flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                >
                  <span className="text-sm">{event.icon}</span>
                </div>

                {/* Empty Side to balance flex */}
                <div className="w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
