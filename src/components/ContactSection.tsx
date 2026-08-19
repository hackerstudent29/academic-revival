import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";

export function ContactSection() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center border-t border-foreground/12 bg-background py-16" id="contact">
      <div className="mx-auto grid max-w-[1440px] w-full gap-12 px-6 md:grid-cols-2 md:gap-8 md:px-12 lg:px-16">
        {/* Left Column: Info */}
        <div className="flex flex-col justify-between">
          <div>
            <Reveal variant="blur">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.32em] text-foreground/50">
                Contact Us
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.1}>
              <h3 className="mt-8 text-[40px] font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[60px] md:text-[5vw] lg:text-[6vw]">
                GET IN <br /> TOUCH.
              </h3>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.2}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-foreground/70 sm:text-base md:mt-12">
                Have questions about admissions, academic programs, or campus life? Our advisors are here to help you begin your journey at MSAJCE.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 space-y-8 md:mt-0 md:pb-8">
            <Reveal variant="fadeUp" delay={0.3}>
              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors group-hover:border-primary group-hover:text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50">Visit Us</h4>
                  <p className="mt-2 text-sm text-foreground/80">
                    OMR IT Corridor, Egattur, <br />
                    Chennai, Tamil Nadu 603103
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.4}>
              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors group-hover:border-primary group-hover:text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50">Call Us</h4>
                  <p className="mt-2 text-sm text-foreground/80">+91 44 2747 0000</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.5}>
              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors group-hover:border-primary group-hover:text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50">Email Us</h4>
                  <p className="mt-2 text-sm text-foreground/80">admissions@msajce.edu.in</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex items-center md:pl-8 lg:pl-16">
          <Reveal variant="fadeUp" delay={0.3} className="w-full">
            <form className="flex w-full flex-col gap-8 lg:gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="group relative">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  className="peer w-full border-b border-foreground/20 bg-transparent py-4 text-base text-foreground placeholder-transparent outline-none transition-colors focus:border-primary"
                  required
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute left-0 top-4 text-sm text-foreground/50 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary peer-valid:-top-3 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.2em]"
                >
                  Full Name
                </label>
              </div>

              <div className="group relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer w-full border-b border-foreground/20 bg-transparent py-4 text-base text-foreground placeholder-transparent outline-none transition-colors focus:border-primary"
                  required
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-0 top-4 text-sm text-foreground/50 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary peer-valid:-top-3 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.2em]"
                >
                  Email Address
                </label>
              </div>

              <div className="group relative">
                <input
                  type="tel"
                  id="phone"
                  placeholder=" "
                  className="peer w-full border-b border-foreground/20 bg-transparent py-4 text-base text-foreground placeholder-transparent outline-none transition-colors focus:border-primary"
                  required
                />
                <label
                  htmlFor="phone"
                  className="pointer-events-none absolute left-0 top-4 text-sm text-foreground/50 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary peer-valid:-top-3 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.2em]"
                >
                  Phone Number
                </label>
              </div>

              <div className="group relative mt-2">
                <textarea
                  id="message"
                  placeholder=" "
                  rows={3}
                  className="peer w-full resize-none border-b border-foreground/20 bg-transparent py-4 text-base text-foreground placeholder-transparent outline-none transition-colors focus:border-primary"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-0 top-4 text-sm text-foreground/50 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary peer-valid:-top-3 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.2em]"
                >
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-4 flex w-full items-center justify-between rounded-md bg-foreground px-6 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary hover:text-primary-foreground md:w-auto"
                type="submit"
              >
                Send Message
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
