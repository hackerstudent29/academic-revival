import { createFileRoute } from "@tanstack/react-router";

const title = "Vision & Mission — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Institutional Vision, Mission Statements, and Quality Policy of Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/vision-mission")({
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
  component: VisionMissionPage,
});

// Institutional Core Pillars
const heroStats = [
  { value: "1", label: "Institutional Vision" },
  { value: "3", label: "Mission Statements" },
  { value: "1", label: "Quality Policy" },
];

const missionStatements = [
  "To impart quality technical education by transforming students into professionally competent technocrats.",
  "To nurture the students in all-round sustainable development, for career and self employability.",
  "To inculcate critical thinking, professional ethics with civic responsibilities by instilling values.",
];

export function VisionMissionPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER WITH BOXY TITLE & STATS STRIP                              */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[calc(100svh-56px)] md:min-h-[calc(100vh-64px)] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus Architecture"
            className="w-full h-full object-cover object-center brightness-[0.85] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        {/* Title Container: Fading Translucent Backdrop, Direct Title Only */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-6 sm:pb-8">
          <div className="inline-block bg-black/60 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 shadow-2xl max-w-2xl lg:max-w-3xl rounded-none border-y border-r border-white/10">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[1.1]">
              Vision and Mission
            </h1>
          </div>
        </div>

        {/* Fading Stats Strip (Smooth Gradient Fade, Maroon Figures) */}
        <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-10 pb-6 sm:pt-14 sm:pb-8">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
            <div className="flex items-center justify-between gap-4 mb-4 pb-2.5 border-b border-white/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black font-oswald uppercase tracking-wide text-primary">
                Institutional Foundations
              </h2>
              <span className="text-[11px] sm:text-xs font-oswald uppercase tracking-widest text-white/50 hidden sm:inline">
                MSAJCE Core Principles
              </span>
            </div>

            <div className="grid grid-cols-3 gap-5 sm:gap-6 lg:gap-8 divide-x divide-white/15">
              {heroStats.map((stat, idx) => (
                <div key={idx} className="first:pl-0 pl-4 sm:pl-6 space-y-1">
                  <div className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary dark:text-[#E11D48] tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/85 font-libre leading-snug pt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE CONTENT: BALANCED, CLEAN LIST STRUCTURE (NO LINES, BALANCED GAPS) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 space-y-12 sm:space-y-16">
          {/* Vision Block */}
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Vision
            </h2>
            <div className="py-3.5 sm:py-4 px-2 sm:px-3 flex items-start gap-4 hover:bg-foreground/[0.015] transition-colors">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                V
              </span>
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 font-libre leading-relaxed flex-1 pt-0.5">
                “To be an eminent institute for higher education and research through innovative teaching-learning and sustainable practices to meet the industrial and societal needs”.
              </p>
            </div>
          </div>

          {/* Mission Block */}
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Mission
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {missionStatements.map((mission, idx) => (
                <div
                  key={idx}
                  className="py-3.5 sm:py-4 px-2 sm:px-3 flex items-start gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    M{idx + 1}
                  </span>
                  <p className="text-base sm:text-lg text-foreground/90 font-libre leading-relaxed flex-1 pt-0.5">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Policy Block */}
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Quality Policy
            </h2>
            <div className="py-3.5 sm:py-4 px-2 sm:px-3 flex items-start gap-4 hover:bg-foreground/[0.015] transition-colors">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                QP
              </span>
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 font-libre leading-relaxed flex-1 pt-0.5">
                MSAJCE committed to create quality professionals through innovative teaching, research, industrial relations and nurturing human values & ethics to meet the industrial and societal needs on continual improvement basis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
