import { Link } from "@tanstack/react-router";
import { Reveal } from "./motion";

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
  title: "Summer 2026 Research Spotlight: MSAJCE Students Study Methane and Earthquake Activity at La Brea Tar Pits",
  description:
    "During the Seaver summer 2026 research program, MSAJCE students partnered with faculty mentors to study methane seepage and seismic activity at the world-famous La Brea Tar Pits.",
  date: "August 18, 2026",
  image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop", // placeholder resembling students working
  link: "/campus-life",
};

const sidebarArticles: NewsItem[] = [
  {
    id: "side-1",
    category: "CAMPUS COMMUNITY",
    title: "Buster Blazed a Trail as MSAJCE's First Campus Dog",
    date: "August 11, 2026",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=600&auto=format&fit=crop", // placeholder for dog
    link: "/campus-life",
  },
  {
    id: "side-2",
    category: "CAMPUS NEWS",
    title: "Studio Arts Professor Dmitry Kemell Contributes to \"Hospital of Emotions\"...",
    date: "August 7, 2026",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop", // placeholder for art piece
    link: "/campus-life",
  },
  {
    id: "side-3",
    category: "CAMPUS NEWS",
    title: "BCLA Summer Internship Spotlight: Miles Gibson '27",
    date: "August 5, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", // placeholder for students talking
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
          <Reveal variant="rise" delay={0.1} className="lg:col-span-7">
            <Link
              to={mainFeaturedArticle.link || "/campus-life"}
              className="group flex flex-col h-full bg-white dark:bg-[#1C1A17] rounded-[4px] shadow-sm overflow-hidden p-5 md:p-7"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative w-full aspect-[2/1] bg-muted overflow-hidden rounded-[4px]">
                <img
                  src={mainFeaturedArticle.image}
                  alt={mainFeaturedArticle.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5 md:p-7">
                  <span className="text-[12px] font-bold uppercase tracking-widest text-white mb-2 block drop-shadow-md">
                    {mainFeaturedArticle.category}
                  </span>
                  <h3 className="text-[22px] md:text-[28px] font-bold leading-tight text-white drop-shadow-md transition-colors group-hover:underline">
                    {mainFeaturedArticle.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Body */}
              <div className="pt-6 flex flex-col justify-between flex-1">
                <p className="text-[15px] text-gray-800 dark:text-gray-300 leading-relaxed">
                  {mainFeaturedArticle.description}
                </p>
                <div className="mt-6 flex justify-end">
                  <span className="text-[12px] text-gray-600 dark:text-gray-400">
                    {mainFeaturedArticle.date}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Right Column: Single Panel with 3 Stacked Articles (spans 5 columns) */}
          <Reveal variant="rise" delay={0.2} className="lg:col-span-5">
            <div className="bg-white dark:bg-[#1C1A17] rounded-[4px] shadow-sm p-6 h-full flex flex-col justify-between gap-6">
              {sidebarArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.link || "/campus-life"}
                  className="group flex flex-col"
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-3 block">
                    {article.category}
                  </span>

                  <div className="flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="w-[120px] xl:w-[140px] aspect-[3/2] rounded-[4px] overflow-hidden shrink-0 bg-muted">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title and Date */}
                    <div className="flex flex-col justify-start flex-1 min-w-0">
                      <h4 className="text-[15px] font-bold text-primary leading-snug group-hover:underline">
                        {article.title}
                      </h4>
                      {article.date && (
                        <span className="text-[12px] text-gray-600 dark:text-gray-400 mt-2 block">
                          {article.date}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
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
