import { createFileRoute } from "@tanstack/react-router";

const title = "Mohamed Sathak Trust — 50+ Years of Educational Philanthropy & Excellence";
const description =
  "Official portal of Mohamed Sathak Trust, established 26 October 1973 at Kilakarai by the Mohamed Sathak Family. Discover our Founders, Board of Trustees, and Chairman's Message.";

export const Route = createFileRoute("/about_/trust")({
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
  component: TheTrustPage,
});

// 6 Founders from official Mohamed Sathak Trust records
const founders = [
  {
    name: "Late Alhaj Dr. S. M. Dasthagir",
    role: "Founder",
    image: "/images/trust/Dasthagir_head.jpg",
  },
  {
    name: "Late Hajjani Syed Hameeda Beevi",
    role: "Founder",
    image: "/images/trust/Hajjani_head.jpg",
  },
  {
    name: "Late Alhaj Dr. P.R.L. Shaik Aboobacker",
    role: "Founder",
    image: "/images/trust/Shaik_head.jpg",
  },
  {
    name: "Late Alhaj S.M. Ahamed Jalaluddin",
    role: "Founder",
    image: "/images/trust/Ahamed-Jalaluddin_head.jpg?v=3",
  },
  {
    name: "Late Alhaj S. M. Kabeer",
    role: "Founder",
    image: "/images/trust/Kabeer_head.jpg",
  },
  {
    name: "Late Alhaj Dr. S. M. Hamid Abdul Quadir",
    role: "Founder",
    image: "/images/trust/Abdul_head.jpg",
  },
];

// Board of Trustees
const trustees = [
  {
    name: "Alhaj Janab S. M. Yousuf",
    role: "Chairman",
    image: "/images/trust/YOUSUF_head.jpg",
  },
  {
    name: "Mrs. S. M. H. Sharmila",
    role: "Secretary",
    image: "/images/trust/SHARMILA_head.jpg",
  },
  {
    name: "Janab P.R.L. Hamid Ibrahim",
    role: "Executive Director",
    image: "/images/trust/Hamid_head.jpg",
  },
];

