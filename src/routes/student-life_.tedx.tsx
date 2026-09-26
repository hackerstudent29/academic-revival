import { useState, useMemo, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Play,
  X,
  Grid,
  List,
  ArrowUpRight,
  Mic,
  Video,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { tedxVideos, type TedxVideo } from "@/data/tedxVideos";

const title = "Our TEDx Chapter | TEDxMSAJCE | Campus Life | MSAJCE";
const description =
  "Official TEDxMSAJCE talks archive at Mohamed Sathak A.J. College of Engineering. Discover 54 independently organized TEDx talks featuring pioneering researchers, industry visionaries, and social innovators.";

export const Route = createFileRoute("/student-life_/tedx")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TedxPage,
});

const PAGE_SIZE_OPTIONS = [10, 25, 54] as const;

const chapterHighlights = [
  {
    title: "Official TED University Charter",
    desc: "Operated under formal independent license granted by TED Conferences LLC, adhering to strict global production, curation, and licensing protocols.",
  },
  {
    title: "54 Documented Keynote Addresses",
    desc: "A comprehensive digital archive of ideas across deep tech, medical engineering, architectural design, ethical computing, and civic entrepreneurship.",
  },
  {
    title: "Global Open-Access Broadcasting",
    desc: "Every recorded presentation is published directly to TED's official international YouTube channel and global media catalog, reaching millions worldwide.",
  },
  {
    title: "Student-Led Curatorial Committee",
    desc: "Completely conceived, curated, organized, and executed by MSAJCE undergraduate student leaders and faculty mentors.",
  },
];

const thematicPillars = [
  {
    pillar: "01",
    name: "Frontier Technologies & Intelligent Systems",
    desc: "Exploring machine intelligence, autonomous robotics, quantum computing fundamentals, ethical algorithm design, and digital privacy paradigms shaping our technological landscape.",
  },
  {
    pillar: "02",
    name: "Sustainable Engineering & Resilient Habitat",
    desc: "Focusing on renewable energy transitions, circular manufacturing economies, ecological infrastructure development, clean water technologies, and urban resilience.",
  },
  {
    pillar: "03",
    name: "Social Innovation & Human Ingenuity",
    desc: "Highlighting transformative grassroots leadership, community-centric healthcare solutions, accessible education models, and novel social enterprise frameworks.",
  },
  {
    pillar: "04",
    name: "Design Synthesis & Creative Expression",
    desc: "Investigating the intersection of creative arts, functional architectural design, human-centered UX design, narrative media, and interdisciplinary craftsmanship.",
  },
];

const curationGuidelines = [
  {
    rule: "Non-Commercial Neutrality",
    desc: "Presenters are strictly forbidden from pitching products, engaging in corporate promotion, fundraising, or political campaigning on the TEDx stage.",
  },
  {
    rule: "Factual & Scientific Accuracy",
    desc: "All scientific assertions, engineering models, and data citations undergo stringent factual verification and curatorial review prior to live delivery.",
  },
  {
    rule: "Original Ideas Worth Spreading",
    desc: "Talks must present fresh perspectives, original research, or novel frameworks rather than recycled motivational or general textbook lectures.",
  },
  {
    rule: "Universal Open Accessibility",
    desc: "MSAJCE ensures zero commercial barriers to viewing, distributing high-resolution recordings with synchronized accessibility subtitles globally.",
  },
];

/* Organic Alternating Wave Dividers */
function WaveDividerAB() {
  return (
    <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-5 sm:h-7 md:h-9 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
          className="fill-[#F3F3F2] dark:fill-[#18181B]"
        />
      </svg>
    </div>
  );
}

function WaveDividerBA() {
  return (
    <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-5 sm:h-7 md:h-9 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
          className="fill-white dark:fill-[#121214]"
        />
      </svg>
    </div>
  );
}

