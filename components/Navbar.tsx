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
      setIsScrolled(window.scrollY > 30);
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
        return { name: "Developer", color: "bg-cyan-600 text-cyan-100 ring-cyan-400" };
      case "recruiter":
        return { name: "Recruiter", color: "bg-red-600 text-red-100 ring-red-400" };
      case "visitor":
        return { name: "Visitor", color: "bg-amber-600 text-amber-100 ring-amber-400" };
      default:
        return { name: "Profile", color: "bg-zinc-700 text-zinc-100 ring-zinc-500" };
    }
  };

  const profileInfo = getProfileLabel();

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#141414]/95 backdrop-blur-md border-b border-zinc-800/80 py-2.5 shadow-xl"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3 sm:py-4 md:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 md:px-12">
        {/* Left: Netflix-style Brand Logo & Primary Nav */}
        <div className="flex items-center gap-4 sm:gap-8">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Tarun Chhabra Homepage"
          >
            {/* Red Monogram Badge */}
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded bg-[#E50914] text-white font-black text-xs sm:text-sm tracking-wider shadow-md shadow-red-900/30 group-hover:scale-105 transition-transform">
              TC
            </div>
            {/* Brand Text */}
            <span className="text-[clamp(0.95rem,3.5vw,1.2rem)] font-black tracking-tighter uppercase text-white group-hover:text-red-500 transition-colors">
              TARUN<span className="text-[#E50914]">.</span>DEV
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-5 lg:gap-6 text-xs lg:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-zinc-300 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions: Switch Profile, GitHub, View Resume */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Profile Switcher Trigger */}
          {onOpenProfileSwitcher && (
            <button
              onClick={onOpenProfileSwitcher}
              title={`Active Profile: ${profileInfo.name}. Click to switch.`}
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 px-2 sm:px-2.5 py-1 text-[11px] font-semibold text-zinc-300 hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            >
              <div
                className={`flex h-4 w-4 sm:h-4.5 sm:w-4.5 items-center justify-center rounded-full text-[9px] font-black uppercase ring-1 ${profileInfo.color}`}
              >
                {profileInfo.name.charAt(0)}
              </div>
              <span className="hidden sm:inline">{profileInfo.name}</span>
              <RefreshCw className="h-3 w-3 opacity-60 ml-0.5" />
            </button>
          )}

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition"
          >
            <Github className="h-4.5 w-4.5" />
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-[#E50914] px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950/40 hover:bg-[#b80710] transition focus:outline-none focus:ring-2 focus:ring-red-500 whitespace-nowrap"
          >
            <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-lg bg-zinc-800/90 text-white"
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#141414]/98 px-5 py-5 backdrop-blur-xl shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-semibold text-zinc-200 hover:text-[#E50914] transition"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
              {onOpenProfileSwitcher && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfileSwitcher();
                  }}
                  className="flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-900 p-2 rounded-lg border border-zinc-800"
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
