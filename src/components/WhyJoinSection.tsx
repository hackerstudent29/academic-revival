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
  return (
    <section className="relative z-10 bg-background overflow-hidden transition-colors" id="why-join">
      {/* Diagonal Background Accents (matching screenshot 1 & 2) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top diagonal stripe */}
        <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[40%] bg-[#F7F2EC] dark:bg-secondary/20 -rotate-12 origin-top-right" />
        {/* Middle/Bottom diagonal stripe */}
        <div className="absolute top-[40%] left-[-20%] w-[150%] h-[35%] bg-[#F7F2EC] dark:bg-secondary/20 -rotate-12 origin-bottom-left" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-6 py-12 md:px-12 md:py-16">
        {/* Static Header & Stats Section */}
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16 mb-16 md:mb-20">
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
          <Stagger gap={0.1} className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} variant="rise" className="flex flex-col items-start justify-center py-4 bg-background/50 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-foreground/5">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="block text-4xl font-bold tracking-tighter text-primary md:text-5xl lg:text-6xl"
                />
                <span className="mt-2 block text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Content Showcase matching screenshots layout */}
        <div className="flex flex-col w-full max-w-[1200px] mx-auto gap-16 md:gap-24">
          
          {/* Block 1: 50/50 Image Left, Text Right (Screenshot 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal variant="slide-right" className="w-full">
              <img
                src={ITEMS[0].mediaUrl}
                alt={ITEMS[0].title}
                className="w-full aspect-[16/9] md:aspect-[3/2] object-cover rounded-lg shadow-xl"
              />
            </Reveal>
            <Reveal variant="slide-left" className="flex flex-col justify-center items-start">
              <h3 className="font-display text-3xl md:text-[2.75rem] leading-[1.1] text-foreground mb-5 tracking-tight">
                {ITEMS[0].title}
              </h3>
              <p className="font-sans text-[1.1rem] text-muted-foreground leading-relaxed mb-8">
                {ITEMS[0].label}
              </p>
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center bg-foreground text-background font-display font-semibold uppercase tracking-wide text-xs md:text-sm px-6 py-4 rounded-md hover:bg-foreground/90 transition-all"
              >
                <ArrowRight className="w-4 h-4 mr-2" /> Explore The Experience
              </Link>
            </Reveal>
          </div>

          {/* Block 2: Masonry Layout (Screenshot 2) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Left Column (Wider, Text Top, Image Bottom) */}
            <div className="md:col-span-7 flex flex-col gap-6 md:gap-8">
              <Reveal variant="rise" className="max-w-md">
                <h3 className="font-display text-3xl md:text-[2.5rem] leading-[1.1] text-foreground mb-4 tracking-tight">
                  {ITEMS[1].title}
                </h3>
                <p className="font-sans text-[1.1rem] text-muted-foreground leading-relaxed">
                  {ITEMS[1].label}
                </p>
              </Reveal>
              <Reveal variant="rise" delay={0.2} className="w-full">
                <img
                  src={ITEMS[1].mediaUrl}
                  alt={ITEMS[1].title}
                  className="w-full aspect-[16/9] object-cover rounded-lg shadow-xl"
                />
              </Reveal>
            </div>
            
            {/* Right Column (Narrower, Image Top, Text Bottom) */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 md:mt-16">
              <Reveal variant="rise" delay={0.3} className="w-full">
                <img
                  src={ITEMS[2].mediaUrl}
                  alt={ITEMS[2].title}
                  className="w-full aspect-[5/4] md:aspect-square object-cover rounded-lg shadow-xl"
                />
              </Reveal>
              <Reveal variant="rise" delay={0.4} className="max-w-sm">
                <h3 className="font-display text-2xl md:text-[2rem] leading-[1.1] text-foreground mb-4 tracking-tight">
                  {ITEMS[2].title}
                </h3>
                <p className="font-sans text-[1rem] text-muted-foreground leading-relaxed">
                  {ITEMS[2].label}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Block 3: 50/50 Text Left, Image Right (Screenshot 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal variant="slide-right" className="flex flex-col justify-center items-start order-last md:order-first">
              <h3 className="font-display text-3xl md:text-[2.75rem] leading-[1.1] text-foreground mb-5 tracking-tight">
                {ITEMS[3].title}
              </h3>
              <p className="font-sans text-[1.1rem] text-muted-foreground leading-relaxed mb-8">
                {ITEMS[3].label}
              </p>
              <div className="flex flex-col gap-3 w-full">
                {/* Simulated list links as seen in screenshot 3 */}
                <Link to="/programmes" className="inline-flex items-center text-[#9c2b2b] dark:text-[#ff6b6b] font-display font-semibold uppercase tracking-wider text-xs md:text-sm hover:underline">
                  {ITEMS[4].title} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
                <Link to="/programmes" className="inline-flex items-center text-[#9c2b2b] dark:text-[#ff6b6b] font-display font-semibold uppercase tracking-wider text-xs md:text-sm hover:underline">
                  {ITEMS[5].title} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </Reveal>
            <Reveal variant="slide-left" className="w-full order-first md:order-last">
              <img
                src={ITEMS[3].mediaUrl}
                alt={ITEMS[3].title}
                className="w-full aspect-[16/9] md:aspect-[3/2] object-cover rounded-lg shadow-xl"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

