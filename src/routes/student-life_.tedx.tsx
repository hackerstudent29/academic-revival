import { useState, useMemo, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
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
  ArrowRight,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { tedxVideos, type TedxVideo } from "@/data/tedxVideos";

const title = "Welcome to the TEDx MSAJCE Database | Our TEDx Chapter | MSAJCE";
const description =
  "Official TEDxMSAJCE talks database at Mohamed Sathak A.J. College of Engineering. Browse 54 independently organized TEDx talks by innovators, researchers, and global thought leaders.";

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
  component: TedxDatabasePage,
});

const PAGE_SIZE_OPTIONS = [12, 24, 54] as const;

function TedxDatabasePage() {
  const navigate = useNavigate();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [pageSize, setPageSize] = useState<number>(12);
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
      {/* 1. HERO BANNER WITH DOCKED FLUSH TITLE & STATS STRIP                       */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[360px] sm:min-h-[420px] md:min-h-[460px] flex flex-col justify-end">
        {/* Background Campus Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/accreditations_campus.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/library_reading_hall_real.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        </div>

        {/* Title Container: Docked Flush at the Hero End */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-12 sm:pt-16 md:pt-20 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-2xl md:max-w-3xl border-t border-r border-border dark:border-white/15"
          >
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Welcome to the TEDx MSAJCE Database
            </h1>
          </motion.div>
        </div>

        {/* Quick Facts & Figures Docked Stats Strip */}
        <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/85 to-transparent pt-8 sm:pt-10 md:pt-12 pb-5 sm:pb-6 md:pb-8">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:divide-x md:divide-white/15">
              <div className="first:pl-0 md:pl-4 space-y-0.5">
                <div className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-none">
                  54
                </div>
                <div className="text-xs sm:text-sm text-white/85 font-libre leading-snug pt-0.5">
                  Archived Talks &amp; Sessions
                </div>
              </div>
              <div className="first:pl-0 md:pl-4 space-y-0.5">
                <div className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-none">
                  TEDx
                </div>
                <div className="text-xs sm:text-sm text-white/85 font-libre leading-snug pt-0.5">
                  Officially Licensed Chapter
                </div>
              </div>
              <div className="first:pl-0 md:pl-4 space-y-0.5">
                <div className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-none">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-white/85 font-libre leading-snug pt-0.5">
                  Ideas Worth Spreading
                </div>
              </div>
              <div className="first:pl-0 md:pl-4 space-y-0.5">
                <div className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-none">
                  Global
                </div>
                <div className="text-xs sm:text-sm text-white/85 font-libre leading-snug pt-0.5">
                  Thought Leaders &amp; Innovators
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 1: Canvas A (White / #121214) — Chapter Introduction           */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 md:py-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="w-full space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Our TEDx Chapter
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground font-libre font-medium leading-relaxed w-full text-justify [text-align:justify] [text-justify:inter-word]">
              TEDxMSAJCE is an independently organized event under official license from TED. Hosted at Mohamed Sathak A.J.&nbsp;College of Engineering, it provides a prestigious platform where pioneering researchers, technological visionaries, creative artists, and social changemakers converge to spark deep discussion and inspire transformative ideas.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 1: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-10 md:h-14 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION 2: Canvas B (#F3F3F2 / #18181B) — TALKS DATABASE               */}
      {/* ========================================================================= */}
      <section
        id="tedx-database-archive"
        className="py-10 sm:py-14 md:py-16 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                TEDx Talks &amp; Sessions Archive
              </h2>
              <p className="mt-1 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                Watch all 54 authentic TEDx talks published by the TEDxMSAJCE chapter. Click any talk to play inline or open the theater mode.
              </p>
            </div>

            {/* View Mode & Page Size Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
              {/* Grid / Table Toggle */}
              <div className="inline-flex rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-white/80 dark:bg-[#121214]/80 p-0.5">
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
              </div>

              {/* Per Page Selector */}
              <div className="inline-flex items-center gap-1.5 bg-white/80 dark:bg-[#121214]/80 border border-stone-300 dark:border-neutral-700 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs px-2.5 py-1 text-xs font-oswald font-bold text-foreground">
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
              placeholder="Search by talk title, speaker name, or talk number (e.g., Empathy, AI, S.No)..."
              className="w-full pl-10 pr-10 py-3 bg-white dark:bg-[#121214] border border-stone-300 dark:border-neutral-700 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-sm font-libre text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-primary transition-colors"
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

          {/* Result Count Indicator */}
          <div className="flex items-center justify-between text-xs font-libre text-muted-foreground pt-1">
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

          {/* 3A. GRID VIEW: Minimal & Viewable Video Cards */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {paginatedVideos.map((video) => {
                const isPlaying = playingVideoId === video.id;

                return (
                  <div
                    key={video.id}
                    className="border border-stone-300/80 dark:border-neutral-700/80 bg-white dark:bg-[#121214] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden transition-colors flex flex-col justify-between"
                  >
                    {/* Media Area (16:9 Aspect Ratio) */}
                    <div className="aspect-video relative bg-black/10 dark:bg-black/40 overflow-hidden">
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
                        <div className="relative w-full h-full group">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-center select-none"
                            onError={(e) => {
                              // Fallback thumbnail if HQdefault fails
                              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
                            }}
                          />

                          {/* S.No Badge */}
                          <span className="absolute top-2 left-2 bg-black/80 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs">
                            #{String(video.sno).padStart(2, "0")}
                          </span>

                          {/* Center Play Button Overlay */}
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

                    {/* Metadata & Editorial Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        {/* Speaker Name */}
                        <div className="flex items-center gap-1.5 text-xs font-bold font-oswald uppercase text-primary tracking-wide">
                          <Mic className="w-3.5 h-3.5 shrink-0" />
                          <span className="line-clamp-1">{video.speaker}</span>
                        </div>

                        {/* Talk Title */}
                        <h3 className="mt-1 text-sm sm:text-base font-black font-oswald uppercase text-foreground leading-snug line-clamp-2">
                          "{video.title}"
                        </h3>
                      </div>

                      {/* Action Footer */}
                      <div className="pt-2 border-t border-stone-200 dark:border-neutral-800 flex items-center justify-between gap-2">
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
                          <span>{isPlaying ? "Close Player" : "Watch Talk"}</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setModalVideo(video)}
                            className="text-xs font-oswald uppercase tracking-wider text-muted-foreground hover:text-foreground cursor-pointer"
                            title="Open Theater View"
                          >
                            Theater
                          </button>

                          <a
                            href={video.watchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-oswald uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                            title="Open on YouTube"
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

          {/* 3B. TABLE VIEW: Clean, Minimal Editorial List */}
          {viewMode === "table" && (
            <div className="overflow-x-auto border border-stone-300/80 dark:border-neutral-700/80 bg-white dark:bg-[#121214] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-stone-300 dark:border-neutral-700 bg-stone-100/70 dark:bg-[#18181B]/70 font-oswald font-bold uppercase tracking-wider text-foreground">
                    <th className="py-3 px-4 w-14 text-center">#</th>
                    <th className="py-3 px-4">Talk Title</th>
                    <th className="py-3 px-4">Speaker</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-neutral-800 font-libre">
                  {paginatedVideos.map((video) => (
                    <tr
                      key={video.id}
                      className="hover:bg-stone-50 dark:hover:bg-[#18181B]/50 transition-colors"
                    >
                      <td className="py-3 px-4 text-center font-mono font-bold text-muted-foreground text-xs">
                        {String(video.sno).padStart(2, "0")}
                      </td>
                      <td className="py-3 px-4 font-medium text-foreground">
                        <div className="font-oswald uppercase font-black text-sm tracking-tight text-foreground">
                          "{video.title}"
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-oswald uppercase font-bold text-xs text-primary tracking-wide">
                          {video.speaker}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
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
                            className="inline-flex items-center gap-0.5 px-2 py-1 text-xs font-oswald uppercase font-bold text-muted-foreground hover:text-foreground"
                            title="Open on YouTube"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Empty State */}
          {totalItems === 0 && (
            <div className="py-12 text-center space-y-3 bg-white dark:bg-[#121214] border border-stone-300 dark:border-neutral-700 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6">
              <p className="text-base font-libre text-muted-foreground">
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

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 2: Canvas B (#F3F3F2 / #18181B) -> Canvas A (White / #121214) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-10 md:h-14 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. SECTION 3: Canvas A (White / #121214) — GUIDELINES & NAVIGATION         */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-16 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              TEDx Community Guidelines &amp; Licensing
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
              TEDxMSAJCE is an independently organized event under official license from TED Conferences LLC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                Non-Commercial &amp; Independent
              </h3>
              <p className="text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                TEDx events are completely non-partisan and non-commercial. Speakers share original ideas worth spreading without promotional, political, or commercial agendas.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                Official YouTube Distribution
              </h3>
              <p className="text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                All recorded talks are processed and published to the official TEDx global archives and YouTube channel, ensuring worldwide visibility for every presentation.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold font-oswald uppercase text-foreground">
                Institutional Archive
              </h3>
              <p className="text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                Reference details and event history are maintained on the official Mohamed Sathak A.J. College of Engineering archive portal.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.msajce-edu.in/TEDxMSAJCE.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/40 text-primary hover:bg-primary hover:text-white transition-colors text-xs font-oswald font-bold uppercase tracking-wider"
              >
                <span>Official Archive Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => navigate({ to: "/student-life/clubs-and-societies" })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-100 dark:bg-neutral-800 text-foreground hover:border-primary transition-colors text-xs font-oswald font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>Clubs &amp; Societies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => navigate({ to: "/student-life/student-hub" })}
              className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-6 py-3 font-bold font-oswald text-xs uppercase tracking-wider shrink-0 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Return to Student Hub <ArrowRight className="w-4 h-4" />
              </span>
              <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MODAL THEATER PLAYER (Full-Width Focused Video Modal)                  */}
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
                  <h4 className="text-sm sm:text-base font-black font-oswald uppercase text-foreground truncate">
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
              <div className="p-4 bg-white dark:bg-[#121214] border-t border-stone-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
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
