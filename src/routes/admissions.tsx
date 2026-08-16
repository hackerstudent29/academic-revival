import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const title = "Admissions 2026 — Apply to MSAJCE";
const description =
  "Eligibility, application steps, documents and scholarships for undergraduate, postgraduate and research admissions at MSAJCE.";

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
  { level: "B.E. / B.Tech", req: "Pass in HSC with Mathematics, Physics and Chemistry. TNEA counselling or management quota." },
  { level: "M.E. / M.Tech", req: "Bachelor's degree in a relevant engineering discipline with a valid TANCET score." },
  { level: "MBA", req: "Any bachelor's degree with 50% aggregate and a valid TANCET / CAT / MAT score." },
  { level: "Ph.D.", req: "Master's degree in the relevant field and clearance of the Anna University entrance test." },
];

function Admissions() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Admissions 2026"
        title="A clear path from application to campus"
        description="Four steps, transparent eligibility and dedicated counsellors who guide you through scholarships and documentation."
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <span className="text-4xl font-black text-foreground/25">{s.n}</span>
              <h2 className="mt-5 text-lg font-bold text-foreground">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">Eligibility</h2>
          <div className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
            {eligibility.map((e) => (
              <div key={e.level} className="grid gap-4 py-8 md:grid-cols-4">
                <h3 className="text-lg font-bold text-foreground">{e.level}</h3>
                <p className="text-sm leading-relaxed text-foreground/60 md:col-span-3">{e.req}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-3xl border border-foreground/12 bg-foreground/5 p-10">
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Scholarships</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60">
              Merit scholarships for top TNEA ranks, sports scholarships for state and national level athletes, and
              need-based fee concessions reviewed each semester.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground"
            >
              Request a counsellor call <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
