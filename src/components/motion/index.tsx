"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
  type ElementType,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

/* ── Shared physics ─────────────────────────────────────────── */

export const SPRING_SOFT = { type: "spring", stiffness: 120, damping: 20, mass: 0.9 } as const;
export const SPRING_SNAPPY = { type: "spring", stiffness: 420, damping: 30, mass: 0.6 } as const;
export const SPRING_BOUNCY = { type: "spring", stiffness: 260, damping: 14, mass: 0.8 } as const;
export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

/* ── Reveal: multiple distinct entrance styles ──────────────── */

export type RevealVariant =
  | "rise"
  | "blur"
  | "mask"
  | "clip"
  | "scale"
  | "slide-left"
  | "slide-right"
  | "tilt"
  | "unfold";

const variantMap: Record<RevealVariant, Variants> = {
  rise: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: SPRING_SOFT },
  },
  blur: {
    hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE_EDITORIAL },
    },
  },
  mask: {
    hidden: { opacity: 0, y: "110%" },
    show: { opacity: 1, y: "0%", transition: { duration: 0.95, ease: EASE_EDITORIAL } },
  },
  clip: {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.4 },
    show: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: { duration: 1.05, ease: EASE_EDITORIAL },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: SPRING_BOUNCY },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 64 },
    show: { opacity: 1, x: 0, transition: SPRING_SOFT },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -64 },
    show: { opacity: 1, x: 0, transition: SPRING_SOFT },
  },
  tilt: {
    hidden: { opacity: 0, y: 56, rotateX: 14, transformPerspective: 900 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: SPRING_SOFT },
  },
  unfold: {
    hidden: { opacity: 0, scaleY: 0.7, originY: 0 },
    show: { opacity: 1, scaleY: 1, transition: SPRING_SOFT },
  },
};

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
  as = "div",
  once = true,
  amount = 0.25,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
  amount?: number;
}) {
  const MotionTag = motion[as as "div"] ?? motion.div;
  const v = variantMap[variant];
  const overlay = variant === "mask";

  const inner = (
    <MotionTag
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
      className={overlay ? undefined : className}
      style={overlay ? { display: "block" } : undefined}
    >
      {children}
    </MotionTag>
  );

  if (overlay) return <span className={`block overflow-hidden ${className ?? ""}`}>{inner}</span>;
  return inner;
}

/* ── Stagger container + item ───────────────────────────────── */

export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  return (
    <motion.div variants={variantMap[variant]} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Word-by-word spring headline ───────────────────────────── */

export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
      className={className}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: EASE_EDITORIAL } },
            }}
            className={`inline-block ${wordClassName ?? ""}`}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ── Scroll parallax wrapper ────────────────────────────────── */

export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.4 });
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* ── Magnetic, spring-driven interactive wrapper ────────────── */

export function Magnetic({
  children,
  className,
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, SPRING_SNAPPY);
  const y = useSpring(my, SPRING_SNAPPY);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={`inline-block ${className ?? ""}`}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - (r.left + r.width / 2)) * strength);
        my.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.div>
  );
}

/* ── Spring-physics number counter ──────────────────────────── */

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 70, damping: 22, mass: 1 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
