import { useState, useMemo, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { studentClubs, type StudentClub } from "@/data/studentLife";

const title = "Clubs & Cultural Societies | Campus Life | MSAJCE";
const description =
  "Explore the 8 official student clubs at Mohamed Sathak A.J. College of Engineering: Sports Club, Fine Arts Club, Science Club, Tamil Mandram, Coding Club, Robotic Club, Energy & Eco Club, and Photography Club.";

const clubNavTabs = [
  { id: "sports-club", label: "Sports Club" },
  { id: "fine-arts-club", label: "Fine Arts Club" },
  { id: "science-club", label: "Science Club" },
  { id: "tamil-mandram", label: "Tamil Mandram" },
  { id: "coding-club", label: "Coding Club" },
  { id: "robotic-club", label: "Robotic Club" },
  { id: "energy-eco-club", label: "Energy & Eco Club" },
  { id: "photography-club", label: "Photography Club" },
];

const clubDirectoryData = [
  {
    sno: 1,
    name: "Sports Club",
    category: "Athletics & Sports",
    activities: "Annual Sports Meet, Anna University Zonal Tournaments, Inter-Collegiate Tournaments, Intramural Sports",
    strength: "450+ Athletes",
  },
  {
    sno: 2,
    name: "Fine Arts Club",
    category: "Cultural & Arts",
    activities: "ENVISTA Annual Cultural Fest, Classical Dance & Music, Drama, Battle of Bands, Street Theatre",
    strength: "300+ Artists",
  },
  {
    sno: 3,
    name: "Science Club",
    category: "Applied Sciences",
    activities: "National Science Day, Innovation Project Expo, Inter-Department Science Quizzes, Hands-on Fair",
    strength: "220+ Inquirers",
  },
  {
    sno: 4,
    name: "தமிழ் மன்றம் (Tamil Mandram)",
    category: "Language & Literature",
    activities: "Muthamizh Vizha, Pattimandram (Debate), Kavidhai Potti, Tamil Oratorical Contests",
    strength: "280+ உறுப்பினர்கள்",
  },
  {
    sno: 5,
    name: "Coding Club",
    category: "Software & Algorithms",
    activities: "Weekly Coding Sprints, CodeStorm Annual Hackathon, Open-Source Bootcamps, Tech Talks",
    strength: "350+ Coders",
  },
  {
    sno: 6,
    name: "Robotic Club",
    category: "Robotics & IoT",
    activities: "Annual Bot-Fest, Drone Racing Circuit, Line Follower Challenges, National Leagues",
    strength: "180+ Roboticists",
  },
  {
    sno: 7,
    name: "Energy & Eco Club",
    category: "Green Energy & Environment",
    activities: "Campus Energy Audits, Environment Day Drives, Tree Plantations, Green Tech Exhibitions",
    strength: "200+ Volunteers",
  },
  {
    sno: 8,
    name: "Photography & Media Club",
    category: "Visual Media & Storytelling",
    activities: "Campus Photo Walks, Annual Photo Exhibition, Drone Videography, Short Film Festivals",
    strength: "150+ Creators",
  },
];

const clubGovernancePillars = [
  {
    title: "Democratic Student Leadership",
    desc: "Annual elections for President, Vice-President, Secretary, and Event Leads to cultivate real-world organizational governance and team stewardship.",
  },
  {
    title: "Faculty Advisory & Mentorship",
    desc: "Every club operates under the guidance of a dedicated faculty coordinator ensuring curriculum harmony, safety standards, and institutional support.",
  },
  {
    title: "Cross-Disciplinary Open Access",
    desc: "Open to students across all engineering branches and semesters, promoting cross-functional peer collaboration and interdisciplinary synergy.",
  },
  {
    title: "Documented Impact & Activity Audits",
    desc: "Structured semester-end reviews, annual reports, participant feedback metrics, and formal portfolio archiving for every student milestone.",
  },
];

const membershipProtocols = [
  {
    title: "Semester Orientation & Registration",
    desc: "Students can register for up to two official clubs during the annual Club Expo held at the commencement of each academic year.",
  },
  {
    title: "Experiential Learning Credits",
    desc: "Active participation, leadership roles, and competition laurels earn co-curricular credits contributing to institutional graduation portfolios.",
  },
  {
    title: "Institutional Travel & Competition Grants",
    desc: "College sponsorship and travel grants provided for student teams representing MSAJCE at national festivals, hackathons, and sports meets.",
  },
  {
    title: "Annual Club Honors & Awards",
    desc: "Exemplary club leaders, artists, coders, and athletes are honored annually on College Day with university citations and merit medals.",
  },
];

/* Organic Alternating Wave Dividers */
function WaveDividerAB() {
  return (
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
  );
}

function WaveDividerBA() {
  return (
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
  );
}

interface ClubsSearch {
  club?: string | undefined;
}

export const Route = createFileRoute("/student-life_/clubs-and-societies")({
  validateSearch: (search: Record<string, unknown>): ClubsSearch => {
    return {
      club: typeof search["club"] === "string" ? (search["club"] as string) : undefined,
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
  const navigate = Route.useNavigate();
  const { club } = Route.useSearch();
  const [selectedClubId, setSelectedClubId] = useState<string>(() => {
    if (club && clubNavTabs.some((c) => c.id === club)) {
      return club;
    }
    return "sports-club";
  });

  useEffect(() => {
    if (club && clubNavTabs.some((c) => c.id === club)) {
      setSelectedClubId(club);
    }
  }, [club]);

  const handleSelectClub = (clubId: string) => {
    setSelectedClubId(clubId);
    navigate({
      search: { club: clubId },
      replace: true,
    });
  };

  const activeClub: StudentClub = useMemo(() => {
    return studentClubs.find((c) => c.id === selectedClubId) || studentClubs[0];
  }, [selectedClubId]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#121214] text-foreground font-libre antialiased flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary SubNav Header */}
      <SecondarySubNav
        title="CLUBS & SOCIETIES"
        tabs={clubNavTabs}
        activeTab={selectedClubId}
        onSelectTab={handleSelectClub}
        onTitleClick={() => handleSelectClub("sports-club")}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 2. DYNAMIC HERO BANNER: Institution-Style Theme-Adaptive Banner           */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80"
              alt="Clubs and Cultural Societies at Mohamed Sathak A.J. College of Engineering"
              className="w-full h-full object-cover object-center brightness-[0.70] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
              }}
            />
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Theme-Adaptive Frame Docked Flush at Bottom */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full w-auto border-t border-r border-border dark:border-white/15">
              <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none whitespace-nowrap">
                CLUBS &amp; SOCIETIES
              </h1>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SECTION 1: Canvas A (White / #121214) — Clubs Ecosystem & Spotlight    */}
        {/* ========================================================================= */}
        <section className="py-8 sm:py-12 md:py-14 bg-white dark:bg-[#121214] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Student Clubs Ecosystem Overview
              </h2>
            </div>

            <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              At Mohamed Sathak A.J. College of Engineering, student clubs form the vibrant pulse of campus life. With 8 specialized bodies spanning competitive athletics, creative arts, applied sciences, regional literature, competitive programming, robotics, environmental sustainability, and visual storytelling, every student finds an active forum to lead and collaborate.
            </p>

            {/* Active Club Detailed Spotlight (Cardless Open Layout) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClub.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="space-y-6 pt-2"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold font-oswald uppercase tracking-wider px-2.5 py-0.5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary inline-block">
                      {activeClub.badge || activeClub.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-oswald uppercase tracking-tight text-foreground">
                      {activeClub.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold text-muted-foreground">
                    {activeClub.membersCount}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Left Column: Authentic Static Visual Showcase */}
                  <div className="lg:col-span-5 relative w-full aspect-[16/10] overflow-hidden rounded-md border border-border/40 bg-muted/20">
                    <img
                      src={
                        activeClub.id === "sports-club"
                          ? "/images/why-join/sports.jpg"
                          : activeClub.id === "fine-arts-club"
                          ? "/images/why-join/infrastructure.jpg"
                          : "/images/accreditations_campus.jpg"
                      }
                      alt={activeClub.name}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                      }}
                    />
                  </div>

                  {/* Right Column: Narrative, Objectives & Highlights */}
                  <div className="lg:col-span-7 space-y-4">
                    {activeClub.tagline && (
                      <p className="font-oswald text-sm sm:text-base uppercase tracking-wide text-primary font-semibold">
                        "{activeClub.tagline}"
                      </p>
                    )}

                    <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                      {activeClub.description}
                    </p>

                    {/* Vision / Motto Badges */}
                    {(activeClub.vision || activeClub.motto) && (
                      <div className="space-y-2 pt-1 border-t border-border/40">
                        {activeClub.vision && (
                          <div className="flex items-start gap-3">
                            <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                              V
                            </span>
                            <p className="text-xs sm:text-sm text-foreground/90 font-libre font-medium leading-relaxed pt-0.5">
                              {activeClub.vision}
                            </p>
                          </div>
                        )}
                        {activeClub.motto && (
                          <div className="flex items-start gap-3">
                            <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                              M
                            </span>
                            <p className="text-xs sm:text-sm text-foreground/90 font-libre font-medium leading-relaxed pt-0.5">
                              {activeClub.motto}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Fine Arts Leadership Note */}
                    {activeClub.id === "fine-arts-club" && (
                      <div className="space-y-2 pt-1 text-xs sm:text-sm font-libre border-t border-border/40">
                        {activeClub.envistaNote && (
                          <p className="font-medium text-foreground/90 leading-relaxed italic">
                            {activeClub.envistaNote}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-4 pt-1 font-libre">
                          {activeClub.staffCoordinator && (
                            <div>
                              <span className="font-oswald font-bold uppercase text-primary mr-1">Staff Coordinator:</span>
                              <span className="text-foreground">{activeClub.staffCoordinator}</span>
                            </div>
                          )}
                          {activeClub.studentPresident && (
                            <div>
                              <span className="font-oswald font-bold uppercase text-primary mr-1">President:</span>
                              <span className="text-foreground">{activeClub.studentPresident}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Sports Club Disciplines */}
                    {activeClub.id === "sports-club" && activeClub.outdoorGames && (
                      <div className="space-y-2 pt-1 border-t border-border/40">
                        <span className="text-xs font-bold font-oswald uppercase tracking-wider text-primary block">
                          Outdoor &amp; Indoor Disciplines
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeClub.outdoorGames.map((game, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 bg-foreground/5 border border-foreground/10 text-xs font-oswald uppercase text-foreground font-medium rounded-tl-md rounded-br-md"
                            >
                              {game}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Coding Practices */}
                    {activeClub.id === "coding-club" && activeClub.codingPractices && (
                      <div className="space-y-2 pt-1 border-t border-border/40">
                        <span className="text-xs font-bold font-oswald uppercase tracking-wider text-primary block">
                          Technical Practices &amp; Hackathons
                        </span>
                        <ul className="space-y-1 text-xs sm:text-sm font-libre text-foreground/85">
                          {activeClub.codingPractices.map((cp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{cp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Robotics Curriculum */}
                    {activeClub.id === "robotic-club" && activeClub.roboticsActivities && (
                      <div className="space-y-2 pt-1 border-t border-border/40">
                        <span className="text-xs font-bold font-oswald uppercase tracking-wider text-primary block">
                          Robotics Curriculum Modules
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeClub.roboticsActivities.map((act, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 text-xs font-oswald uppercase text-primary font-medium rounded-tl-md rounded-br-md"
                            >
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tamil Mandram Events */}
                    {activeClub.id === "tamil-mandram" && activeClub.tamilEvents && (
                      <div className="space-y-2 pt-1 border-t border-border/40">
                        <span className="text-xs font-bold font-oswald uppercase tracking-wider text-primary block">
                          நிகழ்ச்சிகள் &amp; இலக்கிய விழாக்கள்
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeClub.tamilEvents.map((evt, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 bg-foreground/5 border border-foreground/15 text-xs font-libre font-bold text-foreground rounded-tl-md rounded-br-md"
                            >
                              {evt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Wave Divider A -> B */}
        <WaveDividerAB />

        {/* ========================================================================= */}
        {/* 4. SECTION 2: Canvas B (#F3F3F2 / #18181B) — Activities Directory Table   */}
        {/* ========================================================================= */}
        <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Annual Club Activities &amp; Events Directory
              </h2>
            </div>

            <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              Comprehensive catalog of regular co-curricular fixtures, competitive tournaments, cultural festivals, and technical symposiums conducted annually across all active student bodies.
            </p>

            {/* Official Publications DataGrid Table */}
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[200px]">
                        Club Name
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[160px]">
                        Category / Domain
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Key Annual Activities &amp; Fixtures
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-right">
                        Active Strength
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {clubDirectoryData.map((club) => (
                      <tr key={club.sno} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                          {String(club.sno).padStart(2, "0")}
                        </td>
                        <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm whitespace-nowrap">
                          {club.name}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/80 whitespace-nowrap">
                          {club.category}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground leading-relaxed">
                          {club.activities}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                          {club.strength}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          </div>
        </section>

        {/* Wave Divider B -> A */}
        <WaveDividerBA />

        {/* ========================================================================= */}
        {/* 5. SECTION 3: Canvas A (White / #121214) — Leadership & Code of Engagement */}
        {/* ========================================================================= */}
        <section className="py-8 sm:py-12 md:py-14 bg-white dark:bg-[#121214] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Leadership Structure &amp; Code of Engagement
              </h2>
            </div>

            <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              All student clubs operate under democratic student leadership guided by designated faculty coordinators, ensuring accountability, inclusivity, and high-impact extracurricular execution.
            </p>

            {/* Clean Open Editorial List */}
            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {clubGovernancePillars.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4.5 sm:py-5 px-1 sm:px-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-foreground/[0.015] transition-colors w-full"
                >
                  <div className="md:w-80 shrink-0 flex items-center gap-3">
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm border border-foreground/20">
                      0{idx + 1}
                    </span>
                    <h3 className="font-oswald font-bold text-base sm:text-lg text-foreground uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave Divider A -> B */}
        <WaveDividerAB />

        {/* ========================================================================= */}
        {/* 6. SECTION 4: Canvas B (#F3F3F2 / #18181B) — Enrollment & Merit Honors     */}
        {/* ========================================================================= */}
        <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Membership Enrollment &amp; Merit Recognition
              </h2>
            </div>

            <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              How students enroll in official student bodies, acquire experiential co-curricular credits, and receive institutional honors upon graduation.
            </p>

            {/* Clean Open Editorial List */}
            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {membershipProtocols.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4.5 sm:py-5 px-1 sm:px-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-foreground/[0.015] transition-colors w-full"
                >
                  <div className="md:w-80 shrink-0 flex items-center gap-3">
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm border border-foreground/20">
                      0{idx + 1}
                    </span>
                    <h3 className="font-oswald font-bold text-base sm:text-lg text-foreground uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
