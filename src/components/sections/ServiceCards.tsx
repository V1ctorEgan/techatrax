import { Monitor, Cpu, Users, MapPin } from "lucide-react";

const SERVICES = [
  {
    title: "Courses",
    desc: "Specialized curriculum in Deep Learning and Neural Architecture.",
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    title: "Research",
    desc: "Pushing the boundaries of generative AI and robotic process automation.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Students",
    desc: "A community of elite engineers and data scientists from across the globe.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Contact",
    desc: "Connect with our labs across major African tech hubs.",
    icon: <MapPin className="w-5 h-5" />,
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-[#080C0F] py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="bg-[#0D1117] border border-white/5 rounded-xl p-6 hover:border-[#00D4AA]/20 transition-all group"
          >
            <div className="w-10 h-10 bg-[#00D4AA]/10 rounded flex items-center justify-center text-[#00D4AA] mb-6">
              {s.icon}
            </div>
            {/* Grayscale Placeholder for the Images in the UI */}
            <div className="h-32 bg-zinc-900 rounded mb-6 grayscale group-hover:grayscale-0 transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-t from-[#0D1117] to-transparent opacity-60" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
