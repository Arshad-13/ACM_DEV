"use client";

import { MailIcon, MapPinIcon, ClockIcon } from "lucide-react";
import TerminalContactForm from "@/components/ui/terminal-contact-form";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 w-full overflow-x-hidden bg-black text-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column */}
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Get in <br />
              <span className="text-[var(--accent)] italic">Touch</span>
            </h1>
            <p className="font-mono text-zinc-500 text-lg max-w-md mb-16 uppercase tracking-widest leading-relaxed">
              Establishing a direct communication uplink with ACM SVNIT core systems.
            </p>

            <div className="space-y-10">
              {[
                { icon: MailIcon, title: "EMAIL_LINK", details: "acm@svnit.ac.in" },
                { icon: MapPinIcon, title: "GEOSPATIAL_COORD", details: "SVNIT Surat, Gujarat, India 395007" },
                { icon: ClockIcon, title: "UPTIME_WINDOW", details: "Mon–Fri, 17:00 – 19:00 IST" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="p-4 bg-[#0A0A0A] border border-[#1A1A1A] text-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-zinc-600 font-mono text-xs uppercase tracking-[0.3em] mb-2">{item.title}</h3>
                    <p className="text-white text-lg font-medium">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-[#1A1A1A]">
              <p className="text-[10px] font-bold text-zinc-700 mb-6 uppercase tracking-[0.5em]">Digital_Social_Nodes</p>
              <div className="flex gap-4">
                {['Github', 'LinkedIn', 'Instagram', 'Twitter'].map(social => (
                  <a key={social} href="#" className="font-mono text-xs text-zinc-500 hover:text-[var(--accent)] border border-[#1A1A1A] px-4 py-2 hover:border-[var(--accent)] transition-all uppercase tracking-widest">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Terminal Form */}
          <ScrollReveal className="lg:sticky lg:top-32">
            <TerminalContactForm />
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
