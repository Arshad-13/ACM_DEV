'use client'

import ChapterTerminal from "@/components/ui/chapter-terminal";
import { motion } from "framer-motion";

export default function TerminalSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="container-width px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-6">
                Technical <br /><span className="text-[var(--accent)]">Deep Dive</span>
              </h2>
              <p className="font-mono text-zinc-400 text-lg leading-relaxed max-w-xl">
                Interact with our systems directly. Access chapter protocols, impact metrics, and historical logs through our secure terminal interface.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-[#1A1A1A]"
            >
              <div>
                <p className="text-[var(--accent)] font-mono text-xs uppercase tracking-widest mb-2">// protocol_v2.0</p>
                <p className="text-white font-mono text-sm leading-relaxed italic">
                  "Building the future of computing, one command at a time."
                </p>
              </div>
              <div>
                <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest mb-2">// system_status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="text-white font-mono text-xs uppercase tracking-widest">Core Active</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Terminal Widget */}
          <div className="flex-[1.5] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)]/20 to-transparent blur-2xl opacity-50 z-0" />
              <div className="relative z-10">
                <ChapterTerminal />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
