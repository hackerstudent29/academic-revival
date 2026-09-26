import React, { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { useHeader } from "@/context/HeaderContext";
import { OverviewSection } from "@/components/sections/placement/OverviewSection";
import { RecruitersSection } from "@/components/sections/placement/RecruitersSection";
import { TrainingSection } from "@/components/sections/placement/TrainingSection";
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
  "Comprehensive Placement & Career Ecosystem at Mohamed Sathak A.J. College of Engineering, featuring 80% overall percentage, 180+ offers received, 50+ companies visited, and 8 LPA highest package.";

interface PlacementsSearch {
  tab?: string | undefined;
}

export const Route = createFileRoute("/placements")({
  validateSearch: (search: Record<string, unknown>): PlacementsSearch => {
    return {
      tab: search['tab'] as string | undefined,
    };
  },
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
  { id: "recruiters", label: "Campus Placements" },
  { id: "training", label: "Training & Internships" },
  { id: "mous", label: "MoUs & Collaborations" },
  { id: "pathways", label: "Pathways & Placement Cell" },
];

function Placements() {
  const { tab } = Route.useSearch();
  const navigate = useNavigate();
  const { setHeaderHidden } = useHeader();

  const [activeSection, setActiveSection] = useState<string>(() => {
    if (tab === "internships") return "training";
    if (tab === "journey" || tab === "committee") return "pathways";
    if (tab === "placements" || tab === "placement") return "recruiters";
    return tab || "overview";
  });

  useEffect(() => {
    if (tab) {
      let resolved = tab;
      if (tab === "internships") resolved = "training";
      else if (tab === "journey" || tab === "committee") resolved = "pathways";
      else if (tab === "placements" || tab === "placement") resolved = "recruiters";
      
      if (PLACEMENT_TABS.some((t) => t.id === resolved) && resolved !== activeSection) {
        setActiveSection(resolved);
      }
    }
  }, [tab]);

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
      const subNavHeight = typeof window !== "undefined" && window.innerWidth < 768 ? 40 : 46;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - subNavHeight),
        behavior: "smooth",
      });
    }
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    navigate({ search: { tab: sectionId === "overview" ? undefined : sectionId }, replace: true });
    
    if (sectionId === "overview") {
      setHeaderHidden(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => {
        scrollToContent();
      }, 30);
    }
  };

  const handleTitleClick = () => {
    setHeaderHidden(false);
    setActiveSection("overview");
    navigate({ search: { tab: undefined }, replace: true });
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
        {/* 1. DYNAMIC HERO BANNER: Full Hero for Overview, Compact for Other Tabs */}
        {/* ================================================================= */}
        {activeSection === "overview" ? (
          /* Full Institution-Style Hero with Docked Placement Stats (Overview Tab Only) */
          <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[calc(100svh-104px)] md:min-h-[calc(100vh-116px)] flex flex-col justify-end">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/accreditations_campus.jpg"
                alt="MSAJCE Career & Placements Ecosystem"
                className="w-full h-full object-cover object-center brightness-[0.85] filter contrast-105 select-none pointer-events-none rounded-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                }}
              />
              {/* Subtle gradient overlay for depth and title legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>

            {/* Title Container: Fading Translucent Backdrop, Institution Title Only */}
            <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15"
              >
                <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-[1.1]">
                  Career &amp; Placements
                </h1>
              </motion.div>
            </div>

            {/* Fading Facts & Figures Docked Stats Strip (Smooth Gradient Fade, No Harsh Line, Maroon Figures) */}
            <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-8 sm:pt-10 md:pt-14 pb-5 sm:pb-6 md:pb-8">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
                <div className="mb-3 sm:mb-4">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black font-oswald uppercase tracking-wide text-primary">
                    Facts &amp; Figures
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 md:divide-x md:divide-white/15">
                  {[
                    { value: "8 LPA", label: "Highest Package" },
                    { value: "180+", label: "Offers Received" },
                    { value: "50+", label: "Companies Visited" },
                    { value: "80%", label: "Overall Percentage" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.15 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="first:pl-0 md:pl-4 lg:pl-6 space-y-0.5 sm:space-y-1"
                    >
                      <div className="font-oswald text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-primary tracking-tight leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-white/85 font-libre leading-snug pt-0.5 sm:pt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Standard Hero Banner for Other Placement Tabs (Recruiters, Training, Internships, MoUs, Journey) */
          <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/accreditations_campus.jpg"
                alt="MSAJCE Career & Placements Ecosystem"
                className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
              <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
                <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
                  {PLACEMENT_TABS.find((t) => t.id === activeSection)?.label ?? "Career & Placements"}
                </h1>
              </div>
            </div>
          </section>
        )}

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

              {activeSection === "mous" && (
                <MoUsSection onOpenMou={(mou) => setSelectedMou(mou)} />
              )}

              {activeSection === "pathways" && (
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


