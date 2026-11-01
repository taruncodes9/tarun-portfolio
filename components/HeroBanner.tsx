"use client";

import React, { useState } from "react";
import { Play, Info, FileText, Star, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { profile, projects, type Project } from "@/data/content";
import ProjectModal from "./ProjectModal";

export default function HeroBanner() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Featured flagship project is WheelConvert or Multi-Restaurant platform
  const featured = projects.find((p) => p.id === "wheelconvert") || projects[0];

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-start pb-16 pt-32 sm:pb-24 overflow-hidden bg-black">
      {/* Background Cinematic Visual / Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Deep dark gradient with subtle red flare */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-full sm:w-2/3 h-full bg-gradient-to-l from-red-950/20 via-zinc-950 to-transparent" />

        {/* Ambient geometric grid and radial glow */}
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/6 h-72 w-72 rounded-full bg-red-800/10 blur-2xl pointer-events-none" />

        {/* Cinematic Backdrop Visual Representation */}
        <div className="absolute right-4 top-24 bottom-24 hidden lg:flex items-center justify-center w-1/2 opacity-40 hover:opacity-70 transition-opacity duration-700 pointer-events-none">
          <div className="relative h-96 w-full max-w-lg rounded-2xl border border-red-500/20 bg-gradient-to-br from-zinc-900/90 to-black/90 p-8 shadow-2xl shadow-red-950/30">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider">
                FEATURED ARCHITECTURE
              </span>
            </div>

            <div className="mt-8 space-y-4 font-mono text-xs text-zinc-400">
              <div className="text-red-400 font-bold">// Windows 10/11 Radial HUD Utility</div>
              <div>&gt; target: Zero-focus-loss Win32 background hook</div>
              <div>&gt; format: PNG • WEBP • JPEG • PDF • DOCX</div>
              <div>&gt; render: SkiaSharp vector rasterization engine</div>
              <div>&gt; status: 74 unit tests passing (100%)</div>
              <div className="pt-4 text-emerald-400">✓ Production Release v1.0.0 Live</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12">
        <div className="max-w-3xl">
          {/* Netflix Original Header Pill */}
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-widest text-[#E50914]">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#E50914] text-white text-[10px] font-black">
              N
            </span>
            <span>A TARUN CHHABRA ORIGINAL PORTFOLIO</span>
          </div>

          {/* Primary Name & Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] drop-shadow-xl">
            {profile.name}
          </h1>

          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-bold text-red-500/90 tracking-tight">
            {profile.title} &amp; Backend Engineer
          </p>

          {/* Match & Rating Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold">
            <span className="font-black text-[#46d369]">99% Match</span>
            <span className="text-zinc-400">2026</span>
            <span className="rounded border border-zinc-700 bg-black/60 px-2 py-0.5 text-xs text-zinc-300">
              #1 in Projects Today
            </span>
            <span className="rounded bg-zinc-800 px-2 py-0.5 text-xs font-mono text-zinc-300">
              PHP • Laravel • .NET 8 • Next.js
            </span>
          </div>

          {/* Tagline / Introduction */}
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
            {profile.tagline} Experienced in building high-throughput REST APIs, multi-tenant eCommerce ecosystems, and custom desktop utilities.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Explore Projects Button (Netflix Play Style) */}
            <a
              href="#projects"
              onClick={handleExplore}
              className="inline-flex items-center gap-2.5 rounded bg-white px-7 py-3 text-sm sm:text-base font-black text-black transition-all hover:bg-zinc-200 hover:scale-105 shadow-xl shadow-white/10 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            >
              <Play className="h-5 w-5 fill-black" />
              Explore Projects
            </a>

            {/* Featured Project More Info Button (Netflix More Info Style) */}
            <button
              onClick={() => setModalProject(featured)}
              className="inline-flex items-center gap-2.5 rounded bg-zinc-800/80 px-6 py-3 text-sm sm:text-base font-bold text-white border border-white/20 backdrop-blur-md transition-all hover:bg-zinc-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            >
              <Info className="h-5 w-5" />
              Featured Release
            </button>

            {/* View Resume Button */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-transparent px-5 py-3 text-sm sm:text-base font-bold text-zinc-300 border border-zinc-700 hover:border-white hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Featured Project Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}

