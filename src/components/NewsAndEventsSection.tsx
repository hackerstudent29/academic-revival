import { Link } from "@tanstack/react-router";
import { Reveal } from "./motion";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  id: string;
  category: string;
  title: string;
  description?: string;
  date?: string;
  image: string;
  link?: string;
}

const mainFeaturedArticle: NewsItem = {
  id: "featured-1",
  category: "CAMPUS NEWS",
  title: "Summer 2026 Research Spotlight: MSAJCE Students Engineer Autonomous Drones & AI Vision Systems",
  description:
    "During the MSAJCE Innovation & Incubation summer research residency, engineering students collaborated with faculty mentors and industry leads to develop next-generation smart mobility solutions and edge-AI compute clusters.",
  date: "August 18, 2026",
  image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
  link: "/campus-life",
};

const sidebarArticles: NewsItem[] = [
  {
    id: "side-1",
    category: "CAMPUS COMMUNITY",
    title: "MSAJCE Robotics Club Clinches National Championship at TechFest 2026",
    date: "August 11, 2026",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "side-2",
    category: "CAMPUS NEWS",
    title: "Department of AI & Data Science Inaugurates High-Performance Supercomputing Facility",
    date: "August 7, 2026",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    link: "/campus-life",
  },
  {
    id: "side-3",
    category: "CAMPUS NEWS",
    title: "Placement Cell Spotlight: 120+ Students Secure Tier-1 Product Firm Internships",
    date: "August 5, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
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
  return (
    <section className="bg-[#F4EED9] dark:bg-[#1c1613] py-16 md:py-24 border-b border-foreground/12 transition-colors" id="news">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <Reveal variant="rise">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary font-display">
              Currents
            </h2>
          </Reveal>

          <Reveal variant="rise" delay={0.1}>
            <Link
              to="/campus-life"
              className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
            >
              <span>View All</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
          {/* Left Column: Large Featured Article */}
          <Reveal variant="rise" delay={0.1} className="lg:col-span-7 flex flex-col">
            <Link
              to={mainFeaturedArticle.link || "/campus-life"}
              className="group flex flex-col h-full bg-white dark:bg-card border border-black/8 dark:border-white/10 rounded-2xl overflow-hidden shadow-xs hover:border-primary/40 transition-colors"
            >
              {/* Image Container with Absolute Gradient Overlay */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={mainFeaturedArticle.image}
                  alt={mainFeaturedArticle.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/90 mb-2">
                    {mainFeaturedArticle.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-white group-hover:text-white/95 transition-colors">
                    {mainFeaturedArticle.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Body */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-white dark:bg-card">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {mainFeaturedArticle.description}
                </p>
                <div className="mt-6 flex justify-end">
                  <span className="text-xs font-semibold text-muted-foreground tracking-wide">
                    {mainFeaturedArticle.date}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Right Column: 3 Stacked Articles */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 md:gap-5">
            {sidebarArticles.map((article, idx) => (
              <Reveal key={article.id} variant="rise" delay={0.15 + idx * 0.05} className="flex-1">
                <Link
                  to={article.link || "/campus-life"}
                  className="group flex flex-col justify-between h-full bg-white dark:bg-card border border-black/8 dark:border-white/10 rounded-2xl p-5 shadow-xs hover:border-primary/40 transition-colors"
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground mb-3 block">
                    {article.category}
                  </span>

                  <div className="flex items-center gap-4">
                    {/* Thumbnail */}
                    <div className="w-24 sm:w-28 h-20 sm:h-22 rounded-xl overflow-hidden shrink-0 bg-muted">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title and Date */}
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-primary leading-snug line-clamp-2 group-hover:underline">
                        {article.title}
                      </h4>
                      {article.date && (
                        <span className="text-xs text-muted-foreground mt-2 block font-medium">
                          {article.date}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom Row: 3 Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
          {bottomRowArticles.map((article, idx) => (
            <Reveal key={article.id} variant="rise" delay={0.3 + idx * 0.05}>
              <Link
                to={article.link || "/campus-life"}
                className="group flex flex-col h-full bg-white dark:bg-card border border-black/8 dark:border-white/10 rounded-2xl p-5 shadow-xs hover:border-primary/40 transition-colors"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground mb-3 block">
                  {article.category}
                </span>

                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-3.5 bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-sm sm:text-base font-bold text-primary leading-snug line-clamp-2 group-hover:underline mt-auto">
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
