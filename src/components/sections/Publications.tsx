"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Publication = {
  id: string;
  title: string;
  meta: string | null;
  pdf_url: string | null;
};

export default function Publications() {
  const [papers, setPapers] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchPublications = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("publications")
        .select("id, title, meta, pdf_url")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (!error && data) setPapers(data);
      setLoading(false);
    };

    fetchPublications();
  }, []);

  const handlePDF = (url: string | null) => {
    if (url) {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  const handleDownload = async (url: string | null, title: string) => {
    if (!url) return;
    const res = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.pdf`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <section
      className="bg-[#080C0F]"
      style={{
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div style={{ marginBottom: "48px" }}>
          <h2
            className="text-white text-4xl font-bold"
            style={{ marginBottom: "16px" }}
          >
            Publications
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "#00D4AA",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="flex flex-col" style={{ gap: "16px" }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#0D1117] border border-white/5 rounded-2xl animate-pulse"
                style={{ padding: "32px", height: "96px" }}
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && papers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/30 text-sm tracking-widest uppercase">
              No publications yet
            </p>
          </div>
        )}

        {/* Paper List */}
        {!loading && papers.length > 0 && (
          <div className="flex flex-col" style={{ gap: "16px" }}>
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="group bg-[#0D1117] border border-white/5 hover:border-[#00E5FF]/20 rounded-2xl flex items-center justify-between transition-all"
                style={{ padding: "32px" }}
              >
                {/* Left Side: Info */}
                <div>
                  <h3
                    className="text-white text-lg font-bold group-hover:text-[#00E5FF] transition-colors"
                    style={{ marginBottom: "8px" }}
                  >
                    {paper.title}
                  </h3>
                  <p className="text-white/30 text-xs font-medium uppercase tracking-widest">
                    {paper.meta ?? "—"}
                  </p>
                </div>

                {/* Right Side: Actions */}
                <div className="flex items-center" style={{ gap: "16px" }}>
                  <button
                    onClick={() => handlePDF(paper.pdf_url)}
                    disabled={!paper.pdf_url}
                    className="flex items-center text-white/40 hover:text-white bg-[#161B22] border border-white/5 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      padding: "10px 16px",
                      gap: "8px",
                      fontSize: "11px",
                      fontWeight: "bold",
                    }}
                  >
                    📄 PDF
                  </button>
                  <button
                    onClick={() => handleDownload(paper.pdf_url, paper.title)}
                    disabled={!paper.pdf_url}
                    className="w-10 h-10 flex items-center justify-center bg-[#161B22] border border-white/5 rounded-full text-white/40 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
