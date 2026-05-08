import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  thumbnail: string | null;
  published_at: string | null;
  is_published: boolean;
};

type RelatedPost = {
  id: string;
  title: string;
  slug: string;
  thumbnail: string | null;
  published_at: string | null;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data } = await supabase
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .single();

  const post = data as { title: string; excerpt: string | null } | null;

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt ?? "",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, excerpt, content, thumbnail, published_at, is_published",
    )
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !data) notFound();

  const post = data as unknown as BlogPost;

  // Fetch related posts
  const { data: relatedData } = await supabase
    .from("blog_posts")
    .select("id, title, slug, thumbnail, published_at")
    .eq("is_published", true)
    .neq("slug", slug)
    .order("published_at", { ascending: false })
    .limit(3);

  const related = (relatedData ?? []) as unknown as RelatedPost[];

  return (
    <main className="bg-[#080C0F] text-white min-h-screen">
      {/* Hero */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "60vh" }}
      >
        {post.thumbnail && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${post.thumbnail}')`,
              filter: "grayscale(60%) brightness(0.35)",
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #080C0F 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto w-full"
          style={{ padding: "48px 24px" }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#00E5FF] transition-colors text-xs font-black uppercase tracking-widest mb-6"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          {post.published_at && (
            <p
              className="text-[#00D4AA] text-[10px] font-black uppercase tracking-widest"
              style={{ marginBottom: "12px" }}
            >
              {format(new Date(post.published_at), "MMMM d, yyyy")}
            </p>
          )}

          <h1
            className="text-white font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p
              className="text-white/50 text-base leading-relaxed max-w-2xl"
              style={{ marginTop: "16px" }}
            >
              {post.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className="max-w-4xl mx-auto w-full"
        style={{ padding: "64px 24px" }}
      >
        {post.content ? (
          <div
            className="text-white/70 leading-relaxed"
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              whiteSpace: "pre-wrap",
            }}
          >
            {post.content}
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center text-center border border-white/5 rounded-2xl bg-[#0D1117]"
            style={{ padding: "80px 40px", gap: "16px" }}
          >
            <p className="text-white/20 text-sm tracking-widest uppercase">
              Full article coming soon
            </p>
            <p className="text-white/10 text-xs">
              Content for this post has not been added yet.
            </p>
          </div>
        )}

        {/* Divider */}
        <div
          className="border-t border-white/5"
          style={{ marginTop: "80px", marginBottom: "64px" }}
        />

        {/* Related Posts */}
        {related.length > 0 && (
          <div>
            <h3
              className="text-white text-xl font-bold"
              style={{ marginBottom: "32px" }}
            >
              Related Posts
            </h3>
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "24px" }}
            >
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="group bg-[#0D1117] border border-white/5 hover:border-[#00E5FF]/20 rounded-2xl overflow-hidden transition-colors"
                >
                  <div className="aspect-video bg-[#161B22] overflow-hidden">
                    {r.thumbnail && (
                      <img
                        src={r.thumbnail}
                        alt={r.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                      />
                    )}
                  </div>
                  <div style={{ padding: "20px" }}>
                    <p
                      className="text-white/30 text-[9px] uppercase font-bold"
                      style={{ marginBottom: "8px" }}
                    >
                      {r.published_at
                        ? format(new Date(r.published_at), "MMM d, yyyy")
                        : "—"}
                    </p>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-tight">
                      {r.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div style={{ marginTop: "64px" }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#00E5FF] transition-colors text-xs font-black uppercase tracking-widest"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
