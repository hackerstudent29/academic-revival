import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

// Standard Apple/luxury cubic-bezier ease-out curve for buttery smooth animations
const smoothEase = [0.16, 1, 0.3, 1] as const;

const title = "Institution Overview — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official overview of Mohamed Sathak A.J. College of Engineering (MSAJCE), established 5th July 2001 under Mohamed Sathak Trust, AICTE approved, Anna University affiliated, 70-acre Siruseri IT Park campus.";

export const Route = createFileRoute("/about_/overview")({
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
  component: InstitutionOverviewPage,
});

// Institutional Benchmark Metrics
const heroStats = [
  { value: "981", label: "Happy Students" },
  { value: "175", label: "Achievements" },
  { value: "301", label: "Team Staff" },
  { value: "54", label: "Awards Won" },
];


// Why Join MSAJCE - 12 Key Institutional Reasons (Minimal Single-Line Points)
const whyJoinReasons = [
  "Located in a 70-acre lush green campus inside SIPCOT IT Park, Siruseri, surrounded by 100+ IT multinational industries.",
  "State-of-the-art laboratory infrastructure with collaborative technology centers and AICTE IDEA Labs.",
  "Qualified, experienced, and dedicated team of faculty members delivering personalized student mentorship.",
  "Well-defined academic processes for smart, interactive, and outcome-oriented engineering education.",
  "Direct student involvement in real-world industrial projects, national hackathons, and competency-based research.",
  "Active professional student chapters and collegiate forums for IEEE, CSI, SAE, and technical clubs.",
  "Student exchange initiatives and bilateral programs for cross-cultural learning and global exposure.",
  "Structured corporate internships, industrial visits, and expert guest lectures by senior industry leaders.",
  "Dedicated communication language learning facilities offering certified fluency training in English, German, and Japanese.",
  "Value-added courses and practical skill certifications tailored to modern industrial technology stacks.",
  "Consistent placement track record across premier software corporations, core engineering firms, and global MNCs.",
  "Comprehensive incubation support for student startups, entrepreneurship guidance, and coaching for GATE/GRE.",
];

// 12 Engineering & Technology Departments + Architecture Departments Roster
const academicDepartments = [
  "Department of Computer Science & Engineering",
  "Department of Information Technology",
  "Department of Artificial Intelligence & Data Science",
  "Department of Artificial Intelligence & Machine Learning",
  "Department of Computer Science & Business Systems",
  "Department of Cyber Security",
  "Department of Electronics & Communication Engineering",
  "Department of VLSI Design & Technology",
  "Department of Advanced Communication Technology",
  "Department of Electrical & Electronics Engineering",
  "Department of Mechanical Engineering",
  "Department of Civil Engineering",
  "Department of Architecture",
  "Department of Design",
];

