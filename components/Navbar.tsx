"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/data/content";
import { Github, FileText, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#141414]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 md:px-12">
        {/* Left: Netflix-inspired Logo & Primary Nav */}
        <div className="flex items-center gap-8">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            {/* Red Monogram Badge */}
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#E50914] text-white font-black text-sm tracking-wider shadow-md shadow-red-900/30 group-hover:scale-105 transition-transform">
              TC
            </div>
            {/* Brand Text */}
            <span className="text-lg font-black tracking-tighter uppercase text-white group-hover:text-red-500 transition-colors">
              TARUN<span className="text-[#E50914]">.</span>DEV
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-zinc-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions: GitHub, View Resume, Profile Avatar */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-[#E50914] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950/40 hover:bg-[#b80710] transition focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>

          {/* Netflix Profile Avatar */}
          <div
            title={`Signed in as ${profile.name}`}
            className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-tr from-red-700 to-rose-500 text-white font-bold text-xs ring-1 ring-white/20 select-none"
          >
            T
          </div>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#E50914] px-2.5 py-1 text-xs font-bold text-white uppercase"
          >
            Resume
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#141414]/95 px-6 py-6 backdrop-blur-xl shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-semibold text-zinc-200 hover:text-[#E50914] transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

