"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users } from "lucide-react";

export interface YearData {
  year: string;
  title: string;
  events: string[];
  team: { role: string; name: string }[];
}

export function ChapterTimeline({ data }: { data: YearData[] }) {
  const [selectedYear, setSelectedYear] = useState<YearData | null>(null);

  return (
    <div className="w-full relative py-24 bg-black border-y border-[#1A1A1A]">
      <div className="container-width px-6 lg:px-12 mb-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
          Chapter <span className="text-[var(--accent)]">Legacy</span>
        </h2>
        <p className="font-mono text-zinc-500 mt-4 tracking-tight">Select a year to explore its history, events, and leadership.</p>
      </div>

      {/* Default View: Grid of Years */}
      <div className="container-width px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#1A1A1A]">
          {data.map((item) => (
            <motion.div
              key={item.year}
              layoutId={`card-${item.year}`}
              onClick={() => setSelectedYear(item)}
              className="cursor-pointer border-r border-b border-[#1A1A1A] bg-black hover:bg-[#0A0A0A] p-12 flex flex-col items-center justify-center group transition-colors min-h-[300px]"
            >
              <motion.h2 
                layoutId={`title-${item.year}`}
                className="text-6xl md:text-7xl font-display font-black text-white group-hover:text-[var(--accent)] transition-colors"
              >
                {item.year}
              </motion.h2>
              <motion.p layoutId={`subtitle-${item.year}`} className="font-mono text-zinc-500 mt-6 tracking-widest uppercase text-xs text-center">
                {item.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded View */}
      <AnimatePresence>
        {selectedYear && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              layoutId={`card-${selectedYear.year}`}
              className="w-full max-w-6xl h-full max-h-[90vh] bg-[#050505] border border-[var(--accent)] overflow-y-auto flex flex-col relative shadow-2xl shadow-[var(--accent)]/10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedYear(null)}
                className="absolute top-6 right-6 text-white hover:text-[var(--accent)] transition-colors z-10 bg-black/50 p-2 border border-[#1A1A1A]"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-16 flex-grow flex flex-col">
                <motion.h2 
                  layoutId={`title-${selectedYear.year}`}
                  className="text-7xl md:text-[10rem] leading-none font-display font-black text-[var(--accent)] mb-2"
                >
                  {selectedYear.year}
                </motion.h2>
                <motion.p layoutId={`subtitle-${selectedYear.year}`} className="font-mono text-white text-xl md:text-2xl uppercase tracking-widest mb-16 border-b border-[#1A1A1A] pb-8">
                  {selectedYear.title}
                </motion.p>

                {/* Content Grid */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                  {/* Events */}
                  <div>
                    <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-white mb-8 uppercase tracking-widest border-b border-[#1A1A1A] pb-4">
                      <Calendar className="text-[var(--accent)]" size={24} /> Key Events
                    </h3>
                    <ul className="space-y-6 font-mono text-zinc-400">
                      {selectedYear.events.map((event, idx) => (
                        <li key={idx} className="flex items-start gap-4 hover:text-white transition-colors">
                          <span className="text-[var(--accent)] mt-0.5">{"->"}</span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Team */}
                  <div>
                    <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-white mb-8 uppercase tracking-widest border-b border-[#1A1A1A] pb-4">
                      <Users className="text-[var(--accent)]" size={24} /> Executive Board
                    </h3>
                    <ul className="space-y-6 font-mono text-zinc-400">
                      {selectedYear.team.map((member, idx) => (
                        <li key={idx} className="flex items-center gap-4 hover:text-white transition-colors">
                          <span className="text-[var(--accent)] font-bold text-[10px] bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-2 py-1 tracking-widest uppercase min-w-[120px] text-center">
                            {member.role}
                          </span>
                          <span className="text-lg">{member.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
