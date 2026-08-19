import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  CountUp,
  Reveal,
  SplitText,
  Stagger,
  StaggerItem,
} from "@/components/motion";

const stats = [
  { value: 25, suffix: "+", label: "Years Excellence" },
  { value: 5000, suffix: "+", label: "Alumni" },
  { value: 95, suffix: "%", label: "Placements", colorClass: "text-forest" },
  { value: 50, suffix: "+", label: "Recruiters" },
];

const ITEMS = [
  {
    id: "1",
    title: "Prime Location",
    label: "Situated on the OMR IT Corridor — Chennai's tech highway — giving students unmatched access to MNCs, startups, and research hubs.",
    mediaUrl: "/images/why-join/location.jpg"
  },
  {
    id: "2",
    title: "Industry Tie-ups",
    label: "Live projects, corporate mentorship, and hackathons run year-round in partnership with top-tier technology companies.",
    mediaUrl: "/images/why-join/industry.jpg"
  },
  {
    id: "3",
    title: "State-of-the-Art Labs",
    label: "Fully equipped research labs, innovation centres, and an IDEA Lab designed to transform ideas into real-world prototypes.",
    mediaUrl: "/images/why-join/labs.jpg"
  },
  {
    id: "4",
    title: "Scholarships & Sports",
    label: "Merit-based and sports scholarships available so that talent — academic or athletic — is always recognised and rewarded.",
    mediaUrl: "/images/why-join/sports.jpg"
  },
  {
    id: "5",
    title: "Anna Univ Affiliated",
    label: "Approved by AICTE and affiliated to Anna University, Chennai — ensuring globally recognised degrees and academic credibility.",
    mediaUrl: "/images/why-join/affiliated.jpg"
  },
  {
    id: "6",
    title: "Student-Led Chapters",
    label: "IEEE, CSI, and other professional chapters run by students, building leadership, networking, and real-world experience.",
    mediaUrl: "/images/why-join/chapters.png"
  },
];

export function WhyJoinSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ITEMS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="why-msajce" className="relative w-full bg-muted/40 flex flex-col justify-center">
      {/* Static Header & Stats Section */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 md:gap-12 lg:gap-16 px-6 py-16 md:px-12">
        {/* Header */}
        <Reveal variant="slide-right" className="flex flex-col gap-4 border-l-2 border-primary pl-6 md:pl-8">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-primary md:text-6xl lg:text-7xl">
            <SplitText text="Why Join MSAJCE?" />
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A campus that turns ambition into achievement — industry-integrated learning, global
            opportunities, every single day.
          </p>
        </Reveal>

        {/* Stats */}
        <Stagger
          gap={0.1}
          className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} variant="unfold" className="bg-background p-6 md:p-8">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className={`block text-3xl font-bold tracking-tighter md:text-4xl ${stat.colorClass || "text-primary"}`}
              />
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Interactive Auto-Advancing Showcase */}
      <div className="relative w-full">
        {/* Grid Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden bg-background min-h-[500px] h-auto md:h-[70vh] max-h-[800px]">
          
          {/* Left Column: Navigation Items */}
          <div
            className="md:col-span-5 flex flex-col justify-center p-8 z-20 bg-background/95 backdrop-blur-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ul className="space-y-4 md:space-y-6 max-w-md mx-auto w-full">
              {ITEMS.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <li
                    key={item.id}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className="cursor-pointer flex flex-col space-y-1 md:space-y-2 select-none group py-1 md:py-2"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Indicator Bullet */}
                      <span
                        className={`transition-all duration-300 transform font-bold text-primary ${
                          isActive
                            ? "opacity-100 scale-125 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                      >
                        &bull;
                      </span>

                      {/* Title */}
                      <span
                        className={`transition-all duration-300 ease-out text-lg md:text-2xl lg:text-3xl ${
                          isActive
                            ? "scale-105 font-bold translate-x-1 text-foreground"
                            : "opacity-40 text-foreground group-hover:opacity-80"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                    {/* Description (Visible when active) */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs md:text-sm text-muted-foreground ml-8 max-w-sm">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Media Display Area */}
          <div className="md:col-span-7 relative h-full min-h-[300px] w-full overflow-hidden bg-muted order-first md:order-last">
            {ITEMS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    isActive
                      ? "opacity-100 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  <div className="absolute inset-0 bg-black/10 z-10"></div>
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-background py-16 flex justify-center border-t border-border/50">
        <Reveal variant="scale">
            <Link
              to="/admissions"
              className="group relative overflow-hidden inline-flex w-full items-center justify-center bg-forest px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-background after:absolute after:inset-0 after:top-full after:bg-foreground after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0 md:w-auto"
            >
              <span className="relative z-10">Explore Admissions</span>
            </Link>
        </Reveal>
      </div>

    </section>
  );
}
