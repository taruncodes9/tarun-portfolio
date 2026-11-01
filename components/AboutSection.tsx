"use client";

import React from "react";
import { profile } from "@/data/content";
import { Award, Briefcase, Code, GraduationCap, CheckCircle, Terminal } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#141414] border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E50914]">
          <span className="h-4 w-1 rounded-full bg-[#E50914]" />
          <span>Creator Profile</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Streaming Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8 border border-zinc-800 shadow-2xl">
              <div className="flex items-center gap-4">
                {/* Avatar Badge */}
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-700 text-white font-black text-2xl shadow-lg shadow-red-950/50 ring-2 ring-red-500/30">
                  TC
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="text-sm font-medium text-red-400">
                    {profile.title}
                  </p>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-[#46d369] font-semibold">
                    <span className="h-2 w-2 rounded-full bg-[#46d369] animate-pulse" />
                    Available for New Opportunities
                  </div>
                </div>
              </div>

              {/* Streaming Metadata Details */}
              <div className="mt-6 space-y-3 border-t border-zinc-800/80 pt-6 text-xs text-zinc-300">
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
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-800/80 pt-6 text-center">
                <div className="rounded-lg bg-zinc-900/80 p-3 border border-zinc-800">
                  <div className="text-2xl font-black text-white">12+</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Projects Built</div>
                </div>
                <div className="rounded-lg bg-zinc-900/80 p-3 border border-zinc-800">
                  <div className="text-2xl font-black text-[#46d369]">100%</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Test Pass Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Architecture */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Full-Stack Developer Specializing in Scalable Backends, APIs &amp; Modern Frameworks
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {profile.about}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl bg-zinc-900/50 p-4 border border-zinc-800">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1.5">
                  <Code className="h-4 w-4 text-[#E50914]" />
                  <span>Backend &amp; API Architecture</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Designing robust REST APIs, multi-tenant databases, microservices, and webhook pipelines that handle high concurrency.
                </p>
              </div>

              <div className="rounded-xl bg-zinc-900/50 p-4 border border-zinc-800">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1.5">
                  <Terminal className="h-4 w-4 text-[#E50914]" />
                  <span>Systems &amp; Frontend Integration</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
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

