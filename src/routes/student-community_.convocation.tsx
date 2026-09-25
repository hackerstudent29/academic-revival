import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ExternalLink,
  Award,
  Scroll,
  Camera,
  ShieldCheck,
} from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1] as const;
const cubicEase = [0.76, 0, 0.24, 1] as const;

const title = "Convocation & Graduation Day — MSAJCE Ceremonies";
const description =
  "Official Graduation Day and Convocation details of Mohamed Sathak A. J. College of Engineering. Celebrating 19 editions of academic excellence, rank holders, and degree conferment.";

export const Route = createFileRoute("/student-community_/convocation")({
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
  component: ConvocationPage,
});

/* Institutional Benchmark Metrics */
const heroStats = [
  { value: "19", label: "Graduation Editions" },
  { value: "450+", label: "Conferred Annually" },
  { value: "100%", label: "Academic Integrity" },
  { value: "Autonomous", label: "Anna Univ Affiliated" },
];

/* Graduation Days Timeline */
const graduationDays = [
  {
    year: "2026",
    edition: "19th Graduation Day",
    batches: "Class of 2025 – 2026",
    detail: "Autonomous conferment of undergraduate B.E./B.Tech and postgraduate M.E. degrees in the presence of distinguished academic leaders and industry stalwarts.",
    photosUrl: "https://photos.app.goo.gl/iiHymHmB2W9BhU2z8",
    badge: "Latest Edition",
    stats: "450+ Graduates Conferred",
  },
  {
    year: "2025",
    edition: "18th Graduation Day",
    batches: "Class of 2024",
    detail: "Celebrated on 22nd February 2025 in the grand college auditorium. Keynote address delivered by prominent tech executives and AICTE representatives.",
    photosUrl: "https://photos.app.goo.gl/LF3brje3EwmQcbx18",
    badge: "Completed",
    stats: "420+ Degrees Awarded",
  },
  {
    year: "2024",
    edition: "17th Graduation Day",
    batches: "Batches 2018–2022 & 2019–2023",
    detail: "Conferred engineering degrees upon graduating scholars entering top global MNCs, R&D labs, and prestigious international master's programs.",
    photosUrl: "https://photos.app.goo.gl/bcuAUkWWBcyFVGH56",
    badge: "Archive",
    stats: "510+ Scholars Conferred",
  },
  {
    year: "2022",
    edition: "15th & 16th Graduation Days",
    batches: "Batches 2016–2020 & 2017–2021",
    detail: "Grand dual-day ceremonial convocations conducted on 29th and 30th October 2022 following post-pandemic university reopenings.",
    photosUrl: "https://photos.app.goo.gl/bcuAUkWWBcyFVGH56",
    badge: "Archive",
    stats: "800+ Dual Batch Graduates",
  },
];

/* Ceremony Highlights */
const ceremonyHighlights = [
  {
    title: "Solemn Academic Procession",
    icon: GraduationCap,
    desc: "Led by the Chairman, Principal, Academic Council members, and department heads dressed in traditional academic ceremonial regalia.",
  },
  {
    title: "Medalists & Rank Holders",
    icon: Award,
    desc: "Felicitation of gold medalists, university rank holders, and department toppers across all B.E., B.Tech, and M.E. disciplines.",
  },
  {
    title: "The Engineer's Oath",
    icon: Scroll,
    desc: "Graduating scholars take the professional engineering pledge committing their technical knowledge to societal advancement and ethical innovation.",
  },
  {
    title: "Keynote Convocation Address",
    icon: ShieldCheck,
    desc: "Inspirational address delivered by eminent scientists, industry CEOs, and Anna University academic dignitaries.",
  },
];

/* Academic Honors */
const academicHonors = [
  {
    category: "Gold Medal of Academic Excellence",
    awardee: "First Rank Holder overall in B.E./B.Tech",
    perk: "Gold Medal & Institutional Certificate of Distinction",
  },
  {
    category: "Anna University Rank Holders",
    awardee: "Top 10 Percentile Rankers in University Exams",
    perk: "Trophy & Commendation Scroll",
  },
  {
    category: "Best Outgoing Engineer Award",
    awardee: "All-Round Student Leader (Academics, Research & Leadership)",
    perk: "Chairman's Cash Prize & Plaque",
  },
];