export function TheTrustPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
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
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Mohamed Sathak Trust
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 1: Canvas A (White / #121214) — TRUST NARRATIVE                */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Our Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            {/* Left Column: Campus Architectural Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-full min-h-[240px] sm:min-h-[280px] md:min-h-[300px] overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs shadow-md bg-muted border border-border">
                <img
                  src="/images/why-join/affiliated.jpg"
                  alt="Mohamed Sathak Trust Campus"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>
            </div>

            {/* Right Column: Exact User-Provided Narrative Text */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                Mohamed Sathak Trust, a charitable and educational organization, was established on
                26 October 1973 at Kilakarai, by the Philanthropic Mohamed Sathak Family of
                Kilakarai, Ramanathapuram District, Tamil Nadu, with the sole purpose of helping
                deprived people from rural and financially challenged background to obtain quality
                education.
              </p>

              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                The first self-financing engineering college in the country was established by the
                Trust in 1984 at Kilakarai, and from that day onwards the Trust has been
                contributing to provide quality education with academic excellence to meet the
                requirements of industries at national and international levels.
              </p>

              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                The trust has an impeccable track record of running quality educational
                institutions from higher secondary level to the under graduate and post graduate
                levels in various disciplines such as Engineering Technology, Arts and Science,
                Pharmacy, Physiotherapy, Nursing and Medical Sciences; It has 18 educational
                institutions at present in Kilakarai, Ramanathapuram and Chennai.
              </p>

              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                We believe that "God will not change the condition of a people until they try to
                change themselves". We focus on doing right things without any bias and with
                charitable mind would strive to build an institution of academic excellence and help
                in building the nation.
              </p>
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
      {/* 3. SECTION 2: Canvas B (#F3F3F2 / #18181B) — OUR FOUNDERS                  */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-6 sm:py-8 md:py-10 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-5 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Our Founders
            </h2>
          </div>

          {/* 6 Founders Grid (Zero Cards, Clean Editorial Showcase) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 md:gap-6">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center text-center">
                <div className="w-full aspect-[4/5] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-xs bg-white dark:bg-[#121214] mb-2.5">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center select-none pointer-events-none"
                  />
                </div>
                <h3 className="font-oswald text-xs sm:text-sm font-bold uppercase tracking-tight text-foreground leading-snug">
                  {founder.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-primary font-bold mt-0.5">
                  {founder.role}
                </span>
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
      {/* 4. SECTION 3: Canvas A (White / #121214) — BOARD OF TRUSTEES               */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-5 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Board of Trustees
            </h2>
          </div>

          {/* Trustees 3-Column Clean Showcase (Zero Cards, Balanced Editorial Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-border border-t border-b border-border py-6">
            {trustees.map((trustee) => (
              <div
                key={trustee.name}
                className="flex flex-col items-center text-center pt-5 md:pt-0 first:pt-0 first:pl-0 md:px-6 last:pr-0"
              >
                <div className="w-28 h-36 sm:w-36 sm:h-44 aspect-[4/5] rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-sm bg-muted mb-3">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                  />
                </div>
                <h3 className="font-oswald text-base sm:text-lg lg:text-xl font-bold uppercase tracking-tight text-foreground leading-snug">
                  {trustee.name}
                </h3>
                <span className="text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider text-primary mt-1">
                  {trustee.role}
                </span>
                <span className="text-xs text-muted-foreground font-libre mt-0.5">
                  Mohamed Sathak Trust
                </span>
              </div>
            ))}
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
      {/* 5. SECTION 4: Canvas B (#F3F3F2 / #18181B) — CHAIRMAN'S MESSAGE            */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-6 sm:py-8 md:py-10 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Chairman's Message
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
            {/* Left Column: Chairman Portrait with Natural Portrait Proportions */}
            <div className="lg:col-span-4 flex flex-col items-start gap-2.5">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-sm bg-muted border border-border">
                <img
                  src="/images/trust/YOUSUF_head.jpg"
                  alt="Alhaj Janab S. M. Yousuf, Chairman"
                  className="w-full h-full object-cover object-top pointer-events-none select-none"
                />
              </div>
              <div className="pt-0.5 text-left">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                  Alhaj Janab S. M. Yousuf
                </h3>
                <p className="font-libre text-xs sm:text-sm font-medium text-foreground/75 mt-0.5">
                  Chairman, Mohamed Sathak Trust
                </p>
              </div>
            </div>

            {/* Right Column: Structured Narrative Content */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground leading-tight">
                Dear Parents and Prospective Students
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                <p>
                  Welcome to Mohamed Sathak A.J. College of Engineering, Chennai. Choosing a right
                  institute to pursue your higher studies is one of the most important decisions
                  that you will ever make. It can be the key for the door of your lifelong
                  opportunity for sustainable growth and service. We want you to base your choice at
                  the right place with relevant and reliable education.
                </p>

                <p>
                  The success depends on the effort you invest in your own intellectual and
                  professional development. Invest wisely and be assured that MSAJCE faculty and
                  staff pledge their best efforts in helping you to achieve your educational goals.
                </p>

                <p>
                  Our standards are challenging and we are dedicating ourselves in helping you to
                  meet the standards. We will judge our institution's success by how best your
                  succeed in realizing your potential as a student and later in professional career.
                  I invite you to visit our magnificent campus, to witness our state-of-the
                  facilities, including the Technology Centres, interact with students and faculty
                  and to convince yourselves on why so many bright students have made MSAJCE as
                  their choice of the institution.
                </p>

                <p className="font-bold text-foreground">
                  I am confident that you will take pride in joining our college.
                </p>
              </div>

              {/* Structured Valediction */}
              <div className="pt-4 flex flex-col items-start sm:items-end text-left sm:text-right space-y-0.5">
                <span className="font-libre text-sm sm:text-base font-semibold text-foreground/90">
                  Best Wishes
                </span>
                <span className="font-oswald font-black text-lg sm:text-xl text-primary uppercase tracking-tight">
                  Alhaj Janab S. M. Yousuf
                </span>
                <span className="font-libre text-xs sm:text-sm font-medium text-foreground/75">
                  Chairman, Mohamed Sathak Trust
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
