import { useState, useMemo, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Clock,
  Search,
  RotateCcw,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnDef,
  type PaginationState,
  type SortingState,
} from "@tanstack/react-table";
import {
  DataGrid,
  DataGridContainer,
  DataGridTable,
  DataGridPagination,
  DataGridColumnHeader,
} from "@/components/ui/data-grid-table";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { useHeader } from "@/context/HeaderContext";
import {
  libraryOverview,
  collectionStats,
  departmentJournals,
  openAccessJournals,
  eLibraryGateways,
  eBooksDirectory,
  freeCourseMaterials,
  libraryServices,
  borrowingEligibility,
  overdueFineSlabs,
  libraryRules,
  institutionalMemberships,
  libraryCommittee,
  type DigitalPortal,
} from "@/data/library";

const title = "Central Library & Learning Centre | MSAJCE";
const description =
  "Explore the Central Library & Learning Centre at MSAJCE. 29,853+ volumes, Koha ILMS, DELNET Inter-Library Loan, J-Gate Plus database, and 8,978 sq.ft modern research space.";

export const Route = createFileRoute("/library")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search["tab"] as string) || undefined,
    };
  },
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
  component: CentralLibraryPage,
});

// Minimal Secondary SubNav Tabs (5 Clean Core Tabs)
const subNavTabs: SubNavTab[] = [
  { id: "overview", label: "Overview" },
  { id: "collections", label: "Collections" },
  { id: "digital-library", label: "Digital Library" },
  { id: "services-rules", label: "Services & Rules" },
  { id: "committee", label: "Committee" },
];

const overviewGallery = [
  {
    title: "Central Reading Hall",
    subtitle: "8,978 Sq.Ft Academic Space",
    src: "/images/library_reading_hall_real.jpg",
    span: "col-span-2 md:col-span-4",
    height: "h-[180px] sm:h-[215px] md:h-[245px]",
  },
  {
    title: "Physical Stack Wing",
    subtitle: "29,853+ Volumes & Holdings",
    src: "/images/library_stacks_real.jpg",
    span: "col-span-1 md:col-span-3",
    height: "h-[180px] sm:h-[215px] md:h-[245px]",
  },
  {
    title: "Reference & Research",
    subtitle: "1,885+ Standard Works",
    src: "https://images.unsplash.com/photo-1507842229451-7f01be7fe7ab?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 md:col-span-3",
    height: "h-[180px] sm:h-[215px] md:h-[245px]",
  },
  {
    title: "Digital Access Hub",
    subtitle: "DELNET & J-Gate Terminals",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-2 md:col-span-2",
    height: "h-[180px] sm:h-[215px] md:h-[245px]",
  },
  {
    title: "Periodical & Journal Lounge",
    subtitle: "37 Subscribed Print Journals",
    src: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-2 md:col-span-2",
    height: "h-[180px] sm:h-[215px] md:h-[245px]",
  },
  {
    title: "Koha ILMS Circulation",
    subtitle: "Automated Barcode Counter",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 md:col-span-3",
    height: "h-[180px] sm:h-[215px] md:h-[245px]",
  },
  {
    title: "Monograph & Thesis Archives",
    subtitle: "Project Dissertations",
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 md:col-span-3",
    height: "h-[180px] sm:h-[215px] md:h-[245px]",
  },
  {
    title: "Scholarly Study Pods",
    subtitle: "Focused Learning Chambers",
    src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-2 md:col-span-4",
    height: "h-[180px] sm:h-[215px] md:h-[245px]",
  },
];

