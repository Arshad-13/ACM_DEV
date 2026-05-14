"use client";

import { Calendar, Code, FileText, User, Terminal, Zap } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Orientation",
    date: "August 2024",
    content: "The grand induction of the new freshman batch into the ACM SVNIT chapter.",
    category: "Community",
    icon: User,
    relatedIds: [2],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "Intro to Git & GitHub",
    date: "September 2024",
    content: "A hands-on workshop teaching version control and open source contribution basics.",
    category: "Workshop",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 3,
    title: "CP Bootcamp",
    date: "October 2024",
    content: "Intensive 3-week bootcamp covering advanced data structures and algorithms.",
    category: "Bootcamp",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Winter of Code",
    date: "December 2024",
    content: "Month-long open source sprint where students contribute to real-world projects.",
    category: "Open Source",
    icon: Terminal,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "DotSlash 10.0",
    date: "Upcoming 2025",
    content: "Our flagship 24-hour national-level hackathon with over 1000+ participants.",
    category: "Hackathon",
    icon: Zap,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 100,
  },
  {
    id: 6,
    title: "Closing Ceremony",
    date: "April 2025",
    content: "End of year review, core committee handovers, and award distributions.",
    category: "Community",
    icon: Calendar,
    relatedIds: [5],
    status: "pending" as const,
    energy: 50,
  },
];

export default function EventsPage() {
  return (
    <div className="w-full bg-[#000000] min-h-screen pt-32 pb-24">
      
      {/* Main Content Area: Orbit on Left, Text on Right */}
      <div className="container-width px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        
        {/* Left Column: Orbital Timeline */}
        <div className="w-full lg:w-[48%] h-[500px] md:h-[650px] relative border border-[#1A1A1A] bg-[#050505] overflow-hidden">
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
                  <span className={`w-2 h-2 rounded-full ${event.status === 'completed' ? 'bg-white' : event.status === 'in-progress' ? 'bg-[var(--accent)] animate-pulse' : 'bg-zinc-600'}`}></span>
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
