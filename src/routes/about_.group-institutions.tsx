import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  GraduationCap,
  Stethoscope,
  BookOpen,
  MapPin,
  ExternalLink,
  Award,
  CheckCircle2,
} from "lucide-react";

const title = "Group of Institutions — Mohamed Sathak Trust";
const description =
  "Complete official directory of the 18 premier higher education institutions managed by Mohamed Sathak Trust across Chennai, Kilakarai, and Ramanathapuram.";

export const Route = createFileRoute("/about_/group-institutions")({
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
  component: GroupOfInstitutionsPage,
});

const chennaiInstitutions = [
  {
    code: "01",
    name: "Mohamed Sathak A.J. College of Engineering (MSAJCE)",
    category: "Engineering & Technology",
    location: "Siruseri SIPCOT IT Park, OMR, Chennai",
    desc: "Autonomous engineering institution offering UG, PG, and PhD research programmes in Engineering, Artificial Intelligence, and Technology.",
    isFlagship: true,
  },
  {
    code: "02",
    name: "Mohamed Sathak A.J. Academy of Architecture",
    category: "Architecture & Design",
    location: "Siruseri OMR, Chennai",
    desc: "Council of Architecture (CoA) approved institution delivering premier 5-year B.Arch degree programmes and urban design research.",
    isFlagship: false,
  },
  {
    code: "03",
    name: "Mohamed Sathak College of Arts And Science",
    category: "Arts, Science & Commerce",
    location: "Sholinganallur, OMR, Chennai",
    desc: "NAAC accredited co-educational multi-faculty institution offering 20+ UG and PG programmes in Computer Science, Biotechnology, Commerce, and Humanities.",
    isFlagship: false,
  },
  {
    code: "04",
    name: "Mohamed Sathak A.J. College of Nursing",
    category: "Health Sciences",
    location: "Chennai",
    desc: "Premier nursing education center with clinical affiliations to top multispecialty corporate hospitals in Chennai.",
    isFlagship: false,
  },
  {
    code: "05",
    name: "Mohamed Sathak A.J. College of Pharmacy",
    category: "Pharmaceutical Sciences",
    location: "Sholinganallur, Chennai",
    desc: "Pharmacy Council of India (PCI) approved campus providing B.Pharm, M.Pharm, and Pharm.D doctoral pharmaceutical programmes.",
    isFlagship: false,
  },
  {
    code: "06",
    name: "Mohamed Sathak A.J. College of Physiotherapy",
    category: "Physical Therapy & Rehabilitation",
    location: "Chennai",
    desc: "Delivering Bachelor of Physiotherapy (BPT) with extensive clinical internships, sports rehabilitation, and neurological therapy practice.",
    isFlagship: false,
  },
  {
    code: "07",
    name: "Mohamed Sathak Teacher Training College",
    category: "Teacher Education",
    location: "Chennai",
    desc: "National Council for Teacher Education (NCTE) recognized institution shaping future pedagogy specialists and academic leaders.",
    isFlagship: false,
  },
  {
    code: "08",
    name: "Mohamed Sathak Matric & Hr. Sec. School",
    category: "K-12 Schooling",
    location: "Chennai",
    desc: "Providing holistic secondary and higher secondary schooling focusing on academic distinction, sports facilities, and moral education.",
    isFlagship: false,
  },
];

const southernInstitutions = [
  {
    code: "09",
    name: "Mohamed Sathak Engineering College (MSEC)",
    category: "Engineering & Technology",
    location: "Kilakarai, Ramanathapuram",
    desc: "Established in 1984 — the pioneering first self-financing engineering college in the State of Tamil Nadu.",
    isPioneer: true,
  },
  {
    code: "10",
    name: "Mohamed Sathak Hamid College of Arts & Science for Women",
    category: "Women's Higher Education",
    location: "Ramanathapuram",
    desc: "Empowering rural and semi-urban women with quality undergraduate and postgraduate education in Arts, Science, and Commerce.",
    isPioneer: false,
  },
  {
    code: "11",
    name: "Syed Hameedha Arts & Science College",
    category: "Arts & Science",
    location: "Kilakarai, Ramanathapuram",
    desc: "Co-educational higher education center offering undergraduate and master's degree programmes in computing, business, and sciences.",
    isPioneer: false,
  },
  {
    code: "12",
    name: "Mohamed Sathak Polytechnic College",
    category: "Polytechnic Diploma",
    location: "Kilakarai, Ramanathapuram",
    desc: "AICTE approved 3-year diploma technical education across Mechanical, Civil, ECE, EEE, and Computer Engineering disciplines.",
    isPioneer: false,
  },
  {
    code: "13",
    name: "Mohamed Sathak I.T.I. (Industrial Training Institute)",
    category: "Vocational Trades",
    location: "Kilakarai, Ramanathapuram",
    desc: "Skill-based technical trade certifications empowering rural youth with immediate vocational self-employability.",
    isPioneer: false,
  },
  {
    code: "14",
    name: "Syed Hameedha Arabic College",
    category: "Oriental Studies",
    location: "Kilakarai, Ramanathapuram",
    desc: "Specialized theological and linguistic academy dedicated to Arabic language, literature, and Islamic heritage studies.",
    isPioneer: false,
  },
  {
    code: "15",
    name: "Mohamed Sathak Dastagir Matriculation Hr. Sec. School",
    category: "K-12 Schooling",
    location: "Kilakarai, Ramanathapuram",
    desc: "State Board curriculum secondary school delivering foundational and higher secondary education.",
    isPioneer: false,
  },
  {
    code: "16",
    name: "Mohamed Sathak Dastagir Teacher Training Institute",
    category: "Teacher Training",
    location: "Ramanathapuram",
    desc: "Diploma in Elementary Education (D.El.Ed) institution producing dedicated primary educators.",
    isPioneer: false,
  },
  {
    code: "17",
    name: "Mohamed Sathak Kabeer Public School",
    category: "CBSE Schooling",
    location: "Ramanathapuram",
    desc: "CBSE affiliated central curriculum English medium schooling with modern digital smart classrooms and athletic grounds.",
    isPioneer: false,
  },
  {
    code: "18",
    name: "Mohamed Sathak Dastagir Matric. Hr. Sec. School for Girls",
    category: "Girls K-12 Schooling",
    location: "Ramanathapuram",
    desc: "Dedicated all-girls higher secondary school fostering academic excellence, cultural values, and female empowerment.",
    isPioneer: false,
  },
];

