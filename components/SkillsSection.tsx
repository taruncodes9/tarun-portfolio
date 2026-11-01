"use client";

import React, { useRef, useEffect } from "react";
import { skillCategories, skills } from "@/data/content";
import { Server, Layout, ShoppingBag, Database, Cpu, Layers } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="h-4 w-4 text-[#E50914]" />;
      case "Layout":
        return <Layout className="h-4 w-4 text-[#E50914]" />;
      case "ShoppingBag":
        return <ShoppingBag className="h-4 w-4 text-[#E50914]" />;
      case "Database":
        return <Database className="h-4 w-4 text-[#E50914]" />;
      default:
        return <Cpu className="h-4 w-4 text-[#E50914]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-14 sm:py-20 md:py-24 bg-[#141414] border-t border-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#E50914]">
            <span className="h-3.5 w-1 rounded-full bg-[#E50914]" />
            <span>Tech Stack &amp; Capabilities</span>
          </div>
          <h2 className="mt-1 text-[clamp(1.5rem,4vw,2.5rem)] font-black text-white tracking-tight">
            Browse by Genre
          </h2>
          <p className="mt-1 text-[clamp(0.75rem,2vw,0.875rem)] text-zinc-400">
            A comprehensive overview of languages, frameworks, systems, and tools in my production toolkit.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div ref={cardsRef} className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative flex flex-col justify-between rounded-xl bg-zinc-900/60 p-5 sm:p-6 border border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700/60 group-hover:bg-[#E50914]/10 group-hover:border-[#E50914]/40 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                    {category.genre}
                  </span>
                </div>

                <h3 className="text-[clamp(0.95rem,2.5vw,1.15rem)] font-bold text-white group-hover:text-red-400 transition-colors">
                  {category.title}
                </h3>
                <p className="mt-1 text-[clamp(0.7rem,1.8vw,0.78rem)] text-zinc-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills badges inside card */}
              <div className="mt-5 flex flex-wrap gap-1.5 pt-3.5 border-t border-zinc-800/80">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-black/60 px-2 py-0.5 text-[11px] font-medium text-zinc-300 border border-zinc-700/60 transition-colors group-hover:border-zinc-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complete Skills Badges Bar */}
        <div className="mt-8 sm:mt-12 rounded-xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-4 sm:p-6 border border-zinc-800/80">
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
            <Layers className="h-3.5 w-3.5 text-[#E50914]" />
            <span>Complete Skills Catalog</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-800/80 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-zinc-200 border border-zinc-700 hover:border-[#E50914] hover:text-white transition-all hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
