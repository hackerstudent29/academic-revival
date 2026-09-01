import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { PlacementHero } from "@/components/sections/placement/PlacementHero";
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
import { ArrowUp, Mail, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const title = "Placements at MSAJCE — 95% Track Record";
const description =
  "Placement statistics, recruiter network and training support at M.S.A.J. College of Engineering, Chennai.";

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
  { id: "journey", label: "Higher Studies & Track" },
];

function Placements() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Modal states
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [selectedMou, setSelectedMou] = useState<MouPartner | null>(null);
  const [selectedStory, setSelectedStory] = useState<FeaturedAchievement | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<PlacementPulseEvent | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      const contentEl = document.getElementById("placement-main-content");
      if (contentEl) {
        const yOffset = -130;
        const y = contentEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 60);
  };

  return (
    <div className="min-h-screen bg-page-bg text-foreground font-sans flex flex-col selection:bg-[#005DA6] selection:text-white tracking-[0.01em]">
      {/* Secondary Sub Navigation Bar */}
      <SecondarySubNav
        title="CAREER & PLACEMENT CELL"
        tabs={PLACEMENT_TABS}
        activeTab={activeSection}
        onSelectTab={handleSelectSection}
        onTitleClick={() => handleSelectSection("overview")}
      />

      {/* Shared Placement Hero Section (Matching Screenshot) */}
      <PlacementHero
        activeTab={activeSection}
        onExploreClick={() => {
          const contentEl = document.getElementById("placement-main-content");
          if (contentEl) {
            const yOffset = -130;
            const y = contentEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
        onSecondaryClick={() => {
          if (activeSection === "overview") handleSelectSection("recruiters");
          else if (activeSection === "recruiters") handleSelectSection("training");
          else handleSelectSection("training");
        }}
      />

      {/* Main Content Area */}
      <main id="placement-main-content" className="flex-1 w-full pb-16 scroll-mt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeSection === "overview" && (
              <OverviewSection onNavigate={handleSelectSection} />
            )}

            {activeSection === "recruiters" && (
              <RecruitersSection onNavigate={handleSelectSection} />
            )}

            {activeSection === "training" && (
              <TrainingSection onOpenFacility={(fac) => setSelectedFacility(fac)} />
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
      </main>

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-card hover:bg-muted text-foreground shadow-xl flex items-center justify-center transition-colors group cursor-pointer border border-border"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform" />
          </button>
        )}

        <button
          onClick={() => setIsContactOpen(true)}
          className="w-12 h-12 rounded-full bg-[#005DA6] hover:bg-[#059669] text-white shadow-xl flex items-center justify-center transition-colors group cursor-pointer border border-white/20"
          title="Contact Placement Cell"
          aria-label="Contact Placement Cell"
        >
          <Mail className="w-5 h-5 transition-transform" />
        </button>

        <button
          onClick={() => setIsBrochureOpen(true)}
          className="w-12 h-12 rounded-full bg-[#059669] hover:bg-[#005DA6] text-white shadow-xl flex items-center justify-center transition-colors group cursor-pointer border border-white/20"
          title="Download Placement Dossier"
          aria-label="Download Placement Dossier"
        >
          <Download className="w-5 h-5 transition-transform" />
        </button>
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
    </div>
  );
}

