import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Briefcase,
  Shield,
  Code2,
  Trophy,
  Mic2,
  Globe2,
  Sparkles,
  Palette,
  Search,
} from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1] as const;
const cubicEase = [0.76, 0, 0.24, 1] as const;

const title = "Campus Happenings — MSAJCE Clubs, Professional Societies & Campus Life";
const description =
  "Explore 20+ active student clubs, IEEE/CSI/IETE professional chapters, TEDxMSAJCE, NSS/YRC community units, and ASTRA fests at Mohamed Sathak A. J. College of Engineering.";

export const Route = createFileRoute("/student-community_/campus-happenings")({
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
  component: CampusHappeningsPage,
});

/* Institutional Benchmark Metrics */
const heroStats = [
  { value: "20+", label: "Student Activity Clubs" },
  { value: "7", label: "Professional Chapters" },
  { value: "100+", label: "Yearly Campus Events" },
  { value: "TEDx", label: "Licensed Chapter" },
];

/* Professional Societies */
const professionalSocieties = [
  {
    name: "CSI Student Chapter",
    badge: "Computing & IT",
    desc: "Computer Society of India collegiate chapter organizing coding hackathons, open-source developer bootcamps, and technical paper contests.",
  },
  {
    name: "IEEE Student Branch",
    badge: "Global Tech",
    desc: "Institute of Electrical and Electronics Engineers branch connecting students to international research publications, conferences, and technical workshops.",
  },
  {
    name: "ISTE Chapter",
    badge: "Technical Ed",
    desc: "Indian Society for Technical Education fostering faculty-student collaborative pedagogy, curriculum enrichment, and technical seminars.",
  },
  {
    name: "IETE Student Forum",
    badge: "Electronics & Telecom",
    desc: "Institution of Electronics and Telecommunication Engineers student forum dedicated to embedded systems, wireless communications, and IoT innovation.",
  },
  {
    name: "SAE India Collegiate Club",
    badge: "Automotive",
    desc: "Society of Automotive Engineers club designing custom vehicle prototypes, electric buggies, and participating in national BAJA events.",
  },
  {
    name: "ISHRAE Student Chapter",
    badge: "Thermal & HVAC",
    desc: "Indian Society of Heating, Refrigerating and Air Conditioning Engineers chapter providing specialized training in clean energy, refrigeration, and green buildings.",
  },
  {
    name: "IEI Student Chapter",
    badge: "Engineering Disciplines",
    desc: "The Institution of Engineers (India) chapter conducting inter-disciplinary technical lectures, industrial visits, and project exhibitions.",
  },
];

/* Social Service & Outreach Units */
const serviceOutreach = [
  {
    name: "NSS Unit (Est. 2001)",
    role: "National Service Scheme",
    desc: "Active since the founding year of MSAJCE. Conducts annual 7-day special rural camps, mass blood donation drives, tree plantations, and literacy drives.",
  },
  {
    name: "Youth Red Cross (YRC)",
    role: "Emergency & Relief",
    desc: "Focuses on disaster preparedness, certified first-aid training, health awareness rallies, and voluntary blood donor registries.",
  },
  {
    name: "Rotaract Club of MSAJCE",
    role: "Youth Leadership",
    desc: "Affiliated with Rotary International. Develops professional leadership, civic responsibility, and executes community welfare projects.",
  },
  {
    name: "Unnat Bharat Abhiyan (UBA)",
    role: "Rural Transformation",
    desc: "Flagship Government of India initiative where MSAJCE adopts rural village clusters in Chengalpattu district to introduce tech-enabled solutions.",
  },
];

