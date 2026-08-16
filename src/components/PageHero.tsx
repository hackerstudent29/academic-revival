import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden border-b border-foreground/12 bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text-color) 1px, transparent 1px), linear-gradient(to bottom, var(--text-color) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/80">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
