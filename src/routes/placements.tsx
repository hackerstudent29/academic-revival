import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { OverviewSection } from "@/components/sections/placement/OverviewSection";
import { RecruitersSection } from "@/components/sections/placement/RecruitersSection";
import { TrainingSection } from "@/components/sections/placement/TrainingSection";
import { InternshipsSection } from "@/components/sections/placement/InternshipsSection";
import { MoUsSection } from "@/components/sections/placement/MoUsSection";
import { JourneySection } from "@/components/sections/placement/JourneySection";

// Modals
import { FacilityLightbox } from "@/components/modals/placement/FacilityLightbox";
import { MoUDetailModal } from "@/components/modals/placement/MoUDetailModal";
import { StudentStoryModal } from "@/components/modals/placement/StudentStoryModal";
import { BrochureModal } from "@/components/modals/placement/BrochureModal";
import { PlacementContactModal } from "@/components/modals/placement/PlacementContactModal";
import { PulseEventModal } from "@/components/modals/placement/PulseEventModal";

import { Facility, MouPartner, FeaturedAchievement, PlacementPulseEvent } from "@/types/placement";
import { motion, AnimatePresence } from "framer-motion";

const title = "Career & Placements — M.S.A.J. College of Engineering, Chennai";
const description =
  "Comprehensive Placement & Career Ecosystem at Mohamed Sathak A.J. College of Engineering, featuring 95% placement track record, 120+ recruiters, advanced skill labs, and corporate MoUs.";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Placements,
});

const PLACEMENT_TABS = [
  { id: "overview", label: "Overview" },
  { id: "recruiters", label: "Recruiters & Tiers" },
  { id: "training", label: "Skill Training & Labs" },
  { id: "internships", label: "Internships & PPOs" },
  { id: "mous", label: "MoUs & Alliances" },
  { id: "journey", label: "Higher Studies Track" },
];

function Placements() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  // Modal states
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [selectedMou, setSelectedMou] = useState<MouPartner | null>(null);
  const [selectedStory, setSelectedStory] = useState<FeaturedAchievement | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<PlacementPulseEvent | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Scroll to top on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to content starting point when switching tabs
  const scrollToContent = () => {
    const el = document.getElementById("placement-main-content");
    if (el) {
      const headerOffset = typeof window !== "undefined" && window.innerWidth < 768 ? 105 : 120;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - headerOffset),
        behavior: "smooth",
      });
    }
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      scrollToContent();
    }, 40);
  };

  const handleTitleClick = () => {
    setActiveSection("overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* Sticky Secondary Navigation */}
      <SecondarySubNav
        title="CAREER & PLACEMENTS"
        tabs={PLACEMENT_TABS}
        activeTab={activeSection}
        onSelectTab={handleSelectSection}
        onTitleClick={handleTitleClick}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ================================================================= */}
        {/* 1. HERO BANNER: Standard MSAJCE Hero (Title Docked Flush at Bottom)*/}
        {/* ================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[260px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=90"
              alt="MSAJCE Career & Placements Ecosystem"
              className="w-full h-full object-cover object-center brightness-[0.70] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
              }}
            />
            {/* Subtle gradient overlay for depth and title legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Docked Flush at Bottom of Hero */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-14 sm:pt-18 md:pt-20 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
              <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
                Career &amp; Placements
              </h1>
            </div>
          </div>
        </section>

        {/* Tab Content Target Anchor (Auto-scrolled on tab click) */}
        <div id="placement-main-content" className="scroll-mt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeSection === "overview" && (
                <OverviewSection onNavigate={handleSelectSection} />
              )}

              {activeSection === "recruiters" && (
                <RecruitersSection onNavigate={handleSelectSection} />
              )}

              {activeSection === "training" && (
                <TrainingSection onOpenFacility={(fac) => setSelectedFacility(fac)} onNavigate={handleSelectSection} />
              )}

              {activeSection === "internships" && (
                <InternshipsSection onOpenStory={(story) => setSelectedStory(story)} />
              )}

              {activeSection === "mous" && (
                <MoUsSection onOpenMou={(mou) => setSelectedMou(mou)} />
              )}

              {activeSection === "journey" && (
                <JourneySection
                  onOpenEvent={(ev) => setSelectedEvent(ev)}
                  onOpenBrochure={() => setIsBrochureOpen(true)}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* MODAL DIALOGS */}
      <FacilityLightbox
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />

      <MoUDetailModal
        mou={selectedMou}
        onClose={() => setSelectedMou(null)}
      />

      <StudentStoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      <PulseEventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <PlacementContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}


