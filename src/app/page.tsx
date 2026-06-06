import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import MissionSection from "@/components/home/MissionSection";
import GirlsEducationSection from "@/components/home/GirlsEducationSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ImpactHighlight from "@/components/home/ImpactHighlight";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Home | Daryeel Rural Development For Action",
  description:
    "Building Hope, One Child at a Time. Supporting quality education, girls' empowerment, tree planting, clean sanitation, and community development in the Somali Region of Ethiopia.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <MissionSection />
      <GirlsEducationSection />
      <ProjectsPreview />
      <ImpactHighlight />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
