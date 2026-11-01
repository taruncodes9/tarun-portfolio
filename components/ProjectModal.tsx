"use client";

import React, { useEffect } from "react";
import { X, Play, Github, ExternalLink, CheckCircle2, Calendar, Star, Layers } from "lucide-react";
import type { Project } from "@/data/content";
import ProjectCardVisual from "./ProjectCardVisual";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    // Lock body scrolling when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fade-in"
    >
      {/* Dark backdrop blur overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-[#181818] text-white shadow-2xl shadow-black border border-white/10 no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-[#E50914]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero Top Billboard Header */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-zinc-950">
          <ProjectCardVisual project={project} />

          {/* Cinematic Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent" />

          {/* Header Action Content */}
          <div className="absolute bottom-6 left-6 right-6">
            {project.badge && (
              <span className="inline-block rounded bg-[#E50914] px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-white shadow-md">
                {project.badge}
              </span>
            )}
            <h2
              id="project-modal-title"
              className="mt-2 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl text-white drop-shadow-md"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-300 line-clamp-2 max-w-2xl">
              {project.tagline}
            </p>

            {/* CTAs: Live Demo and GitHub */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                >
                  <Play className="h-4 w-4 fill-black" />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-zinc-800/90 px-4 py-2 text-sm font-semibold text-white border border-white/20 transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Metadata badges bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold sm:text-sm">
            <span className="text-[#46d369] font-black tracking-wide">
              {project.matchScore}% Match
            </span>
            <span className="flex items-center gap-1 text-zinc-400">
              <Calendar className="h-3.5 w-3.5" />
              {project.year}
            </span>
            <span className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-[11px] text-zinc-300">
              HD / Production Ready
            </span>
            {project.role && (
              <span className="text-zinc-400">
                <span className="text-zinc-500">Role:</span> {project.role}
              </span>
            )}
          </div>

          {/* Detailed Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
              Overview &amp; Architecture
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200 sm:text-base">
              {project.detailedOverview}
            </p>
          </div>

          {/* Key Features & Functionality */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                Key Features &amp; Technical Capabilities
              </h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800/80"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E50914] mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
              Technologies &amp; Frameworks
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-zinc-900 px-3 py-1 text-xs font-mono font-medium text-zinc-200 border border-zinc-700/60 hover:border-[#E50914]/50 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

