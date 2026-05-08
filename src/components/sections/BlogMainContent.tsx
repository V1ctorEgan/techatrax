"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { format } from "date-fns";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  thumbnail: string | null;
  published_at: string | null;
  author_id: string | null;
};

type Category = {
  name: string;
  count: string;
};

const CATEGORIES: Category[] = [
  { name: "Artificial Intelligence", count: "24" },
  { name: "Machine Learning", count: "18" },
  { name: "Data Science", count: "12" },
  { name: "Robotics", count: "06" },
];

const POSTS_PER_PAGE = 3;

export default function BlogMainContent() {
  const router = useRouter();
  const supabase = createClient();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Fetch paginated posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const from = (page - 1) * POSTS_PER_PAGE;
      const to = from + POSTS_PER_PAGE - 1;

      const { data, error, count } = await supabase
        .from("blog_posts")
        .select(
          "id, title, slug, excerpt, thumbnail, published_at, author_id",
          { count: "exact" },
        )
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .range(from, to);

      if (!error && data) {
        setPosts(data);
        setTotalPages(Math.ceil((count ?? 0) / POSTS_PER_PAGE));
      }
      setLoading(false);
    };

    fetchPosts();
  }, [page]);

  // Fetch recent posts for sidebar
  useEffect(() => {
    const fetchRecent = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, published_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(2);

      if (data) setRecentPosts(data as BlogPost[]);
    };

    fetchRecent();
  }, []);

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setSubStatus("loading");

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: email.trim() }] as any);

    if (error) {
      // Handle duplicate email gracefully
      setSubStatus(error.code === "23505" ? "success" : "error");
    } else {
      setSubStatus("success");
      setEmail("");
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "—";
    return format(new Date(dateStr), "MMM d, yyyy");
  };

  const TAGS = ["Hardware", "AI Ethics", "Robotics", "ML", "Data"];

  return (
    <section
      className="bg-[#080C0F] text-white"
      style={{ padding: "80px 24px" }}
    >
      <div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row"
        style={{ gap: "48px" }}
      >
        {/* Left: Main Post Grid */}
        <div className="flex-1">
          {/* Loading skeletons */}
          {loading && (
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "24px", marginBottom: "64px" }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#0D1117] border border-white/5 rounded-2xl overflow-hidden animate-pulse"
                  style={{ height: "380px" }}
                />
              ))}
            </div>
          )}

          {/* Posts grid */}
          {!loading && (
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "24px", marginBottom: "64px" }}
            >
              {posts.map((post, i) => (
                <div
                  key={post.id}
                  className="bg-[#0D1117] border border-white/5 rounded-2xl overflow-hidden flex flex-col"
                  style={{ paddingBottom: "24px" }}
                >
                  <div
                    className="aspect-square bg-[#161B22] overflow-hidden"
                    style={{ marginBottom: "20px" }}
                  >
                    <img
                      src={post.thumbnail ?? "/images/blog-hero.png"}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div style={{ padding: "0 20px" }}>
                    <div
                      className="flex justify-between items-center"
                      style={{ marginBottom: "12px" }}
                    >
                      <span className="text-white/30 text-[10px] uppercase font-bold">
                        {formatDate(post.published_at)}
                      </span>
                      <span className="text-[#22C55E] text-[10px] uppercase font-black tracking-widest">
                        {TAGS[i % TAGS.length]}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold leading-tight"
                      style={{ marginBottom: "16px" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-white/40 text-[11px] leading-relaxed"
                      style={{ marginBottom: "24px" }}
                    >
                      {post.excerpt ?? ""}
                    </p>
                    <div
                      className="text-white/60 text-[10px] font-bold"
                      style={{ marginBottom: "20px" }}
                    >
                      Techatrax Institute
                    </div>
                    <button
                      onClick={() => router.push(`/blog/${post.slug}`)}
                      className="w-full py-2 border border-[#00E5FF]/30 rounded-lg text-[#00E5FF] text-[10px] font-black uppercase tracking-widest hover:bg-[#00E5FF] hover:text-[#080C0F] transition-all"
                    >
                      Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div
            className="flex items-center justify-center"
            style={{ gap: "12px" }}
          >
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-8 h-8 rounded-lg bg-[#0D1117] border border-white/5 flex items-center justify-center text-white/40 hover:text-[#00E5FF] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded-lg font-black text-xs flex items-center justify-center transition-colors ${
                  page === p
                    ? "bg-[#00E5FF] text-[#080C0F]"
                    : "bg-[#0D1117] border border-white/5 text-white/40 hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-8 h-8 rounded-lg bg-[#0D1117] border border-white/5 flex items-center justify-center text-white/40 hover:text-[#00E5FF] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside
          className="w-full lg:w-[320px] flex flex-col"
          style={{ gap: "32px" }}
        >
          {/* Categories Widget */}
          <div
            className="bg-[#0D1117] border border-white/5 rounded-2xl"
            style={{ padding: "24px" }}
          >
            <div
              className="flex items-center gap-2"
              style={{ marginBottom: "24px" }}
            >
              <span className="text-[#00E5FF]">📂</span>
              <h4 className="text-xs font-black uppercase tracking-widest">
                Categories
              </h4>
            </div>
            <div className="space-y-4">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="flex justify-between items-center text-[11px] text-white/40 hover:text-white cursor-pointer transition-colors"
                >
                  <span>{cat.name}</span>
                  <span className="bg-[#080C0F] px-2 py-1 rounded text-[9px] border border-white/5">
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts Widget */}
          <div
            className="bg-[#0D1117] border border-white/5 rounded-2xl"
            style={{ padding: "24px" }}
          >
            <h4
              className="text-xs font-black uppercase tracking-widest"
              style={{ marginBottom: "24px" }}
            >
              Recent Posts
            </h4>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => router.push(`/blog/${post.slug}`)}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#161B22] overflow-hidden border border-white/5">
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-70"
                      />
                    )}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold group-hover:text-[#00E5FF] transition-colors">
                      {post.title}
                    </div>
                    <div className="text-[9px] text-white/30 uppercase font-bold">
                      {formatDate(post.published_at)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Widget */}
          <div
            className="bg-[#0D1117] border border-white/5 rounded-2xl"
            style={{ padding: "24px" }}
          >
            <h4
              className="text-xs font-black uppercase tracking-widest"
              style={{ marginBottom: "16px" }}
            >
              Stay Ahead
            </h4>
            <p
              className="text-[10px] text-white/40 leading-relaxed"
              style={{ marginBottom: "24px" }}
            >
              Receive the latest research briefs and technical insights directly
              to your inbox.
            </p>

            {subStatus === "success" ? (
              <div className="text-center py-4">
                <p className="text-[#00D4AA] text-[11px] font-black uppercase tracking-widest">
                  ✓ You&apos;re subscribed!
                </p>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="email@institute.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  className="w-full bg-[#080C0F] border border-white/10 rounded-lg text-xs py-3 px-4 outline-none focus:border-[#00E5FF] transition-all text-white"
                  style={{ marginBottom: "12px" }}
                />
                <button
                  onClick={handleSubscribe}
                  disabled={subStatus === "loading"}
                  className="w-full py-3 bg-[#00D4AA] text-[#080C0F] font-black uppercase tracking-widest text-[10px] rounded-lg hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subStatus === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
                {subStatus === "error" && (
                  <p className="text-red-400 text-[9px] text-center mt-2">
                    Something went wrong. Try again.
                  </p>
                )}
              </>
            )}
            <div
              className="text-center text-[8px] text-white/20 font-bold uppercase tracking-widest"
              style={{ marginTop: "12px" }}
            >
              AI-ACTRA | VMRP-63
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
