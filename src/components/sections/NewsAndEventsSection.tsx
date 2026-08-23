import { Link } from "@tanstack/react-router";
import { Reveal } from "../motion";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { allEvents } from "@/lib/eventsData";

const ITEMS = allEvents.filter(e => e.id.startsWith('featured-'));
const sidebarArticles = allEvents.filter(e => e.id.startsWith('side-'));
const bottomRowArticles = allEvents.filter(e => e.id.startsWith('bottom-'));

export function NewsAndEventsSection() {
  const [activeItem, setActiveItem] = useState(0);
  const [mainIndex, setMainIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isInView) return;
      setActiveItem((prev) => (prev + 1) % sidebarArticles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isInView]);

  useEffect(() => {
    const mainTimer = setInterval(() => {
      if (!isInView) return;
      setMainIndex((prev) => (prev + 1) % ITEMS.length);
    }, 6000);
    return () => clearInterval(mainTimer);
  }, [isInView]);

  const visibleArticles = [];
  for (let i = 0; i < 3; i++) {
    visibleArticles.push(sidebarArticles[(activeItem + i) % sidebarArticles.length]);
  }

  const currentMainArticle = ITEMS[mainIndex];

  return (
    <section ref={sectionRef} className="bg-[#E4E6E6] dark:bg-[#151412] py-12 md:py-16" id="news">
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
              to={`/events/${currentMainArticle.id}`}
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
                        to={`/events/${article.id}`}
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
                to={`/events/${article.id}`}
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
