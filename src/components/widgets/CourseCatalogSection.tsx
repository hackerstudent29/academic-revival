import { useState, useMemo, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ArrowRight, LayoutGrid, LayoutList, List, X } from "lucide-react";
import { allCourses } from "@/lib/courseData";

interface CourseCatalogSectionProps {
  initialLevel?: string | undefined;
  titleOverride?: string;
  showViewToggles?: boolean;
  defaultViewMode?: "list" | "table" | "grid";
}

export function CourseCatalogSection({ 
  initialLevel, 
  titleOverride, 
  showViewToggles = true,
  defaultViewMode = "list"
}: CourseCatalogSectionProps) {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<string | null>(initialLevel || null);
  const [viewMode, setViewMode] = useState<"list" | "table" | "grid">(defaultViewMode);

  useEffect(() => {
    setLevelFilter(initialLevel || null);
  }, [initialLevel]);

  useEffect(() => {
    setViewMode(defaultViewMode);
  }, [defaultViewMode]);

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchSearch = course.name.toLowerCase().includes(search.toLowerCase()) ||
                          course.department.toLowerCase().includes(search.toLowerCase());
      const matchLevel = levelFilter ? course.level === levelFilter : true;
      return matchSearch && matchLevel;
    });
  }, [search, levelFilter]);

  const getHeaderInfo = () => {
    const mainTitle = titleOverride || (
      levelFilter === "Undergraduate"
        ? "UNDERGRADUATE DEPARTMENTS"
        : levelFilter === "Postgraduate"
        ? "POSTGRADUATE DEPARTMENTS"
        : levelFilter === "Research (Ph.D)"
        ? "DOCTORAL STUDIES"
        : "ALL ACADEMIC DEPARTMENTS"
    );

    const description = levelFilter === "Undergraduate"
      ? "Explore all B.E. and B.Tech undergraduate degree courses offered across MSAJCE engineering departments."
      : levelFilter === "Postgraduate"
      ? "Explore advanced M.E. master's degree and postgraduate research engineering courses."
      : levelFilter === "Research (Ph.D)"
      ? "Explore doctoral research programmes recognized by Anna University across engineering disciplines."
      : "AICTE-approved & Anna University-affiliated degree pathways built for technical excellence and global careers.";

    return { title: mainTitle, description };
  };

  const headerInfo = getHeaderInfo();

  return (
    <section id="programmes" className="bg-background text-foreground pt-2 md:pt-4 pb-10 md:pb-16 font-sans">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        
        {/* Department / Programmes Page Title Block */}
        <div className="mb-6 border-b border-border pb-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary font-oswald">
            {headerInfo.title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-3xl font-sans leading-relaxed">
            {headerInfo.description}
          </p>
        </div>

        {/* ── SEARCH & FILTER CONTROL SECTION ── */}
        <div className="space-y-4 mb-8">
          {/* Search Input Bar */}
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 text-muted-foreground pointer-events-none" size={20} />
            <input 
              type="text"
              placeholder="Search for a course or department (e.g., CSE, Cyber, AI, Civil)..."
              className="w-full bg-card border border-border pl-10 pr-10 py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200 font-sans shadow-xs rounded-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3.5 text-muted-foreground hover:text-foreground p-1 cursor-pointer transition-colors"
                title="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Level Filter Buttons & View Mode Toggles Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 bg-card border border-border shadow-xs rounded-sm">
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: null, label: `All Programmes (${allCourses.length})` },
                { id: "Undergraduate", label: "Undergraduate Programmes", hasPlus: true },
                { id: "Postgraduate", label: "Postgraduate Programmes", hasPlus: true },
                { id: "Research (Ph.D)", label: "Doctoral Studies", hasPlus: true },
              ].map((filter) => {
                const isActive = levelFilter === filter.id;
                return (
                  <button
                    key={filter.label}
                    onClick={() => setLevelFilter(filter.id)}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase font-oswald tracking-wider transition-colors duration-200 border cursor-pointer rounded-sm ${
                      isActive 
                        ? "bg-primary text-primary-foreground border-primary shadow-xs" 
                        : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {filter.label} {filter.hasPlus && "+"}
                  </button>
                );
              })}
            </div>

            {/* Results Count & View Mode Switcher */}
            <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-border">
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground font-sans whitespace-nowrap">
                Showing results 1 - {filteredCourses.length} of {allCourses.length}
              </span>

              {/* 3 View Mode Toggle Switcher */}
              {showViewToggles && (
                <div className="flex items-center border border-border bg-background shrink-0 rounded-sm overflow-hidden">
                  {[
                    { id: "list", icon: List, title: "Detailed Horizontal Cards View", showMobile: true },
                    { id: "table", icon: LayoutList, title: "Compact Table View", showMobile: true },
                    { id: "grid", icon: LayoutGrid, title: "3-Column Grid View (PC & Tablet)", showMobile: false },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    const isActive = viewMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setViewMode(mode.id as any)}
                        className={`p-2 transition-colors duration-200 cursor-pointer ${
                          !mode.showMobile ? "hidden md:inline-flex" : "inline-flex"
                        } ${
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        }`}
                        title={mode.title}
                      >
                        <Icon size={18} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── MODE 1: DETAILED HORIZONTAL CARDS VIEW ── */}
        {viewMode === "list" && (
          <div className="flex flex-col border-t border-border">
            {filteredCourses.map((course, idx) => (
              <Link 
                to={`/programmes/${course.slug}` as any} 
                key={course.slug || idx} 
                className="flex flex-col md:flex-row gap-6 md:gap-8 py-8 border-b border-border group cursor-pointer hover:bg-muted/40 transition-colors duration-200 -mx-4 px-4 md:-mx-8 md:px-8 rounded-sm block"
              >
                {/* Image */}
                <div className="w-full md:w-[360px] shrink-0 overflow-hidden bg-primary/10 h-[220px] relative border border-border rounded-sm">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold font-oswald uppercase tracking-wider px-2.5 py-1 border border-white/20 shadow-xs z-10 rounded-sm">
                    {course.level}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2 font-oswald">COURSE</span>
                    <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight text-primary font-oswald group-hover:underline underline-offset-8 decoration-1 leading-tight flex items-center gap-3">
                      {course.name}
                      <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={28} strokeWidth={3} />
                    </h3>
                  </div>
                  
                  <div className="flex-1 md:max-w-[280px] lg:max-w-xs flex flex-col pt-1 font-sans">
                    <div className="flex justify-between border-b border-border pb-4 mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">DEPARTMENT</span>
                        <span className="text-sm font-semibold text-foreground leading-tight">{course.department}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">LEVEL</span>
                        <span className="text-sm font-semibold text-foreground leading-tight">{course.level}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 border-b border-border pb-4 mb-4 text-center">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground block mb-1">INTAKE</span>
                        <span className="text-sm font-bold text-foreground">{course.intake}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground block mb-1">GOVT QUOTA</span>
                        <span className="text-sm font-bold text-foreground">{course.govtQuota}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground block mb-1">MGMT QUOTA</span>
                        <span className="text-sm font-bold text-foreground">{course.managementQuota}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ── MODE 2: COMPACT TABLE VIEW ── */}
        {viewMode === "table" && (
          <div className="overflow-x-auto border border-border bg-card shadow-xs rounded-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-primary text-primary-foreground uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-primary/20">
                <tr>
                  <th className="py-3.5 px-4">Programme Name</th>
                  <th className="py-3.5 px-4">Level</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Department</th>
                  <th className="py-3.5 px-4 text-center">Intake</th>
                  <th className="py-3.5 px-4 text-center hidden sm:table-cell">Govt Seats</th>
                  <th className="py-3.5 px-4 text-center hidden sm:table-cell">Mgmt Seats</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-sans">
                {filteredCourses.map((course, idx) => (
                  <tr 
                    key={course.slug || idx} 
                    className="hover:bg-muted/50 transition-colors duration-150 group"
                  >
                    <td className="py-3.5 px-4 font-bold text-foreground">
                      <Link to={`/programmes/${course.slug}` as any} className="hover:text-primary transition-colors block">
                        {course.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-extrabold uppercase bg-muted text-foreground border border-border font-oswald rounded-sm">
                        {course.level}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-muted-foreground hidden md:table-cell font-medium">
                      {course.department}
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-foreground">
                      {course.intake}
                    </td>
                    <td className="py-3.5 px-4 text-center text-muted-foreground hidden sm:table-cell">
                      {course.govtQuota}
                    </td>
                    <td className="py-3.5 px-4 text-center text-muted-foreground hidden sm:table-cell">
                      {course.managementQuota}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link 
                        to={`/programmes/${course.slug}` as any} 
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors font-oswald rounded-sm"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── MODE 3: 3-COLUMN GRID VIEW ── */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCourses.map((course, idx) => (
              <Link 
                to={`/programmes/${course.slug}` as any} 
                key={course.slug || idx} 
                className="group flex flex-col justify-between bg-card border border-border hover:border-primary transition-colors duration-200 shadow-xs hover:shadow-md cursor-pointer overflow-hidden rounded-sm h-full"
              >
                <div>
                  <div className="relative w-full h-36 bg-primary/10 overflow-hidden border-b border-border">
                    <img 
                      src={course.image} 
                      alt={course.name} 
                      className="w-full h-full object-cover relative z-0" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-5" />
                    
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold font-oswald uppercase tracking-wider px-2.5 py-1 border border-white/20 shadow-xs z-10 rounded-sm">
                      {course.level}
                    </span>

                    <span className="absolute bottom-2.5 left-3 right-3 text-xs font-bold text-white/90 truncate font-sans z-10">
                      {course.department}
                    </span>
                  </div>

                  <div className="p-5 space-y-3 font-sans">
                    <h3 className="text-lg font-bold font-oswald text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {course.name}
                    </h3>

                    <div className="grid grid-cols-3 gap-1 pt-2 border-t border-border/80 text-center">
                      <div className="bg-muted/40 p-1.5 border border-border/50 rounded-sm">
                        <span className="block text-[9px] font-extrabold uppercase text-muted-foreground">Intake</span>
                        <span className="text-xs font-black text-foreground">{course.intake}</span>
                      </div>
                      <div className="bg-muted/40 p-1.5 border border-border/50 rounded-sm">
                        <span className="block text-[9px] font-extrabold uppercase text-muted-foreground">Govt Q</span>
                        <span className="text-xs font-black text-foreground">{course.govtQuota}</span>
                      </div>
                      <div className="bg-muted/40 p-1.5 border border-border/50 rounded-sm">
                        <span className="block text-[9px] font-extrabold uppercase text-muted-foreground">Mgmt Q</span>
                        <span className="text-xs font-black text-foreground">{course.managementQuota}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-muted/30 border-t border-border flex items-center justify-between text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-oswald uppercase tracking-wider">
                  <span>Explore Department Page</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredCourses.length === 0 && (
          <div className="py-16 text-center text-muted-foreground bg-card border border-border text-base font-sans rounded-sm">
            No programmes found matching your search. Try adjusting the search keywords or filters.
          </div>
        )}

        <div className="mt-8 text-xs text-muted-foreground leading-relaxed max-w-4xl border-t border-border pt-4 font-sans">
          * Five percent (5%) of seats within Approved Intake shall be allowed for admission under NRI category. In the event of non-availability of students in NRI seats, the seats shall be given to general candidates as per merit.
        </div>
      </div>
    </section>
  );
}
