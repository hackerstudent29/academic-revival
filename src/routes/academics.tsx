import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { AcademicProgrammesSection } from "@/components/AcademicProgrammesSection";

const title = "Academic Programmes at MSAJCE — UG, PG & Research";
const description =
  "B.E./B.Tech, M.E. and Ph.D. programmes at MSAJCE across AI & Data Science, CSE, IT, Cyber Security, and more.";

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
  { name: "Artificial Intelligence & Data Science", code: "AI&DS" },
  { name: "Computer Science & Engineering", code: "CSE" },
  { name: "Information Technology", code: "IT" },
  { name: "Computer Science & Business Systems", code: "CSBS" },
  { name: "CSE (Cyber Security)", code: "CYBER" },
  { name: "CSE (AI & Machine Learning)", code: "AIML" },
  { name: "Electronics & Communication", code: "ECE" },
  { name: "Electrical & Electronics", code: "EEE" },
  { name: "Mechanical Engineering", code: "MECH" },
  { name: "Civil Engineering", code: "CIVIL" },
];

function Academics() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Academics"
        title="Education for the Next Decade"
        description="Curriculum rigorously governed by Anna University regulations, delivered through continuous assessment and industry integration."
      />
      <AcademicProgrammesSection />
      
      {/* Curriculum & Syllabus Section */}
      <section id="curriculum" className="border-t border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="mask">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Curriculum &amp; Syllabus</h2>
          </Reveal>
          <Reveal variant="mask" delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-foreground/60 leading-relaxed">
              MSAJCE strictly adheres to the Anna University curriculum structures, ensuring our students receive an education that meets the highest academic standards in the state.
            </p>
          </Reveal>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal variant="blur" className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">Regulation 2024</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                The latest Anna University Regulation 2024 applies to all newly admitted batches, incorporating modern industry requirements, advanced electives, and a strong focus on experiential learning and internships.
              </p>
            </Reveal>
            <Reveal variant="blur" delay={0.1} className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">Regulation 2021</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                Continuing students follow the established Regulation 2021, which includes Choice Based Credit System (CBCS) implementation, mandatory project works, and integration of ethics and human values.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Examinations & COE */}
      <section id="examinations" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="mask">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Controller of Examinations (COE)</h2>
          </Reveal>
          <Reveal variant="mask" delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-foreground/60 leading-relaxed">
              The COE cell strictly implements the continuous internal evaluation (CIE) system and manages all Anna University end-semester practical and theory examinations.
            </p>
          </Reveal>
          
          <Stagger gap={0.1} className="mt-12 grid gap-6 md:grid-cols-3">
            <StaggerItem variant="scale" className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <h3 className="text-xl font-bold text-foreground">Internal Assessment</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                Four rigorous Internal Assessment Tests (IAT I, II, III, IV) are conducted per semester to ensure continuous learning and robust evaluation prior to university exams.
              </p>
            </StaggerItem>
            <StaggerItem variant="scale" className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <h3 className="text-xl font-bold text-foreground">Academic Schedule</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                Odd and Even semester academic calendars are published well in advance, detailing reopening dates, IAT schedules, and lab examination slots.
              </p>
            </StaggerItem>
            <StaggerItem variant="scale" className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <h3 className="text-xl font-bold text-foreground">Exam Grievance</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                A transparent grievance redressal mechanism is in place for addressing student concerns regarding internal marks and university revaluation procedures.
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="border-t border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="mask">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Academic Departments</h2>
          </Reveal>
          <Stagger gap={0.07} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <StaggerItem
                key={d.code}
                variant="tilt"
                className="group rounded-3xl border border-foreground/12 bg-background p-8 transition-colors hover:border-primary/50"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{d.code}</span>
                <h3 className="mt-3 text-xl font-bold leading-snug text-foreground">{d.name}</h3>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
