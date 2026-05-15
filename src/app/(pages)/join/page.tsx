"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Lock, AlertCircle } from "lucide-react";

export default function JoinPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-6 pt-32">
      <div className="w-full max-w-2xl bg-[#050505] border border-[#1A1A1A] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] relative">
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_3px,3px_100%]" />

        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-4 bg-[#0A0A0A] border-b border-[#1A1A1A]">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          </div>
          <div className="flex-1 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
            SYSTEM_ACCESS // RECRUITMENT_CORE
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-8 md:p-12 space-y-8 font-mono relative z-10">
          <div className="flex items-center gap-4 text-[var(--accent)] mb-4">
            <Terminal size={20} className="animate-pulse" />
            <span className="text-xs uppercase tracking-widest">Protocol: MEMBER_ACQUISITION_V10</span>
          </div>

          <div className="space-y-6 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <span className="text-zinc-600 font-bold shrink-0">guest@acm:~$</span>
              <span className="text-white">access --recruitment --status</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pl-4 border-l-2 border-zinc-800 space-y-4"
            >
              <div className="flex items-center gap-2 text-yellow-500/80">
                <Lock size={14} />
                <span className="text-[10px] uppercase tracking-widest">ACCESS_RESTRICTED</span>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-wider">
                Recruitment channels are currently <span className="text-white font-bold">OFFLINE</span>. 
                The current academic cycle acquisition window is not yet active.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="pt-8 text-center"
            >
              <h1 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-white mb-4 leading-tight">
                Applications <br />
                <span className="text-[var(--accent)] italic">Opening Soon</span>
              </h1>
              <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] animate-pulse">
                Monitoring system for next availability...
              </p>
            </motion.div>
          </div>

          {/* Alert Footer */}
          <div className="mt-12 p-4 bg-zinc-900/30 border border-zinc-800/50 flex items-center gap-4 text-zinc-500 text-left">
            <AlertCircle size={18} className="text-[var(--accent)] shrink-0" />
            <p className="text-[9px] md:text-[10px] leading-tight uppercase tracking-widest">
              Keep monitoring our digital channels for official broadcast. <br />
              <span className="text-zinc-600">Protocol ID: #SVNIT_ACM_JOIN_2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
