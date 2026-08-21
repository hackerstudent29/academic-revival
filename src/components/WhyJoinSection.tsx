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
    <section className="bg-[#EAEAEA] dark:bg-[#1a1c1a] py-16 md:py-24 border-b border-foreground/12 transition-colors" id="why-join">
      {/* Static Header & Stats Section */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 md:gap-12 lg:gap-16 px-6 py-16 md:px-12">
        {/* Header */}
        <Reveal variant="slide-right" className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
            <SplitText text="Why Join MSAJCE?" />
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A campus that turns ambition into achievement — industry-integrated learning, global
            opportunities, every single day.
          </p>
        </Reveal>

        {/* Stats */}
        <Stagger
          gap={0.1}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} variant="unfold" className="bg-background rounded-lg shadow-sm border border-border/50 p-6 md:p-8">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="block text-4xl font-bold tracking-tighter text-primary md:text-5xl"
              />
              <span className="mt-2 block text-xs font-bold text-muted-foreground">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Interactive Auto-Advancing Showcase */}
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 pb-16">
        <div className="relative w-full">
          {/* Grid Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 min-h-[500px] h-auto md:h-[70vh] max-h-[800px] gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Navigation Items */}
          <div
            className="md:col-span-5 flex flex-col justify-center z-20"
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

                    {/* Subtitle / Description */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out pl-6 md:pl-7 ${
                        isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Media Display Area */}
          <div className="md:col-span-7 relative h-[300px] md:h-full w-full overflow-hidden rounded-2xl bg-muted order-first md:order-last shadow-lg">
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
      </div>
    </section>
  );
}
