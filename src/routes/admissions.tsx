import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { GraduationCap, FileText, Award, Phone, Mail } from "lucide-react";
import { RedirectButton } from "@/components/ui/redirect-button";
import { CourseCatalogSection } from "@/components/widgets/CourseCatalogSection";

const defaultTitle = "Admissions 2026-2027 — M.S.A.J. College of Engineering, Chennai";
const defaultDescription =
  "Official admissions portal, TNEA Counseling Code 1301, B.E. / B.Tech undergraduate and M.E. postgraduate engineering degree admissions, eligibility, and scholarships at MSAJCE.";

interface AdmissionsSearch {
  level?: string | undefined;
  view?: "list" | "table" | "grid" | undefined;
}

export const Route = createFileRoute("/admissions")({
  validateSearch: (search: Record<string, unknown>): AdmissionsSearch => {
    return {
      level: (search["level"] as string | undefined) || undefined,
      view: (search["view"] as ("list" | "table" | "grid") | undefined) || undefined,
    };
  },
  head: () => ({
    meta: [
      { title: defaultTitle },
      { name: "description", content: defaultDescription },
      { property: "og:title", content: defaultTitle },
      { property: "og:description", content: defaultDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdmissionsHubPage,
});

export function AdmissionsHubPage() {
  const { level, view } = Route.useSearch();
  const navigate = useNavigate();

  // Normalize level strings so Doctorate or Research (Ph.D) map seamlessly
  const normalizedLevel =
    level === "Doctorate" || level === "PhD"
      ? "Research (Ph.D)"
      : level === "Undergraduate" || level === "Postgraduate"
      ? level
      : null;

  const isUndergraduate = normalizedLevel === "Undergraduate";
  const isPostgraduate = normalizedLevel === "Postgraduate";
  const isDoctorate = normalizedLevel === "Research (Ph.D)";

  // Dynamic Hero Title based on selected level
  const heroTitle = isUndergraduate
    ? "Undergraduate Admissions 2026–2027"
    : isPostgraduate
    ? "Postgraduate Admissions 2026–2027"
    : isDoctorate
    ? "Doctoral Admissions 2026–2027"
    : "Admissions 2026–2027";

  const overviewTitle = isUndergraduate
    ? "Undergraduate Admission Overview"
    : isPostgraduate
    ? "Postgraduate Admission Overview"
    : isDoctorate
    ? "Doctoral Admission Overview"
    : "Admission Overview";

  const guidelinesTitle = isUndergraduate
    ? "Undergraduate Admission Guidelines"
    : isPostgraduate
    ? "Postgraduate Admission Guidelines"
    : isDoctorate
    ? "Doctoral Admission Guidelines"
    : "Admission Guidelines";

  const catalogTitle = isUndergraduate
    ? "Undergraduate Degree Catalog"
    : isPostgraduate
    ? "Postgraduate Degree Catalog"
    : isDoctorate
    ? "Doctoral Research Catalog"
    : "Degree Catalog";

  const handleLevelChange = (newLevel: string | null) => {
    navigate({
      to: "/admissions",
      search: (prev) => ({
        ...prev,
        level: newLevel || undefined,
      }),
      replace: true,
    });
  };

  const points = isUndergraduate
    ? [
        {
          num: "01",
          title: "Single-Window TNEA Counseling (Code 1301)",
          desc: "65% of approved seats are allocated through centralized online counseling administered by the Directorate of Technical Education (DoTE) Tamil Nadu, based on normalized 12th standard Physics, Chemistry, and Mathematics (PCM) cut-off scores across OC, BC, BCM, MBC/DNC, SC, SCA, and ST categories.",
        },
        {
          num: "02",
          title: "Academic & Cut-off Eligibility",
          desc: "Candidates must have passed the Tamil Nadu Higher Secondary Certificate (HSC Academic or Vocational) examination or an equivalent 10+2 board exam with minimum aggregate marks in Mathematics, Physics, and Chemistry (45% for General Category, 40% for BC/BCM/MBC/DNC/SC/SCA/ST).",
        },
        {
          num: "03",
          title: "Consortium Management Quota",
          desc: "35% of total approved seats are reserved for merit-based admissions through the Consortium of Self-Financing Professional, Arts and Science Colleges in Tamil Nadu for eligible students from Tamil Nadu and other Indian states.",
        },
        {
          num: "04",
          title: "Lateral Entry (Direct 2nd Year B.E. / B.Tech)",
          desc: "Engineering diploma holders and B.Sc. graduates with Mathematics are eligible for direct admission into the third semester (second year) via dedicated Anna University Lateral Entry counseling or management quota.",
        },
        {
          num: "05",
          title: "Institutional Scholarships & Concessions",
          desc: "Generous financial assistance available including First-Generation Graduate tuition fee concessions from the Government of Tamil Nadu, Mohamed Sathak Trust merit scholarships, Post-Matric welfare scholarships, and sports quota waivers.",
        },
      ]
    : isPostgraduate
    ? [
        {
          num: "01",
          title: "Qualifying Degree Requirement",
          desc: "Candidates must hold an AICTE-approved B.E. / B.Tech degree in the relevant engineering or technological discipline with minimum prescribed qualifying aggregate (50% for General, 45% for reserved community categories).",
        },
        {
          num: "02",
          title: "TANCET & CEETA-PG Pathway",
          desc: "Centralized admission through Tamil Nadu Common Admissions (TANCA) single-window counseling conducted by Anna University based on TANCET and CEETA-PG merit rankings.",
        },
        {
          num: "03",
          title: "GATE Qualified Candidacy",
          desc: "Valid GATE score holders are granted priority admission without written tests and are eligible for central government postgraduate stipends as per AICTE and Anna University guidelines.",
        },
        {
          num: "04",
          title: "Industry-Sponsored Quota",
          desc: "Working engineers and candidates sponsored by industrial corporations, R&D organizations, and government institutions are eligible for dedicated postgraduate seats.",
        },
        {
          num: "05",
          title: "Research & Laboratory Integration",
          desc: "M.E. scholars actively participate in sponsored research projects, publish in Scopus/WoS indexed journals, and collaborate with industrial partners on applied innovations.",
        },
      ]
    : isDoctorate
    ? [
        {
          num: "01",
          title: "Anna University Recognized Research Centers",
          desc: "Departments host accredited research facilities equipped for cutting-edge doctoral investigations, funded projects, and patent filing.",
        },
        {
          num: "02",
          title: "Eligibility & Selection Criteria",
          desc: "Master's degree in engineering or relevant technological field with Anna University written entrance examination and interview clearance.",
        },
        {
          num: "03",
          title: "Doctoral Guidance & Faculty Supervisors",
          desc: "Experienced research supervisors recognized by the Centre for Research, Anna University guide full-time and part-time research scholars.",
        },
        {
          num: "04",
          title: "Interdisciplinary Publications & Patents",
          desc: "Scholars are supported with computational clusters, specialized laboratories, and institutional sponsorship for high-impact journal indexing.",
        },
      ]
    : [
        {
          num: "01",
          title: "TNEA Single Window Code: 1301",
          desc: "Anna University centralized counseling code for all undergraduate B.E. and B.Tech engineering admissions across open and reserved quotas.",
        },
        {
          num: "02",
          title: "Accredited & Industry-Aligned Degrees",
          desc: "All undergraduate, postgraduate, and doctoral degree programmes are approved by AICTE, New Delhi and affiliated to Anna University, Chennai.",
        },
        {
          num: "03",
          title: "Direct Lateral Entry Option",
          desc: "Diploma holders in engineering and B.Sc. graduates qualify for direct second-year entry into B.E. / B.Tech programmes.",
        },
        {
          num: "04",
          title: "Merit & Social Scholarships",
          desc: "Tuition concessions available for first-graduate applicants, community welfare recipients, AICTE Pragati/Saksham awardees, and Sathak Trust merit scholars.",
        },
        {
          num: "05",
          title: "Dedicated Admission Cell Assistance",
          desc: "Experienced academic advisors provide one-on-one branch selection guidance, cut-off evaluations, and counseling documentation support.",
        },
      ];

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1 transition-colors">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Authentic Campus Photography with Docked Flush Title      */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src={isUndergraduate ? "/images/procedure_hero.jpg" : "/images/accreditations_campus.jpg"}
            alt="Admissions 2026-2027 Mohamed Sathak A.J. College of Engineering"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              {heroTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Institutional Overview & Level-Specific Key Guidelines      */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Header & Narrative Block - Clean Minimal Editorial (No AI badges/eyebrows) */}
          <div className="mb-8 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              {overviewTitle}
            </h2>

            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-6">
              {isUndergraduate
                ? "Mohamed Sathak A.J. College of Engineering (TNEA Counseling Code 1301) offers 14 industry-aligned Bachelor of Engineering (B.E.) and Bachelor of Technology (B.Tech) degree programmes approved by AICTE, New Delhi and affiliated to Anna University, Chennai. The undergraduate curriculum blends foundational sciences with emerging industrial specializations—including Artificial Intelligence & Data Science, CSE with Cyber Security, Computer Science & Business Systems (CSBS), Electronics & Advanced Communication, and core Mechanical and Civil Engineering disciplines. Admissions are conducted through centralized single-window counseling by the Government of Tamil Nadu and Consortium Management Quota."
                : isPostgraduate
                ? "The Postgraduate division at Mohamed Sathak A.J. College of Engineering offers specialized Master of Engineering (M.E.) degree courses designed to foster advanced technological research, industrial consultancy, and academic leadership. With recognized Anna University research centers, high-performance computing clusters, specialized VLSI design suites, and structural engineering laboratories, our postgraduate scholars work closely with doctoral faculty and industrial partners on real-world engineering challenges. Admissions are offered through Tamil Nadu Common Admissions (TANCA) and Consortium Management Quota pathways."
                : isDoctorate
                ? "The Doctoral Programme at Mohamed Sathak A.J. College of Engineering offers research scholars an environment for innovative inquiry, applied engineering breakthroughs, and scholarly publishing. Guided by recognized research supervisors, scholars carry out investigations across specialized engineering domains supported by high-performance computational facilities and Anna University recognized research centers."
                : "Mohamed Sathak A.J. College of Engineering (TNEA Counseling Code 1301) offers comprehensive technical education spanning undergraduate B.E. / B.Tech degree courses, postgraduate Master of Engineering (M.E.) programmes, and doctoral research (Ph.D) pathways. Admissions are conducted transparently in strict compliance with the Directorate of Technical Education (DoTE) Tamil Nadu, Anna University, and AICTE statutory mandates. Students gain access to world-class faculty, accredited laboratories, state-of-the-art incubation, and top-tier placement opportunities."}
            </p>
          </div>

          {/* Key Guidelines (Minimal Editorial Sequence) */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-5">
              {guidelinesTitle}
            </h3>

            <div className="divide-y divide-border/30 border-y border-border/30 w-full">
              {points.map((point) => (
                <div key={point.num} className="py-4 flex items-start gap-4 sm:gap-6">
                  <span className="font-oswald font-black text-primary text-base sm:text-lg shrink-0 w-7 pt-0.5 select-none">
                    {point.num}
                  </span>
                  <div className="w-full">
                    <h4 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground leading-snug">
                      {point.title}
                    </h4>
                    <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mt-1">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Pathways List (Line-based, strictly card-free) */}
          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full mb-12">
            <Link
              to="/admissions/eligibility"
              className="py-5 sm:py-6 px-1 sm:px-3 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-foreground/[0.015] transition-colors w-full group"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                    Admission Eligibility &amp; Community Cut-offs
                  </h3>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed mt-0.5">
                    Review HSC PCM cutoff percentages, vocational eligibility, Lateral Entry diploma rules, and PG degree requirements.
                  </p>
                </div>
              </div>
              <div className="shrink-0 pt-2 md:pt-0">
                <RedirectButton
                  to="/admissions/eligibility"
                  label="View Criteria"
                  waveColor="#9E2339"
                />
              </div>
            </Link>

            <Link
              to="/admissions/procedure"
              className="py-5 sm:py-6 px-1 sm:px-3 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-foreground/[0.015] transition-colors w-full group"
            >
              <div className="flex items-start gap-4">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                    3-Step Admission Procedure &amp; Forms
                  </h3>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed mt-0.5">
                    Download prospectus, submit online application form, and complete fee payment for seat reservation.
                  </p>
                </div>
              </div>
              <div className="shrink-0 pt-2 md:pt-0">
                <RedirectButton
                  to="/admissions/procedure"
                  label="View Procedure"
                  waveColor="#9E2339"
                />
              </div>
            </Link>

            <Link
              to="/admissions/scholarships"
              className="py-5 sm:py-6 px-1 sm:px-3 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-foreground/[0.015] transition-colors w-full group"
            >
              <div className="flex items-start gap-4">
                <Award className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                    Scholarship Programmes &amp; Financial Support
                  </h3>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed mt-0.5">
                    AICTE Pragati, Saksham, Merit-cum-Means, First Graduate, Post-Matric, and Mohamed Sathak Trust concessions.
                  </p>
                </div>
              </div>
              <div className="shrink-0 pt-2 md:pt-0">
                <RedirectButton
                  to="/admissions/scholarships"
                  label="View Scholarships"
                  waveColor="#9E2339"
                />
              </div>
            </Link>
          </div>

          {/* Quick Enquire Helpline Strip (Clean editorial layout, zero card boxing) */}
          <div className="pt-6 pb-2 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground mb-1">
                Admission Helpline &amp; Enquiries
              </h3>
              <p className="text-sm text-foreground font-libre font-medium flex flex-wrap items-center gap-x-6 gap-y-2 mt-1">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>+91 99400 04500 / 044-2747 0024</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>admissions@msajce.edu.in</span>
                </span>
              </p>
            </div>
            <div className="shrink-0">
              <RedirectButton
                href="https://msajce-edu.in/admission_form.php"
                label="Enquire / Apply Online"
                waveColor="#9E2339"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WAVE DIVIDER: Section A (White / #121214) -> Section B (#F3F3F2 / #18181B) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. SECTION B: Degree Programmes Catalogue (Canvas B)                      */}
      {/* ========================================================================= */}
      <section id="catalog" className="bg-[#F3F3F2] dark:bg-[#18181B] text-foreground pb-12 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 pt-6 sm:pt-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-2">
            {catalogTitle}
          </h2>
          <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-6">
            {isUndergraduate
              ? "Explore all 14 Bachelor of Engineering (B.E.) and Bachelor of Technology (B.Tech) degree courses offered across MSAJCE departments."
              : isPostgraduate
              ? "Explore advanced Master of Engineering (M.E.) postgraduate degree courses and research specializations."
              : isDoctorate
              ? "Explore doctoral research programmes recognized by Anna University across engineering disciplines."
              : "Explore all undergraduate, postgraduate, and doctoral degree programmes offered at Mohamed Sathak A.J. College of Engineering."}
          </p>
        </div>

        <CourseCatalogSection
          initialLevel={normalizedLevel || undefined}
          showHeading={false}
          onLevelChange={handleLevelChange}
          showViewToggles={true}
          defaultViewMode={view || "table"}
          showDepartment={true}
          showDescription={false}
        />
      </section>
    </main>
  );
}
