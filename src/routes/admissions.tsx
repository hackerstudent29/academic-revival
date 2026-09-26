import { useState, useMemo, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, GraduationCap, FileText, Award, ArrowUpRight, Phone, Mail } from "lucide-react";
import { allCourses } from "@/lib/courseData";

const title = "Admissions 2026-2027 — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official admissions portal, TNEA Counseling Code 3460, eligibility criteria, application procedure, scholarships, and degree course catalogue at MSAJCE.";

export const Route = createFileRoute("/admissions")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      level: (search["level"] as string | undefined) || undefined,
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
  component: AdmissionsHubPage,
});

export function AdmissionsHubPage() {
  const { level } = Route.useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(level || null);

  useEffect(() => {
    if (level) {
      setSelectedLevel(level);
      const el = document.getElementById("programmes-catalog");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [level]);

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchQuery =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLevel = selectedLevel ? course.level === selectedLevel : true;
      return matchQuery && matchLevel;
    });
  }, [searchQuery, selectedLevel]);

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Admissions 2026-2027 MSAJCE"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Admissions 2026–2027
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Institutional Overview & Pathways Action Hub               */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Overview */}
          <div className="mb-10 w-full">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-oswald font-bold text-xs uppercase tracking-wider mb-3">
              TNEA Counseling Code: 3460
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Institutional Overview &amp; Admission Pathways
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-4">
              Mohamed Sathak A.J. College of Engineering (TNEA Counseling Code <strong>3460</strong>) offers premier B.E. / B.Tech degree programmes, Postgraduate M.E., MBA, and MCA courses. Admissions are offered via Tamil Nadu State single-window counseling and Consortium Management Quota seats. Explore key admission pathways, check community cutoffs, download prospectuses, or submit an enquiry below.
            </p>
          </div>

          {/* Editorial Pathways List (Line-based, strictly line-free of cards) */}
          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full mb-12">
            <Link
              to="/admissions/eligibility"
              className="py-5 sm:py-6 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-foreground/[0.015] transition-colors w-full group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                    Admission Eligibility &amp; Community Cut-offs
                  </h3>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    Review HSC PCM cutoff percentages, vocational eligibility, Lateral Entry diploma rules, and PG degree requirements.
                  </p>
                </div>
              </div>
              <div className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-oswald font-bold text-xs uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs group-hover:bg-primary group-hover:text-white transition-colors">
                <span>View Criteria</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/admissions/procedure"
              className="py-5 sm:py-6 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-foreground/[0.015] transition-colors w-full group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                    3-Step Admission Procedure &amp; Forms
                  </h3>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    Download prospectus, submit online application form, and complete fee payment for seat reservation.
                  </p>
                </div>
              </div>
              <div className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-oswald font-bold text-xs uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs group-hover:bg-primary group-hover:text-white transition-colors">
                <span>View Procedure</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/admissions/scholarships"
              className="py-5 sm:py-6 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-foreground/[0.015] transition-colors w-full group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                    Scholarship Programmes &amp; Financial Support
                  </h3>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    AICTE Pragati, Saksham, Merit-cum-Means, First Graduate, Post-Matric, and Mohamed Sathak Trust concessions.
                  </p>
                </div>
              </div>
              <div className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-oswald font-bold text-xs uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs group-hover:bg-primary group-hover:text-white transition-colors">
                <span>View Scholarships</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Quick Enquire Contact Strip */}
          <div className="p-6 border border-border/80 bg-[#F3F3F2] dark:bg-[#18181B] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold font-oswald uppercase text-foreground mb-1">
                Admission Helpline &amp; Enquiries
              </h3>
              <p className="text-sm text-foreground font-libre font-medium">
                Call +91 99400 04500 / 044-2747 0024 or email admission@msajce-edu.in
              </p>
            </div>
            <a
              href="https://msajce-edu.in/admission_form.php"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-oswald font-bold text-sm uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors"
            >
              <span>Enquire / Apply Online</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION B: Degree Programmes Catalogue                                 */}
      {/* ========================================================================= */}
      <section id="programmes-catalog" className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-2">
              Degree Programmes Catalogue
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed max-w-3xl mb-6">
              Filter undergraduate and postgraduate engineering, management, and computer application degrees offered at Mohamed Sathak A.J. College of Engineering.
            </p>

            {/* Search Input & Filters Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                <input
                  type="text"
                  placeholder="Search course or department (e.g. CSE, AI & DS, ECE, Civil, MBA)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-[#121214] border border-border/80 pl-10 pr-4 py-2.5 text-xs sm:text-sm font-libre text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <button
                  onClick={() => setSelectedLevel(null)}
                  className={`px-3 py-2 border text-xs font-oswald font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs ${
                    selectedLevel === null
                      ? "bg-primary text-white border-primary"
                      : "bg-white dark:bg-[#121214] border-border/80 text-foreground hover:border-primary"
                  }`}
                >
                  All Degrees
                </button>
                <button
                  onClick={() => setSelectedLevel("Undergraduate")}
                  className={`px-3 py-2 border text-xs font-oswald font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs ${
                    selectedLevel === "Undergraduate"
                      ? "bg-primary text-white border-primary"
                      : "bg-white dark:bg-[#121214] border-border/80 text-foreground hover:border-primary"
                  }`}
                >
                  Undergraduate
                </button>
                <button
                  onClick={() => setSelectedLevel("Postgraduate")}
                  className={`px-3 py-2 border text-xs font-oswald font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs ${
                    selectedLevel === "Postgraduate"
                      ? "bg-primary text-white border-primary"
                      : "bg-white dark:bg-[#121214] border-border/80 text-foreground hover:border-primary"
                  }`}
                >
                  Postgraduate
                </button>
              </div>
            </div>
          </div>

          {/* Courses List */}
          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full bg-white dark:bg-[#121214]">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div
                  key={course.slug}
                  className="py-4 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                      {course.level} • {course.department}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground">
                      {course.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 font-libre line-clamp-1 mt-0.5">
                      {course.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to="/programmes/$courseId"
                      params={{ courseId: course.slug }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-foreground text-background font-oswald font-bold text-xs uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary hover:text-white transition-colors"
                    >
                      <span>Course Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-sm font-libre text-foreground/70">
                No matching programmes found for "{searchQuery}".
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
