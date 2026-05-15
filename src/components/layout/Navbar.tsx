"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "EVENTS", href: "/events" },
  { name: "ACHIEVEMENTS", href: "/achievements" },
  { name: "TEAM", href: "/team" },
  { name: "DOTSLASH", href: "/dotslash" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center pt-8 px-6 lg:px-12 pointer-events-none">
      
      {/* Logo (Left) */}
      <Link href="/" className="pointer-events-auto flex items-center gap-2 z-50 group">
        <div className="w-10 h-10 bg-white text-black font-display font-black text-xl flex items-center justify-center rounded-sm">
          acm
        </div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-xs uppercase leading-none tracking-widest text-white">svnit</span>
          <span className="font-mono text-[10px] uppercase leading-tight text-zinc-500">Student Chapter</span>
        </div>
      </Link>

      {/* Center Nav Pill */}
      <header
        className={cn(
          "pointer-events-auto hidden lg:flex items-center justify-center px-6 py-2 rounded-full border border-white/20 transition-all duration-300",
          scrolled ? "bg-black/90 backdrop-blur-sm border-white/30" : "bg-black/50"
        )}
      >
        <nav className="flex items-center gap-6 font-mono text-[11px] font-semibold tracking-[0.1em]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors uppercase ${
                  isActive ? "text-[var(--accent)]" : "text-white hover:text-[var(--accent)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Right Action Button */}
      <div className="pointer-events-auto flex items-center gap-4">
        <Link
          href="/join"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-5 py-2 font-mono text-[11px] font-bold tracking-widest text-white uppercase hover:bg-[var(--accent-dark)] transition-colors"
        >
          JOIN NOW <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon" className="rounded-none border-white/20 bg-black text-white hover:bg-white/10" />}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l-white/20 w-full sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation links</SheetDescription>
              <nav className="flex flex-col gap-4 mt-12 font-mono text-sm tracking-widest">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "uppercase transition-colors",
                        isActive ? "text-[var(--accent)]" : "text-white hover:text-[var(--accent)]"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