function TedxPage() {
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Active inline video & Modal theater state
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<TedxVideo | null>(null);

  // Filtered videos based on query
  const filteredVideos = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return tedxVideos;
    return tedxVideos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.speaker.toLowerCase().includes(q) ||
        v.rawTitle.toLowerCase().includes(q) ||
        String(v.sno).includes(q)
    );
  }, [searchQuery]);

  // Reset page when filter or page size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, pageSize]);

  // Pagination calculation
  const totalItems = filteredVideos.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedVideos = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize;
    return filteredVideos.slice(start, start + pageSize);
  }, [filteredVideos, safeCurrentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const el = document.getElementById("tedx-database-archive");
    if (el) {
      const headerOffset = typeof window !== "undefined" && window.innerWidth < 768 ? 115 : 125;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      if (window.pageYOffset > elementTop + 100) {
        window.scrollTo({
          top: Math.max(0, elementTop),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* HERO BANNER: Vision & Mission Style Minimal Flush Docked Title            */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus Architecture"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none whitespace-nowrap">
              OUR TEDX CHAPTER
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: Canvas A (White / #121214) — Chapter Overview & Pillars        */}
      {/* ========================================================================= */}
      <section className="py-5 sm:py-7 md:py-8 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
            TEDxMSAJCE CHAPTER OVERVIEW
          </h2>
          <div className="w-full divide-y divide-border/40 border-y border-border/40 font-libre">
            {chapterHighlights.map((item, idx) => (
              <div
                key={idx}
                className="py-4 sm:py-5 flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-8 hover:bg-foreground/[0.015] transition-colors"
              >
                <div className="md:w-1/3 shrink-0 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-oswald font-black uppercase text-sm sm:text-base text-foreground tracking-wide">
                    {item.title}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider 1: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      <WaveDividerAB />

      {/* ========================================================================= */}
      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — TALKS & SESSIONS ARCHIVE       */}
      {/* ========================================================================= */}
      <section
        id="tedx-database-archive"
        className="py-5 sm:py-7 md:py-8 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors"
      >
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-5">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                OFFICIAL TALKS &amp; SESSIONS DIRECTORY
              </h2>
            </div>

            {/* View Mode & Page Size Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
              {/* Table / Grid Toggle */}
              <div className="inline-flex rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-white/90 dark:bg-[#121214]/90 p-0.5">
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer ${
                    viewMode === "table"
                      ? "bg-primary text-white"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  aria-label="Table View"
                >
                  <List className="w-3.5 h-3.5" />
                  <span>Table</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-primary text-white"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  aria-label="Grid View"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
              </div>

              {/* Per Page Selector */}
              <div className="inline-flex items-center gap-1.5 bg-white/90 dark:bg-[#121214]/90 border border-stone-300 dark:border-neutral-700 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs px-2.5 py-1 text-xs font-oswald font-bold text-foreground">
                <span className="text-muted-foreground uppercase">Show:</span>
                {PAGE_SIZE_OPTIONS.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPageSize(size)}
                    className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
                      pageSize === size ? "bg-primary text-white" : "hover:text-primary"
                    }`}
                  >
                    {size === 54 ? "All" : size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by talk title, speaker name, or talk number (e.g., Empathy, Robotics, AI, #01)..."
              className="w-full pl-10 pr-10 py-3 bg-white dark:bg-[#121214] border border-stone-300 dark:border-neutral-700 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-xs sm:text-sm font-libre text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-primary transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs font-libre text-muted-foreground pt-0.5">
            <span>
              Showing{" "}
              <strong className="text-foreground font-semibold">
                {totalItems === 0
                  ? 0
                  : `${(safeCurrentPage - 1) * pageSize + 1}–${Math.min(
                      safeCurrentPage * pageSize,
                      totalItems
                    )}`}
              </strong>{" "}
              of <strong className="text-foreground font-semibold">{totalItems}</strong> Talks
              {searchQuery && ` (filtered from ${tedxVideos.length})`}
            </span>

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-1 text-primary hover:underline font-oswald uppercase tracking-wider font-bold cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Filter
              </button>
            )}
          </div>

          {/* 1. TABLE VIEW: Standard DataGrid Container */}
          {viewMode === "table" && (
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3 px-4 w-16 text-center font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        #
                      </th>
                      <th className="py-3 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Talk Title
                      </th>
                      <th className="py-3 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Keynote Speaker
                      </th>
                      <th className="py-3 px-4 text-right font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Watch / YouTube
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {paginatedVideos.map((video) => (
                      <tr
                        key={video.id}
                        className="hover:bg-foreground/[0.02] transition-colors"
                      >
                        <td className="py-3 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                          #{video.sno}
                        </td>
                        <td className="py-3 px-4 font-medium text-foreground">
                          <span className="font-libre font-bold text-xs sm:text-sm text-foreground block">
                            "{video.title}"
                          </span>
                          <span className="text-[11px] text-muted-foreground font-libre line-clamp-1">
                            {video.rawTitle}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="font-libre font-semibold text-xs sm:text-sm text-primary tracking-wide">
                            {video.speaker}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div className="inline-flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setModalVideo(video)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary text-white hover:bg-[#861E30] transition-colors text-xs font-oswald font-bold uppercase tracking-wider cursor-pointer"
                            >
                              <Play className="w-3 h-3 fill-white" />
                              <span>Play</span>
                            </button>
                            <a
                              href={video.watchUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-oswald uppercase font-bold text-muted-foreground hover:text-primary transition-colors border border-stone-300 dark:border-neutral-700 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs"
                              title="Open on YouTube"
                            >
                              <span>YouTube</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          )}

          {/* 2. GRID VIEW: Cardless Open Media Directory */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedVideos.map((video) => {
                const isPlaying = playingVideoId === video.id;

                return (
                  <div
                    key={video.id}
                    className="flex flex-col justify-between space-y-3 pb-2 border-b border-border/40"
                  >
                    {/* Media Area (16:9 Aspect Ratio) */}
                    <div className="aspect-video relative bg-black/10 dark:bg-black/40 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden">
                      {isPlaying ? (
                        <div className="relative w-full h-full">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                            title={video.title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                          <button
                            type="button"
                            onClick={() => setPlayingVideoId(null)}
                            className="absolute top-2 right-2 bg-black/80 hover:bg-black text-white p-1 rounded-xs cursor-pointer z-20"
                            title="Close Player"
                            aria-label="Close inline video"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-center select-none"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
                            }}
                          />
                          {/* S.No Badge */}
                          <span className="absolute top-2 left-2 bg-black/80 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs">
                            #{String(video.sno).padStart(2, "0")}
                          </span>
                          {/* Center Play Button */}
                          <button
                            type="button"
                            onClick={() => setPlayingVideoId(video.id)}
                            className="absolute inset-0 m-auto w-12 h-12 bg-primary/95 hover:bg-primary text-white rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex items-center justify-center shadow-lg transition-transform cursor-pointer"
                            title="Play Talk"
                            aria-label={`Play talk by ${video.speaker}`}
                          >
                            <Play className="w-5 h-5 fill-white translate-x-0.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Editorial Content Directly on Canvas */}
                    <div className="flex-1 flex flex-col justify-between space-y-2">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold font-oswald uppercase text-primary tracking-wide">
                          <Mic className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{video.speaker}</span>
                        </div>
                        <h3 className="mt-1 text-sm sm:text-base font-black font-oswald uppercase text-foreground leading-snug line-clamp-2">
                          "{video.title}"
                        </h3>
                      </div>

                      <div className="pt-2 flex items-center justify-between gap-2 border-t border-border/30">
                        <button
                          type="button"
                          onClick={() => {
                            if (isPlaying) {
                              setPlayingVideoId(null);
                            } else {
                              setPlayingVideoId(video.id);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors text-xs font-oswald font-bold uppercase tracking-wider cursor-pointer"
                        >
                          <Video className="w-3.5 h-3.5" />
                          <span>{isPlaying ? "Close Player" : "Watch"}</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setModalVideo(video)}
                            className="text-xs font-oswald uppercase tracking-wider text-muted-foreground hover:text-foreground cursor-pointer font-bold px-2 py-1"
                          >
                            Theater
                          </button>
                          <a
                            href={video.watchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-oswald uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors font-bold px-2 py-1"
                          >
                            <span>YouTube</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Empty State */}
          {totalItems === 0 && (
            <div className="py-12 text-center space-y-3 border border-dashed border-stone-300 dark:border-neutral-700 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 bg-white/50 dark:bg-[#121214]/50">
              <p className="text-sm sm:text-base font-libre text-muted-foreground">
                No TEDx talks found matching "<strong>{searchQuery}</strong>".
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-oswald font-bold uppercase tracking-wider rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs hover:bg-[#861E30] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Clear Search Filter
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-libre text-muted-foreground order-2 sm:order-1">
                Page <strong className="text-foreground">{safeCurrentPage}</strong> of{" "}
                <strong className="text-foreground">{totalPages}</strong> ({totalItems} Talks)
              </span>

              <div className="inline-flex items-center gap-1 order-1 sm:order-2">
                <button
                  type="button"
                  onClick={() => handlePageChange(safeCurrentPage - 1)}
                  disabled={safeCurrentPage <= 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider border border-stone-300 dark:border-neutral-700 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-white dark:bg-[#121214] text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePageChange(p)}
                    className={`w-8 h-8 text-xs font-oswald font-bold uppercase rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer ${
                      p === safeCurrentPage
                        ? "bg-primary text-white"
                        : "bg-white dark:bg-[#121214] border border-stone-300 dark:border-neutral-700 text-foreground hover:bg-stone-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {p}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => handlePageChange(safeCurrentPage + 1)}
                  disabled={safeCurrentPage >= totalPages}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider border border-stone-300 dark:border-neutral-700 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-white dark:bg-[#121214] text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Wave Divider 2: Canvas B (#F3F3F2 / #18181B) -> Canvas A (White / #121214) */}
      <WaveDividerBA />

      {/* ========================================================================= */}
      {/* SECTION 3: Canvas A (White / #121214) — Thematic Pillars                  */}
      {/* ========================================================================= */}
      <section className="py-5 sm:py-7 md:py-8 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
            THEMATIC PILLARS &amp; CURATORIAL FOCUS
          </h2>

          <div className="w-full divide-y divide-border/40 border-y border-border/40 font-libre">
            {thematicPillars.map((item, idx) => (
              <div
                key={idx}
                className="py-4 sm:py-5 flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-8 hover:bg-foreground/[0.015] transition-colors"
              >
                <div className="md:w-1/3 shrink-0 flex items-start gap-3">
                  <span className="font-oswald text-xs font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs border border-primary/20">
                    {item.pillar}
                  </span>
                  <span className="font-oswald font-black uppercase text-sm sm:text-base text-foreground tracking-wide">
                    {item.name}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider 3: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      <WaveDividerAB />

      {/* ========================================================================= */}
      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — Code of Conduct & Ethics        */}
      {/* ========================================================================= */}
      <section className="py-5 sm:py-7 md:py-8 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
            CURATION PROTOCOLS &amp; TEDX CODE OF ETHICS
          </h2>

          <div className="w-full divide-y divide-border/40 border-y border-border/40 font-libre">
            {curationGuidelines.map((item, idx) => (
              <div
                key={idx}
                className="py-4 sm:py-5 flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-8 hover:bg-foreground/[0.015] transition-colors"
              >
                <div className="md:w-1/3 shrink-0 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-oswald font-black uppercase text-sm sm:text-base text-foreground tracking-wide">
                    {item.rule}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL THEATER PLAYER (Responsive Modal Video Player)                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-white dark:bg-[#121214] border border-stone-300 dark:border-neutral-700 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-4 py-3 border-b border-stone-200 dark:border-neutral-800 flex items-center justify-between gap-4 bg-stone-50 dark:bg-[#18181B]">
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold text-primary uppercase">
                    Talk #{String(modalVideo.sno).padStart(2, "0")} • TEDxMSAJCE
                  </span>
                  <h4 className="text-xs sm:text-sm md:text-base font-black font-oswald uppercase text-foreground truncate">
                    "{modalVideo.title}"
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setModalVideo(null)}
                  className="p-1.5 text-muted-foreground hover:text-foreground cursor-pointer rounded-xs hover:bg-stone-200 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Close Theater Player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Video Player */}
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${modalVideo.id}?autoplay=1&rel=0`}
                  title={modalVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 bg-white dark:bg-[#121214] border-t border-stone-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-oswald uppercase font-bold text-primary text-xs">
                    Speaker: {modalVideo.speaker}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={modalVideo.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs font-oswald font-bold uppercase tracking-wider text-xs hover:bg-[#861E30] transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setModalVideo(null)}
                    className="px-3 py-1.5 border border-stone-300 dark:border-neutral-700 text-foreground rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs font-oswald font-bold uppercase tracking-wider text-xs hover:bg-stone-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
