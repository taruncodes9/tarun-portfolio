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
        { autoAlpha: 0, y: 35, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "expo.out",
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
        return <Server className="h-5 w-5 text-[#E50914]" />;
      case "Layout":
        return <Layout className="h-5 w-5 text-[#E50914]" />;
      case "ShoppingBag":
        return <ShoppingBag className="h-5 w-5 text-[#E50914]" />;
      case "Database":
        return <Database className="h-5 w-5 text-[#E50914]" />;
      default:
        return <Cpu className="h-5 w-5 text-[#E50914]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-16 sm:py-24 bg-[#141414] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
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

        {/* Apple Glass Skill Category Cards */}
        <div ref={cardsRef} className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative flex flex-col justify-between rounded-3xl apple-glass-card p-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl apple-glass-pill group-hover:scale-110 group-hover:border-[#E50914]/50 transition-all duration-300">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 apple-glass-pill px-2.5 py-0.5 rounded-full">
                    {category.genre}
                  </span>
                </div>

                <h3 className="text-[clamp(1rem,2.5vw,1.2rem)] font-bold text-white group-hover:text-red-400 transition-colors">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-[clamp(0.7rem,1.8vw,0.78rem)] text-zinc-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills badges */}
              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full apple-glass-pill px-2.5 py-0.5 text-[11px] font-medium text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complete Skills Badges Bar with Frosted Glass */}
        <div className="mt-10 sm:mt-14 rounded-3xl apple-glass p-6 sm:p-8">
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#E50914]" />
            <span>Complete Skills Catalog</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full apple-glass-pill px-3.5 py-1 text-xs font-medium text-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 hover:text-white"
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
