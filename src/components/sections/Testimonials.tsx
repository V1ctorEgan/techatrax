export default function Testimonials() {
  const reviews = [
    {
      quote:
        "Techatrax provided the technical foundation I needed to launch my first AI-driven logistics startup in Lagos. The mentorship is world-class.",
      author: "Chidi Okafor",
      role: "Batch of '24",
    },
    {
      quote:
        "The focus on ethical AI and practical machine learning implementation sets this institute apart from traditional academia.",
      author: "Amara Simba",
      role: "Research Fellow",
    },
    {
      quote:
        "From raw data to deployed models, the journey at Techatrax is intense but incredibly rewarding for any serious engineer.",
      author: "Kwame Mensah",
      role: "Deep Learning Student",
    },
  ];

  return (
    <section className="bg-[#080C0F]  border-t border-white/5">
      <div className="w-full flex flex-col justify-center items-center mb-24 text-center">
        <div className="h-10 w-full" />
        <h2
          className="text-3xl md:text-6xl text-white  "
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Neural Network Voices
        </h2>
        <div className="h-10 w-full" />

        <div className="flex flex-wrap md:flex-nowrap  gap-8 mb-20 w-[90%] items-center ">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#0D1117] border border-white/5 p-8 rounded-3xl text-left relative overflow-hidden flex-1  min-w-70"
              style={{ padding: "32px" }}
            >
              <span className="absolute top-4 right-8 text-8xl font-black text-white/5 select-none">
                ”
              </span>

              <p className="text-white/80 text-sm leading-relaxed mb-10 relative z-10 font-medium">
                "{r.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                {/* Fixed the gradient syntax for v4 */}
                <div className="w-12 h-12 rounded-full bg-linear-to-tr from-[#00D4AA] to-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)]" />
                <div>
                  <p className="text-white font-bold text-sm">{r.author}</p>
                  <p className="text-[#00D4AA] text-[10px] font-black uppercase tracking-widest">
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-10 w-full" />

        {/* Carousel Indicators seen in Image 1 */}
        <div className="flex justify-center gap-2">
          <div className="w-12 h-1 bg-[#00E5FF] rounded-full" />
          <div className="w-12 h-1 bg-white/10 rounded-full" />
          <div className="w-12 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
