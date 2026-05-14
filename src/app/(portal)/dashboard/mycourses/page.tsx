"use client";
import { useState } from "react";
import { Search, Filter, ArrowRight, Clock, BookOpen } from "lucide-react";

const COURSES = [
  {
    id: 1,
    title: "Advanced Neural Architectures",
    instructor: "Dr. Amara Okafor",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    progress: 75,
    lastLesson: "Transformer Opti...",
    modules: "12/16",
    status: "Active",
  },
  {
    id: 2,
    title: "Embedded AI & Edge Robotics",
    instructor: "Engr. Tunde Folawiyo",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    progress: 40,
    lastLesson: "Sensor Fusion Logic",
    modules: "6/15",
    status: "Active",
  },
  {
    id: 3,
    title: "Generative Adversarial Networks",
    instructor: "Dr. Chidi Azikiwe",
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=400",
    progress: 90,
    lastLesson: "Latent Space Exploration",
    modules: "18/20",
    status: "Active",
  },
];

export default function CoursewarePage() {
  const [filter, setFilter] = useState("All Courses");

  return (
    <div style={{ padding: "40px" }}>
      {/* Header Section */}
      <header style={{ marginBottom: "48px" }}>
        <h1 className="text-5xl font-bold text-white mb-2">
          Neural Curriculum
        </h1>
        <p className="text-white/40 text-sm font-medium">
          Active Research & Learning Paths
        </p>
      </header>

      {/* Filter Bar */}
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "40px" }}
      >
        <div
          className="flex bg-[#0D1117] border border-white/5 p-1 rounded-xl"
          style={{ gap: "4px" }}
        >
          {["All Courses", "Active", "Completed", "Upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                filter === tab
                  ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
          <Filter size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Sort by: Recent Activity
          </span>
        </button>
      </div>

      {/* Course Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "32px" }}
      >
        {COURSES.map((course) => (
          <div
            key={course.id}
            className="group bg-[#0D1117] border border-white/5 rounded-4xl overflow-hidden flex flex-col transition-all hover:border-white/10 hover:shadow-2xl"
          >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-[#22C55E]/10 border border-[#22C55E]/20 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                <span className="text-[#22C55E] text-[9px] font-black uppercase tracking-tighter">
                  {course.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "32px" }}>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#00E5FF] transition-colors">
                {course.title}
              </h3>
              <p className="text-white/30 text-[11px] font-medium flex items-center gap-2 mb-6">
                <BookOpen size={12} /> {course.instructor}
              </p>

              {/* Progress Section */}
              <div style={{ marginBottom: "32px" }}>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                  <span>Learning Progress</span>
                  <span className="text-[#00E5FF]">{course.progress}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00E5FF] transition-all duration-1000"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* Stats & Meta */}
              <div
                className="bg-[#05070A] border border-white/5 rounded-2xl flex items-center justify-between"
                style={{ padding: "20px", marginBottom: "32px" }}
              >
                <div>
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">
                    Last Lesson
                  </div>
                  <div className="text-[10px] font-bold text-white/80">
                    {course.lastLesson}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">
                    Modules
                  </div>
                  <div className="text-[10px] font-bold text-white/80">
                    {course.modules}
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-transparent border border-[#00E5FF]/20 rounded-xl text-[#00E5FF] text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#00E5FF] hover:text-[#080C0F] transition-all group/btn">
                Continue Learning
                <ArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