/* Campus Activity Clubs */
const activityClubs = [
  {
    category: "Technical & Innovation",
    icon: Code2,
    clubs: [
      { name: "Coding & Competitive Programming Club", desc: "Weekly algorithmic challenges, LeetCode marathons, and prep for national coding hackathons." },
      { name: "Robotics & Automation Club", desc: "Hands-on robotics fabrication, autonomous navigation, drone piloting, and microcontroller workshops." },
      { name: "Energy & Eco Club", desc: "Student-driven environmental sustainability initiatives, solar energy audits, and campus green drives." },
    ],
  },
  {
    category: "Cultural & Creative Arts",
    icon: Palette,
    clubs: [
      { name: "Fine Arts & Photography Club", desc: "Annual art exhibitions, photography contests, and official student chroniclers of college fests." },
      { name: "Tamil Mandram", desc: "Promotes regional literature, debates (Pattimandram), oratory competitions, and grand Tamil heritage celebrations." },
      { name: "Music, Dance & Drama Troupe", desc: "Vocal and instrumental bands, contemporary and classical dance ensembles, and street plays." },
    ],
  },
  {
    category: "Sports & Athletics",
    icon: Trophy,
    clubs: [
      { name: "Sports Club & Physical Education", desc: "Competitive cricket, football, basketball, volleyball teams with dedicated coaching and synthetic courts." },
      { name: "ARENA Inter-Collegiate Tournament", desc: "Flagship annual sports festival drawing dozens of engineering colleges from across Tamil Nadu." },
    ],
  },
];

/* Flagship Events */
const flagshipEvents = [
  {
    title: "TEDxMSAJCE",
    icon: Mic2,
    desc: "Independently organized TED-licensed event platform bringing visionary researchers, artists, and innovators to share game-changing ideas on campus.",
  },
  {
    title: "ASTRA Cultural Extravaganza",
    icon: Sparkles,
    desc: "The premier inter-collegiate annual cultural celebration featuring celebrity performances, battle of bands, fashion showcases, and creative arts.",
  },
  {
    title: "RADEST & National Symposiums",
    icon: Globe2,
    desc: "Annual inter-college technical symposiums and peer-reviewed conferences offering students a platform to publish original research and engineering projects.",
  },
];

function CampusHappeningsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [clubSearch, setClubSearch] = useState<string>("");

  const filteredClubCategories = activityClubs
    .map((cat) => ({
      ...cat,
      clubs: cat.clubs.filter(
        (c) =>
          (selectedCategory === "All" || cat.category.toLowerCase().includes(selectedCategory.toLowerCase())) &&
          (c.name.toLowerCase().includes(clubSearch.toLowerCase()) ||
            c.desc.toLowerCase().includes(clubSearch.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.clubs.length > 0);

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
            src="/images/campus_happenings.jpg"
            alt="MSAJCE Campus Life"
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
              Campus Happenings
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
              Vibrant Campus Culture &amp; Student Ecosystem
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
                  src="/images/campus_happenings.jpg"
                  alt="MSAJCE Campus Culture"
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
                  Over 20 active student clubs, 7 professional societies, community service units, and annual cultural celebrations create an invigorating atmosphere at MSAJCE that sparks leadership, artistic expression, and technical curiosity.
                </p>
                <p className="text-sm sm:text-base font-medium text-foreground/90 font-libre leading-relaxed">
                  From independently licensed TEDx conferences to high-energy ASTRA cultural festivals, national hackathons, and NSS community camps in Chengalpattu district, MSAJCE empowers students beyond classroom boundaries.
                </p>
              </div>

              {/* 3-Pillar Highlight Grid */}
              <div className="pt-5 sm:pt-6 border-t border-border/40 grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4 sm:gap-x-6 lg:gap-x-8 font-libre">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Mic2 className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      TEDx
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    Licensed Platform
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      ASTRA
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    Cultural Extravaganza
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-1 pt-1 md:pt-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
                    <Globe2 className="w-5 h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-oswald font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                      RADEST
                    </span>
                  </div>
                  <div className="font-libre text-[13px] sm:text-base font-medium text-foreground/90">
                    National Symposiums
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
      {/* 3. FLAGSHIP EVENTS: Canvas B (#F3F3F2 / #18181B)                         */}
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
              Flagship Campus Events &amp; Platforms
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flagshipEvents.map((evt, idx) => (
              <motion.div
                key={evt.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: smoothEase }}
                className="p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-white dark:bg-[#121214] shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <evt.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-oswald uppercase tracking-wide text-foreground mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-libre">
                    {evt.desc}
                  </p>
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
      {/* 4. PROFESSIONAL SOCIETIES: Canvas A (White / #121214)                     */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="mb-5 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Industry-Recognized Professional Societies (7 Chapters)
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {professionalSocieties.map((soc, idx) => (
              <motion.div
                key={soc.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: smoothEase }}
                className="p-5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-[#F9F9F8] dark:bg-[#18181B] hover:border-primary/50 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-primary/10 text-primary font-bold">
                      {soc.badge}
                    </span>
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-base font-bold font-oswald uppercase tracking-wide text-foreground mb-2">
                    {soc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-libre">
                    {soc.desc}
                  </p>
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
      {/* 5. SOCIAL SERVICE UNITS: Canvas B (#F3F3F2 / #18181B)                     */}
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
              Community Service &amp; Volunteering Units
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceOutreach.map((unit, idx) => (
              <motion.div
                key={unit.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: smoothEase }}
                className="p-5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/60 bg-white dark:bg-[#121214] shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">
                    {unit.role}
                  </span>
                  <h3 className="text-base font-bold font-oswald uppercase tracking-wide text-foreground mb-2">
                    {unit.name}
                  </h3>
                  <p className="text-xs text-foreground/80 leading-relaxed font-libre">
                    {unit.desc}
                  </p>
                </div>
              </motion.div>
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
      {/* 6. STUDENT CLUBS DIRECTORY: Canvas A (White / #121214)                    */}
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
                Student Activity Clubs Directory
              </h2>
              <p className="text-xs font-mono text-muted-foreground mt-1">
                20+ Active Student Organizations &amp; Ensembles
              </p>
            </div>

            {/* Filter and Search controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {["All", "Technical", "Cultural", "Sports"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase font-bold rounded-sm border transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-primary text-white border-primary"
                        : "bg-background text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search club name..."
                  value={clubSearch}
                  onChange={(e) => setClubSearch(e.target.value)}
                  className="pl-9 pr-3 py-1.5 bg-background border border-border rounded-sm text-xs font-libre text-foreground focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {filteredClubCategories.map((cat) => (
              <div
                key={cat.category}
                className="border border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-[#F9F9F8] dark:bg-[#18181B] p-6"
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/40">
                  <div className="w-8 h-8 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                    <cat.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-wide text-foreground">
                    {cat.category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {cat.clubs.map((c) => (
                    <div
                      key={c.name}
                      className="p-4 rounded-sm bg-white dark:bg-[#121214] border border-border/60 hover:border-primary/50 transition-colors"
                    >
                      <h4 className="text-sm font-bold text-foreground mb-1 font-oswald">
                        {c.name}
                      </h4>
                      <p className="text-xs text-foreground/80 leading-relaxed font-libre">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER 5: Canvas A -> Canvas B */}
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
      {/* 7. CAMPUS LIFE 5-IMAGE PHOTOGRAPHIC STRIP: Canvas B (#F3F3F2 / #18181B)  */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="text-center max-w-2xl mx-auto mb-6"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-oswald uppercase tracking-[0.18em] text-primary">
              CAMPUS LIFE IN PICTURES
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {[
              { src: "/images/campus_happenings.jpg", alt: "Club Hackathon" },
              { src: "/images/alumni_section.jpg", alt: "Cultural Performance" },
              { src: "/images/accreditations_campus.jpg", alt: "Campus Sports" },
              { src: "/images/eligibility_hero.jpg", alt: "NSS Camp" },
              { src: "/images/convocation_section.jpg", alt: "TEDx Stage" },
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