export function InstitutionOverviewPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white"
    >
      {/* ========================================================================= */}
      {/* 1. HERO BANNER WITH BOXY TITLE & FACTS & FIGURES STATS STRIP              */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[calc(100svh-56px)] md:min-h-[calc(100vh-64px)] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/accreditations_campus.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus"
            className="w-full h-full object-cover object-center brightness-[0.85] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        {/* Title Container: Fading Translucent Backdrop, Institution Title Only */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-6 sm:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: smoothEase }}
            className="inline-block bg-black/60 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 shadow-2xl max-w-2xl lg:max-w-3xl rounded-none border-y border-r border-white/10"
          >
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[1.1]">
              The Institution
            </h1>
          </motion.div>
        </div>

        {/* Fading Facts & Figures Docked Stats Strip (Smooth Gradient Fade, No Harsh Line, Maroon Figures) */}
        <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-10 pb-6 sm:pt-14 sm:pb-8">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black font-oswald uppercase tracking-wide text-primary">
                Facts & Figures
              </h2>
              <span className="text-[11px] sm:text-xs font-oswald uppercase tracking-widest text-white/50 hidden sm:inline">
                Institutional Benchmark Metrics
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 lg:divide-x lg:divide-white/15">
              {heroStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.06, ease: smoothEase }}
                  className="first:pl-0 lg:pl-6 space-y-1"
                >
                  <div className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary dark:text-[#E11D48] tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/85 font-libre leading-snug pt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTRODUCTORY SECTION: Canvas A (White / #121214)                       */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Section Header: Direct Institutional Title Aligned with Page & Content */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Institution Overview &amp; Academic Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-stretch">
            {/* Left Column: Campus Architectural Showcase (Signature Asymmetrical Corners, Matching Height) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="lg:col-span-5 flex flex-col"
            >
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm shadow-xl bg-muted border border-border/40">
                <img
                  src="/images/eligibility_hero.jpg"
                  alt="Mohamed Sathak A.J. College of Engineering Academic Environment"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>
            </motion.div>

            {/* Right Column: Editorial Narrative & Neatly Structured Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08, ease: smoothEase }}
              className="lg:col-span-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base font-medium text-foreground/90 font-libre leading-relaxed">
                  Established under the aegis of the Mohamed Sathak Trust, Mohamed Sathak A.J. College
                  of Engineering (MSAJCE) delivers transformative engineering education rooted in
                  technical innovation, hands-on inquiry, and ethical leadership. We educate and
                  engineer to expand analytical thinking, equipping future technocrats for impactful
                  careers across global industries.
                </p>
                <p className="text-sm sm:text-base font-medium text-foreground/90 font-libre leading-relaxed">
                  Directly situated inside Asia’s prominent SIPCOT IT Park in Siruseri, Chennai, our
                  students cultivate industry-ready competencies under dedicated faculty mentorship.
                  Backed by modern research and testing laboratories, AICTE IDEA initiatives, and active
                  collegiate chapters of IEEE, CSI, and SAE, our campus bridges academic excellence
                  with the vibrant pulse of neighboring global tech leaders.
                </p>
              </div>

              {/* Minimal 3-Pillar Highlight Grid (No Clutter, Clean & Punchy) */}
              <div className="pt-6 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 font-libre">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <GraduationCap className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      10+
                    </span>
                  </div>
                  <div className="font-libre text-sm sm:text-base font-medium text-foreground/90">
                    Degree Programmes
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      100+
                    </span>
                  </div>
                  <div className="font-libre text-sm sm:text-base font-medium text-foreground/90">
                    Neighboring MNCs
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      70 Acres
                    </span>
                  </div>
                  <div className="font-libre text-sm sm:text-base font-medium text-foreground/90">
                    Siruseri Campus
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 1: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      {/* ========================================================================= */}
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

      {/* ========================================================================= */}
      {/* 3. EDITORIAL GALLERY: Canvas B (#F3F3F2 / #18181B)                        */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Section Header: Small One-Line Title */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary whitespace-nowrap">
              An artistic community on the south side
            </h2>
          </motion.div>

          {/* Asymmetric Photographic Mosaic (Tight Gaps, Different Sizes, Slightly Curved Edges, Pure Images Without Text) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="grid grid-cols-12 gap-2 sm:gap-2.5 md:gap-3"
          >
            {/* 1. Large Editorial Landscape (col-span-7) */}
            <div className="col-span-12 md:col-span-7 h-64 sm:h-80 md:h-[390px] rounded-lg overflow-hidden bg-muted shadow-xs">
              <img
                src="/images/moments/moment-1-lake.jpg"
                alt="South Side Waterfront & Cultural Promontory"
                className="w-full h-full object-cover select-none pointer-events-none rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/moments/moment-1-lake.png";
                }}
              />
            </div>

            {/* 2. Complementary Medium Landscape (col-span-5) */}
            <div className="col-span-12 md:col-span-5 h-56 sm:h-80 md:h-[390px] rounded-lg overflow-hidden bg-muted shadow-xs">
              <img
                src="/images/moments/moment-2-dancers.jpg"
                alt="Dance & Performing Arts Festival"
                className="w-full h-full object-cover select-none pointer-events-none rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/moments/moment-2-dancers.png";
                }}
              />
            </div>

            {/* 3. Compact Architectural Tile (col-span-3) */}
            <div className="col-span-6 md:col-span-3 h-48 sm:h-60 md:h-[265px] rounded-lg overflow-hidden bg-muted shadow-xs">
              <img
                src="/images/moments/moment-3-robie.jpg"
                alt="Architectural Landmark & Heritage"
                className="w-full h-full object-cover select-none pointer-events-none rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/moments/moment-3-robie.png";
                }}
              />
            </div>

            {/* 4. Wide Panorama Center (col-span-5) */}
            <div className="col-span-6 md:col-span-5 h-48 sm:h-60 md:h-[265px] rounded-lg overflow-hidden bg-muted shadow-xs">
              <img
                src="/images/moments/moment-4-singer.jpg"
                alt="Live Performing Arts Concert"
                className="w-full h-full object-cover select-none pointer-events-none rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/moments/moment-4-singer.png";
                }}
              />
            </div>

            {/* 5. Medium Athletic Grounds / Street Culture (col-span-4) */}
            <div className="col-span-12 md:col-span-4 h-48 sm:h-60 md:h-[265px] rounded-lg overflow-hidden bg-muted shadow-xs">
              <img
                src="/images/moments/moment-5-street.jpg"
                alt="Vibrant Cultural Streetscape"
                className="w-full h-full object-cover select-none pointer-events-none rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/moments/moment-5-street.png";
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 2: Canvas B (#F3F3F2 / #18181B) -> Canvas A (White / #121214) */}
      {/* ========================================================================= */}
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

      {/* ========================================================================= */}
      {/* 4. FEATURE STORY BLOCK: Canvas A (White / #121214)                        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Section Header: Title Above the Content */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Leadership & Innovation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
            {/* Left: Narrative Paragraphs (Starting Straight with Top of Video) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="lg:col-span-7 space-y-5"
            >
              <p className="text-sm sm:text-base font-medium text-foreground/90 leading-relaxed font-libre">
                Under the visionary aegis of the Mohamed Sathak Trust, MSAJCE is dedicated to
                nurturing technical proficiency, ethical leadership, and creative problem-solving.
                Established in Siruseri, our 70-acre campus serves as a pivotal center for
                multidisciplinary engineering, industry-academia collaboration, and cutting-edge
                technological education.
              </p>
              <p className="text-sm sm:text-base font-medium text-foreground/90 leading-relaxed font-libre">
                Rooted in over 50 years of educational philanthropy, our campus integrates
                advanced AICTE IDEA Labs, specialized computing centers, smart classrooms, and
                research incubators. We cultivate an environment where ambitious technocrats
                engage in hands-on exploration, bridging academic theory with the technological
                demands of neighboring global IT enterprises.
              </p>
            </motion.div>

            {/* Video Feature Right (Pure CSS 16:9, Zero Layout Shift, Client Guarded) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08, ease: smoothEase }}
              className="lg:col-span-5 flex items-start justify-center lg:justify-end"
            >
              <div className="relative w-full aspect-video max-w-full lg:max-w-[460px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-black border border-border shrink-0">
                {isMounted ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/aNVaQWh1Pp4?rel=0&modestbranding=1&controls=1&playsinline=1"
                    title="MSAJCE Campus Feature Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    tabIndex={-1}
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900" />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 3: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      {/* ========================================================================= */}
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

      {/* ========================================================================= */}
      {/* 5. CULTURAL OPPORTUNITIES: Canvas B (#F3F3F2 / #18181B)                   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Full-Width One-Line Section Header: Title Only */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Cultural opportunities abound
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Department List (No Full Capital Letters, Libre Franklin Font) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="lg:col-span-6"
            >
              <ul className="divide-y divide-border/40">
                {academicDepartments.map((dept, idx) => (
                  <li key={idx}>
                    <Link
                      to="/programmes-offered"
                      className="flex items-center justify-between py-3.5 px-2.5 sm:px-3 hover:bg-primary/[0.04] group transition-colors"
                    >
                      <span className="font-libre text-sm sm:text-base font-medium text-foreground/90 group-hover:text-primary group-hover:font-semibold transition-colors">
                        {dept}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-primary shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: 2x2 Square Cultural Imagery Showcase (Pure Images, No Text Overlays) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: 0.08, ease: smoothEase }}
              className="lg:col-span-6 sticky top-24"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    src: "/images/moments/moment-2-dancers.jpg",
                    alt: "Dance & Performing Arts Showcase",
                  },
                  {
                    src: "/images/moments/moment-3-robie.jpg",
                    alt: "Collegiate Architecture & Heritage",
                  },
                  {
                    src: "/images/moments/moment-4-singer.jpg",
                    alt: "Live Music & Cultural Expression",
                  },
                  {
                    src: "/images/moments/moment-5-street.jpg",
                    alt: "Vibrant Neighborhood & Student Streetscape",
                  },
                ].map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-muted shadow-xs border border-border/40"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 4: Canvas B (#F3F3F2 / #18181B) -> Canvas A (White / #121214) */}
      {/* ========================================================================= */}
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

      {/* ========================================================================= */}
      {/* 6. WHY JOIN MSAJCE ?: Canvas A (White / #121214)                          */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-14 sm:py-16 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 space-y-6">
          {/* Header Bar: Title Only */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Why Join MSAJCE ?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="divide-y divide-border/40 font-libre"
          >
            {whyJoinReasons.map((reason, idx) => (
              <div
                key={idx}
                className="py-4 px-2 sm:px-3 flex items-start gap-4 hover:bg-primary/[0.03] transition-colors"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                  {reason}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 5: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      {/* ========================================================================= */}
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

      {/* ========================================================================= */}
      {/* 7. AT THE HEART OF SIPCOT 5-IMAGE STRIP: Canvas B (#F3F3F2 / #18181B)    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Centered Minimal Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-oswald uppercase tracking-[0.25em] text-primary">
              AT THE HEART OF SIPCOT
            </h2>
          </motion.div>

          {/* 5-Column Exact Horizontal Photographic Strip (Pure Minimal Images, No Overlays) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5 md:gap-3">
            {[
              { src: "/images/doorstep/doorstep-1.jpg", alt: "Architectural Heritage" },
              { src: "/images/doorstep/doorstep-2.jpg", alt: "Urban Transit & Street Culture" },
              { src: "/images/doorstep/doorstep-3.jpg", alt: "Waterfront & Downtown Bridge" },
              { src: "/images/doorstep/doorstep-4.jpg", alt: "Lakefront Sunset Skyline" },
              { src: "/images/doorstep/doorstep-5.jpg", alt: "Historic Theatre & Arts District" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: smoothEase }}
                className="relative w-full aspect-[3/4] overflow-hidden bg-muted shadow-2xs rounded-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
