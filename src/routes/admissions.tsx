import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Briefcase, Search, ArrowRight } from "lucide-react";
import { CourseCatalogSection } from "@/components/widgets/CourseCatalogSection";

const title = "Admissions 2026-2027 — Apply to MSAJCE";
const description =
  "Eligibility, application steps, documents and scholarships for undergraduate and postgraduate engineering admissions at MSAJCE.";

export const Route = createFileRoute("/admissions")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      level: search['level'] as string | undefined,
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
  component: Admissions,
});

const admissionLinks = [
  {
    title: "Admission Eligibility",
    to: "/admissions/eligibility",
    icon: GraduationCap,
  },
  {
    title: "Admission Procedure",
    to: "/admissions/procedure",
    icon: Briefcase,
  },
  {
    title: "Scholarship Programmes",
    to: "/admissions/scholarships",
    icon: Search,
  },
];

function Admissions() {
  const { level } = Route.useSearch();

  return (
    <main className="bg-white dark:bg-[#121214] min-h-screen pt-0 md:pt-1 text-foreground font-libre antialiased selection:bg-primary selection:text-white transition-colors">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Campus Architecture with Docked Flush Title               */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Authentic Campus Background Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus Architecture"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Admissions
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Signature Boxy Asymmetrical Ocean Wave Action Strip         */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 md:py-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {admissionLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group relative overflow-hidden flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300/80 dark:border-neutral-700/80 bg-stone-100/90 dark:bg-[#18181B] hover:border-primary/60 transition-all duration-300 shadow-xs select-none cursor-pointer"
                >
                  {/* Liquid Ocean Wave Fill Effect */}
                  <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                    <span className="absolute inset-x-0 top-0 h-[140%] bg-primary translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      {/* Ocean Wave Crest SVG (Primary) */}
                      <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                        <svg className="w-full h-full fill-primary animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                      </span>
                      {/* Secondary Depth Layer Wave */}
                      <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                        <svg className="w-full h-full fill-primary animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                        </svg>
                      </span>
                    </span>
                  </span>

                  {/* Button Content */}
                  <div className="relative z-10 flex items-center gap-3.5 min-w-0">
                    <span className="w-10 h-10 rounded-tl-lg rounded-br-lg bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-sm sm:text-base font-black font-oswald uppercase tracking-wide text-foreground group-hover:text-white transition-colors duration-300 truncate">
                      {item.title}
                    </span>
                  </div>

                  <ArrowRight className="relative z-10 w-5 h-5 text-primary group-hover:text-white transition-all duration-300 group-hover:translate-x-1.5 shrink-0 ml-3" />
                </Link>
              );
            })}
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
          className="w-full h-6 sm:h-10 md:h-14 lg:h-16 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. SECTION B: Canvas B (#F3F3F2 / #18181B) - Catalog (No Dept, No Blurb) */}
      {/* ========================================================================= */}
      <section id="programmes" className="bg-[#F3F3F2] dark:bg-[#18181B] text-foreground pb-12 transition-colors">
        <CourseCatalogSection 
          initialLevel={level} 
          titleOverride="Programmes & Specializations" 
          showViewToggles={true} 
          defaultViewMode="table"
          showDepartment={false}
          showDescription={false}
        />
      </section>
    </main>
  );
}
