import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function FeaturedEventsSection() {
  const featuredEvents = [
    {
      id: 1,
      name: "DotSlash 10.0",
      date: "Upcoming 2027",
      category: "Flagship",
      desc: "The decennial edition of our flagship 24-hour national hackathon. Bigger, better, bolder.",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      name: "Echelon Hackathon",
      date: "Jan 17 - Feb 1, 2026",
      category: "Hackathon",
      desc: "National-level Cybersecurity event featuring Online CTF and Offline finals.",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      name: "ACM ICPC Qualifier",
      date: "Oct 5, 2025",
      category: "Competition",
      desc: "The premier global competitive programming challenge regional qualifier.",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      name: "Genesis Bootcamp",
      date: "Dec 8, 2025",
      category: "Bootcamp",
      desc: "Intensive 1-month program focused on cutting-edge AI/ML and Web Dev projects.",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="section-padding bg-[#000000] border-t border-[#1A1A1A]">
      <div className="container-width">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase tracking-tighter">
              What We&apos;ve Been <span className="text-[var(--accent)]">Up To</span>
            </h2>
            <p className="text-zinc-400 text-lg font-mono tracking-tight">
              From flagship hackathons to hands-on workshops.
            </p>
          </div>
          <Link href="/events" className="group flex items-center gap-2 text-white font-mono text-sm tracking-widest uppercase hover:text-[var(--accent)] transition-colors">
            [ View All Events ] <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-0 border border-[#1A1A1A]">
          {featuredEvents.map((event) => (
            <Link
              href={event.id === 1 ? "/dotslash" : "/events"}
              key={event.id}
              className={`card-base relative group p-6 flex flex-col justify-between border-[#1A1A1A] hover:bg-[#050505] transition-colors ${
                event.id === 1 ? 'border-r border-b' :
                event.id === 2 ? 'border-b' :
                event.id === 3 ? 'border-r md:border-b-0' :
                'border-t md:border-t-0'
              } ${event.span}`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-[var(--accent)] border border-[var(--accent)] px-2 py-1 uppercase tracking-widest">
                  {event.category}
                </span>
                <span className="font-mono text-xs text-zinc-500 flex items-center gap-2 uppercase tracking-wider">
                  <Calendar className="w-3 h-3" />
                  {event.date}
                </span>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 uppercase tracking-tighter leading-none group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                  {event.name} {event.id === 1 && <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />}
                </h3>
                <p className="text-zinc-500 font-mono text-sm">
                  {event.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
