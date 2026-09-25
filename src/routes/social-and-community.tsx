import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { RedirectButton } from "@/components/ui/redirect-button";
import { FileText, Calendar, ExternalLink } from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1] as const;

const title = "Social & Community Initiatives — M.S.A.J. College of Engineering";
const description =
  "Comprehensive Social & Community engagement ecosystem at Mohamed Sathak A.J. College of Engineering, encompassing National Service Scheme (NSS), Youth Red Cross (YRC), Unnat Bharat Abhiyan (UBA), Ek Bharat Shreshtha Bharat (EBSB), and AICTE KARMA.";

interface SocialCommunitySearch {
  tab?: string | undefined;
}

export const Route = createFileRoute("/social-and-community")({
  validateSearch: (search: Record<string, unknown>): SocialCommunitySearch => {
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
  component: SocialAndCommunityPortal,
});

export const SOCIAL_COMMUNITY_TABS: SubNavTab[] = [
  { id: "nss", label: "National Service Scheme (NSS)" },
  { id: "yrc", label: "Youth Red Cross (YRC)" },
  { id: "uba", label: "Unnat Bharat Abhiyan (UBA)" },
  { id: "ebsb", label: "EBSB Initiative" },
  { id: "karma", label: "AICTE KARMA" },
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

// -------------------------------------------------------------
// DATA ARRAYS (Authentic User-Provided Content ONLY)
// -------------------------------------------------------------

// NSS DATA
const nssObjectives = [
  "To work for / among the people",
  "To enhance the knowledge of themselves and the community",
  "To apply their study to practical use in justifying at least some of the difficulties",
  "To gain skill in the exercise of democratic leadership",
  "To gain skills in program development to enable them for self-employment",
  "To bridge the gap between educated and uneducated",
  "To promote the will to serve the weaker section of the community",
];

const nssDuties = [
  "To establish rapport with the people in the project area",
  "Identify needs, problems & resources of the community",
  "Plan programs and carry out the plans",
  "Relate your learning and experience towards finding solutions to the problems identified",
];

const nssCodeOfConduct = [
  "All volunteers shall work under the guidance of the group leader nominated by the program officer",
  "They shall make themselves worthy of the confidence and cooperation of the group / community leadership",
  "They should scrupulously avoid entering into any controversial issues",
  "They shall keep day-to-day record of work in the prescribed diary",
  "It is obligatory on the part of every volunteer to wear the NSS badge while on work",
];

interface NationalDayItem {
  name: string;
  date: string;
  commemoration?: string;
}

const nationalDays: NationalDayItem[] = [
  { name: "Independence Day", date: "15th August" },
  { name: "Republic Day", date: "26th January" },
  { name: "Gandhi Jayanti", date: "2nd October" },
  { name: "NSS Day", date: "24th September" },
  { name: "National Youth Day", date: "12th January", commemoration: "Swami Vivekananda Birthday" },
  { name: "National Unity Day", date: "31st October", commemoration: "Sardar Vallabhbhai Patel Birthday" },
  { name: "Ambedkar Jayanti", date: "14th April" },
  { name: "International Yoga Day", date: "21st June" },
];

const nssEvents = [
  { sNo: 1, name: "National Youth Day", date: "12-01-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/National-Youth-Day.pdf" },
  { sNo: 2, name: "Republic Day", date: "26-01-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/Republic-Day.pdf" },
  { sNo: 3, name: "Martyr's Day", date: "30-01-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/Martyrs-Day.pdf" },
  { sNo: 4, name: "World Leprosy Day", date: "30-01-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/World-Leprosy-Day.pdf" },
  { sNo: 5, name: "National Deworming Day", date: "10-02-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/National-Deworming-Day.pdf" },
  { sNo: 6, name: "International Mother Tongue Day", date: "21-02-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/International-Mother-Tongue-Day.pdf" },
  { sNo: 7, name: "World TB Day", date: "24-03-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/World-TB-Day.pdf" },
  { sNo: 8, name: "Ambedkar Jayanthi", date: "14-04-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/Ambedkar-Jayanthi.pdf" },
  { sNo: 9, name: "International Yoga Day", date: "21-06-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/International-Yoga-Day.pdf" },
  { sNo: 10, name: "Independence Day", date: "15-08-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/Independence-Day.pdf" },
  { sNo: 11, name: "NSS Day", date: "24-09-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/NSS-Day.pdf" },
  { sNo: 12, name: "Swachhata Hi Seva", date: "02-10-2023", pdfUrl: "https://www.msajce-edu.in/uploads/nss/Swachhata-Hi-Seva.pdf" },
];

// YRC DATA
const yrcPrinciples = [
  {
    title: "Humanity",
    desc: "To prevent and alleviate human suffering wherever it may be found, protecting life and health and ensuring respect for the human being.",
  },
  {
    title: "Impartiality",
    desc: "Making no discrimination as to nationality, race, religious beliefs, class, or political opinions; guided solely by the needs of individuals.",
  },
  {
    title: "Neutrality",
    desc: "Maintaining universal trust by refraining from engaging in controversies of political, racial, religious, or ideological nature.",
  },
  {
    title: "Voluntary Service",
    desc: "A voluntary relief movement not prompted in any manner by desire for personal gain, committed purely to compassionate service.",
  },
];

const yrcObjectives = [
  "To conduct social and health awareness programmes",
  "Awareness on the care of their own health and that of others",
  "To encourage the students to extend their humanitarian services to the society",
  "To offer First Aid Training to all the YRC volunteers",
  "To enable the growth and development of a spirit of service and sense of duty with dedication and devotion in the minds of youth",
  "To foster better friendly relationship with all without any discrimination",
];

const yrcActivities = [
  {
    title: "First-Aid & Emergency Response Training",
    category: "Life Safety",
    detail: "Comprehensive hands-on First-Aid and emergency preparedness training delivered to student volunteers.",
  },
  {
    title: "Voluntary Blood Donation Drives",
    category: "Community Health",
    detail: "Organizing periodic voluntary blood donation camps in collaboration with certified government and charitable blood banks.",
  },
  {
    title: "Hygiene, Sanitation & Health Awareness",
    category: "Public Awareness",
    detail: "Conduction of public hygiene workshops, sanitation drives, and health monitoring programs across neighboring areas.",
  },
  {
    title: "Humanitarian Relief & Community Support",
    category: "Social Relief",
    detail: "Extending volunteer aid, essential provisions, and dedicated social welfare services to underprivileged communities.",
  },
];

// UBA DATA
const ubaPillars = [
  {
    title: "Connecting Higher Education with Local Communities",
    desc: "Enabling active processes that connect engineering and knowledge institutions directly with rural villages to address grass-root developmental challenges.",
  },
  {
    title: "Decentralized, Eco-Friendly Technologies",
    desc: "Deploying local resource-based, sustainable, and eco-friendly technologies to substitute centralized, polluting developmental paradigms.",
  },
  {
    title: "Self-Sufficient 'Village Republics'",
    desc: "Revitalizing the Gandhian vision where the basic needs of food, clothing, shelter, sanitation, healthcare, energy, livelihood, transportation, and education are locally met.",
  },
  {
    title: "Participatory Problem Solving",
    desc: "Engaging rural community members and local panchayat leadership in participatory diagnosis and co-creation of engineering solutions.",
  },
  {
    title: "Accelerating Sustainable & Inclusive Growth",
    desc: "Bridging the acute developmental disconnect between urban and rural areas to construct the architecture of an inclusive, self-reliant India.",
  },
];

const ubaBasicNeeds = [
  { need: "Food & Agriculture", focus: "Sustainable farming, soil fertility conservation and organic practices" },
  { need: "Clean Water & Sanitation", focus: "Groundwater recharge, water testing, filtration and village hygiene" },
  { need: "Renewable Energy", focus: "Solar street lighting, energy audits and clean domestic cookstoves" },
  { need: "Livelihood & Skills", focus: "Artisan tool modernization, SHG capacity building and youth vocations" },
  { need: "Healthcare & Wellness", focus: "Preventive health screening, mobile clinics and telemedicine support" },
  { need: "Eco-Friendly Shelter", focus: "Low-cost vernacular materials, thermal comfort and rural civil planning" },
  { need: "Transportation & Connectivity", focus: "All-weather village roads, mobility planning and digital infrastructure" },
  { need: "Digital & School Education", focus: "Computer literacy, smart classrooms and STEM mentorship for rural schools" },
];

// EBSB DATA
const ebsbObjectives = [
  "To celebrate the Unity in Diversity of our nation and maintain and strengthen the emotional bonds between the people of our country",
  "To promote the spirit of national integration through a deep and structured engagement between all Indian States and Union Territories",
  "To showcase the rich heritage and culture, customs and traditions of either State for enabling people to understand and appreciate the diversity",
  "To establish long-term engagements and create an environment promoting learning between States by sharing best practices and experiences",
];

const ebsbProgrammes = [
  {
    sNo: 1,
    title: "Ek Bharat Shreshtha Bharat Phase-1",
    dates: "20.01.2020 to 24.01.2020",
    partner: "SSM College of Engineering, Baramulla (J&K)",
    weblink: "https://www.msajce-edu.in/uploads/ebsb/EBSB.pdf",
    linkText: "View Event Report",
  },
  {
    sNo: 2,
    title: "Ek Bharat Shreshtha Bharat Video Event",
    dates: "14.10.2020 to 18.10.2020",
    partner: "SSM College of Engineering, Baramulla (J&K)",
    weblink: "https://www.youtube.com/watch?v=0hV917X6K18",
    linkText: "Watch YouTube Video",
  },
];

// KARMA DATA
const karmaObjectives = [
  {
    title: "Global Skills Capital & Certified Workforce",
    desc: "Strategically planned skill initiatives to create a skilled and certified workforce, who not only contribute towards the growth of India but also drive the country into becoming the global skills capital.",
  },
  {
    title: "Off-Hour Higher Education Infrastructure Utilization",
    desc: "Encourage institutions for making the best use of available infrastructure of higher education system during off hours for skill training by re-aligning the existing infrastructure for the skill courses specially, training AIDS, syllabus, curriculum etc. as per NSQF aligned Qualifications.",
  },
  {
    title: "Inclusive Eligibility Framework",
    desc: "This scheme is applicable to the candidate who have passed at least 10th standard / ITIs.",
  },
  {
    title: "Demand-Driven Domain Training",
    desc: "The training under the Scheme shall be, any domain-specific demand-driven NSQF aligned Qualifications (job roles/ National Occupational Standards (NOS)) or any customized skill training course that can help in candidate's employability or self-employment/entrepreneurship.",
  },
];

const karmaModels = [
  {
    title: "Model 1: School Dropouts & Foundational Trades",
    desc: "Targeted skill training for candidates who have passed at least 10th standard or ITIs. Focuses on core vocational disciplines, technical maintenance, and self-employment capability.",
  },
  {
    title: "Model 2: Advanced Level Domain Courses",
    desc: "Tailored for technical students pursuing higher education (Semesters 4–7) to build specialized, industry-deployable expertise in cutting-edge emerging technologies.",
  },
  {
    title: "Model 3: Flexible Modular Skilling",
    desc: "Adaptive modular skill tracks formulated to upgrade existing workforce capabilities and align with customized industrial requirements.",
  },
];

const karmaCourses = [
  {
    sNo: 1,
    courseTitle: "AI - Machine Learning Developer",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 2,
    courseTitle: "Refrigeration and Air Conditioning Technician",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 3,
    courseTitle: "Additive Manufacturing Technician (3D Printing) (CTS)",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 4,
    courseTitle: "Certificate Course in Embedded System Design using ARM / Cortex Microcontroller",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 5,
    courseTitle: "Architectural Drafting and Basic 3D Design with Autodesk Revit (MES)",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 6,
    courseTitle: "Computer Hardware Network Maintenance",
    model: "Model 1 (School Dropouts)",
    targetAudience: "Class 10th Pass / ITI Candidates (30 Intake)",
    status: "Approved by AICTE",
  },
  {
    sNo: 7,
    courseTitle: "Refrigeration and Air Conditioning Technician",
    model: "Model 1 (School Dropouts)",
    targetAudience: "Class 10th Pass / ITI Candidates (30 Intake)",
    status: "Approved by AICTE",
  },
];

const karmaApprovalDocs = [
  {
    sNo: 1,
    details: "Approval Letter – Model 1",
    category: "AICTE Approval Mandate",
    weblink: "https://facilities.aicte-india.org/KARMA/letter_r_karma_model1.php?app_id=MS05NzU2MzUx&model=model1",
    linkText: "View Model 1 Letter",
  },
  {
    sNo: 2,
    details: "Approval Letter – Model 2",
    category: "AICTE Approval Mandate",
    weblink: "https://facilities.aicte-india.org/KARMA/letter_r_karma_model2.php?app_id=MS05NzU2MzUx&model=model2",
    linkText: "View Model 2 Letter",
  },
  {
    sNo: 3,
    details: "Course Registration Details",
    category: "Official AICTE Registry",
    weblink: "https://facilities.aicte-india.org/KARMA/review_data.php?app_id=MS05NzU2MzUx",
    linkText: "Review Data Portal",
  },
];

// Tab Display Metadata
const TAB_HERO_TITLES: Record<string, string> = {
  nss: "National Service Scheme (NSS)",
  yrc: "Youth Red Cross (YRC)",
  uba: "Unnat Bharat Abhiyan (UBA)",
  ebsb: "Ek Bharat Shreshtha Bharat (EBSB)",
  karma: "AICTE KARMA",
};

// -------------------------------------------------------------
// UNIFIED COMPONENT (Modeled after Placements Page Navbar & Layout)
// -------------------------------------------------------------
function SocialAndCommunityPortal() {
  const { tab } = Route.useSearch();
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (tab && SOCIAL_COMMUNITY_TABS.some((t) => t.id === tab)) {
      return tab;
    }
    return "nss";
  });

  useEffect(() => {
    if (tab && SOCIAL_COMMUNITY_TABS.some((t) => t.id === tab) && tab !== activeSection) {
      setActiveSection(tab);
    }
  }, [tab]);

  // Initial scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to starting content of the tab (matching Placements Page logic)
  const scrollToContent = () => {
    const el = document.getElementById("social-community-main-content");
    if (el) {
      const headerOffset = typeof window !== "undefined" && window.innerWidth < 768 ? 44 : 52;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - headerOffset),
        behavior: "smooth",
      });
    }
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Sync browser URL search param without page reload
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", sectionId);
      window.history.replaceState(null, "", url.toString());
    }

    if (sectionId === "nss") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => {
        scrollToContent();
      }, 40);
    }
  };

  const handleTitleClick = () => {
    setActiveSection("nss");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", "nss");
      window.history.replaceState(null, "", url.toString());
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const heroTitle = TAB_HERO_TITLES[activeSection] || "Social & Community";

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary SubNav Header (Identical structure and function to Placements page) */}
      <SecondarySubNav
        title="SOCIAL & COMMUNITY"
        tabs={SOCIAL_COMMUNITY_TABS}
        activeTab={activeSection}
        onSelectTab={handleSelectSection}
        onTitleClick={handleTitleClick}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 2. DYNAMIC HERO BANNER: Institution-Style Theme-Adaptive Banner           */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/accreditations_campus.jpg"
              alt="MSAJCE Social and Community Ecosystem"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Theme-Adaptive Frame with Dynamic Hero Title */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={heroTitle}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: smoothEase }}
                  className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none"
                >
                  {heroTitle}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. IN-PAGE TABS CONTENT TARGET ANCHOR (Smooth-scrolled on tab click)       */}
        {/* ========================================================================= */}
        <div id="social-community-main-content" className="w-full scroll-mt-28 md:scroll-mt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: smoothEase }}
              className="w-full"
            >
              {/* ================================================================= */}
              {/* TAB 1: NSS (National Service Scheme)                             */}
              {/* ================================================================= */}
              {activeSection === "nss" && (
                <div className="w-full">
                  {/* Section A (White / #121214 Canvas): Overview & Core Principles */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          National Service Scheme (NSS)
                        </h2>
                      </div>

                      {/* Full-Length Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          With the goal to uphold the need of selfless service and to encourage the spirit of social service to &quot;Serve the downtrodden in the society&quot; and &quot;Personality Development through Community Service&quot; among the young students, Mohamed Sathak AJ College of Engineering (MSAJCE), Chennai, established National Service Scheme (NSS) at institute level in the year 2001. Presently, NSS unit of MSAJCE has over 100 active members from various disciplines of 1st year and 2nd year, working rigorously for the betterment of society in and around Chennai.
                        </p>
                        <p>
                          Our NSS unit has carried out blood donation camps, Awareness programmes on &apos;Health and Hygiene&apos;, Consumer Rights, Environmental Protection, AIDS awareness programme etc.
                        </p>
                      </div>

                      {/* Subsection: Objectives of NSS */}
                      <div className="space-y-4 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Objectives of NSS
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {nssObjectives.map((obj, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                            >
                              <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                {idx + 1}
                              </span>
                              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                {obj}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subsection: Duties of NSS Volunteers */}
                      <div className="space-y-4 pt-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Duties of NSS Volunteers
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {nssDuties.map((duty, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                            >
                              <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                {idx + 1}
                              </span>
                              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                {duty}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subsection: Code of Conduct for NSS Volunteers */}
                      <div className="space-y-4 pt-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Code of Conduct for NSS Volunteers
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {nssCodeOfConduct.map((item, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                            >
                              <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                {idx + 1}
                              </span>
                              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
                  <WaveDividerAB />

                  {/* Section B (#F3F3F2 / #18181B Canvas): Events & Activity Reports */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          Events Organized on Days of National Importance
                        </h2>
                      </div>

                      {/* Observances List (Clean Editorial Layout, Zero Boxed Cards) */}
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                            Observed National Days
                          </h3>
                          <span className="font-mono text-xs font-bold text-muted-foreground">
                            8 Annual Observances
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y md:divide-y-0 divide-border/40 font-libre">
                          <div className="divide-y divide-border/40">
                            {nationalDays.slice(0, 4).map((day, idx) => (
                              <div
                                key={idx}
                                className="py-3.5 px-2 flex items-center justify-between gap-4 hover:bg-primary/[0.02] transition-colors"
                              >
                                <div className="space-y-0.5">
                                  <h4 className="font-oswald font-bold text-sm sm:text-base text-foreground uppercase tracking-tight">
                                    {day.name}
                                  </h4>
                                  {day.commemoration && (
                                    <p className="text-xs text-muted-foreground font-libre">
                                      {day.commemoration}
                                    </p>
                                  )}
                                </div>
                                <div className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider rounded-tl-lg rounded-br-lg rounded-tr-2xs rounded-bl-2xs bg-primary/10 text-primary border border-primary/20">
                                  <Calendar className="w-3.5 h-3.5" />
                                  <span>{day.date}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="divide-y divide-border/40">
                            {nationalDays.slice(4).map((day, idx) => (
                              <div
                                key={idx}
                                className="py-3.5 px-2 flex items-center justify-between gap-4 hover:bg-primary/[0.02] transition-colors"
                              >
                                <div className="space-y-0.5">
                                  <h4 className="font-oswald font-bold text-sm sm:text-base text-foreground uppercase tracking-tight">
                                    {day.name}
                                  </h4>
                                  {day.commemoration && (
                                    <p className="text-xs text-muted-foreground font-libre">
                                      {day.commemoration}
                                    </p>
                                  )}
                                </div>
                                <div className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider rounded-tl-lg rounded-br-lg rounded-tr-2xs rounded-bl-2xs bg-primary/10 text-primary border border-primary/20">
                                  <Calendar className="w-3.5 h-3.5" />
                                  <span>{day.date}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Official DataGrid Table Standard for Event Reports */}
                      <div className="space-y-3 pt-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          NSS Event Reports Directory
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                    S.No
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                    Name of the Event
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36">
                                    Date
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {nssEvents.map((evt) => (
                                  <tr key={evt.sNo} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                      {String(evt.sNo).padStart(2, "0")}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                                      {evt.name}
                                    </td>
                                    <td className="py-3.5 px-4 font-mono font-semibold text-primary text-xs whitespace-nowrap">
                                      <div className="inline-flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        {evt.date}
                                      </div>
                                    </td>
                                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                      <RedirectButton
                                        href={evt.pdfUrl}
                                        label="View Report"
                                        icon={<FileText className="w-3.5 h-3.5" />}
                                      />
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

              {/* ================================================================= */}
              {/* TAB 2: YRC (Youth Red Cross)                                      */}
              {/* ================================================================= */}
              {activeSection === "yrc" && (
                <div className="w-full">
                  {/* Section A (White / #121214 Canvas): Overview & Core Principles */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          Youth Red Cross (YRC)
                        </h2>
                      </div>

                      {/* Full-Length Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          The Youth Red Cross is one of the important constituent of its mother organization, Indian Red Cross. It is a group movement organized for students to inculcate social welfare in students and to prepare young minds to render a significant contribution for the needy people with the principles of Humanity, Impartiality, Neutrality, and Voluntary service. YRC at MSAJCE established in the year 2014 At present YRC club of MSAJCE has around 100 active members, all are trained and encouraged to manage the affairs of the group, electing their own office bearers to work with deep involvement.
                        </p>
                      </div>

                      {/* Core Principles of Youth Red Cross (Sections Design, No 01/02 Badges) */}
                      <div className="space-y-4 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Core Principles of Youth Red Cross
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {yrcPrinciples.map((pr, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-2 flex flex-col gap-1 hover:bg-foreground/[0.015] transition-colors"
                            >
                              <h4 className="font-oswald font-bold text-base sm:text-lg text-primary uppercase tracking-tight">
                                {pr.title}
                              </h4>
                              <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                                {pr.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Objectives of Youth Red Cross */}
                      <div className="space-y-4 pt-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Objectives of Youth Red Cross
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {yrcObjectives.map((obj, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                            >
                              <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                {idx + 1}
                              </span>
                              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                {obj}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
                  <WaveDividerAB />

                  {/* Section B (#F3F3F2 / #18181B Canvas): Student-Led Programmes */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          Student-Led Welfare &amp; Health Programmes
                        </h2>
                      </div>

                      <div className="divide-y divide-border/40 font-libre">
                        {yrcActivities.map((act, idx) => (
                          <div
                            key={idx}
                            className="py-4 sm:py-5 px-1 sm:px-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hover:bg-foreground/[0.02] transition-colors"
                          >
                            <div className="space-y-1 flex-1">
                              <div className="flex flex-wrap items-center gap-2.5">
                                <h3 className="font-oswald font-bold text-base sm:text-lg text-foreground uppercase tracking-tight">
                                  {act.title}
                                </h3>
                                <span className="text-[11px] font-bold font-oswald uppercase tracking-wider px-2 py-0.5 rounded-tl-md rounded-br-md rounded-tr-2xs rounded-bl-2xs bg-primary/10 text-primary border border-primary/20">
                                  {act.category}
                                </span>
                              </div>
                              <p className="w-full text-sm sm:text-base text-foreground/85 font-libre font-medium leading-relaxed pt-1">
                                {act.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ================================================================= */}
              {/* TAB 3: UBA (Unnat Bharat Abhiyan)                                */}
              {/* ================================================================= */}
              {activeSection === "uba" && (
                <div className="w-full">
                  {/* Section A (White / #121214 Canvas): Foundation & Transformational Pillars */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          Unnat Bharat Abhiyan (UBA)
                        </h2>
                      </div>

                      {/* Full-Length Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.
                        </p>
                        <p>
                          Their vision is to create a vibrant relationship between society and an inclusive academic system, with the latter providing the knowledge and practice for emerging professions and to foster the new field of &apos;Rural Development&apos;. It also aims to identify the basic development challenges of rural India and to find suitable solutions for them.
                        </p>
                        <p>
                          The conceptualization of Unnat Bharat Abhiyan started with the initiative of a group of dedicated faculty members of Indian Institute of Technology (IIT) Delhi working for long in the area of rural development and appropriate technology. The concept was nurtured through wide consultation with the representatives of a number of technical institutions, Rural Technology Action Group (RuTAG) coordinators, voluntary organizations and government agencies, actively involved in rural development during a National workshop held at IIT Delhi in September, 2014. The program was formally launched by the Ministry of Human Resource Development (MHRD) in presence of The President of India on 11th November, 2014.
                        </p>
                      </div>

                      {/* Subsection: Gandhian Village Republics */}
                      <div className="space-y-3 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Vision of Gandhian Village Republics
                        </h3>
                        <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                          <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                            The vision of Unnat Bharat Abhiyan is basically inspired by the vision of Mahatma Gandhi for rural development in &apos;Hind Swaraj&apos;. It emphasizes the development of local resource-based, decentralized, and eco-friendly technologies to meet the basic needs of rural areas such as food, clothing, shelter, sanitation, healthcare, energy, livelihood, transportation, and education. It also emphasizes the importance of basic education (Nai Talim) and self-sufficiency of village republics.
                          </p>
                        </div>
                      </div>

                      {/* Subsection: Transformational Pillars (Clean Sections, No 01/02 Badges) */}
                      <div className="space-y-4 pt-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Transformational Pillars
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {ubaPillars.map((pillar, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-2 flex flex-col gap-1 hover:bg-foreground/[0.015] transition-colors"
                            >
                              <h4 className="font-oswald font-bold text-base sm:text-lg text-primary uppercase tracking-tight">
                                {pillar.title}
                              </h4>
                              <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                                {pillar.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
                  <WaveDividerAB />

                  {/* Section B (#F3F3F2 / #18181B Canvas): Basic Needs */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          Basic Needs &amp; Rural Development Domains
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[600px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider w-1/3">
                                  Basic Need Domain
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                  Action &amp; Development Focus
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {ubaBasicNeeds.map((item, idx) => (
                                <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-sm whitespace-nowrap">
                                    {item.need}
                                  </td>
                                  <td className="py-3.5 px-4 text-sm text-foreground font-libre font-medium leading-relaxed">
                                    {item.focus}
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
              {/* TAB 4: EBSB (Ek Bharat Shreshtha Bharat)                          */}
              {/* ================================================================= */}
              {activeSection === "ebsb" && (
                <div className="w-full">
                  {/* Section A (White / #121214 Canvas): Mandate, Objectives & State Pairing */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          Ek Bharat Shreshtha Bharat (EBSB)
                        </h2>
                      </div>

                      {/* Full-Length Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          Ek Bharat Shreshtha Bharat is an initiative launched by the Government of India to enhance unity in diversity of our nation India. EBSB was launched by Prime Minister Shri Narendra Modi during the Rashtriya Ekta Divas held on 31st October, 2015, to commemorate the birth anniversary of Sardar Vallabhbhai Patel to establish a sustained and structured cultural connect between denizens of different regions of India.
                        </p>
                        <p>
                          India is a unique nation, whose fabric has been woven by diverse linguistic, cultural and religious threads, held together into a composite national identity by a rich history of cultural evolution.
                        </p>
                        <p>
                          Ek Bharat Shreshtha Bharat programme aims to enhance interaction &amp; promote mutual understanding between people of different states/UTs through the concept of state/UT pairing. The states carry out activities to promote a sustained and structured cultural connect in the areas of language learning, culture, traditions &amp; music, tourism &amp; cuisine, sports and sharing of best practices, etc.
                        </p>
                      </div>

                      {/* Subsection: EBSB at MSAJCE */}
                      <div className="space-y-3 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          EBSB at MSAJCE — Institutional Pairing
                        </h3>
                        <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                          <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                            As part of the Ek Bharat Shreshtha Bharat (EBSB) initiative, Mohamed Sathak A. J. College of Engineering (MSAJCE), representing Tamil Nadu, has been paired with SSM College of Engineering, Baramulla, Jammu &amp; Kashmir. Through this partnership, students from both institutions engage in mutual cultural exchange programmes, academic collaborations, and language learning activities, strengthening national integration and cross-state unity.
                          </p>
                        </div>
                      </div>

                      {/* Subsection: Objectives of EBSB */}
                      <div className="space-y-4 pt-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Key Objectives of EBSB
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {ebsbObjectives.map((obj, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                            >
                              <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                                {idx + 1}
                              </span>
                              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                                {obj}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
                  <WaveDividerAB />

                  {/* Section B (#F3F3F2 / #18181B Canvas): Conducted Programmes Table */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          Programmes Conducted Under EBSB
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                  Name of Programme
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                                  Date / Period
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                  Paired Institution
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                                  Report / Media
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {ebsbProgrammes.map((prg) => (
                                <tr key={prg.sNo} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                    {String(prg.sNo).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                                    {prg.title}
                                  </td>
                                  <td className="py-3.5 px-4 font-mono font-semibold text-primary text-xs whitespace-nowrap">
                                    <div className="inline-flex items-center gap-1.5">
                                      <Calendar className="w-3.5 h-3.5 text-primary" />
                                      {prg.dates}
                                    </div>
                                  </td>
                                  <td className="py-3.5 px-4 text-sm text-foreground/90 font-libre font-medium">
                                    {prg.partner}
                                  </td>
                                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                    <RedirectButton
                                      href={prg.weblink}
                                      label={prg.linkText}
                                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                                    />
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
              {/* TAB 5: AICTE KARMA                                                */}
              {/* ================================================================= */}
              {activeSection === "karma" && (
                <div className="w-full">
                  {/* Section A (White / #121214 Canvas): Mandate, Objectives & Skilling Models */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          AICTE KARMA
                        </h2>
                      </div>

                      {/* Full-Length Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          AICTE is initiating “Kaushal Augmentation and Restructuring Mission of AICTE” (KARMA) for all AICTE approved institutions in the country to overcome the dual challenge of scarcity of skilled manpower in jobs and low skill level of those who are presently in jobs.
                        </p>
                      </div>

                      {/* Subsection: Objectives of KARMA (Clean Sections, No 01/02 Badges) */}
                      <div className="space-y-4 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Objectives of KARMA
                        </h3>
                        <div className="divide-y divide-border/40 font-libre">
                          {karmaObjectives.map((obj, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-2 flex flex-col gap-1 hover:bg-foreground/[0.015] transition-colors"
                            >
                              <h4 className="font-oswald font-bold text-base sm:text-lg text-primary uppercase tracking-tight">
                                {obj.title}
                              </h4>
                              <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                                {obj.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subsection: Three Skilling Models Under KARMA (Clean Sections, No 01/02 Badges) */}
                      <div className="space-y-4 pt-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Three Skilling Models Under KARMA
                        </h3>
                        <p className="w-full text-sm sm:text-base text-foreground/85 font-libre leading-relaxed">
                          AICTE has proposed three Models for Skilling of In-school students/ school dropouts, students pursuing Technical Education:
                        </p>
                        <div className="divide-y divide-border/40 font-libre">
                          {karmaModels.map((m, idx) => (
                            <div
                              key={idx}
                              className="py-3.5 sm:py-4 px-1 sm:px-2 flex flex-col gap-1 hover:bg-foreground/[0.015] transition-colors"
                            >
                              <h4 className="font-oswald font-bold text-base sm:text-lg text-primary uppercase tracking-tight">
                                {m.title}
                              </h4>
                              <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                                {m.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider A -> B */}
                  <WaveDividerAB />

                  {/* Section B (#F3F3F2 / #18181B Canvas): Approved Courses & Sanctions */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          Approved Courses &amp; Institutional Sanction
                        </h2>
                      </div>

                      <div className="w-full space-y-3 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>
                          The Mohamed Sathak A J College of Engineering was approved by AICTE to conduct 5 courses in Model 2 with an approved intake in: 1) AI -Machine learning Developer, 2) Refrigeration and Air Conditioning Technician, 3) Additive Manufacturing Technician (3D Printing), 4) Certificate Course in Embedded System Design using ARM/ Cortex Microcontroller and 5) Architectural Drafting and Basic 3D Design with Autodesk Revit (MES).
                        </p>
                        <p>
                          In Model 1 the Institute was approved by AICTE to conduct 2 courses with an approved intake of 30 students namely: 1) Computer Hardware Network Maintenance and 2) Refrigeration And Air Conditioning Technician with 30 students intake.
                        </p>
                        <p className="font-semibold text-foreground">
                          The Institute has registered the 5 courses in Model 2 and currently the courses are in process.
                        </p>
                      </div>

                      {/* Registered & Approved Skill Courses Table */}
                      <div className="space-y-3 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Registered &amp; Approved Skill Courses
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                    S.No
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                    Course Title
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                    KARMA Model
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                    Target / Approved Intake
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right">
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {karmaCourses.map((c) => (
                                  <tr key={c.sNo} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                      {String(c.sNo).padStart(2, "0")}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                                      {c.courseTitle}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-xs whitespace-nowrap">
                                      {c.model}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/90">
                                      {c.targetAudience}
                                    </td>
                                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                      <span className="inline-block px-2.5 py-0.5 rounded-tl-md rounded-br-md rounded-tr-2xs rounded-bl-2xs bg-primary/10 text-primary border border-primary/20 text-xs font-oswald font-bold uppercase tracking-wider">
                                        {c.status}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
                      </div>

                      {/* Official AICTE Sanction Documents Table */}
                      <div className="space-y-3 pt-4">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                          Official AICTE Sanction &amp; Portal Verification
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                    S.No
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                    Approval Document / Portal
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                                    Classification
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-48">
                                    Verification Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {karmaApprovalDocs.map((doc) => (
                                  <tr key={doc.sNo} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                                      {String(doc.sNo).padStart(2, "0")}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                                      {doc.details}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/80">
                                      {doc.category}
                                    </td>
                                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                      <RedirectButton
                                        href={doc.weblink}
                                        label={doc.linkText}
                                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                                      />
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
