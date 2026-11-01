"use client";

import React, { useState, useRef, useEffect } from "react";
import { projectCategoryRows, projects, type Project, type ProjectCategory } from "@/data/content";
import ProjectRow from "./ProjectRow";
import ProjectModal from "./ProjectModal";
import { Flame, Sparkles } from "lucide-react";
import type { ProfileType } from "./ProfileScreen";
import { gsap } from "@/lib/gsap";

interface Props {
  activeProfile?: ProfileType | null;
}

export default function Projects({ activeProfile = "developer" }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP animation for catalog header
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const header = sectionRef.current?.querySelector("[data-projects-header]");
      if (header) {
        gsap.fromTo(
          header,
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: header,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter or re-order rows based on profile or activeFilter
  const filteredRows =
    activeFilter === "all"
      ? projectCategoryRows
      : projectCategoryRows.filter((r) => r.id === activeFilter);

  return (
    <div ref={sectionRef} id="projects" className="relative py-10 sm:py-14 md:py-16 bg-[#141414]">
      {/* Netflix Section Intro & Quick Filters */}
      <div data-projects-header className="px-3 sm:px-6 md:px-12 mb-4 sm:mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/80 pb-5">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#E50914]">
              <Flame className="h-3.5 w-3.5" />
              <span>Streaming Catalog</span>
            </div>
            <h2 className="mt-1 text-[clamp(1.5rem,4vw,2.5rem)] font-black text-white tracking-tight">
              Explore Projects
            </h2>
            <p className="mt-1 text-[clamp(0.75rem,2vw,0.875rem)] text-zinc-400">
              Browse production architectures, real-world client platforms, and software solutions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveFilter("all")}
              className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === "all"
                  ? "bg-white text-black shadow"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              All Categories
            </button>
            {projectCategoryRows.map((row) => (
              <button
                key={row.id}
                onClick={() => setActiveFilter(row.id)}
                className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === row.id
                    ? "bg-[#E50914] text-white shadow-lg shadow-red-900/30"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {row.title.split(" & ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-2 sm:space-y-4">
        {filteredRows.map((row) => {
          const rowProjects = projects.filter((p) => p.categories.includes(row.id));
          return (
            <ProjectRow
              key={row.id}
              row={row}
              projects={rowProjects}
              onSelectProject={setSelectedProject}
            />
          );
        })}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
