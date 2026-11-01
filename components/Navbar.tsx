"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/data/content";
import { Github, FileText, Menu, X, ArrowUpRight, UserCheck, RefreshCw } from "lucide-react";
import type { ProfileType } from "./ProfileScreen";

interface Props {
  activeProfile?: ProfileType | null;
  onOpenProfileSwitcher?: () => void;
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ activeProfile = "developer", onOpenProfileSwitcher }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getProfileLabel = () => {
    switch (activeProfile) {
      case "developer":
        return { name: "Developer", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" };
      case "recruiter":
        return { name: "Recruiter", color: "bg-red-500/20 text-red-300 border-red-500/30" };
      case "visitor":
        return { name: "Visitor", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" };
      default:
        return { name: "Profile", color: "bg-zinc-700/30 text-zinc-300 border-zinc-600/30" };
    }
  };

  const profileInfo = getProfileLabel();

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-500 px-3 sm:px-6 pointer-events-none">
      <div
        className={`mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ${
          isScrolled
            ? "max-w-5xl my-2.5 sm:my-3 rounded-full apple-glass py-2 px-4 sm:px-6 shadow-2xl shadow-black/80"
            : "max-w-7xl py-4 sm:py-5 px-1 sm:px-6"
        }`}
      >
        {/* Left: Brand Monogram & Primary Nav */}
        <div className="flex items-center gap-4 sm:gap-8">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Tarun Chhabra Homepage"
          >
            {/* Apple-style Glass Badge */}
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-red-600 to-rose-600 text-white font-black text-xs sm:text-sm tracking-wider shadow-md shadow-red-900/40 ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-300">
              TC
            </div>
            {/* Brand Text */}
            <span className="text-[clamp(0.95rem,3.5vw,1.15rem)] font-black tracking-tight uppercase text-white group-hover:text-red-400 transition-colors">
              TARUN<span className="text-[#E50914]">.</span>DEV
            </span>
          </a>

          {/* Desktop Navigation Links (Apple Glass Pills) */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 text-xs lg:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300 font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions: Switch Profile, GitHub, View Resume */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Profile Switcher Trigger */}
          {onOpenProfileSwitcher && (
            <button
              onClick={onOpenProfileSwitcher}
              title={`Active Profile: ${profileInfo.name}. Click to switch.`}
              className={`inline-flex items-center gap-1.5 rounded-full apple-glass-pill px-2.5 py-1 text-[11px] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914] ${profileInfo.color}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              <span>{profileInfo.name}</span>
              <RefreshCw className="h-2.5 w-2.5 opacity-60 ml-0.5" />
            </button>
          )}

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full apple-glass-pill text-zinc-300 hover:text-white transition-all"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#E50914] px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/50 hover:bg-[#b80710] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 whitespace-nowrap"
          >
            <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full apple-glass-pill text-white"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-md mx-auto pointer-events-auto rounded-2xl apple-glass p-5 shadow-2xl mt-2 animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-semibold text-zinc-200 hover:text-[#E50914] transition py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              {onOpenProfileSwitcher && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfileSwitcher();
                  }}
                  className="flex items-center justify-between text-xs font-semibold text-zinc-300 apple-glass-pill p-2 rounded-xl"
                >
                  <span className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-red-500" />
                    <span>Active Profile: {profileInfo.name}</span>
                  </span>
                  <span className="text-red-400">Switch ➔</span>
                </button>
              )}

              <div className="flex items-center justify-between pt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
