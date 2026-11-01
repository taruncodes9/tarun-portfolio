"use client";

import React from "react";
import { experience } from "@/data/content";
import { Briefcase, Calendar, CheckCircle2, Tv } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 md:py-24 bg-[#141414] border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E50914]">
            <Tv className="h-4 w-4" />
            <span>Career Seasons</span>
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Work Experience &amp; Roles
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            A chronological timeline of production engineering roles and professional milestones.
          </p>
        </div>

        {/* Seasons List */}
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <div
              key={item.role + item.company}
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-black p-6 sm:p-8 border border-zinc-800 transition-all hover:border-zinc-600 hover:shadow-2xl"
            >
              {/* Season Pill Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-[#E50914] px-2.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                    {item.season}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                  <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Company & Synopsis */}
              <div className="mt-4">
                <div className="text-sm font-semibold text-red-400">
                  {item.company}
                </div>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed max-w-4xl">
                  {item.description}
                </p>
              </div>

              {/* Key Highlights */}
              {item.highlights && (
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 bg-black/40 p-3 rounded-lg border border-zinc-800/60"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E50914] mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-zinc-800/80 px-2.5 py-0.5 text-xs font-mono text-zinc-300 border border-zinc-700/60"
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

