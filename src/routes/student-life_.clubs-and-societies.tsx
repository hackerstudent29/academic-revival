import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
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
  FlaskConical,
  BookOpenCheck,
  Lightbulb,
  Code,
  Terminal,
  Cpu,
  Bot,
  Wrench,
  Leaf,
  Zap,
  Sun,
  Camera,
  Film
} from "lucide-react";
import { studentClubs } from "@/data/studentLife";

const title = "Clubs & Cultural Societies | Student Life | MSAJCE";
const description =
  "Explore official student clubs at Mohamed Sathak A.J. College of Engineering: Sports Club, Fine Arts Club (ENVISTA), Science Club, Tamil Mandram, Coding Club, Robotic Club, Energy & Eco Club, and Photography Club.";

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

  const filteredClubs = clubFilter === "all"
    ? studentClubs
    : studentClubs.filter(c => c.category === clubFilter);

  const sportsClub = studentClubs.find(c => c.id === "sports-club");
  const fineArtsClub = studentClubs.find(c => c.id === "fine-arts-club");
  const scienceClub = studentClubs.find(c => c.id === "science-club");
  const tamilMandram = studentClubs.find(c => c.id === "tamil-mandram");
  const codingClub = studentClubs.find(c => c.id === "coding-club");
  const roboticClub = studentClubs.find(c => c.id === "robotic-club");
  const energyEcoClub = studentClubs.find(c => c.id === "energy-eco-club");
  const photographyClub = studentClubs.find(c => c.id === "photography-club");

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
              Student-led forums driving athletic excellence, fine arts, ENVISTA club initiatives, scientific research, Tamil literary heritage, robotics, green sustainability, and visual photojournalism.
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
        {/* COMMON STOCK IMAGE BANNER FOR CLUBS & CULTURAL SOCIETIES */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-sm overflow-hidden bg-muted border border-foreground/10 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
            alt="Clubs and Cultural Societies Showcase"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white max-w-2xl">
              <span className="text-xs font-bold font-oswald uppercase tracking-wider text-amber-300">
                Mohamed Sathak A.J. College of Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-white mt-1">
                Student Activities &amp; Cultural Heritage
              </h2>
            </div>
          </div>
        </div>

        {/* FEATURED SECTION 1: SPORTS CLUB */}
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
          </section>
        )}

        {/* FEATURED SECTION 2: FINE ARTS CLUB (ARTFUL AESTHETICS) */}
        {fineArtsClub && (
          <section id="fine-arts-club-feature" className="bg-card dark:bg-[#18181B] border border-primary/30 rounded-sm p-6 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-foreground/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black font-oswald uppercase text-white bg-primary px-2.5 py-0.5 rounded-xs flex items-center gap-1">
                    <Palette className="w-3.5 h-3.5 text-amber-300" />
                    ENVISTA CLUB Inaugurated Member
                  </span>
                  <span className="text-xs font-bold font-oswald text-primary uppercase">
                    {fineArtsClub.membersCount}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground">
                  {fineArtsClub.name}
                </h2>
                <p className="text-base font-bold font-oswald text-primary uppercase tracking-wider mt-1">
                  Motto: "{fineArtsClub.motto}"
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-sm max-w-xl">
                <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                  Club Vision:
                </span>
                <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed italic">
                  "{fineArtsClub.vision}"
                </p>
              </div>
            </div>

            {/* Introduction & Leadership Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-sm">
                  <span className="text-xs font-bold font-oswald uppercase text-amber-600 dark:text-amber-400 block">
                    ENVISTA CLUB Umbrella Initiative:
                  </span>
                  <p className="text-xs font-sans text-foreground/90 mt-0.5 leading-relaxed">
                    {fineArtsClub.envistaNote}
                  </p>
                </div>

                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2 pt-2">
                  <Star className="w-5 h-5 text-primary" />
                  Introduction &amp; Activities
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {fineArtsClub.description}
                </p>

                {/* 8 Objectives */}
                {fineArtsClub.objectives && (
                  <div className="mt-6 pt-6 border-t border-foreground/10">
                    <h4 className="text-sm font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      8 Core Objectives:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {fineArtsClub.objectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-background/60 p-2.5 rounded-sm border border-foreground/5">
                          <span className="w-4 h-4 bg-primary/20 text-primary rounded-full flex items-center justify-center text-[10px] font-bold font-oswald shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Leadership & Faculty Coordinator Card */}
              <div className="bg-background dark:bg-[#121214] border border-foreground/10 rounded-sm p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4" />
                    Faculty Coordinator
                  </h4>
                  <div className="bg-card p-3 border border-foreground/10 rounded-sm">
                    <span className="text-sm font-black font-oswald uppercase text-foreground block">
                      {fineArtsClub.staffCoordinator}
                    </span>
                    <span className="text-xs text-muted-foreground font-sans">
                      Department of Information Technology, MSAJCE
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-foreground/10">
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    Student Executive Leadership
                  </h4>
                  <div className="space-y-2.5">
                    <div className="bg-card p-3 border border-foreground/10 rounded-sm">
                      <span className="text-xs font-bold font-oswald uppercase text-primary block">
                        Student President:
                      </span>
                      <span className="text-sm font-black font-oswald uppercase text-foreground">
                        {fineArtsClub.studentPresident}
                      </span>
                    </div>

                    <div className="bg-card p-3 border border-foreground/10 rounded-sm">
                      <span className="text-xs font-bold font-oswald uppercase text-primary block">
                        Student Vice-President:
                      </span>
                      <span className="text-sm font-black font-oswald uppercase text-foreground">
                        {fineArtsClub.studentVicePresident}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fine Arts Stock Image Banner */}
            <div className="relative aspect-[21/9] sm:aspect-[24/7] rounded-sm overflow-hidden bg-muted border border-foreground/10 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80"
                alt="Fine Arts Showcase"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white max-w-xl">
                  <span className="text-xs font-bold font-oswald uppercase tracking-wider text-amber-300">
                    Artful Aesthetics · Dance, Singing, Acting &amp; Painting
                  </span>
                  <h4 className="text-lg sm:text-xl font-black font-oswald uppercase text-white mt-0.5">
                    Expressing Imagination &amp; Multi-Disciplinary Creativity
                  </h4>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FEATURED SECTION 3: SCIENCE CLUB */}
        {scienceClub && (
          <section id="science-club-feature" className="bg-card dark:bg-[#18181B] border border-primary/30 rounded-sm p-6 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-foreground/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black font-oswald uppercase text-white bg-primary px-2.5 py-0.5 rounded-xs flex items-center gap-1">
                    <Microscope className="w-3.5 h-3.5 text-amber-300" />
                    Largest Campus Science Forum
                  </span>
                  <span className="text-xs font-bold font-oswald text-primary uppercase">
                    {scienceClub.membersCount}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground">
                  {scienceClub.name}
                </h2>
                <p className="text-base font-bold font-oswald text-primary uppercase tracking-wider mt-1">
                  Motto: "{scienceClub.motto}"
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-sm max-w-xl">
                <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                  Club Purpose &amp; Vision:
                </span>
                <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed italic">
                  "{scienceClub.vision}"
                </p>
              </div>
            </div>

            {/* Introduction & Guiding Principles */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-primary" />
                  Introduction &amp; Club Structure
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {scienceClub.description}
                </p>

                {/* 5 Guiding Principles / Objectives */}
                {scienceClub.objectives && (
                  <div className="mt-6 pt-6 border-t border-foreground/10">
                    <h4 className="text-sm font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      5 Guiding Principles &amp; Investigator Objectives:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {scienceClub.objectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-background/60 p-2.5 rounded-sm border border-foreground/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Science Sections & Things To Do Card */}
              <div className="bg-background dark:bg-[#121214] border border-foreground/10 rounded-sm p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <FlaskConical className="w-4 h-4" />
                    3 Club Sections
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {scienceClub.scienceSections?.map((sec, idx) => (
                      <span key={idx} className="text-xs font-bold font-oswald uppercase bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-xs">
                        🧪 {sec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-foreground/10">
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Hands-on Projects &amp; Experiments
                  </h4>
                  <ul className="space-y-1.5">
                    {scienceClub.scienceHandsOn?.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-foreground/10">
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpenCheck className="w-4 h-4 text-emerald-500" />
                    Things To Do in Science Club
                  </h4>
                  <ul className="space-y-1.5">
                    {scienceClub.thingsToDo?.map((todo, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                        <span>{todo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Science Stock Image Banner */}
            <div className="relative aspect-[21/9] sm:aspect-[24/7] rounded-sm overflow-hidden bg-muted border border-foreground/10 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"
                alt="Science Club Laboratory & Research Showcase"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white max-w-xl">
                  <span className="text-xs font-bold font-oswald uppercase tracking-wider text-amber-300">
                    Physics · Chemistry · General Science &amp; Engineering
                  </span>
                  <h4 className="text-lg sm:text-xl font-black font-oswald uppercase text-white mt-0.5">
                    Practical Experimentation, Innovation &amp; Scientific Discovery
                  </h4>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FEATURED SECTION 4: TAMIL MANDRAM */}
        {tamilMandram && (
          <section id="tamil-mandram-feature" className="bg-card dark:bg-[#18181B] border border-primary/30 rounded-sm p-6 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-foreground/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black font-oswald uppercase text-white bg-primary px-2.5 py-0.5 rounded-xs flex items-center gap-1">
                    <BookOpenCheck className="w-3.5 h-3.5 text-amber-300" />
                    Official Literary &amp; Cultural Forum
                  </span>
                  <span className="text-xs font-bold font-oswald text-primary uppercase">
                    {tamilMandram.membersCount}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground">
                  {tamilMandram.name}
                </h2>
                <p className="text-base font-bold font-oswald text-primary uppercase tracking-wider mt-1">
                  Motto: "{tamilMandram.motto}"
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-sm max-w-xl">
                <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                  தமிழ் மன்றத்தின் தாரக மந்திரம்:
                </span>
                <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed italic font-semibold">
                  "{tamilMandram.vision}"
                </p>
              </div>
            </div>

            {/* Introduction & Objectives */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2">
                  <BookOpenCheck className="w-5 h-5 text-primary" />
                  முன்னுரை (Introduction)
                </h3>
                <p className="text-sm sm:text-base font-sans text-muted-foreground leading-relaxed">
                  {tamilMandram.description}
                </p>

                {/* Tamil Objectives */}
                {tamilMandram.tamilObjectives && (
                  <div className="mt-6 pt-6 border-t border-foreground/10">
                    <h4 className="text-sm font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      தமிழ் மன்றத்தின் 4 முக்கிய நோக்கங்கள் (Objectives):
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {tamilMandram.tamilObjectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-background/60 p-2.5 rounded-sm border border-foreground/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tamil Events & Competitions Card */}
              <div className="bg-background dark:bg-[#121214] border border-foreground/10 rounded-sm p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    நிகழ்ச்சிகள் &amp; போட்டிகள் (8 Competitions)
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tamilMandram.tamilEvents?.map((event, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs font-bold font-oswald uppercase bg-primary/10 text-primary border border-primary/20 p-2 rounded-xs">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span>{event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-foreground/10">
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-2">
                    மகுட வாக்கியங்கள் (Quotes)
                  </h4>
                  {tamilMandram.tamilQuotes?.map((q, idx) => (
                    <p key={idx} className="text-xs font-sans italic text-muted-foreground mb-1">
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Tamil Mandram Common Stock Image Banner */}
            <div className="relative aspect-[21/9] sm:aspect-[24/7] rounded-sm overflow-hidden bg-muted border border-foreground/10 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"
                alt="Tamil Mandram Cultural Heritage Showcase"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white max-w-xl">
                  <span className="text-xs font-bold font-oswald uppercase tracking-wider text-amber-300">
                    தமிழ் மொழி · பண்பாடு · கவிதை · பட்டிமன்றம் &amp; கலை
                  </span>
                  <h4 className="text-lg sm:text-xl font-black font-oswald uppercase text-white mt-0.5">
                    “வாழ்க தமிழ் ! வெல்க தமிழ் !” — MSAJCE தமிழ் மன்றம்
                  </h4>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FEATURED SECTION 5: CODING CLUB */}
        {codingClub && (
          <section id="coding-club-feature" className="bg-card dark:bg-[#18181B] border border-primary/30 rounded-sm p-6 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-foreground/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black font-oswald uppercase text-white bg-primary px-2.5 py-0.5 rounded-xs flex items-center gap-1">
                    <Code className="w-3.5 h-3.5 text-amber-300" />
                    Software &amp; Competitive Programming Hub
                  </span>
                  <span className="text-xs font-bold font-oswald text-primary uppercase">
                    {codingClub.membersCount}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground">
                  {codingClub.name}
                </h2>
                <p className="text-base font-bold font-oswald text-primary uppercase tracking-wider mt-1">
                  Motto: "{codingClub.motto}"
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-sm max-w-xl">
                <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                  Club Vision &amp; Philosophy:
                </span>
                <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed italic font-semibold">
                  "{codingClub.vision}"
                </p>
              </div>
            </div>

            {/* Introduction, Aim & Practice */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  About Coding Club
                </h3>
                <p className="text-sm sm:text-base font-sans text-muted-foreground leading-relaxed">
                  {codingClub.description}
                </p>

                {/* Club Aims */}
                {codingClub.codingAims && (
                  <div className="mt-6 pt-6 border-t border-foreground/10">
                    <h4 className="text-sm font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      Strategic Aims &amp; Competitions:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {codingClub.codingAims.map((aim, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-background/60 p-2.5 rounded-sm border border-foreground/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{aim}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Practice & Operational Routine Card */}
              <div className="bg-background dark:bg-[#121214] border border-foreground/10 rounded-sm p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-amber-500" />
                    Weekly Practice &amp; Initiatives
                  </h4>
                  <ul className="space-y-2.5">
                    {codingClub.codingPractices?.map((practice, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-card p-2.5 rounded-sm border border-foreground/10">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Coding Stock Image Banner */}
            <div className="relative aspect-[21/9] sm:aspect-[24/7] rounded-sm overflow-hidden bg-muted border border-foreground/10 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
                alt="Coding Club Developer Workspace Showcase"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white max-w-xl">
                  <span className="text-xs font-bold font-oswald uppercase tracking-wider text-amber-300">
                    Full-Stack · Machine Learning · Competitive Programming &amp; Hackathons
                  </span>
                  <h4 className="text-lg sm:text-xl font-black font-oswald uppercase text-white mt-0.5">
                    Building Powerful Software &amp; Algorithmic Excellence
                  </h4>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FEATURED SECTION 6: ROBOTIC CLUB */}
        {roboticClub && (
          <section id="robotic-club-feature" className="bg-card dark:bg-[#18181B] border border-primary/30 rounded-sm p-6 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-foreground/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black font-oswald uppercase text-white bg-primary px-2.5 py-0.5 rounded-xs flex items-center gap-1">
                    <Bot className="w-3.5 h-3.5 text-amber-300" />
                    Autonomous Robotics &amp; Mechatronics Hub
                  </span>
                  <span className="text-xs font-bold font-oswald text-primary uppercase">
                    {roboticClub.membersCount}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground">
                  {roboticClub.name}
                </h2>
                <p className="text-base font-bold font-oswald text-primary uppercase tracking-wider mt-1">
                  Motto: "{roboticClub.motto}"
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-sm max-w-xl">
                <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                  Club Aim &amp; Philosophy:
                </span>
                <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed italic font-semibold">
                  "{roboticClub.vision}"
                </p>
              </div>
            </div>

            {/* Introduction & Objectives */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  Introduction
                </h3>
                <p className="text-sm sm:text-base font-sans text-muted-foreground leading-relaxed">
                  {roboticClub.description}
                </p>

                {/* Club Objectives */}
                {roboticClub.objectives && (
                  <div className="mt-6 pt-6 border-t border-foreground/10">
                    <h4 className="text-sm font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      3 Core Objectives:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {roboticClub.objectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-background/60 p-2.5 rounded-sm border border-foreground/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Activities & Training Card */}
              <div className="bg-background dark:bg-[#121214] border border-foreground/10 rounded-sm p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-amber-500" />
                    Club Activities Include
                  </h4>
                  <ul className="space-y-2.5">
                    {roboticClub.roboticsActivities?.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-card p-2.5 rounded-sm border border-foreground/10">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        <span className="font-bold font-oswald text-foreground">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Robotics Stock Image Banner */}
            <div className="relative aspect-[21/9] sm:aspect-[24/7] rounded-sm overflow-hidden bg-muted border border-foreground/10 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
                alt="Robotics Club Engineering & Automation Showcase"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white max-w-xl">
                  <span className="text-xs font-bold font-oswald uppercase tracking-wider text-amber-300">
                    Thinking Technologically · Autonomous Robotics &amp; Circuitry
                  </span>
                  <h4 className="text-lg sm:text-xl font-black font-oswald uppercase text-white mt-0.5">
                    Designing &amp; Constructing Intelligent Machines
                  </h4>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FEATURED SECTION 7: ENERGY & ECO CLUB */}
        {energyEcoClub && (
          <section id="energy-eco-club-feature" className="bg-card dark:bg-[#18181B] border border-primary/30 rounded-sm p-6 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-foreground/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black font-oswald uppercase text-white bg-primary px-2.5 py-0.5 rounded-xs flex items-center gap-1">
                    <Leaf className="w-3.5 h-3.5 text-emerald-300" />
                    Green Energy &amp; Ecological Sustainability Forum
                  </span>
                  <span className="text-xs font-bold font-oswald text-primary uppercase">
                    {energyEcoClub.membersCount}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground">
                  {energyEcoClub.name}
                </h2>
                <p className="text-base font-bold font-oswald text-primary uppercase tracking-wider mt-1">
                  Motto: "{energyEcoClub.motto}"
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-sm max-w-xl">
                <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                  Eco Philosophy &amp; Vision:
                </span>
                <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed italic font-semibold">
                  "{energyEcoClub.vision}"
                </p>
              </div>
            </div>

            {/* Energy Club & Eco Club Sub-sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Energy Club Sub-card */}
              <div className="bg-background dark:bg-[#121214] border border-amber-500/20 rounded-sm p-6 space-y-4">
                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2 border-b border-foreground/10 pb-3">
                  <Zap className="w-5 h-5 text-amber-500" />
                  Energy Club Mandate
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {energyEcoClub.energyClubDetails}
                </p>
              </div>

              {/* Eco Club Sub-card */}
              <div className="bg-background dark:bg-[#121214] border border-emerald-500/20 rounded-sm p-6 space-y-4">
                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2 border-b border-foreground/10 pb-3">
                  <Sun className="w-5 h-5 text-emerald-500" />
                  Eco Club Mandate
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {energyEcoClub.ecoClubDetails}
                </p>
              </div>
            </div>

            {/* Objectives & Key Initiatives */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-sm font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  Core Environmental &amp; Energy Objectives:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {energyEcoClub.objectives?.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-background/60 p-2.5 rounded-sm border border-foreground/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background dark:bg-[#121214] border border-foreground/10 rounded-sm p-6 space-y-4">
                <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-emerald-500" />
                  Flagship Campus Initiatives
                </h4>
                <ul className="space-y-2">
                  {energyEcoClub.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Energy & Eco Stock Image Banner */}
            <div className="relative aspect-[21/9] sm:aspect-[24/7] rounded-sm overflow-hidden bg-muted border border-foreground/10 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
                alt="Green Renewable Energy & Nature Conservation Showcase"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white max-w-xl">
                  <span className="text-xs font-bold font-oswald uppercase tracking-wider text-amber-300">
                    Sustainable Energy · Environmental Health · Conservation
                  </span>
                  <h4 className="text-lg sm:text-xl font-black font-oswald uppercase text-white mt-0.5">
                    Empowering Youth for Responsible Energy &amp; Ecological Stewardship
                  </h4>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FEATURED SECTION 8: PHOTOGRAPHY CLUB */}
        {photographyClub && (
          <section id="photography-club-feature" className="bg-card dark:bg-[#18181B] border border-primary/30 rounded-sm p-6 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-foreground/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black font-oswald uppercase text-white bg-primary px-2.5 py-0.5 rounded-xs flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-amber-300" />
                    Visual Arts, Photojournalism &amp; Short Filmmaking
                  </span>
                  <span className="text-xs font-bold font-oswald text-primary uppercase">
                    {photographyClub.membersCount}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground">
                  {photographyClub.name}
                </h2>
                <p className="text-base font-bold font-oswald text-primary uppercase tracking-wider mt-1">
                  Motto: "{photographyClub.motto}"
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-sm max-w-xl">
                <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider block mb-1">
                  Visual Arts Philosophy:
                </span>
                <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed italic font-semibold">
                  "{photographyClub.vision}"
                </p>
              </div>
            </div>

            {/* Introduction & Objectives */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-black font-oswald uppercase text-foreground flex items-center gap-2">
                  <Film className="w-5 h-5 text-primary" />
                  Introduction &amp; Visual Expression
                </h3>
                <p className="text-sm sm:text-base font-sans text-muted-foreground leading-relaxed">
                  {photographyClub.description}
                </p>

                {/* Objectives */}
                {photographyClub.objectives && (
                  <div className="mt-6 pt-6 border-t border-foreground/10">
                    <h4 className="text-sm font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      4 Core Photography Objectives:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {photographyClub.objectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80 bg-background/60 p-2.5 rounded-sm border border-foreground/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pillars & Software Training Card */}
              <div className="bg-background dark:bg-[#121214] border border-foreground/10 rounded-sm p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-amber-500" />
                    4 Core Pillars of Visual Arts
                  </h4>
                  <ul className="space-y-2">
                    {photographyClub.photographyPillars?.map((pillar, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-bold font-oswald uppercase bg-primary/10 text-primary border border-primary/20 p-2 rounded-xs">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span>{pillar}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-foreground/10">
                  <h4 className="text-sm font-black font-oswald uppercase text-primary tracking-wider mb-2">
                    Key Media Activities
                  </h4>
                  <ul className="space-y-1.5">
                    {photographyClub.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Photography Stock Image Banner */}
            <div className="relative aspect-[21/9] sm:aspect-[24/7] rounded-sm overflow-hidden bg-muted border border-foreground/10 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
                alt="Photography & Short Filmmaking Showcase"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white max-w-xl">
                  <span className="text-xs font-bold font-oswald uppercase tracking-wider text-amber-300">
                    Composition · Short Filmmaking · Screenwriting · Post-Production
                  </span>
                  <h4 className="text-lg sm:text-xl font-black font-oswald uppercase text-white mt-0.5">
                    Exploring &amp; Appreciating Surroundings Through Visual Arts
                  </h4>
                </div>
              </div>
            </div>
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
