import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  CountUp,
  Reveal,
  SplitText,
  Stagger,
  StaggerItem,
} from "@/components/motion";

const stats = [
  { value: 981, suffix: "", label: "Happy Students" },
  { value: 175, suffix: "", label: "Achievements" },
  { value: 301, suffix: "", label: "Team Staff" },
  { value: 54, suffix: "", label: "Awards Won" },
];

const ITEMS = [
  { id: "1", title: "Over 25 years of academic excellence preparing students for top-tier engineering careers.", mediaUrl: "/images/why-join/location.jpg" },
  { id: "2", title: "Consistent 90%+ placement record with key recruiters like TCS, Infosys, Zoho, and Cognizant.", mediaUrl: "/images/why-join/industry.jpg" },
  { id: "3", title: "Strategically located in Siruseri IT Park on OMR, offering direct access to tech MNCs and startups.", mediaUrl: "/images/why-join/labs.jpg" },
  { id: "4", title: "Approved by AICTE, affiliated to Anna University, with NBA accredited & ISO certified programs.", mediaUrl: "/images/why-join/sports.jpg" },
  { id: "5", title: "State-of-the-art research laboratories and an active AICTE-approved IDEA Lab for engineering innovation.", mediaUrl: "/images/why-join/affiliated.jpg" },
  { id: "6", title: "Comprehensive merit-based and sports scholarships to support outstanding student talent.", mediaUrl: "/images/why-join/chapters.png" },
  { id: "7", title: "Active professional student chapters including IEEE, CSI, and SAE for hands-on leadership.", mediaUrl: "/images/why-join/location.jpg" },
];

interface ImageCollageSquareProps {
  images: string[];
}

export function ImageCollageSquare({ images }: ImageCollageSquareProps) {
  return (
    <div className="aspect-square w-full grid grid-cols-12 grid-rows-12 gap-1 relative overflow-hidden">
      {/* Image 1: Large top-left (8x8) */}
      <div className="col-start-1 col-end-9 row-start-1 row-end-9 relative overflow-hidden">
        <Reveal variant="rise" delay={0.0} className="w-full h-full">
          <img src={images[0]} alt="Collage 1" className="w-full h-full object-cover" />
        </Reveal>
      </div>
      {/* Image 2: Medium top-right (4x5) */}
      <div className="col-start-9 col-end-13 row-start-1 row-end-6 relative overflow-hidden">
        <Reveal variant="scale" delay={0.1} className="w-full h-full">
          <img src={images[1]} alt="Collage 2" className="w-full h-full object-cover" />
        </Reveal>
      </div>
      {/* Image 3: Small middle-right (4x3) */}
      <div className="col-start-9 col-end-13 row-start-6 row-end-9 relative overflow-hidden">
        <Reveal variant="scale" delay={0.2} className="w-full h-full">
          <img src={images[2]} alt="Collage 3" className="w-full h-full object-cover" />
        </Reveal>
      </div>
      {/* Image 4: Medium bottom-left (5x4) */}
      <div className="col-start-1 col-end-6 row-start-9 row-end-13 relative overflow-hidden">
        <Reveal variant="slide-right" delay={0.15} className="w-full h-full">
          <img src={images[3]} alt="Collage 4" className="w-full h-full object-cover" />
        </Reveal>
      </div>
      {/* Image 5: Medium bottom-right (7x4) */}
      <div className="col-start-6 col-end-13 row-start-9 row-end-13 relative overflow-hidden">
        <Reveal variant="rise" delay={0.25} className="w-full h-full">
          <img src={images[4]} alt="Collage 5" className="w-full h-full object-cover" />
        </Reveal>
      </div>
    </div>
  );
}

export function WhyJoinSection() {
  const [activeItem, setActiveItem] = useState(0);
  const collageImages = [
    ITEMS[0].mediaUrl,
    ITEMS[1].mediaUrl,
    ITEMS[2].mediaUrl,
    ITEMS[3].mediaUrl,
    ITEMS[4].mediaUrl,
  ];

  return (
    <section className="relative z-10 bg-[#EAEAEA] dark:bg-[#111915] overflow-hidden py-12 md:py-16 scroll-mt-20" id="why-join">
      {/* Diagonal Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[40%] bg-[#E0E2E5] dark:bg-secondary/20 -rotate-12 origin-top-right" />
        <div className="absolute top-[40%] left-[-20%] w-[150%] h-[35%] bg-[#E0E2E5] dark:bg-secondary/20 -rotate-12 origin-bottom-left" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 flex flex-col gap-12">
        
        {/* Header moved above the grid */}
        <Reveal variant="slide-right" className="flex flex-col gap-4 max-w-xl lg:max-w-2xl mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
            <SplitText text="Why Join MSAJCE?" />
          </h2>
        </Reveal>

        {/* Main Grid: Left (Points + Numbers), Right (Collage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Points and Stats Numbers */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Points at starting - Interactive Feature Blocks */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {ITEMS.map((item, idx) => (
                <Reveal key={item.id} variant="slide-right" delay={idx * 0.05} className="w-full animate-fade-in">
                  <div className="group flex items-start gap-5 w-full text-left">
                    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-black text-[11px] bg-primary/10 text-primary mt-0.5">
                      0{idx + 1}
                    </div>
                    <span className="text-sm md:text-[15px] font-medium text-foreground leading-relaxed">
                      {item.title}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Stats Numbers down below the points */}
            <Stagger gap={0.1} className="grid grid-cols-2 gap-6 border-t border-border/60 pt-8">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} variant="rise" className="flex flex-col">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    className="block text-3xl md:text-4xl font-bold tracking-tighter text-primary"
                  />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mt-1">
                    {stat.label}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right Column: Big Square Image Collage (No borders/bg-cards) */}
          <div className="lg:col-span-6 w-full lg:-mt-28">
            <ImageCollageSquare images={collageImages} />
          </div>

        </div>


      </div>
    </section>
  );
}
