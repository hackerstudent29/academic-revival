import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";

const EASE_APPLE = [0.16, 1, 0.3, 1] as const;

// Header Container Stagger
const headerContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Header Text Items Reveal (Slide up + Fade + Blur reveal)
const headerTextVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_APPLE },
  },
};

// Card Grid Container Stagger
const cardGridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

// Individual Card Reveal (Scale 0.96 -> 1 + Slide up 44px -> 0 + Blur 8px -> 0)
const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.96, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_APPLE },
  },
};

const degreeLevels = [
  {
    id: "ug",
    title: "UG Programmes",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
    description: "Industry-aligned B.E., B.Tech & B.Arch degrees in AI, Data Science, Cyber Security, CSE, ECE & Mechanical.",
    depts: [
      "Civil Engineering",
      "Computer Science & Engineering",
      "Electronics & Comm. Engineering",
      "Electrical & Electronics Engineering",
      "Mechanical Engineering",
      "Information Technology",
      "AI & Data Science",
      "CS & Business Systems",
      "CSE (Cyber Security)",
      "AI & Machine Learning",
      "ECE (VLSI Design)",
      "ECE (Adv. Communication)",
      "Bachelor of Architecture",
      "Bachelor of Design",
    ],
    search: { level: "Undergraduate", view: "table" },
    cta: "Explore UG Degrees",
  },
  {
    id: "pg",
    title: "PG Programmes",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop",
    description: "Advanced Master of Engineering and Architecture programs tailored for technical leadership & research.",
    depts: [
      "M.E. Computer Science & Engg",
      "M.E. Structural Engineering",
      "Master of Architecture",
    ],
    search: { level: "Postgraduate", view: "table" },
    cta: "Explore PG Degrees",
  },
  {
    id: "phd",
    title: "Doctorate (Ph.D)",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&q=80&auto=format&fit=crop",
    description: "Anna University recognized research center advancing doctoral research in Mechanical Engineering.",
    depts: [
      "Mechanical Engineering (Ph.D)",
    ],
    search: { level: "Research (Ph.D)", view: "table" },
    cta: "Explore Ph.D Research",
  },
];

export function AcademicProgrammesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="academic-programmes"
      className="relative w-full bg-page-bg border-b border-border py-14 lg:py-20 text-foreground overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16">
        
        {/* Section Header with Famous Blur & Slide Reveal */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-foreground/10 gap-4"
        >
          <motion.div variants={headerTextVariants} className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-primary font-oswald leading-none">
              Programmes Offered
            </h2>
          </motion.div>
          <motion.p
            variants={headerTextVariants}
            className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans"
          >
            AICTE-approved & Anna University-affiliated degree pathways built for technical excellence and global careers.
          </motion.p>
        </motion.div>

        {/* 3-Column Degree Cards with Famous Framer Motion Staggered Scale-Blur Reveal */}
        <motion.div 
          variants={cardGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {degreeLevels.map((lvl) => {
            return (
              <motion.div
                key={lvl.id}
                variants={cardItemVariants}
                className="relative flex flex-col justify-between bg-[#F3F3F2] dark:bg-[#121214] border border-border rounded-[4px] shadow-xs hover:border-foreground/30 transition-shadow duration-300 hover:shadow-xl overflow-hidden h-[485px]"
              >
                {/* Upper Card Container (Hover Trigger for overlay, stops ABOVE button) */}
                <div className="group/upper relative flex-1 flex flex-col justify-between overflow-hidden">
                  {/* 1. Default Top Half (Prominent Image Showcase) */}
                  <div className="relative w-full h-[265px] overflow-hidden bg-muted border-b border-border shrink-0">
                    <img
                      src={lvl.image}
                      alt={lvl.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* 2. Default Content Above Button */}
                  <div className="flex-1 p-5 flex flex-col justify-start bg-[#F3F3F2] dark:bg-[#121214]">
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground font-oswald mb-1.5 group-hover/upper:text-primary transition-colors">
                      {lvl.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                      {lvl.description}
                    </p>
                  </div>

                  {/* 3. Smooth Slide-Up Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#F3F3F2] dark:bg-[#121214] text-foreground dark:text-white p-5 flex flex-col justify-between z-20 translate-y-full group-hover/upper:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-border shadow-xl overflow-hidden">
                    <div className="flex-1 flex flex-col overflow-hidden">
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-primary font-oswald mb-3 border-b border-foreground/10 pb-2 shrink-0">
                        {lvl.title}
                      </h3>

                      {/* Department Names List (Clean single column, Libre Franklin secondary font) */}
                      <div className="flex-1 flex flex-col justify-start gap-2.5 py-1 overflow-hidden font-sans text-xs sm:text-[12.5px] font-semibold text-foreground dark:text-white/90">
                        {lvl.depts.map((dept, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 truncate"
                            title={dept}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="truncate leading-tight">{dept}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Permanent Bottom Button */}
                <div className="p-5 pt-3 z-30 bg-[#F3F3F2] dark:bg-[#121214] border-t border-border">
                  <Link
                    to="/programmes-offered"
                    search={lvl.search as any}
                    className="group/btn relative overflow-hidden inline-flex items-center justify-center border border-border hover:border-primary/60 px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary font-oswald shadow-xs transition-colors hover:text-primary-foreground after:absolute after:inset-0 after:top-full after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0 rounded-xs w-full text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                      {lvl.cta} &raquo;
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
