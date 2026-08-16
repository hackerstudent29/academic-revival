import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const stats = [
  { num: "25+", label: "Years Excellence" },
  { num: "5000+", label: "Alumni" },
  { num: "95%", label: "Placements" },
  { num: "50+", label: "Recruiters" },
];

const reasons = [
  {
    title: "Prime Location",
    desc: "Situated on the OMR IT Corridor — Chennai's tech highway — giving students unmatched access to MNCs, startups, and research hubs.",
  },
  {
    title: "Industry Tie-ups",
    desc: "Live projects, corporate mentorship, and hackathons run year-round in partnership with top-tier technology companies.",
  },
  {
    title: "State-of-the-Art Labs",
    desc: "Fully equipped research labs, innovation centres, and an IDEA Lab designed to transform ideas into real-world prototypes.",
  },
  {
    title: "Scholarships & Sports",
    desc: "Merit-based and sports scholarships available so that talent — academic or athletic — is always recognised and rewarded.",
  },
  {
    title: "Anna Univ Affiliated",
    desc: "Approved by AICTE and affiliated to Anna University, Chennai — ensuring globally recognised degrees and academic credibility.",
  },
  {
    title: "Student-Led Chapters",
    desc: "IEEE, CSI, and other professional chapters run by students, building leadership, networking, and real-world experience.",
  },
];

export function WhyJoinSection() {
  return (
    <section
      id="why-msajce"
      className="relative w-full bg-muted/40 px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 md:gap-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 border-l-2 border-primary pl-6 md:pl-8"
        >
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            Why Join
            <br />
            MSAJCE?
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A campus that turns ambition into achievement — industry-integrated
            learning, global opportunities, every single day.
          </p>
        </motion.div>

        {/* Stats: hairline grid */}
        <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-6 md:p-8"
            >
              <span className="block text-3xl font-bold tracking-tighter text-primary md:text-4xl">
                {stat.num}
              </span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Reasons: sequential linear rows */}
        <div className="flex flex-col gap-2">
          {reasons.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative flex flex-col gap-4 border border-transparent bg-background p-6 transition-all duration-300 hover:border-primary md:flex-row md:items-center md:gap-10 md:p-8"
            >
              <span className="w-10 shrink-0 font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="w-full shrink-0 text-lg font-bold tracking-tight text-foreground md:w-64 md:text-xl">
                {item.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground md:pr-12">
                {item.desc}
              </p>
              <ArrowRight className="absolute right-6 top-6 h-5 w-5 text-foreground opacity-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100 md:static md:mt-0" />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            to="/admissions"
            className="inline-flex w-full items-center justify-center bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform active:scale-95 md:w-auto"
          >
            Explore Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}