function CentralLibraryPage() {
  const { tab } = Route.useSearch();
  const { setHeaderHidden } = useHeader();
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (tab && subNavTabs.some((t) => t.id === tab)) return tab;
    return "overview";
  });
  const [statFilter, setStatFilter] = useState<string>("all");
  const [digitalCategory, setDigitalCategory] = useState<string>("all");
  const [digitalSearch, setDigitalSearch] = useState<string>("");
  const [committeeSearch, setCommitteeSearch] = useState<string>("");

  useEffect(() => {
    if (tab && subNavTabs.some((t) => t.id === tab) && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "overview") {
      setHeaderHidden(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => {
        const el = document.getElementById("library-main-content");
        if (el) {
          const headerOffset = window.innerWidth < 768 ? 44 : 52;
          const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: Math.max(0, elementTop - headerOffset),
            behavior: "smooth",
          });
        }
      }, 40);
    }
  };

  const handleTitleClick = () => {
    setHeaderHidden(false);
    setActiveTab("overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filtered collection stats
  const filteredStats = useMemo(() => {
    if (statFilter === "all") return collectionStats;
    return collectionStats.filter((stat) => stat.category === statFilter);
  }, [statFilter]);

  // Combined Digital Resources for Unified Digital Library Tab (75 Total)
  const allDigitalResources = useMemo(() => {
    const combined: (DigitalPortal & { portalType: string })[] = [
      ...eLibraryGateways.map((item) => ({ ...item, portalType: "E-Library Gateway" })),
      ...openAccessJournals.map((item) => ({ ...item, portalType: "Open Access E-Journal" })),
      ...eBooksDirectory.map((item) => ({ ...item, portalType: "E-Books Database" })),
      ...freeCourseMaterials.map((item) => ({ ...item, portalType: "Online Courseware" })),
    ];
    return combined;
  }, []);

  // Filtered Digital Library items
  const filteredDigital = useMemo(() => {
    let result = allDigitalResources;

    if (digitalCategory === "e-library") {
      result = result.filter((item) => item.category === "e-library");
    } else if (digitalCategory === "e-journal") {
      result = result.filter((item) => item.category === "e-journal");
    } else if (digitalCategory === "e-book") {
      result = result.filter((item) => item.category === "e-book");
    } else if (digitalCategory === "course") {
      result = result.filter((item) => item.category === "course");
    }

    if (digitalSearch.trim()) {
      const q = digitalSearch.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q)) ||
          item.portalType.toLowerCase().includes(q)
      );
    }

    return [...result].sort((a, b) => a.name.length - b.name.length);
  }, [allDigitalResources, digitalCategory, digitalSearch]);

  // Digital Library DataGrid Pagination & Sorting State
  const [digitalPagination, setDigitalPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [digitalSorting, setDigitalSorting] = useState<SortingState>([]);

  useEffect(() => {
    setDigitalPagination((prev) => ({ ...prev, pageIndex: 0 }));
  }, [digitalCategory, digitalSearch]);

  // Auto-scroll to table top when pagination page changes
  useEffect(() => {
    const el = document.getElementById("digital-library-table-top");
    if (el && activeTab === "digital-library") {
      const headerOffset = window.innerWidth < 768 ? 110 : 120;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      if (window.pageYOffset > elementTop) {
        window.scrollTo({
          top: Math.max(0, elementTop - headerOffset),
          behavior: "smooth",
        });
      }
    }
  }, [digitalPagination.pageIndex, activeTab]);

  const digitalColumns = useMemo<ColumnDef<(DigitalPortal & { portalType: string })>[]>(
    () => [
      {
        id: "sno",
        header: ({ column }) => (
          <div className="w-[60px] text-center whitespace-nowrap">
            <DataGridColumnHeader column={column} title="S.No" className="justify-center whitespace-nowrap" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="text-center font-mono font-bold text-muted-foreground text-xs w-[60px] whitespace-nowrap">
            {String(row.index + 1 + digitalPagination.pageIndex * digitalPagination.pageSize).padStart(2, "0")}
          </div>
        ),
        size: 70,
      },
      {
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader column={column} title="Resource / Provider Name" className="whitespace-nowrap" />,
        cell: ({ row }) => {
          const item = row.original;
          return (
            <div className="py-1">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold font-oswald uppercase tracking-wide text-foreground hover:text-primary transition-colors block leading-snug whitespace-nowrap"
              >
                {item.name}
              </a>
            </div>
          );
        },
      },
      {
        accessorKey: "description",
        header: ({ column }) => <DataGridColumnHeader column={column} title="Description & Discipline Coverage" className="whitespace-nowrap" />,
        cell: ({ row }) => (
          <p className="text-foreground font-libre leading-relaxed text-xs sm:text-sm max-w-2xl py-1">
            {row.original.description || "Peer-reviewed scholarly electronic database"}
          </p>
        ),
      },
      {
        id: "portalLink",
        header: () => (
          <div className="text-right font-oswald font-black uppercase text-xs tracking-wider text-foreground whitespace-nowrap">
            Portal Link
          </div>
        ),
        cell: ({ row }) => (
          <div className="text-right py-1">
            <a
              href={row.original.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/40 bg-stone-200/90 dark:bg-neutral-800 px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none shrink-0"
            >
              <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                    <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                    </svg>
                  </span>
                  <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                    <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                    </svg>
                  </span>
                </span>
              </span>
              <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:text-white transition-colors duration-300">
                <span>Access</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        ),
        size: 150,
      },
    ],
    [digitalPagination]
  );

  const digitalTable = useReactTable({
    columns: digitalColumns,
    data: filteredDigital,
    pageCount: Math.ceil((filteredDigital.length || 0) / digitalPagination.pageSize),
    state: {
      pagination: digitalPagination,
      sorting: digitalSorting,
    },
    onPaginationChange: setDigitalPagination,
    onSortingChange: setDigitalSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // Filtered Committee Members
  const filteredCommittee = useMemo(() => {
    if (!committeeSearch.trim()) return libraryCommittee;
    const q = committeeSearch.toLowerCase();
    return libraryCommittee.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.designation.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        (m.department && m.department.toLowerCase().includes(q))
    );
  }, [committeeSearch]);

  // Committee DataGrid Pagination & Sorting State
  const [committeePagination, setCommitteePagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [committeeSorting, setCommitteeSorting] = useState<SortingState>([]);

  useEffect(() => {
    setCommitteePagination((prev) => ({ ...prev, pageIndex: 0 }));
  }, [committeeSearch]);

  useEffect(() => {
    const el = document.getElementById("committee-table-top");
    if (el && activeTab === "committee") {
      const headerOffset = window.innerWidth < 768 ? 110 : 120;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      if (window.pageYOffset > elementTop) {
        window.scrollTo({
          top: Math.max(0, elementTop - headerOffset),
          behavior: "smooth",
        });
      }
    }
  }, [committeePagination.pageIndex, activeTab]);

  const committeeColumns = useMemo<ColumnDef<(typeof libraryCommittee)[0]>[]>(
    () => [
      {
        id: "sno",
        header: ({ column }) => (
          <div className="w-[60px] text-center whitespace-nowrap">
            <DataGridColumnHeader column={column} title="S.No" className="justify-center whitespace-nowrap" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="text-center font-mono font-bold text-muted-foreground text-xs w-[60px] whitespace-nowrap">
            {String(row.index + 1 + committeePagination.pageIndex * committeePagination.pageSize).padStart(2, "0")}
          </div>
        ),
        size: 70,
      },
      {
        accessorKey: "name",
        header: ({ column }) => <DataGridColumnHeader column={column} title="Name of the Member" className="whitespace-nowrap" />,
        cell: ({ row }) => (
          <div className="font-libre font-semibold text-foreground text-sm whitespace-nowrap">
            {row.original.name}
          </div>
        ),
      },
      {
        accessorKey: "designation",
        header: ({ column }) => <DataGridColumnHeader column={column} title="Designation / Affiliation" className="whitespace-nowrap" />,
        cell: ({ row }) => (
          <span className="text-xs text-foreground font-medium font-libre">
            {row.original.designation}
          </span>
        ),
      },
      {
        accessorKey: "role",
        header: ({ column }) => (
          <div className="text-right whitespace-nowrap">
            <DataGridColumnHeader column={column} title="Committee Role" className="justify-end whitespace-nowrap" />
          </div>
        ),
        cell: ({ row }) => {
          const role = row.original.role;
          return (
            <div className="text-right py-1">
              <span
                className={cn(
                  "font-oswald text-xs uppercase tracking-wider inline-block",
                  role === "Chairman"
                    ? "font-black text-primary text-xs sm:text-sm"
                    : role === "Secretary" || role === "Member Secretary"
                    ? "font-bold text-primary"
                    : "font-medium text-muted-foreground"
                )}
              >
                {role}
              </span>
            </div>
          );
        },
      },
    ],
    [committeePagination]
  );

  const committeeTable = useReactTable({
    columns: committeeColumns,
    data: filteredCommittee,
    pageCount: Math.ceil((filteredCommittee.length || 0) / committeePagination.pageSize),
    state: {
      pagination: committeePagination,
      sorting: committeeSorting,
    },
    onPaginationChange: setCommitteePagination,
    onSortingChange: setCommitteeSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const currentTabLabel = subNavTabs.find((t) => t.id === activeTab)?.label ?? "Central Library";

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary Navigation at Top of Main */}
      <SecondarySubNav
        title="CENTRAL LIBRARY"
        tabs={subNavTabs}
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onTitleClick={handleTitleClick}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 2. HERO BANNER: Standard Bottom-Docked Theme-Adaptive Frame Banner        */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/library_reading_hall_real.jpg"
              alt="MSAJCE Central Library"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/library_stacks_real.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Bottom-Docked Theme-Adaptive Frame with Dynamic Tab Title */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTabLabel}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none"
                >
                  {currentTabLabel}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MAIN CONTENT: Multi-Section Alternating Wave Layout                    */}
        {/* ========================================================================= */}
        <div id="library-main-content" className="w-full scroll-mt-[115px] md:scroll-mt-[120px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full"
            >
              {/* ========================================================= */}
              {/* TAB 1: OVERVIEW (Wavy Background Color Split Sections)     */}
              {/* ========================================================= */}
              {activeTab === "overview" && (
                <div className="w-full">
                  {/* SECTION 1: Overview Narrative (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          CENTRAL LIBRARY & LEARNING CENTRE
                        </h2>
                      </div>

                      {/* Full-Width Editorial Academic Narrative */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        <p>{libraryOverview.description}</p>
                        <p>{libraryOverview.extendedDescription}</p>
                        <p>
                          Regular additions ensure new titles recommended by faculty are constantly acquired. Reputable newspapers, weekly, and fortnightly publications are subscribed to so that students stay up to date. Bar-coded technology, open-source software called <strong className="text-foreground font-semibold">Koha</strong>, dedicated internet connectivity, and campus-wide Wi-Fi are fully accessible to all scholars.
                        </p>
                      </div>

                      {/* Accent Callout */}
                      <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3.5 sm:py-4 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
                        <p className="w-full text-sm sm:text-base md:text-lg text-foreground font-libre font-medium leading-relaxed italic">
                          “Providing the right information to the right readers at the right time through curated collections, digital gateways, and automated library services.”
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2 / #18181B) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-[#F3F3F2] dark:fill-[#18181B]"
                      />
                    </svg>
                  </div>

                  {/* SECTION 2: Separate Section for LIBRARY SPACES & FACILITIES (#F3F3F2 / #18181B Canvas) */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          LIBRARY SPACES & FACILITIES
                        </h2>
                        <span className="text-xs font-oswald uppercase tracking-wider text-muted-foreground hidden sm:inline">
                          8 Campus Facilities · 8,978 Sq.Ft
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-12 gap-1.5 sm:gap-2">
                        {overviewGallery.map((item) => (
                          <div
                            key={item.title}
                            className={cn(
                              item.span,
                              item.height,
                              "relative overflow-hidden rounded-md border border-border/80 dark:border-white/15 shadow-2xs bg-muted/20"
                            )}
                          >
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover block"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 2 -> 3 (#F3F3F2 -> White / #18181B -> #121214) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-white dark:fill-[#121214]"
                      />
                    </svg>
                  </div>

                  {/* SECTION 3: Library Working Hours (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div id="library-working-hours" className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 scroll-mt-32">
                      <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-primary shrink-0 stroke-[2.2]" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          LIBRARY WORKING HOURS
                        </h2>
                      </div>
                      <div className="space-y-3 w-full">
                        <div className="flex items-center gap-3 text-sm sm:text-base text-foreground font-libre font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                          <span><strong>Monday to Saturday:</strong> 8.00 A.M. to 7.00 P.M</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm sm:text-base text-foreground font-libre font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                          <span><strong>All Sunday:</strong> 10.00 A.M. to 4.00 P.M</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: COLLECTIONS (Wavy Background Color Split Sections) */}
              {/* ========================================================= */}
              {activeTab === "collections" && (
                <div className="w-full">
                  {/* SECTION 1: Stack Holdings Table (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      {/* Collections Header with Filter Buttons */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                            COLLECTIONS & STACK HOLDINGS
                          </h2>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap items-center gap-1.5 p-1 border border-border bg-transparent rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs">
                          {[
                            { id: "all", label: "All Holdings (12)" },
                            { id: "physical", label: "Physical Stack" },
                            { id: "digital", label: "Digital Repositories" },
                            { id: "periodicals", label: "Periodicals" },
                          ].map((f) => (
                            <button
                              key={f.id}
                              type="button"
                              onClick={() => setStatFilter(f.id)}
                              className={`px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider transition-all rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs cursor-pointer select-none ${
                                statFilter === f.id
                                  ? "bg-primary text-white shadow-xs"
                                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                              }`}
                            >
                              {f.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Stack Holdings DataGrid */}
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">Resource Classification</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[170px]">Collection Type</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right min-w-[190px]">Quantity / Holdings</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[300px]">Collection Scope &amp; Details</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {filteredStats.map((item, idx) => (
                                <tr key={item.label} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald text-muted-foreground">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-bold font-oswald text-foreground text-sm uppercase tracking-wide">
                                    {item.label}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    {item.category}
                                  </td>
                                  <td className="py-3.5 px-4 text-right font-black font-oswald text-primary text-base sm:text-lg">
                                    {item.count}{item.suffix ? ` ${item.suffix}` : ""}
                                  </td>
                                  <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                                    {item.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2 / #18181B) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-[#F3F3F2] dark:fill-[#18181B]"
                      />
                    </svg>
                  </div>

                  {/* SECTION 2: List of Printed Journals by Department Table (#F3F3F2 / #18181B Canvas) */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          LIST OF PRINTED JOURNALS BY DEPARTMENT
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[280px]">Name of the Department</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[120px]">Code</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right min-w-[220px]">No of Printed Journals</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {departmentJournals.map((dept) => (
                                <tr key={dept.sno} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald text-muted-foreground">
                                    {String(dept.sno).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-sm">
                                    {dept.department}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald font-bold text-xs uppercase text-primary">
                                    {dept.code}
                                  </td>
                                  <td className="py-3.5 px-4 text-right font-black font-oswald text-foreground text-base">
                                    {String(dept.count).padStart(2, "0")}
                                  </td>
                                </tr>
                              ))}
                              {/* Total Row */}
                              <tr className="border-t-2 border-primary/40 bg-foreground/[0.04]">
                                <td colSpan={3} className="py-4 px-4 font-oswald font-black uppercase text-foreground tracking-wider text-sm">
                                  TOTAL PRINTED JOURNALS SUBSCRIBED
                                </td>
                                <td className="py-4 px-4 text-right font-oswald font-black text-primary text-xl">
                                  37
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: DIGITAL LIBRARY (Wavy Background Color Split Sections) */}
              {/* ========================================================= */}
              {activeTab === "digital-library" && (
                <div className="w-full">
                  {/* SECTION 1: Digital Library Console (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          DIGITAL LIBRARY & SCHOLARLY GATEWAYS
                        </h2>
                      </div>

                      {/* DataGrid Console */}
                      <div id="digital-library-table-top" className="space-y-4 scroll-mt-32">
                        {/* Category Filter Buttons & Search Bar */}
                        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                            {[
                              { id: "all", label: "All Gateways", count: allDigitalResources.length },
                              { id: "e-library", label: "DELNET & Databases", count: eLibraryGateways.length },
                              { id: "e-journal", label: "Open Access Journals", count: openAccessJournals.length },
                              { id: "e-book", label: "E-Books Directory", count: eBooksDirectory.length },
                              { id: "course", label: "Courseware & NPTEL", count: freeCourseMaterials.length },
                            ].map((cat) => {
                              const isActive = digitalCategory === cat.id;
                              return (
                                <button
                                  key={cat.id}
                                  type="button"
                                  onClick={() => {
                                    setDigitalCategory(cat.id);
                                    setDigitalPagination((prev) => ({ ...prev, pageIndex: 0 }));
                                    setTimeout(() => {
                                      const el = document.getElementById("digital-library-table-top");
                                      if (el) {
                                        const headerOffset = window.innerWidth < 768 ? 110 : 120;
                                        const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
                                        window.scrollTo({
                                          top: Math.max(0, elementTop - headerOffset),
                                          behavior: "smooth",
                                        });
                                      }
                                    }, 20);
                                  }}
                                  className={`group relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-oswald uppercase tracking-wider font-bold transition-all shrink-0 rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs border cursor-pointer select-none ${
                                    isActive
                                      ? "bg-primary text-white border-primary shadow-xs"
                                      : "bg-background dark:bg-[#18181b] text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] border-border"
                                  }`}
                                >
                                  <span>{cat.label}</span>
                                  <span
                                    className={`px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-xs transition-colors ${
                                      isActive
                                        ? "bg-white/20 text-white"
                                        : "bg-foreground/[0.05] text-muted-foreground group-hover:text-foreground border border-border/80"
                                    }`}
                                  >
                                    {cat.count}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          <div className="relative w-full md:w-80 shrink-0">
                            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                            <input
                              type="text"
                              placeholder="Search by title, publisher, subject..."
                              value={digitalSearch}
                              onChange={(e) => setDigitalSearch(e.target.value)}
                              className="w-full pl-9 pr-14 py-2 text-xs bg-background dark:bg-[#18181b] border border-border rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-libre"
                            />
                            {digitalSearch && (
                              <button
                                type="button"
                                onClick={() => setDigitalSearch("")}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-oswald font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded-xs bg-foreground/[0.06] hover:bg-foreground/[0.1] border border-border cursor-pointer select-none"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                        </div>

                        {/* DataGrid Component */}
                        <DataGrid table={digitalTable} recordCount={filteredDigital.length}>
                          <div className="w-full space-y-0">
                            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                              <div className="overflow-x-auto">
                                <DataGridTable />
                              </div>
                            </DataGridContainer>
                            <DataGridPagination sizes={[10, 20, 50]} />
                          </div>
                        </DataGrid>

                        {/* Empty State */}
                        {filteredDigital.length === 0 && (
                          <div className="text-center py-12 px-6 bg-transparent border border-border border-t-0 rounded-bl-xl rounded-br-xl">
                            <Search className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-40" />
                            <h3 className="text-base font-black font-oswald uppercase text-foreground">
                              No matching digital resources found
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1 max-w-md mx-auto font-libre">
                              {digitalSearch
                                ? `No resources matching "${digitalSearch}". Try adjusting your search or clearing filters.`
                                : "No resources found in this category."}
                            </p>
                            <button
                              type="button"
                              onClick={() => {
                                setDigitalSearch("");
                                setDigitalCategory("all");
                              }}
                              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider text-white bg-primary rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-all cursor-pointer select-none"
                            >
                              <RotateCcw className="w-3 h-3" />
                              <span>Reset Search</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 4: SERVICES & RULES (Wavy Background Color Split)      */}
              {/* ========================================================= */}
              {activeTab === "services-rules" && (
                <div className="w-full">
                  {/* SECTION 1: Services Directory (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      {/* Services Header */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                            LIBRARY SERVICES & CIRCULATION
                          </h2>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-oswald uppercase tracking-wider text-muted-foreground">
                          <div>
                            <span className="text-primary font-black">10</span> Active Services
                          </div>
                          <span className="text-border hidden sm:inline">|</span>
                          <div>
                            <span className="text-primary font-black">18 Books</span> Student Quota
                          </div>
                          <span className="text-border hidden sm:inline">|</span>
                          <div>
                            <span className="text-primary font-black">30 Days</span> Loan Period
                          </div>
                          <span className="text-border hidden sm:inline">|</span>
                          <div>
                            <span className="text-primary font-black">Koha</span> Automated
                          </div>
                        </div>
                      </div>

                      {/* Library Services Directory Table */}
                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[260px]">Service Facility</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[160px]">Classification</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[380px]">Scope &amp; Operational Details</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {libraryServices.map((svc, idx) => (
                                <tr key={svc.id} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald text-muted-foreground">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-sm tracking-wide">
                                    {svc.title}
                                  </td>
                                  <td className="py-3.5 px-4 font-oswald text-xs font-bold uppercase tracking-wider text-primary">
                                    {svc.badge || "Core Service"}
                                  </td>
                                  <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                                    {svc.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider 1 -> 2 (White -> #F3F3F2 / #18181B) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-[#F3F3F2] dark:fill-[#18181B]"
                      />
                    </svg>
                  </div>

                  {/* SECTION 2: Rules & Regulations (#F3F3F2 / #18181B Canvas) */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <FileText className="w-6 h-6 text-primary stroke-[2.2] shrink-0" />
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                            RULES & REGULATIONS
                          </h2>
                        </div>
                        <span className="text-xs font-oswald uppercase tracking-wider text-muted-foreground hidden sm:inline">
                          16 Institutional Guidelines
                        </span>
                      </div>

                      {/* Clean Open Editorial Rules List (No harsh divider lines, round red point badges) */}
                      <div className="space-y-3 font-libre">
                        {libraryRules.map((r, idx) => (
                          <div
                            key={r.id}
                            className="flex items-start gap-4 py-2 hover:bg-foreground/[0.015] transition-colors"
                          >
                            <span className="shrink-0 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                              {idx + 1}
                            </span>
                            <p className="text-xs sm:text-sm md:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5">
                              {r.rule}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Wave Divider 2 -> 3 (#F3F3F2 -> White / #18181B -> #121214) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-white dark:fill-[#121214]"
                      />
                    </svg>
                  </div>

                  {/* SECTION 3: Membership Borrowing Entitlements (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          MEMBERSHIP BORROWING ENTITLEMENTS
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">Membership Category</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-center min-w-[160px]">Eligible Books Quota</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-center min-w-[140px]">Loan Duration</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[340px]">Entitlement Scope &amp; Guidelines</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {borrowingEligibility.map((item, idx) => (
                                <tr key={item.category} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-bold font-oswald text-muted-foreground">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-sm">
                                    {item.category}
                                  </td>
                                  <td className="py-3.5 px-4 text-center font-black font-oswald text-primary text-base sm:text-lg">
                                    {item.entitlement}
                                  </td>
                                  <td className="py-3.5 px-4 text-center font-bold font-oswald uppercase text-foreground text-xs sm:text-sm">
                                    {item.loanPeriod}
                                  </td>
                                  <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                                    {item.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  {/* Wave Divider 3 -> 4 (White -> #F3F3F2 / #121214 -> #18181B) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-[#F3F3F2] dark:fill-[#18181B]"
                      />
                    </svg>
                  </div>

                  {/* SECTION 4: Overdue Fine Slabs (#F3F3F2 / #18181B Canvas) */}
                  <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          OVERDUE FINE SLABS
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[90px]">Tier</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[200px]">Overdue Duration Window</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">Assessment Tier</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right min-w-[150px]">Daily Fine Rate</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">Assessment Scope</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {overdueFineSlabs.map((slab, idx) => (
                                <tr key={slab.slab} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 font-mono font-bold text-primary text-xs">
                                    Tier {idx + 1}
                                  </td>
                                  <td className="py-3.5 px-4 font-bold font-oswald text-foreground text-sm uppercase">
                                    {slab.slab}
                                  </td>
                                  <td className="py-3.5 px-4 text-xs font-libre text-foreground">
                                    {slab.period}
                                  </td>
                                  <td className="py-3.5 px-4 text-right font-black font-oswald text-primary text-base sm:text-lg">
                                    {slab.rate}
                                  </td>
                                  <td className="py-3.5 px-4 text-xs font-libre text-foreground uppercase">
                                    {slab.unit}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                      <p className="text-xs text-muted-foreground font-libre leading-relaxed">
                        * All overdue charges must be cleared prior to subsequent renewals or checkouts. Continuous default exceeding 30 days results in borrowing privileges suspension.
                      </p>
                    </div>
                  </section>

                  {/* Wave Divider 4 -> 5 (#F3F3F2 -> White / #18181B -> #121214) */}
                  <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
                    <svg
                      viewBox="0 0 1440 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                        className="fill-white dark:fill-[#121214]"
                      />
                    </svg>
                  </div>

                  {/* SECTION 5: Resource Sharing & Consortia Networks (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          RESOURCE SHARING & CONSORTIA NETWORKS
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[60px]">S.No</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[240px]">Consortia / Network</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[180px]">Classification</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[380px]">Scope &amp; Key Privileges</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-[150px] text-right">Access Portal</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {institutionalMemberships.map((inst, idx) => (
                                <tr key={inst.id} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="py-3 px-4 font-bold font-oswald text-muted-foreground align-middle">
                                    {String(idx + 1).padStart(2, "0")}
                                  </td>
                                  <td className="py-3 px-4 align-middle">
                                    <div className="font-bold font-oswald uppercase text-foreground text-sm tracking-wide">
                                      {inst.name}
                                    </div>
                                  </td>
                                  <td className="py-3 px-4 align-middle font-oswald text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    {inst.badge}
                                  </td>
                                  <td className="py-3 px-4 align-middle font-libre text-xs sm:text-sm text-foreground">
                                    {inst.summary || inst.features.join(" · ")}
                                  </td>
                                  <td className="py-3 px-4 align-middle text-right">
                                    <a
                                      href={inst.website}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none shrink-0 whitespace-nowrap"
                                    >
                                      <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                                        <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                          <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                                            </svg>
                                          </span>
                                          <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                              <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                                            </svg>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:text-white transition-colors duration-300">
                                        <span>Visit Portal</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                      </span>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 5: COMMITTEE (Wavy Background Color Split Sections)   */}
              {/* ========================================================= */}
              {activeTab === "committee" && (
                <div className="w-full">
                  {/* SECTION 1: Committee Directory Table & Search (White / #121214 Canvas) */}
                  <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
                    <div id="committee-table-top" className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 scroll-mt-32">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                            LIBRARY COMMITTEE
                          </h2>
                        </div>

                        {/* Minimal Search Bar */}
                        <div className="relative w-full sm:w-64 shrink-0">
                          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Search committee member, role..."
                            value={committeeSearch}
                            onChange={(e) => setCommitteeSearch(e.target.value)}
                            className="w-full pl-9 pr-8 py-2 text-xs bg-background dark:bg-[#18181b] border border-border rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-libre"
                          />
                          {committeeSearch && (
                            <button
                              type="button"
                              onClick={() => setCommitteeSearch("")}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-oswald font-bold uppercase text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded-xs bg-foreground/[0.06] hover:bg-foreground/[0.1] border border-border cursor-pointer select-none"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                      </div>

                      {/* DataGrid Committee Table */}
                      <DataGrid table={committeeTable} recordCount={filteredCommittee.length}>
                        <div className="w-full space-y-0">
                          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                            <div className="overflow-x-auto">
                              <DataGridTable />
                            </div>
                          </DataGridContainer>
                          <DataGridPagination sizes={[10, 25]} />
                        </div>
                      </DataGrid>

                      {filteredCommittee.length === 0 && (
                        <div className="py-10 text-center border border-border border-t-0 bg-foreground/[0.01]">
                          <p className="text-xs font-oswald uppercase tracking-wider text-muted-foreground">
                            No committee members match "{committeeSearch}"
                          </p>
                          <button
                            type="button"
                            onClick={() => setCommitteeSearch("")}
                            className="mt-2.5 px-3 py-1 text-xs font-oswald font-bold uppercase tracking-wider text-primary border border-primary/30 hover:bg-primary/5 rounded-xs cursor-pointer select-none"
                          >
                            Clear Search
                          </button>
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
