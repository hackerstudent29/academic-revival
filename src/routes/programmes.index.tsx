import { useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { CourseCatalogSection } from '@/components/widgets/CourseCatalogSection';

const defaultTitle = "Academic Departments — MSAJCE";
const defaultDescription =
  "Explore all undergraduate (B.E./B.Tech), postgraduate (M.E.), and doctoral research (Ph.D) engineering departments offered at MSAJCE.";

interface ProgrammesSearch {
  level?: string | undefined;
  view?: 'list' | 'table' | 'grid' | undefined;
}

export const Route = createFileRoute('/programmes/')({
  validateSearch: (search: Record<string, unknown>): ProgrammesSearch => {
    return {
      level: search['level'] as string | undefined,
      view: search['view'] as ('list' | 'table' | 'grid') | undefined,
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
  component: ProgrammesIndex,
});

function ProgrammesIndex() {
  const { level, view } = Route.useSearch();
  const navigate = useNavigate();

  // Normalize level strings so Doctorate or Research (Ph.D) map seamlessly
  const normalizedLevel = (level === "Doctorate" || level === "PhD") ? "Research (Ph.D)" : level;

  // Dynamic Hero Title based on the active level
  const heroTitle = 
    normalizedLevel === "Undergraduate"
      ? "Undergraduate Departments"
      : normalizedLevel === "Postgraduate"
      ? "Postgraduate Departments"
      : normalizedLevel === "Research (Ph.D)"
      ? "Doctoral Studies"
      : "Academic Departments";

  useEffect(() => {
    document.title = `${heroTitle} — MSAJCE`;
  }, [heroTitle]);

  const handleLevelChange = (newLevel: string | null) => {
    navigate({
      to: '/programmes',
      search: (prev) => ({
        ...prev,
        level: newLevel || undefined,
      }),
      replace: true,
    });
  };

  return (
    <main className="bg-white dark:bg-[#121214] min-h-screen pt-0 md:pt-1 text-foreground font-libre antialiased selection:bg-primary selection:text-white transition-colors">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Campus Photography with Dynamic Docked Flush Title        */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Authentic Campus Background Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/accreditations_campus.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus Architecture"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and contrast */}
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
      {/* 2. WAVE DIVIDER: Section A (White / #121214) -> Section B (#F3F3F2 / #18181B) */}
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
      {/* 3. SECTION B: Canvas B (#F3F3F2 / #18181B) - Catalog List View            */}
      {/* ========================================================================= */}
      <section id="catalog" className="bg-[#F3F3F2] dark:bg-[#18181B] text-foreground pb-12 transition-colors">
        <CourseCatalogSection 
          initialLevel={normalizedLevel} 
          showHeading={false}
          onLevelChange={handleLevelChange}
          showViewToggles={true} 
          defaultViewMode={view || "list"}
          showDepartment={false}
          showDescription={true}
        />
      </section>
    </main>
  );
}
