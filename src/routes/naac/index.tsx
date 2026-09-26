import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { useHeader } from "@/context/HeaderContext";
import { DataGridContainer } from "@/components/ui/data-grid-table";

import naacData from "@/data/naac.json";
import naacDocs from "@/data/naac-documents.json";
import cocData from "@/data/code-of-conduct.json";

const title = "NAAC | Mohamed Sathak A.J. College of Engineering";
const description =
  "National Assessment and Accreditation Council (NAAC) criteria, DVV clarifications, institutional distinctiveness, and quality benchmarks at MSAJCE.";

export const Route = createFileRoute("/naac/")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search["tab"] as string) || undefined,
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
  component: NaacPortal,
});

const subNavTabs: SubNavTab[] = [
  { id: "overview", label: "Overview" },
  { id: "criteria", label: "Criteria 1–7" },
  { id: "dvv", label: "DVV Clarification" },
  { id: "extended-profile", label: "Extended Profile" },
  { id: "best-practices", label: "Best Practices" },
  { id: "code-of-conduct", label: "Code of Conduct" },
];

function ActionDownloadButton({ href, label = "View Document" }: { href: string; label?: string }) {
  const fullUrl = href.startsWith("http") ? href : `https://www.msajce-edu.in/${href.replace(/^\//, "")}`;
  return (
    <a
      href={fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none shrink-0"
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
        <span>{label}</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

function WaveDividerAB() {
  return (
    <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
          className="fill-[#F3F3F2] dark:fill-[#18181B]"
        />
      </svg>
    </div>
  );
}

function WaveDividerBA() {
  return (
    <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
          className="fill-white dark:fill-[#121214]"
        />
      </svg>
    </div>
  );
}

function NaacPortal() {
  const { tab } = Route.useSearch();
  const { setHeaderHidden } = useHeader();
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (tab === "distinctiveness") return "best-practices";
    if (tab && subNavTabs.some((t) => t.id === tab)) return tab;
    return "overview";
  });
  const [activeCriterion, setActiveCriterion] = useState<string | null>(null);

  // DVV Search & Pagination State
  const [dvvSearch, setDvvSearch] = useState("");
  const [dvvPage, setDvvPage] = useState(0);
  const dvvPageSize = 15;

  useEffect(() => {
    if (tab === "distinctiveness") {
      setActiveTab("best-practices");
    } else if (tab && subNavTabs.some((t) => t.id === tab) && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveCriterion(null);
    setHeaderHidden(false);

    setTimeout(() => {
      const el = document.getElementById("naac-tab-content");
      if (el) {
        const headerOffset = window.innerWidth < 768 ? 105 : 115;
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    }, 60);
  };

  const handleTitleClick = () => {
    setActiveTab("overview");
    setActiveCriterion(null);
    setHeaderHidden(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSubSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = window.innerWidth < 768 ? 110 : 120;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  const mainCriteria = useMemo(() => naacData.criteria.slice(0, 7), []);

  const filteredDvvList = useMemo(() => {
    const list = naacDocs["DVV Clarification"] || [];
    if (!dvvSearch.trim()) return list;
    const q = dvvSearch.toLowerCase();
    return list.filter(
      (item) => item.title.toLowerCase().includes(q) || item.url.toLowerCase().includes(q)
    );
  }, [dvvSearch]);

  const paginatedDvvList = useMemo(() => {
    const start = dvvPage * dvvPageSize;
    return filteredDvvList.slice(start, start + dvvPageSize);
  }, [filteredDvvList, dvvPage]);

  const totalDvvPages = Math.ceil(filteredDvvList.length / dvvPageSize);

  const currentTabLabel = subNavTabs.find((t) => t.id === activeTab)?.label ?? "NAAC";

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary Navigation */}
      <SecondarySubNav
        title="NAAC"
        tabs={subNavTabs}
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onTitleClick={handleTitleClick}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 2. HERO BANNER: Standard Bottom-Docked Theme-Adaptive Frame Banner        */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/accreditations_campus.jpg"
              alt="MSAJCE NAAC"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Bottom-Docked Theme-Adaptive Frame with Dynamic Tab Title */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTabLabel}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none"
                >
                  {currentTabLabel}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MAIN CONTENT: Multi-Section Alternating Wave Layout                    */}
        {/* ========================================================================= */}
        <div id="naac-tab-content" className="w-full scroll-mt-[115px] md:scroll-mt-[120px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full"
            >
              {/* ========================================================= */}
              {/* TAB 1: OVERVIEW (Alternating Wave Canvas Design)           */}
              {/* ========================================================= */}
              {activeTab === "overview" && (
                <div className="w-full">
                  {/* SECTION 1: Overview Narrative (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          OVERVIEW
                        </h2>
                      </div>

                      {/* Full-Length Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          India has one of the largest and diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of the higher education.
                        </p>
                        <p>
                          To address these concerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies, advocated the establishment of an independent National accreditation agency. Consequently, the National Assessment and Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru.
                        </p>
                      </div>

                      {/* Accent Callout */}
                      <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                        <p className="w-full text-sm sm:text-base md:text-lg text-foreground font-libre font-medium leading-relaxed italic">
                          “The mandate of NAAC as reflected in its vision statement is in making quality assurance an integral part of the functioning of Higher Education Institutions (HEIs).”
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2 / #18181B) */}
                  <WaveDividerAB />

                  {/* SECTION 2: Governance & Council Structure (#F3F3F2 / #18181B Canvas) */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          GOVERNANCE & COUNCIL STRUCTURE
                        </h2>
                      </div>

                      {/* Full-Length Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers and senior academicians from a cross-section of Indian higher education system.
                        </p>
                        <p>
                          The Chairperson of the UGC is the President of the GC of the NAAC, the Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member secretary of both the GC and the EC.
                        </p>
                      </div>

                      {/* Governance Framework Table */}
                      <div className="space-y-3 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          EXECUTIVE ORGANS & LEADERSHIP
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-1/4">
                                    Entity / Body
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-1/3">
                                    Presiding Leadership
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                                    Mandate & Scope
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                <tr className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground">
                                    General Council (GC)
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground">
                                    President: Chairperson of the UGC
                                  </td>
                                  <td className="py-3.5 px-4 text-foreground/90">
                                    Comprises educational administrators, policy makers, and senior academicians from Indian higher education.
                                  </td>
                                </tr>
                                <tr className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground">
                                    Executive Committee (EC)
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground">
                                    Chairperson: Eminent Academician (Nominated by UGC President)
                                  </td>
                                  <td className="py-3.5 px-4 text-foreground/90">
                                    Executive authority guiding assessment policies, methodology validation, and accreditation reviews.
                                  </td>
                                </tr>
                                <tr className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground">
                                    Directorate
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground">
                                    Director (Member Secretary to GC & EC)
                                  </td>
                                  <td className="py-3.5 px-4 text-foreground/90">
                                    Academic and administrative head overseeing council operations, peer reviews, and institutional evaluations headquartered in Bengaluru.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: CRITERIA 1–7 (Standard Minimal Table Standard)     */}
              {/* ========================================================= */}
              {activeTab === "criteria" && (
                <div className="w-full">
                  {!activeCriterion ? (
                    <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                      <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                        <div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                            ASSESSMENT CRITERIA & WEIGHTAGES
                          </h2>
                        </div>

                        {/* Standard Minimal DataGrid Table */}
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-24">
                                    Criterion
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                                    Criterion Title
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36">
                                    Weightage
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-32">
                                    Metrics
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {mainCriteria.map((criterion) => (
                                  <tr key={criterion.id} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 font-oswald font-black text-sm text-primary whitespace-nowrap">
                                      Criterion {criterion.number}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm tracking-wide">
                                      {criterion.title}
                                    </td>
                                    <td className="py-3.5 px-4 font-mono font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">
                                      {criterion.score} Marks
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                                      {criterion.metrics.length} Metrics
                                    </td>
                                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                      <button
                                        onClick={() => {
                                          setActiveCriterion(criterion.id);
                                          const el = document.getElementById("naac-tab-content");
                                          if (el) {
                                            const headerOffset = window.innerWidth < 768 ? 105 : 115;
                                            const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                                            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
                                          }
                                        }}
                                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none"
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
                                          <span>View Metrics</span>
                                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </span>
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                              <tfoot className="bg-stone-100 dark:bg-neutral-900 border-t border-stone-300 dark:border-neutral-700 font-oswald font-black uppercase text-xs tracking-wider">
                                <tr>
                                  <td colSpan={2} className="py-3 px-4 text-foreground">
                                    Total Assessment Weightage
                                  </td>
                                  <td colSpan={3} className="py-3 px-4 font-mono text-primary text-sm">
                                    1,000 Maximum Marks
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </DataGridContainer>
                      </div>
                    </section>
                  ) : (
                    // CRITERION DETAIL VIEW (Open Tabular Standard)
                    <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                      <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                        {(() => {
                          const criterion = naacData.criteria.find((c) => c.id === activeCriterion);
                          if (!criterion) return null;

                          return (
                            <>
                              {/* Header & Back Action */}
                              <div className="space-y-4">
                                <button
                                  onClick={() => setActiveCriterion(null)}
                                  className="inline-flex items-center gap-2 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                >
                                  <ArrowLeft className="w-4 h-4" /> Back to All Criteria
                                </button>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                  <div>
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="bg-primary/10 text-primary font-oswald font-black text-xs px-2.5 py-1 rounded-sm uppercase tracking-wider">
                                        Criterion {criterion.number}
                                      </span>
                                      <span className="font-mono text-xs font-bold text-muted-foreground">
                                        {criterion.score} Maximum Marks
                                      </span>
                                    </div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                                      {criterion.title}
                                    </h2>
                                  </div>
                                </div>
                              </div>

                              {/* Metrics Table */}
                              <div className="space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                                  KEY INDICATORS & VERIFICATION METRICS
                                </h3>

                                <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                                  <div className="overflow-x-auto bg-transparent">
                                    <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                                      <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                        <tr>
                                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-24">
                                            Metric #
                                          </th>
                                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                            Description & Verification Standard
                                          </th>
                                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-28">
                                            Score
                                          </th>
                                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                            Documents
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-border/40 font-libre">
                                        {criterion.metrics.map((metric, idx) => (
                                          <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                            <td className="py-3.5 px-4 font-oswald font-black text-sm text-primary whitespace-nowrap align-top">
                                              {metric.number}
                                            </td>
                                            <td className="py-3.5 px-4 align-top">
                                              <p className="text-foreground font-libre text-xs sm:text-sm leading-relaxed">
                                                {metric.description}
                                              </p>
                                            </td>
                                            <td className="py-3.5 px-4 font-mono font-bold text-xs sm:text-sm text-foreground whitespace-nowrap align-top">
                                              {metric.score > 0 ? `${metric.score} Marks` : "Qualitative"}
                                            </td>
                                            <td className="py-3.5 px-4 text-right align-top whitespace-nowrap">
                                              {metric.links && metric.links.length > 0 ? (
                                                <div className="flex flex-col items-end gap-2">
                                                  {metric.links.map((link, lIdx) => (
                                                    <ActionDownloadButton
                                                      key={lIdx}
                                                      href={link.url}
                                                      label={metric.links.length > 1 ? `Doc ${lIdx + 1}` : "View PDF"}
                                                    />
                                                  ))}
                                                </div>
                                              ) : (
                                                <span className="text-muted-foreground text-xs italic">
                                                  Institutional Record
                                                </span>
                                              )}
                                            </td>
                                          </tr>
                                        ))}

                                        {criterion.metrics.length === 0 && (
                                          <tr>
                                            <td colSpan={4} className="py-8 text-center text-muted-foreground font-libre">
                                              No metrics available for this criterion.
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </DataGridContainer>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    </section>
                  )}
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: DVV CLARIFICATION (Tabular standard with Search)   */}
              {/* ========================================================= */}
              {activeTab === "dvv" && (
                <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                  <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          DATA VALIDATION & VERIFICATION (DVV) CLARIFICATIONS
                        </h2>
                      </div>

                      {/* Search Bar */}
                      <div className="relative w-full md:w-80 shrink-0">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <input
                          type="text"
                          value={dvvSearch}
                          onChange={(e) => {
                            setDvvSearch(e.target.value);
                            setDvvPage(0);
                          }}
                          placeholder="Search metric or title..."
                          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-transparent border border-stone-300 dark:border-neutral-700 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary font-libre"
                        />
                      </div>
                    </div>

                    {/* Standard DataGrid Table */}
                    <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                      <div className="overflow-x-auto bg-transparent">
                        <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                          <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                            <tr>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                S.No
                              </th>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                Clarification Requirement & Metric Description
                              </th>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                Verification Document
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/40 font-libre">
                            {paginatedDvvList.map((doc, idx) => (
                              <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                  {String(idx + 1 + dvvPage * dvvPageSize).padStart(2, "0")}
                                </td>
                                <td className="py-3.5 px-4">
                                  <p className="font-libre text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                                    {doc.title}
                                  </p>
                                </td>
                                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                  <ActionDownloadButton href={doc.url} label="Download PDF" />
                                </td>
                              </tr>
                            ))}

                            {paginatedDvvList.length === 0 && (
                              <tr>
                                <td colSpan={3} className="py-8 text-center text-muted-foreground font-libre">
                                  No verification documents found matching your search.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </DataGridContainer>

                    {/* Pagination Bar */}
                    {totalDvvPages > 1 && (
                      <div className="flex items-center justify-between gap-4 pt-2">
                        <span className="text-xs font-oswald uppercase tracking-wider text-muted-foreground">
                          Page {dvvPage + 1} of {totalDvvPages} ({filteredDvvList.length} Total Documents)
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setDvvPage((p) => Math.max(0, p - 1))}
                            disabled={dvvPage === 0}
                            className="px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider border border-stone-300 dark:border-neutral-700 rounded-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-foreground/5 transition-colors cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4 inline" /> Prev
                          </button>
                          <button
                            onClick={() => setDvvPage((p) => Math.min(totalDvvPages - 1, p + 1))}
                            disabled={dvvPage >= totalDvvPages - 1}
                            className="px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider border border-stone-300 dark:border-neutral-700 rounded-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-foreground/5 transition-colors cursor-pointer"
                          >
                            Next <ChevronRight className="w-4 h-4 inline" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* ========================================================= */}
              {/* TAB 4: EXTENDED PROFILE (Tabular standard)                 */}
              {/* ========================================================= */}
              {activeTab === "extended-profile" && (
                <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                  <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        DVV EXTENDED PROFILE
                      </h2>
                    </div>

                    <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                      <div className="overflow-x-auto bg-transparent">
                        <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                          <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                            <tr>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                S.No
                              </th>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                Extended Profile Component / Metric Description
                              </th>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                Verification Document
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/40 font-libre">
                            {(naacDocs["DVV Extended Profile"] || []).map((doc, idx) => (
                              <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                  {String(idx + 1).padStart(2, "0")}
                                </td>
                                <td className="py-3.5 px-4">
                                  <p className="font-libre text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                                    {doc.title}
                                  </p>
                                </td>
                                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                  <ActionDownloadButton href={doc.url} label="Download PDF" />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </DataGridContainer>
                  </div>
                </section>
              )}

              {/* ========================================================================================= */}
              {/* TAB 5: BEST PRACTICES & INSTITUTIONAL DISTINCTIVENESS (Multi-Section Alternating Wave)   */}
              {/* ========================================================================================= */}
              {activeTab === "best-practices" && (
                <div className="w-full">
                  {/* PRACTICE 1: Technology Centres (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          TECHNOLOGY CENTRES
                        </h2>
                      </div>

                      {/* Full-Length Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          Mohamed Sathak A.J. College of Engineering (MSAJCE) was established with the ambition to become an eminent institute for higher education and research through innovative teaching- learning and sustainable practices to meet the industrial and societal needs. To fulfil this vision, we provide holistic, multi-disciplinary skill-based education in the latest cutting edge technologies and also inculcate innovation and entrepreneurial abilities, so that the students are well groomed to face the challenges in the industry and the society through our technology centres.
                        </p>
                        <p>
                          To have a focussed and stress-free involvement of students both in academics and training, the activities are split into two separate sessions such as Forenoon – Academics only and Afternoon – Training & Practices, within the college regular working hours. MSAJCE encourages students towards research and innovation practices by involving them in various hackathons and consultancy works.
                        </p>
                      </div>

                      {/* Subsections: Single Column Points with Readiness Point Design */}
                      <div className="space-y-8 pt-2">
                        {/* Objectives */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            OBJECTIVES
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "To provide hands-on training through experiential learning",
                              "To enable them to get certification from appropriate training agencies in the cutting edge technologies",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Context */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            CONTEXT
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "To make the students deployable, they are trained in multi-disciplinary skills apart from their core domain through our technology centres within regular college hours as per their interest",
                              "The students appearing for placement selection were earlier found to lag in skills required and expected by the employer in their domain",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practice */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            PRACTICE
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "All students are given training as per the schedule prepared at the beginning of the academic year",
                              "All these trainings are given in the afternoon sessions without affecting the regular academic schedule",
                              "Trainers are our own faculty members who had already been certified by different certification agencies and hence freely accessible to students at any time",
                              "Students are free to choose courses of their wish apart from the one given in the training schedule at the beginning",
                              "All these centres will be kept open beyond college working hours and hence they can learn as per their interest",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Evidence of Success */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            EVIDENCE OF SUCCESS
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "The students are certified by different agencies like CISCO, Altair, and Automation anywhere etc.",
                              "They are now found to be not only employable but also deployable directly into the job by the recruited companies",
                              "They found to have learned through hands on experience and hence they will acquire the lifelong learning skills",
                              "Students are found to have developed knowledge not only in cognitive domain but also in the psychomotor domain also, because they undergo experiential learning",
                              "Some of these courses are included as audit courses under Anna University (affiliating university) and the course name will be included in their mark sheets",
                              "The syllabus contents of two such courses taught at our technology centres have been recognised by Anna University and the syllabus set by us will be followed by other affiliating colleges",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2 / #18181B) */}
                  <WaveDividerAB />

                  {/* PRACTICE 2: Afternoon Laboratory Classes (#F3F3F2 / #18181B Canvas) */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          AFTERNOON LABORATORY CLASSES
                        </h2>
                      </div>

                      {/* Subsections: Single Column Points */}
                      <div className="space-y-8 pt-2">
                        {/* Objectives */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            OBJECTIVES
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "To become an eminent institute for higher education through innovative teaching- learning and sustainable practices to meet the industrial and societal needs by offering all practical courses in the afternoon session to learn by experience",
                              "To provide problem solving and critical thinking skills and inculcate innovation and entrepreneurial abilities, so that the students are well groomed to face the challenges in the industry and the society",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Context */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            CONTEXT
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "If practical courses are offered in between theory courses, students may feel fatigued and may not be able to concentrate on theory classes",
                              "To teach content beyond the syllabus theory classes may not be sufficient, but these afternoon sessions will be utilised for this purpose",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practice */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            PRACTICE
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "All the laboratory classes are scheduled only in the afternoon while preparing the time-table",
                              "The experts from industries are invited in the afternoon sessions to talk about practices followed in industry so that students are aware of the practices in industry",
                              "New technologies which are not covered in the regular syllabus are taught in these afternoon sessions",
                              "Students will have freedom to listen to MOOC lectures at library in the afternoon session",
                              "Most of Institution’s Innovation Council activities are conducted in the afternoon",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Evidence of Success */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            EVIDENCE OF SUCCESS
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "Students are getting involved in industry consultancy projects because they had gained practical knowledge expected by the industry",
                              "Students are getting certified by Coursera, Udemy and NPTEL etc.",
                              "Students had participated in many competitions and hackathons and had also secured mentoring support and funding",
                              "Students have designed and developed innovative products with the skills gained from these trainings",
                              "Some of these courses are included as audit courses under Anna University (affiliating university) and the course name will be included in their mark sheets",
                              "The syllabus contents of two such courses taught at our technology centres have been recognised by Anna University and the syllabus set by us will be followed by other affiliating colleges",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Problems Encountered */}
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            PROBLEMS ENCOUNTERED & RESOURCES REQUIRED
                          </h3>
                          <div className="divide-y divide-border/40 font-libre">
                            {[
                              "Difficulty arises in preparation of time table to accommodate all practical classes only in the afternoon",
                              "Accommodating all students for practical courses in one slot is a challenging task",
                            ].map((point, idx) => (
                              <div
                                key={idx}
                                className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 2 -> 3 (#F3F3F2 -> White) */}
                  <WaveDividerBA />

                  {/* SECTION 3: Institutional Distinctiveness (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          INSTITUTIONAL DISTINCTIVENESS
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                  Document Title
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {(naacDocs["Institutional Distinctiveness"] || []).map((doc, idx) => (
                                <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                  {String(idx + 1).padStart(2, "0")}
                                </td>
                                <td className="py-3.5 px-4">
                                  <p className="font-libre text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                                    {doc.title}
                                  </p>
                                </td>
                                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                  <ActionDownloadButton href={doc.url} label="Download PDF" />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </DataGridContainer>
                  </div>
                </section>
              </div>
            )}

            {/* ========================================================================================= */}
            {/* TAB 6: CODE OF CONDUCT (Cleanly Sectioned, Single Column, Readiness Point Design)           */}
            {/* ========================================================================================= */}
            {activeTab === "code-of-conduct" && (
              <div className="w-full">
                {/* SECTION 1: Students Regulations (White / #121214 Canvas) */}
                <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                  <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        CODE OF CONDUCT & PROFESSIONAL ETHICS
                      </h2>
                    </div>

                    {/* Full-Length Editorial Academic Narrative */}
                    <div className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                      <p>
                        This code of conduct specifies the responsibilities expected from each employee in carrying out their day-to-day duties as well as general ethical and moral behaviors. Employees must adhere to this code of conduct with utmost integrity. This code serves as a reference and guideline for all employees whether full-time, part-time or contract basis. Employees must work with public authorities established by the law and uphold our country’s constitution. Employees must strive to attain institutions goals.
                      </p>
                    </div>

                    {/* Quick Section Anchor Jump Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      <button
                        onClick={() => scrollToSubSection("coc-students")}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-200 hover:text-primary transition-all cursor-pointer"
                      >
                        Student Code ({cocData.Student?.length || 0})
                      </button>
                      <button
                        onClick={() => scrollToSubSection("coc-faculty")}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-200 hover:text-primary transition-all cursor-pointer"
                      >
                        Teaching Faculty ({cocData["Teaching Faculty"]?.length || 0})
                      </button>
                      <button
                        onClick={() => scrollToSubSection("coc-staff")}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-200 hover:text-primary transition-all cursor-pointer"
                      >
                        Non-Teaching Staff ({cocData["Non-Teaching Staff"]?.length || 0})
                      </button>
                    </div>

                    {/* Section 1 Content: Student */}
                    <div id="coc-students" className="space-y-4 pt-6 scroll-mt-[130px]">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase tracking-wide text-primary">
                          CODE OF CONDUCT FOR STUDENTS
                        </h3>
                        <span className="text-xs font-oswald uppercase tracking-wider text-muted-foreground">
                          {cocData.Student?.length || 0} Rules
                        </span>
                      </div>

                      {/* Single Column Point Section Design */}
                      <div className="divide-y divide-border/40 font-libre">
                        {cocData.Student?.map((point, idx) => (
                          <div
                            key={idx}
                            className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                          >
                            <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                              {idx + 1}
                            </span>
                            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Wave Divider 1 -> 2 (White -> #F3F3F2 / #18181B) */}
                <WaveDividerAB />

                {/* SECTION 2: Teaching Faculty Code (#F3F3F2 / #18181B Canvas) */}
                <section id="coc-faculty" className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors scroll-mt-[130px]">
                  <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase tracking-wide text-primary">
                        CODE OF CONDUCT FOR TEACHING FACULTY
                      </h3>
                      <span className="text-xs font-oswald uppercase tracking-wider text-muted-foreground">
                        {cocData["Teaching Faculty"]?.length || 0} Rules
                      </span>
                    </div>

                    {/* Single Column Point Section Design */}
                    <div className="divide-y divide-border/40 font-libre">
                      {cocData["Teaching Faculty"]?.map((point, idx) => (
                        <div
                          key={idx}
                          className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                        >
                          <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                            {idx + 1}
                          </span>
                          <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Wave Divider 2 -> 3 (#F3F3F2 -> White) */}
                <WaveDividerBA />

                {/* SECTION 3: Non-Teaching Staff Code (White / #121214 Canvas) */}
                <section id="coc-staff" className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors scroll-mt-[130px]">
                  <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase tracking-wide text-primary">
                        CODE OF CONDUCT FOR NON-TEACHING STAFF
                      </h3>
                      <span className="text-xs font-oswald uppercase tracking-wider text-muted-foreground">
                        {cocData["Non-Teaching Staff"]?.length || 0} Rules
                      </span>
                    </div>

                    {/* Single Column Point Section Design */}
                    <div className="divide-y divide-border/40 font-libre">
                      {cocData["Non-Teaching Staff"]?.map((point, idx) => (
                        <div
                          key={idx}
                          className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                        >
                          <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                            {idx + 1}
                          </span>
                          <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </main>
);
}
