import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";

const levels = [
  { label: "Undergraduates", to: "/programmes" },
  { label: "Postgraduates", to: "/programmes" },
  { label: "Professional & Continuing Education", to: "/programmes" },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: EASE } },
};

export function AcademicProgrammesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageY = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.4 });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.06, 1.14]);

  return (
    <>
      <section
        ref={sectionRef}
        id="academic-programmes"
        className="relative w-full bg-[#EAEAEA] dark:bg-[#111915] min-h-[100svh] flex flex-col justify-center py-16 text-foreground transition-colors"
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
              className="relative h-[300px] w-full shrink-0 overflow-hidden lg:h-auto lg:w-[44%]"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="MSAJCE students collaborating in a classroom"
                loading="lazy"
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0 h-full w-full object-cover grayscale will-change-transform"
              />
              <div className="pointer-events-none absolute inset-0 bg-foreground/5" />
            </motion.div>

            {/* Right content */}
            <div className="flex w-full flex-col justify-center lg:w-[56%]">
              <motion.span
                variants={rise}
                className="text-sm font-bold tracking-wide text-muted-foreground"
              >
                Studying at MSAJCE
              </motion.span>

              <motion.h2
                variants={rise}
                className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]"
              >
                Shape Your Future with
                <br />
                MSAJCE&rsquo;s Industry-relevant Programmes
              </motion.h2>

              <motion.p
                variants={rise}
                className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
              >
                Our innovative curriculum equips students with critical thinking, leadership skills, and a
                global perspective, preparing them to excel in diverse, rapidly evolving industries.
              </motion.p>

              <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
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
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom banner */}
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
