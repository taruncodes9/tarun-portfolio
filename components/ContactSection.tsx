"use client";

import React, { useState, useRef, useEffect } from "react";
import { profile } from "@/data/content";
import { Mail, Github, Linkedin, FileText, ArrowUp, Copy, Check, ExternalLink } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !bannerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bannerRef.current,
        { autoAlpha: 0, y: 35 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative bg-black text-white pt-16 sm:pt-20 pb-10 border-t border-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-12">
        {/* Main CTA Banner */}
        <div
          ref={bannerRef}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-900 to-black p-6 sm:p-10 md:p-12 border border-red-900/30 shadow-2xl mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-block rounded bg-[#E50914] px-2.5 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-white mb-2.5">
              Ready to Collaborate?
            </span>
            <h2 className="text-[clamp(1.5rem,4.5vw,3rem)] font-black text-white tracking-tight leading-tight">
              Let&apos;s Build High-Impact Systems Together.
            </h2>
            <p className="mt-2.5 text-[clamp(0.8rem,2vw,1rem)] text-zinc-300 leading-relaxed">
              Whether you need full-stack web applications, scalable backend microservices, custom WordPress plugins, or high-performance desktop utilities, I&apos;m ready to contribute.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-black hover:bg-zinc-200 hover:scale-105 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap"
              >
                <Mail className="h-4 w-4" />
                <span>Send an Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded bg-zinc-800/90 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Netflix-style Footer Links & Navigation */}
        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4 pb-10 border-b border-zinc-800/80 text-xs text-zinc-400">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm mb-2.5">Navigation</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">Projects Catalog</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About Creator</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">Browse Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition">Career Seasons</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm mb-2.5">Connect &amp; Social</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub Profile
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn Profile
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-white transition break-all"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span>{profile.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm mb-2.5">Featured Releases</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="https://taruncodes9.github.io/WheelConvert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WheelConvert Desktop Tool ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/taruncodes9/WheelConvert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WheelConvert Source Code ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition inline-flex items-center gap-1"
                >
                  <FileText className="h-3 w-3" />
                  Download Resume PDF ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm mb-2.5">Developer Profile</h4>
            <p className="text-zinc-500 leading-relaxed text-[11px] sm:text-xs">
              Designed &amp; built by {profile.name}. Styled with Netflix-inspired cinematic streaming aesthetics.
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] sm:text-[11px] text-zinc-400">Deployed via GitHub Pages</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition"
          >
            <span>Back to Top</span>
            <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition">
              <ArrowUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
