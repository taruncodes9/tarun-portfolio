"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ProfileScreen, { type ProfileType } from "@/components/ProfileScreen";

export default function Page() {
  const [activeProfile, setActiveProfile] = useState<ProfileType | null>(null);
  const [isSwitching, setIsSwitching] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Check if user previously picked a profile in this session
    try {
      const saved = sessionStorage.getItem("tarun_portfolio_profile") as ProfileType | null;
      if (saved && (saved === "developer" || saved === "recruiter" || saved === "visitor")) {
        setActiveProfile(saved);
      }
    } catch {
      // Ignore storage errors if disabled
    }
  }, []);

  const handleSelectProfile = (profile: ProfileType) => {
    setActiveProfile(profile);
    setIsSwitching(false);
    try {
      sessionStorage.setItem("tarun_portfolio_profile", profile);
    } catch {
      // Ignore storage errors
    }
  };

  const handleOpenSwitcher = () => {
    setIsSwitching(true);
  };

  const handleCancelSwitch = () => {
    setIsSwitching(false);
  };

  // If on client and no profile chosen yet, render the Netflix "Who's exploring?" screen
  if (mounted && !activeProfile) {
    return (
      <ProfileScreen
        onSelectProfile={handleSelectProfile}
        activeProfile={null}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-[#E50914] selection:text-white">
      {/* If user triggered profile switcher from navbar or hero */}
      {isSwitching && (
        <ProfileScreen
          onSelectProfile={handleSelectProfile}
          activeProfile={activeProfile}
          isSwitching={true}
          onCancelSwitch={handleCancelSwitch}
        />
      )}

      <Navbar
        activeProfile={activeProfile || "developer"}
        onOpenProfileSwitcher={handleOpenSwitcher}
      />

      <main>
        <HeroBanner
          activeProfile={activeProfile || "developer"}
          onOpenProfileSwitcher={handleOpenSwitcher}
        />
        <Projects activeProfile={activeProfile || "developer"} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
      </main>

      <ContactSection />
    </div>
  );
}
