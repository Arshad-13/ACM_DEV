'use client';

import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { TeamMember } from '@/types';

interface TeamShowcaseProps {
  members: TeamMember[];
}

export default function TeamShowcase({ members }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-16 select-none w-full max-w-7xl mx-auto py-12 px-4 md:px-6">
      {/* ── Left: photo grid ── */}
      <div className="flex gap-4 md:gap-6 flex-shrink-0 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto scrollbar-hide">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 md:gap-6">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[140px] h-[160px] sm:w-[160px] sm:h-[180px] md:w-[190px] md:h-[210px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 md:gap-6 mt-16 md:mt-24">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[150px] h-[170px] sm:w-[170px] sm:h-[190px] md:w-[200px] md:h-[220px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 md:gap-6 mt-8 md:mt-12">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[145px] h-[165px] sm:w-[165px] sm:h-[185px] md:w-[195px] md:h-[215px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member list ── */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-6 pt-4 lg:pt-2 flex-1 w-full border-t lg:border-t-0 lg:border-l border-[#1A1A1A] lg:pl-12 mt-8 lg:mt-0">
        <div className="mb-8 hidden lg:block">
           <h3 className="font-mono text-[var(--accent)] text-xs uppercase tracking-[0.3em] mb-2 font-bold">// chapter_officers</h3>
           <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Select a node to inspect personnel files.</p>
        </div>
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'relative overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-500 border border-[#1A1A1A] group',
        className,
        isDimmed ? 'opacity-30 grayscale' : 'opacity-100',
        isActive ? 'border-[var(--accent)] shadow-[0_0_20px_rgba(0,255,255,0.1)]' : '',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1.1)' : 'grayscale(1) brightness(0.6)',
        }}
      />
      {/* Glitch Overlay on Active */}
      {isActive && (
        <div className="absolute inset-0 bg-[var(--accent)]/5 pointer-events-none mix-blend-overlay animate-pulse" />
      )}
      
      {/* Tag */}
      <div className={cn(
        "absolute bottom-0 left-0 w-full p-2 bg-black/80 backdrop-blur-sm border-t border-[#1A1A1A] transition-transform duration-300 transform",
        isActive ? "translate-y-0" : "translate-y-full"
      )}>
        <p className="font-mono text-[10px] text-[var(--accent)] uppercase font-bold tracking-tighter truncate">{member.role}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.github ?? member.linkedin ?? member.instagram;

  return (
    <div
      className={cn(
        'group cursor-pointer transition-all duration-300 py-1',
        isDimmed ? 'opacity-20 translate-x-0' : 'opacity-100 translate-x-2',
        isActive ? 'translate-x-4' : '',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social*/}
      <div className="flex items-center gap-4">
        <span
          className={cn(
            'h-px bg-current transition-all duration-500',
            isActive ? 'w-12 bg-[var(--accent)]' : 'w-4 bg-zinc-800',
          )}
        />
        <span
          className={cn(
            'text-xl md:text-2xl font-display font-black uppercase tracking-tighter transition-all duration-300',
            isActive ? 'text-[var(--accent)]' : 'text-zinc-400',
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-3 ml-2 transition-all duration-300',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4 pointer-events-none',
            )}
          >
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-zinc-400 hover:text-[var(--accent)] transition-colors"
                title="GitHub"
              >
                <FaGithub size={14} />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-zinc-400 hover:text-[var(--accent)] transition-colors"
                title="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-zinc-400 hover:text-[var(--accent)] transition-colors"
                title="Instagram"
              >
                <FaInstagram size={14} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <div className="flex items-center gap-3 mt-1 ml-[60px]">
        <p className={cn(
          "font-mono text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300",
          isActive ? "text-white" : "text-zinc-600"
        )}>
          {member.role}
        </p>
        {isActive && (
          <span className="font-mono text-[8px] text-[var(--accent)] opacity-50 uppercase tracking-widest">{member.batch}</span>
        )}
      </div>
    </div>
  );
}
