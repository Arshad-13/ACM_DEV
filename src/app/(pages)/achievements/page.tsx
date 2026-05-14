"use client";

import CountUp from "react-countup";
import { UsersIcon, CalendarIcon, AwardIcon, FlameIcon, TrophyIcon, StarIcon, ShieldCheckIcon } from "lucide-react";
import { MovingBorder } from "@/components/aceternity";

const extendedAchievements = [
  { id: "1", title: "Best Student Chapter", description: "Awarded the Best Student Chapter in the region for outstanding activities and technical contributions.", year: "2023", prestigious: true },
  { id: "2", title: "DotSlash Success", description: "Successfully hosted DotSlash Hackathon with over 1200 participants from across the country.", year: "2024", prestigious: false },
  { id: "3", title: "Excellence in Open Source", description: "Recognized nationally for generating 500+ successful pull requests during Hacktoberfest.", year: "2022", prestigious: true },
  { id: "4", title: "Top AI Community", description: "Awarded the best AI/ML development club among all NITs.", year: "2023", prestigious: false },
  { id: "5", title: "Best Design Initiative", description: "Acknowledged for redefining branding and creating accessible technical content.", year: "2021", prestigious: false },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-24 pb-0 w-full overflow-x-hidden">
      <div className="container-width pb-20">
        {/* SECTION 1: Counter Wall */}
        <section className="mb-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-white tracking-tight">
            Our <span className="gradient-text">Impact</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Students Reached", count: 500, icon: UsersIcon, suffix: "+" },
              { label: "Events Organized", count: 50, icon: CalendarIcon, suffix: "+" },
              { label: "National Awards", count: 3, icon: TrophyIcon, suffix: "" },
              { label: "Years Strong", count: 8, icon: FlameIcon, suffix: "" },
            ].map((stat, idx) => (
              <div key={idx} className="card-interactive p-8 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <stat.icon className="w-12 h-12 text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <CountUp end={stat.count} duration={3} enableScrollSpy scrollSpyOnce />
                  <span className="text-[var(--accent)]">{stat.suffix}</span>
                </div>
                <div className="text-lg text-[var(--text-secondary)] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Awards & Recognition */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 text-center md:text-left">Accolades & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedAchievements.map((achievement, idx) => {
              const icons = [TrophyIcon, StarIcon, AwardIcon, ShieldCheckIcon];
              const Icon = icons[idx % icons.length];
              
              const CardContent = () => (
                <div className="card-interactive p-6 h-full flex flex-col rounded-xl relative z-10 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)] text-[var(--accent)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
                    {achievement.description}
                  </p>
                </div>
              );

              return achievement.prestigious ? (
                <MovingBorder key={achievement.id} duration={3000 + Math.random() * 2000} containerClassName="h-full">
                  <CardContent />
                </MovingBorder>
              ) : (
                <div key={achievement.id} className="h-full rounded-xl">
                  <CardContent />
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* SECTION 3: By The Numbers */}
      <section className="bg-[var(--surface-raised)] border-y border-white/5 py-20 w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container-width relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { label: "Events per year", value: "15+" },
              { label: "Average Attendees", value: "120" },
              { label: "Workshops Hosted", value: "40+" },
              { label: "Speakers Hosted", value: "25+" },
              { label: "Open Source PRs", value: "800+" },
              { label: "Lines of Code", value: "1M+" },
              { label: "Active Projects", value: "12" },
              { label: "Coffee Cups", value: "∞" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)] font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
