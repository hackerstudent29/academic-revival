import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";

const title = "Placements at MSAJCE — 95% Track Record";
const description =
  "Placement statistics, recruiter network and training support at M.S.A.J. College of Engineering, Chennai.";

export const Route = createFileRoute("/placements")({
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
  component: Placements,
});

const stats = [
  { v: "95%", l: "Placement track" },
  { v: "100+", l: "Recruiting partners" },
  { v: "₹18 LPA", l: "Highest package" },
  { v: "₹5.4 LPA", l: "Average package" },
];

const recruiters = [
  "Zoho", "TCS", "Infosys", "Cognizant", "Freshworks", "HCLTech",
  "Wipro", "Accenture", "L&T Technology", "Ashok Leyland", "Hexaware", "Mr. Cooper",
];

const support = [
  { t: "Aptitude & coding drills", d: "Weekly timed rounds from the fifth semester, benchmarked against real recruiter tests." },
  { t: "Mock interviews", d: "Panel interviews with alumni and hiring managers, followed by written feedback." },
  { t: "Internship pipeline", d: "Structured summer internships with OMR corridor partners converting to pre-placement offers." },
];

function Placements() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Careers"
        title="From campus to corporate"
        description="A dedicated training and placement cell that prepares every student for aptitude rounds, technical interviews and long-term careers."
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <Stagger gap={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.l} variant="scale" className="rounded-3xl border border-foreground/12 bg-foreground/5 p-9">
              <div className="text-4xl font-black text-foreground">{s.v}</div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/50">{s.l}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="mask">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Our recruiters</h2>
          </Reveal>
          <Stagger gap={0.04} className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-foreground/12 bg-foreground/10 sm:grid-cols-3 lg:grid-cols-4">
            {recruiters.map((r) => (
              <StaggerItem key={r} variant="blur" className="bg-background px-6 py-10 text-center text-sm font-bold uppercase tracking-[0.14em] text-foreground/70">
                {r}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <Stagger gap={0.09} className="grid gap-8 md:grid-cols-3">
          {support.map((s) => (
            <StaggerItem key={s.t} variant="tilt" className="rounded-3xl border border-foreground/12 p-9">
              <h3 className="text-xl font-bold text-foreground">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">{s.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
