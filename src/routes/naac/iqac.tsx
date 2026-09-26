import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { useHeader } from "@/context/HeaderContext";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import iqacMembers from "@/data/iqac-members.json";

const title = "IQAC | Internal Quality Assurance Cell | MSAJCE";
const description =
  "Internal Quality Assurance Cell (IQAC) at Mohamed Sathak A.J. College of Engineering. Institutional governance, AQAR reports, meeting minutes, and stakeholders feedback.";

export const Route = createFileRoute("/naac/iqac")({
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
  component: IQAC,
});

const subNavTabs: SubNavTab[] = [
  { id: "overview", label: "Overview" },
  { id: "members", label: "Members" },
  { id: "reports", label: "Reports & Minutes" },
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

function IQAC() {
  const { tab } = Route.useSearch();
  const { setHeaderHidden } = useHeader();
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (tab === "aqar-report" || tab === "minutes" || tab === "feedback") return "reports";
    if (tab && subNavTabs.some((t) => t.id === tab)) return tab;
    return "overview";
  });
  const [activeYear, setActiveYear] = useState<string>(Object.keys(iqacMembers)[0] || "2022-2023");

  useEffect(() => {
    if (tab === "aqar-report" || tab === "minutes" || tab === "feedback") {
      setActiveTab("reports");
    } else if (tab && subNavTabs.some((t) => t.id === tab) && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setHeaderHidden(false);

    setTimeout(() => {
      const el = document.getElementById("iqac-main-content");
      if (el) {
        const headerOffset = window.innerWidth < 768 ? 105 : 115;
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    }, 60);
  };

  const handleTitleClick = () => {
    setActiveTab("overview");
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

  const currentTabLabel = subNavTabs.find((t) => t.id === activeTab)?.label ?? "IQAC";

  const aqarReports = useMemo(
    () => [
      {
        year: "2022-2023",
        title: "Annual Quality Assurance Report (AQAR) 2022–2023",
        url: "https://www.msajce-edu.in/uploads/naac/AQAR-PDF-2022-23.pdf",
      },
    ],
    []
  );

  const minutesList = useMemo(
    () => [
      {
        year: "2023-2024",
        title: "Minutes of IQAC Meeting — Academic Year 2023–2024",
        url: "https://www.msajce-edu.in/uploads/iqac/IQAC-MoM-2023-2024.pdf",
      },
    ],
    []
  );

  const feedbackForms = useMemo(
    () => [
      {
        category: "Students Feedback",
        desc: "Curriculum delivery, learning resources, and campus environment evaluation form",
        url: "https://forms.gle/oxdZFbPsBTFKDKTY8",
      },
      {
        category: "Faculty Feedback",
        desc: "Academic syllabus, instructional facilities, and research support evaluation form",
        url: "https://docs.google.com/forms/d/13Q9AcCiqDfGdk2mrWn_11ozXoC7ROxrwcLkYEy2C8QA/edit?ts=6630864f&pli=1",
      },
      {
        category: "Alumni Feedback",
        desc: "Program educational objectives, career readiness, and institutional progress feedback",
        url: "https://docs.google.com/forms/d/1oTQjEnbQnbRnBAct8-N-zG-Wk4I69v0R5s2H31KUr_8/edit?ts=6630866d",
      },
      {
        category: "Employer Feedback",
        desc: "Graduate competency, industry readiness, and professional performance evaluation",
        url: "https://docs.google.com/forms/d/1Xj_FHninA55U6DWlWVvTzKl6wQdXOoUCr2-VjhufM7c/edit?ts=66308691",
      },
    ],
    []
  );

  const actionTakenReports = useMemo(
    () => [
      {
        title: "Action Taken Report on Stakeholder Feedback (2022)",
        metric: "Metric 1.4.1",
        url: "https://www.msajce-edu.in/uploads/aqar/2022/1.4.1/1.4.1ActiontakenReport.pdf",
      },
      {
        title: "Action Taken Report — Curriculum & Institutional Feedback",
        metric: "Metric 1.4.2",
        url: "http://msajce-edu.in/uploads/naac/1.4.2/Action.pdf",
      },
    ],
    []
  );

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary Navigation (3 Clean Core Tabs) */}
      <SecondarySubNav
        title="IQAC"
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
              alt="MSAJCE IQAC"
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
        <div id="iqac-main-content" className="w-full scroll-mt-[115px] md:scroll-mt-[120px]">
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
                  {/* SECTION 1: Overview Narrative & Objectives (White / #121214 Canvas) */}
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
                          In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC), Bangalore, for performance evaluation, assessment and accreditation and quality up gradation of institutions of higher education, the NAAC proposes that every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a part of an institution’s system and work towards realizing the goals of quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the performance of institutions. The IQAC will make a significant and meaningful contribution in the post-accreditation phase of institutions. During the post-accreditation period, the IQAC will channelise the efforts and measures of an institution towards academic excellence.
                        </p>
                        <p>
                          The guidelines provided will facilitate the institution in the creation and operation of the Internal Quality Assurance Cell (IQAC). The work of the IQAC is the first step towards the internalization and institutionalization of quality enhancement. Its success depends upon the sense of belongingness and participation it can inculcate in all the constituents of the institution. It will not be yet another hierarchical structure or recordkeeping exercise in the institution; it will be a facilitative and participative voluntary system/unit/organ of the institution. The IQAC has the potential to become a vehicle for ushering in quality by working out intervention strategies to remove deficiencies and enhance quality. Quality circles in industries operate on similar lines.
                        </p>
                      </div>

                      {/* Accent Callout */}
                      <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                        <p className="w-full text-sm sm:text-base md:text-lg text-foreground font-libre font-medium leading-relaxed italic">
                          “The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the performance of institutions towards academic excellence.”
                        </p>
                      </div>

                      {/* Objectives */}
                      <div className="space-y-4 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          OBJECTIVE OF IQAC
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {[
                            "To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the Institution.",
                            "To promote measures for the institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.",
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
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2 / #18181B) */}
                  <WaveDividerAB />

                  {/* SECTION 2: Strategies, Functions & Benefits (#F3F3F2 / #18181B Canvas) */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8 sm:space-y-10">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          OPERATIONAL MECHANISMS & OUTCOMES
                        </h2>
                      </div>

                      {/* Strategies */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            STRATEGIES
                          </h3>
                          <p className="font-libre text-sm font-semibold text-muted-foreground">
                            IQAC shall evolve mechanisms and procedures for:
                          </p>
                        </div>
                        <div className="divide-y divide-border/40 font-libre">
                          {[
                            "Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks",
                            "The relevance and quality of academic and research programmes",
                            "Equitable access to and affordability of academic programmes for various sections of society",
                            "Optimization and integration of modern methods of teaching and learning",
                            "The credibility of evaluation procedures",
                            "Ensuring the adequacy, maintenance and functioning of the support structure and services",
                            "Research sharing and networking with other institutions in India and abroad.",
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

                      {/* Functions */}
                      <div className="space-y-4 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          FUNCTIONS
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {[
                            "Development and application of quality benchmarks/parameters for the various academic and administrative activities of the institution",
                            "Dissemination of information on the various quality parameters of higher education",
                            "Organization of workshops, seminars on quality related themes and promotion of quality circles",
                            "Documentation of the various programmes / activities leading to quality improvement",
                            "Acting as a nodal agency of the institution for quality-related activities",
                            "Preparation of the Annual Quality Assurance Report (AQAR) to be submitted to NAAC based on the quality parameters.",
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

                      {/* Benefits */}
                      <div className="space-y-4 pt-2">
                        <div className="space-y-1">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            BENEFITS
                          </h3>
                          <p className="font-libre text-sm font-semibold text-muted-foreground">
                            IQAC will facilitate / contribute:
                          </p>
                        </div>
                        <div className="divide-y divide-border/40 font-libre">
                          {[
                            "To a heightened level of clarity and focus in institutional functioning towards quality enhancement and facilitate internalization of the quality culture NAAC for Quality and Excellence in Higher Education",
                            "To the enhancement and integration among the various activities of the institution and institutionalize many good practices",
                            "To provide a sound basis for decision making to improve institutional functioning",
                            "To act as a change agent in the institution",
                            "To better internal communication.",
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
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: MEMBERS (Official DataGrid Table Standard)         */}
              {/* ========================================================= */}
              {activeTab === "members" && (
                <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                  <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        IQAC COMMITTEE MEMBERS
                      </h2>
                    </div>

                    {/* Year Selector */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {Object.keys(iqacMembers).map((year) => {
                        const isSelected = activeYear === year;
                        return (
                          <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-primary text-white border-primary shadow-xs"
                                : "bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-200 border-stone-300 dark:border-neutral-700 hover:text-primary"
                            }`}
                          >
                            Academic Year {year}
                          </button>
                        );
                      })}
                    </div>

                    {/* Members Table */}
                    <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                      <div className="overflow-x-auto bg-transparent">
                        <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                          <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                            <tr>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                S.No
                              </th>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-1/3">
                                Member Name
                              </th>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-1/3">
                                Designation
                              </th>
                              <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                                Composition As Per NAAC
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/40 font-libre">
                            {(iqacMembers[activeYear as keyof typeof iqacMembers] || []).map((member, idx) => (
                              <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                  {String(idx + 1).padStart(2, "0")}
                                </td>
                                <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                  {member.Name}
                                </td>
                                <td className="py-3.5 px-4 font-medium text-foreground text-xs sm:text-sm">
                                  {member.Designation}
                                </td>
                                <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground">
                                  {member.Composition}
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
              {/* TAB 3: REPORTS & MINUTES (Consolidated Single Tab: AQAR, MoM, Feedback & Action Taken)    */}
              {/* ========================================================================================= */}
              {activeTab === "reports" && (
                <div className="w-full">
                  {/* SECTION 1: AQAR Report (White / #121214 Canvas) */}
                  <section id="aqar-section" className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors scroll-mt-[130px]">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      {/* Section Jump Pills */}
                      <div className="flex flex-wrap gap-2 pb-2">
                        <button
                          onClick={() => scrollToSubSection("aqar-section")}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-200 hover:text-primary transition-all cursor-pointer"
                        >
                          AQAR Reports ({aqarReports.length})
                        </button>
                        <button
                          onClick={() => scrollToSubSection("minutes-section")}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-200 hover:text-primary transition-all cursor-pointer"
                        >
                          Meeting Minutes ({minutesList.length})
                        </button>
                        <button
                          onClick={() => scrollToSubSection("feedback-section")}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-200 hover:text-primary transition-all cursor-pointer"
                        >
                          Feedback & Action Taken ({feedbackForms.length + actionTakenReports.length})
                        </button>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          ANNUAL QUALITY ASSURANCE REPORT (AQAR)
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
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36">
                                  Academic Year
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                  Report Title
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {aqarReports.map((report, idx) => (
                                <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-mono font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">
                                    {report.year}
                                  </td>
                                  <td className="py-3.5 px-4 font-libre font-medium text-xs sm:text-sm text-foreground">
                                    {report.title}
                                  </td>
                                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                    <ActionDownloadButton href={report.url} label="Download AQAR" />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2 / #18181B) */}
                  <WaveDividerAB />

                  {/* SECTION 2: Minutes of IQAC Meetings (#F3F3F2 / #18181B Canvas) */}
                  <section id="minutes-section" className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors scroll-mt-[130px]">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          MINUTES OF IQAC MEETINGS
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
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36">
                                  Academic Year
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                  Meeting Session / Description
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                  Minutes Record
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {minutesList.map((item, idx) => (
                                <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-mono font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">
                                    {item.year}
                                  </td>
                                  <td className="py-3.5 px-4 font-libre font-medium text-xs sm:text-sm text-foreground">
                                    {item.title}
                                  </td>
                                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                    <ActionDownloadButton href={item.url} label="View Minutes" />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider 2 -> 3 (#F3F3F2 -> White) */}
                  <WaveDividerBA />

                  {/* SECTION 3: Stakeholders Feedback Forms & Action Taken Reports (White / #121214 Canvas) */}
                  <section id="feedback-section" className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors scroll-mt-[130px]">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8 sm:space-y-10">
                      {/* Part 1: Stakeholder Feedback Forms */}
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                            STAKEHOLDERS FEEDBACK FORMS
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
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-1/4">
                                    Stakeholder Group
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                    Evaluation Scope & Form Description
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                    Feedback Portal
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {feedbackForms.map((item, idx) => (
                                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                      {String(idx + 1).padStart(2, "0")}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                      {item.category}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                                      {item.desc}
                                    </td>
                                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                      <ActionDownloadButton href={item.url} label="Open Form" />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
                      </div>

                      {/* Part 2: Action Taken Reports */}
                      <div className="space-y-4 pt-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            ACTION TAKEN REPORTS
                          </h3>
                        </div>

                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                    S.No
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36">
                                    NAAC Metric
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                    Report Title & Description
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {actionTakenReports.map((report, idx) => (
                                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                      {String(idx + 1).padStart(2, "0")}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-xs sm:text-sm whitespace-nowrap">
                                      {report.metric}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre font-medium text-xs sm:text-sm text-foreground">
                                      {report.title}
                                    </td>
                                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                      <ActionDownloadButton href={report.url} label="Download PDF" />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
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
