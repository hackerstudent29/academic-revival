import { Link } from "@tanstack/react-router";
import { Reveal } from "./motion";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NewsItem {
  id: string;
  category: string;
  title: string;
  description?: string;
  date?: string;
  venue?: string;
  image: string;
  link?: string;
}

const mainFeaturedArticles: NewsItem[] = [
  {
    id: "featured-1",
    category: "CAMPUS NEWS",
    title: "Summer 2026 Research Spotlight: MSAJCE Students Study Methane and Earthquake Activity at La Brea Tar Pits",
    description:
      "During the Seaver summer 2026 research program, MSAJCE students partnered with faculty mentors to study methane seepage and seismic activity at the world-famous La Brea Tar Pits.",
    date: "August 18, 2026",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "featured-2",
    category: "INNOVATION",
    title: "New AI Research Center Opens on Campus",
    description:
      "MSAJCE inaugurates a state-of-the-art Artificial Intelligence research center to foster interdisciplinary collaboration and technological breakthroughs.",
    date: "September 5, 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "featured-3",
    category: "GLOBAL OUTREACH",
    title: "Students Participate in International Tech Symposium in Tokyo",
    description:
      "A delegation of 15 engineering students presented their award-winning sustainable energy projects at the Global Tech Symposium.",
    date: "October 12, 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    link: "/campus-life",
  }
];

