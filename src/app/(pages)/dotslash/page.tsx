"use client";

import React from "react";
import BackgroundBeams from "@/components/aceternity/BackgroundBeams";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Terminal, Code2, Cpu, Zap, Timer, CheckCircle } from "lucide-react";

export default function DotSlashPage() {
  return (
    <div className="w-full bg-black min-h-screen text-white antialiased selection:bg-[var(--accent)] selection:text-black">
      
      {/* Navigation */}
      <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50">
         <Link href="/" className="text-zinc-500 hover:text-white flex items-center gap-2 font-mono uppercase tracking-widest text-xs md:text-sm transition-colors border border-zinc-800 bg-black/50 px-4 py-2 hover:border-white backdrop-blur-md">
            <ArrowLeft size={16} /> Back to Base
         </Link>
      </div>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <BackgroundBeams />

        <div className="p-4 relative z-10 w-full flex flex-col items-center container-width">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="flex flex-col items-center w-full"
          >
            {/* Status Badge */}
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-xs md:text-sm tracking-widest uppercase shadow-[0_0_15px_var(--accent)] animate-pulse">
              <Terminal size={16} /> DotSlash 10.0 • Loading...
            </div>
            
            {/* Massive Branding */}
            <h1 className="text-[5rem] md:text-[10rem] lg:text-[14rem] font-black font-display uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700 text-center leading-[0.8] mb-6">
              Dot<span className="text-[var(--accent)]">Slash</span>
            </h1>
            
            <p className="mt-4 text-zinc-400 font-mono text-lg md:text-2xl max-w-3xl text-center uppercase tracking-[0.2em] leading-relaxed">
              24 Hours. Uninterrupted Coding. Zero Limits.
            </p>
            
            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 w-full max-w-4xl border border-zinc-800 bg-black/50 p-8 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <Timer className="text-[var(--accent)] mb-3" size={32} />
                <span className="text-3xl md:text-5xl font-black font-display text-white">24</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-2">Hours</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <Users className="text-[var(--accent)] mb-3" size={32} />
                <span className="text-3xl md:text-5xl font-black font-display text-white">1000+</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-2">Hackers</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <Zap className="text-[var(--accent)] mb-3" size={32} />
                <span className="text-3xl md:text-5xl font-black font-display text-white">₹1L+</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-2">Prize Pool</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <Cpu className="text-[var(--accent)] mb-3" size={32} />
                <span className="text-3xl md:text-5xl font-black font-display text-white">10.0</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-2">Edition</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
            >
              <button className="w-full sm:w-auto px-12 py-5 bg-zinc-800 text-zinc-400 font-bold font-mono text-sm md:text-base uppercase tracking-widest cursor-not-allowed flex justify-center items-center gap-3 border border-zinc-700">
                <Code2 size={20} /> Registration Opening Soon
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ABOUT DOTSLASH SECTION */}
      <section className="py-24 md:py-32 border-t border-[#1A1A1A] bg-[#050505] relative">
        <div className="container-width px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-8 leading-none">
              What is <br /><span className="text-[var(--accent)]">DotSlash?</span>
            </h2>
            <div className="font-mono text-zinc-400 space-y-6 text-lg leading-relaxed">
              <p>
                DotSlash is the flagship hackathon organized by ACM SVNIT. It is a melting pot of hackers, designers, and builders from across the nation, coming together to solve real-world problems.
              </p>
              <p>
                Over the past 9 editions, DotSlash has transformed from a regional coding competition into one of India's premier 24-hour collegiate hackathons. We provide the food, the infrastructure, and the massive prize pools—you provide the logic.
              </p>
            </div>
            
            <div className="mt-12 space-y-4 font-mono">
               <div className="flex items-center gap-3"><CheckCircle className="text-[var(--accent)]" size={20}/> <span>Mentorship from industry experts</span></div>
               <div className="flex items-center gap-3"><CheckCircle className="text-[var(--accent)]" size={20}/> <span>Free food, swags, and energy drinks</span></div>
               <div className="flex items-center gap-3"><CheckCircle className="text-[var(--accent)]" size={20}/> <span>Networking with top recruiters</span></div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] border border-[#1A1A1A] overflow-hidden group flex items-center justify-center">
            {/* Abstract hackathon placeholder / graphic */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-50 group-hover:scale-105 transition-transform duration-1000"></div>
            <div className="relative z-10 flex flex-col items-center">
               <Terminal size={64} className="text-[var(--accent)] mb-4 opacity-50" />
               <span className="font-mono text-[var(--accent)] uppercase tracking-[0.5em] text-sm mix-blend-screen opacity-50">
                 [ DATA LOG : 10.0 ]
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY / PAST EDITIONS */}
      <section className="py-24 md:py-32 border-t border-[#1A1A1A] bg-black">
        <div className="container-width px-6 md:px-12">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter leading-none">
              The <span className="text-[var(--accent)]">Legacy</span>
            </h2>
            <p className="font-mono text-zinc-400 uppercase tracking-widest text-lg">
              9 Editions. Thousands of Hackers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-[#1A1A1A]">
            {[
              { ed: "9.0", year: "2024", theme: "AI & Web3 Innovation", hackers: "1200+" },
              { ed: "8.0", year: "2023", theme: "Open Source & Security", hackers: "1000+" },
              { ed: "7.0", year: "2022", theme: "Pandemic Recovery Solutions", hackers: "800+" },
              { ed: "6.0", year: "2021", theme: "Digital Renaissance (Online)", hackers: "1500+" },
              { ed: "5.0", year: "2020", theme: "Smart Cities & IoT", hackers: "700+" },
              { ed: "4.0", year: "2019", theme: "Fintech & Blockchain", hackers: "500+" },
            ].map((past) => (
              <div key={past.ed} className="p-8 border-r border-b border-[#1A1A1A] hover:bg-[#050505] transition-colors group">
                 <div className="flex justify-between items-start mb-12">
                    <span className="font-display font-black text-4xl text-white group-hover:text-[var(--accent)] transition-colors">
                      {past.ed}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest border border-zinc-800 px-2 py-1">
                      {past.year}
                    </span>
                 </div>
                 <h3 className="font-mono font-bold text-white uppercase tracking-wider mb-2">
                    {past.theme}
                 </h3>
                 <p className="font-mono text-sm text-[var(--accent)]">
                    {past.hackers} Hackers
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// Just a quick icon for users since we didn't import it at the top to avoid clutter
function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
