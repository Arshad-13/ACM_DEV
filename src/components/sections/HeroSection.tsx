import Link from "next/link";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";

export default function HeroSection() {
  return (
    <section className="hero-bg relative flex flex-col justify-center min-h-[100vh] w-full overflow-hidden border-b border-[#1A1A1A]">
      
      {/* Decorative architectural grid lines (optional, adds to the blueprint feel) */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.03] z-0" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/[0.03] z-0" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/[0.03] z-0" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.03] z-0" />

      {/* Main Content Area */}
      <div className="z-10 container-width px-6 lg:px-12 w-full mt-[-4rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left: Massive Typography matching ACM VIT style */}
        <div className="flex flex-col z-10 relative">
          <h1 className="font-display leading-[0.9] tracking-tighter uppercase relative">
            <span className="block text-[var(--accent)] mb-2 md:mb-0">
              we are the
            </span>
            <span className="block text-white">
              association for
            </span>
            <span className="block text-white">
              computing machinery
            </span>
          </h1>
        </div>

        {/* Right: Floating CPU Component */}
        <div className="w-full flex justify-center items-center opacity-90 mix-blend-screen pointer-events-none z-0 lg:scale-125 lg:translate-x-12">
          <CpuArchitecture text="ACM SVNIT" className="w-full max-w-[850px] h-auto" />
        </div>
        
      </div>

      {/* Bottom info sections — Monospace, small, precise */}
      <div className="absolute bottom-8 left-0 w-full px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 font-mono text-sm md:text-base z-10 text-zinc-400">
        
        <div className="leading-tight">
          <p>Established at <span className="text-[var(--accent)] font-bold">SVNIT Surat</span>.</p>
          <p>Building the foundation since 2006.</p>
        </div>

        <div className="leading-tight text-left md:text-right">
          <p>Fostering a culture of <span className="text-[var(--accent)] font-bold">algorithmic thinking</span>.</p>
          <p>Pioneering software craftsmanship on campus.</p>
        </div>

      </div>

    </section>
  );
}
