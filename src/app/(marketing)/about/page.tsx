import AboutCTA from "@/components/sections/AboutCTA";
import AboutDirectives from "@/components/sections/AboutDirectives";
import AboutHero from "@/components/sections/AboutHero";
import AboutTeam from "@/components/sections/AboutTeam";
import AboutTimeline from "@/components/sections/AboutTimeline";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutDirectives />
      <AboutTimeline />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
}
