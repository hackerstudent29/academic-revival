import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Heart, BookOpen } from "lucide-react";
import { studentHubAmenities } from "@/data/studentLife";

const title = "Student Hub & Campus Amenities | Student Life | MSAJCE";
const description =
  "Discover the Student Hub at Mohamed Sathak A.J. College of Engineering. Student Activity Centre (SAC), Multi-Cuisine Food Court, Sports Complex, Residences & Health Services.";

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

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Vision & Mission Style Minimal Flush Docked Title         */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
            alt="Student Hub and Campus Amenities at Mohamed Sathak A.J. College of Engineering"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Student Hub
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A (White / #121214): CAMPUS AMENITIES & FIXED IMAGE GALLERY    */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 px-4 sm:px-6 md:px-12 transition-colors">
        <div className="max-w-[1440px] mx-auto space-y-8">
          {/* Section Title — NO text or subtitle below */}
          <div className="border-b border-border/60 pb-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Campus Amenities
            </h2>
          </div>

          {/* 2-Column Balanced Editorial Split: Fixed Image Gallery Grid + Open Editorial List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Fixed 2x2 Image Gallery Grid (NO text over, NO text below, strictly static) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {studentHubAmenities.map((item) => (
                  <div
                    key={`img-${item.id}`}
                    className="aspect-[4/3] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border/70 bg-muted shadow-2xs"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover block select-none pointer-events-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Open Editorial List (Strictly NO Cards, Clean Border Dividers) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-0 divide-y divide-border/60 border-y border-border/60 bg-transparent">
              {studentHubAmenities.map((item) => (
                <div key={item.id} className="py-5 sm:py-6 first:pt-2 last:pb-2">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold font-oswald uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-foreground/80 font-libre font-medium leading-relaxed mt-2">
                    {item.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {item.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs font-libre font-medium text-foreground/85 bg-foreground/5 px-2.5 py-1 rounded-tl-sm rounded-br-sm rounded-tr-xs rounded-bl-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

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
      {/* 3. SECTION B (#F3F3F2 / #18181B): CAMPUS WELFARE & SERVICES               */}
      {/* ========================================================================= */}
      <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 px-4 sm:px-6 md:px-12 transition-colors">
        <div className="max-w-[1440px] mx-auto space-y-8">
          {/* Section Title — NO text or subtitle below */}
          <div className="border-b border-border/60 pb-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Campus Welfare &amp; Services
            </h2>
          </div>

          {/* 2-Column Minimal Editorial Presentation (Strictly NO Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-[11px] font-bold font-oswald uppercase text-primary tracking-wider block">
                  24/7 On-Campus Support
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                  Health &amp; Wellness Clinic
                </h3>
                <p className="text-sm text-foreground/80 font-libre font-medium leading-relaxed">
                  Equipped with a first-aid centre, resident nurse, visiting physicians, emergency ambulance service, and mental wellness counselling for all students.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-[11px] font-bold font-oswald uppercase text-primary tracking-wider block">
                  Academic Reprographics
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                  Stationery &amp; Reprographic Hub
                </h3>
                <p className="text-sm text-foreground/80 font-libre font-medium leading-relaxed">
                  Provides high-speed photocopying, spiral binding, academic drawing materials, engineering stationery, and poster printing right inside campus.
                </p>
              </div>
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
      {/* 4. SECTION A (White / #121214): STUDENT COUNCIL EDITORIAL & CTA           */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 px-4 sm:px-6 md:px-12 transition-colors">
        <div className="max-w-[1440px] mx-auto space-y-6">
          {/* Section Title — NO text or subtitle below */}
          <div className="border-b border-border/60 pb-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Student Council
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-2 border-primary pl-4 sm:pl-6 py-2">
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

