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
        { autoAlpha: 0, y: 35, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "expo.out",
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
      className="relative py-16 sm:py-24 bg-[#141414] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
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

        {/* Seasons List with Apple Glass */}
        <div ref={seasonsRef} className="space-y-6 sm:space-y-8">
          {experience.map((item) => (
            <div
              key={item.role + item.company}
              className="relative overflow-hidden rounded-3xl apple-glass-card p-6 sm:p-8"
            >
              {/* Season Pill Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#E50914] px-3 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-white shadow-md">
                    {item.season}
                  </span>
                  <h3 className="text-[clamp(1.15rem,3vw,1.55rem)] font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 apple-glass-pill px-3 py-1 rounded-full">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Company & Synopsis */}
              <div className="mt-4">
                <div className="text-xs sm:text-sm font-semibold text-red-400">
                  {item.company}
                </div>
                <p className="mt-2 text-[clamp(0.8rem,2vw,0.92rem)] text-zinc-300 leading-relaxed max-w-4xl">
                  {item.description}
                </p>
              </div>

              {/* Key Highlights */}
              {item.highlights && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 text-[11px] sm:text-xs text-zinc-300 apple-glass-pill p-3 rounded-2xl"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E50914] mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full apple-glass-pill px-3 py-0.5 text-[11px] font-mono text-zinc-300"
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
