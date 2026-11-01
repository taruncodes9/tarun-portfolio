"use client";

import React from "react";
import { Play, Info, Github, Sparkles } from "lucide-react";
import type { Project } from "@/data/content";
import ProjectCardVisual from "./ProjectCardVisual";

interface Props {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="group relative flex-none w-[clamp(260px,76vw,340px)] aspect-[16/10] cursor-pointer rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:scale-[1.04] hover:z-30 hover:border-zinc-500 hover:shadow-2xl hover:shadow-black focus:outline-none focus:ring-2 focus:ring-[#E50914]"
    >
      {/* Top Background Artwork */}
      <div className="absolute inset-0 w-full h-full">
        <ProjectCardVisual project={project} />
      </div>

      {/* Subtle dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity pointer-events-none" />

      {/* Top Badges Bar */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
        {project.badge ? (
          <span className="rounded bg-[#E50914] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow">
            {project.badge}
          </span>
        ) : (
          <span />
        )}
        <span className="text-[10px] sm:text-[11px] font-bold text-[#46d369] bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-sm">
          {project.matchScore}% Match
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5 z-10 flex flex-col justify-end bg-gradient-to-t from-black via-zinc-950/95 to-transparent pt-8">
        {/* Project Title */}
        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate group-hover:text-red-400 transition-colors">
          {project.title}
        </h4>

        {/* Primary Stack Preview */}
        <p className="text-[11px] text-zinc-400 truncate mt-0.5">
          {project.stack.slice(0, 3).join(" • ")}
        </p>

        {/* Hover Action Strip */}
        <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden mt-1">
          <p className="text-[11px] text-zinc-300 line-clamp-1 leading-snug">
            {project.description}
          </p>

          <div className="mt-2 flex items-center gap-2 pt-1 border-t border-zinc-800">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Live Demo"
                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white text-black hover:bg-zinc-200 transition"
              >
                <Play className="h-3 w-3 fill-black" />
              </a>
            ) : null}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="GitHub Repository"
                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 transition"
              >
                <Github className="h-3 w-3" />
              </a>
            ) : null}

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              title="More Info"
              className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 transition"
            >
              <Info className="h-3 w-3" />
            </button>

            <span className="ml-auto text-[10px] font-mono text-zinc-400">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
