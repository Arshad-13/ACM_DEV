'use client';

import Loader from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="min-h-[40vh] w-full flex items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm">
        <Loader />
        <div className="flex flex-col items-center">
          <p className="font-mono text-[var(--accent)] text-xs uppercase tracking-[0.4em] font-bold animate-pulse text-center">
            {"// Initializing System"}
          </p>
          <div className="w-32 h-[1px] bg-white/10 mt-4 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[var(--accent)] animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
