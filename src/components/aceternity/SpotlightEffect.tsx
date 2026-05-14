"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function SpotlightEffect({ className }: { className?: string }) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Smooth lerp animation loop so spotlight glides, not jumps
    const animate = () => {
      const lerp = 0.08;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerp;

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `
          radial-gradient(800px circle at ${currentPos.current.x}px ${currentPos.current.y}px,
            rgba(14, 165, 233, 0.10) 0%,
            rgba(14, 165, 233, 0.04) 30%,
            transparent 70%
          )
        `;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300",
        className
      )}
    />
  );
}
