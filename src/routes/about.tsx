import { createFileRoute } from "@tanstack/react-router";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";

const title = "About MSAJCE — 25 Years of Engineering Education";
const description =
  "The story, vision and accreditations behind M.S.A.J. College of Engineering on Chennai's OMR IT corridor.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

const milestones = [
  { year: "2000", text: "Campus founded on the OMR corridor with three engineering branches." },
  { year: "2008", text: "Anna University recognised research centre established." },
  { year: "2016", text: "IDEA Lab and innovation incubator opened to all students." },
  { year: "2024", text: "12 specialisations across UG, PG and doctoral pathways." },
];

const values = [
  { title: "Vision", body: "To be a benchmark institution producing engineers who solve real problems with integrity." },
  { title: "Mission", body: "Deliver rigorous, industry-aligned education backed by research, mentorship and ethics." },
  { title: "Approach", body: "Small cohorts, project-first teaching and continuous corporate exposure from year one." },
];

function About() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Our Institution"
        title="Twenty-five years of disciplined engineering"
        description="M.S.A.J. College of Engineering is affiliated to Anna University and approved by AICTE, New Delhi, with a campus built for hands-on learning."
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <Stagger gap={0.1} className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title} variant="tilt" className="rounded-3xl border border-foreground/12 bg-foreground/5 p-9">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/70">{v.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground">{v.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px] grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="clip" className="overflow-hidden rounded-3xl border border-foreground/12">
            <Parallax distance={24}>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
                alt="MSAJCE academic block"
                className="w-full scale-110 object-cover grayscale"
              />
            </Parallax>
          </Reveal>
          <div>
            <Reveal variant="mask">
              <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Milestones</h2>
            </Reveal>
            <Stagger gap={0.1} className="mt-10 space-y-8">
              {milestones.map((m) => (
                <StaggerItem key={m.year} variant="slide-left" className="flex gap-6 border-b border-foreground/10 pb-8 last:border-0">
                  <span className="w-16 shrink-0 text-lg font-black text-foreground">{m.year}</span>
                  <p className="text-sm leading-relaxed text-foreground/65">{m.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </main>
  );
}
