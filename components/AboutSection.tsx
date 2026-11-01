"use client";

import React, { useRef, useEffect } from "react";
import { profile } from "@/data/content";
import { Code, Terminal, CheckCircle2 } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const card = sectionRef.current?.querySelector("[data-about-card]");
      const text = sectionRef.current?.querySelector("[data-about-text]");

      if (card) {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      }

      if (text) {
        gsap.fromTo(
          text,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-14 sm:py-20 md:py-24 bg-[#141414] border-t border-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#E50914]">
          <span className="h-3.5 w-1 rounded-full bg-[#E50914]" />
          <span>Creator Profile</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Streaming Profile Card */}
          <div data-about-card className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-black p-5 sm:p-7 border border-zinc-800 shadow-2xl">
              <div className="flex items-center gap-3.5">
                {/* Avatar Badge */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-700 text-white font-black text-xl sm:text-2xl shadow-lg shadow-red-950/50 ring-2 ring-red-500/30">
                  TC
                </div>
                <div>
                  <h3 className="text-[clamp(1.1rem,3vw,1.4rem)] font-bold text-white tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-red-400">
                    {profile.title}
                  </p>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#46d369] font-semibold">
                    <span className="h-2 w-2 rounded-full bg-[#46d369] animate-pulse" />
                    Available for New Opportunities
                  </div>
                </div>
              </div>

              {/* Streaming Metadata Details */}
              <div className="mt-5 space-y-2.5 border-t border-zinc-800/80 pt-5 text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Current Role</span>
                  <span className="font-semibold text-white">PHP/Laravel Developer</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Company</span>
                  <span className="font-semibold text-white">Digittrix Infotech Pvt. Ltd.</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Focus Areas</span>
                  <span className="font-semibold text-white">REST APIs, CRM, Systems</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Servers &amp; Deployments</span>
                  <span className="font-semibold text-white">Nginx, Apache, Linux</span>
                </div>
              </div>

              {/* Key Highlights Metrics */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-zinc-800/80 pt-5 text-center">
                <div className="rounded-lg bg-zinc-900/80 p-2.5 border border-zinc-800">
                  <div className="text-xl sm:text-2xl font-black text-white">12+</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Projects Built</div>
                </div>
                <div className="rounded-lg bg-zinc-900/80 p-2.5 border border-zinc-800">
                  <div className="text-xl sm:text-2xl font-black text-[#46d369]">100%</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Test Pass Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Architecture */}
          <div data-about-text className="lg:col-span-7 space-y-5">
            <h2 className="text-[clamp(1.35rem,3.5vw,2.5rem)] font-black text-white tracking-tight leading-tight">
              Full-Stack Developer Specializing in Scalable Backends, APIs &amp; Modern Frameworks
            </h2>

            <p className="text-[clamp(0.85rem,2vw,1.05rem)] text-zinc-300 leading-relaxed">
              {profile.about}
            </p>

            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              <div className="rounded-xl bg-zinc-900/50 p-4 border border-zinc-800">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white mb-1">
                  <Code className="h-4 w-4 text-[#E50914]" />
                  <span>Backend &amp; API Architecture</span>
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                  Designing robust REST APIs, multi-tenant databases, microservices, and webhook pipelines that handle high concurrency.
                </p>
              </div>

              <div className="rounded-xl bg-zinc-900/50 p-4 border border-zinc-800">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white mb-1">
                  <Terminal className="h-4 w-4 text-[#E50914]" />
                  <span>Systems &amp; Frontend Integration</span>
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                  Bridging dynamic Next.js/React user experiences with high-performance desktop tools (.NET 8/C#) and automated deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
