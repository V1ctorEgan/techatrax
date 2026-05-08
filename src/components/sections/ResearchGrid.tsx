"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

type ResearchPaper = {
  id: string;
  title: string;
  abstract: string | null;
  slug: string;
  is_published: boolean;
  published_at: string | null;
};

const TABS = ["All", "AI", "ML", "Data", "Embedded AI", "CAD"];

// Fallback images mapped by index
const FALLBACK_IMAGES = [
  "/images/research-1.jpg",
  "/images/research-2.jpg",
  "/images/research-3.jpg",
];

export default function ResearchGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchPapers = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("research_papers")
        .select("id, title, abstract, slug, is_published, published_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false });

      if (!error && data) setPapers(data);
      setLoading(false);
    };

    fetchPapers();
  }, []);

  return (
    <section
      id="research-grid"
      className="bg-[#080C0F]"
      style={{
        paddingBottom: "120px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div
          className="flex flex-wrap justify-center items-center border-b border-t border-white/5"
          style={{
            gap: "32px",
            marginBottom: "64px",
            paddingBottom: "24px",
            paddingTop: "24px",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-xs font-bold tracking-widest transition-all duration-300 relative"
              style={{
                color: activeTab === tab ? "#00E5FF" : "rgba(255,255,255,0.4)",
                padding: "10px 24px",
              }}
            >
              {tab.toUpperCase()}
              {activeTab === tab && (
                <div
                  className="absolute inset-0 border border-[#00E5FF]/30 bg-[#00E5FF]/5 rounded-full -z-10"
                  style={{ transform: "scale(1.1)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "32px" }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#0D1117] border border-white/5 rounded-2xl overflow-hidden animate-pulse"
                style={{ height: "420px" }}
              />
            ))}
          </div>
        )}

        {/* Empty state — falls back to static projects if no DB data yet */}
        {!loading && papers.length === 0 && (
          <div className="text-center py-24">
            <p className="text-white/30 text-sm tracking-widest uppercase">
              No research papers published yet
            </p>
          </div>
        )}

        {/* Project Grid */}
        {!loading && papers.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "32px" }}
          >
            {papers.map((paper, i) => (
              <div
                key={paper.id}
                className="bg-[#0D1117] border border-white/5 rounded-2xl overflow-hidden flex flex-col group hover:border-white/10 transition-colors"
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-[#111820]">
                  <Image
                    src={FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]}
                    alt={paper.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {i === 0 && (
                    <div
                      className="absolute top-4 right-4 bg-[#00D4AA] text-[#080C0F] text-[10px] font-black rounded-md flex items-center"
                      style={{ padding: "4px 10px", gap: "6px" }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#080C0F] rounded-full animate-pulse" />
                      ACTIVE
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex flex-col flex-1"
                  style={{ padding: "32px" }}
                >
                  <span
                    className="text-[#00D4AA] text-[10px] font-black tracking-widest"
                    style={{ marginBottom: "12px" }}
                  >
                    RESEARCH PAPER
                  </span>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ marginBottom: "16px" }}
                  >
                    {paper.title}
                  </h3>
                  <p
                    className="text-white/40 text-sm leading-relaxed flex-1"
                    style={{ marginBottom: "32px" }}
                  >
                    {paper.abstract ?? "No abstract available."}
                  </p>

                  {/* View Project Button */}
                  <a
                    href={`/research/${paper.slug}`}
                    className="w-full border border-white/10 hover:border-[#00E5FF]/40 text-white font-bold rounded-xl flex items-center justify-center transition-all group/btn"
                    style={{ padding: "14px", gap: "12px", fontSize: "13px" }}
                  >
                    View Project
                    <span className="text-white/30 group-hover/btn:text-[#00E5FF] transition-colors">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
