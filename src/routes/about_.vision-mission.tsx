import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutSubNav } from "@/components/layout/AboutSubNav";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Target, Compass, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

const title = "Vision, Mission & Quality Policy — M.S.A.J. College of Engineering";
const description =
  "Official Vision, Mission statements (M1, M2, M3), Quality Policy, and Core Educational Values of Mohamed Sathak A.J. College of Engineering (MSAJCE), Chennai.";

export const Route = createFileRoute("/about_/vision-mission")({
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
  component: VisionMissionPage,
});

const missionStatements = [
  {
    code: "M1",
    tag: "Quality Technical Education",
    title: "To Impart Quality Technical Education",
    desc: "Transforming students into professionally competent technocrats with deep conceptual understanding and practical problem-solving capabilities.",
  },
  {
    code: "M2",
    tag: "Sustainable Career Growth",
    title: "To Nurture Sustainable Development",
    desc: "Nurturing students in all-round sustainable development for long-term professional careers, lifelong learning, and self-employability.",
  },
  {
    code: "M3",
    tag: "Ethics & Values",
    title: "To Inculcate Ethics & Civic Responsibilities",
    desc: "Inculcating critical thinking, high professional ethics, and active civic responsibilities by instilling strong human values.",
  },
];

export function VisionMissionPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Secondary Sticky Sub-Nav */}
      <AboutSubNav />

      {/* Hero Showcase Section — SFCM Style Full-Bleed Editorial */}
      <section className="relative border-b border-border bg-gradient-to-b from-primary/10 via-background to-page-bg pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/10 border border-foreground/20 text-foreground text-xs font-mono font-bold uppercase rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-max">
              Institutional Strategy & Foundations
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Vision, Mission & <span className="text-primary">Quality Policy</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-libre mt-2 max-w-3xl">
              Defining our commitment to academic excellence, innovative research, sustainable student transformation, and ethical societal contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement Section — SFCM Editorial Quote Block */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              // Foundational Aspirations
            </span>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center px-4 py-1.5 text-lg font-oswald font-black uppercase text-foreground bg-foreground/10 border border-foreground/20 rounded-sm">
                V
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground">
                Vision of MSAJCE
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 bg-card border-l-4 border-primary border-y border-r border-border p-8 rounded-r-lg shadow-xs">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold font-oswald leading-snug text-foreground">
              "To be an eminent institute for higher education and research through innovative teaching-learning and sustainable practices to meet the industrial and societal needs."
            </blockquote>
            <span className="block text-xs font-mono uppercase tracking-widest text-primary font-bold mt-6">
              — Mohamed Sathak A.J. College of Engineering
            </span>
          </div>
        </div>
      </section>

      {/* Mission Statements Section — Cards Grid */}
      <section className="border-t border-border bg-muted/20 py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-3 mb-12 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              // Core Strategic Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-oswald uppercase text-foreground">
              Mission Statements of MSAJCE
            </h2>
            <p className="text-sm md:text-base font-libre text-muted-foreground">
              Our triple-action mission framework guiding curriculum design, student development, research priorities, and community service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionStatements.map((mission) => (
              <div
                key={mission.code}
                className="p-8 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1 text-lg font-oswald font-black uppercase text-foreground bg-foreground/10 border border-foreground/20 rounded-sm">
                      {mission.code}
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-primary">
                      {mission.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-oswald font-bold uppercase text-foreground mb-3 leading-snug">
                    {mission.title}
                  </h3>
                  <p className="text-sm font-libre text-muted-foreground leading-relaxed">
                    {mission.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-libre font-semibold text-primary">
                  <CheckCircle2 size={16} /> Institutional Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy Section — SFCM Large Feature Block */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="border border-border rounded-xl bg-gradient-to-r from-primary/10 via-card to-background p-8 md:p-12 relative overflow-hidden shadow-xs">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              // Quality Assurance Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-oswald uppercase text-foreground">
              Quality Policy of MSAJCE
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-libre font-semibold leading-relaxed text-foreground">
              MSAJCE is committed to creating quality professionals through innovative teaching, research, industrial relations, and nurturing human values & ethics to meet industrial and societal needs on a continual improvement basis.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-libre font-semibold text-muted-foreground">
            Explore Trust History, Leadership Messages, and Governing Council
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/trust"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              The Trust &raquo;
            </Link>
            <Link
              to="/about/leadership"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Leadership Messages &raquo;
            </Link>
            <Link
              to="/about/governing-council"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Governing Council &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