/* Graduand Guidelines */
const graduandGuidelines = [
  "Register in advance via the official convocation portal with your degree registration number, current employment details, and parent attendee count.",
  "Academic gowns and ceremonial hoods must be collected on campus at designated counter booths prior to entering the main auditorium hall.",
  "Graduands must be seated in assigned row numbers at least 45 minutes prior to the arrival of the Academic Procession. Late entries are restricted.",
  "Only official university photographers are permitted near the ceremonial dais. High-resolution ceremony photo archives are published online.",
];

function ConvocationPage() {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const filteredDays = selectedYear === "All"
    ? graduationDays
    : graduationDays.filter((d) => d.year === selectedYear);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white"
    >
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/convocation_section.jpg"
            alt="MSAJCE Graduation Ceremony"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero with Correct Container Alignment */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Convocation & Graduation Day
            </h1>
          </div>
        </div>
      </section>

      {/* Docked Facts & Figures Stats Strip */}
      <div className="w-full bg-[#18181B] text-white py-6 border-b border-border/20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:divide-x md:divide-white/15">
            {heroStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 1.2 + idx * 0.06, ease: smoothEase }}
                className="first:pl-0 md:pl-4 lg:pl-6 space-y-0.5"
              >
                <div className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-black text-primary dark:text-[#E11D48] tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-libre leading-snug pt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* ========================================================================= */}
      {/* 2. INTRODUCTORY SECTION: Canvas A (White / #121214)                       */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-5 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Honoring Academic Excellence &amp; Transition to Engineering Practice
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-stretch">
            {/* Left Column: Asymmetrical Image Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="lg:col-span-5 flex flex-col"
            >
              <div className="relative w-full h-full min-h-[240px] sm:min-h-[300px] md:min-h-[360px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm shadow-xl bg-muted border border-border/40">
                <img
                  src="/images/convocation_section.jpg"
                  alt="MSAJCE Graduation Day"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>
            </motion.div>

            {/* Right Column: Narrative & 3-Pillar Highlight Grid */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08, ease: smoothEase }}
              className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6"
            >
              <div className="space-y-3.5 sm:space-y-5">
                <p className="text-sm sm:text-base font-medium text-foreground/90 font-libre leading-relaxed">
                  As an autonomous engineering institution affiliated with Anna University and approved by AICTE, Mohamed Sathak A. J. College of Engineering conducts its own prestigious Graduation Day ceremonies with formal academic dignity.
                </p>
                <p className="text-sm sm:text-base font-medium text-foreground/90 font-libre leading-relaxed">
                  With 19 editions conducted with grandeur, each ceremony gathers proud families, distinguished mentors, and corporate icons to celebrate the launch of engineering careers across B.E., B.Tech, and M.E. programs.
                </p>
              </div>

              {/* 3-Pillar Highlight Grid */}
              <div className="pt-5 sm:pt-6 border-t border-border/40 grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4 sm:gap-x-6 lg:gap-x-8 font-libre">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <GraduationCap className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      19 Editions
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    Grand Convocations
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Award className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      Gold Medals
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    Rank Holders Conferred
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-1 pt-1 md:pt-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
                    <Scroll className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      Solemn Oath
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    Engineer's Pledge
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER 1: Canvas A -> Canvas B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-10 md:h-14 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. CEREMONIAL HIGHLIGHTS & MEDALS: Canvas B (#F3F3F2 / #18181B)          */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-5 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Ceremonial Highlights &amp; Honors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {ceremonyHighlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: smoothEase }}
                className="p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-white dark:bg-[#121214] shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-oswald uppercase tracking-wide text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-libre">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Medals Spotlight */}
          <div className="p-6 sm:p-8 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-white dark:bg-[#121214]">
            <h3 className="text-lg sm:text-xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Academic Medals &amp; Distinction Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-libre">
              {academicHonors.map((h) => (
                <div key={h.category} className="p-4 rounded-sm bg-[#F9F9F8] dark:bg-[#18181B] border border-border/60">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-1">
                    Honors Award
                  </span>
                  <h4 className="text-base font-bold font-oswald text-foreground mb-1">
                    {h.category}
                  </h4>
                  <p className="text-xs text-foreground/80 mb-2">
                    {h.awardee}
                  </p>
                  <span className="text-[11px] font-mono text-muted-foreground block pt-2 border-t border-border/40">
                    {h.perk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER 2: Canvas B -> Canvas A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-10 md:h-14 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. CHRONICLE OF GRADUATION DAYS: Canvas A (White / #121214)              */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4"
          >
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Chronicle of Graduation Days
              </h2>
              <p className="text-xs font-mono text-muted-foreground mt-1">
                Historical Ceremonies &amp; Official Photo Archives
              </p>
            </div>

            {/* Year Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {["All", "2026", "2025", "2024", "2022"].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase font-bold rounded-sm border transition-colors cursor-pointer ${
                    selectedYear === yr
                      ? "bg-primary text-white border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="divide-y divide-border/40 border border-border/60 bg-[#F9F9F8] dark:bg-[#18181B] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs px-4 sm:px-6">
            {filteredDays.map((gd, idx) => (
              <motion.div
                key={gd.edition}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: smoothEase }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 sm:py-8"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 md:w-80 shrink-0">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-oswald text-foreground">
                        {gd.year}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-primary/10 text-primary font-bold">
                        {gd.badge}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-primary block mt-0.5">
                      {gd.edition}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono block">
                      {gd.batches}
                    </span>
                  </div>
                </div>

                <div className="flex-1 md:px-6">
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-libre mb-2">
                    {gd.detail}
                  </p>
                  <span className="inline-block text-[11px] font-mono text-primary font-semibold bg-primary/5 px-2.5 py-0.5 rounded-sm border border-primary/20">
                    {gd.stats}
                  </span>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <a
                    href={gd.photosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/40 hover:border-primary bg-background text-xs font-bold font-oswald uppercase tracking-wider text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-xs"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    Official Photo Album
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER 3: Canvas A -> Canvas B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-10 md:h-14 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 5. GRADUAND GUIDELINES: Canvas B (#F3F3F2 / #18181B)                      */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-5 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Guidelines for Graduands &amp; Parents
            </h2>
          </motion.div>

          <div className="divide-y divide-border/40 font-libre bg-white dark:bg-[#121214] border border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 sm:p-6">
            {graduandGuidelines.map((rule, idx) => (
              <div
                key={idx}
                className="py-3.5 sm:py-4 px-1 sm:px-2 flex items-start gap-3 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER 4: Canvas B -> Canvas A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-10 md:h-14 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 6. CONVOCATION MOMENTS 5-IMAGE STRIP: Canvas A (White / #121214)         */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="text-center max-w-2xl mx-auto mb-6"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-oswald uppercase tracking-[0.18em] text-primary">
              CONVOCATION CEREMONY GALLERY
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {[
              { src: "/images/convocation_section.jpg", alt: "Dais Ceremony" },
              { src: "/images/alumni_section.jpg", alt: "Graduates Seated" },
              { src: "/images/accreditations_campus.jpg", alt: "Auditorium View" },
              { src: "/images/eligibility_hero.jpg", alt: "Procession Entrance" },
              { src: "/images/campus_happenings.jpg", alt: "Family Celebrations" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: smoothEase }}
                className={`relative w-full overflow-hidden bg-muted shadow-2xs rounded-sm border border-border/20 ${
                  idx === 4
                    ? "col-span-2 sm:col-span-1 aspect-[16/9] sm:aspect-[3/4]"
                    : "aspect-[3/4]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
