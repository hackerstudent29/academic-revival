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

// Institutional Heritage Metrics
const heroStats = [
  { value: "1973", label: "Established Year", sub: "Kilakarai, Ramanathapuram" },
  { value: "18", label: "Institutions", sub: "Higher Education Network" },
  { value: "50+", label: "Years of Service", sub: "Educational Philanthropy" },
  { value: "1st", label: "Self-Financing Engg.", sub: "Pioneered in TN, 1984" },
];

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
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER WITH BOXY TITLE & STATS STRIP                              */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[calc(100svh-56px)] md:min-h-[calc(100vh-64px)] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak Trust Campus Architecture"
            className="w-full h-full object-cover object-center brightness-[0.85] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        {/* Title Container: Fading Translucent Backdrop, Direct Title Only */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-6 sm:pb-8">
          <div className="inline-block bg-black/60 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 shadow-2xl max-w-2xl lg:max-w-3xl rounded-none border-y border-r border-white/10">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[1.1]">
              Mohamed Sathak Trust
            </h1>
          </div>
        </div>

        {/* Fading Stats Strip (Smooth Gradient Fade, Maroon Figures) */}
        <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-10 pb-6 sm:pt-14 sm:pb-8">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
            <div className="flex items-center justify-between gap-4 mb-4 pb-2.5 border-b border-white/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black font-oswald uppercase tracking-wide text-primary">
                Institutional Heritage
              </h2>
              <span className="text-[11px] sm:text-xs font-oswald uppercase tracking-widest text-white/50 hidden sm:inline">
                Estd. 26 October 1973 · Kilakarai
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-x divide-white/15">
              {heroStats.map((stat, idx) => (
                <div key={idx} className="first:pl-0 pl-4 sm:pl-6 space-y-1">
                  <div className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary dark:text-[#E11D48] tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/90 font-libre font-bold leading-snug pt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-white/60 font-libre leading-tight">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 1: Canvas A (White / #121214) — TRUST NARRATIVE & GUIDING MOTTO */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Official Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-oswald uppercase tracking-wide text-primary">
                Mohamed Sathak Trust
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-foreground/90 font-libre leading-relaxed">
                <p>
                  Mohamed Sathak Trust, a charitable and educational organization, was established on 26 October 1973 at Kilakarai, by the Philanthropic Mohamed Sathak Family of Kilakarai, Ramanathapuram District, Tamil Nadu, with the sole purpose of helping deprived people from rural and financially challenged background to obtain quality education.
                </p>

                <p>
                  The first self-financing engineering college in the country was established by the Trust in 1984 at Kilakarai, and from that day onwards the Trust has been contributing to provide quality education with academic excellence to meet the requirements of industries at national and international levels.
                </p>

                <p>
                  The trust has an impeccable track record of running quality educational institutions from higher secondary level to the under graduate and post graduate levels in various disciplines such as Engineering Technology, Arts and Science, Pharmacy, Physiotherapy, Nursing and Medical Sciences; It has 18 educational institutions at present in Kilakarai, Ramanathapuram and Chennai.
                </p>
              </div>

              {/* Guiding Motto Quote Block */}
              <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2 my-6">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-bold font-oswald uppercase text-foreground leading-snug tracking-tight">
                  “God will not change the condition of a people until they try to change themselves.”
                </blockquote>
                <span className="text-xs font-mono uppercase text-muted-foreground block mt-1 tracking-wider">
                  Guiding Philosophy of Mohamed Sathak Trust
                </span>
              </div>

              <p className="text-base sm:text-lg text-foreground/90 font-libre leading-relaxed">
                We believe that "God will not change the condition of a people until they try to change themselves". We focus on doing right things without any bias and with charitable mind would strive to build an institution of academic excellence and help in building the nation.
              </p>
            </div>

            {/* Right Column: Campus Showcase Photograph */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative w-full rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-md bg-muted aspect-[4/3]">
                <img
                  src="/images/why-join/affiliated.jpg"
                  alt="Mohamed Sathak Trust Campus"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1 border-b border-border pb-2">
                <span className="uppercase tracking-wider">Mohamed Sathak Trust</span>
                <span className="text-primary font-bold">Estd. 1973 · 50+ Years</span>
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
      {/* 3. SECTION 2: Canvas B (#F3F3F2 / #18181B) — OUR FOUNDER                  */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-12 sm:py-16 md:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-oswald uppercase tracking-wide text-primary">
              Our Founder
            </h2>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">
              The Philanthropic Mohamed Sathak Family of Kilakarai
            </p>
          </div>

          {/* 6 Founders Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center text-center">
                <div className="w-full aspect-square rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-xs bg-white dark:bg-[#121214] mb-3">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center select-none pointer-events-none"
                  />
                </div>
                <h3 className="font-oswald text-xs sm:text-sm font-bold uppercase tracking-tight text-foreground leading-snug">
                  {founder.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-primary dark:text-[#E11D48] font-bold mt-1">
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
      {/* 4. SECTION 3: Canvas A (White / #121214) — TRUSTEES & CHAIRMAN MESSAGE    */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Our Trustees */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                  Our Trustees
                </h2>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  Executive Leadership & Stewardship
                </p>
              </div>

              {/* Trustees Vertical Roster */}
              <div className="divide-y divide-border border-t border-b border-border">
                {trustees.map((trustee) => (
                  <div key={trustee.name} className="py-4 first:pt-4 last:pb-4 flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 aspect-square rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-xs bg-muted shrink-0">
                      <img
                        src={trustee.image}
                        alt={trustee.name}
                        className="w-full h-full object-cover object-center select-none pointer-events-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-oswald text-sm sm:text-base font-bold uppercase tracking-tight text-foreground leading-snug">
                        {trustee.name}
                      </h3>
                      <span className="inline-block text-xs font-mono uppercase tracking-wider text-primary dark:text-[#E11D48] font-bold">
                        {trustee.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Chairman Message */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-oswald uppercase tracking-wide text-primary">
                  Chairman Message
                </h2>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  A Message from Alhaj Janab S. M. Yousuf
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 sm:pl-6 py-1">
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                  Dear Parents and Prospective Students,
                </h3>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-foreground/90 font-libre leading-relaxed">
                <p>
                  Welcome to Mohamed Sathak A.J. College of Engineering, Chennai. Choosing a right institute to pursue your higher studies is one of the most important decisions that you will ever make. It can be the key for the door of your lifelong opportunity for sustainable growth and service. We want you to base your choice at the right place with relevant and reliable education.
                </p>

                <p>
                  The success depends on the effort you invest in your own intellectual and professional development. Invest wisely and be assured that MSAJCE faculty and staff pledge their best efforts in helping you to achieve your educational goals.
                </p>

                <p>
                  Our standards are challenging and we are dedicating ourselves in helping you to meet the standards. We will judge our institution's success by how best your succeed in realizing your potential as a student and later in professional career. I invite you to visit our magnificent campus, to witness our state-of-the facilities, including the Technology Centres, interact with students and faculty and to convince yourselves on why so many bright students have made MSAJCE as their choice of the institution.
                </p>

                <p className="font-bold text-foreground">
                  I am confident that you will take pride in joining our college.
                </p>
              </div>

              {/* Chairman Sign-off Block */}
              <div className="pt-6 border-t border-border mt-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shrink-0 bg-muted">
                  <img
                    src="/images/trust/YOUSUF_head.jpg"
                    alt="Alhaj Janab S. M. Yousuf"
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                  />
                </div>
                <div>
                  <div className="font-oswald text-base sm:text-lg font-black uppercase tracking-tight text-foreground">
                    Alhaj Janab S. M. Yousuf
                  </div>
                  <div className="text-xs font-mono uppercase text-primary dark:text-[#E11D48] font-bold tracking-wider">
                    Chairman · Mohamed Sathak Trust
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
