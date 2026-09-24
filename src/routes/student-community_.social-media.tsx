import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  ArrowRight,
  Copy,
  Check,
  Search,
} from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1] as const;
const cubicEase = [0.76, 0, 0.24, 1] as const;

const title = "Social Media Directory — MSAJCE Official Digital Channels";
const description =
  "Official social media directory of Mohamed Sathak A. J. College of Engineering. Connect with official institutional channels, department handles, and student club platforms.";

export const Route = createFileRoute("/student-community_/social-media")({
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
  component: SocialMediaDirectoryPage,
});

/* Institutional Benchmark Metrics */
const heroStats = [
  { value: "15.4K", label: "Instagram Followers" },
  { value: "28K", label: "LinkedIn Connections" },
  { value: "12K", label: "YouTube Subscribers" },
  { value: "22K", label: "Facebook Community" },
];

/* Primary Institutional Channels */
const primaryChannels = [
  {
    platform: "Instagram",
    handle: "@msajce_official",
    followers: "15.4K",
    unit: "Followers",
    desc: "Daily campus life moments, reels, graduation highlights, hackathon announcements, and cultural fest updates.",
    icon: Instagram,
    url: "https://instagram.com/msajce_official",
    color: "#E1306C",
    badge: "Official Main Channel",
  },
  {
    platform: "LinkedIn",
    handle: "MSAJCE Chennai",
    followers: "28K",
    unit: "Connections",
    desc: "Placement drives, MoU signings, alumni achievements, faculty research publications, and corporate partnerships.",
    icon: Linkedin,
    url: "https://linkedin.com/school/msajce",
    color: "#0A66C2",
    badge: "Placements & Careers",
  },
  {
    platform: "YouTube",
    handle: "MSAJCE Media",
    followers: "12K",
    unit: "Subscribers",
    desc: "Full-length Graduation Day livestreams, TEDx talks, virtual campus and lab tours, and keynote speeches.",
    icon: Youtube,
    url: "https://youtube.com/@msajce",
    color: "#FF0000",
    badge: "Video Highlights",
  },
  {
    platform: "Facebook",
    handle: "msajceofficial",
    followers: "22K",
    unit: "Community",
    desc: "Official university circulars, admission notifications, parent updates, and sports meet photo albums.",
    icon: Facebook,
    url: "https://facebook.com/msajceofficial",
    color: "#1877F2",
    badge: "Community Hub",
  },
];

/* Departmental Instagram Handles */
const departmentHandles = [
  { dept: "Computer Science & Engineering", code: "CSE", handle: "@msajce_cse", url: "https://instagram.com" },
  { dept: "Artificial Intelligence & Data Science", code: "AI & DS", handle: "@msajce_aids", url: "https://instagram.com" },
  { dept: "Electronics & Communication Engg.", code: "ECE", handle: "@msajce_ece", url: "https://instagram.com" },
  { dept: "Information Technology", code: "IT", handle: "@msajce_it", url: "https://instagram.com" },
  { dept: "Mechanical Engineering", code: "MECH", handle: "@msajce_mech", url: "https://instagram.com" },
  { dept: "Civil Engineering", code: "CIVIL", handle: "@msajce_civil", url: "https://instagram.com" },
];

/* Student Clubs & Platform Handles */
const clubHandles = [
  { name: "TEDxMSAJCE", handle: "@tedxmsajce", platform: "Instagram", url: "https://instagram.com" },
  { name: "Rotaract Club of MSAJCE", handle: "@rotaract_msajce", platform: "Instagram", url: "https://instagram.com" },
  { name: "NSS Unit MSAJCE", handle: "@nss_msajce", platform: "Instagram", url: "https://instagram.com" },
  { name: "MSAJCE Sports Board", handle: "@sports_msajce", platform: "Instagram", url: "https://instagram.com" },
];

/* Official Guidelines */
const socialGuidelines = [
  "Verify official channels by looking for the blue university authorization badge and cross-referencing handles listed on this page.",
  "Departmental social media accounts are managed directly by designated faculty coordinators and elected student media heads.",
  "Student clubs submitting event coverage, live reels, or press releases must route materials through the MSAJCE Media Cell.",
  "All official campus publications, photo albums, and video archives adhere to institutional brand and privacy standards.",
];

