import { Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { ArrowRight, CalendarDays, ChevronRight } from "lucide-react";

const featuredNews = {
  tag: "Featured Event",
  date: "Oct 15-17, 2026",
  title: "National Level AI & Web3 Hackathon 2026",
  body: "Join over 500+ student innovators from across the country for a 48-hour coding marathon. Build the future, win exciting prizes, and get spotted by top tech recruiters. Register now to secure your spot.",
  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
};

const smallNews = [
  {
    tag: "Announcement",
    date: "2 days ago",
    title: "Odd Semester Examination Schedule Released",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
  },
  {
    tag: "Upcoming",
    date: "Sept 10, 2026",
    title: "Guest Lecture on Quantum Computing Frontiers",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  },
  {
    tag: "Campus Life",
    date: "Sept 05, 2026",
    title: "Annual Cultural Fest 'Sanskriti' Dates Announced",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
  }
];

export function NewsAndEventsSection() {
  return (
    <section className="bg-background" id="news">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl text-left">
            <Reveal variant="slide-up">
              <h2 className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.25em] text-primary">
                Happenings at MSAJCE
              </h2>
            </Reveal>
            <Reveal variant="slide-up" delay={0.1}>
              <h3 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground">
                News &amp; Events
              </h3>
            </Reveal>
          </div>
          
          <Reveal variant="slide-up" delay={0.2}>
            <Link
              to="/news"
              className="group flex items-center justify-between border-b border-foreground/12 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-primary active:text-primary min-w-[200px]"
            >
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                View All Updates
              </span>
              <ArrowRight 
                size={16} 
                className="text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" 
              />
            </Link>
          </Reveal>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[720px]">
          
          {/* Left: Large Featured News */}
          <Reveal variant="slide-up" delay={0.1} className="lg:col-span-7 h-[400px] lg:h-full">
            <div className="group relative overflow-hidden rounded-2xl flex flex-col justify-end p-8 md:p-12 h-full cursor-pointer">
              <img 
                src={featuredNews.image} 
                alt="Featured News" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-start text-white">
                <span className="bg-primary/90 backdrop-blur-sm px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm mb-6 shadow-lg">
                  {featuredNews.tag}
                </span>
                <h4 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black uppercase tracking-tighter leading-[0.95]">
                  {featuredNews.title}
                </h4>
                <p className="mt-6 text-sm md:text-base text-white/80 max-w-lg leading-relaxed line-clamp-3">
                  {featuredNews.body}
                </p>
                
                <div className="mt-8 flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/60 uppercase tracking-widest">
                    <CalendarDays size={16} />
                    {featuredNews.date}
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-x-0">
                    Read Story <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Vertical Scrolling Ticker */}
          <div className="lg:col-span-5 relative h-[720px] overflow-hidden group rounded-2xl flex flex-col">
            <style>{`
              @keyframes vertical-marquee {
                from { transform: translateY(0); }
                to { transform: translateY(-732px); } /* 3 items * (220px height + 24px gap) = 732px */
              }
              .animate-vertical-marquee {
                animation: vertical-marquee 12s linear infinite;
              }
            `}</style>
            
            {/* Top/Bottom Fade Masks for premium scrolling effect */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

            {/* Scroll Wrapper */}
            <div className="animate-vertical-marquee flex flex-col gap-[24px] group-hover:[animation-play-state:paused]">
              
              {/* Set 1 */}
              {smallNews.map((news, idx) => (
                <div key={`set1-${idx}`} className="group/card relative w-full shrink-0 overflow-hidden rounded-2xl flex flex-col justify-end p-6 md:p-8 cursor-pointer" style={{ height: '220px' }}>
                  <img 
                    src={news.image} 
                    alt="News" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[40%] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-start text-white w-full">
                    <div className="flex items-center justify-between w-full mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary drop-shadow-md">
                        {news.tag}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60 flex items-center gap-1.5">
                        <CalendarDays size={12} />
                        {news.date}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-snug line-clamp-2">
                      {news.title}
                    </h4>
                    
                    <div className="overflow-hidden max-h-0 opacity-0 group-hover/card:max-h-12 group-hover/card:opacity-100 group-hover/card:mt-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                        Read Article <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Set 2 (Duplicate for seamless infinite scroll) */}
              {smallNews.map((news, idx) => (
                <div key={`set2-${idx}`} aria-hidden="true" className="group/card relative w-full shrink-0 overflow-hidden rounded-2xl flex flex-col justify-end p-6 md:p-8 cursor-pointer" style={{ height: '220px' }}>
                  <img 
                    src={news.image} 
                    alt="News" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[40%] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-start text-white w-full">
                    <div className="flex items-center justify-between w-full mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary drop-shadow-md">
                        {news.tag}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60 flex items-center gap-1.5">
                        <CalendarDays size={12} />
                        {news.date}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-snug line-clamp-2">
                      {news.title}
                    </h4>
                    
                    <div className="overflow-hidden max-h-0 opacity-0 group-hover/card:max-h-12 group-hover/card:opacity-100 group-hover/card:mt-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                        Read Article <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
