import teamMapping from '../data/team-mapping.json';
import { TeamMember } from "@/types";

export function getTeamByBatch(year: string): TeamMember[] {
  const mapping = (teamMapping as any[])
    .filter(m => m.batch === year)
    .map(m => ({
      id: m.id,
      name: m.name || `ACM Member`, 
      role: m.role,
      image: m.image,
      year: m.batch.replace('_', '-'), // Convert 24_25 to 24-25
      batch: m.batch,
      bio: "Core Committee Member at ACM SVNIT.",
      linkedin: "#",
    }));

  return mapping;
}

export function getAllBatches(): string[] {
  const batches = (teamMapping as any[]).map(m => m.batch);
  const uniqueBatches = Array.from(new Set(batches)).sort((a, b) => b.localeCompare(a));
  
  // Fallback if mapping is empty
  return uniqueBatches.length > 0 ? uniqueBatches : ["25_26"];
}
