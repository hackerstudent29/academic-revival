import { useState, useMemo, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Library as LibraryIcon,
  GraduationCap,
  Clock,
  Search,
  ExternalLink,
  Users,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Calculator,
  Monitor,
  Database,
  Globe2,
  Check,
  BookOpen,
  RotateCcw,
  ArrowUpRight,
} from "lucide-react";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import {
  libraryOverview,
  libraryWorkingHours,
  collectionStats,
  departmentJournals,
  openAccessJournals,
  eLibraryGateways,
  eBooksDirectory,
  freeCourseMaterials,
  libraryServices,
  borrowingEligibility,
  overdueFineSlabs,
  libraryRules,
  institutionalMemberships,
  libraryCommittee,
  type DigitalPortal,
} from "@/data/library";

const title = "Central Library & Learning Centre | MSAJCE";
const description =
  "Explore the Central Library & Learning Centre at MSAJCE. 29,853+ volumes, Koha ILMS, DELNET Inter-Library Loan, J-Gate Plus database, and 8,978 sq.ft modern research space.";

export const Route = createFileRoute("/library")({
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
  component: CentralLibraryPage,
});

// Minimal Secondary SubNav Tabs (5 Clean Core Tabs)
const subNavTabs: SubNavTab[] = [
  { id: "overview", label: "Overview" },
  { id: "collections", label: "Collections" },
  { id: "digital-library", label: "Digital Library" },
  { id: "services-rules", label: "Services & Rules" },
  { id: "committee", label: "Committee" },
];