const sidebarArticles: NewsItem[] = [
  {
    id: "side-1",
    category: "CAMPUS COMMUNITY",
    title: "Buster Blazed a Trail as MSAJCE's First Campus Dog",
    date: "August 11, 2026",
    venue: "Main Campus Quad",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=600&auto=format&fit=crop", // placeholder for dog
    link: "/campus-life",
  },
  {
    id: "side-2",
    category: "CAMPUS NEWS",
    title: "Studio Arts Professor Dmitry Kemell Contributes to \"Hospital of Emotions\"...",
    date: "August 7, 2026",
    venue: "Fine Arts Studio",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop", // placeholder for art piece
    link: "/campus-life",
  },
  {
    id: "side-3",
    category: "CAMPUS NEWS",
    title: "BCLA Summer Internship Spotlight: Miles Gibson '27",
    date: "August 5, 2026",
    venue: "Career Center",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", // placeholder for students talking
    link: "/campus-life",
  },
  {
    id: "side-4",
    category: "ACADEMICS",
    title: "Robotics Workshop: Build Your First Autonomous Drone",
    date: "August 20, 2026",
    venue: "Engineering Lab 3",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "side-5",
    category: "TECH FEST",
    title: "Annual Hackathon 'Innovate 2026' Registrations Open",
    date: "September 2, 2026",
    venue: "Computer Science Block",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "side-6",
    category: "SEMINAR",
    title: "Guest Lecture: AI in Healthcare by Dr. Sarah Jenkins",
    date: "September 15, 2026",
    venue: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "side-7",
    category: "SPORTS",
    title: "Inter-College Basketball Championship Finals",
    date: "September 22, 2026",
    venue: "Indoor Sports Complex",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "side-8",
    category: "ALUMNI",
    title: "Alumni Meet & Greet: Celebrating 25 Years of Excellence",
    date: "October 10, 2026",
    venue: "Grand Alumni Hall",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
];

const bottomRowArticles: NewsItem[] = [
  {
    id: "bottom-1",
    category: "CAMPUS COMMUNITY",
    title: "Summer Innovation Fellowship: Students Explore Semiconductor Nanotechnology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "bottom-2",
    category: "PRESS RELEASES",
    title: "Mohamed Sathak Trust Digitizes 40-Year Heritage Archive and Research Publications",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "bottom-3",
    category: "PRESS RELEASES",
    title: "MSAJCE Selected as Regional Nodal Center for Green Energy & Sustainability Research",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
];

export function NewsAndEventsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [mainIndex, setMainIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % sidebarArticles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mainTimer = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % mainFeaturedArticles.length);
    }, 6000);
    return () => clearInterval(mainTimer);
  }, []);

  const visibleArticles = [];
  for (let i = 0; i < 3; i++) {
    visibleArticles.push(sidebarArticles[(startIndex + i) % sidebarArticles.length]);
  }

  const currentMainArticle = mainFeaturedArticles[mainIndex];

  return (
    <section className="bg-[#E4E6E6] dark:bg-[#151412] py-12 md:py-16 transition-colors" id="news">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-6">
          <Reveal variant="rise">
            <h2 className="text-3xl md:text-[34px] font-bold tracking-tight text-primary font-display">
              Currents
            </h2>
          </Reveal>
        </div>

        {/* Top Section: 7/12 and 5/12 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-stretch">
          
          {/* Left Column: Large Featured Article (spans 7 columns) */}
          <Reveal variant="rise" delay={0.1} className="lg:col-span-7 h-full">
            <Link
              to={currentMainArticle.link || "/campus-life"}
              className="group flex flex-col h-full bg-white dark:bg-[#1C1A17] rounded-[4px] shadow-sm p-5 md:p-7 relative overflow-hidden"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative w-full aspect-[2/1] bg-black overflow-hidden rounded-[4px]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentMainArticle.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={currentMainArticle.image}
                      alt={currentMainArticle.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 md:p-6">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-white/90 mb-1.5 block drop-shadow-md">
                        {currentMainArticle.category}
                      </span>
                      <h3 className="text-[18px] md:text-[22px] font-bold leading-tight text-white drop-shadow-md transition-colors group-hover:underline">
                        {currentMainArticle.title}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Body */}
              <div className="pt-6 flex flex-col justify-between flex-1 z-10 relative">
                <p className="text-[15px] text-gray-800 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {currentMainArticle.description}
                </p>
                <div className="mt-6 flex justify-end">
                  <span className="text-[12px] text-gray-600 dark:text-gray-400">
                    {currentMainArticle.date}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Right Column: Single Panel with Stacked Scrolling Articles (spans 5 columns) */}
          <Reveal variant="rise" delay={0.2} className="lg:col-span-5 h-full">
            <div className="bg-white dark:bg-[#1C1A17] rounded-[4px] shadow-sm p-6 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary font-display mb-4">
                Upcoming Events
              </h3>
              
              <div className="flex-1 relative overflow-hidden flex flex-col gap-6">
                <AnimatePresence initial={false} mode="popLayout">
                  {visibleArticles.map((article) => (
                    <motion.div
                      layout
                      key={article.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full shrink-0"
                    >
                      <Link
                        to={article.link || "/campus-life"}
                        className="group flex flex-col"
                      >
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-3 block">
                          {article.category}
                        </span>

                        <div className="flex items-start gap-4">
                          {/* Thumbnail */}
                          <div className="relative w-[120px] xl:w-[140px] aspect-[3/2] rounded-[4px] overflow-hidden shrink-0 bg-muted">
                            <img
                              src={article.image}
                              alt={article.title}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                            {/* Date Badge Overlay */}
                            {article.date && !isNaN(new Date(article.date).getTime()) && (
                              <div className="absolute top-2 left-2 bg-white dark:bg-background shadow-md rounded-[3px] overflow-hidden flex flex-col items-center justify-center min-w-[38px] border border-border/50">
                                <span className="bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-widest w-full text-center py-0.5 leading-tight">
                                  {new Date(article.date).toLocaleString('en-US', { month: 'short' }).toUpperCase()}
                                </span>
                                <span className="text-foreground text-[15px] leading-none font-black py-1.5 px-1">
                                  {new Date(article.date).getDate()}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Title */}
                          <div className="flex flex-col justify-start flex-1 min-w-0 pt-1">
                            <h4 className="text-[15px] font-bold text-primary leading-snug group-hover:underline">
                              {article.title}
                            </h4>
                            {article.venue && (
                              <span className="text-[#059669] dark:text-[#34d399] text-[12px] font-semibold mt-1.5 flex items-center gap-1 tracking-tight">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                {article.venue}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Row: 3 Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-5">
          {bottomRowArticles.map((article, idx) => (
            <Reveal key={article.id} variant="rise" delay={0.3 + idx * 0.05} className="w-full h-full">
              <Link
                to={article.link || "/campus-life"}
                className="group flex flex-col h-full bg-white dark:bg-[#1C1A17] rounded-[4px] shadow-sm p-6"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-3 block">
                  {article.category}
                </span>

                <div className="w-full aspect-[16/9] rounded-[2px] overflow-hidden mb-4 bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-[15px] font-bold text-primary leading-snug group-hover:underline mt-auto">
                  {article.title}
                </h4>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
