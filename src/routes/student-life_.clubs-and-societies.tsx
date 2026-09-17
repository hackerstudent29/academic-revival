import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
  Trophy,
  Target,
  Heart,
  Users,
  Award,
  CheckCircle2,
  ChevronRight,
  Activity,
  Dumbbell
} from "lucide-react";
import { studentClubs } from "@/data/studentLife";

const title = "Clubs & Cultural Societies | Student Life | MSAJCE";
const description =
  "Explore official student clubs at Mohamed Sathak A.J. College of Engineering: Sports Club, Fine Arts Club, Science Club, Tamil Mandram, Coding Club, Robotic Club, Energy & Eco Club, and Photography Club.";

export const Route = createFileRoute("/student-life_/clubs-and-societies")({
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
  const [clubFilter, setClubFilter] = useState<string>("all");
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);

  const filteredClubs = clubFilter === "all"
    ? studentClubs
    : studentClubs.filter(c => c.category === clubFilter);

  const sportsClub = studentClubs.find(c => c.id === "sports-club");

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9E2339] via-[#861E30] to-[#671422] text-white pt-10 pb-16 px-4 sm:px-6 md:px-12 border-b border-primary/20">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-sm text-xs font-bold font-oswald uppercase tracking-wider text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Student Forums &amp; Cultural Life
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-oswald uppercase tracking-tight leading-[1.05]">
              Clubs &amp; Cultural Societies
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-sans leading-relaxed">
              Student-led forums driving athletic excellence, technical innovation, fine arts, Tamil literary heritage, robotics, green sustainability, and visual photojournalism.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">8 Clubs</span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">Official Student Forums</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">2,400+</span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">Active Student Members</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">50+ Fests</span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">Annual Campus Events</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">TAKSHASHILA</span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">Annual Cultural Gala</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-10 space-y-12">
        {/* SPECIAL FEATURED SECTION: SPORTS CLUB */}
        {sportsClub && (
          <section id="sports-club-feature" className="bg-card dark:bg-[#18181B] border border-primary/30 rounded-sm p-6 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-foreground/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black font-oswald uppercase text-white bg-primary px-2.5 py-0.5 rounded-xs flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-300" />
                    Featured Official Club
                  </span>
                  <span className="text-xs font-bold font-oswald text-primary uppercase">
                    {sportsClub.membersCount}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground">
                  {sportsClub.name}
                </h2>
                <p className="text-base font-bold font-oswald text-primary uppercase tracking-wider mt-1">
                  Motto: "{sportsClub.motto}"
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-sm max-w-xl">
                <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                  Club Vision:
                </span>
                <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed italic">
                  "{sportsClub.vision}"
                </p>
              </div>
            </div>

            {/* Introduction & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Introduction &amp; Mandate
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {sportsClub.description}
                </p>

                {/* Objectives */}
                {sportsClub.objectives && (
                  <div className="mt-6 pt-6 border-t border-foreground/10">
                    <h4 className="text-sm font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      Club Objectives:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {sportsClub.objectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-background/60 p-2.5 rounded-sm border border-foreground/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Outdoor & Indoor Games Card */}
              <div className="bg-background dark:bg-[#121214] border border-foreground/10 rounded-sm p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Dumbbell className="w-4 h-4" />
                    Outdoor Games (8 Discipline Arenas)
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {sportsClub.outdoorGames?.map((game, idx) => (
                      <span key={idx} className="text-xs font-bold font-oswald uppercase bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-xs">
                        ⚽ {game}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-foreground/10">
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    Indoor Games (3 Tournament Arenas)
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {sportsClub.indoorGames?.map((game, idx) => (
                      <span key={idx} className="text-xs font-bold font-oswald uppercase bg-foreground/10 text-foreground border border-foreground/20 px-2.5 py-1 rounded-xs">
                        ♟️ {game}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sports Stock Images Gallery */}
            {sportsClub.images && (
              <div>
                <h4 className="text-sm font-bold font-oswald uppercase text-foreground tracking-wider mb-4">
                  Sports &amp; Games Action Gallery
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {sportsClub.images.map((imgUrl, i) => (
                    <div key={i} className="aspect-[4/3] rounded-sm overflow-hidden bg-muted border border-foreground/10">
                      <img
                        src={imgUrl}
                        alt={`Sports action ${i + 1}`}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Directory Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-foreground/10 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground">
              Official Student Clubs Directory
            </h2>
            <p className="text-sm text-muted-foreground font-sans mt-1">
              Explore all 8 specialized student clubs across sports, technical, arts, literary, eco, and media categories.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All 8 Clubs" },
              { id: "technical", label: "Technical & Science" },
              { id: "cultural", label: "Cultural & Literary" },
              { id: "sports", label: "Sports" },
              { id: "media", label: "Media" },
              { id: "eco", label: "Eco & Green" },
            ].map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => setClubFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-bold font-oswald uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  clubFilter === f.id
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="group bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold font-oswald uppercase text-primary px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-xs">
                    {club.badge || club.category}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground font-semibold">
                    {club.membersCount}
                  </span>
                </div>

                <h3 className="text-xl font-black font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                  {club.name}
                </h3>
                <p className="text-xs font-bold font-oswald uppercase text-primary/90 mt-1">
                  "{club.tagline}"
                </p>
                <p className="text-sm font-sans text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                  {club.description}
                </p>

                <div className="mt-4 pt-4 border-t border-foreground/10">
                  <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider mb-2">
                    Key Initiatives &amp; Activities:
                  </h4>
                  <ul className="space-y-1.5">
                    {club.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flagship Annual Festivals Showcase */}
        <div className="mt-12 bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 sm:p-8">
          <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-2">
            Annual Flagship Festivals
          </h3>
          <p className="text-sm text-muted-foreground font-sans mb-6">
            Major state-level annual college conventions driven by our student clubs on MSAJCE campus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-foreground/10 rounded-sm bg-background">
              <span className="text-xs font-black font-oswald uppercase text-primary">Annual Cultural Fest</span>
              <h4 className="text-lg font-black font-oswald uppercase text-foreground mt-1">TAKSHASHILA</h4>
              <p className="text-xs text-muted-foreground font-sans mt-2">
                3-day inter-collegiate cultural extravaganza featuring music battles, dance troupes, drama, Fine Arts exhibitions, and Tamil Mandram galas.
              </p>
            </div>
            <div className="p-4 border border-foreground/10 rounded-sm bg-background">
              <span className="text-xs font-black font-oswald uppercase text-primary">Technical Symposium</span>
              <h4 className="text-lg font-black font-oswald uppercase text-foreground mt-1">INNOVIX</h4>
              <p className="text-xs text-muted-foreground font-sans mt-2">
                National level technical symposium organized by Coding Club, Robotic Club, and Science Club with code sprints, robo-soccer, and science paper presentations.
              </p>
            </div>
            <div className="p-4 border border-foreground/10 rounded-sm bg-background">
              <span className="text-xs font-black font-oswald uppercase text-primary">Sports Championship</span>
              <h4 className="text-lg font-black font-oswald uppercase text-foreground mt-1">SPORTS FIESTA</h4>
              <p className="text-xs text-muted-foreground font-sans mt-2">
                Annual athletic meet and inter-department sports tournament organized by Sports Club spanning cricket, football, basketball, and track athletics.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Banner */}
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 rounded-sm flex items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-black font-oswald uppercase text-foreground">Explore Professional Societies</h4>
            <p className="text-xs text-muted-foreground font-sans">IEEE, ISTE, CSI, and SAE India student chapters.</p>
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
    </main>
  );
}
