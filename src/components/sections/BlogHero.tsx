"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type FeaturedPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  thumbnail: string | null;
};

export default function BlogHero() {
  const [isMobile, setIsMobile] = useState(true);
  const [post, setPost] = useState<FeaturedPost | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, thumbnail")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(1)
        .single();

      if (!error && data) setPost(data);
      setLoading(false);
    };

    fetchFeatured();
  }, []);

  const responsivePadding = isMobile ? "32px" : "64px";

  return (
    <section
      className="bg-[#080C0F]"
      style={{ paddingTop: "96px", paddingLeft: "24px", paddingRight: "24px" }}
    >
      <div className="mx-auto">
        {/* Section Title */}
        <div style={{ marginBottom: "40px" }}>
          <h2
            className="text-white text-4xl font-bold"
            style={{ marginBottom: "16px" }}
          >
            AI Insights
          </h2>
          <div className="w-16 h-1 bg-[#00E5FF] rounded-full" />
        </div>

        {/* Featured Article Card */}
        <div
          className="relative w-full overflow-hidden border border-white/5 group"
          style={{
            aspectRatio: "21/9",
            minHeight: "400px",
            borderRadius: "32px",
          }}
        >
          {/* Loading skeleton */}
          {loading && (
            <div className="absolute inset-0 bg-[#0D1117] animate-pulse" />
          )}

          {/* Background Image */}
          {!loading && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${post?.thumbnail ?? "/images/blog-hero.png"}')`,
                filter: "grayscale(100%) brightness(0.4)",
              }}
            />
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #080C0F 0%, transparent 60%, transparent 100%)",
            }}
          />

          {/* Overlay Content */}
          {!loading && post && (
            <div
              className="absolute inset-0 flex flex-col justify-end"
              style={{ padding: responsivePadding }}
            >
              <div className="max-w-2xl">
                <span
                  className="inline-block bg-[#00E5FF] text-[#080C0F] text-[10px] font-black uppercase tracking-widest rounded"
                  style={{
                    marginBottom: "1.5rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                  }}
                >
                  Featured Analysis
                </span>

                <h1
                  className="text-white font-bold leading-tight"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.75rem)",
                    marginBottom: "2rem",
                  }}
                >
                  {post.title}
                </h1>

                <button
                  onClick={() => router.push(`/blog/${post.slug}`)}
                  className="flex items-center gap-3 bg-[#00E5FF] hover:bg-white text-[#080C0F] font-black rounded-xl transition-all group/btn shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                  style={{
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  Read Featured Article
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!loading && !post && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/20 text-sm tracking-widest uppercase">
                No featured post yet
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
