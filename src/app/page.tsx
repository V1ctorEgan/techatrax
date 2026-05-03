import FeaturesGrid from "@/components/sections/FeaturesGrid";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <div className="w-full h-30 " />
      <Testimonials />
      <div className="w-full h-30 " />
    </>
  );
}
