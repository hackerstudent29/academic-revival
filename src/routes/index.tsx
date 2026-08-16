import { createFileRoute, Link } from "@tanstack/react-router";
import { WhyJoinSection } from "@/components/WhyJoinSection";
import { DynamicText } from "@/components/DynamicText";
import { RotatingWord } from "@/components/RotatingWord";
import { HeroReel } from "@/components/HeroReel";
import { RecruiterMarquee } from "@/components/RecruiterMarquee";

const title = "MSAJCE — M.S.A.J. College of Engineering, Chennai";
const description =
  "Explore MSAJCE academic programmes — UG, PG and research — and the reasons to join Chennai's OMR IT corridor engineering campus.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const heroLinks = [
  { label: "Apply for Admission", to: "/admissions" },
  { label: "Explore Engineering Branches", to: "/academics" },
  { label: "Our Industry Partners", to: "/placements" },
  { label: "Campus Life at MSAJCE", to: "/campus-life" },
  { label: "Speak to an Advisor", to: "/contact" },
] as const;

const stats = [
  { n: "25+", l: "Years of Excellence" },
  { n: "5000+", l: "Successful Alumni" },
  { n: "95%", l: "Placement Record" },
  { n: "50+", l: "Industry Recruiters" },
];

const departments = [
  {
    code: "CSE",
    name: "Computer Science & Engineering",
    desc: "Advanced software development, AI, machine learning, systems architecture and cyber security.",
    tone: "plain",
  },
  {
    code: "IT",
    name: "Information Technology",
    desc: "Cloud architecture, network infrastructure, database administration and web engineering.",
    tone: "blue",
  },
  {
    code: "ECE",
    name: "Electronics & Communication",
    desc: "Microelectronics, wireless networks, IoT systems, signal processing and telecom technologies.",
    tone: "invert",
  },
  {
    code: "AIDS",
    name: "AI & Data Science",
    desc: "Big data analysis, data warehousing, deep learning and predictive computational modelling.",
    tone: "muted",
  },
  {
    code: "MECH",
    name: "Mechanical Engineering",
    desc: "Computer-aided design, robotics, fluid dynamics, thermodynamic systems and smart automation.",
    tone: "plain",
  },
  {
    code: "EEE",
    name: "Electrical & Electronics",
    desc: "Clean energy grids, power electronics, electric vehicle technologies and electrical controls.",
    tone: "blue",
  },
] as const;

const toneClass: Record<string, string> = {
  plain: "bg-background text-foreground",
  blue: "bg-primary text-primary-foreground",
  invert: "bg-foreground text-background",
  muted: "bg-foreground/8 text-foreground",
};

function Index() {
  return (
    <main className="bg-background">
      {/* ── Hero: editorial split grid ── */}
      <section className="border-b border-foreground/12" id="hero">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-24">
            <DynamicText />
            <h1 className="flex flex-col gap-1 text-[13vw] font-black uppercase leading-[0.92] tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
              <span>Mohamed Sathak</span>
              <span>A.J. College of</span>
              <span className="mt-1 flex flex-wrap items-baseline gap-x-4">
                <RotatingWord
                  homeWord="Engineering"
                  words={["Innovation", "Technology", "Excellence"]}
                />
                <span>&amp;</span>
                <RotatingWord
                  homeWord="Architecture"
                  words={["Design", "Creativity", "Craftsmanship"]}
                />
              </span>
            </h1>

            <div className="mt-12 border-t border-foreground/12">
              {heroLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center justify-between border-b border-foreground/12 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-foreground/70 transition-colors hover:text-foreground"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {item.label}
                  </span>
                  <span aria-hidden className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-l border-foreground/12">
            <HeroReel />
            {/* Mobile: horizontal snap strip */}
            <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-4 md:hidden">
              {[
                { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=300&q=80", label: "Research" },
                { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&h=300&q=80", label: "Heritage" },
                { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&h=300&q=80", label: "Affiliation" },
                { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300&q=80", label: "Placements" },
                { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&h=300&q=80", label: "Campus Life" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="relative h-[204px] w-[72vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-md"
                >
                  <img src={item.src} alt={item.label} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top recruiters marquee ── */}
      <section className="border-b border-foreground/12 py-16" id="top-recruiters">
        <h2 className="px-6 text-center text-[11px] font-bold uppercase tracking-[0.32em] text-foreground/50 md:px-12">
          Top Recruiters
        </h2>
        <RecruiterMarquee />
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-foreground/12" id="stats">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-24">
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            MSAJCE <span className="text-primary">in numbers</span>
          </h2>
          <div className="mt-14 grid border-t border-l border-foreground/12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="border-b border-r border-foreground/12 px-8 py-12">
                <span className="block text-5xl font-black tracking-tight text-foreground lg:text-6xl">{s.n}</span>
                <span className="mt-4 block text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/50">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Departments ── */}
      <section className="border-b border-foreground/12" id="departments">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl">
              Academic departments
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/60">
              Choose from our specialised engineering domains designed for future innovators.
            </p>
          </div>
          <div className="mt-14 grid border-t border-l border-foreground/12 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <article
                key={d.code}
                className={`group border-b border-r border-foreground/12 p-10 transition-colors ${toneClass[d.tone]}`}
              >
                <span className="text-[11px] font-black uppercase tracking-[0.28em] opacity-60">{d.code}</span>
                <h3 className="mt-6 text-2xl font-black uppercase leading-tight tracking-tight">{d.name}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-70">{d.desc}</p>
                <Link
                  to="/academics"
                  className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] underline-offset-4 hover:underline"
                >
                  Explore {d.code} <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhyJoinSection />

      {/* ── Info split ── */}
      <section className="grid lg:grid-cols-2" id="about">
        <div className="bg-primary px-8 py-20 text-primary-foreground md:px-14">
          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
            The MSAJCE edge
          </h2>
          <ul className="mt-10 space-y-6">
            {[
              "Located on the IT Corridor of Chennai (OMR), with rich access to tech hubs.",
              "Strong industry collaboration, student hackathons and corporate mentorship.",
              "Modern infrastructure with fully integrated research labs.",
              "Scholarships for meritorious students and sports achievers.",
            ].map((t) => (
              <li key={t} className="flex gap-4 border-b border-primary-foreground/25 pb-6 text-base leading-relaxed">
                <span aria-hidden className="opacity-70">—</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-foreground px-8 py-20 text-background md:px-14">
          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
            Nurturing leaders, shaping innovators
          </h2>
          <p className="mt-8 text-base leading-relaxed opacity-75">
            Established with the objective of providing quality technical education to young minds, M.S.A.J.
            College of Engineering is dedicated to raising ethical engineers with superior academic capability.
          </p>
          <p className="mt-5 text-base leading-relaxed opacity-75">
            We combine interactive learning systems with intensive industry readiness training from year one,
            ensuring students hit the ground running upon graduation.
          </p>
          <Link
            to="/admissions"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Join MSAJCE Admissions 2026 <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
