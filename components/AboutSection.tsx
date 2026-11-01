"use client";

import React, { useRef, useEffect } from "react";
import { profile, education, certifications } from "@/data/content";
import { Code, Terminal, GraduationCap, Award } from "lucide-react";
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
      const edu = sectionRef.current?.querySelector("[data-about-edu]");

      if (card) {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 35, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "expo.out",
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
            duration: 0.9,
            delay: 0.15,
            ease: "expo.out",
            scrollTrigger: {
              trigger: text,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      }

      if (edu) {
        gsap.fromTo(
          edu,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay: 0.25,
            ease: "expo.out",
            scrollTrigger: {
              trigger: edu,
              start: "top 90%",
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
      className="relative py-16 sm:py-24 bg-[#141414] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#E50914]">
          <span className="h-3.5 w-1 rounded-full bg-[#E50914]" />
          <span>Creator Profile</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Apple Glass Profile Card */}
          <div data-about-card className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl apple-glass p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-4">
                {/* Avatar Badge */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-red-600 to-rose-600 text-white font-black text-2xl shadow-xl shadow-red-950/60 ring-1 ring-white/25">
                  TC
                </div>
                <div>
                  <h3 className="text-[clamp(1.15rem,3vw,1.45rem)] font-bold text-white tracking-tight">
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
              <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Current Role</span>
                  <span className="font-semibold text-white">PHP/Laravel Developer</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Company</span>
                  <span className="font-semibold text-white">Digittrix Infotech Pvt. Ltd.</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Internship</span>
                  <span className="font-semibold text-white">Pisoft Informatics (Java Backend)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Education</span>
                  <span className="font-semibold text-white">MCA (Chitkara) • BCA (Punjabi Univ)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Phone</span>
                  <a href={`tel:${profile.phone}`} className="font-mono text-zinc-300 hover:text-white transition">
                    {profile.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Email</span>
                  <a href={`mailto:${profile.email}`} className="font-mono text-zinc-300 hover:text-white transition truncate max-w-[200px]">
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Key Highlights Metrics */}
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-center">
                <div className="rounded-2xl apple-glass-pill p-3">
                  <div className="text-2xl font-black text-white">12+</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Projects Built</div>
                </div>
                <div className="rounded-2xl apple-glass-pill p-3">
                  <div className="text-2xl font-black text-[#46d369]">7.8</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">MCA CGPA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Architecture */}
          <div data-about-text className="lg:col-span-7 space-y-6">
            <h2 className="text-[clamp(1.4rem,3.5vw,2.5rem)] font-black text-white tracking-tight leading-tight">
              Full-Stack Developer Specializing in Scalable Backends, APIs &amp; Modern Frameworks
            </h2>

            <p className="text-[clamp(0.85rem,2vw,1.05rem)] text-zinc-300 leading-relaxed">
              {profile.about}
            </p>

            <div className="grid gap-3.5 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl apple-glass-card p-5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white mb-1.5">
                  <Code className="h-4 w-4 text-[#E50914]" />
                  <span>Backend &amp; API Architecture</span>
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                  Designing robust REST APIs in PHP/Laravel and Java Spring Boot with MySQL data normalization and third-party integrations (Twilio, Brevo, PHPMailer).
                </p>
              </div>

              <div className="rounded-2xl apple-glass-card p-5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white mb-1.5">
                  <Terminal className="h-4 w-4 text-[#E50914]" />
                  <span>Systems &amp; Frontend Integration</span>
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                  Bridging dynamic Next.js/React user experiences with high-performance desktop utilities (.NET 8/C#) and automated deployments on Nginx and Apache.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Education & Academic Credentials */}
        <div data-about-edu className="mt-14 pt-10 border-t border-white/10">
          <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <GraduationCap className="h-4 w-4 text-[#E50914]" />
            <span>Education &amp; Academic Credentials</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-2xl apple-glass-card p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-full apple-glass-pill px-3 py-0.5 text-[10px] font-mono font-bold text-zinc-300">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-bold text-[#46d369]">
                    {edu.grade}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  {edu.degree} — {edu.field}
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  {edu.institution} • {edu.period}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-start gap-3 rounded-2xl apple-glass-card p-4 text-xs"
              >
                <Award className="h-4 w-4 shrink-0 text-[#E50914] mt-0.5" />
                <div>
                  <div className="font-bold text-zinc-200">{cert.title}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">{cert.detail} ({cert.issuer})</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
