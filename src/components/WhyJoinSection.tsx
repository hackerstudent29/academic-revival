import { motion } from "framer-motion";

const stats = [
  { num: "25+", label: "Years of Excellence" },
  { num: "5000+", label: "Successful Alumni" },
  { num: "95%", label: "Placement Record" },
  { num: "50+", label: "Industry Recruiters" },
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
      className="relative w-full bg-background px-6 pt-32 pb-48 md:px-12"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-16 lg:flex-row lg:gap-24">
        {/* Left: sticky header & stats */}
        <div className="z-10 flex flex-col gap-16 lg:sticky lg:top-32 lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
              Why
              <br />
              <span className="text-primary">Join</span>
              <br />
              MSAJCE?
            </h2>
            <p className="border-l-4 border-primary pl-6 text-xl font-medium leading-relaxed text-foreground/80 md:text-2xl">
              A campus that turns ambition into achievement — every single day.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group relative flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute -inset-4 rounded-3xl bg-primary/5 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />
                <span
                  className="relative bg-clip-text text-5xl font-black tracking-tighter text-transparent md:text-7xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--text-color) 0%, var(--primary-blue) 100%)",
                  }}
                >
                  {stat.num}
                </span>
                <span className="relative mt-3 text-xs font-bold uppercase tracking-widest text-foreground/60 md:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: bento grid */}
        <div className="z-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:w-2/3">
          {reasons.map((item, i) => {
            const isWide = i === 0 || i === 3;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 md:p-10 ${
                  isWide ? "md:col-span-2" : "col-span-1"
                }`}
              >
                {/* Gradient glow on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-clay/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Accent line on hover */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-navy to-clay transition-all duration-700 ease-out group-hover:w-full" />

                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    <h3
                      className={`font-bold tracking-tight text-foreground ${
                        isWide ? "text-3xl md:text-4xl" : "text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className={`font-medium leading-relaxed text-foreground/70 ${
                      isWide ? "max-w-2xl text-xl" : "text-base"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Decorative tech grid overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.02] transition-opacity group-hover:opacity-[0.04] dark:opacity-[0.05] dark:group-hover:opacity-[0.08]"
                  style={{
                    backgroundImage: "radial-gradient(var(--text-color) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
