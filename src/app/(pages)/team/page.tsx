"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamMembers } from "@/data/team";
import ScrollReveal from "@/components/shared/ScrollReveal";
import TeamShowcase from "@/components/ui/team-showcase";
import { TeamMember } from "@/types";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TeamPage() {
  const years = ["2024-25", "2023-24", "2022-23"];
  const [activeYear, setActiveYear] = useState(years[0]);
  const [showArchive, setShowArchive] = useState(false);

  const activeTeam = teamMembers.filter((m) => m.year === activeYear);

  return (
    <div className="min-h-screen pt-32 pb-24 w-full overflow-x-hidden bg-black text-white">
      <div className="container-width">

        {/* Heading */}
        <ScrollReveal className="mb-20 text-center lg:text-left border-b border-[#1A1A1A] pb-12">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
            The <span className="text-[var(--accent)] italic">Team</span>
          </h1>
          <p className="font-mono text-zinc-500 text-lg md:text-xl max-w-3xl leading-relaxed uppercase tracking-widest">
            Meet the architects of innovation at ACM SVNIT.
          </p>
        </ScrollReveal>

        {/* Year selector */}
        <ScrollReveal className="mb-12 flex justify-center lg:justify-start">
          <Tabs defaultValue={years[0]} value={activeYear} onValueChange={setActiveYear} className="w-full max-w-lg">
            <TabsList className="flex gap-2 bg-[#0A0A0A] border border-[#1A1A1A] p-1.5 rounded-none">
              {years.map((year) => (
                <TabsTrigger
                  key={year}
                  value={year}
                  className="flex-1 relative py-2 rounded-none text-zinc-500 hover:text-white transition-colors data-[state=active]:text-white text-xs font-mono font-bold uppercase tracking-widest"
                >
                  {activeYear === year && (
                    <motion.div
                      layoutId="yearTab"
                      className="absolute inset-0 bg-[#1A1A1A] border-b-2 border-[var(--accent)] -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </ScrollReveal>

        {/* Immersive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <TeamShowcase members={activeTeam} />
          </motion.div>
        </AnimatePresence>

        {/* Alumni archive */}
        <ScrollReveal className="mt-24 border-t border-[var(--border)] pt-12">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="w-full flex items-center justify-between text-xl font-display font-bold text-white hover:text-[var(--accent)] transition-colors py-3"
          >
            <span>Past Teams &amp; Alumni</span>
            <motion.span animate={{ rotate: showArchive ? 180 : 0 }} transition={{ duration: 0.3 }}>
              ↓
            </motion.span>
          </button>

          <AnimatePresence>
            {showArchive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="py-8 space-y-16">
                  {years.slice(1).map((year) => {
                    const pastTeam = teamMembers.filter((m) => m.year === year);
                    return (
                      <div key={year} className="space-y-8">
                        <h3 className="font-display text-4xl font-bold text-white mb-6 border-l-4 border-[var(--accent)] pl-6 uppercase tracking-tighter">
                          Legacy {year}
                        </h3>
                        <TeamShowcase members={pastTeam} />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>

      </div>
    </div>
  );
}
