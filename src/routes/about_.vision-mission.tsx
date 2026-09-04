import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Compass, ShieldCheck, Target, Lightbulb, Users, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";

const title = "Vision & Mission — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Vision, Mission, Core Values, and Quality Policy of Mohamed Sathak A.J. College of Engineering.";

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

const missions = [
  {
    badge: "M1",
    title: "Quality Education & Competent Technocrats",
    description: "To impart quality technical education by transforming students into professionally competent technocrats capable of addressing complex industrial challenges.",
  },
  {
    badge: "M2",
    title: "Sustainable Career & Self-Employability",
    description: "To nurture the students in all-round sustainable development, for career excellence, innovation, and self-employability.",
  },
  {
    badge: "M3",
    title: "Critical Thinking & Ethical Values",
    description: "To inculcate critical thinking, professional ethics with civic responsibilities by instilling strong human values and societal commitment.",
  },
];

const coreValues = [
  { icon: ShieldCheck, title: "Integrity & Ethics", text: "Upholding the highest moral and ethical standards in academics, research, and governance." },
  { icon: Target, title: "Academic Excellence", text: "Striving for continuous improvement across all technical and institutional endeavors." },
  { icon: Lightbulb, title: "Innovation & Research", text: "Encouraging creative problem-solving, technology incubation, and patent generation." },
  { icon: Users, title: "Inclusivity & Diversity", text: "Providing equal opportunities and supporting students from all social backgrounds." },
  { icon: Leaf, title: "Sustainable Practices", text: "Promoting green technology, environmental stewardship, and sustainable engineering." },
];

export function VisionMissionPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Header & Sub-Nav Title */}
      <section className="relative border-b border-border bg-page-bg pt-4 md:pt-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Secondary Sub-Nav Header */}
          <div className="mb-4">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider">
              ABOUT MSAJCE // GUIDING PRINCIPLES
            </span>
          </div>

          <div className="flex flex-col gap-3 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Vision, Mission <br />
              <span className="text-primary font-oswald">& Quality Policy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground font-sans mt-2">
              Our institutional vision, mission, and quality policy define our commitment to nurturing world-class engineers, researchers, and ethical leaders for society.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="bg-card border border-border rounded-lg p-8 sm:p-12 md:p-14 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-primary pointer-events-none hidden md:block">
            <Compass size={240} />
          </div>
          <div className="max-w-4xl relative z-10">
            {/* Vision Badge: High-Contrast Dark font per rules */}
            <div className="inline-flex items-center gap-2 px-3 py-1 text-foreground font-oswald font-black bg-foreground/10 border border-foreground/20 text-sm uppercase tracking-widest rounded-sm mb-6">
              <span className="text-primary font-bold font-mono">V</span> INSTITUTIONAL VISION
            </div>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug text-foreground font-oswald uppercase">
              “To be an eminent institute for higher education and research through innovative teaching-learning and sustainable practices to meet the industrial and societal needs.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-page-bg border-y border-border py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
              Our Three Mission Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
              Institutional Mission Statements
            </h2>
          </div>

          <Stagger gap={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missions.map((m) => (
              <StaggerItem
                key={m.badge}
                variant="rise"
                className="bg-card border border-border p-8 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Mission Badges: High-Contrast Dark font per rules */}
                  <span className="inline-block px-3 py-1 text-foreground font-oswald font-black bg-foreground/10 border border-foreground/20 text-sm uppercase tracking-widest rounded-sm mb-4">
                    {m.badge}
                  </span>
                  <h3 className="text-xl font-bold text-foreground font-oswald uppercase mb-3">{m.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-border bg-card p-8 md:p-12 rounded-lg">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              Quality Commitment
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground font-oswald">
              Quality Policy of MSAJCE
            </h2>
          </div>
          <div className="lg:col-span-8 border-l-0 lg:border-l-2 lg:border-primary lg:pl-8">
            <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-foreground font-sans">
              "MSAJCE is committed to creating quality professionals through innovative teaching, research, industrial relations, and nurturing human values & ethics to meet industrial and societal needs on a continual improvement basis."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-page-bg border-t border-border py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
              Institutional Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
              Core Institutional Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-card border border-border p-6 rounded-sm shadow-xs flex flex-col items-start"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-foreground font-oswald uppercase mb-2">{val.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">{val.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground font-sans">
            Explore Leadership Messages, Trust History, and Governing Council
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/leadership"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors font-oswald"
            >
              Leadership Messages <ArrowRight size={14} />
            </Link>
            <Link
              to="/about/trust"
              className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-muted transition-colors font-oswald"
            >
              The Trust
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

