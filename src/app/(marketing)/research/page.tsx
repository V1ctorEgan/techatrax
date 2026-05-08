import Publications from "@/components/sections/Publications";
import ResearchGrid from "@/components/sections/ResearchGrid";
import ResearchHero from "@/components/sections/ResearchHero";
import ResearchPartnership from "@/components/sections/ResearchPartnership";
import Image from "next/image";

export default function ResearchPage() {
  return (
    <div>
      <ResearchHero />
      <ResearchGrid />
      <Publications />
      <ResearchPartnership />
    </div>
  );
}
