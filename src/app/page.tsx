import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedEventsSection from "@/components/sections/FeaturedEventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import TerminalSection from "@/components/sections/TerminalSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal><StatsSection /></ScrollReveal>
      <ScrollReveal><FeaturedEventsSection /></ScrollReveal>
      <ScrollReveal><TerminalSection /></ScrollReveal>
      <ScrollReveal><TestimonialsSection /></ScrollReveal>
      <ScrollReveal><CTASection /></ScrollReveal>
    </>
  );
}
