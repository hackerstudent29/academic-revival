import React, { useState } from "react";
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

  // Modal states
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [selectedMou, setSelectedMou] = useState<MouPartner | null>(null);
  const [selectedStory, setSelectedStory] = useState<FeaturedAchievement | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<PlacementPulseEvent | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

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
    <div className="min-h-screen bg-page-bg text-foreground font-sans flex flex-col selection:bg-primary selection:text-white tracking-[0.01em]">
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

