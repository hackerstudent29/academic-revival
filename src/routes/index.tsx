import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AcademicProgrammesSection } from "@/components/AcademicProgrammesSection";
import { WhyJoinSection } from "@/components/WhyJoinSection";

const title = "MSAJCE — M.S.A.J. College of Engineering, Chennai";
const description =
  "Explore MSAJCE academic programmes — UG, PG and research — and the reasons to join Chennai's OMR IT corridor engineering campus.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden border-b border-foreground/12">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1900&q=80"
          alt="MSAJCE engineering campus"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
        <div className="relative mx-auto max-w-[1440px] px-6 py-32 md:px-12 md:py-44">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/80">
              Anna University Affiliated • AICTE Approved
            </span>
            <h1 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Engineering
              <br />
              Built in Black
              <br />
              &amp; White
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">
              M.S.A.J. College of Engineering trains problem solvers on Chennai's OMR IT corridor — with
              industry-grade labs, live corporate projects and a placement record built over 25 years.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Apply for 2026 <ArrowRight size={15} />
              </Link>
              <Link
                to="/academics"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-foreground/25 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground/10"
              >
                Browse Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <AcademicProgrammesSection />
      <WhyJoinSection />

      <section className="border-t border-foreground/12 bg-background px-6 py-28 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 rounded-[2.5rem] border border-foreground/12 bg-foreground/5 p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
              Admissions for 2026 are open
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60">
              Counselling support, scholarship guidance and campus tours available every weekday.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground"
          >
            Talk to admissions <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
