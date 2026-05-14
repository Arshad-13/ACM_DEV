import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-[var(--accent)] text-black border-y border-[#1A1A1A]">
      <div className="container-width flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 uppercase tracking-tighter leading-[0.9]">
            Ready to <br />
            Join Us?
          </h2>
          <p className="font-mono text-lg md:text-xl font-semibold max-w-xl">
            Be part of the most active tech community on campus. Build projects, attend workshops, and shape the future of computing.
          </p>
        </div>
        
        <Link
          href="/contact"
          className="group inline-flex items-center justify-between gap-4 bg-black text-white px-8 py-6 font-display text-2xl uppercase tracking-tighter hover:bg-white hover:text-black transition-colors border border-black hover:border-black"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
