import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";

const title = "Hostel Facilities — M.S.A.J. College of Engineering, Chennai";
const description =
  "Comprehensive hostel facilities, boys and girls residence halls, mess timings, rules, games and study hours, and cafeteria at Mohamed Sathak A.J. College of Engineering.";

interface HostelSearch {
  tab?: string | undefined;
}

export const Route = createFileRoute("/hostel")({
  validateSearch: (search: Record<string, unknown>): HostelSearch => {
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
  component: HostelPage,
});

const HOSTEL_TABS: SubNavTab[] = [
  { id: "overview", label: "Overview" },
  { id: "rules", label: "Rules" },
  { id: "dining", label: "Dining Hall" },
  { id: "cafeteria", label: "Cafeteria" },
];

const hostelCapacityRows = [
  {
    parameter: "Location",
    boys: "Inside the Campus",
    girls: "at Sholinganallur",
  },
  {
    parameter: "No. of Blocks",
    boys: "3",
    girls: "1",
  },
  {
    parameter: "No. of Rooms (Non-AC)",
    boys: "233",
    girls: "71",
  },
  {
    parameter: "No. of Rooms (AC)",
    boys: "6",
    girls: "—",
  },
  {
    parameter: "No. of Persons Accommodated per Room",
    boys: "2",
    girls: "3",
  },
];

const hostelRules = [
  "Students must occupy the rooms allotted to them by the Warden (Principal)",
  "Students should refrain from anti-social and undesirable activities such as consumption of alcohol, tobacco, gambling, ragging etc",
  "Students are responsible for the cleanliness of their rooms.",
  "No student will be allowed to leave the hostel based on a phone call.",
  "Parents are requested to give a list of authorized visitors / local guardians. Visitors not mentioned in the list will not be permitted to visit the students in the hostel.",
  "Students will be permitted to go home only if the college is closed continuously for five days or more",
  "Any student wishing to attend a function in the house, marriage or any other ceremony will be permitted to go only if the request is made by the parents to the Principal",
  "Visitors are allowed on holidays from 11.00 A.M. to 6.00 P.M",
];

const messTimings = [
  { meal: "Break Fast", workingDays: "07:00 A.M. to 08:00 A.M.", holidays: "07:30 A.M. to 09:00 A.M." },
  { meal: "Lunch", workingDays: "01:00 P.M. to 01:45 P.M.", holidays: "12:30 P.M. to 02:00 P.M." },
  { meal: "Dinner", workingDays: "07:00 P.M. to 08:30 P.M.", holidays: "07:00 P.M. to 09:00 P.M." },
];

const canteenLeadership = [
  { role: "President", name: "Dr.K S Srinivasan", designation: "Principal" },
  { role: "Officer In-charge", name: "Dr.S.Vijayakumar", designation: "Chief Organization Officer" },
  { role: "Manager", name: "Mr.Arun", designation: "Manager" },
  { role: "Head - Student Affairs", name: "Dr. K.P. Santhosh Nathan", designation: "Head - Student Affairs" },
];

const canteenStaffPairs = [
  { member: "Dr.S Vijayakumar", staff: "Mr.Abdul Rashid - Cook" },
  { member: "Mr.Arun", staff: "Mr.Kannan - Asst Cook" },
  { member: "Mr.A.Abdul Gafoor", staff: "Mr.Shankar - Asst Cook" },
];

export function HostelPage() {
  const { tab } = Route.useSearch();
  const [activeSection, setActiveSection] = useState<string>(() => {
    return tab || "overview";
  });

  useEffect(() => {
    if (tab && HOSTEL_TABS.some((t) => t.id === tab) && tab !== activeSection) {
      setActiveSection(tab);
    }
  }, [tab]);

  const scrollToContent = () => {
    const el = document.getElementById("hostel-main-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId !== "overview") {
      setTimeout(() => {
        scrollToContent();
      }, 40);
    }
  };

  const handleTitleClick = () => {
    setActiveSection("overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentTabLabel = HOSTEL_TABS.find((t) => t.id === activeSection)?.label ?? "Hostel Facilities";

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary Navigation at Top of Main (Exact Placement Page Layout) */}
      <SecondarySubNav
        title="HOSTEL FACILITIES"
        tabs={HOSTEL_TABS}
        activeTab={activeSection}
        onSelectTab={handleSelectSection}
        onTitleClick={handleTitleClick}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 2. HERO BANNER: Modeled Exactly on Placement Page Campus Placements Tab   */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/procedure_hero.jpg"
              alt="MSAJCE Hostel Facilities"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
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

        {/* Tab Content Target Anchor (Auto-scrolled on tab click) */}
        <div id="hostel-main-content" className="scroll-mt-32">
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
              {/* TAB 1: OVERVIEW (Hostel Capacity & Residences)                   */}
              {/* ================================================================= */}
              {activeSection === "overview" && (
                <div className="w-full">
                  {/* Section A (White / #121214): Hostel Facilities & Capacity Table */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        OVERVIEW
                      </h2>

                      {/* Publications-Style DataGrid Table Component */}
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-2/5">
                                  Parameter / Category
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Boys Hostel
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Girls Hostel
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {hostelCapacityRows.map((row) => (
                                <tr key={row.parameter} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {row.parameter}
                                  </td>
                                  <td className="py-3.5 px-4 text-foreground font-medium">
                                    {row.boys}
                                  </td>
                                  <td className="py-3.5 px-4 text-foreground font-medium">
                                    {row.girls}
                                  </td>
                                </tr>
                              ))}
                              <tr className="hover:bg-foreground/[0.02] transition-colors">
                                <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                  Facility Available
                                </td>
                                <td className="py-3.5 px-4 text-foreground font-medium" colSpan={2}>
                                  Cot, Chair, Lamp, Fan and Water Heater. WiFi Facility and TV Hall
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
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

                  {/* Section B (#F3F3F2 / #18181B): Boys Hostel Narrative */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        BOYS HOSTEL
                      </h2>
                      <div className="space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          A home away from home provided for both boys and girls separately accommodating 480 boy students and 210 girl students. All the rooms are well furnished with modern amenities such as cot, mattress with pillows, bed-sprds, individual cup-boards, chair-table with lamp and wall hangers. Each room accommodate only 2 persons.
                        </p>
                        <p>
                          A hygienic canteen is available for dining within the premises. An entertainment hall with LCD- TV, indoor game facilities, reading room with news papers and popular magazines are available. The Hostel has land-line telephone and Wi-Fi internet access.
                        </p>
                        <p>
                          Further, for the benefit of the hostellers, the College Main Library and the Computer Centre are kept open till 7:00 PM to all the above facilities
                        </p>
                        <p>
                          We are sure that the students will feel more at home and concentrate on their studies, facilitated by the serene atmosphere, filled with greenery, surrounding the Hostel.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider B -> A */}
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

                  {/* Section A (White / #121214): Girls Hostel Narrative */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        GIRLS HOSTEL
                      </h2>
                      <div className="space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p className="w-full">
                          The MSAJCE Girls Hostel is situated at Sholinganallur - 5 KM away from the campus. This hostel is located at main posh area with safety and security. Everything is available at the entrance of the Hostel. There are about 71 rooms, which can accommodate 3 girl students per room. All the rooms are well furnished with modern amenities such as cot, mattress with pillows, bed-spreads, individual cup-boards, chair-table with lamp for study purpose and wall hangers. Each room is provided with bath and toilet facilities, wash basin and mirror. An entertainment hall with LCD- TV, indoor game facilities, reading room with News Papers and popular magazines are some of the distinct additions. The Hostel is connected with communication facilities such as land-line telephone and Wi-Fi internet access.
                        </p>
                        <p className="w-full">
                          Further, for the benefit of the hostellers, Library facility and the Computer facility made available till 9:00 pm, which can be effectively utilized to widen their knowledge and skill.
                        </p>
                        <p className="w-full">
                          With all the above facilities, we are sure that the girls will feel more at home and concentrate on their studies, facilitated by the serene atmosphere, filled with greenery, surrounding the Hostel.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
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

                  {/* Section B (#F3F3F2 / #18181B): Dynamic Asymmetrical Bento Gallery Grid */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          HOSTEL LIFE & LIVING ENVIRONMENT
                        </h2>
                      </div>

                      {/* Unique Bento Gallery Grid with Differing Card Proportions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]">
                        {/* Item 1: Large Anchor (spans 7 cols, 2 rows) */}
                        <div className="lg:col-span-7 lg:row-span-2 relative overflow-hidden rounded-lg bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
                            alt="Furnished Residence Rooms"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
                            }}
                          />
                        </div>

                        {/* Item 2: Landscape Top (spans 5 cols, 1 row) */}
                        <div className="lg:col-span-5 lg:row-span-1 relative overflow-hidden rounded-lg bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80"
                            alt="Hygienic Dining Space"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                            }}
                          />
                        </div>

                        {/* Item 3: Secondary Card (spans 5 cols, 1 row) */}
                        <div className="lg:col-span-5 lg:row-span-1 relative overflow-hidden rounded-lg bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                            alt="Quiet Study Desks"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/library_reading_hall_real.jpg";
                            }}
                          />
                        </div>

                        {/* Item 4: Bottom Wide Card (spans 6 cols, 1 row) */}
                        <div className="lg:col-span-6 lg:row-span-1 relative overflow-hidden rounded-lg bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                            alt="Serene Green Surroundings"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
                            }}
                          />
                        </div>

                        {/* Item 5: Bottom Wide Card (spans 6 cols, 1 row) */}
                        <div className="lg:col-span-6 lg:row-span-1 relative overflow-hidden rounded-lg bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                            alt="Recreation and TV Hall"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ================================================================= */}
              {/* TAB 2: RULES                                                      */}
              {/* ================================================================= */}
              {activeSection === "rules" && (
                <div className="w-full">
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        RULES
                      </h2>

                      {/* Clean open list with zero unwanted divider lines */}
                      <div className="w-full space-y-2.5 sm:space-y-3">
                        {hostelRules.map((rule, idx) => (
                          <div
                            key={idx}
                            className="py-2.5 sm:py-3 px-3 sm:px-4 flex items-start gap-4 rounded-lg hover:bg-foreground/[0.03] transition-colors"
                          >
                            <span className="shrink-0 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5">
                              {idx + 1}
                            </span>
                            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed pt-0.5">
                              {rule}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ================================================================= */}
              {/* TAB 3: DINING HALL                                                */}
              {/* ================================================================= */}
              {activeSection === "dining" && (
                <div className="w-full">
                  {/* Section A (White / #121214): Dining Hall & Mess Timings */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
                      <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          DINING HALL
                        </h2>
                        <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                          Hostel Mess is run by the Management through private contractor under the guidance of the Principal and Administrative officer. Vegetarian and Non-Vegetarian food is served in the hostel. Mess charges are collected on an annual basis at the time of admission. Parents and guests are allowed to consume food by paying for them. The mess hall is spacious with a dining hall and kitchen. Separate seating arrangements are made for both boys and girls..
                        </p>
                      </div>

                      {/* Mess Timings Publications-Style Table */}
                      <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          MESS TIMINGS
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-1/3">
                                    Mess Timings
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                    Working Days
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                    Holidays
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {messTimings.map((row) => (
                                  <tr key={row.meal} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm whitespace-nowrap">
                                      {row.meal}
                                    </td>
                                    <td className="py-3.5 px-4 font-medium text-foreground">
                                      {row.workingDays}
                                    </td>
                                    <td className="py-3.5 px-4 font-medium text-foreground">
                                      {row.holidays}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
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

                  {/* Section B (#F3F3F2 / #18181B): Games and TV Timings */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        GAMES AND TV TIMINGS
                      </h2>
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Working Days
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Holidays
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Study Hours - Morning
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Study Hours - Evening
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              <tr className="hover:bg-foreground/[0.02] transition-colors">
                                <td className="py-3.5 px-4 font-medium text-foreground">
                                  04:30 P.M. to 06:00 P.M.
                                </td>
                                <td className="py-3.5 px-4 font-medium text-foreground">
                                  09:00 A.M. to 12:00 P.M. <br />
                                  01:00 P.M. to 06:00 P.M.
                                </td>
                                <td className="py-3.5 px-4 font-medium text-foreground">
                                  05:00 A.M. to 07:00 A.M.
                                </td>
                                <td className="py-3.5 px-4 font-medium text-foreground">
                                  06:00 P.M. to 07:00 P.M. <br />
                                  09:00 P.M. to 10:30 P.M.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>
                </div>
              )}

              {/* ================================================================= */}
              {/* TAB 4: CAFETERIA (Redesigned Editorial Layout)                    */}
              {/* ================================================================= */}
              {activeSection === "cafeteria" && (
                <div className="w-full">
                  {/* Section A (White / #121214): Cafeteria Overview & Highlight */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          CAFETERIA
                        </h2>
                      </div>

                      <div className="space-y-6 w-full">
                        <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                          MSAJCE has the facility of a spacious and hygienic cafeteria that caters to the taste of all students. It can conveniently accommodate 100 students at a time. The cafeteria is provided with modern furniture, electrical cooking and storing facilities which provides delicious breakfast, lunch, snacks and beverages both for students and staff at reasonable rates. Separate space is available for students and staff .It is well maintained with effective service. It remains open on all working days from 8.00 am to 8.00 pm.
                        </p>

                        {/* Signature Accent Callout */}
                        <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                          <p className="w-full text-sm sm:text-base md:text-lg text-foreground font-libre font-medium leading-relaxed italic">
                            “Our canteen is effectively functioning to satisfy the needs of students and staff with a variety of delicious food items at affordable rates”
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
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

                  {/* Section B (#F3F3F2 / #18181B): Canteen Committee Tables */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-10">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          CANTEEN COMMITTEE
                        </h2>
                      </div>

                      {/* Leadership Table */}
                      <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          EXECUTIVE LEADERSHIP
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                    Role / Portfolio
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                    Name
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                    Designation
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {canteenLeadership.map((item) => (
                                  <tr key={item.role} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 font-bold font-oswald uppercase text-primary text-xs sm:text-sm whitespace-nowrap">
                                      {item.role}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm whitespace-nowrap">
                                      {item.name}
                                    </td>
                                    <td className="py-3.5 px-4 text-foreground font-medium">
                                      {item.designation}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
                      </div>

                      {/* Members & Staff Table */}
                      <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          MEMBERS &amp; STAFF
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/2">
                                    Members
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/2">
                                    Staff
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {canteenStaffPairs.map((pair, idx) => (
                                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 font-libre font-medium text-foreground">
                                      {pair.member}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre font-medium text-foreground">
                                      {pair.staff}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
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
