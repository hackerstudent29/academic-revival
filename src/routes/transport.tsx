import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { Phone, FileText, ExternalLink, Clock } from "lucide-react";

const title = "College Bus Facility — Mohamed Sathak A.J. College of Engineering, Chennai";
const description =
  "Comprehensive college bus facilities, routes covering Chennai, Chengalpattu, Kanchipuram, and Thiruvallur districts, MTC bus connectivity, and transport committee at MSAJCE.";

interface TransportSearch {
  tab?: string | undefined;
}

export const Route = createFileRoute("/transport")({
  validateSearch: (search: Record<string, unknown>): TransportSearch => {
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
  component: TransportPage,
});

const TRANSPORT_TABS: SubNavTab[] = [
  { id: "overview", label: "Transport" },
  { id: "college-routes", label: "College Bus Routes" },
  { id: "mtc-routes", label: "MTC Bus Routes" },
  { id: "committee", label: "Transport Committee" },
];

const committeeMembers = [
  {
    role: "Transport Convener",
    name: "Dr. K. P. SANTHOSH NATHAN",
    mobile: "98408 86992",
  },
  {
    role: "Asst. Transport Convener",
    name: "Mr. A. ABDUL GAFOOR",
    mobile: "99403 19629",
  },
];

const mtcBusRoutes = [
  { sno: 1, routeNo: "19", start: "T. Nagar", end: "Thiruporur", via: "OMR, Madhiya Kailash, SRP", frequency: "Daily" },
  { sno: 2, routeNo: "519", start: "T. Nagar", end: "Thiruporur", via: "Saidapet, Adyar, SRP", frequency: "Daily" },
  { sno: 3, routeNo: "221H", start: "Central", end: "Thiruporur", via: "Anna Salai, Saidapet, SRP", frequency: "Daily" },
  { sno: 4, routeNo: "102X", start: "Broadway", end: "Thiruporur", via: "Marina, Adyar, OMR", frequency: "Daily" },
  { sno: 5, routeNo: "102S", start: "Broadway", end: "Sipcot", via: "Marina, Adyar, OMR", frequency: "Daily" },
  { sno: 6, routeNo: "102", start: "Broadway", end: "Kelambakkam", via: "Marina, Adyar, OMR", frequency: "Daily" },
  { sno: 7, routeNo: "B19", start: "Shollinganallur", end: "Kelambakkam", via: "Sipcot, OMR", frequency: "Daily" },
  { sno: 8, routeNo: "570", start: "CMBT", end: "Kelambakkam", via: "Vadapalani, Velachery, SRP", frequency: "Daily" },
  { sno: 9, routeNo: "570S", start: "CMBT", end: "Sipcot", via: "Vadapalani, Velachery, SRP", frequency: "Daily" },
  { sno: 10, routeNo: "105", start: "Tambaram", end: "Siruseri", via: "Thalambur", frequency: "Daily" },
];

const collegeBusRoutes = [
  { sno: 1, route: "AR 3 - UTHIRAMERUR", time: "5.50 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/AR3.pdf" },
  { sno: 2, route: "AR 4 - MOOLAKADAI", time: "6.10 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/AR4.pdf" },
  { sno: 3, route: "AR 5 - MMDA SCHOOL", time: "6.15 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/AR5.pdf" },
  { sno: 4, route: "AR 6 - ICF", time: "6.15 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/AR6.pdf" },
  { sno: 5, route: "AR 7 - CHUNAMBEDU", time: "5.25 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/AR7.pdf" },
  { sno: 6, route: "AR 8 - MANJAMBAKKAM", time: "5.50 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/AR8.pdf" },
  { sno: 7, route: "AR 9 - ENNORE", time: "6.15 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/AR9.pdf" },
  { sno: 8, route: "AR 10 - PORUR", time: "6.25 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/AR10.pdf" },
  { sno: 9, route: "R 22 - NEMILICHERY", time: "6.00 AM", pdfUrl: "https://www.msajce-edu.in/images/transport/R22.pdf" },
];

export function TransportPage() {
  const { tab } = Route.useSearch();
  const [activeSection, setActiveSection] = useState<string>(() => {
    return tab || "overview";
  });

  useEffect(() => {
    if (tab && TRANSPORT_TABS.some((t) => t.id === tab) && tab !== activeSection) {
      setActiveSection(tab);
    }
  }, [tab]);

  const scrollToContent = () => {
    const el = document.getElementById("transport-main-content");
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

  const currentTabLabel = TRANSPORT_TABS.find((t) => t.id === activeSection)?.label ?? "Transport";

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary Navigation at Top of Main */}
      <SecondarySubNav
        title="TRANSPORT"
        tabs={TRANSPORT_TABS}
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
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80"
              alt="MSAJCE College Bus Facility"
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
        <div id="transport-main-content" className="scroll-mt-32">
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
              {/* TAB 1: OVERVIEW (College Bus Facility)                            */}
              {/* ================================================================= */}
              {activeSection === "overview" && (
                <div className="w-full">
                  {/* Section A (White / #121214): Overview Narrative */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          TRANSPORT OVERVIEW
                        </h2>
                      </div>

                      <div className="space-y-6 w-full">
                        <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                          The College is easily accessible from Chennai Central Railway Station, Tambaram Railway Station and CMDA Bus station by the state operated transport service. In addition, The College provides its own transportation for students and staff residing in and around the campus. The Institute has 22 buses, One Tata ACE, One Ambulance for the benefit of students and the staff. The transport facility is available from various places in Chennai, Chengalpattu, Kanchipuram and Thiruvallur districts to the institute on all working days. The bus facilities are being utilized for local social service activities, Sports, NCC/ NSS activities, Placement and Training activities, industrial visits and educational trips. . Our transport facilities ensure that our students and staff are able to reach the college in time with utmost care and ease.A transport committee, headed by a Convener, is formed to take care of the smooth operation of buses. The staff in-charge of the buses (one teaching and one supporting staff) ensure the smooth functioning of the buses. The Transport committee meets once in Six months and the Principal and the staff in-charge of the buses attend the meeting.
                        </p>

                        {/* Signature Accent Callout */}
                        <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                          <p className="w-full text-sm sm:text-base md:text-lg text-foreground font-libre font-medium leading-relaxed italic">
                            “Our transport facilities ensure that our students and staff are able to reach the college in time with utmost care and ease.”
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

                  {/* Section B (#F3F3F2 / #18181B): Transport Fleet Gallery Mosaic */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          FLEET & TRANSIT CONNECTIVITY
                        </h2>
                      </div>

                      {/* Unique Asymmetric Fleet Gallery Mosaic */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {/* Large Featured Transit Card (Spans 2 columns) */}
                        <div className="md:col-span-2 relative overflow-hidden rounded-lg aspect-[16/9] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                            alt="College Fleet Service"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
                            }}
                          />
                        </div>

                        {/* Side Card 1 (Vertical) */}
                        <div className="relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-auto md:h-full bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80"
                            alt="Highway Connectivity"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                            }}
                          />
                        </div>

                        {/* Bottom Row Card 1 */}
                        <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
                            alt="OMR Express Corridor"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/procedure_hero.jpg";
                            }}
                          />
                        </div>

                        {/* Bottom Row Card 2 */}
                        <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=800&q=80"
                            alt="Safe Campus Transit"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                            }}
                          />
                        </div>

                        {/* Bottom Row Card 3 */}
                        <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-stone-200 dark:bg-neutral-800">
                          <img
                            src="/images/procedure_hero.jpg"
                            alt="MSAJCE Campus Transit Terminal"
                            className="w-full h-full object-cover select-none pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ================================================================= */}
              {/* TAB 2: COLLEGE BUS ROUTES                                         */}
              {/* ================================================================= */}
              {activeSection === "college-routes" && (
                <div className="w-full">
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          OUR COLLEGE BUS ROUTE AS FOLLOWS
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
                                  Bus Route
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Time
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 text-right">
                                  Route Schedule
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {collegeBusRoutes.map((route) => (
                                <tr key={route.sno} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {route.sno}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-xs sm:text-sm">
                                    {route.route}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground whitespace-nowrap">
                                    <div className="inline-flex items-center gap-1.5 font-libre">
                                      <Clock size={14} className="text-primary shrink-0" />
                                      {route.time}
                                    </div>
                                  </td>
                                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                    <a
                                      href={route.pdfUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider text-primary border border-primary/30 hover:bg-primary hover:text-white transition-colors rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs"
                                    >
                                      <FileText size={13} />
                                      View Details
                                      <ExternalLink size={12} className="opacity-70" />
                                    </a>
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
              {/* TAB 3: MTC BUS ROUTES                                             */}
              {/* ================================================================= */}
              {activeSection === "mtc-routes" && (
                <div className="w-full">
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          MTC BUS PASSING THROUGH OUR COLLEGE FROM DIFFERENT LOCATION
                        </h2>
                      </div>

                      {/* Official Publications DataGrid Table Standard */}
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  MTC Bus Route No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Starting Point
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Ending Point
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100">
                                  Via
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 text-center">
                                  Frequency
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {mtcBusRoutes.map((row) => (
                                <tr key={row.sno} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-oswald font-bold text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {row.sno}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-black uppercase text-primary text-sm whitespace-nowrap">
                                    {row.routeNo}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground whitespace-nowrap">
                                    {row.start}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground whitespace-nowrap">
                                    {row.end}
                                  </td>
                                  <td className="py-3.5 px-4 font-medium text-foreground">
                                    {row.via}
                                  </td>
                                  <td className="py-3.5 px-4 text-center font-oswald font-bold uppercase text-foreground text-xs whitespace-nowrap">
                                    {row.frequency}
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
              {/* TAB 4: TRANSPORT COMMITTEE                                        */}
              {/* ================================================================= */}
              {activeSection === "committee" && (
                <div className="w-full">
                  {/* Section A (White / #121214): Committee Overview */}
                  <section className="bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          TRANSPORT COMMITTEE
                        </h2>
                      </div>

                      <div className="space-y-6 w-full">
                        <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                          A transport committee, headed by a Convener, is formed to take care of the smooth operation of buses. The staff in-charge of the buses (one teaching and one supporting staff) ensure the smooth functioning of the buses. The Transport committee meets once in Six months and the Principal and the staff in-charge of the buses attend the meeting.
                        </p>
                      </div>

                      {/* Official Publications DataGrid Table Standard */}
                      <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          COMMITTEE MEMBERS & CONTACT
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[600px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                    Role / Portfolio
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                    Members
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-foreground dark:text-neutral-100 w-1/3">
                                    Mobile
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {committeeMembers.map((member) => (
                                  <tr key={member.name} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 font-bold font-oswald uppercase text-primary text-xs sm:text-sm whitespace-nowrap">
                                      {member.role}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm whitespace-nowrap">
                                      {member.name}
                                    </td>
                                    <td className="py-3.5 px-4 font-medium text-foreground whitespace-nowrap">
                                      <a
                                        href={`tel:${member.mobile.replace(/\s+/g, "")}`}
                                        className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                                      >
                                        <Phone size={14} className="text-primary shrink-0" />
                                        {member.mobile}
                                      </a>
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

                  {/* Section B (#F3F3F2 / #18181B): Operational Guidelines */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors pb-16 sm:pb-24">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                        OPERATIONAL MONITORING
                      </h2>
                      <div className="space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p className="w-full">
                          The staff in-charge of the buses (one teaching and one supporting staff) ensure the smooth functioning of the buses. The Transport committee meets once in Six months and the Principal and the staff in-charge of the buses attend the meeting.
                        </p>
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
