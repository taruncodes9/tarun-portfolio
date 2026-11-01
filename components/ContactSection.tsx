"use client";

import React, { useState } from "react";
import { profile } from "@/data/content";
import { Mail, Github, Linkedin, FileText, ArrowUp, Copy, Check, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-black text-white pt-20 pb-12 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12">
        {/* Main CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-900 to-black p-8 sm:p-12 border border-red-900/30 shadow-2xl mb-16">
          <div className="max-w-2xl">
            <span className="inline-block rounded bg-[#E50914] px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-white mb-3">
              Ready to Collaborate?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Let&apos;s Build High-Impact Systems Together.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
              Whether you need full-stack web applications, scalable backend microservices, custom WordPress plugins, or high-performance desktop tools, I&apos;m ready to contribute.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-bold text-black hover:bg-zinc-200 hover:scale-105 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded bg-zinc-800/90 px-4 py-3 text-sm font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-[#E50914]"
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
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-zinc-800/80 text-xs text-zinc-400">
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Navigation</h4>
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
            <h4 className="font-bold text-white text-sm mb-3">Connect &amp; Social</h4>
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
                  className="inline-flex items-center gap-1.5 hover:text-white transition"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3">Featured Releases</h4>
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
            <h4 className="font-bold text-white text-sm mb-3">Developer Profile</h4>
            <p className="text-zinc-500 leading-relaxed">
              Designed &amp; built by {profile.name}. Styled with Netflix-inspired cinematic streaming aesthetics.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-zinc-400">Deployed via GitHub Pages</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition"
          >
            <span>Back to Top</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition">
              <ArrowUp className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

