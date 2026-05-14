import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export default function AboutPage() {
  return (
    <FlowArt aria-label="About ACM SVNIT">
      <FlowSection aria-label="Who we are" style={{ backgroundColor: 'var(--accent)', color: '#000' }}>
        <p className="text-xs font-mono font-bold uppercase tracking-[0.2em]">01 — Who we are</p>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />
        <div>
          <h1 className="font-display text-[clamp(3.5rem,12vw,14rem)] font-black leading-[0.85] uppercase tracking-tighter">
            We<br />
            Are<br />
            ACM<br />
            SVNIT
          </h1>
        </div>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />
        <p className="mt-auto max-w-[50ch] font-mono text-[clamp(1rem,1.5vw,2rem)] font-normal leading-relaxed">
          The premier student-driven tech community at SVNIT Surat. We believe every student deserves a platform to explore, build, and innovate without limits.
        </p>
      </FlowSection>

      <FlowSection aria-label="The mission" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)]">02 — The mission</p>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <div>
          <h2 className="font-display text-[clamp(3.5rem,12vw,14rem)] font-black leading-[0.85] uppercase tracking-tighter">
            Code<br />
            First<br />
            Always
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <p className="max-w-[50ch] font-mono text-[clamp(1rem,1.5vw,2rem)] font-normal leading-relaxed">
          A community built for engineers, by engineers. We're rewriting the rules of how students learn, collaborate, and push the boundaries of technology.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <div className="flex flex-wrap gap-[3vw] font-mono">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">Algorithms</p>
            <p className="text-[clamp(0.85rem,1.1vw,1.05rem)] leading-relaxed text-zinc-400">
              Deep dive into competitive programming and data structures. Building the logic that powers the future.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">Development</p>
            <p className="text-[clamp(0.85rem,1.1vw,1.05rem)] leading-relaxed text-zinc-400">
              From web to systems programming. We build real-world applications that solve real-world problems.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">Community</p>
            <p className="text-[clamp(0.85rem,1.1vw,1.05rem)] leading-relaxed text-zinc-400">
              Find collaborators, mentors, and fellow tech enthusiasts who push your skills forward.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right font-mono text-[clamp(1rem,1.5vw,2rem)] font-normal leading-relaxed">
          Every event we organize starts with one question — does this serve the engineering community?
        </p>
      </FlowSection>

      <FlowSection aria-label="How it works" style={{ backgroundColor: '#111', color: '#fff' }}>
        <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)]">03 — What we do</p>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <div>
          <h2 className="font-display text-[clamp(3.5rem,12vw,14rem)] font-black leading-[0.85] uppercase tracking-tighter">
            Hack.<br />
            Learn.<br />
            Build.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <p className="max-w-[50ch] font-mono text-[clamp(1rem,1.5vw,2rem)] font-normal leading-relaxed">
          Our operations are simple. We provide the platform, the resources, and the network. You bring the innovation.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/20" />
        <div className="flex flex-wrap gap-[3vw] font-mono">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">DotSlash Hackathon</p>
            <p className="text-[clamp(0.85rem,1.1vw,1.05rem)] leading-relaxed text-zinc-400">
              Our flagship 36-hour hackathon bringing together the brightest minds across the country.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">Workshops</p>
            <p className="text-[clamp(0.85rem,1.1vw,1.05rem)] leading-relaxed text-zinc-400">
              Intensive, hands-on sessions covering everything from open-source to artificial intelligence.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">Mentorship</p>
            <p className="text-[clamp(0.85rem,1.1vw,1.05rem)] leading-relaxed text-zinc-400">
              Guidance from seniors and alumni who have secured top placements and research roles.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Join us" style={{ backgroundColor: 'var(--accent)', color: '#000' }}>
        <p className="text-xs font-mono font-bold uppercase tracking-[0.2em]">04 — Join us</p>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />
        <div>
          <h2 className="font-display text-[clamp(3.5rem,12vw,14rem)] font-black leading-[0.85] uppercase tracking-tighter">
            Ready<br />
            To<br />
            Begin?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />
        <p className="mt-auto max-w-[50ch] font-mono text-[clamp(1rem,1.5vw,2rem)] font-normal leading-relaxed">
          Take control of your technical journey. Join ACM SVNIT and let's shape the future of computing together.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
