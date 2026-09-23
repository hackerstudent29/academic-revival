import { useMemo } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Target,
  Users,
  Award,
  CheckCircle2,
  Activity,
  Dumbbell,
  Palette,
  UserCheck,
  Star,
  Microscope,
  BookOpen,
  Code,
  Terminal,
  Bot,
  Leaf,
  Zap,
  Camera,
  ArrowRight,
  ArrowLeft,
  Calendar,
} from "lucide-react";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { studentClubs, type StudentClub } from "@/data/studentLife";

const title = "Clubs & Cultural Societies | Student Life | MSAJCE";
const description =
  "Explore official student clubs at Mohamed Sathak A.J. College of Engineering: Sports Club, Fine Arts Club (ENVISTA), Science Club, Tamil Mandram, Coding Club, Robotic Club, Energy & Eco Club, and Photography Club.";

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

      {/* Page Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9E2339] via-[#861E30] to-[#671422] text-white pt-8 pb-12 sm:pt-10 sm:pb-14 px-4 sm:px-6 md:px-12 border-b border-primary/20">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-bold font-oswald uppercase tracking-wider text-white border border-white/20 mb-3">
              Student Forums &amp; Cultural Life
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-oswald uppercase tracking-tight leading-[1.05]">
              Clubs &amp; Cultural Societies
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 font-sans leading-relaxed">
              Student-led forums driving athletic excellence, fine arts, scientific research, Tamil literary heritage, robotics, green sustainability, and visual photojournalism at MSAJCE.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/15">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black font-oswald text-white">8 Clubs</span>
              <span className="text-xs font-sans text-white/80">Official Student Forums</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black font-oswald text-white">2,400+</span>
              <span className="text-xs font-sans text-white/80">Active Student Members</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black font-oswald text-white">50+ Fests</span>
              <span className="text-xs font-sans text-white/80">Annual Campus Events</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black font-oswald text-white">TAKSHASHILA</span>
              <span className="text-xs font-sans text-white/80">Annual Cultural Gala</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A: FOCUSED MINIMAL ACTIVE CLUB PROFILE */}
      <section id="club-focus-container" className="bg-white dark:bg-[#121214] py-8 sm:py-12 transition-colors">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeClub.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Club Identity Header */}
              <div className="border-b border-border/60 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-oswald uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      {activeClub.badge || activeClub.category}
                    </span>
                    <span className="text-xs font-bold font-oswald text-muted-foreground uppercase">
                      {activeClub.membersCount}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground">
                    Club {String(activeClubIndex + 1).padStart(2, "0")} of 08
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald uppercase tracking-tight text-foreground">
                  {activeClub.name}
                </h2>

                <p className="text-sm sm:text-base font-bold font-oswald text-primary uppercase tracking-wide mt-1">
                  "{activeClub.tagline}"
                </p>

                {/* Motto & Vision Accent Quote */}
                {(activeClub.motto || activeClub.vision) && (
                  <div className="mt-4 pl-4 border-l-2 border-primary py-2 bg-primary/[0.03] dark:bg-primary/[0.06] rounded-r-xs max-w-4xl">
                    {activeClub.motto && (
                      <div className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-primary">
                        Motto: "{activeClub.motto}"
                      </div>
                    )}
                    {activeClub.vision && (
                      <p className="text-xs sm:text-sm font-sans italic text-foreground/80 mt-1 leading-relaxed">
                        "{activeClub.vision}"
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Clean 2-Column Minimal Editorial Breakdown (Balanced with Perfectly Sized Media) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-2">
                
                {/* Left Column: About & Core Objectives & Annual Highlights */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold font-oswald uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      About The Forum
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-muted-foreground leading-relaxed">
                      {activeClub.description}
                    </p>
                  </div>

                  {/* Mobile-Only Compact Showcase Image (renders cleanly right after About on mobile) */}
                  {activeClub.images && activeClub.images[0] && (
                    <div className="block lg:hidden">
                      <div className="relative aspect-[16/10] max-h-[220px] w-full rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border/80 bg-muted shadow-xs">
                        <img
                          key={`mobile-${activeClub.id}`}
                          src={activeClub.images[0]}
                          alt={`${activeClub.name} showcase`}
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 pointer-events-none select-none">
                          <span className="text-[11px] font-bold font-oswald uppercase tracking-wider text-white block">
                            {activeClub.name} · Official Student Forum
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Core Objectives List */}
                  {activeClub.objectives && activeClub.objectives.length > 0 && (
                    <div className="pt-2">
                      <h3 className="text-sm font-black font-oswald uppercase tracking-wide text-foreground mb-3 flex items-center gap-1.5">
                        <Target className="w-4 h-4 text-primary" />
                        Core Objectives &amp; Scope
                      </h3>
                      <div className="divide-y divide-border/60 border-y border-border/60">
                        {activeClub.objectives.map((obj, i) => (
                          <div key={i} className="py-2.5 flex items-start gap-3">
                            <span className="text-xs font-black font-oswald text-foreground bg-foreground/10 px-2 py-0.5 rounded-xs shrink-0 mt-0.5">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed">
                              {obj}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special Tamil Objectives for Tamil Mandram */}
                  {activeClub.tamilObjectives && (
                    <div className="pt-2">
                      <h3 className="text-sm font-black font-oswald uppercase tracking-wide text-foreground mb-3 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-primary" />
                        தமிழ் மன்றத்தின் முக்கிய நோக்கங்கள்
                      </h3>
                      <div className="divide-y divide-border/60 border-y border-border/60">
                        {activeClub.tamilObjectives.map((obj, i) => (
                          <div key={i} className="py-2.5 flex items-start gap-3">
                            <span className="text-xs font-black font-oswald text-foreground bg-foreground/10 px-2 py-0.5 rounded-xs shrink-0 mt-0.5">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed">
                              {obj}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Annual Calendar Highlights */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      Annual Calendar Highlights
                    </h4>
                    <div className="space-y-1.5">
                      {activeClub.activities.map((act, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Desktop Compact Stock Image + Specialized Disciplines */}
                <div className="lg:col-span-5 space-y-6 lg:pl-8 lg:border-l lg:border-border/60">
                  
                  {/* Desktop Perfectly Proportioned Compact Stock Image */}
                  {activeClub.images && activeClub.images[0] && (
                    <div className="hidden lg:block">
                      <div className="relative aspect-[16/10] max-h-[240px] w-full rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border/80 bg-muted shadow-xs">
                        <img
                          key={`desktop-${activeClub.id}`}
                          src={activeClub.images[0]}
                          alt={`${activeClub.name} showcase`}
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 pointer-events-none select-none">
                          <span className="text-[11px] font-bold font-oswald uppercase tracking-wider text-white block">
                            {activeClub.name} · Official Student Forum
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CLUB-SPECIFIC COMPONENT: SPORTS CLUB */}
                  {activeClub.id === "sports-club" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Dumbbell className="w-3.5 h-3.5" />
                          Outdoor Sports Arenas (8 Disciplines)
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeClub.outdoorGames?.map((game, i) => (
                            <span key={i} className="text-xs font-bold font-oswald uppercase bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                              {game}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/60">
                        <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-500" />
                          Indoor Sports Tournaments (3 Arenas)
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeClub.indoorGames?.map((game, i) => (
                            <span key={i} className="text-xs font-bold font-oswald uppercase bg-foreground/5 text-foreground border border-foreground/15 px-2.5 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                              {game}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CLUB-SPECIFIC COMPONENT: FINE ARTS CLUB */}
                  {activeClub.id === "fine-arts-club" && (
                    <div className="space-y-5">
                      {activeClub.envistaNote && (
                        <div className="p-3.5 border-l-2 border-primary bg-primary/5 rounded-r-xs">
                          <span className="text-xs font-black font-oswald uppercase text-primary block">
                            ENVISTA CLUB Umbrella Initiative:
                          </span>
                          <p className="text-xs font-sans text-muted-foreground mt-1 leading-relaxed">
                            {activeClub.envistaNote}
                          </p>
                        </div>
                      )}

                      <div className="space-y-3">
                        <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-primary" />
                          Leadership &amp; Faculty Coordination
                        </h4>
                        
                        <div className="text-xs font-sans py-2 border-b border-border/60">
                          <span className="text-[11px] font-bold font-oswald uppercase text-primary block">Staff Coordinator:</span>
                          <span className="font-semibold text-foreground">{activeClub.staffCoordinator}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 py-1">
                          <div className="text-xs font-sans">
                            <span className="text-[11px] font-bold font-oswald uppercase text-primary block">President:</span>
                            <span className="font-semibold text-foreground">{activeClub.studentPresident}</span>
                          </div>
                          <div className="text-xs font-sans">
                            <span className="text-[11px] font-bold font-oswald uppercase text-primary block">Vice-President:</span>
                            <span className="font-semibold text-foreground">{activeClub.studentVicePresident}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CLUB-SPECIFIC COMPONENT: SCIENCE CLUB */}
                  {activeClub.id === "science-club" && (
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Microscope className="w-3.5 h-3.5" />
                          Three Specialized Sections
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeClub.scienceSections?.map((sec, i) => (
                            <span key={i} className="text-xs font-bold font-oswald uppercase bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                              {sec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {activeClub.scienceHandsOn && (
                        <div className="pt-4 border-t border-border/60">
                          <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Star className="w-3.5 h-3.5 text-amber-500" />
                            Hands-on Experiments &amp; Projects
                          </h4>
                          <div className="space-y-1.5">
                            {activeClub.scienceHandsOn.map((item, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CLUB-SPECIFIC COMPONENT: TAMIL MANDRAM */}
                  {activeClub.id === "tamil-mandram" && (
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-2.5 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          பாரம்பரிய தமிழ் நிகழ்வுகள் &amp; போட்டிகள்
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {activeClub.tamilEvents?.map((event, i) => (
                            <div key={i} className="p-2 border border-border/60 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-sans font-semibold text-foreground/90 bg-muted/30">
                              {event}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CLUB-SPECIFIC COMPONENT: CODING CLUB */}
                  {activeClub.id === "coding-club" && (
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5" />
                          Core Practices &amp; Weekly Routines
                        </h4>
                        <div className="space-y-2">
                          {activeClub.codingPractices?.map((practice, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs font-sans text-muted-foreground">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{practice}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {activeClub.codingAims && (
                        <div className="pt-4 border-t border-border/60">
                          <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-primary" />
                            Strategic Goals
                          </h4>
                          <div className="space-y-1.5">
                            {activeClub.codingAims.map((aim, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0 mt-1.5" />
                                <span>{aim}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CLUB-SPECIFIC COMPONENT: ROBOTIC CLUB */}
                  {activeClub.id === "robotic-club" && (
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Bot className="w-3.5 h-3.5" />
                          Club Activities &amp; Training
                        </h4>
                        <div className="space-y-2">
                          {activeClub.roboticsActivities?.map((act, i) => (
                            <div key={i} className="p-2.5 border border-border/60 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-sans font-semibold text-foreground/90 bg-muted/30 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-xs bg-primary shrink-0" />
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CLUB-SPECIFIC COMPONENT: ENERGY & ECO CLUB */}
                  {activeClub.id === "energy-eco-club" && (
                    <div className="space-y-4">
                      {activeClub.energyClubDetails && (
                        <div className="p-3 border-l-2 border-primary bg-primary/5 rounded-r-xs">
                          <span className="text-xs font-black font-oswald uppercase text-primary block flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5" />
                            Energy Conservation Mission
                          </span>
                          <p className="text-xs font-sans text-muted-foreground mt-1 leading-relaxed">
                            {activeClub.energyClubDetails}
                          </p>
                        </div>
                      )}

                      {activeClub.ecoClubDetails && (
                        <div className="p-3 border-l-2 border-emerald-600 bg-emerald-500/5 rounded-r-xs">
                          <span className="text-xs font-black font-oswald uppercase text-emerald-600 dark:text-emerald-400 block flex items-center gap-1">
                            <Leaf className="w-3.5 h-3.5" />
                            Eco Club Environmental Mandate
                          </span>
                          <p className="text-xs font-sans text-muted-foreground mt-1 leading-relaxed">
                            {activeClub.ecoClubDetails}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CLUB-SPECIFIC COMPONENT: PHOTOGRAPHY CLUB */}
                  {activeClub.id === "photography-club" && (
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Camera className="w-3.5 h-3.5" />
                          Four Pillars of Visual Art
                        </h4>
                        <div className="space-y-2">
                          {activeClub.photographyPillars?.map((pillar, i) => (
                            <div key={i} className="p-2.5 border border-border/60 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-sans font-semibold text-foreground/90 bg-muted/30 flex items-center gap-2">
                              <span className="text-xs font-bold font-oswald text-primary">0{i + 1}.</span>
                              <span>{pillar}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Sequential Club Navigation Controls */}
              <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleSelectClub(prevClub.id)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold font-oswald uppercase tracking-wider text-foreground hover:text-primary border border-border hover:border-primary/50 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous: {prevClub.name}</span>
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
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold font-oswald uppercase tracking-wider text-foreground hover:text-primary border border-border hover:border-primary/50 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer"
                >
                  <span>Next: {nextClub.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ORGANIC WAVE DIVIDER A -> B */}
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

      {/* SECTION B: QUICK DIRECTORY & ALL 8 CLUBS COMPARISON */}
      <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 px-4 sm:px-6 md:px-12 transition-colors">
        <div className="max-w-[1440px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div>
              <span className="text-xs font-bold font-oswald uppercase tracking-wider text-primary">
                At A Glance Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground mt-0.5">
                All 8 Official Student Clubs
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-sans text-muted-foreground max-w-md">
              Click any forum below to directly switch the focus and review its specific activities and mandate.
            </p>
          </div>

          {/* Clean Editorial Table / Open Directory List (Strictly NO Cards) */}
          <div className="divide-y divide-border/60 border-y border-border/60 bg-transparent">
            {studentClubs.map((club, idx) => {
              const isActive = club.id === activeClub.id;
              return (
                <div
                  key={club.id}
                  onClick={() => handleSelectClub(club.id)}
                  className={`py-3.5 sm:py-4 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-3 transition-colors cursor-pointer ${
                    isActive
                      ? "bg-primary/5 dark:bg-primary/10 border-l-4 border-primary pl-3"
                      : "hover:bg-foreground/[0.02]"
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
                      <p className="text-xs font-sans text-muted-foreground line-clamp-1 mt-0.5">
                        {club.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pl-9 md:pl-0">
                    <span className="text-[11px] font-bold font-oswald uppercase text-primary px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      {club.badge || club.category}
                    </span>
                    <span className="text-xs font-sans font-semibold text-muted-foreground hidden sm:inline">
                      {club.membersCount}
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

      {/* ORGANIC WAVE DIVIDER B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION A: ANNUAL FLAGSHIP FESTIVALS & PROFESSIONAL GATEWAY */}
      <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 px-4 sm:px-6 md:px-12 transition-colors">
        <div className="max-w-[1440px] mx-auto space-y-10">
          
          <div>
            <div className="border-b border-border/60 pb-3 mb-6">
              <span className="text-xs font-bold font-oswald uppercase tracking-wider text-primary">
                Campus Traditions &amp; Inter-Collegiate Competitions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground mt-0.5">
                Annual Flagship Festivals
              </h2>
            </div>

            {/* 3 Major Festivals Editorial Columns (No heavy card boxes) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border/60">
              
              <div className="pt-4 md:pt-0 md:pr-6 space-y-2">
                <span className="text-xs font-black font-oswald uppercase text-primary">
                  Annual Cultural Fest
                </span>
                <h3 className="text-xl font-black font-oswald uppercase text-foreground">
                  TAKSHASHILA
                </h3>
                <p className="text-xs sm:text-sm font-sans text-muted-foreground leading-relaxed">
                  3-day inter-collegiate cultural extravaganza featuring music battles, dance troupes, drama, Fine Arts exhibitions, and Tamil Mandram galas with 5,000+ attendees.
                </p>
              </div>

              <div className="pt-4 md:pt-0 md:px-6 space-y-2">
                <span className="text-xs font-black font-oswald uppercase text-primary">
                  National Technical Symposium
                </span>
                <h3 className="text-xl font-black font-oswald uppercase text-foreground">
                  INNOVIX
                </h3>
                <p className="text-xs sm:text-sm font-sans text-muted-foreground leading-relaxed">
                  National technical symposium organized jointly by Coding Club, Robotic Club, and Science Club with 24-hr code sprints, robo-soccer, and science paper presentations.
                </p>
              </div>

              <div className="pt-4 md:pt-0 md:pl-6 space-y-2">
                <span className="text-xs font-black font-oswald uppercase text-primary">
                  Annual Sports Championship
                </span>
                <h3 className="text-xl font-black font-oswald uppercase text-foreground">
                  SPORTS FIESTA
                </h3>
                <p className="text-xs sm:text-sm font-sans text-muted-foreground leading-relaxed">
                  Annual athletic meet and inter-department championship organized by Sports Club spanning cricket, football, basketball, and track athletics with gold/silver medal ceremonies.
                </p>
              </div>

            </div>
          </div>

          {/* Gateway Banner to Professional Societies */}
          <div className="border border-border/60 p-6 sm:p-8 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/20">
            <div>
              <span className="text-xs font-bold font-oswald uppercase tracking-wider text-primary">
                Technical Societies &amp; Chapters
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                Explore Professional Societies
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans mt-1">
                CSI, IETE, SAE, and ISHRAE professional student chapters at MSAJCE.
              </p>
            </div>
            
            <button
              type="button"
              onClick={() => navigate({ to: "/student-life/professional-societies" })}
              className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-5 py-2.5 font-bold font-oswald text-xs uppercase tracking-wider shrink-0 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Professional Chapters <ArrowRight className="w-3.5 h-3.5" />
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
