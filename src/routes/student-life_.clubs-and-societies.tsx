import { useMemo } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { studentClubs, type StudentClub } from "@/data/studentLife";

const title = "Clubs & Cultural Societies | Student Life | MSAJCE";
const description =
  "Explore official student clubs at Mohamed Sathak A.J. College of Engineering: Sports Club, Fine Arts Club, Science Club, Tamil Mandram, Coding Club, Robotic Club, Energy & Eco Club, and Photography Club.";

const clubNavTabs: SubNavTab[] = [
  { id: "sports-club", label: "Sports Club" },
  { id: "fine-arts-club", label: "Fine Arts Club" },
  { id: "science-club", label: "Science Club" },
  { id: "tamil-mandram", label: "Tamil Mandram" },
  { id: "coding-club", label: "Coding Club" },
  { id: "robotic-club", label: "Robotic Club" },
  { id: "energy-eco-club", label: "Energy & Eco Club" },
  { id: "photography-club", label: "Photography Club" },
];

export const Route = createFileRoute("/student-life_/clubs-and-societies")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      club: typeof search.club === "string" ? search.club : "sports-club",
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
  component: ClubsAndSocietiesPage,
});

function ClubsAndSocietiesPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();

  // Validate active club from URL query or default to sports-club
  const activeClubId = useMemo(() => {
    const valid = clubNavTabs.some((t) => t.id === search.club);
    return valid ? search.club : "sports-club";
  }, [search.club]);

  const activeClubIndex = useMemo(() => {
    const idx = studentClubs.findIndex((c) => c.id === activeClubId);
    return idx >= 0 ? idx : 0;
  }, [activeClubId]);

  const activeClub: StudentClub = studentClubs[activeClubIndex] || studentClubs[0];

  const prevClub = studentClubs[(activeClubIndex - 1 + studentClubs.length) % studentClubs.length];
  const nextClub = studentClubs[(activeClubIndex + 1) % studentClubs.length];

  const handleSelectClub = (clubId: string) => {
    navigate({
      search: { club: clubId },
      replace: true,
    });

    const el = document.getElementById("club-focus-container");
    if (el) {
      const headerOffset = typeof window !== "undefined" && window.innerWidth < 768 ? 115 : 125;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      if (window.pageYOffset > elementTop + 80) {
        window.scrollTo({
          top: Math.max(0, elementTop),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* SECONDARY SUB-NAV HEADER (8 Official Student Clubs Navigation) */}
      <SecondarySubNav
        title="CLUBS & SOCIETIES"
        tabs={clubNavTabs}
        activeTab={activeClubId}
        onSelectTab={handleSelectClub}
        onTitleClick={() => handleSelectClub("sports-club")}
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Vision & Mission Style Minimal Flush Docked Title         */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80"
            alt="Clubs and Cultural Societies at Mohamed Sathak A.J. College of Engineering"
            className="w-full h-full object-cover object-center brightness-[0.70] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Clubs &amp; Societies
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A (White / #121214): STRICTLY SINGLE COLUMN ACTIVE CLUB        */}
      {/* ========================================================================= */}
      <section id="club-focus-container" className="bg-white dark:bg-[#121214] py-10 sm:py-14 px-4 sm:px-6 md:px-8 transition-colors">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeClub.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Section Title — NO text or subtitle below */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                  {activeClub.name}
                </h2>
              </div>

              {/* Metadata Badges Row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold font-oswald uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                  {activeClub.badge || activeClub.category}
                </span>
                <span className="text-xs font-bold font-oswald text-muted-foreground uppercase">
                  {activeClub.membersCount}
                </span>
                <span className="text-xs font-mono font-bold text-muted-foreground ml-auto">
                  Club {String(activeClubIndex + 1).padStart(2, "0")} of 08
                </span>
              </div>

              {/* Authentic Club Narrative */}
              <p className="text-sm sm:text-base font-libre font-medium text-foreground/90 leading-relaxed">
                {activeClub.description}
              </p>

              {/* Single-Column Vision */}
              {activeClub.vision && (
                <div className="flex items-start gap-4 pt-1">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs mt-0.5 border border-foreground/20 shadow-2xs">
                    V
                  </span>
                  <div className="space-y-1 flex-1">
                    <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                      Vision
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/85 font-libre font-medium leading-relaxed">
                      “{activeClub.vision}”
                    </p>
                  </div>
                </div>
              )}

              {/* Single-Column Motto */}
              {activeClub.motto && (
                <div className="flex items-start gap-4 pt-1">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs mt-0.5 border border-foreground/20 shadow-2xs">
                    M
                  </span>
                  <div className="space-y-1 flex-1">
                    <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                      Motto
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/85 font-libre font-medium leading-relaxed">
                      “{activeClub.motto}”
                    </p>
                  </div>
                </div>
              )}

              {/* Single-Column Core Objectives */}
              {activeClub.objectives && activeClub.objectives.length > 0 && (
                <div className="space-y-3.5 pt-2">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                    Objectives
                  </h3>
                  <div className="space-y-3">
                    {activeClub.objectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs mt-0.5 border border-foreground/20 shadow-2xs">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm sm:text-base text-foreground/85 font-libre font-medium leading-relaxed flex-1 pt-1">
                          {obj}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Single-Column Special Tamil Objectives for Tamil Mandram */}
              {activeClub.tamilObjectives && activeClub.tamilObjectives.length > 0 && (
                <div className="space-y-3.5 pt-2">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                    முக்கிய நோக்கங்கள்
                  </h3>
                  <div className="space-y-3">
                    {activeClub.tamilObjectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs mt-0.5 border border-foreground/20 shadow-2xs">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm sm:text-base text-foreground/85 font-libre font-medium leading-relaxed flex-1 pt-1">
                          {obj}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Single-Column Coding Club Practices */}
              {activeClub.codingPractices && activeClub.codingPractices.length > 0 && (
                <div className="space-y-3.5 pt-2">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                    Core Practices
                  </h3>
                  <div className="space-y-3">
                    {activeClub.codingPractices.map((practice, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs mt-0.5 border border-foreground/20 shadow-2xs">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm sm:text-base text-foreground/85 font-libre font-medium leading-relaxed flex-1 pt-1">
                          {practice}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Single-Column Science Club Sections */}
              {activeClub.id === "science-club" && activeClub.scienceSections && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                    Specialized Sections
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeClub.scienceSections.map((sec, i) => (
                      <span key={i} className="text-xs font-bold font-oswald uppercase bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Single-Column Fine Arts Leadership */}
              {activeClub.id === "fine-arts-club" && (activeClub.staffCoordinator || activeClub.studentPresident) && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                    Leadership
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm font-libre text-foreground/85">
                    {activeClub.staffCoordinator && (
                      <p><span className="font-bold font-oswald uppercase text-primary mr-2">Staff Coordinator:</span>{activeClub.staffCoordinator}</p>
                    )}
                    {activeClub.studentPresident && (
                      <p><span className="font-bold font-oswald uppercase text-primary mr-2">President:</span>{activeClub.studentPresident}</p>
                    )}
                    {activeClub.studentVicePresident && (
                      <p><span className="font-bold font-oswald uppercase text-primary mr-2">Vice-President:</span>{activeClub.studentVicePresident}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Single-Column Tamil Mandram Events */}
              {activeClub.id === "tamil-mandram" && activeClub.tamilEvents && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                    பாரம்பரிய நிகழ்வுகள்
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeClub.tamilEvents.map((evt, i) => (
                      <span key={i} className="text-xs font-libre font-medium bg-foreground/5 text-foreground/90 px-3 py-1 rounded-tl-sm rounded-br-sm rounded-tr-xs rounded-bl-xs">
                        {evt}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Single-Column Photography Pillars */}
              {activeClub.id === "photography-club" && activeClub.photographyPillars && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                    Pillars of Visual Art
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeClub.photographyPillars.map((p, i) => (
                      <span key={i} className="text-xs font-libre font-medium bg-foreground/5 text-foreground/90 px-3 py-1 rounded-tl-sm rounded-br-sm rounded-tr-xs rounded-bl-xs">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Single-Column Annual Activities List */}
              {activeClub.activities && activeClub.activities.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                    Annual Activities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeClub.activities.map((act, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-libre font-medium text-foreground/80 bg-foreground/5 px-3 py-1.5 rounded-tl-sm rounded-br-sm rounded-tr-xs rounded-bl-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sequential Club Navigation Controls */}
              <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleSelectClub(prevClub.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold font-oswald uppercase tracking-wider text-foreground hover:text-primary border border-border hover:border-primary/50 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{prevClub.name}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {studentClubs.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleSelectClub(c.id)}
                      title={c.name}
                      className={`h-2 transition-all rounded-xs cursor-pointer ${
                        c.id === activeClub.id
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted hover:bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectClub(nextClub.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold font-oswald uppercase tracking-wider text-foreground hover:text-primary border border-border hover:border-primary/50 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer"
                >
                  <span>{nextClub.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* ORGANIC WAVE DIVIDER A -> B                                               */}
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
      {/* 3. SECTION B (#F3F3F2 / #18181B): STRICTLY SINGLE COLUMN DIRECTORY        */}
      {/* ========================================================================= */}
      <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 px-4 sm:px-6 md:px-8 transition-colors">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Title — NO subtitle text below */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              All 8 Official Student Clubs
            </h2>
          </div>

          {/* Clean Editorial Open Directory List (Single Column) */}
          <div className="space-y-2 bg-transparent">
            {studentClubs.map((club, idx) => {
              const isActive = club.id === activeClub.id;
              return (
                <div
                  key={club.id}
                  onClick={() => handleSelectClub(club.id)}
                  className={`py-4 px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors cursor-pointer rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs ${
                    isActive
                      ? "bg-primary/10 border-l-4 border-primary pl-4 sm:pl-6"
                      : "hover:bg-foreground/[0.04]"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="text-xs font-mono font-bold text-muted-foreground w-6 shrink-0 mt-0.5 sm:mt-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-black font-oswald uppercase text-foreground hover:text-primary transition-colors">
                          {club.name}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-bold font-oswald uppercase bg-primary text-white px-2 py-0.5 rounded-xs">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-libre font-medium text-foreground/70 line-clamp-1 mt-0.5">
                        {club.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-9 sm:pl-0">
                    <span className="text-[11px] font-bold font-oswald uppercase text-primary px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      {club.badge || club.category}
                    </span>
                    <span className="text-xs font-bold font-oswald uppercase text-primary flex items-center gap-1">
                      {isActive ? "Viewing" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ORGANIC WAVE DIVIDER B -> A                                               */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. SECTION A (White / #121214): PROFESSIONAL SOCIETIES GATEWAY            */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 px-4 sm:px-6 md:px-8 transition-colors">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section Title — NO subtitle text below */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Professional Societies
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-l-2 border-primary pl-4 sm:pl-6 py-2">
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed max-w-2xl">
              MSAJCE hosts 4 premier technical chapters: CSI, IETE, SAE, and ISHRAE, providing student memberships, international certifications, and national competition platforms.
            </p>

            <button
              type="button"
              onClick={() => navigate({ to: "/student-life/professional-societies" })}
              className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-6 py-3 font-bold font-oswald text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer self-start sm:self-auto"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Explore Professional Chapters
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}


