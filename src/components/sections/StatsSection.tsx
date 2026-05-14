"use client";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { label: "Active Members", value: 500, suffix: "+" },
    { label: "Events Hosted", value: 50, suffix: "+" },
    { label: "Years of Legacy", value: 8, suffix: "" },
    { label: "ACM Awards", value: 3, suffix: "" },
  ];

  return (
    <section className="w-full relative z-20 border-b border-[#1A1A1A] bg-[#000000]">
      <div className="container-width px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-r border-[#1A1A1A]">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start justify-center p-6 md:p-10 border-b border-[#1A1A1A] group hover:bg-[#0A0A0A] transition-colors">
              <div className="text-5xl md:text-6xl font-display font-black text-white mb-2 leading-none tracking-tighter group-hover:text-[var(--accent)] transition-colors">
                <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />
                <span className="text-[var(--accent)]">{stat.suffix}</span>
              </div>
              <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
