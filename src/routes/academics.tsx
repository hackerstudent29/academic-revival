import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AcademicProgrammesSection } from "@/components/AcademicProgrammesSection";

const title = "Academic Programmes at MSAJCE — UG, PG & Research";
const description =
  "B.E./B.Tech, M.E./MBA and Ph.D. programmes at MSAJCE across AI & Data Science, CSE, IT, Robotics and Mechanical engineering.";

export const Route = createFileRoute("/academics")({
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
  component: Academics,
});

const departments = [
  { name: "Artificial Intelligence & Data Science", seats: "120 seats", code: "AI&DS" },
  { name: "Computer Science & Engineering", seats: "180 seats", code: "CSE" },
  { name: "Information Technology", seats: "120 seats", code: "IT" },
  { name: "Robotics & Automation", seats: "60 seats", code: "R&A" },
  { name: "Mechanical Engineering", seats: "60 seats", code: "MECH" },
  { name: "Electronics & Communication", seats: "120 seats", code: "ECE" },
];

function Academics() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Academics"
        title="Programmes engineered for the next decade"
        description="Curriculum co-designed with industry partners, delivered through project studios, research centres and continuous assessment."
      />
      <AcademicProgrammesSection />
      <section className="border-t border-foreground/12 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Departments</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <div
                key={d.code}
                className="group rounded-3xl border border-foreground/12 bg-foreground/5 p-8 transition-colors hover:bg-foreground/10"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/50">{d.code}</span>
                <h3 className="mt-3 text-xl font-bold leading-snug text-foreground">{d.name}</h3>
                <p className="mt-4 text-sm text-foreground/55">{d.seats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
