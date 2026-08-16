import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

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
    <section id="about" className="relative flex h-[450px] w-full overflow-hidden md:h-[500px]">
      {/* Background slideshow */}
      <div className="absolute inset-0 h-full w-full bg-foreground">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="MSAJCE campus life"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* Layered chevrons */}
      <div
        className="absolute left-0 top-0 z-10 h-full w-full bg-clay md:w-[75%] lg:w-[65%]"
        style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 120px) 50%, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute left-0 top-0 z-10 hidden h-full w-full bg-black/10 md:block md:w-[75%] lg:w-[65%]"
        style={{
          clipPath:
            "polygon(100% 0, calc(100% + 120px) 0, calc(100% + 0px) 50%, calc(100% + 120px) 100%, 100% 100%, calc(100% - 120px) 50%)",
        }}
      />
      <div
        className="absolute left-0 top-0 z-10 hidden h-full w-full bg-black/10 md:block md:w-[75%] lg:w-[65%]"
        style={{
          clipPath:
            "polygon(calc(100% + 120px) 0, calc(100% + 240px) 0, calc(100% + 120px) 50%, calc(100% + 240px) 100%, calc(100% + 120px) 100%, calc(100% + 0px) 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex h-full w-full items-center px-6 md:px-12">
        <div className="flex w-full flex-col items-start justify-center gap-4 py-8 text-clay-foreground md:w-[60%] lg:w-[50%]">
          <span className="text-xs font-bold uppercase tracking-wide">About MSAJCE</span>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-[2.75rem]">
            Empowering Leaders, Innovators &amp; Changemakers
          </h2>

          <p className="mt-1 max-w-lg text-base font-medium leading-relaxed opacity-90 md:text-lg">
            Be part of an institution that prepares you for tomorrow&rsquo;s challenges, today.
          </p>

          <Link
            to="/about"
            className="mt-2 flex items-center gap-2 border border-clay-foreground px-5 py-2.5 text-sm font-bold transition-colors hover:bg-clay-foreground hover:text-clay"
          >
            MSAJCE Vision and Mission &raquo;
          </Link>

          <div className="mb-3 mt-6 h-px w-full max-w-sm bg-clay-foreground/30" />

          <div className="flex w-full max-w-sm flex-col items-start text-left md:items-center md:text-center">
            <span className="text-lg font-bold tracking-tight">
              5<sup className="text-xs font-medium">th</sup> in Tamil Nadu
            </span>
            <span className="mt-1 text-xs italic opacity-90">
              by NIRF 2024 Engineering Rankings
            </span>
          </div>

          <div className="mt-3 h-px w-full max-w-sm bg-clay-foreground/30" />
        </div>
      </div>
    </section>
  );
}