export function GroupOfInstitutionsPage() {
  const [activeRegion, setActiveRegion] = useState<string>("all");

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground min-h-screen pt-0 md:pt-1 font-sans selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* SECTION 1: Canvas A (White / #121214) — GROUP INSTITUTIONS HERO           */}
      {/* ========================================================================= */}
      <section className="w-full pt-2 md:pt-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Header Bar */}
          <div className="border-b border-border pb-6 mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              ABOUT MSAJCE // EDUCATIONAL FOOTPRINT
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-foreground font-oswald leading-[0.95]">
              Group of 18 Institutions <br />
              <span className="text-primary font-oswald">Mohamed Sathak Trust</span>
            </h1>
          </div>

          {/* Hero Broadsheet Grid (Strictly Zero Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <p className="text-lg sm:text-xl md:text-2xl font-bold font-oswald uppercase text-foreground leading-snug tracking-tight">
                  Over five decades, the Mohamed Sathak Trust has built a vast network of 18 premier educational institutions spanning Engineering, Architecture, Paramedical Sciences, Arts, and Schooling across Tamil Nadu.
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
                <p>
                  From establishing the first self-financing engineering college in Tamil Nadu in 1984 (MSEC Kilakarai) to pioneering our 70-acre autonomous engineering and architecture campus in Chennai's Siruseri SIPCOT IT Park (MSAJCE), the Trust impacts tens of thousands of students annually.
                </p>
                <p>
                  Each institution is built with modern laboratories, accredited academic programs, experienced faculty mentors, and comprehensive career training to ensure students emerge as competent global professionals.
                </p>
              </div>
            </div>

            {/* Right: 4 Core Network Metrics Matrix */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 border-l border-border pl-0 lg:pl-8">
              <div className="border-b border-border pb-4">
                <span className="text-[11px] font-mono uppercase text-muted-foreground block">
                  Total Network
                </span>
                <span className="text-2xl sm:text-3xl font-black text-primary font-oswald block mt-1">
                  18 CAMPUSES
                </span>
                <span className="text-xs text-foreground/70 font-sans block mt-0.5">
                  Higher Education & Schools
                </span>
              </div>
              <div className="border-b border-border pb-4">
                <span className="text-[11px] font-mono uppercase text-muted-foreground block">
                  Major Centers
                </span>
                <span className="text-2xl sm:text-3xl font-black text-primary font-oswald block mt-1">
                  3 HUBS
                </span>
                <span className="text-xs text-foreground/70 font-sans block mt-0.5">
                  Chennai, Kilakarai & Ramnad
                </span>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase text-muted-foreground block">
                  Core Disciplines
                </span>
                <span className="text-2xl sm:text-3xl font-black text-primary font-oswald block mt-1">
                  6 DOMAINS
                </span>
                <span className="text-xs text-foreground/70 font-sans block mt-0.5">
                  Engg, Architecture, Medicine, Arts, K-12
                </span>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase text-muted-foreground block">
                  Global Reach
                </span>
                <span className="text-2xl sm:text-3xl font-black text-primary font-oswald block mt-1">
                  25,000+
                </span>
                <span className="text-xs text-foreground/70 font-sans block mt-0.5">
                  Distinguished Alumni Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* UCHICAGO-INSPIRED "LIVE, LEARN, AND BE INSPIRED" 5-IMAGE MOSAIC       */}
          {/* ===================================================================== */}
          <div className="mt-14 sm:mt-20 max-w-[1240px] mx-auto">
            {/* 2-Column Editorial Intro with MSAJCE Name */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start mb-8 sm:mb-12">
              <div className="md:col-span-5">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#7A1F2D] dark:text-[#E05A70] font-normal leading-[1.1]">
                  Live, learn, and be inspired at MSAJCE
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm sm:text-base text-foreground/80 font-sans leading-relaxed">
                  MSAJCE and the Mohamed Sathak Trust network create a vibrant academic oasis with tree-lined campus avenues, state-of-the-art laboratories, expansive sports grounds, and iconic institutional facilities. Located within the Siruseri SIPCOT IT Park along Chennai's IT Corridor, MSAJCE connects students with top multinational tech giants, rich cultural traditions, and premier higher education opportunities across Tamil Nadu.
                </p>
              </div>
            </div>

            {/* Exact UChicago Production Moments Layout & Proportions */}
            <div className="flex flex-col md:flex-row items-start justify-center">
              {/* Left Photo: Exactly calc(48% - 5px) */}
              <div className="w-full md:w-[calc(48%-5px)] mb-2.5 md:mb-0">
                <img
                  src="/images/moments/moment-1-lake.png"
                  alt="Lake & Skyline View"
                  className="w-full h-auto block select-none pointer-events-none"
                />
              </div>

              {/* Right BoxGroup: Exactly calc(52% - 5px) with md:ml-[10px] */}
              <div className="w-full md:w-[calc(52%-5px)] flex flex-wrap items-start shrink-0 md:ml-[10px]">
                {/* 1st Top Left: calc(42% - 5px) with mr-[10px] mb-[10px] */}
                <div className="w-[calc(42%-5px)] mr-[10px] mb-[10px]">
                  <img
                    src="/images/moments/moment-2-dancers.png"
                    alt="Young Dancers Performance"
                    className="w-full h-auto block select-none pointer-events-none"
                  />
                </div>

                {/* 2nd Top Right: calc(58% - 5px) with mb-[10px] */}
                <div className="w-[calc(58%-5px)] mb-[10px]">
                  <img
                    src="/images/moments/moment-3-robie.png"
                    alt="Architectural Masterpiece"
                    className="w-full h-auto block select-none pointer-events-none"
                  />
                </div>

                {/* 3rd Bottom Left: calc(59% - 5px) */}
                <div className="w-[calc(59%-5px)]">
                  <img
                    src="/images/moments/moment-4-singer.png"
                    alt="Vocal Performance"
                    className="w-full h-auto block select-none pointer-events-none"
                  />
                </div>

                {/* 4th Bottom Right: calc(41% - 5px) with ml-[10px] */}
                <div className="w-[calc(41%-5px)] ml-[10px]">
                  <img
                    src="/images/moments/moment-5-street.png"
                    alt="Community Street Walk"
                    className="w-full h-auto block select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>
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
      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — CHENNAI HUB INSTITUTIONS       */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              CHENNAI IT CORRIDOR HUB // 8 INSTITUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Chennai Campuses
            </h2>
          </div>

          {/* Open Chennai Institutions Data Grid (Strictly Zero Cards, divide-y) */}
          <div className="border-t border-b border-border divide-y divide-border">
            {chennaiInstitutions.map((inst) => (
              <div
                key={inst.code}
                className={`py-5 sm:py-6 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 transition-colors ${
                  inst.isFlagship ? "bg-primary/5 pl-4 border-l-4 border-l-primary" : "hover:bg-foreground/[0.02]"
                }`}
              >
                <div className="md:w-5/12">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-black text-primary">
                      #{inst.code}
                    </span>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-foreground/5 text-muted-foreground rounded-xs">
                      {inst.category}
                    </span>
                    {inst.isFlagship && (
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-primary text-white rounded-xs">
                        Current Campus
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-foreground font-oswald">
                    {inst.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans mt-1">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{inst.location}</span>
                  </div>
                </div>

                <div className="md:w-7/12">
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
      {/* SECTION 3: Canvas A (White / #121214) — SOUTHERN REGION CAMPUSES          */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-10 sm:py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              KILAKARAI & RAMANATHAPURAM HUB // 10 INSTITUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Southern Region Campuses
            </h2>
          </div>

          {/* Open Southern Institutions Data Grid (Strictly Zero Cards, divide-y) */}
          <div className="border-t border-b border-border divide-y divide-border">
            {southernInstitutions.map((inst) => (
              <div
                key={inst.code}
                className={`py-5 sm:py-6 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 transition-colors ${
                  inst.isPioneer ? "bg-primary/5 pl-4 border-l-4 border-l-primary" : "hover:bg-foreground/[0.02]"
                }`}
              >
                <div className="md:w-5/12">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-black text-primary">
                      #{inst.code}
                    </span>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-foreground/5 text-muted-foreground rounded-xs">
                      {inst.category}
                    </span>
                    {inst.isPioneer && (
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-primary text-white rounded-xs">
                        TN 1st Self-Financing
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-foreground font-oswald">
                    {inst.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans mt-1">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{inst.location}</span>
                  </div>
                </div>

                <div className="md:w-7/12">
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
