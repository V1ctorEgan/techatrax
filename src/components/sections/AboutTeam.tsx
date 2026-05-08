"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image_url: string | null;
};

export default function AboutTeam() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("team_members")
        .select("id, name, role, image_url")
        .eq("is_active", true)
        .order("order_index", { ascending: true });

      if (!error && data) setTeam(data);
      setLoading(false);
    };

    fetchTeam();
  }, []);

  return (
    <section className="bg-[#080C0F] text-white py-24 px-6">
      <div className="mx-auto" style={{ padding: "10px" }}>
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Neural Architects</h2>
          <p
            className="text-white/40 text-sm tracking-wide"
            style={{ paddingBottom: "15px", paddingTop: "10px" }}
          >
            The interdisciplinary minds engineering the future of AI in Nigeria.
          </p>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square rounded-2xl bg-[#0D1117] mb-6" />
                <div className="h-4 bg-[#0D1117] rounded w-2/3 mb-2" />
                <div className="h-3 bg-[#0D1117] rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && team.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/30 text-sm tracking-widest uppercase">
              No team members found
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && team.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {team.map((member) => (
              <div key={member.id} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 border border-white/5 bg-[#0D1117]">
                  {member.image_url ? (
                    <Image
                      src={member.image_url}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10 text-xs tracking-widest uppercase">
                      No Photo
                    </div>
                  )}
                  {/* Subtle Glow Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,12,15,0.8) 0%, transparent 100%)",
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-[#00E5FF] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#00D4AA] text-[10px] font-black uppercase tracking-[0.2em]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
