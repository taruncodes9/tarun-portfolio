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
        { autoAlpha: 0, y: 35, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "expo.out",
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
      className="relative bg-black text-white pt-20 pb-12 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-12">
        {/* Apple Glass Liquid CTA Banner */}
        <div
          ref={bannerRef}
          className="relative overflow-hidden rounded-3xl apple-glass p-8 sm:p-12 md:p-14 shadow-2xl mb-16 sm:mb-20"
        >
          {/* Subtle Red Ambient Glow behind glass */}
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block rounded-full apple-glass-pill px-3 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-red-400 mb-3">
              Ready to Collaborate?
            </span>
            <h2 className="text-[clamp(1.6rem,4.5vw,3rem)] font-black text-white tracking-tight leading-tight">
              Let&apos;s Build High-Impact Systems Together.
            </h2>
            <p className="mt-3 text-[clamp(0.85rem,2vw,1.05rem)] text-zinc-300 leading-relaxed">
              Whether you need full-stack web applications, scalable backend microservices, custom WordPress plugins, or high-performance desktop utilities, I&apos;m ready to contribute.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-bold text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-xl shadow-white/10 focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap"
              >
                <Mail className="h-4 w-4" />
                <span>Send an Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full apple-glass-pill px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E50914] whitespace-nowrap"
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

        {/* Apple-style Footer Links & Navigation */}
        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/10 text-xs text-zinc-400">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm mb-3">Navigation</h4>
            <ul className="space-y-2">
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
            <h4 className="font-bold text-white text-xs sm:text-sm mb-3">Connect &amp; Social</h4>
            <ul className="space-y-2">
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
            <h4 className="font-bold text-white text-xs sm:text-sm mb-3">Featured Releases</h4>
            <ul className="space-y-2">
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
            <h4 className="font-bold text-white text-xs sm:text-sm mb-3">Developer Profile</h4>
            <p className="text-zinc-500 leading-relaxed text-[11px] sm:text-xs">
              Designed &amp; built by {profile.name}. Styled with Apple-inspired frosted liquid glass and cinematic streaming aesthetics.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-zinc-400">Deployed via GitHub Pages</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-2 apple-glass-pill px-4 py-1.5 rounded-full text-zinc-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
