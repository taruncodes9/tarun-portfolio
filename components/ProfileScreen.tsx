"use client";

import React, { useRef, useEffect } from "react";
import { Terminal, Briefcase, Sparkles, ArrowRight, ShieldCheck, UserCheck } from "lucide-react";
import { gsap } from "@/lib/gsap";

export type ProfileType = "developer" | "recruiter" | "visitor";

export interface ProfileOption {
  id: ProfileType;
  name: string;
  roleDescription: string;
  badge: string;
  gradient: string;
  borderHover: string;
  icon: React.ReactNode;
}

export const PROFILE_OPTIONS: readonly ProfileOption[] = [
  {
    id: "developer",
    name: "Developer",
    roleDescription: "Explore source code, system architecture, API schemas & technical specifications.",
    badge: "ENGINEERING",
    gradient: "from-cyan-600 via-blue-600 to-indigo-800",
    borderHover: "hover:border-cyan-400 hover:shadow-cyan-500/20",
    icon: <Terminal className="h-10 w-10 text-cyan-200" />,
  },
  {
    id: "recruiter",
    name: "Recruiter",
    roleDescription: "Review career progression, verified skills, resume PDF, and direct hiring availability.",
    badge: "TALENT & HIRING",
    gradient: "from-red-600 via-rose-700 to-red-950",
    borderHover: "hover:border-red-500 hover:shadow-red-600/30",
    icon: <Briefcase className="h-10 w-10 text-red-100" />,
  },
  {
    id: "visitor",
    name: "Curious Visitor",
    roleDescription: "Experience live interactive software demos, radial menu HUDs, and product highlights.",
    badge: "LIVE DEMOS",
    gradient: "from-amber-500 via-orange-600 to-yellow-700",
    borderHover: "hover:border-amber-400 hover:shadow-amber-500/20",
    icon: <Sparkles className="h-10 w-10 text-amber-100" />,
  },
];

interface Props {
  onSelectProfile: (profile: ProfileType) => void;
  activeProfile?: ProfileType | null;
  isSwitching?: boolean;
  onCancelSwitch?: () => void;
}

export default function ProfileScreen({
  onSelectProfile,
  activeProfile,
  isSwitching = false,
  onCancelSwitch,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Show immediately
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { autoAlpha: 0, y: -25 },
        { autoAlpha: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          subtitleRef.current,
          { autoAlpha: 0, y: -15 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
          { autoAlpha: 0, y: 40, scale: 0.9 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.2)" },
          "-=0.2",
        )
        .fromTo(
          footerRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSelect = (profile: ProfileType, targetElement: HTMLElement) => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      onSelectProfile(profile);
      return;
    }

    // Animate selected card scaling up, other cards fading away
    const cards = cardsRef.current ? Array.from(cardsRef.current.children) : [];
    const otherCards = cards.filter((c) => c !== targetElement);

    gsap.to(otherCards, {
      autoAlpha: 0,
      scale: 0.85,
      y: 20,
      duration: 0.35,
      ease: "power2.in",
    });

    gsap.to(targetElement, {
      scale: 1.08,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(containerRef.current, {
      autoAlpha: 0,
      duration: 0.5,
      delay: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        onSelectProfile(profile);
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8 text-white select-none overflow-y-auto no-scrollbar"
    >
      {/* Background Netflix atmospheric subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#141414] to-black opacity-95" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl text-center">
        {/* Netflix Brand Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-950/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400">
          <span className="flex h-4 w-4 items-center justify-center rounded bg-[#E50914] text-[10px] font-black text-white">
            N
          </span>
          <span>Tarun Chhabra Portfolio</span>
        </div>

        {/* Netflix-style "Who's exploring?" heading */}
        <h1
          ref={titleRef}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-lg"
        >
          Who&apos;s exploring?
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-3 max-w-lg text-sm sm:text-base text-zinc-400"
        >
          Select a profile to customize your viewing experience and highlight what matters most to you.
        </p>

        {/* Profiles Grid */}
        <div
          ref={cardsRef}
          className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-center items-stretch max-w-4xl mx-auto"
        >
          {PROFILE_OPTIONS.map((p) => {
            const isCurrent = activeProfile === p.id;
            return (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                aria-label={`Select ${p.name} profile`}
                onClick={(e) => handleSelect(p.id, e.currentTarget)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(p.id, e.currentTarget);
                  }
                }}
                className={`group relative flex flex-col items-center justify-between rounded-2xl bg-zinc-900/70 p-6 sm:p-8 text-center border transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-zinc-800/90 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#E50914] ${
                  isCurrent
                    ? "border-red-500 ring-2 ring-red-500/40 bg-zinc-800/90"
                    : "border-zinc-800"
                } ${p.borderHover}`}
              >
                {/* Active Indicator Badge */}
                {isCurrent && (
                  <span className="absolute -top-3 rounded-full bg-[#E50914] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                    Active
                  </span>
                )}

                {/* Avatar Box */}
                <div
                  className={`relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} shadow-xl ring-2 ring-white/10 group-hover:ring-white/40 group-hover:scale-105 transition-all duration-300`}
                >
                  {p.icon}
                  {/* Subtle Netflix gloss sheen */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-white/10" />
                </div>

                {/* Profile Name & Badge */}
                <div className="mt-5 w-full">
                  <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded mb-1.5">
                    {p.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {p.roleDescription}
                  </p>
                </div>

                {/* Action Indicator */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                  <span>Enter Profile</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div ref={footerRef} className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs">
          {isSwitching && onCancelSwitch ? (
            <button
              onClick={onCancelSwitch}
              className="rounded-md border border-zinc-700 bg-zinc-900 px-5 py-2 font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
            >
              Back to Current Portfolio
            </button>
          ) : (
            <button
              onClick={() => {
                if (containerRef.current) {
                  gsap.to(containerRef.current, {
                    autoAlpha: 0,
                    duration: 0.4,
                    onComplete: () => onSelectProfile("developer"),
                  });
                } else {
                  onSelectProfile("developer");
                }
              }}
              className="rounded-md border border-zinc-800 bg-black/60 px-5 py-2 font-medium text-zinc-400 hover:border-zinc-600 hover:text-white transition"
            >
              Skip &amp; Browse All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

