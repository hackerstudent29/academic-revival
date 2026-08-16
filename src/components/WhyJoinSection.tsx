import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    no: "01",
    title: "Prime Location",
    tag: "OMR IT Corridor",
    desc: "Situated on the OMR IT Corridor - Chennai's tech highway - giving students unmatched access to MNCs, startups, and research hubs.",
    img: "https://images.unsplash.com/photo-1541888018376-7ec93d14dd84?q=80&w=1200&auto=format&fit=crop",
  },
  {
    no: "02",
    title: "Industry Tie-ups",
    tag: "Live Projects",
    desc: "Live projects, corporate mentorship, and hackathons run year-round in partnership with top-tier technology companies.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    no: "03",
    title: "State-of-the-Art Labs",
    tag: "IDEA Lab",
    desc: "Fully equipped research labs, innovation centres, and an IDEA Lab designed to transform ideas into real-world prototypes.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },
  {
    no: "04",
    title: "Scholarships & Sports",
    tag: "Merit & Athletics",
    desc: "Merit-based and sports scholarships available so that talent - academic or athletic - is always recognised and rewarded.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];

export function WhyJoinSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="relative w-full border-y border-foreground/12 bg-background text-foreground"
      id="why-msajce"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        {/* Editorial header row */}
        <div className="grid gap-8 border-b border-foreground/12 pb-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
              Why MSAJCE
            </span>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Four reasons
              <br />
              students <span className="text-primary">choose us</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-foreground/60 md:col-span-5 md:justify-self-end">
            Location, industry access, infrastructure and support — the four things that decide what an
            engineering degree is actually worth.
          </p>
        </div>

        {/* Numbered editorial rows */}
        <div className="mt-4">
          {reasons.map((item, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={item.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-foreground/12"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  onMouseEnter={() => setOpenIndex(i)}
                  aria-expanded={open}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-8 text-left md:gap-10 md:py-10"
                >
                  <span
                    className={`font-mono text-xs font-bold tracking-[0.2em] transition-colors ${
                      open ? "text-primary" : "text-foreground/35"
                    }`}
                  >
                    {item.no}
                  </span>
                  <span className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                    <span className="text-2xl font-black uppercase leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl lg:text-5xl">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-foreground/45">
                      {item.tag}
                    </span>
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      open
                        ? "rotate-45 border-primary bg-primary text-primary-foreground"
                        : "border-foreground/25 text-foreground/70"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-12 md:grid-cols-12 md:items-center">
                        <p className="text-base leading-relaxed text-foreground/65 md:col-span-6 md:col-start-2 lg:text-lg">
                          {item.desc}
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-foreground/12 md:col-span-5 md:col-start-8">
                          <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            className="aspect-[16/9] w-full object-cover grayscale transition-transform duration-[1200ms] hover:scale-105"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
