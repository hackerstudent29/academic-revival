import React, { useState, useEffect } from 'react';
import { StickyNav } from './components/StickyNav';
import { OverviewSection } from './components/sections/OverviewSection';
import { RecruitersSection } from './components/sections/RecruitersSection';
import { TrainingSection } from './components/sections/TrainingSection';
import { InternshipsSection } from './components/sections/InternshipsSection';
import { MoUsSection } from './components/sections/MoUsSection';
import { JourneySection } from './components/sections/JourneySection';

// Modals
import { FacilityLightbox } from './components/modals/FacilityLightbox';
import { MoUDetailModal } from './components/modals/MoUDetailModal';
import { StudentStoryModal } from './components/modals/StudentStoryModal';
import { BrochureModal } from './components/modals/BrochureModal';
import { PlacementContactModal } from './components/modals/PlacementContactModal';
import { PulseEventModal } from './components/modals/PulseEventModal';

import { Facility, MouPartner, FeaturedAchievement, PlacementPulseEvent } from './types';
import { ArrowUp, Mail, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTION_CONFIG: Record<string, { index: number; title: string }> = {
  overview: { index: 1, title: 'Placement Overview & Strategic Highlights' },
  recruiters: { index: 2, title: 'Recruiters, Tiers & Salary Matrix' },
  training: { index: 3, title: 'Skill Training Ecosystem & Facilities' },
  internships: { index: 4, title: 'Internships & PPO Achievements' },
  mous: { index: 5, title: 'MoUs & Strategic Industry Alliances' },
  journey: { index: 6, title: 'Higher Studies, Innovation & Student Track' }
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentSectionMeta = SECTION_CONFIG[activeSection] || { index: 1, title: 'Placement Portal' };

  return (
    <div className="placement-portal-shell min-h-screen bg-[#F5FAFF] text-[#10243E] font-['Roboto',sans-serif] flex flex-col selection:bg-[#0D9488] selection:text-white tracking-[0.01em]">
      {/* Primary Sticky Top Navigation Bar */}
      <StickyNav
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area with Seamless Page Transition */}
      <main className="flex-1 w-full pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeSection === 'overview' && (
              <OverviewSection onNavigate={handleSelectSection} />
            )}

            {activeSection === 'recruiters' && (
              <RecruitersSection onNavigate={handleSelectSection} />
            )}

            {activeSection === 'training' && (
              <TrainingSection onOpenFacility={(fac) => setSelectedFacility(fac)} />
            )}

            {activeSection === 'internships' && (
              <InternshipsSection onOpenStory={(story) => setSelectedStory(story)} />
            )}

            {activeSection === 'mous' && (
              <MoUsSection onOpenMou={(mou) => setSelectedMou(mou)} />
            )}

            {activeSection === 'journey' && (
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-white hover:bg-slate-100 text-[#082B5C] shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group cursor-pointer border border-slate-200"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        <button
          onClick={() => setIsContactOpen(true)}
          className="w-12 h-12 rounded-full bg-[#082B5C] hover:bg-[#0D9488] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group cursor-pointer border border-white/20"
          title="Contact Placement Cell"
          aria-label="Contact Placement Cell"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={() => setIsBrochureOpen(true)}
          className="w-12 h-12 rounded-full bg-[#0D9488] hover:bg-[#082B5C] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group cursor-pointer border border-white/20"
          title="Download Placement Dossier"
          aria-label="Download Placement Dossier"
        >
          <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
