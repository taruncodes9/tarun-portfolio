"use client";

import React, { useState } from "react";
import { skillCategories, skills } from "@/data/content";
import { Server, Layout, ShoppingBag, Database, Cpu, Layers } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="h-4 w-4 text-[#E50914]" />;
      case "Layout":
        return <Layout className="h-4 w-4 text-[#E50914]" />;
      case "ShoppingBag":
        return <ShoppingBag className="h-4 w-4 text-[#E50914]" />;
      case "Database":
        return <Database className="h-4 w-4 text-[#E50914]" />;
      default:
        return <Cpu className="h-4 w-4 text-[#E50914]" />;
    }
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-[#141414] border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E50914]">
            <span className="h-4 w-1 rounded-full bg-[#E50914]" />
            <span>Tech Stack &amp; Capabilities</span>
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Browse by Genre
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            A comprehensive overview of languages, frameworks, systems, and tools in my production toolkit.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative flex flex-col justify-between rounded-xl bg-zinc-900/60 p-6 border border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700/60 group-hover:bg-[#E50914]/10 group-hover:border-[#E50914]/40 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                    {category.genre}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills badges inside card */}
              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-black/60 px-2.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700/60 transition-colors group-hover:border-zinc-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complete Skills Marquee Bar */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 border border-zinc-800/80">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#E50914]" />
            <span>Complete Skills Catalog</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200 border border-zinc-700 hover:border-[#E50914] hover:text-white transition-all hover:scale-105"
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

