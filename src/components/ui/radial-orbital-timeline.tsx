"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [isMounted, setIsMounted] = useState(false);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Categorize for Dual Orbits
  const outerCategories = ["Flagship", "Hackathon", "Competition", "Bootcamp"];
  const outerNodes = timelineData.filter(item => outerCategories.includes(item.category));
  const innerNodes = timelineData.filter(item => !outerCategories.includes(item.category));

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && isMounted) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.2) % 360);
      }, 50);
    }

    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate, isMounted]);

  const calculateNodePosition = (item: TimelineItem) => {
    const isOuter = outerCategories.includes(item.category);
    const nodesInOrbit = isOuter ? outerNodes : innerNodes;
    const index = nodesInOrbit.findIndex(node => node.id === item.id);
    const total = nodesInOrbit.length;
    
    // Use stable rotationAngle (starts at 0)
    const angle = ((index / total) * 360 + (isOuter ? rotationAngle : -rotationAngle * 0.5)) % 360;
    const radius = isOuter ? 260 : 160;
    const radian = (angle * Math.PI) / 180;

    // Use toFixed to ensure SSR and Client match exactly
    const x = parseFloat((radius * Math.cos(radian)).toFixed(3));
    const y = parseFloat((radius * Math.sin(radian)).toFixed(3));

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = parseFloat(Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))).toFixed(3));

    return { x, y, angle, zIndex, opacity, isOuter };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "text-white bg-black border-white";
      case "in-progress": return "text-black bg-[var(--accent)] border-black";
      case "pending": return "text-white bg-black/40 border-white/50";
      default: return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-black font-mono"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Orbit Lines */}
        <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute w-[320px] h-[320px] rounded-full border border-white/5 pointer-events-none" />

        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* CENTER STAR */}
          <div className="absolute w-24 h-24 rounded-full bg-black flex items-center justify-center z-50 border border-[var(--accent)] shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            <div className="absolute inset-0 rounded-full border border-[var(--accent)]/50 animate-ping opacity-70" />
            <div className="flex flex-col items-center justify-center text-center">
               <span className="text-[var(--accent)] font-bold text-sm tracking-tighter leading-none">ACM</span>
               <span className="text-white text-[10px] font-black tracking-widest mt-1">25-26</span>
            </div>
          </div>

          {timelineData.map((item) => {
            const position = calculateNodePosition(item);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 500 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            // Calculate card alignment
            const horizontalClass = position.x < -100 ? "left-0 translate-x-0" : 
                                    position.x > 100 ? "right-0 translate-x-0 left-auto" : 
                                    "left-1/2 -translate-x-1/2";

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Impact Glow */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.4 + 50}px`,
                    height: `${item.energy * 0.4 + 50}px`,
                    left: `-${(item.energy * 0.4 + 50 - 40) / 2}px`,
                    top: `-${(item.energy * 0.4 + 50 - 40) / 2}px`,
                  }}
                />

                {/* Node Icon */}
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform
                  ${isExpanded ? "bg-[var(--accent)] text-black scale-150 border-[var(--accent)] shadow-lg shadow-[var(--accent)]/30" : 
                    isRelated ? "bg-[var(--accent)]/50 text-black border-[var(--accent)] animate-pulse" : 
                    "bg-black text-white border-white/40 border-2"}
                `}
                >
                  <Icon size={16} />
                </div>

                {/* Event Label (Fixed overlapping) */}
                <div
                  className={`
                  absolute top-12 left-1/2 -translate-x-1/2 w-32
                  text-center text-[10px] font-bold tracking-wider leading-tight
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-110" : "text-white/60"}
                `}
                >
                  {item.title}
                </div>

                {/* Expanded Card */}
                {isExpanded && (
                  <Card 
                    className={`
                      absolute w-64 bg-black/95 backdrop-blur-xl border-[var(--accent)]/50 shadow-2xl shadow-[var(--accent)]/20 overflow-visible rounded-none z-[100]
                      ${horizontalClass}
                      ${position.y > 100 ? "bottom-24" : "top-20"}
                    `}
                  >
                    <div className={`absolute left-1/2 -translate-x-1/2 w-px h-3 bg-[var(--accent)]/50 ${position.y > 100 ? "-bottom-3" : "-top-3"}`} />
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-[10px] rounded-none ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "ACTIVE" : "UPCOMING"}
                        </Badge>
                        <span className="text-[10px] font-mono text-[var(--accent)]">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm mt-2 font-display uppercase tracking-widest text-white leading-none">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-[11px] text-white/80 leading-relaxed">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-[10px] mb-1">
                          <span className="flex items-center text-[var(--accent)]">
                            <Zap size={10} className="mr-1" /> Impact Level
                          </span>
                          <span className="font-mono text-white">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 overflow-hidden">
                          <div className="h-full bg-[var(--accent)]" style={{ width: `${item.energy}%` }} />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                           <h4 className="text-[10px] uppercase tracking-widest font-medium text-[var(--accent)] mb-2">Related Files</h4>
                           <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const rel = timelineData.find(i => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-6 px-2 text-[10px] rounded-none border-white/10 bg-transparent text-white/60 hover:text-[var(--accent)]"
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {rel?.title}
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
