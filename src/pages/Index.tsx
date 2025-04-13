
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import CtaSection from "@/components/CtaSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Global Migration Portal - Your Gateway to Global Opportunities";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogPreview />
      <CtaSection />
    </>
  );
};

export default Index;
