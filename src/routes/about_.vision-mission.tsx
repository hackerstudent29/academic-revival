import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Target, Compass, ShieldCheck, Lightbulb, Users, Leaf, ArrowRight } from "lucide-react";

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
    num: "01",
    title: "Academic Excellence & Rigor",
    description: "Provide high-quality technical education, robust academic mentorship, and industry-aligned curricula to prepare students for real-world engineering challenges.",
  },
  {
    num: "02",
    title: "Research & Innovation",
    description: "Foster an environment of curiosity and innovation through state-of-the-art research laboratories, interdisciplinary projects, and AICTE IDEA Lab initiatives.",
  },
  {
    num: "03",
    title: "Ethical & Responsible Leadership",
    description: "Instill ethical standards, professional integrity, and social responsibility in students, empowering them to become principled leaders in society.",
  },
  {
    num: "04",
    title: "Global Employability & Entrepreneurship",
    description: "Cultivate entrepreneurial mindsets and core technical competencies to ensure outstanding career outcomes and global industry readiness.",
  },
];

const coreValues = [
  { icon: ShieldCheck, title: "Integrity & Ethics", text: "Upholding highest moral standards in academics, research, and governance." },
  { icon: Target, title: "Excellence", text: "Striving for continuous improvement across all educational and institutional endeavors." },
  { icon: Lightbulb, title: "Innovation", text: "Encouraging creative problem-solving, patent generation, and product development." },
  { icon: Users, title: "Inclusivity & Diversity", text: "Providing equal opportunities and supporting students from diverse backgrounds." },
  { icon: Leaf, title: "Sustainability", text: "Promoting green technology, clean energy research, and environmental stewardship." },
];

export function VisionMissionPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Page Hero */}
      <section className="relative border-b border-border bg-page-bg py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary">
              About MSAJCE // Guiding Principles
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              Vision & Mission
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mt-2">
              Our institutional vision and mission guide our commitment to nurturing world-class engineers, researchers, and ethical leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="bg-card border border-border rounded-lg p-8 md:p-14 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-primary pointer-events-none">
            <Compass size={220} />
          </div>
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-md mb-6">
              <Compass size={14} /> Institutional Vision
            </div>
            <blockquote className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-foreground font-display">
              “To be a benchmark institution producing globally competent engineers and technological leaders who solve real-world problems with integrity, innovation, and social commitment.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="bg-page-bg border-y border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              Our Four Pillars // Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
              How We Fulfill Our Vision
            </h2>
          </div>

          <Stagger gap={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((m) => (
              <StaggerItem
                key={m.num}
                variant="rise"
                className="bg-card border border-border p-8 rounded-md shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-black text-primary/80 uppercase tracking-widest block mb-3">
                    Mission {m.num}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase block mb-2">
            Institutional Ethos // Core Values
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
            The Principles That Define Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {coreValues.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="bg-card border border-border p-6 rounded-md shadow-xs flex flex-col items-start"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5">{val.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{val.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Navigation */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Explore Leadership Messages & Trust History
          </span>
          <div className="flex gap-4">
            <Link
              to="/about/leadership"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-primary/90 transition-colors"
            >
              Leadership Message <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
