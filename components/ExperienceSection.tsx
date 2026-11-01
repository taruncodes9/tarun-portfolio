"use client";

import React, { useRef, useEffect } from "react";
import { experience } from "@/data/content";
import { Calendar, CheckCircle2, Tv } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const seasonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !seasonsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        seasonsRef.current?.children ? Array.from(seasonsRef.current.children) : [],
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: seasonsRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-14 sm:py-20 md:py-24 bg-[#141414] border-t border-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#E50914]">
            <Tv className="h-3.5 w-3.5" />
            <span>Career Seasons</span>
          </div>
          <h2 className="mt-1 text-[clamp(1.5rem,4vw,2.5rem)] font-black text-white tracking-tight">
            Work Experience &amp; Roles
          </h2>
          <p className="mt-1 text-[clamp(0.75rem,2vw,0.875rem)] text-zinc-400">
            A chronological timeline of production engineering roles and professional milestones.
          </p>
        </div>

        {/* Seasons List */}
        <div ref={seasonsRef} className="space-y-6 sm:space-y-8">
          {experience.map((item) => (
            <div
              key={item.role + item.company}
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-black p-4 sm:p-6 md:p-8 border border-zinc-800 transition-all hover:border-zinc-600 hover:shadow-2xl"
            >
              {/* Season Pill Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="rounded bg-[#E50914] px-2 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-white">
                    {item.season}
                  </span>
                  <h3 className="text-[clamp(1.1rem,3vw,1.5rem)] font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Company & Synopsis */}
              <div className="mt-3.5">
                <div className="text-xs sm:text-sm font-semibold text-red-400">
                  {item.company}
                </div>
                <p className="mt-2 text-[clamp(0.78rem,2vw,0.9rem)] text-zinc-300 leading-relaxed max-w-4xl">
                  {item.description}
                </p>
              </div>

              {/* Key Highlights */}
              {item.highlights && (
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-[11px] sm:text-xs text-zinc-300 bg-black/40 p-2.5 rounded-lg border border-zinc-800/60"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#E50914] mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5 pt-3.5 border-t border-zinc-800/80">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-zinc-800/80 px-2 py-0.5 text-[11px] font-mono text-zinc-300 border border-zinc-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
