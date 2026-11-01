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
          { autoAlpha: 0, y: 30, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "expo.out",
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
          badgeBg: "border-red-500/30 bg-red-500/10 text-red-400",
          icon: <Briefcase className="h-3.5 w-3.5 text-red-400" />,
        };
      case "visitor":
        return {
          label: "Visitor Mode Active",
          tip: "Highlighting interactive live demos, visual showcases & product HUDs.",
          badgeBg: "border-amber-500/30 bg-amber-500/10 text-amber-400",
          icon: <Sparkles className="h-3.5 w-3.5 text-amber-400" />,
        };
      default:
        return {
          label: "Developer Mode Active",
          tip: "Highlighting system architectures, GitHub repositories & backend code.",
          badgeBg: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
          icon: <Terminal className="h-3.5 w-3.5 text-cyan-400" />,
        };
    }
  };

  const modeInfo = getProfileHeaderInfo();

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-start pb-16 pt-32 sm:pb-24 sm:pt-40 overflow-hidden bg-black"
    >
      {/* Background Cinematic Visual & Atmospheric Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-full sm:w-2/3 h-full bg-gradient-to-l from-red-950/20 via-zinc-950/50 to-transparent" />

        {/* Apple-style smooth ambient orbs */}
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-red-600/15 blur-3xl" />
        <div className="absolute top-1/3 right-1/6 h-72 w-72 rounded-full bg-rose-600/10 blur-2xl" />

        {/* Atmospheric Right Blueprint Mockup with Apple Glass */}
        <div className="absolute right-8 top-36 bottom-24 hidden lg:flex items-center justify-center w-5/12 opacity-80 hover:opacity-100 transition-all duration-700">
          <div className="w-full max-w-md rounded-3xl apple-glass p-7 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider">
                FEATURED ARCHITECTURE
              </span>
            </div>

            <div className="mt-5 space-y-3 font-mono text-[11px] text-zinc-300">
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
          {/* Apple Glass Origin Pill */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full apple-glass-pill px-3 py-1 text-[11px] font-black uppercase tracking-widest text-[#E50914]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E50914] text-white text-[9px] font-black">
              N
            </span>
            <span>A TARUN CHHABRA ORIGINAL PORTFOLIO</span>
          </div>

          {/* Mode Switcher Banner */}
          {onOpenProfileSwitcher && (
            <div className="mb-3 block">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full apple-glass-pill px-3 py-1 text-xs">
                <span className={`inline-flex items-center gap-1.5 font-bold ${modeInfo.badgeBg} px-2 py-0.5 rounded-full`}>
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
            </div>
          )}

          {/* Responsive Fluid Main Title */}
          <h1 className="text-[clamp(2.4rem,8.5vw,5.5rem)] font-black text-white tracking-tight leading-[1.03] drop-shadow-2xl break-words">
            {profile.name}
          </h1>

          {/* Responsive Subtitle */}
          <p className="mt-2 text-[clamp(1rem,3.4vw,1.6rem)] font-bold text-red-500/95 tracking-tight leading-snug">
            {profile.title} &amp; Systems Developer
          </p>

          {/* Match & Streaming Metadata Badges (Apple Glass Pills) */}
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold">
            <span className="font-black text-[#46d369] apple-glass-pill px-2.5 py-0.5 rounded-full">
              99% Match
            </span>
            <span className="text-zinc-400 apple-glass-pill px-2 py-0.5 rounded-full">2026</span>
            <span className="apple-glass-pill px-2.5 py-0.5 rounded-full text-[11px] text-zinc-300">
              #1 in Projects Today
            </span>
            <span className="apple-glass-pill px-2.5 py-0.5 rounded-full text-[11px] font-mono text-zinc-300">
              PHP • Laravel • .NET 8 • Java
            </span>
          </div>

          {/* Tagline / Intro */}
          <p className="mt-4 text-[clamp(0.85rem,2.1vw,1.1rem)] text-zinc-300 leading-relaxed max-w-2xl">
            {profile.tagline} Experienced in building high-throughput REST APIs, multi-tenant eCommerce ecosystems, and custom desktop utilities.
          </p>

          {/* Action Buttons (Apple Spring Physics) */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Explore Projects Button */}
            <a
              href="#projects"
              onClick={handleExplore}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 text-xs sm:text-sm md:text-base font-black text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-xl shadow-white/10 focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-black" />
              <span>Explore Projects</span>
            </a>

            {/* Featured Project More Info Button */}
            <button
              onClick={() => setModalProject(featured)}
              className="inline-flex items-center gap-2 rounded-full apple-glass px-5 sm:px-7 py-3 text-xs sm:text-sm md:text-base font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap"
            >
              <Info className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Featured Release</span>
            </button>

            {/* View Resume Button */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 text-xs sm:text-sm md:text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap ${
                activeProfile === "recruiter"
                  ? "bg-[#E50914] text-white hover:bg-[#b80710] shadow-lg shadow-red-950/50 scale-105"
                  : "apple-glass text-zinc-300 hover:text-white"
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
