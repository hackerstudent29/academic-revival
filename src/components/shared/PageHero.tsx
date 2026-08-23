import { motion } from "framer-motion";
import { Reveal, SplitText, SPRING_SOFT } from "@/components/motion";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-foreground/12 bg-[#FEFFF5] dark:bg-background">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text-color) 1px, transparent 1px), linear-gradient(to bottom, var(--text-color) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={SPRING_SOFT}
            className="inline-flex items-center rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/80"
          >
            {eyebrow}
          </motion.span>

          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-foreground">
            <SplitText text={title} delay={0.1} />
          </h1>

          <Reveal variant="blur" delay={0.35}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
              {description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
