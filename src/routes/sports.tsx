import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { Mail, CheckCircle2 } from "lucide-react";
import { useHeader } from "@/context/HeaderContext";

const title = "Sports Activities & Fitness Center — Mohamed Sathak A.J. College of Engineering, Chennai";
const description =
  "Physical education, athletic facilities, sports quota scholarships, gymnasium equipment, and annual sports tournaments at Mohamed Sathak A.J. College of Engineering.";

interface SportsSearch {
  tab?: string | undefined;
}

export const Route = createFileRoute("/sports")({
  validateSearch: (search: Record<string, unknown>): SportsSearch => {
    return {
      tab: search["tab"] as string | undefined,
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
  component: SportsPage,
});

const SPORTS_TABS: SubNavTab[] = [
  { id: "activities", label: "Sports Activities" },
  { id: "facilities", label: "Sports Facilities" },
  { id: "fitness", label: "Fitness Center" },
];

const sportsObjectives = [
  "To provide an opportunity through talent identification",
  "To develop identified talent to excel at inter collegiate, University, inter-university levels",
  "To bring a unique culture throughout the MSAJCE in order to promote physical fitness, talent identification, competitiveness and brotherhood",
  "To instill lifelong values of sportsmanship, emotional resilience, team leadership, and ethical athletic conduct",
  "To provide structured athletic training, modern sports infrastructure, and expert physical education mentoring for all students",
];

const facultyLeadership = [
  {
    role: "Director of Physical Education",
    name: "Dr. K. P. SANTHOSH NATHAN",
    qualification: "B.P.E.S., B.P.Ed., M.P.Ed., M.Phil., Ph.D",
    email: "ped.santhosh@msajce-edu.in",
  },
  {
    role: "Assistant Director of Physical Education",
    name: "Mr. M.Janakiraman",
    qualification: "B.sc., M.P.Ed., NSNIS(Cricket)",
    email: "",
  },
];

const sportsDisciplines = [
  { sno: 1, name: "BASKETBALL", type: "Outdoor Court", surface: "Regulation Hardcourt" },
  { sno: 2, name: "FOOTBALL", type: "Full-Size Field", surface: "Natural Turf Pitch" },
  { sno: 3, name: "CRICKET & CRICKET NETS", type: "Field & Practice Nets", surface: "Turf Practice Wickets" },
  { sno: 4, name: "YOGA", type: "Indoor Wellness", surface: "Dedicated Meditation Hall" },
  { sno: 5, name: "KABADDI", type: "Outdoor Court", surface: "Standard Mat / Clay Court" },
  { sno: 6, name: "VOLLEYBALL", type: "Outdoor Court", surface: "Standard Sand / Clay Court" },
  { sno: 7, name: "TABLE TENNIS", type: "Indoor Arena", surface: "Tournament TT Boards" },
  { sno: 8, name: "CARROM", type: "Indoor Recreation", surface: "Standard Carrom Boards" },
  { sno: 9, name: "CHESS", type: "Indoor Strategy", surface: "Tournament Chess Sets" },
  { sno: 10, name: "TRACK & FIELD", type: "Athletic Ground", surface: "400m Running Track" },
  { sno: 11, name: "KHO KHO", type: "Outdoor Court", surface: "Standard Regulation Arena" },
];

const gymEquipmentList = [
  { sno: 1, name: "Multi Gym", category: "Full-Body Strength Station" },
  { sno: 2, name: "Leg Extension", category: "Lower Body Isolation" },
  { sno: 3, name: "Preacher Curl Bench", category: "Biceps Development" },
  { sno: 4, name: "Multi Adjustable Bench Press", category: "Chest & Upper Body" },
  { sno: 5, name: "Cable cross over machine", category: "Cable Functional Training" },
  { sno: 6, name: "Sitting and Standing Twister", category: "Core & Oblique Rotation" },
  { sno: 7, name: "Leg Press", category: "Quadriceps & Glute Power" },
  { sno: 8, name: "Spin Bike", category: "Cardiovascular Endurance" },
  { sno: 9, name: "Round Dumbbells (Rubberised)", category: "Free Weights & Dumbbells" },
  { sno: 10, name: "Rubber Weight Plates", category: "Olympic Calibrated Plates" },
  { sno: 11, name: "Olympic Curl Bar", category: "EZ Barbell Conditioning" },
  { sno: 12, name: "Olympic Weight lifting Bar", category: "Olympic Lifting Barbell" },
  { sno: 13, name: "Chrome Push ub Bar", category: "Bodyweight Push-Up Training" },
  { sno: 14, name: "Triceps rope", category: "Cable Attachment" },
];

const annualEvents = [
  {
    sno: 1,
    event: "Participation in Anna University, South Zone and Invitation Tournaments.",
    scope: "Inter-Collegiate & University Circuit",
  },
  {
    sno: 2,
    event: "Conducting Anna University Zonal and Inter-Zonal Tournaments",
    scope: "Zonal Tournament Host",
  },
  {
    sno: 3,
    event: "Conducting Annual Sports Day",
    scope: "Intra-College Flagship Athletic Meet",
  },
  {
    sno: 4,
    event: "Conducting Mohamed Sathak Trophy-Football and BSM Trophy-cricket",
    scope: "State-Level Invitational Trophies",
  },
  {
    sno: 5,
    event: "Conducting Fit India Cyclothon",
    scope: "National Fitness Mission",
  },
];

export function SportsPage() {
  const { tab } = Route.useSearch();
  const { setHeaderHidden } = useHeader();
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (tab === "leadership" || tab === "overview") return "activities";
    if (tab === "events") return "facilities";
    if (tab && SPORTS_TABS.some((t) => t.id === tab)) return tab;
    return "activities";
  });

  useEffect(() => {
    if (tab) {
      if (tab === "leadership" || tab === "overview") setActiveSection("activities");
      else if (tab === "events") setActiveSection("facilities");
      else if (SPORTS_TABS.some((t) => t.id === tab) && tab !== activeSection) {
        setActiveSection(tab);
      }
    }
  }, [tab]);

  const scrollToContent = () => {
    const el = document.getElementById("sports-main-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "activities") {
      setHeaderHidden(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => {
        scrollToContent();
      }, 40);
    }
  };

  const handleTitleClick = () => {
    setHeaderHidden(false);
    setActiveSection("activities");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentTabLabel = SPORTS_TABS.find((t) => t.id === activeSection)?.label ?? "Sports Activities";

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary Navigation at Top of Main */}
      <SecondarySubNav
        title="SPORTS & FITNESS"
        tabs={SPORTS_TABS}
        activeTab={activeSection}
        onSelectTab={handleSelectSection}
        onTitleClick={handleTitleClick}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 2. HERO BANNER: Modeled Exactly on Placement / Hostel Hero Standard       */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/why-join/sports.jpg"
              alt="MSAJCE Sports and Physical Education"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Bottom-Docked Theme-Adaptive Frame with Dynamic Tab Title */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTabLabel}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none"
                >
                  {currentTabLabel}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Tab Content Target Anchor */}
        <div id="sports-main-content" className="scroll-mt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* ================================================================= */}
              {/* TAB 1: SPORTS ACTIVITIES (Narrative, Objectives, Leadership, Arena)*/}
              {/* ================================================================= */}
              {activeSection === "activities" && (
                <div className="w-full">
                  {/* Section 1 (White / #121214): Narrative Overview */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          SPORTS ACTIVITIES & PHYSICAL EDUCATION
                        </h2>
                      </div>

                      <div className="space-y-6 w-full">
                        <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                          Sports activities are given utmost importance as it makes the student physically strong and increase stamina and strength. MSAJCE have created necessary sports and games facilities for the students to strengthen physical education. Since sports and games play an integral part in molding and refining the character of an individual. Studies have shown that exercise and sport activities increase the blood flow to the brain and help in increased concentration, stimulate creativity, develop better problem solving methods and enable quick learning methods .
                        </p>

                        {/* Signature Accent Callout */}
                        <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                          <p className="w-full text-sm sm:text-base md:text-lg text-foreground font-libre font-medium leading-relaxed italic">
                            “Sports and games play an integral part in molding and refining the character of an individual, stimulating creativity and developing quick learning methods.”
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-[#F3F3F2] dark:fill-[#18181B]"
                      />
                    </svg>
                  </div>

                  {/* Section 2 (#F3F3F2 / #18181B): SEPARATE SECTION FOR OBJECTIVES */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          OBJECTIVES OF PHYSICAL EDUCATION
                        </h2>
                      </div>

                      {/* 5 Objectives: One Line Each with Round Points Style Design (Line-free) */}
                      <div className="w-full space-y-2.5 sm:space-y-3">
                        {sportsObjectives.map((obj, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3.5 sm:gap-4 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-foreground/[0.03] transition-colors"
                          >
                            <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm shrink-0">
                              {idx + 1}
                            </div>
                            <p className="w-full font-libre text-sm sm:text-base text-foreground font-medium leading-relaxed">
                              {obj}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 2 -> 3 (#F3F3F2 -> White) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-white dark:fill-[#121214]"
                      />
                    </svg>
                  </div>

                  {/* Section 3 (White / #121214): Directorate of Physical Education */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          DIRECTORATE OF PHYSICAL EDUCATION
                        </h2>
                      </div>

                      {/* Standard Minimal DataGrid Table */}
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                  Portfolio / Designation
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/4">
                                  Faculty Name
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                  Qualification
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 text-right">
                                  Contact
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {facultyLeadership.map((item) => (
                                <tr key={item.role} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {item.role}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {item.name}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground text-xs sm:text-sm">
                                    {item.qualification}
                                  </td>
                                  <td className="py-3.5 px-4 text-right font-libre text-xs sm:text-sm whitespace-nowrap">
                                    {item.email ? (
                                      <a
                                        href={`mailto:${item.email}`}
                                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-oswald font-bold uppercase tracking-wider text-primary border border-primary/30 hover:bg-primary hover:text-white transition-colors rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs"
                                      >
                                        <Mail size={12} />
                                        {item.email}
                                      </a>
                                    ) : (
                                      <span className="text-foreground/40">—</span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider 3 -> 4 (White -> #F3F3F2) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-[#F3F3F2] dark:fill-[#18181B]"
                      />
                    </svg>
                  </div>

                  {/* Section 4 (#F3F3F2 / #18181B): Unique 4-Column Athletic Gallery Grid (ZERO TEXT OVERLAYS) */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          ATHLETIC FACILITIES & CAMPUS ARENA
                        </h2>
                      </div>

                      {/* Distinct 4-Column Athletic Gallery Grid without text overlays */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {/* Sports Grid Item 1: Football */}
                        <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
                            alt="Football Turf Pitch"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
                            }}
                          />
                        </div>

                        {/* Sports Grid Item 2: Cricket */}
                        <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
                            alt="Cricket Ground and Nets"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
                            }}
                          />
                        </div>

                        {/* Sports Grid Item 3: Basketball */}
                        <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
                            alt="Basketball Court"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
                            }}
                          />
                        </div>

                        {/* Sports Grid Item 4: Indoor Athletics / Track */}
                        <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
                            alt="Track and Field Arena"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ================================================================= */}
              {/* TAB 2: SPORTS FACILITIES (Overview, Arenas & Annual Tournaments)   */}
              {/* ================================================================= */}
              {activeSection === "facilities" && (
                <div className="w-full">
                  {/* Section 1 (White / #121214): Overview & Sports Quota Scholarship */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          SPORTS FACILITIES & ATHLETIC INFRASTRUCTURE
                        </h2>
                      </div>

                      <div className="space-y-4 w-full">
                        <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                          Mohamed Sathak A.J. College of Engineering provides an expansive athletic ecosystem designed to nurture talent, physical vigor, and team spirit across the student body. The campus features dedicated outdoor courts, extensive playing grounds, and dedicated indoor arenas supporting a multitude of sporting disciplines ranging from basketball and cricket to athletics and martial arts. The college actively encourages passionate sports enthusiasts through admission under the Sports Quota alongside comprehensive merit scholarships for district, state, and national participants. Supported by qualified physical directors and continuous tournament preparation, MSAJCE empowers students to balance competitive athletic rigor with academic distinction.
                        </p>
                      </div>

                      {/* Sports Quota Subheading and Highlight Callout */}
                      <div className="space-y-3 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          SPORTS QUOTA SCHOLARSHIP
                        </h3>
                        <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                          <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                            The college encourages SPORTS ENTHUSIASTS by rendering admission through Sports quota and also by offering scholarship to District, State and National level participants. Our college has excellent infrastructure required for development of sports skills in students such as basketball, football, cricket, track & field, and indoor disciplines.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-[#F3F3F2] dark:fill-[#18181B]"
                      />
                    </svg>
                  </div>

                  {/* Section 2 (#F3F3F2 / #18181B): Campus Sports Arenas & Disciplines */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          CAMPUS SPORTS ARENAS & SPECIFICATIONS
                        </h2>
                      </div>

                      {/* Official Publications DataGrid Table Standard */}
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                  Sports / Games Facility
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                  Facility Type
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                  Infrastructure Available
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {sportsDisciplines.map((item) => (
                                <tr key={item.name} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {item.sno}
                                  </td>
                                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {item.name}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground">
                                    {item.type}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground">
                                    {item.surface}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider 2 -> 3 (#F3F3F2 -> White) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-white dark:fill-[#121214]"
                      />
                    </svg>
                  </div>

                  {/* Section 3 (White / #121214): Annual Sports Activities */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          ANNUAL SPORTS ACTIVITIES & TOURNAMENTS
                        </h2>
                      </div>

                      {/* Official Publications DataGrid Table Standard */}
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Annual Sports Activity / Tournament
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 text-right">
                                  Scope / Level
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {annualEvents.map((item) => (
                                <tr key={item.event} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {item.sno}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground text-xs sm:text-sm">
                                    {item.event}
                                  </td>
                                  <td className="py-3.5 px-4 text-right font-oswald font-bold uppercase text-foreground text-xs whitespace-nowrap">
                                    {item.scope}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>
                </div>
              )}

              {/* ================================================================= */}
              {/* TAB 3: FITNESS CENTER (Overview, Gymnasium Equipments & Bays)     */}
              {/* ================================================================= */}
              {activeSection === "fitness" && (
                <div className="w-full">
                  {/* Section 1 (White / #121214): Fitness Center Overview */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          FITNESS CENTER & MODERN GYMNASIUM
                        </h2>
                      </div>

                      <div className="space-y-6 w-full">
                        <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                          The Fitness Center at Mohamed Sathak A.J. College of Engineering is a modern strength and conditioning hub engineered to maintain the physical well-being of students and staff. Well laid out across a spacious, well-ventilated indoor arena, the gymnasium features an extensive array of cutting-edge weight-training stations, ergonomic cardio equipment, and dedicated free-weight bays. To actively encourage bodybuilders, powerlifters, and daily fitness enthusiasts, the college provides high-standard machinery calibrated for safety, progression, and stamina building. Daily access under trained physical education supervision ensures every student can cultivate healthy daily routines alongside demanding technical coursework.
                        </p>

                        {/* Callout Quote */}
                        <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                          <p className="w-full text-sm sm:text-base md:text-lg text-foreground font-libre font-medium leading-relaxed italic">
                            “There is a well equipped gymnasium for all the students and faculties with the latest equipment in the well laid out in in-door Gym. To encourage the Weight lifters, Body builders and Fitness seekers, the following equipments for the above purpose are made available .”
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-[#F3F3F2] dark:fill-[#18181B]"
                      />
                    </svg>
                  </div>

                  {/* Section 2 (#F3F3F2 / #18181B): Equipment DataGrid Table */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          LIST OF GYMNASIUM APPARATUS & EQUIPMENT
                        </h2>
                      </div>

                      {/* Official Publications DataGrid Table Standard */}
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Equipment Name
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Functional Purpose & Category
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {gymEquipmentList.map((eq) => (
                                <tr key={eq.sno} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {eq.sno}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {eq.name}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground">
                                    {eq.category}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider 2 -> 3 (#F3F3F2 -> White) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-white dark:fill-[#121214]"
                      />
                    </svg>
                  </div>

                  {/* Section 3 (White / #121214): Fitness Showcase Gallery (ZERO TEXT OVERLAYS) */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        INDOOR GYMNASIUM APPARATUS & WORKOUT BAYS
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                            alt="Fitness Center Weightlifting Zone"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
                            }}
                          />
                        </div>

                        <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
                            alt="Cardio and Spin Stations"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
