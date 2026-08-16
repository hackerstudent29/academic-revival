import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  CountUp,
  Magnetic,
  Reveal,
  SplitText,
  Stagger,
  StaggerItem,
  SPRING_SNAPPY,
} from "@/components/motion";

const stats = [
  { value: 25, suffix: "+", label: "Years Excellence" },
  { value: 5000, suffix: "+", label: "Alumni" },
  { value: 95, suffix: "%", label: "Placements" },
  { value: 50, suffix: "+", label: "Recruiters" },
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
    <section id="why-msajce" className="relative w-full bg-muted/40 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 md:gap-24">
        {/* Header */}
        <Reveal variant="slide-right" className="flex flex-col gap-4 border-l-2 border-primary pl-6 md:pl-8">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-primary md:text-6xl lg:text-7xl">
            <SplitText text="Why Join MSAJCE?" />
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A campus that turns ambition into achievement — industry-integrated learning, global
            opportunities, every single day.
          </p>
        </Reveal>

        {/* Stats: hairline grid with spring counters */}
        <Stagger
          gap={0.1}
          className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} variant="unfold" className="bg-background p-6 md:p-8">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="block text-3xl font-bold tracking-tighter text-primary md:text-4xl"
              />
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Reasons: sequential rows, alternating spring slide-in */}
        <div className="flex flex-col gap-2">
          {reasons.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -48 : 48, rotateX: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 130, damping: 20, mass: 0.9 }}
              whileHover={{ x: 8, transition: SPRING_SNAPPY }}
              style={{ transformPerspective: 1000 }}
              className="group relative flex flex-col gap-4 border border-transparent bg-background p-6 transition-colors duration-300 hover:border-primary md:flex-row md:items-center md:gap-10 md:p-8"
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
        <Reveal variant="scale">
          <Magnetic strength={0.18} className="w-full md:w-auto">
            <Link
              to="/admissions"
              className="inline-flex w-full items-center justify-center bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground md:w-auto"
            >
              Explore Admissions
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
