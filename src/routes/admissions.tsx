import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";

const title = "Admissions 2026-2027 — Apply to MSAJCE";
const description =
  "Eligibility, application steps, documents and scholarships for undergraduate and postgraduate engineering admissions at MSAJCE.";

export const Route = createFileRoute("/admissions")({
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
  component: Admissions,
});

const steps = [
  { n: "01", t: "Submit the application", d: "Complete the online form with your academic details and preferred branch." },
  { n: "02", t: "Document verification", d: "Upload marksheets, transfer certificate, community certificate and ID proof." },
  { n: "03", t: "Counselling & seat offer", d: "Attend counselling; merit and TNEA rank determine the seat allotment." },
  { n: "04", t: "Fee payment & joining", d: "Confirm the seat, pay fees and complete the orientation programme." },
];

const eligibility = [
  { level: "B.E. / B.Tech (Regular)", req: "Pass in 10+2 (HSC Academic/Vocational) with Physics, Chemistry and Mathematics with prescribed minimum percentage as per TN Govt and Anna University norms." },
  { level: "B.E. / B.Tech (Lateral Entry)", req: "Pass in Diploma examination in appropriate branch of Engineering or B.Sc. Degree with Mathematics for direct 2nd-year admission." },
  { level: "M.E. Programmes", req: "Recognized Bachelor's degree in appropriate branch with a valid TANCET, CEETA-PG, or GATE score." },
];

const ugCourses = [
  { name: "Computer Science and Engineering", intake: 120 },
  { name: "Information Technology", intake: 60 },
  { name: "Artificial Intelligence and Data Science", intake: 60 },
  { name: "Computer Science and Business Systems", intake: 60 },
  { name: "CSE (Cyber Security)", intake: 60 },
  { name: "CSE (Artificial Intelligence & Machine Learning)", intake: 60 },
  { name: "Electronics and Communication Engineering", intake: 60 },
  { name: "Electronics Engg. (VLSI Design & Technology)", intake: 30 },
  { name: "ECE (Advanced Communication Technology)", intake: 30 },
  { name: "Electrical and Electronics Engineering", intake: 30 },
  { name: "Mechanical Engineering", intake: 30 },
  { name: "Civil Engineering", intake: 30 },
];

const pgCourses = [
  { name: "Computer Science and Engineering", intake: 18 },
  { name: "VLSI Design", intake: 18 },
  { name: "Structural Engineering", intake: 18 },
  { name: "Power Systems Engineering", intake: 18 },
  { name: "Manufacturing Engineering", intake: 18 },
];

function Admissions() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Admissions 2026-2027"
        title="Your journey starts here"
        description="Explore our cutting-edge undergraduate and postgraduate engineering programs. Transparent eligibility and dedicated counsellors to guide you."
      />

      <section id="programmes" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <Reveal variant="mask">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl mb-12">Programmes Offered</h2>
        </Reveal>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Undergraduate */}
          <div className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Undergraduate (B.E. / B.Tech)</h3>
            </div>
            <ul className="divide-y divide-foreground/10 border-t border-foreground/10">
              {ugCourses.map((course, i) => (
                <li key={i} className="flex justify-between items-center py-4">
                  <span className="text-[15px] font-bold text-foreground/80">{course.name}</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    Intake: {course.intake}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Postgraduate */}
          <div className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Postgraduate (M.E.)</h3>
            </div>
            <ul className="divide-y divide-foreground/10 border-t border-foreground/10">
              {pgCourses.map((course, i) => (
                <li key={i} className="flex justify-between items-center py-4">
                  <span className="text-[15px] font-bold text-foreground/80">{course.name}</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    Intake: {course.intake}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="eligibility" className="border-y border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="mask">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Eligibility</h2>
          </Reveal>
          <Stagger gap={0.09} className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
            {eligibility.map((e) => (
              <StaggerItem key={e.level} variant="clip" className="grid gap-4 py-8 md:grid-cols-4">
                <h3 className="text-lg font-bold text-foreground">{e.level}</h3>
                <p className="text-sm leading-relaxed text-foreground/60 md:col-span-3">{e.req}</p>
              </StaggerItem>
            ))}
          </Stagger>
          
          <Reveal id="scholarships" variant="blur" className="mt-14 rounded-3xl border border-foreground/12 bg-foreground/5 p-10">
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Scholarships & Financial Aid</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60">
              We offer comprehensive support including Government Scholarships (SC/ST, BC/MBC, First Graduate, Post-Matric Minority Scholarships), as well as the Mohamed Sathak Trust Merit Scholarships and Sports Quota concessions.
            </p>
            <Magnetic strength={0.2} className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground"
              >
                Request a counsellor call <ArrowRight size={15} />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <Reveal variant="mask">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl mb-12">Admission Process</h2>
        </Reveal>
        <Stagger gap={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerItem key={s.n} variant="scale" className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <span className="text-4xl font-black text-foreground/25">{s.n}</span>
              <h2 className="mt-5 text-lg font-bold text-foreground">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{s.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
