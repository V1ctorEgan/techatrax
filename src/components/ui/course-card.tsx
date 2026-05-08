import Image from "next/image";

export function CourseCard({
  title,
  description,
  duration,
  price,
  image,
  active,
}: any) {
  return (
    <div className="bg-[#0D1117] border border-white/5 rounded-3xl overflow-hidden flex flex-col group transition-all hover:border-[#00D4AA]/40">
      <div className="relative h-52 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        {active && (
          <div className="absolute top-4 right-4 bg-[#00D4AA] text-[#080C0F] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            ● AI Active
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
          {description}
        </p>

        <div className="flex items-center gap-6 mb-8">
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="text-[#00D4AA] text-lg">⊙</span> {duration}
          </span>
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="text-[#00D4AA] text-lg">◘</span> {price}
          </span>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-[#00E5FF] hover:bg-[#00D4AA] text-[#080C0F] font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all">
            Enroll Now
          </button>
          <button className="flex-1 border border-[#00D4AA]/30 hover:border-[#00D4AA] text-[#00D4AA] font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
