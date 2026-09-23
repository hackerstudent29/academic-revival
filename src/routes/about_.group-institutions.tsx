import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const title = "Group of Institutions — Mohamed Sathak Trust";
const description =
  "Official directory of the 17 premier educational institutions managed by Mohamed Sathak Trust across Chennai, Kilakarai, and Ramanathapuram.";

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
  { name: "Mohamed Sathak A.J. College of Engineering", url: "http://www.msajce-edu.in/" },
  { name: "Mohamed Sathak A.J. Academy of Architecture", url: "https://www.msajaa.com/" },
  { name: "Mohamed Sathak College of Arts And Science", url: "http://www.mscartsandscience-edu.in/" },
  { name: "Mohamed Sathak A.J. College of Nursing", url: "http://www.msajcnursing-edu.in/" },
  { name: "Mohamed Sathak A.J. College of Pharmacy", url: "http://www.msajpharm-edu.in/" },
  { name: "Mohamed Sathak A.J. College of Physiotherapy", url: "http://www.msajphysio-edu.in/" },
  { name: "Mohamed Sathak Teacher Training College", url: "http://msteacher-edu.in/" },
  { name: "Mohamed Sathak Matric & Hr. Sec. School", url: "http://www.mohamedsathakschool-edu.in/" },
];

const southernInstitutions = [
  { name: "Mohamed Sathak Engineering College", url: "http://www.msec.org.in/" },
  { name: "Mohamed Sathak Hamid College of Arts and Science for Women", url: "http://www.mshcasw.in/" },
  { name: "Syed Hameedha Arts & Science College", url: "http://www.shartsandscience-edu.in/" },
  { name: "Mohamed Sathak Polytechnic College", url: "http://www.mspckilakarai.com/" },
  { name: "Mohamed Sathak I.T.I.", url: "http://www.msiti-edu.in/" },
  { name: "Syed Hameedha Arabic College", url: "http://www.sharabic-edu.in/" },
  { name: "Mohamed Sathak Dastagir Matriculation Hr. Sec. School", url: "http://www.msdms-edu.in/" },
  { name: "Mohamed Sathak Kabeer Public School (CBSE)", url: "http://www.mskps.in/" },
  { name: "Mohamed Sathak Dasthagir Teacher Training College", url: "https://www.msdcoe.com/" },
];

export function GroupOfInstitutionsPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground min-h-screen pt-0 md:pt-1 font-libre selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak Trust Campus Architecture"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Group of Institutions
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 1: Canvas A (White / #121214) — INSTITUTIONS IN CHENNAI        */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Institutions in Chennai
            </h2>
          </div>

          {/* Minimal 2-Column Editorial Link Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 divide-y md:divide-y-0">
            {chennaiInstitutions.map((inst, index) => (
              <a
                key={inst.name}
                href={inst.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between py-3.5 sm:py-4 border-b border-border/60 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-3">
                  <span className="font-oswald font-bold text-xs sm:text-sm text-primary/70 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-libre text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {inst.name}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            ))}
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
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION 2: Canvas B (#F3F3F2 / #18181B) — KILAKARAI & RAMANATHAPURAM   */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-6 sm:py-8 md:py-10 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Institutions in Kilakarai &amp; Ramanathapuram
            </h2>
          </div>

          {/* Minimal 2-Column Editorial Link Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 divide-y md:divide-y-0">
            {southernInstitutions.map((inst, index) => (
              <a
                key={inst.name}
                href={inst.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between py-3.5 sm:py-4 border-b border-border/60 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-3">
                  <span className="font-oswald font-bold text-xs sm:text-sm text-primary/70 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-libre text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {inst.name}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
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
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. SECTION 3 (LAST SECTION): 5-IMAGE MOSAIC — LIVE, LEARN & BE INSPIRED   */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-6 sm:py-8 md:py-10 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Live, learn, and be inspired at MSAJCE
            </h2>
          </div>

          {/* 5-Image Mosaic Grid */}
          <div className="flex flex-col md:flex-row items-start justify-center max-w-[1240px] mx-auto">
            {/* Left Photo: Exactly calc(48% - 5px) */}
            <div className="w-full md:w-[calc(48%-5px)] mb-2.5 md:mb-0">
              <img
                src="/images/moments/moment-1-lake.png"
                alt="Lake & Skyline View"
                className="w-full h-auto block select-none pointer-events-none rounded-sm"
              />
            </div>

            {/* Right BoxGroup: Exactly calc(52% - 5px) with md:ml-[10px] */}
            <div className="w-full md:w-[calc(52%-5px)] flex flex-wrap items-start shrink-0 md:ml-[10px]">
              {/* 1st Top Left: calc(42% - 5px) with mr-[10px] mb-[10px] */}
              <div className="w-[calc(42%-5px)] mr-[10px] mb-[10px]">
                <img
                  src="/images/moments/moment-2-dancers.png"
                  alt="Young Dancers Performance"
                  className="w-full h-auto block select-none pointer-events-none rounded-sm"
                />
              </div>

              {/* 2nd Top Right: calc(58% - 5px) with mb-[10px] */}
              <div className="w-[calc(58%-5px)] mb-[10px]">
                <img
                  src="/images/moments/moment-3-robie.png"
                  alt="Architectural Masterpiece"
                  className="w-full h-auto block select-none pointer-events-none rounded-sm"
                />
              </div>

              {/* 3rd Bottom Left: calc(59% - 5px) */}
              <div className="w-[calc(59%-5px)]">
                <img
                  src="/images/moments/moment-4-singer.png"
                  alt="Vocal Performance"
                  className="w-full h-auto block select-none pointer-events-none rounded-sm"
                />
              </div>

              {/* 4th Bottom Right: calc(41% - 5px) with ml-[10px] */}
              <div className="w-[calc(41%-5px)] ml-[10px]">
                <img
                  src="/images/moments/moment-5-street.png"
                  alt="Community Street Walk"
                  className="w-full h-auto block select-none pointer-events-none rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
