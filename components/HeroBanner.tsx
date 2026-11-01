"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Info, FileText, Sparkles, Terminal, Briefcase, RefreshCw, CheckCircle2 } from "lucide-react";
import { profile, projects, type Project } from "@/data/content";
import ProjectModal from "./ProjectModal";
import type { ProfileType } from "./ProfileScreen";
import { gsap } from "@/lib/gsap";

interface Props {
  activeProfile?: ProfileType | null;
  onOpenProfileSwitcher?: () => void;
}

export default function HeroBanner({
  activeProfile = "developer",
  onOpenProfileSwitcher,
}: Props) {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Flagship project: WheelConvert or Multi-Restaurant platform
  const featured = projects.find((p) => p.id === "wheelconvert") || projects[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeProfile]);

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getProfileHeaderInfo = () => {
    switch (activeProfile) {
      case "recruiter":
        return {
          label: "Recruiter Mode Active",
          tip: "Highlighting verified experience, skill inventory & direct resume access.",
          badgeBg: "border-red-500/40 bg-red-950/40 text-red-400",
          icon: <Briefcase className="h-3.5 w-3.5 text-red-400" />,
        };
      case "visitor":
        return {
          label: "Visitor Mode Active",
          tip: "Highlighting interactive live demos, visual showcases & product HUDs.",
          badgeBg: "border-amber-500/40 bg-amber-950/40 text-amber-400",
          icon: <Sparkles className="h-3.5 w-3.5 text-amber-400" />,
        };
      default:
        return {
          label: "Developer Mode Active",
          tip: "Highlighting system architectures, GitHub repositories & backend code.",
          badgeBg: "border-cyan-500/40 bg-cyan-950/40 text-cyan-400",
          icon: <Terminal className="h-3.5 w-3.5 text-cyan-400" />,
        };
    }
  };

  const modeInfo = getProfileHeaderInfo();

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-start pb-14 pt-28 sm:pb-20 sm:pt-36 overflow-hidden bg-black"
    >
      {/* Background Cinematic Visual & Atmospheric Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-full sm:w-2/3 h-full bg-gradient-to-l from-red-950/20 via-zinc-950/50 to-transparent" />

        {/* Ambient Red Glows */}
        <div className="absolute top-1/4 right-1/4 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/6 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-red-800/10 blur-2xl" />

        {/* Atmospheric Right Blueprint Mockup (Desktop only) */}
        <div className="absolute right-6 top-32 bottom-20 hidden lg:flex items-center justify-center w-5/12 opacity-40 hover:opacity-60 transition-opacity duration-700">
          <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-gradient-to-br from-zinc-900/90 to-black/95 p-6 shadow-2xl shadow-red-950/30">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider">
                FLAGSHIP RELEASE
              </span>
            </div>

            <div className="mt-5 space-y-3 font-mono text-[11px] text-zinc-400">
              <div className="text-red-400 font-bold">// WheelConvert v1.0.0 Production</div>
              <div>&gt; target: Win32 HUD Radial Utility (.NET 8)</div>
              <div>&gt; formats: PNG, WEBP, JPEG, PDF, DOCX, TXT</div>
              <div>&gt; raster: SkiaSharp &amp; Windows.Data.Pdf</div>
              <div>&gt; tests: 74/74 passing (100% test coverage)</div>
              <div className="pt-2 text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Verified Clean Build • GitHub Release Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-3 sm:px-6 md:px-12">
        <div ref={contentRef} className="max-w-3xl">
          {/* Netflix Original Header Pill */}
          <div className="mb-2.5 flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#E50914]">
            <span className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded bg-[#E50914] text-white text-[9px] sm:text-[10px] font-black">
              N
            </span>
            <span>A TARUN CHHABRA ORIGINAL PORTFOLIO</span>
          </div>

          {/* Mode Switcher Banner */}
          {onOpenProfileSwitcher && (
            <div className="mb-3 inline-flex flex-wrap items-center gap-2 rounded-lg border px-2.5 py-1 text-xs">
              <span className={`inline-flex items-center gap-1.5 font-bold ${modeInfo.badgeBg} px-2 py-0.5 rounded`}>
                {modeInfo.icon}
                <span>{modeInfo.label}</span>
              </span>
              <span className="hidden sm:inline text-zinc-400 text-[11px]">{modeInfo.tip}</span>
              <button
                onClick={onOpenProfileSwitcher}
                className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-300 hover:text-white underline decoration-zinc-600 underline-offset-2 transition"
              >
                <span>Switch</span>
                <RefreshCw className="h-2.5 w-2.5" />
              </button>
            </div>
          )}

          {/* Responsive Fluid Main Title */}
          <h1 className="text-[clamp(2.2rem,8.5vw,5.5rem)] font-black text-white tracking-tight leading-[1.04] drop-shadow-xl break-words">
            {profile.name}
          </h1>

          {/* Responsive Subtitle */}
          <p className="mt-2 text-[clamp(1rem,3.4vw,1.6rem)] font-bold text-red-500/95 tracking-tight leading-snug">
            {profile.title} &amp; Systems Developer
          </p>

          {/* Match & Streaming Metadata Badges */}
          <div className="mt-3.5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
            <span className="font-black text-[#46d369]">99% Match</span>
            <span className="text-zinc-400">2026</span>
            <span className="rounded border border-zinc-700 bg-black/60 px-2 py-0.5 text-[11px] text-zinc-300">
              #1 in Projects Today
            </span>
            <span className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
              PHP • Laravel • .NET 8 • Next.js
            </span>
          </div>

          {/* Tagline / Intro */}
          <p className="mt-3.5 text-[clamp(0.85rem,2.1vw,1.1rem)] text-zinc-300 leading-relaxed max-w-2xl">
            {profile.tagline} Experienced in building high-throughput REST APIs, multi-tenant eCommerce ecosystems, and custom desktop utilities.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Explore Projects Button */}
            <a
              href="#projects"
              onClick={handleExplore}
              className="inline-flex items-center gap-2 rounded bg-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-black text-black transition-all hover:bg-zinc-200 hover:scale-105 shadow-xl shadow-white/10 focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-black" />
              <span>Explore Projects</span>
            </a>

            {/* Featured Project More Info Button */}
            <button
              onClick={() => setModalProject(featured)}
              className="inline-flex items-center gap-2 rounded bg-zinc-800/85 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-bold text-white border border-white/20 backdrop-blur-md transition-all hover:bg-zinc-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap"
            >
              <Info className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Featured Release</span>
            </button>

            {/* View Resume Button (Highlighted in recruiter mode) */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap ${
                activeProfile === "recruiter"
                  ? "bg-[#E50914] text-white hover:bg-[#b80710] shadow-lg shadow-red-950/50 scale-105"
                  : "bg-transparent text-zinc-300 border border-zinc-700 hover:border-white hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>View Resume</span>
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
