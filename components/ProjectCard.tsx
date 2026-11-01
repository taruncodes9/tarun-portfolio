"use client";

import React from "react";
import { Play, Plus, Info, Github, ExternalLink } from "lucide-react";
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
      className="group relative flex-none w-[280px] sm:w-[320px] md:w-[360px] aspect-[16/10] cursor-pointer rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:scale-[1.04] hover:z-30 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black focus:outline-none focus:ring-2 focus:ring-[#E50914]"
    >
      {/* Visual / Thumbnail */}
      <div className="absolute inset-0 w-full h-full">
        <ProjectCardVisual project={project} />
      </div>

      {/* Netflix subtle dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Top badges */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
        {project.badge ? (
          <span className="rounded bg-[#E50914] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow">
            {project.badge}
          </span>
        ) : (
          <span />
        )}
        <span className="text-[11px] font-bold text-[#46d369]">
          {project.matchScore}% Match
        </span>
      </div>

      {/* Bottom Content & Hover Expansion Info */}
      <div className="absolute bottom-0 inset-x-0 p-3.5 z-10 flex flex-col justify-end">
        <h4 className="text-base font-bold text-white tracking-tight line-clamp-1 group-hover:text-red-400 transition-colors">
          {project.title}
        </h4>

        {/* Hover drawer that slides or reveals smoothly */}
        <div className="max-h-0 opacity-0 group-hover:max-h-36 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
          <p className="mt-1.5 text-xs text-zinc-300 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="mt-2.5 flex items-center gap-2">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Live Demo"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black hover:bg-zinc-200 transition"
              >
                <Play className="h-3.5 w-3.5 fill-black" />
              </a>
            ) : null}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="GitHub Repository"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 transition"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            ) : null}

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              title="More Info"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 transition"
            >
              <Info className="h-3.5 w-3.5" />
            </button>

            <span className="ml-auto text-[11px] font-mono text-zinc-400">
              {project.year}
            </span>
          </div>

          {/* Mini stack tags */}
          <div className="mt-2 flex flex-wrap gap-1">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-mono text-zinc-300 border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-[9px] font-mono text-zinc-500 self-center">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

