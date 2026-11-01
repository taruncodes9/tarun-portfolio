"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project, ProjectCategoryRow } from "@/data/content";
import ProjectCard from "./ProjectCard";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Props {
  row: ProjectCategoryRow;
  projects: readonly Project[];
  onSelectProject: (project: Project) => void;
}

export default function ProjectRow({ row, projects, onSelectProject }: Props) {
  const rowContainerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // GSAP ScrollTrigger animation for the row
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !rowContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rowContainerRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rowContainerRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }, rowContainerRef);

    return () => ctx.revert();
  }, []);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [projects]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  if (projects.length === 0) return null;

  return (
    <section ref={rowContainerRef} className="relative py-3 sm:py-5">
      {/* Category Header */}
      <div className="mb-2.5 px-3 sm:px-6 md:px-12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div className="flex items-center gap-2">
          <span className="h-3.5 sm:h-4 w-1 rounded-full bg-[#E50914]" />
          <h3 className="text-[clamp(1.05rem,2.8vw,1.45rem)] font-bold text-white tracking-tight">
            {row.title}
          </h3>
          {row.badge && (
            <span className="hidden sm:inline-block rounded bg-zinc-800 px-2 py-0.5 text-[9px] font-mono font-semibold text-zinc-400 border border-zinc-700">
              {row.badge}
            </span>
          )}
        </div>
        <p className="text-[clamp(0.68rem,1.8vw,0.78rem)] text-zinc-400 pl-3 sm:pl-0 line-clamp-1 max-w-xl">
          {row.subtitle}
        </p>
      </div>

      {/* Row Container with Slider Navigation */}
      <div className="group relative">
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            aria-label={`Scroll ${row.title} left`}
            className="absolute left-0 top-0 bottom-0 z-30 hidden group-hover:flex items-center justify-center w-8 sm:w-11 bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914]"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 transition-transform group-hover:scale-110" />
          </button>
        )}

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-2.5 sm:gap-4 overflow-x-auto px-3 sm:px-6 md:px-12 py-2 no-scrollbar scroll-smooth"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            aria-label={`Scroll ${row.title} right`}
            className="absolute right-0 top-0 bottom-0 z-30 hidden group-hover:flex items-center justify-center w-8 sm:w-11 bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914]"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 transition-transform group-hover:scale-110" />
          </button>
        )}
      </div>
    </section>
  );
}
