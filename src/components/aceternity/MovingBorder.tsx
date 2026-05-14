"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}) {
  return (
    <div className={cn("relative p-[1px] overflow-hidden rounded-xl", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-xl",
          "bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--accent)_360deg)]",
          borderClassName
        )}
        style={{ 
          animation: `spin ${duration}ms linear infinite`,
        }}
      />
      <div className={cn("relative h-full w-full rounded-xl bg-[var(--surface)]", className)}>
        {children}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
