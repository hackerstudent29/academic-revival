import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { studentHubAmenities, studentLifeOverview } from "@/data/studentLife";

const title = "Student Hub & Campus Amenities | Student Life | MSAJCE";
const description =
  "Discover the Student Hub at Mohamed Sathak A.J. College of Engineering: Student Activity Centre (SAC), Multi-Cuisine Food Court, Sports Complex, Residences & Health Services.";

const studentLifeTabs: SubNavTab[] = [
  { id: "student-hub", label: "Student Hub" },
  { id: "clubs-and-societies", label: "Clubs & Societies" },
  { id: "professional-societies", label: "Professional Societies" },
  { id: "tedx", label: "TEDx Talks" },
];

const campusWelfareServices = [
  {
    title: "Health & Wellness Clinic",
    tag: "24/7 Support",
    description:
      "Equipped with a first-aid centre, resident nurse, visiting physicians, emergency ambulance service, and mental wellness counselling for all students.",
  },
  {
    title: "Stationery & Reprographic Hub",
    tag: "Academic Support",
    description:
      "Provides high-speed photocopying, spiral binding, academic drawing materials, engineering stationery, and poster printing right inside campus.",
  },
];

export const Route = createFileRoute("/student-life_/student-hub")({
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
  component: StudentHubPage,
});

function StudentHubPage() {
  const navigate = useNavigate();

  const handleSelectTab = (tabId: string) => {
    if (tabId === "student-hub") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate({ to: `/student-life/${tabId}` });
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* SECONDARY SUB-NAV HEADER (Student Life Navigation) */}
      <SecondarySubNav
        title="STUDENT LIFE"
        tabs={studentLifeTabs}
        activeTab="student-hub"
        onSelectTab={handleSelectTab}
        onTitleClick={() => handleSelectTab("student-hub")}
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Standard MSAJCE Hero (Title Docked Flush at Bottom)       */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[260px] sm:min-h-[300px] md:min-h-[360px] flex flex-col justify-end">
        {/* Background gradient canvas */}
        <div className="absolute inset-0 z-0 bg-[#18181B]">
          <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-40" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-14 sm:pt-18 md:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Student Hub
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 1: Canvas A (White / #121214) — Campus Amenities               */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Campus Amenities &amp; Hubs
            </h2>
          </div>

          <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed max-w-4xl">
            {studentLifeOverview.description}
          </p>

          {/* Structured Numbered Editorial List (Placement Pattern) */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            {studentHubAmenities.map((item, idx) => (
              <div
                key={item.id}
                className="p-3.5 sm:p-5 flex items-start gap-4 sm:gap-5 hover:bg-foreground/[0.015] transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs"
              >
                <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-bold font-oswald uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-foreground/85 font-libre font-medium leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {item.highlights.map((hl, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1.5 text-xs font-libre font-medium text-foreground/80 bg-foreground/5 px-2.5 py-1 rounded-tl-sm rounded-br-sm rounded-tr-xs rounded-bl-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/student-life/clubs-and-societies" })}
              className="px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Explore Student Clubs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/student-life/professional-societies" })}
              className="px-5 py-2.5 bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-foreground/20 transition-all cursor-pointer"
            >
              <span>Professional Chapters</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ORGANIC WAVE DIVIDER A -> B                                               */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION 2: Canvas B (#F3F3F2 / #18181B) — Metrics & Support Services   */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8 sm:space-y-10">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Student Ecosystem Metrics
            </h2>
          </div>

          {/* Key Metrics Grid (Placement Overview Pattern) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-1">
            {studentLifeOverview.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-primary tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-foreground">
                  {stat.label}
                </p>
                <p className="text-xs text-foreground/70 font-libre font-medium">
                  {idx === 0
                    ? "Technical, Cultural & Sports"
                    : idx === 1
                    ? "CSI, IETE, SAE & ISHRAE"
                    : idx === 2
                    ? "Annual Campus Symposia"
                    : "Official Licensed Chapter"}
                </p>
              </div>
            ))}
          </div>

          {/* Structured Welfare & Support Services */}
          <div className="space-y-4 max-w-4xl pt-4">
            <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
              Campus Welfare &amp; Essential Services
            </h3>

            <div className="space-y-3">
              {campusWelfareServices.map((service, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-5 flex items-start gap-4 sm:gap-5 hover:bg-foreground/[0.02] transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
                        {service.title}
                      </h4>
                      <span className="text-[11px] font-bold font-oswald uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                        {service.tag}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-foreground/80 font-libre font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ORGANIC WAVE DIVIDER B -> A                                               */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. SECTION 3: Canvas A (White / #121214) — Student Council & Gateway      */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 bg-white dark:bg-[#121214] transition-colors">
        <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Student Governance &amp; Council
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-primary pl-4 sm:pl-6 py-2">
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed max-w-3xl">
              The elected Student Council acts as the official bridge between students and executive leadership, ensuring student voices, event proposals, and welfare needs are actively addressed.
            </p>

            <button
              type="button"
              onClick={() => navigate({ to: "/student-life/clubs-and-societies" })}
              className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-6 py-3 font-bold font-oswald text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer self-start md:self-auto"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Explore Clubs &amp; Societies
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
