"use client";

import React, { useState } from "react";
import { projectCategoryRows, projects, type Project, type ProjectCategory } from "@/data/content";
import ProjectRow from "./ProjectRow";
import ProjectModal from "./ProjectModal";
import { Flame, Sparkles } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filteredRows =
    activeFilter === "all"
      ? projectCategoryRows
      : projectCategoryRows.filter((r) => r.id === activeFilter);

  return (
    <div id="projects" className="relative py-12 md:py-16 bg-[#141414]">
      {/* Netflix Section Intro & Quick Filters */}
      <div className="px-4 sm:px-8 md:px-12 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/80 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E50914]">
              <Flame className="h-4 w-4" />
              <span>Streaming Catalog</span>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Explore Projects
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Browse production architectures, real-world client platforms, and software solutions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveFilter("all")}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold whitespace-nowrap transition-all ${
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
                className={`rounded-full px-3.5 py-1 text-xs font-semibold whitespace-nowrap transition-all ${
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
      <div className="space-y-4">
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
