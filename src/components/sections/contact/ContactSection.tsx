import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";

const EASE_APPLE = [0.16, 1, 0.3, 1] as const;

const formVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const inputVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: EASE_APPLE,
    },
  },
};

export function ContactSection() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center border-b border-border bg-page-bg py-16" id="contact">
      <div className="mx-auto grid max-w-[1440px] w-full gap-12 px-6 md:grid-cols-2 md:gap-8 md:px-12 lg:px-16">
        {/* Left Column: Info */}
        <motion.div 
          initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE_APPLE }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-[12px] font-mono font-bold uppercase tracking-[0.32em] text-primary">
              Contact Us //
            </h2>
            <h3 className="mt-6 text-[40px] font-black font-oswald uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[60px] md:text-[5vw] lg:text-[6vw]">
              GET IN <br /> TOUCH.
            </h3>
            <p className="mt-8 max-w-md text-sm leading-relaxed font-sans text-foreground/70 sm:text-base md:mt-12">
              Have questions about admissions, academic programs, or campus life? Our advisors are here to help you begin your journey at MSAJCE.
            </p>
          </div>
          <div className="mt-16 space-y-8 md:mt-0 md:pb-8">
            {/* Contact details slot if needed */}
          </div>
        </motion.div>

        {/* Right Column: Form with Staggered Framer Motion Reveal */}
        <div className="flex items-center md:pl-8 lg:pl-16 mt-12 md:mt-0">
          <motion.form 
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex w-full flex-col gap-8 lg:gap-10" 
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div variants={inputVariants} className="group relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full border-b border-foreground/20 bg-transparent py-4 text-base text-foreground placeholder-transparent outline-none transition-colors focus:border-primary font-sans"
                required
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-0 top-4 text-sm text-foreground/50 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary peer-valid:-top-3 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.2em] font-sans"
              >
                Full Name
              </label>
            </motion.div>

            <motion.div variants={inputVariants} className="group relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full border-b border-foreground/20 bg-transparent py-4 text-base text-foreground placeholder-transparent outline-none transition-colors focus:border-primary font-sans"
                required
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-0 top-4 text-sm text-foreground/50 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary peer-valid:-top-3 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.2em] font-sans"
              >
                Email Address
              </label>
            </motion.div>

            <motion.div variants={inputVariants} className="group relative">
              <input
                type="tel"
                id="phone"
                placeholder=" "
                className="peer w-full border-b border-foreground/20 bg-transparent py-4 text-base text-foreground placeholder-transparent outline-none transition-colors focus:border-primary font-sans"
                required
              />
              <label
                htmlFor="phone"
                className="pointer-events-none absolute left-0 top-4 text-sm text-foreground/50 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary peer-valid:-top-3 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.2em] font-sans"
              >
                Phone Number
              </label>
            </motion.div>

            <motion.div variants={inputVariants} className="group relative mt-2">
              <textarea
                id="message"
                placeholder=" "
                rows={3}
                className="peer w-full resize-none border-b border-foreground/20 bg-transparent py-4 text-base text-foreground placeholder-transparent outline-none transition-colors focus:border-primary font-sans"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-0 top-4 text-sm text-foreground/50 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary peer-valid:-top-3 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.2em] font-sans"
              >
                Your Message
              </label>
            </motion.div>

            <motion.div variants={inputVariants}>
              <button
                type="submit"
                className="group relative overflow-hidden inline-flex w-full md:w-auto items-center justify-center gap-2 border border-primary px-7 py-4 text-xs font-bold uppercase tracking-widest text-primary font-oswald transition-colors hover:text-primary-foreground after:absolute after:inset-0 after:top-full after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0 rounded-xs shadow-xs"
              >
                <span className="relative z-10 flex items-center gap-2">Send Message &raquo;</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
