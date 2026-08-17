import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";

const title = "About MSAJCE — Vision, Mission & Accreditation";
const description =
  "The official vision, mission, heritage, and NAAC/NIRF accreditations of M.S.A.J. College of Engineering.";

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

const values = [
  { title: "Vision", body: "To be a benchmark institution producing engineers who solve real problems with integrity and contribute to the technological advancement of society." },
  { title: "Mission", body: "Deliver rigorous, industry-aligned education backed by research, mentorship, and ethics, while providing state-of-the-art facilities and a learner-centric environment." },
  { title: "The Trust", body: "Established under the aegis of the Mohamed Sathak Trust, dedicated to the cause of higher education and philanthropic initiatives since 1973." },
];

function About() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Our Institution"
        title="Engineering with Integrity"
        description="M.S.A.J. College of Engineering is affiliated to Anna University and approved by AICTE, New Delhi. We are driven by a commitment to academic excellence and industry readiness."
      />

      <section id="mission" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <Stagger gap={0.1} className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title} variant="tilt" className="rounded-3xl border border-foreground/12 bg-foreground/5 p-9">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/70">{v.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground">{v.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="border-t border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div id="trust" className="mx-auto max-w-[1440px] grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal variant="clip" className="overflow-hidden rounded-3xl border border-foreground/12 h-[500px]">
             <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
                alt="MSAJCE academic block"
                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
          </Reveal>
          <div>
            <Reveal variant="mask">
              <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Leadership & Heritage</h2>
            </Reveal>
            <Reveal variant="mask" delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/60">
                Founded by the visionary <strong>Mohamed Sathak Trust</strong>, our institution has grown under the guidance of our esteemed Chairman, Director, and Principal. Their unwavering commitment to educational excellence ensures that MSAJCE remains at the forefront of engineering education in Tamil Nadu.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Accreditations & Recognitions */}
      <section id="accreditations" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="mask">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl mb-12">Accreditations & Recognitions</h2>
          </Reveal>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Reveal variant="slide-up" delay={0.1} className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">NAAC</h3>
              <p className="text-sm leading-relaxed text-foreground/70 mb-4">
                Assessed by the National Assessment and Accreditation Council across 7 core criteria including Curricular Aspects, Teaching-Learning, and Institutional Values.
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.2} className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">NIRF</h3>
              <p className="text-sm leading-relaxed text-foreground/70 mb-4">
                Active participant in the National Institutional Ranking Framework across Engineering, Overall, and Innovation categories.
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.3} className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">IQAC</h3>
              <p className="text-sm leading-relaxed text-foreground/70 mb-4">
                Our Internal Quality Assurance Cell continuously reviews teaching-learning structures, manages feedback, and prepares the Annual Quality Assurance Report (AQAR).
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
