import Image from "next/image";
import Link from "next/link";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group relative bg-[#0D1117] border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-[#00D4AA]/50">
      {/* Course Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {course.isActive && (
          <span className="absolute top-4 right-4 bg-[#00D4AA] text-[#080C0F] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
            ● AI Active
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4AA] transition-colors">
          {course.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
          {course.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-6 mb-6 text-[10px] font-bold text-white/40 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="text-[#00D4AA]">⊙</span> {course.duration}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#00D4AA]">◘</span> {course.price}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#00E5FF] hover:bg-[#00D4AA] text-[#080C0F] font-bold py-2 px-4 rounded-lg text-xs transition-colors uppercase">
            Enroll Now
          </button>
          <Link
            href={`/courses/${course.slug}`}
            className="flex-1 border border-[#00D4AA]/30 hover:border-[#00D4AA] text-[#00D4AA] font-bold py-2 px-4 rounded-lg text-xs text-center transition-all uppercase"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