function SocialMediaDirectoryPage() {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);
  const [filterTab, setFilterTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCopy = (handleText: string) => {
    navigator.clipboard.writeText(handleText);
    setCopiedHandle(handleText);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  const filteredDepts = departmentHandles.filter(
    (d) =>
      (filterTab === "All" || filterTab === "Departments") &&
      (d.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredClubs = clubHandles.filter(
    (c) =>
      (filterTab === "All" || filterTab === "Clubs") &&
      (c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.handle.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white"
    >
      {/* ========================================================================= */}
      {/* 1. SLIDING MOTION HERO SECTION (Admission Eligibility Style)              */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden h-auto lg:h-[72vh] min-h-[500px] flex flex-col lg:block bg-[#18181B]">
        {/* Desktop Image with Motion Reveal */}
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 0.1, ease: cubicEase }}
          className="absolute inset-y-0 right-0 z-10 hidden lg:block pointer-events-none"
        >
          <img
            src="/images/social_media_directory.jpg"
            alt="MSAJCE Social Media Network"
            className="w-full h-full object-cover object-center brightness-95"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
        </motion.div>

        {/* Accent sliding block (The Crimson Edge) */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "51%" }}
          transition={{ duration: 1.2, delay: 0.05, ease: cubicEase }}
          className="absolute inset-y-0 left-0 bg-primary z-20 hidden lg:block shadow-2xl"
          style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
        />

        {/* Sliding Background from Left with Diagonal Edge */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "50%" }}
          transition={{ duration: 1.2, delay: 0.1, ease: cubicEase }}
          className="absolute inset-y-0 left-0 bg-background dark:bg-[#121214] z-30 hidden lg:block"
          style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
        />

        {/* Mobile Image */}
        <div className="w-full h-[300px] relative lg:hidden block z-10">
          <img
            src="/images/social_media_directory.jpg"
            alt="MSAJCE Social Media Network"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[48%] px-6 py-12 md:py-16 lg:px-10 xl:px-12 flex flex-col justify-center z-40 relative lg:absolute lg:inset-y-0 lg:left-0 h-full bg-background dark:bg-[#121214] lg:bg-transparent">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-primary">
                Digital Campus Network
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald uppercase leading-[1.05] tracking-tight text-primary mb-4">
              SOCIAL <br />
              MEDIA
            </h1>

            <p className="text-sm md:text-base font-medium text-muted-foreground leading-relaxed max-w-md font-libre">
              Connect directly with the digital pulse of MSAJCE across verified institutional platforms, engineering department hubs, and student-led channels.
            </p>
          </motion.div>
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
              Official University Digital Media Channels
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
                  src="/images/social_media_directory.jpg"
                  alt="MSAJCE Social Media Network"
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
                  Connect directly with Mohamed Sathak A. J. College of Engineering across verified digital platforms for real-time announcements, campus highlights, placement news, and event livestreams.
                </p>
                <p className="text-sm sm:text-base font-medium text-foreground/90 font-libre leading-relaxed">
                  Our official directory provides authentic links and copyable handles for institutional handles, engineering stream pages, and student-led organization hubs.
                </p>
              </div>

              {/* 3-Pillar Highlight Grid */}
              <div className="pt-5 sm:pt-6 border-t border-border/40 grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4 sm:gap-x-6 lg:gap-x-8 font-libre">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Instagram className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      15.4K
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    Instagram Community
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Linkedin className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      28K
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    LinkedIn Network
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-1 pt-1 md:pt-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
                    <Youtube className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      12K
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    YouTube Subscribers
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
      {/* 3. VERIFIED INSTITUTIONAL CHANNELS: Canvas B (#F3F3F2 / #18181B)          */}
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
              Official University Social Platforms
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {primaryChannels.map((ch, idx) => (
              <motion.div
                key={ch.platform}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: smoothEase }}
                className="p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-white dark:bg-[#121214] shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-sm border border-border flex items-center justify-center bg-white dark:bg-[#121214] shadow-2xs"
                        style={{ color: ch.color }}
                      >
                        <ch.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-oswald text-foreground">
                          {ch.platform}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono text-muted-foreground">
                            {ch.handle}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(ch.handle)}
                            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            title="Copy handle"
                          >
                            {copiedHandle === ch.handle ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl sm:text-2xl font-black font-oswald text-primary">
                        {ch.followers}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                        {ch.unit}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-libre mb-4">
                    {ch.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-primary/10 text-primary font-bold">
                    {ch.badge}
                  </span>
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-oswald uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
                  >
                    Visit Channel
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
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
      {/* 4. DEPARTMENT & CLUB DIRECTORY: Canvas A (White / #121214)               */}
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
                Department &amp; Club Social Directory
              </h2>
              <p className="text-xs font-mono text-muted-foreground mt-1">
                Filter and copy handles for department hubs and student organizations
              </p>
            </div>

            {/* Filter and Search controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="flex items-center gap-1">
                {["All", "Departments", "Clubs"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilterTab(tab)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase font-bold rounded-sm border transition-colors cursor-pointer ${
                      filterTab === tab
                        ? "bg-primary text-white border-primary"
                        : "bg-background text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search handle..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-1.5 bg-background border border-border rounded-sm text-xs font-libre text-foreground focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </motion.div>

          {/* Departments Grid */}
          {(filterTab === "All" || filterTab === "Departments") && (
            <div className="mb-10">
              <h3 className="text-sm font-bold font-oswald uppercase tracking-wider text-muted-foreground mb-4">
                Engineering Stream Instagram Hubs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDepts.map((d, idx) => (
                  <motion.div
                    key={d.code}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.45, delay: idx * 0.04, ease: smoothEase }}
                    className="p-4 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-[#F9F9F8] dark:bg-[#18181B] hover:border-primary/50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-sm bg-primary/10 text-primary flex items-center justify-center font-black font-oswald text-xs">
                        {d.code}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground font-oswald">
                          {d.dept}
                        </h4>
                        <span className="text-xs font-mono text-muted-foreground">
                          {d.handle}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(d.handle)}
                        className="text-muted-foreground hover:text-primary transition-colors p-1 cursor-pointer"
                        title="Copy handle"
                      >
                        {copiedHandle === d.handle ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Clubs Grid */}
          {(filterTab === "All" || filterTab === "Clubs") && (
            <div>
              <h3 className="text-sm font-bold font-oswald uppercase tracking-wider text-muted-foreground mb-4">
                Student Organization &amp; Platform Channels
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredClubs.map((c, idx) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.45, delay: idx * 0.05, ease: smoothEase }}
                    className="p-4 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-[#F9F9F8] dark:bg-[#18181B] hover:border-primary/50 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-foreground font-oswald">
                        {c.name}
                      </h4>
                      <span className="text-xs font-mono text-muted-foreground">
                        {c.handle}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(c.handle)}
                        className="text-muted-foreground hover:text-primary transition-colors p-1 cursor-pointer"
                        title="Copy handle"
                      >
                        {copiedHandle === c.handle ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                      >
                        <Instagram className="w-4 h-4 text-[#E1306C]" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
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
      {/* 5. VERIFICATION POLICY: Canvas B (#F3F3F2 / #18181B)                      */}
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
              Official Verification &amp; Social Guidelines
            </h2>
          </motion.div>

          <div className="divide-y divide-border/40 font-libre bg-white dark:bg-[#121214] border border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-4 sm:p-6">
            {socialGuidelines.map((rule, idx) => (
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
      {/* 6. DIGITAL FOOTPRINT 5-IMAGE STRIP & INTERACTIVE HUB LINK: Canvas A      */}
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
              DIGITAL CAMPUS HIGHLIGHTS
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-12">
            {[
              { src: "/images/social_media_directory.jpg", alt: "Social Hub" },
              { src: "/images/alumni_section.jpg", alt: "Instagram Feed" },
              { src: "/images/accreditations_campus.jpg", alt: "LinkedIn News" },
              { src: "/images/eligibility_hero.jpg", alt: "YouTube Livestream" },
              { src: "/images/campus_happenings.jpg", alt: "Student Posts" },
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

          {/* Interactive Hub Link Card */}
          <div className="p-8 sm:p-12 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-[#F9F9F8] dark:bg-[#18181B] text-center">
            <h3 className="text-xl sm:text-3xl font-black font-oswald uppercase tracking-wide text-foreground mb-3">
              Full Interactive Social Media Hub
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-libre max-w-2xl mx-auto mb-6 leading-relaxed">
              Explore our dedicated interactive directory to filter handles by category, copy handles with one click, and access verification badges.
            </p>
            <Link
              to="/social-media"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/40 bg-white dark:bg-[#121214] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider font-oswald text-foreground transition-all duration-300 shadow-xs hover:text-white cursor-pointer select-none"
            >
              <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </span>
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                Open Interactive Social Media Hub
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
