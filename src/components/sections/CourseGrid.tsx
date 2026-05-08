"use client";

import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Course = {
  id: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  is_published: boolean;
  slug: string;
};

const CATEGORIES = [
  "All Categories",
  "Machine Learning",
  "Generative AI",
  "Embedded Systems",
];

// Duration is not in DB yet so we map by slug as fallback
const DURATION_MAP: Record<string, string> = {
  "data-science-ml-batch-1": "12 WEEKS",
  "generative-cad-modeling": "8 WEEKS",
  "embedded-ai-systems": "10 WEEKS",
};

export default function CourseGrid() {
  const router = useRouter();
  const supabase = createClient();

  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [loading, setLoading] = useState(true);
  const [enrollingId, setEnrollingId] = useState<string | null>(null);
  const [enrolledIds, setEnrolledIds] = useState<Set<string>>(new Set());
  const [isPending, startTransition] = useTransition();

  // Fetch published courses
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("courses")
        .select("id, title, description, thumbnail, price, is_published, slug")
        .eq("is_published", true)
        .order("created_at", { ascending: true });

      console.log("COURSES DATA:", data);
      console.log("COURSES ERROR:", error);

      if (!error && data) setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  // Fetch user's existing enrollments
  useEffect(() => {
    const fetchEnrollments = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("enrollments")
        .select("course_id")
        .eq("student_id", user.id)
        .returns<{ course_id: string }[]>();

      if (data) {
        setEnrolledIds(new Set(data.map((e) => e.course_id)));
      }
    };

    fetchEnrollments();
  }, []);

  // Enroll handler
  const handleEnroll = async (courseId: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/portal/login");
      return;
    }

    setEnrollingId(courseId);

    const { error } = await supabase
      .from("enrollments")
      .insert({ student_id: user.id, course_id: courseId } as any);

    if (!error) {
      setEnrolledIds((prev) => new Set([...prev, courseId]));
    }

    setEnrollingId(null);
  };

  // Client-side filtering
  const filtered = courses.filter((course) => {
    const matchesSearch =
      search === "" ||
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description?.toLowerCase().includes(search.toLowerCase());

    // Category filter is UI-ready; expand logic as you add a category column
    const matchesCategory = category === "All Categories" ? true : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      style={{
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingBottom: "100px",
      }}
    >
      {/* Search & Filter Bar */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row bg-[#0D1117] border border-white/5 rounded-2xl"
        style={{ marginBottom: "64px", padding: "8px", gap: "12px" }}
      >
        <div
          className="flex-1 flex items-center"
          style={{ paddingLeft: "16px" }}
        >
          <span className="text-white/20">🔍</span>
          <input
            placeholder="Search specialized AI courses..."
            className="bg-transparent border-none text-white w-full outline-none"
            style={{ padding: "16px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="bg-[#080C0F] text-white rounded-xl border-none outline-none cursor-pointer"
          style={{ padding: "16px 32px" }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Loading state */}
      {loading && (
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "32px" }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#0D1117] border border-white/5 rounded-3xl overflow-hidden animate-pulse"
              style={{ height: "420px" }}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && filtered.length === 0 && (
        <div className="max-w-7xl mx-auto text-center py-24">
          <p className="text-white/30 text-sm tracking-widest uppercase">
            No courses found
          </p>
        </div>
      )}

      {/* Grid */}
      {!loading && filtered.length > 0 && (
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "32px" }}
        >
          {filtered.map((course) => {
            const isEnrolled = enrolledIds.has(course.id);
            const isEnrolling = enrollingId === course.id;
            const duration = DURATION_MAP[course.slug] ?? "—";

            return (
              <div
                key={course.id}
                className="bg-[#0D1117] border border-white/5 rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full bg-[#111820]">
                  {course.thumbnail ? (
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10 text-xs tracking-widest uppercase">
                      No Image
                    </div>
                  )}
                  {course.is_published && (
                    <div
                      className="absolute top-4 right-4 bg-[#00D4AA] text-[#080C0F] text-[10px] font-black rounded-full"
                      style={{ padding: "4px 12px" }}
                    >
                      ● AI ACTIVE
                    </div>
                  )}
                </div>

                <div
                  className="flex flex-col flex-1"
                  style={{ padding: "32px" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "12px" }}
                  >
                    {course.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm leading-relaxed flex-1"
                    style={{ marginBottom: "24px" }}
                  >
                    {course.description ?? "No description available."}
                  </p>

                  <div
                    className="flex items-center"
                    style={{ gap: "20px", marginBottom: "32px" }}
                  >
                    <span className="text-[10px] font-black text-white/40 tracking-widest">
                      ⊙ {duration}
                    </span>
                    <span className="text-[10px] font-black text-white/40 tracking-widest">
                      ◘ ${course.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex" style={{ gap: "12px" }}>
                    <button
                      onClick={() => handleEnroll(course.id)}
                      disabled={isEnrolled || isEnrolling}
                      className="flex-1 bg-[#00E5FF] text-[#080C0F] font-bold rounded-lg text-[10px] tracking-widest disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
                      style={{ padding: "14px 0" }}
                    >
                      {isEnrolling
                        ? "ENROLLING..."
                        : isEnrolled
                          ? "✓ ENROLLED"
                          : "ENROLL NOW"}
                    </button>
                    <button
                      onClick={() =>
                        startTransition(() =>
                          router.push(`/courses/${course.slug}`),
                        )
                      }
                      className="flex-1 border border-[#00D4AA]/30 text-[#00D4AA] font-bold rounded-lg text-[10px] tracking-widest hover:bg-[#00D4AA]/5 transition-colors duration-200"
                      style={{ padding: "14px 0" }}
                    >
                      {isPending ? "LOADING..." : "DETAILS"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