function CentralLibraryPage() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [statFilter, setStatFilter] = useState<string>("all");
  const [digitalCategory, setDigitalCategory] = useState<string>("all");
  const [digitalSearch, setDigitalSearch] = useState<string>("");
  const [committeeSearch, setCommitteeSearch] = useState<string>("");

  // Interactive Fine Calculator State
  const [calcDays, setCalcDays] = useState<number>(3);
  const [calcBooks, setCalcBooks] = useState<number>(1);

  // Dynamic Open/Close status based on IST time
  const [isOpenNow, setIsOpenNow] = useState<{ open: boolean; statusText: string }>({
    open: true,
    statusText: "Open Today · 8:00 AM – 7:00 PM",
  });

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const currentHour = now.getHours();

    if (day === 0) {
      if (currentHour >= 10 && currentHour < 16) {
        setIsOpenNow({ open: true, statusText: "Open Today (Sunday) · 10:00 AM – 4:00 PM" });
      } else {
        setIsOpenNow({ open: false, statusText: "Closed Now · Sunday Hours: 10:00 AM – 4:00 PM" });
      }
    } else {
      if (currentHour >= 8 && currentHour < 19) {
        setIsOpenNow({ open: true, statusText: "Open Today · 8:00 AM – 7:00 PM" });
      } else {
        setIsOpenNow({ open: false, statusText: "Closed Now · Mon-Sat: 8:00 AM – 7:00 PM" });
      }
    }
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const el = document.getElementById("library-main-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filtered collection stats
  const filteredStats = useMemo(() => {
    if (statFilter === "all") return collectionStats;
    return collectionStats.filter((stat) => stat.category === statFilter);
  }, [statFilter]);

  // Combined Digital Resources for Unified Digital Library Tab (75 Total)
  const allDigitalResources = useMemo(() => {
    const combined: (DigitalPortal & { portalType: string })[] = [
      ...eLibraryGateways.map((item) => ({ ...item, portalType: "E-Library Gateway" })),
      ...openAccessJournals.map((item) => ({ ...item, portalType: "Open Access E-Journal" })),
      ...eBooksDirectory.map((item) => ({ ...item, portalType: "E-Books Database" })),
      ...freeCourseMaterials.map((item) => ({ ...item, portalType: "Online Courseware" })),
    ];
    return combined;
  }, []);

  // Filtered Digital Library items
  const filteredDigital = useMemo(() => {
    let result = allDigitalResources;

    if (digitalCategory === "e-library") {
      result = result.filter((item) => item.category === "e-library");
    } else if (digitalCategory === "e-journal") {
      result = result.filter((item) => item.category === "e-journal");
    } else if (digitalCategory === "e-book") {
      result = result.filter((item) => item.category === "e-book");
    } else if (digitalCategory === "course") {
      result = result.filter((item) => item.category === "course");
    }

    if (digitalSearch.trim()) {
      const q = digitalSearch.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q)) ||
          item.portalType.toLowerCase().includes(q)
      );
    }

    // Sort word-size wise / name length from small to big for clean, neat, non-congested readability
    return [...result].sort((a, b) => a.name.length - b.name.length);
  }, [allDigitalResources, digitalCategory, digitalSearch]);

  // Filtered Committee Members
  const filteredCommittee = useMemo(() => {
    if (!committeeSearch.trim()) return libraryCommittee;
    const q = committeeSearch.toLowerCase();
    return libraryCommittee.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.designation.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        (m.department && m.department.toLowerCase().includes(q))
    );
  }, [committeeSearch]);

  // Interactive Fine Calculator Output
  const calculatedFine = useMemo(() => {
    const days = Math.max(0, calcDays);
    const books = Math.max(1, calcBooks);
    let finePerBook = 0;
    if (days <= 0) {
      finePerBook = 0;
    } else if (days <= 7) {
      finePerBook = days * 1;
    } else if (days <= 14) {
      finePerBook = 7 * 1 + (days - 7) * 2;
    } else {
      finePerBook = 7 * 1 + 7 * 2 + (days - 14) * 5;
    }
    return finePerBook * books;
  }, [calcDays, calcBooks]);

  return (
    <div className="min-h-screen bg-page-bg text-foreground font-sans max-w-full">
      {/* MINIMAL SECONDARY SUB-NAV (Official Component matching Department & Research pages) */}
      <SecondarySubNav
        title="CENTRAL LIBRARY"
        tabs={subNavTabs}
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onTitleClick={() => {
          handleTabChange("overview");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key="library-page-container"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
          className="w-full flex flex-col max-w-full"
        >
          {/* Department-Style Full-Screen Edge-to-Edge Hero Section (#212121 / #121214) */}
          <section className="w-full bg-[#212121] dark:bg-[#121214] text-white pt-8 pb-10 border-b border-neutral-800 relative overflow-hidden min-h-[calc(100vh-110px)] flex flex-col justify-center">
            <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between flex-1 py-4">
              
              {/* Top Section: Split Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
                
                {/* Left Hero Column */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-[11px] font-oswald font-bold uppercase tracking-wider border ${
                        isOpenNow.open
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                          : "bg-amber-500/15 text-amber-300 border-amber-500/30"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                          isOpenNow.open ? "bg-emerald-400" : "bg-amber-400"
                        }`}
                      />
                      {isOpenNow.statusText}
                    </span>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-oswald tracking-tight leading-none mb-4"
                  >
                    Central Library
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mb-8"
                  >
                    The intellectual heart of MSAJCE — providing the right information to the right readers at the right time through curated collections, digital gateways, and automated library services.
                  </motion.p>

                  {/* Ocean Wave Liquid Fill Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-3"
                  >
                    {/* Jump to Digital Library */}
                    <button
                      type="button"
                      onClick={() => handleTabChange("digital-library")}
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/40 bg-stone-200/90 dark:bg-neutral-800 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-xs hover:text-white cursor-pointer select-none"
                    >
                      <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                        <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                            </svg>
                          </span>
                          <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                              <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                        <span>Explore Digital Library</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>

                    {/* DELNET External */}
                    <a
                      href="https://delnet.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-neutral-700 bg-neutral-800/80 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider font-oswald text-white transition-all duration-300 shadow-xs hover:text-white cursor-pointer select-none"
                    >
                      <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                        <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                        <span>DELNET Portal</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>

                    {/* J-Gate Database External */}
                    <a
                      href="https://jgateplus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-neutral-700 bg-neutral-800/80 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider font-oswald text-white transition-all duration-300 shadow-xs hover:text-white cursor-pointer select-none"
                    >
                      <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                        <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                            </svg>
                          </span>
                          <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                              <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                        <span>J-Gate Database</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  </motion.div>
                </div>

                {/* Right Hero Column: Executive Media Showcase */}
                <div className="lg:col-span-5 w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative overflow-hidden rounded-sm shadow-2xl border border-neutral-700 bg-neutral-800 aspect-[16/10] w-full max-w-[520px] lg:ml-auto"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80"
                      alt="Central Library Reading and Stack Hall"
                      className="w-full h-full object-cover block"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                      }}
                    />
                  </motion.div>
                </div>

              </div>

              {/* Bottom Section: Minimal Specifications Grid */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="border-t border-neutral-700/80 pt-6 mt-8"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-[12.5px]">
                  <div>
                    <div className="text-[10.5px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">
                      Facility Space
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">
                      8,978 Sq.Ft
                    </div>
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">
                      Physical Volumes
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">
                      29,853+ Books
                    </div>
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">
                      Curated Titles
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">
                      5,628 Titles
                    </div>
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">
                      Digital Journals
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">
                      50,684+ Online
                    </div>
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">
                      Automation
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">
                      Koha ILMS
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* Main Content Layout with Transparent Background Tables with Border Lines */}
          <div id="library-main-content" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 overflow-x-hidden">
            <div className="min-h-[75vh] w-full max-w-full overflow-x-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="space-y-12"
                >
                  
                  {/* ========================================================= */}
                  {/* TAB 1: OVERVIEW */}
                  {/* ========================================================= */}
                  {activeTab === "overview" && (
                    <div className="space-y-10">
                      {/* 2-Column Overview Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        
                        {/* Left Column: 2-Image Architectural Collage (Different Shapes) */}
                        <div className="lg:col-span-5 w-full flex flex-col justify-between gap-4">
                          {/* Image 1: Central Reading Hall (Shape 1: rounded-tl-3xl rounded-br-xl rounded-tr-xs rounded-bl-xs) */}
                          <div className="group overflow-hidden rounded-tl-3xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[180px] sm:h-[210px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80"
                                alt="Central Reading Hall - Students"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Central Reading Hall
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  Air-conditioned quiet study &amp; research hall
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 rounded-xs">
                                Ground Floor
                              </span>
                            </div>
                          </div>

                          {/* Image 2: Stack Section (Shape 2: rounded-tl-xs rounded-br-3xl rounded-tr-xl rounded-bl-xs) */}
                          <div className="group overflow-hidden rounded-tl-xs rounded-br-3xl rounded-tr-xl rounded-bl-xs border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[180px] sm:h-[210px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
                                alt="Library Stack Section & Book Aisles"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Stack Section &amp; Reference Aisle
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  29,853+ catalogued engineering volumes
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 rounded-xs">
                                First Floor
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right Column: Narrative Content */}
                        <div className="lg:col-span-7 flex flex-col justify-start space-y-4">
                          <div className="border-b border-border pb-3">
                            <div className="flex items-center gap-2 text-xs font-oswald font-bold uppercase tracking-wider text-primary mb-1">
                              <Sparkles className="w-4 h-4" />
                              Welcome to the Learning Centre
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                              The Intellectual Heart of MSAJCE
                            </h2>
                          </div>

                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {libraryOverview.description}
                          </p>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {libraryOverview.extendedDescription}
                          </p>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Our library regularly features the addition of new titles and volumes in all subject areas. Every effort has been made to acquire all of the titles that the faculty have recommended. Reputable newspapers, weekly, and fortnightly publications are subscribed to so that the students can stay up to date on current events. Bar-coded technology, open source software called <strong>Koha</strong>, dedicated internet connectivity, and campus-wide Wi-Fi are fully accessible to all scholars.
                          </p>

                          {/* Transparent Working Hours Banner */}
                          <div className="p-4 bg-transparent border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-primary/10 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs border border-primary/20">
                                <Clock className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-xs font-oswald font-bold uppercase text-foreground">
                                  Operational Timings
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Mon–Sat: 8:00 AM – 7:00 PM | Sun: 10:00 AM – 4:00 PM
                                </p>
                              </div>
                            </div>
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-[11px] font-oswald font-bold uppercase border self-start sm:self-auto ${
                                isOpenNow.open
                                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                                  : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30"
                              }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full mr-1.5 animate-pulse ${
                                  isOpenNow.open ? "bg-emerald-500" : "bg-amber-500"
                                }`}
                              />
                              {isOpenNow.open ? "Open Now" : "Closed Now"}
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Institutional Memberships Table (Transparent style with border lines) */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3">
                          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                            Institutional Memberships &amp; Consortia
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                            Direct national and international network subscriptions providing Inter-Library Loan (ILL) and indexed research literature.
                          </p>
                        </div>

                        <div className="overflow-x-auto border border-border bg-transparent">
                          <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b-2 border-border bg-foreground/[0.03] text-xs font-black uppercase font-oswald text-foreground">
                                <th className="py-3.5 px-4 w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 min-w-[200px]">Network Name</th>
                                <th className="py-3.5 px-4 w-[160px]">Scope</th>
                                <th className="py-3.5 px-4">Entitlements &amp; Research Privileges</th>
                                <th className="py-3.5 px-4 text-right w-[140px]">Access Link</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border font-sans">
                              {institutionalMemberships.map((membership, idx) => (
                                <tr key={membership.id} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-4 px-4 font-bold font-oswald text-muted-foreground">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-4 px-4 font-bold font-oswald text-foreground">
                                    <span className="text-primary text-base block">{membership.name}</span>
                                    <span className="text-[10px] text-muted-foreground font-mono font-normal uppercase tracking-wider">
                                      {membership.badge}
                                    </span>
                                  </td>
                                  <td className="py-4 px-4 font-oswald font-bold text-xs uppercase text-muted-foreground">
                                    {membership.scope}
                                  </td>
                                  <td className="py-4 px-4">
                                    <ul className="space-y-1.5">
                                      {membership.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                          <span>{f}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </td>
                                  <td className="py-4 px-4 text-right">
                                    <a
                                      href={membership.website}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/40 bg-stone-200/90 dark:bg-neutral-800 px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none shrink-0"
                                    >
                                      <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                                        <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                          <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                                            </svg>
                                          </span>
                                          <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                              <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                                            </svg>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:text-white transition-colors duration-300">
                                        <span>Launch Portal</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                      </span>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* TAB 2: COLLECTIONS (Stack Holdings & Printed Journals Tables) */}
                  {/* ========================================================= */}
                  {activeTab === "collections" && (
                    <div className="space-y-10">
                      {/* Stack Holdings Table (Transparent with border lines) */}
                      <div className="space-y-4">
                        <div className="border-b border-border pb-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
                          <div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                              Stack Collection Details &amp; Holdings
                            </h2>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                              Physical volumes, distinct titles, reference books, periodicals, and multimedia assets.
                            </p>
                          </div>

                          {/* Filter Pills */}
                          <div className="flex flex-wrap items-center gap-1.5 p-1 border border-border bg-transparent rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs">
                            {[
                              { id: "all", label: "All Holdings (12)" },
                              { id: "physical", label: "Physical Stack" },
                              { id: "digital", label: "Digital Repositories" },
                              { id: "periodicals", label: "Periodicals" },
                            ].map((f) => (
                              <button
                                key={f.id}
                                onClick={() => setStatFilter(f.id)}
                                className={`px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider transition-all rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs ${
                                  statFilter === f.id
                                    ? "bg-primary text-white shadow-xs"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {f.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="overflow-x-auto border border-border bg-transparent">
                          <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b-2 border-border bg-foreground/[0.03] text-xs font-black uppercase font-oswald text-foreground">
                                <th className="py-3.5 px-4 w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 min-w-[220px]">Resource Classification</th>
                                <th className="py-3.5 px-4 w-[140px]">Collection Type</th>
                                <th className="py-3.5 px-4 text-right w-[160px]">Quantity / Holdings</th>
                                <th className="py-3.5 px-4">Collection Scope &amp; Details</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border font-sans">
                              {filteredStats.map((item, idx) => (
                                <tr key={item.label} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald text-muted-foreground">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-bold font-oswald text-foreground text-sm uppercase tracking-wide">
                                    {item.label}
                                  </td>
                                  <td className="py-3.5 px-4">
                                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-oswald font-bold uppercase tracking-wider border border-border text-muted-foreground">
                                      {item.category}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-4 text-right font-black font-oswald text-primary text-lg sm:text-xl">
                                    {item.count}{item.suffix ? ` ${item.suffix}` : ""}
                                  </td>
                                  <td className="py-3.5 px-4 text-muted-foreground leading-relaxed text-xs sm:text-sm">
                                    {item.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Printed Journals by Department Table (Transparent with border lines) */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3">
                          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                            List of Printed Journals by Department
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                            Subscribed specialized print research journals directly aligned with Anna University engineering streams.
                          </p>
                        </div>

                        <div className="overflow-x-auto border border-border bg-transparent">
                          <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b-2 border-border bg-foreground/[0.03] text-xs font-black uppercase font-oswald text-foreground">
                                <th className="py-3.5 px-4 w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 min-w-[280px]">Name of the Department</th>
                                <th className="py-3.5 px-4 w-[120px]">Code</th>
                                <th className="py-3.5 px-4 text-right w-[180px]">No of Printed Journals</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border font-sans">
                              {departmentJournals.map((dept) => (
                                <tr key={dept.sno} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald text-muted-foreground">
                                    {String(dept.sno).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-sm">
                                    {dept.department}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-bold text-xs uppercase text-primary">
                                    {dept.code}
                                  </td>
                                  <td className="py-3.5 px-4 text-right font-black font-oswald text-foreground text-base">
                                    {String(dept.count).padStart(2, "0")}
                                  </td>
                                </tr>
                              ))}
                              {/* Total Row */}
                              <tr className="border-t-2 border-primary/40 bg-foreground/[0.04]">
                                <td colSpan={3} className="py-4 px-4 font-oswald font-black uppercase text-foreground tracking-wider text-sm">
                                  TOTAL PRINTED JOURNALS SUBSCRIBED
                                </td>
                                <td className="py-4 px-4 text-right font-oswald font-black text-primary text-xl">
                                  37
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Collections Visual Showcase (Images Section with Different Shapes) */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-oswald font-bold uppercase tracking-wider text-primary mb-1">
                              <LibraryIcon className="w-4 h-4" />
                              Physical Infrastructure
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                              Stack &amp; Periodicals Visual Gallery
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                              Architectural views of the primary stack room, reference archives, and periodical reading lounges.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Image 1: Shape 1 (rounded-tl-2xl rounded-br-md rounded-tr-xs rounded-bl-xs) */}
                          <div className="group overflow-hidden rounded-tl-2xl rounded-br-md rounded-tr-xs rounded-bl-xs border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[200px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1507842229451-7f01be88a0d4?auto=format&fit=crop&w=800&q=80"
                                alt="Main Stack Wing"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Main Stack Wing
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  29,853+ engineering volumes
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase text-primary border border-primary/30 px-1.5 py-0.5 rounded-xs">
                                Ground Fl.
                              </span>
                            </div>
                          </div>

                          {/* Image 2: Shape 2 (rounded-tl-xs rounded-br-2xl rounded-tr-md rounded-bl-xs) */}
                          <div className="group overflow-hidden rounded-tl-xs rounded-br-2xl rounded-tr-md rounded-bl-xs border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[200px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
                                alt="Reference Collection"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Reference Section
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  Encyclopedias, Codes &amp; Standards
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase text-primary border border-primary/30 px-1.5 py-0.5 rounded-xs">
                                1st Floor
                              </span>
                            </div>
                          </div>

                          {/* Image 3: Shape 3 (rounded-tl-md rounded-br-xs rounded-tr-2xl rounded-bl-xs) */}
                          <div className="group overflow-hidden rounded-tl-md rounded-br-xs rounded-tr-2xl rounded-bl-xs border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[200px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
                                alt="Periodicals Lounge"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Periodicals Lounge
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  37 Subscribed Print Journals
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase text-primary border border-primary/30 px-1.5 py-0.5 rounded-xs">
                                Reading Hall
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* TAB 3: DIGITAL LIBRARY (Unified Architectural Table Console) */}
                  {/* ========================================================= */}
                  {activeTab === "digital-library" && (
                    <div className="space-y-6">
                      {/* Section Title & Description */}
                      <div className="border-b border-border pb-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-2 text-xs font-oswald uppercase tracking-widest text-primary font-bold mb-1">
                            <Database className="w-3.5 h-3.5" />
                            <span>Accredited E-Resources Consortia</span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                            Digital Library &amp; E-Resources Directory
                          </h2>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                            Tabulated directory of 75+ accredited online gateways, peer-reviewed open access journals, e-books, and courseware.
                          </p>
                        </div>
                      </div>

                      {/* Unified Architectural Table Console */}
                      <div className="border border-border bg-transparent rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-2xs">
                        {/* Tier 1: Category Filter Buttons Bar */}
                        <div className="border-b border-border bg-foreground/[0.02] p-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
                          {[
                            { id: "all", label: "All Repositories", count: allDigitalResources.length },
                            { id: "e-library", label: "E-Library Gateways", count: eLibraryGateways.length },
                            { id: "e-journal", label: "Open Access E-Journals", count: openAccessJournals.length },
                            { id: "e-book", label: "E-Books Databases", count: eBooksDirectory.length },
                            { id: "course", label: "Online Courseware", count: freeCourseMaterials.length },
                          ].map((cat) => {
                            const isActive = digitalCategory === cat.id;
                            return (
                              <button
                                key={cat.id}
                                onClick={() => setDigitalCategory(cat.id)}
                                className={`group relative flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-oswald uppercase tracking-wider font-bold transition-all shrink-0 rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs border ${
                                  isActive
                                    ? "bg-primary text-white border-primary shadow-xs"
                                    : "bg-background dark:bg-[#18181b] text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] border-border"
                                }`}
                              >
                                <span>{cat.label}</span>
                                <span
                                  className={`px-1.5 py-0.5 text-[11px] font-mono font-bold rounded-xs transition-colors ${
                                    isActive
                                      ? "bg-white/20 text-white"
                                      : "bg-foreground/[0.05] text-muted-foreground group-hover:text-foreground border border-border/80"
                                  }`}
                                >
                                  {cat.count}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Tier 2: Search Command Bar */}
                        <div className="border-b border-border bg-foreground/[0.015] px-4 sm:px-6 py-3">
                          {/* Search Input */}
                          <div className="relative w-full">
                            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                            <input
                              type="text"
                              placeholder="Search by title, publisher, or subject (e.g. DELNET, arXiv, MIT, Python, IEEE)..."
                              value={digitalSearch}
                              onChange={(e) => setDigitalSearch(e.target.value)}
                              className="w-full pl-10 pr-16 py-2.5 text-xs sm:text-sm bg-background dark:bg-[#18181b] border border-border rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-sans"
                            />
                            {digitalSearch && (
                              <button
                                onClick={() => setDigitalSearch("")}
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-oswald font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground px-2 py-0.5 rounded-xs bg-foreground/[0.06] hover:bg-foreground/[0.1] border border-border"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Tier 3: Spacious, Neat Transparent Table (Category Column REMOVED) */}
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b-2 border-border bg-foreground/[0.04] text-xs font-black uppercase font-oswald text-foreground tracking-wider">
                                <th className="py-4 px-4 w-[70px] text-center">S.No</th>
                                <th className="py-4 px-6 min-w-[280px] sm:w-[340px] lg:w-[380px]">Resource / Provider Name</th>
                                <th className="py-4 px-6 min-w-[320px]">Description &amp; Discipline Coverage</th>
                                <th className="py-4 px-6 text-right w-[160px]">Portal Link</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border font-sans">
                              {filteredDigital.map((item, idx) => (
                                <tr
                                  key={`${item.category}-${item.sno}-${item.name}`}
                                  className="hover:bg-primary/[0.02] even:bg-foreground/[0.01] transition-colors group/row"
                                >
                                  <td className="py-5 px-4 text-center font-bold font-oswald text-muted-foreground">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-foreground/[0.04] border border-border text-xs font-mono font-bold text-muted-foreground">
                                      {String(idx + 1).padStart(2, "0")}
                                    </span>
                                  </td>
                                  <td className="py-5 px-6 font-bold font-oswald text-foreground">
                                    <a
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm sm:text-base font-bold font-oswald uppercase tracking-wide text-foreground group-hover/row:text-primary transition-colors block leading-snug"
                                    >
                                      {item.name}
                                    </a>
                                    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/80 font-mono font-normal mt-1">
                                      <Globe2 className="w-3 h-3 text-primary/70 shrink-0" />
                                      <span className="truncate">{item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                                    </div>
                                  </td>
                                  <td className="py-5 px-6 text-muted-foreground leading-relaxed text-xs sm:text-sm font-sans max-w-2xl">
                                    {item.description || "Peer-reviewed scholarly electronic database"}
                                  </td>
                                  <td className="py-5 px-6 text-right">
                                    <a
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/40 bg-stone-200/90 dark:bg-neutral-800 px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none shrink-0"
                                    >
                                      <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                                        <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                          <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                                            </svg>
                                          </span>
                                          <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                              <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                                            </svg>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:text-white transition-colors duration-300">
                                        <span>Access</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                      </span>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Empty State */}
                        {filteredDigital.length === 0 && (
                          <div className="text-center py-16 px-6 bg-transparent">
                            <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-40" />
                            <h3 className="text-lg font-black font-oswald uppercase text-foreground">
                              No matching digital resources found
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                              {digitalSearch
                                ? `We couldn't find any resources matching "${digitalSearch}". Try checking your query or resetting category filters.`
                                : "No resources found in this category."}
                            </p>
                            <button
                              onClick={() => {
                                setDigitalSearch("");
                                setDigitalCategory("all");
                              }}
                              className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider text-white bg-primary rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-all"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              <span>Reset Search &amp; Show All 75 Resources</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Digital Resource Centre Images Section (Different Shapes) */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-oswald font-bold uppercase tracking-wider text-primary mb-1">
                              <Monitor className="w-4 h-4" />
                              High-Speed Computing Facilities
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                              Digital Resource Centre &amp; E-Learning Labs
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                              Networked computing terminals providing seamless access to DELNET, J-Gate, NPTEL, and national consortia.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Image 1: Shape 1 (rounded-tl-2xl rounded-br-sm rounded-tr-xs rounded-bl-xl) */}
                          <div className="group overflow-hidden rounded-tl-2xl rounded-br-sm rounded-tr-xs rounded-bl-xl border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[220px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                alt="Digital Access Workstations"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Digital Access Terminals
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  High-speed 1 Gbps LAN &amp; digital research terminals
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 rounded-xs">
                                30+ Systems
                              </span>
                            </div>
                          </div>

                          {/* Image 2: Shape 2 (rounded-tl-xs rounded-br-2xl rounded-tr-xl rounded-bl-sm) */}
                          <div className="group overflow-hidden rounded-tl-xs rounded-br-2xl rounded-tr-xl rounded-bl-sm border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[220px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                                alt="E-Resource Discovery Node"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Koha ILMS &amp; OPAC Kiosks
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  Instant bibliographic search &amp; electronic thesis retrieval
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 rounded-xs">
                                24/7 OPAC
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* TAB 4: SERVICES & RULES (Transparent Tables with Border Lines) */}
                  {/* ========================================================= */}
                  {activeTab === "services-rules" && (
                    <div className="space-y-12">
                      {/* Services Table (Replaces cards) */}
                      <div className="space-y-4">
                        <div className="border-b border-border pb-3">
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                            Comprehensive Library Services (10 Facilities)
                          </h2>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                            Lending, OPAC catalog search, digital workstations, discussion rooms, and Inter-Library Loans.
                          </p>
                        </div>

                        <div className="overflow-x-auto border border-border bg-transparent">
                          <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b-2 border-border bg-foreground/[0.03] text-xs font-black uppercase font-oswald text-foreground">
                                <th className="py-3.5 px-4 w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 min-w-[240px]">Service Facility</th>
                                <th className="py-3.5 px-4 w-[140px]">Category</th>
                                <th className="py-3.5 px-4">Operational Scope &amp; Facilities</th>
                                <th className="py-3.5 px-4 text-right w-[120px]">Availability</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border font-sans">
                              {libraryServices.map((svc, idx) => (
                                <tr key={svc.id} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald text-muted-foreground">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4">
                                    <span className="font-bold font-oswald uppercase text-foreground text-sm block">
                                      {svc.title}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-4">
                                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-oswald font-bold uppercase tracking-wider border border-primary/30 text-primary">
                                      {svc.badge || "Core Service"}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-4 text-muted-foreground leading-relaxed text-xs sm:text-sm">
                                    {svc.description}
                                  </td>
                                  <td className="py-3.5 px-4 text-right font-oswald font-bold uppercase text-xs text-emerald-600 dark:text-emerald-400">
                                    Active
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Borrowing Eligibility Table (Transparent with border lines) */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3">
                          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                            Membership Borrowing Entitlements
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                            Official loan book limits and borrowing periods for students and faculty.
                          </p>
                        </div>

                        <div className="overflow-x-auto border border-border bg-transparent">
                          <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b-2 border-border bg-foreground/[0.03] text-xs font-black uppercase font-oswald text-foreground">
                                <th className="py-3.5 px-4 min-w-[200px]">Membership Category</th>
                                <th className="py-3.5 px-4 w-[180px]">Borrowing Entitlements</th>
                                <th className="py-3.5 px-4 w-[140px]">Loan Period</th>
                                <th className="py-3.5 px-4">Privilege Scope</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border font-sans">
                              {borrowingEligibility.map((item) => (
                                <tr key={item.category} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald text-foreground text-sm">
                                    {item.category}
                                  </td>
                                  <td className="py-3.5 px-4">
                                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs font-oswald font-black text-sm">
                                      {item.entitlement}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-semibold text-foreground text-sm">
                                    {item.loanPeriod}
                                  </td>
                                  <td className="py-3.5 px-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Overdue Fine Slabs Table & Estimator */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3">
                          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                            Overdue Fine Slabs &amp; Interactive Estimator
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                            Transparent tiered late fee charges applied beyond the 30-day loan period.
                          </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-12 items-start">
                          <div className="lg:col-span-7">
                            <div className="overflow-x-auto border border-border bg-transparent">
                              <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                                <thead>
                                  <tr className="border-b-2 border-border bg-foreground/[0.03] text-xs font-black uppercase font-oswald text-foreground">
                                    <th className="py-3.5 px-4">Overdue Elapsed Period</th>
                                    <th className="py-3.5 px-4">Slab Duration</th>
                                    <th className="py-3.5 px-4 text-right">Fine Rate</th>
                                    <th className="py-3.5 px-4 text-right">Billing Unit</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-border font-sans">
                                  {overdueFineSlabs.map((slab) => (
                                    <tr key={slab.slab} className="hover:bg-foreground/[0.02] transition-colors">
                                      <td className="py-3.5 px-4 font-black font-oswald uppercase text-foreground">
                                        {slab.period}
                                      </td>
                                      <td className="py-3.5 px-4 text-muted-foreground">
                                        {slab.slab}
                                      </td>
                                      <td className="py-3.5 px-4 text-right font-black font-oswald text-primary text-lg">
                                        {slab.rate}
                                      </td>
                                      <td className="py-3.5 px-4 text-right text-xs text-muted-foreground uppercase font-medium">
                                        {slab.unit}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Transparent Fine Estimator */}
                          <div className="lg:col-span-5 p-5 border border-border bg-transparent rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-4">
                            <div className="flex items-center gap-2 border-b border-border pb-2.5">
                              <Calculator className="w-5 h-5 text-primary" />
                              <h4 className="font-black font-oswald uppercase text-foreground text-base">
                                Interactive Late Fee Estimator
                              </h4>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <div className="flex items-center justify-between text-xs font-oswald font-bold uppercase mb-1">
                                  <span>Days Overdue: {calcDays} Day(s)</span>
                                  <span className="text-primary font-black">
                                    {calcDays <= 7 ? "₹1.00 / day" : calcDays <= 14 ? "₹2.00 / day" : "₹5.00 / day"}
                                  </span>
                                </div>
                                <input
                                  type="range"
                                  min={1}
                                  max={30}
                                  value={calcDays}
                                  onChange={(e) => setCalcDays(Number(e.target.value))}
                                  className="w-full accent-primary cursor-pointer h-2 bg-muted rounded-lg"
                                />
                                <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1">
                                  <span>1 Day</span>
                                  <span>7 Days (₹7)</span>
                                  <span>14 Days (₹21)</span>
                                  <span>30 Days (₹101)</span>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center justify-between text-xs font-oswald font-bold uppercase mb-1">
                                  <span>Number of Overdue Books: {calcBooks}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {[1, 2, 3, 5, 10].map((b) => (
                                    <button
                                      key={b}
                                      onClick={() => setCalcBooks(b)}
                                      className={`flex-1 py-1 text-xs font-oswald font-bold uppercase rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs border transition-all ${
                                        calcBooks === b
                                          ? "bg-primary text-white border-primary"
                                          : "bg-transparent text-muted-foreground border-border hover:bg-foreground/[0.04]"
                                      }`}
                                    >
                                      {b} {b === 1 ? "Book" : "Books"}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="p-3.5 border border-border bg-foreground/[0.02] rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs flex items-center justify-between">
                              <div>
                                <p className="text-[11px] font-oswald font-bold uppercase text-muted-foreground">
                                  Total Calculated Fine
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {calcBooks} book(s) overdue by {calcDays} day(s)
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-3xl font-black font-oswald text-primary">
                                  ₹ {calculatedFine.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 12 Core Rules (Transparent Table with Border Lines) */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3">
                          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                            Library Code of Conduct &amp; Guidelines (12 Rules)
                          </h3>
                        </div>

                        <div className="overflow-x-auto border border-border bg-transparent">
                          <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b-2 border-border bg-foreground/[0.03] text-xs font-black uppercase font-oswald text-foreground">
                                <th className="py-3 px-4 w-[90px]">Rule #</th>
                                <th className="py-3 px-4">Regulation &amp; Code of Conduct Specification</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border font-sans">
                              {libraryRules.map((r) => (
                                <tr key={r.id} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3 px-4 font-black font-oswald text-primary text-sm">
                                    #{String(r.id).padStart(2, "0")}
                                  </td>
                                  <td className="py-3 px-4 text-muted-foreground leading-relaxed text-xs sm:text-sm">
                                    {r.rule}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Facilities & Services Visual Showcase (Images Section with Different Shapes) */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-oswald font-bold uppercase tracking-wider text-primary mb-1">
                              <ShieldCheck className="w-4 h-4" />
                              Library Facilities &amp; Study Areas
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                              Circulation Desks &amp; Quiet Study Environments
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                              Automated barcode scanning counters, reference consultation rooms, and individual study pods.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Image 1: Shape 1 (rounded-tl-xl rounded-br-2xl rounded-tr-xs rounded-bl-xs) */}
                          <div className="group overflow-hidden rounded-tl-xl rounded-br-2xl rounded-tr-xs rounded-bl-xs border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[220px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
                                alt="Circulation & Return Desk"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Circulation &amp; Reference Help Desk
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  Barcoded check-out, renewal, and inter-library loan processing
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 rounded-xs">
                                Ground Floor
                              </span>
                            </div>
                          </div>

                          {/* Image 2: Shape 2 (rounded-tl-xs rounded-br-xl rounded-tr-2xl rounded-bl-xs) */}
                          <div className="group overflow-hidden rounded-tl-xs rounded-br-xl rounded-tr-2xl rounded-bl-xs border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[220px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                                alt="Collaborative Seminar Space"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Collaborative Seminar &amp; Discussion Pod
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  Multi-disciplinary project work and group technical research
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 rounded-xs">
                                Audio-Visual Hall
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* TAB 5: COMMITTEE (Transparent Table with Border Lines) */}
                  {/* ========================================================= */}
                  {activeTab === "committee" && (
                    <div className="space-y-8">
                      <div className="border-b border-border pb-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                            Library Committee (21 Members)
                          </h2>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                            Institutional advisory body formulating procurement policies and representing departmental literature needs.
                          </p>
                        </div>

                        {/* Minimal Search Bar */}
                        <div className="relative w-full sm:w-64 shrink-0">
                          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Search committee member, role..."
                            value={committeeSearch}
                            onChange={(e) => setCommitteeSearch(e.target.value)}
                            className="w-full pl-9 pr-8 py-2 text-xs bg-background dark:bg-[#18181b] border border-border rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-sans"
                          />
                          {committeeSearch && (
                            <button
                              onClick={() => setCommitteeSearch("")}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-oswald font-bold uppercase text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded-xs bg-foreground/[0.06] hover:bg-foreground/[0.1] border border-border"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Committee Table (Transparent with border lines - Minimal 4-Column Architecture) */}
                      <div className="overflow-x-auto border border-border bg-transparent">
                        <table className="w-full text-left border-collapse bg-transparent text-xs sm:text-sm">
                          <thead>
                            <tr className="border-b-2 border-border bg-foreground/[0.03] text-xs font-black uppercase font-oswald text-foreground">
                              <th className="py-3.5 px-4 w-[60px]">S.No</th>
                              <th className="py-3.5 px-4 min-w-[240px]">Name of the Member</th>
                              <th className="py-3.5 px-4 min-w-[240px]">Designation / Affiliation</th>
                              <th className="py-3.5 px-4 text-right w-[180px]">Committee Role</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans">
                            {filteredCommittee.map((member) => (
                              <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                                <td className="py-3.5 px-4 font-bold font-oswald text-muted-foreground">
                                  {String(member.sno).padStart(2, "0")}
                                </td>
                                <td className="py-3.5 px-4 font-bold font-oswald text-foreground text-sm">
                                  <div className="flex items-center gap-2">
                                    <span>{member.name}</span>
                                    {member.role === "Chairman" && (
                                      <span className="px-1.5 py-0.5 text-[9px] font-oswald font-bold uppercase bg-primary text-white rounded-xs">
                                        Principal
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="py-3.5 px-4 text-xs text-muted-foreground font-medium">
                                  {member.designation}
                                </td>
                                <td className="py-3.5 px-4 text-right">
                                  <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-[11px] font-oswald font-bold uppercase ${
                                      member.role === "Chairman"
                                        ? "bg-primary/10 text-primary border border-primary/20 font-black"
                                        : member.role === "Secretary" || member.role === "Member Secretary"
                                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                                        : "border border-border text-muted-foreground"
                                    }`}
                                  >
                                    {member.role}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {filteredCommittee.length === 0 && (
                        <div className="py-10 text-center border border-border border-t-0 bg-foreground/[0.01]">
                          <p className="text-xs font-oswald uppercase tracking-wider text-muted-foreground">
                            No committee members match "{committeeSearch}"
                          </p>
                          <button
                            onClick={() => setCommitteeSearch("")}
                            className="mt-2.5 px-3 py-1 text-xs font-oswald font-bold uppercase tracking-wider text-primary border border-primary/30 hover:bg-primary/5 rounded-xs"
                          >
                            Clear Search
                          </button>
                        </div>
                      )}

                      {/* Governance Visual Showcase (Images Section with Different Shapes) */}
                      <div className="pt-8 border-t border-border space-y-4">
                        <div className="border-b border-border pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-oswald font-bold uppercase tracking-wider text-primary mb-1">
                              <Users className="w-4 h-4" />
                              Institutional Oversight
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                              Governance &amp; Quality Assurance Council
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
                              Convening committee meetings to audit acquisitions, enhance digital infrastructure, and enrich academic collections.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Image 1: Shape 1 (rounded-tl-2xl rounded-br-xl rounded-tr-xs rounded-bl-xs) */}
                          <div className="group overflow-hidden rounded-tl-2xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[220px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                                alt="Advisory Council Boardroom"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Advisory Council Boardroom
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  Quarterly policy formulation and annual budget allocation
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 rounded-xs">
                                Executive Council
                              </span>
                            </div>
                          </div>

                          {/* Image 2: Shape 2 (rounded-tl-xs rounded-br-2xl rounded-tr-xl rounded-bl-sm) */}
                          <div className="group overflow-hidden rounded-tl-xs rounded-br-2xl rounded-tr-xl rounded-bl-sm border border-border bg-transparent flex flex-col shadow-2xs">
                            <div className="relative h-[220px] w-full overflow-hidden bg-muted/20">
                              <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                                alt="Academic Review Forum"
                                className="w-full h-full object-cover block"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
                                }}
                              />
                            </div>
                            <div className="p-3 bg-foreground/[0.02] border-t border-border flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-oswald font-bold uppercase tracking-wider text-foreground">
                                  Academic Review &amp; Student Feedback
                                </h4>
                                <p className="text-[11px] text-muted-foreground font-sans">
                                  Ensuring high student satisfaction and title acquisition
                                </p>
                              </div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 rounded-xs">
                                Quality Audit
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Information Desk & Contact Footer (Transparent style) */}
                      <div className="p-6 border border-border bg-transparent rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="space-y-1.5">
                          <p className="text-xs font-oswald font-bold uppercase tracking-wider text-primary">
                            Circulation &amp; Reference Desk
                          </p>
                          <h4 className="text-xl font-black font-oswald uppercase text-foreground">
                            Connect with Chief Librarian &amp; Team
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            Main Academic Block, Ground Floor. Monday to Saturday: 8:00 AM – 7:00 PM | Sunday: 10:00 AM – 4:00 PM
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <a
                            href="https://delnet.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/40 bg-stone-200/90 dark:bg-neutral-800 px-5 py-2.5 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none"
                          >
                            <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                              <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                                  <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                                  </svg>
                                </span>
                                <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                                  <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:text-white transition-colors duration-300">
                              <span>DELNET Portal</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          </a>

                          <a
                            href="https://jgateplus.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border bg-stone-200/90 dark:bg-neutral-800 px-5 py-2.5 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none"
                          >
                            <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                              <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                                  <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                                  </svg>
                                </span>
                                <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                                  <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:text-white transition-colors duration-300">
                              <span>J-Gate Database</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
