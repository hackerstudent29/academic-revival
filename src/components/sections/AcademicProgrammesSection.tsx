import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";

const levels = [
  { label: "Undergraduates", to: "/admissions", search: { level: "Undergraduate" } },
  { label: "Postgraduates", to: "/admissions", search: { level: "Postgraduate" } },
  { label: "Doctorate", to: "/admissions", search: { level: "Doctorate" } },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const sequence = [
  {
    id: "ug",
    subtitle: "Bachelor's Degrees",
    title: "UG Programmes",
    content: (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 list-disc pl-5 text-[0.95rem] leading-snug">
        <li>Civil Engineering</li>
        <li>Computer Science and Engineering</li>
        <li>Electronics and Communication Engineering</li>
        <li>Electrical and Electronics Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Information Technology</li>
        <li>Artificial Intelligence and Data Science</li>
        <li>Computer Science and Business Systems</li>
        <li>CSE (Cyber Security)</li>
        <li>Artificial Intelligence and Machine Learning</li>
        <li>Electronics and Communication Engineering (VLSI)</li>
        <li>Electronics and Communication Engineering (ACT)</li>
        <li>Bachelor of Architecture</li>
        <li>Bachelor of Design</li>
      </ul>
    ),
  },
  {
    id: "pg",
    subtitle: "Master's Degrees",
    title: "PG Programmes",
    content: (
      <ul className="list-disc pl-5 space-y-1.5 text-[0.95rem]">
        <li>M.E. Computer Science and Engineering</li>
        <li>M.E. Structural Engineering</li>
        <li>Master of Architecture (M.Arch)</li>
      </ul>
    ),
  },
  {
    id: "phd",
    subtitle: "Research & Innovation",
    title: "Doctorate",
    content: (
      <ul className="list-disc pl-5 space-y-1.5 text-[0.95rem]">
        <li>Ph.D. in Mechanical Engineering</li>
      </ul>
    ),
  },
];

export function AcademicProgrammesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageY = rawY;
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.06, 1.14]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % sequence.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <>
      <section
        ref={sectionRef}
        id="academic-programmes"
        className="relative w-full bg-[#EAEAEA] dark:bg-[#111915] min-h-[100svh] flex flex-col justify-center py-16 text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-8 md:px-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-16 xl:gap-20"
          >
            {/* Left image */}
            <motion.div
              variants={rise}
              className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[4px] lg:h-auto lg:w-[44%]"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="MSAJCE students collaborating in a classroom"
                loading="lazy"
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-foreground/5" />
              
              {/* Mobile image overlay text */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-shadow-sm lg:hidden">
                <h3 className="text-2xl font-bold font-display leading-tight mb-2">Global Innovators</h3>
                <p className="text-sm font-medium text-white/90">Experience hands-on learning with an innovative curriculum designed to solve real-world challenges.</p>
              </div>
            </motion.div>

            {/* Right content - Desktop Slider */}
            <div className="hidden lg:flex w-full flex-col justify-center lg:w-[56%]">
              <motion.div variants={rise} className="relative w-full">
                {/* Ghost element to reserve max height dynamically */}
                <div className="invisible pointer-events-none opacity-0 select-none" aria-hidden="true">
                  <span className="text-sm font-bold tracking-wide">
                    {sequence[0]!.subtitle}
                  </span>
                  <h2 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]">
                    {sequence[0]!.title}
                  </h2>
                  <div className="mt-5 max-w-xl text-lg leading-relaxed">
                    {sequence[0]!.content}
                  </div>
                  {/* Ghost Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <div className="px-6 py-3.5 text-sm font-bold">Find a Programme &raquo;</div>
                    <div className="px-6 py-3.5 text-sm font-bold">Admissions Information &raquo;</div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  <motion.div
                    key={sequence[activeIndex]!.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute inset-x-0 top-0 flex flex-col"
                  >
                    <span className="text-sm font-bold tracking-wide text-muted-foreground">
                      {sequence[activeIndex]!.subtitle}
                    </span>

                    <h2 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]">
                      {sequence[activeIndex]!.title}
                    </h2>

                    <div className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                      {sequence[activeIndex]!.content}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        { to: "/programmes", label: "Find a Programme" },
                        { to: "/admissions", label: "Admissions Information" },
                      ].map((cta) => (
                        <motion.div
                          key={cta.label}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 420, damping: 26 }}
                        >
                          <Link
                            to={cta.to}
                            className="group relative overflow-hidden inline-flex items-center justify-center bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow transition-colors hover:text-background after:absolute after:inset-0 after:top-full after:bg-foreground after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0"
                          >
                            <span className="relative z-10">{cta.label} &raquo;</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right content - Mobile Static Cards */}
            <div className="flex w-full flex-col justify-center lg:hidden">
              <motion.div variants={rise} className="mb-10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3 block">
                  Studying at MSAJCE
                </span>
                <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl font-display">
                  Academic Excellence <br/> Across Disciplines
                </h2>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-foreground/70">
                  Our innovative curriculum equips students with critical thinking, leadership skills, and a global perspective, preparing them to excel in rapidly evolving industries.
                </p>
              </motion.div>

              <div className="flex flex-col gap-4">
                <motion.div variants={rise} className="group relative overflow-hidden rounded-[4px] border border-foreground/10 bg-background/50 p-5 transition-colors hover:bg-background">
                  <h3 className="text-[1.15rem] font-bold text-primary mb-1.5">UG Programmes</h3>
                  <p className="text-[13px] text-foreground/70 mb-3 line-clamp-2">
                    14 specialized programs including Artificial Intelligence, Cyber Security, and core engineering disciplines.
                  </p>
                  <Link to="/programmes" className="inline-flex items-center text-[13px] font-bold text-primary group-hover:underline">
                    Explore UG Degrees <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </motion.div>

                <motion.div variants={rise} className="group relative overflow-hidden rounded-[4px] border border-foreground/10 bg-background/50 p-5 transition-colors hover:bg-background">
                  <h3 className="text-[1.15rem] font-bold text-primary mb-1.5">PG Programmes</h3>
                  <p className="text-[13px] text-foreground/70 mb-3 line-clamp-2">
                    Advanced technical education and specialized master's programs in Computer Science, Structural Engineering, and Architecture.
                  </p>
                  <Link to="/programmes" className="inline-flex items-center text-[13px] font-bold text-primary group-hover:underline">
                    Explore PG Degrees <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </motion.div>

                <motion.div variants={rise} className="group relative overflow-hidden rounded-[4px] border border-foreground/10 bg-background/50 p-5 transition-colors hover:bg-background">
                  <h3 className="text-[1.15rem] font-bold text-primary mb-1.5">Doctorate</h3>
                  <p className="text-[13px] text-foreground/70 mb-3 line-clamp-2">
                    Push the boundaries of knowledge and innovation with our dedicated research centers and expert faculty.
                  </p>
                  <Link to="/programmes" className="inline-flex items-center text-[13px] font-bold text-primary group-hover:underline">
                    Explore Ph.D Programmes <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </motion.div>
              </div>

              <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/programmes"
                  className="inline-flex items-center justify-center bg-primary px-6 py-3 text-[12px] font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  All Programmes
                </Link>
                <Link
                  to="/admissions"
                  search={{} as any}
                  className="inline-flex items-center justify-center border border-foreground/20 bg-transparent px-6 py-3 text-[12px] font-bold uppercase tracking-wide text-foreground transition-all hover:bg-foreground/5"
                >
                  Admissions Info
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto mt-12 flex w-full max-w-[1440px] justify-start px-8 md:px-16 lg:mt-16"
        >
          <div className="flex w-full flex-col items-start justify-between gap-6 border-t-[6px] border-foreground/40 bg-foreground/[0.07] p-6 text-foreground md:p-8 lg:p-10 xl:flex-row xl:items-center">
            <h3 className="max-w-sm text-xl font-bold leading-tight md:text-2xl">
              Explore programmes by academic levels
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              {levels.map((l) => (
                <motion.div
                  key={l.label}
                  variants={rise}
                >
                  <Link
                    to={l.to}
                    search={l.search}
                    className="group relative overflow-hidden inline-flex w-full items-center justify-center border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:text-background after:absolute after:inset-0 after:top-full after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0"
                  >
                    <span className="relative z-10">{l.label} &raquo;</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
