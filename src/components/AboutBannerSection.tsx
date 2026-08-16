import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CountUp, Magnetic, Parallax, Reveal, SplitText, Stagger, StaggerItem } from "@/components/motion";

const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
];

export function AboutBannerSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="w-full bg-background px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: editorial copy */}
        <Reveal variant="slide-right" className="flex flex-col justify-center lg:col-span-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            About MSAJCE
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-foreground md:text-5xl lg:text-6xl">
            <SplitText text="Empowering Leaders," />
            <br />
            <SplitText text="Innovators &" delay={0.1} />
            <br />
            <SplitText text="Changemakers" delay={0.2} wordClassName="text-primary" />
          </h2>

          <p className="mt-8 max-w-lg border-l-2 border-primary pl-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Be part of an institution that prepares you for tomorrow&rsquo;s challenges, today.
          </p>

          <Stagger gap={0.12} className="mt-12 grid grid-cols-2 gap-px border border-border bg-border">
            <StaggerItem variant="unfold" className="bg-background p-6">
              <CountUp value={5} suffix="th" className="block text-3xl font-bold tracking-tighter text-primary" />
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                In Tamil Nadu — NIRF 2024
              </span>
            </StaggerItem>
            <StaggerItem variant="unfold" className="bg-background p-6">
              <span className="block text-3xl font-bold tracking-tighter text-primary">AICTE</span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Approved &amp; Anna Univ Affiliated
              </span>
            </StaggerItem>
          </Stagger>

          <div className="mt-12">
            <Magnetic strength={0.2}>
              <Link
                to="/about"
                className="inline-flex items-center bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground"
              >
                Vision &amp; Mission
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        {/* Right: image slideshow */}
        <Reveal
          variant="clip"
          className="relative h-[360px] w-full overflow-hidden border border-border lg:col-span-6 lg:h-[560px]"
        >
          <Parallax distance={28} className="absolute inset-[-8%]">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="MSAJCE campus life"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover object-center grayscale"
            />
          </AnimatePresence>
          </Parallax>
          <div className="absolute bottom-0 left-0 z-10 flex gap-2 bg-background p-4">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1 w-8 transition-colors ${
                  i === currentImage ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
