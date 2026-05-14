'use client';

import Loader from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        <Loader />
        <div className="flex flex-col items-center">
          <p className="font-mono text-[var(--accent)] text-xs uppercase tracking-[0.4em] font-bold animate-pulse">
            // Initializing System
          </p>
          <div className="w-32 h-[1px] bg-[#1A1A1A] mt-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--accent)] animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
