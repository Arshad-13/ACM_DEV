import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedEventsSection from "@/components/sections/FeaturedEventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { ChapterTimeline } from "@/components/ui/chapter-timeline";
import TerminalSection from "@/components/sections/TerminalSection";

const chapterHistoryData = [
  {
    year: "2021",
    title: "The Foundation",
    events: ["First official CP Bootcamp", "Establishment of Core Committee", "Open Source Initiative launch"],
    team: [
      { role: "President", name: "Rahul Sharma" },
      { role: "Vice Pres", name: "Sneha Patel" },
      { role: "Tech Lead", name: "Aman Gupta" }
    ]
  },
  {
    year: "2022",
    title: "Scaling Heights",
    events: ["DotSlash 5.0 National Hackathon", "Intro to Web3 Seminar", "Alumni Mentorship Program"],
    team: [
      { role: "President", name: "Karan Desai" },
      { role: "Vice Pres", name: "Anjali Rao" },
      { role: "Design Lead", name: "Priya Singh" }
    ]
  },
  {
    year: "2023",
    title: "Digital Renaissance",
    events: ["DotSlash 6.0 (Record 1500+ attendees)", "AI & ML Specialized Bootcamp", "Hacktoberfest '23 Setup"],
    team: [
      { role: "President", name: "Vikram Mehta" },
      { role: "Vice Pres", name: "Neha Verma" },
      { role: "Event Head", name: "Arjun Reddy" }
    ]
  },
  {
    year: "2024",
    title: "The Golden Era",
    events: ["DotSlash 7.0 Hackathon", "Winter of Code Integration", "National ACM India Summit Representation"],
    team: [
      { role: "President", name: "Current Board" },
      { role: "Vice Pres", name: "Current Board" },
      { role: "Treasurer", name: "Current Board" }
    ]
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal><StatsSection /></ScrollReveal>
      <ScrollReveal><FeaturedEventsSection /></ScrollReveal>
      <ChapterTimeline data={chapterHistoryData} />
      <ScrollReveal><TerminalSection /></ScrollReveal>
      <ScrollReveal><TestimonialsSection /></ScrollReveal>
      <ScrollReveal><CTASection /></ScrollReveal>
    </>
  );
}
