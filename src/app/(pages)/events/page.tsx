"use client";

import { Calendar, Code, FileText, User, Terminal, Zap } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "ACM Summer Challenge",
    date: "11 July 2025",
    content: "Competitive programming challenge specifically designed for 2nd year students.",
    category: "Challenge",
    icon: Code,
    relatedIds: [2],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "ACM Mirror Challenge",
    date: "11 July 2025",
    content: "Advanced mirror challenge for 3rd and 4th year competitive programmers.",
    category: "Challenge",
    icon: Code,
    relatedIds: [1],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Orientation",
    date: "13 Aug 2025",
    content: "The official induction of the fresh batch into the ACM SVNIT student chapter.",
    category: "Community",
    icon: User,
    relatedIds: [4],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "Executive Recruitment",
    date: "19 Aug 2025",
    content: "Hunting for the next generation of leaders to join our executive committee.",
    category: "Recruitment",
    icon: Terminal,
    relatedIds: [3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "ACM ICPC",
    date: "5 Oct 2025",
    content: "The world's premier competitive programming competition local qualifier.",
    category: "Competition",
    icon: Zap,
    relatedIds: [6],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 6,
    title: "n8n Workshop",
    date: "7 Oct 2025",
    content: "Hands-on session on workflow automation using the n8n platform.",
    category: "Workshop",
    icon: FileText,
    relatedIds: [5],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 7,
    title: "Genesis Bootcamp",
    date: "8 Dec 2025",
    content: "A month-long intensive bootcamp focusing on AI/ML and Web Development projects.",
    category: "Bootcamp",
    icon: Code,
    relatedIds: [8],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 8,
    title: "Hour of AI",
    date: "Dec 2025",
    content: "Empowering school students with the basics and power of Artificial Intelligence.",
    category: "Workshop",
    icon: User,
    relatedIds: [7],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 9,
    title: "Echelon Hackathon",
    date: "17 Jan - 1 Feb 2026",
    content: "National-level Cybersecurity hackathon with Online CTF and Offline finals. ₹1L+ Prize Pool.",
    category: "Hackathon",
    icon: Zap,
    relatedIds: [10, 11],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 10,
    title: "CodeCraft",
    date: "27 Feb - 1 Mar 2026",
    content: "ACM x Mindbend 2026 flagship coding competition.",
    category: "Competition",
    icon: Code,
    relatedIds: [9, 11],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 11,
    title: "DotSlash 9.0 - Glitchverse",
    date: "21-22 Mar 2026",
    content: "Flagship 24-hour national hackathon. Code the cosmos in the Glitchverse.",
    category: "Flagship",
    icon: Zap,
    relatedIds: [10, 12],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 12,
    title: "DotSlash 10.0",
    date: "Upcoming 2027",
    content: "The decennial edition of our flagship national hackathon. Bigger, better, bolder.",
    category: "Flagship",
    icon: Zap,
    relatedIds: [11],
    status: "pending" as const,
    energy: 100,
  },
];

export default function EventsPage() {
  return (
    <div className="w-full bg-[#000000] min-h-screen pt-32 pb-24">
      
      {/* Main Content Area: Orbit on Left, Text on Right */}
      <div className="container-width px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        
        {/* Left Column: Orbital Timeline */}
        <div className="w-full lg:w-[48%] h-[500px] md:h-[650px] relative border border-[#1A1A1A] bg-[#050505]">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>

        {/* Right Column: Heading Text */}
        <div className="w-full lg:w-[48%] text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.8]">
              Event <br />
              <span className="text-[var(--accent)] italic">Trajectory</span>
            </h1>
            <p className="font-mono text-zinc-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-[var(--accent)] pl-6 py-2">
              Explore the timeline of our flagship events, bootcamps, and hackathons throughout the academic year. Use the interactive orbit to deep-dive into specific milestones.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-12 border-t border-[#1A1A1A]">
             <div className="space-y-1">
               <p className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-widest">{"// chapter_status"}</p>
               <p className="text-white font-mono text-sm uppercase font-bold flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
                 Active 2024-25
               </p>
             </div>
             <div className="space-y-1">
               <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">{"// mission_protocol"}</p>
               <p className="text-white font-mono text-sm uppercase font-bold">Innovation first</p>
             </div>
          </div>
        </div>

      </div>

      {/* Additional Details Grid to fill the page */}
      <div className="container-width px-6 lg:px-12 mt-24">
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-12">
          Featured <span className="text-[var(--accent)]">Workshops</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[#1A1A1A]">
          {timelineData.map((event, idx) => (
            <div key={idx} className="p-8 border-r border-b border-[#1A1A1A] hover:bg-[#0A0A0A] transition-colors flex flex-col group cursor-pointer">
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs font-bold text-[var(--accent)] border border-[var(--accent)] px-2 py-1 uppercase tracking-widest">
                  {event.category}
                </span>
                <span className="font-mono text-xs text-zinc-500 flex items-center gap-2 uppercase tracking-wider">
                  <Calendar className="w-3 h-3" />
                  {event.date}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tighter leading-tight group-hover:text-[var(--accent)] transition-colors">
                {event.title}
              </h3>
              <p className="text-zinc-500 font-mono text-sm leading-relaxed mb-8 flex-grow">
                {event.content}
              </p>
              <div className="mt-auto">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${event.status === 'completed' ? 'bg-white' : 'bg-zinc-600'}`}></span>
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
