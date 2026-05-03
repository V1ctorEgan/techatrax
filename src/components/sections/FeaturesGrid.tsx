import { Monitor, Cpu, Users, MapPin } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    title: "Courses",
    description:
      "Specialized curriculum in Deep Learning and Neural Architecture.",
    icon: <Monitor className="w-5 h-5 text-[#00E5FF]" />,
    image: "/images/courses-preview.jpg", // Replace with your grayscale assets
  },
  {
    title: "Research",
    description:
      "Pushing the boundaries of generative AI and robotic process automation.",
    icon: <Cpu className="w-5 h-5 text-[#00D4AA]" />,
    image: "/images/research-preview.jpg",
  },
  {
    title: "Students",
    description:
      "A community of elite engineers and data scientists from across the globe.",
    icon: <Users className="w-5 h-5 text-[#00E5FF]" />,
    image: "/images/students-preview.jpg",
  },
  {
    title: "Contact",
    description: "Connect with our labs across major African tech hubs.",
    icon: <MapPin className="w-5 h-5 text-[#00D4AA]" />,
    image: "/images/contact-preview.jpg",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-5 bg-[#080C0F]">
      <div className="  w-full py-3 px-6 flex justify-center items-center ">
        <div className=" w-[95%] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative bg-[#0D1117] border border-white/5 p-6 rounded-xl hover:border-[#00D4AA]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00D4AA]/10 flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <div className="relative h-32 w-full mb-6 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-t from-[#0D1117] to-transparent z-10" />
                <div className="bg-zinc-800 w-full h-full animate-pulse" />{" "}
                {/* Placeholder */}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
