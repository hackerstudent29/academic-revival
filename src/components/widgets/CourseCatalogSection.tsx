import { useState, useMemo, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Plus, ArrowRight, LayoutGrid, LayoutList, List } from "lucide-react";
import { allCourses } from "@/lib/courseData";

interface CourseCatalogSectionProps {
  initialLevel?: string;
  titleOverride?: string;
  showViewToggles?: boolean;
  defaultViewMode?: "list" | "table" | "grid";
}

export function CourseCatalogSection({ 
  initialLevel, 
  titleOverride, 
  showViewToggles = false,
  defaultViewMode = "table"
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
    if (levelFilter === "Undergraduate") {
      return {
        eyebrow: "DEPARTMENTS",
        title: "UNDERGRADUATE DEPARTMENTS",
        description: "Explore all 14 B.E. and B.Tech undergraduate degree courses offered across MSAJCE engineering departments."
      };
    }
    if (levelFilter === "Postgraduate") {
      return {
        eyebrow: "DEPARTMENTS",
        title: "POSTGRADUATE DEPARTMENTS",
        description: "Explore advanced M.E. master's degree and postgraduate research engineering courses."
      };
    }
    if (levelFilter === "Research (Ph.D)") {
      return {
        eyebrow: "DEPARTMENTS",
        title: "DOCTORAL STUDIES",
        description: "Explore doctoral research programmes recognized by Anna University across engineering disciplines."
      };
    }
    return {
      eyebrow: "DEPARTMENTS",
      title: titleOverride || "ALL ACADEMIC DEPARTMENTS",
      description: "Select a branch below to explore department highlights, curriculum, faculty and infrastructure."
    };
  };

  const headerInfo = getHeaderInfo();

  return (
    <section id="programmes" className="bg-background text-foreground py-10 md:py-16 font-sans">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Department / Programmes Page Title Block */}
        <div className="mb-8 border-b border-border pb-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-2 font-mono">
            {headerInfo.eyebrow}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground font-['Outfit',sans-serif]">
            {headerInfo.title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-3xl">
            {headerInfo.description}
          </p>
        </div>

        {/* ── HEADER / SEARCH BAR (Matching commit 5c36993) ── */}
        <div className="border-b border-border pb-4 mb-6">
          <div className="relative flex items-center">
            <Search className="absolute left-0 text-muted-foreground" size={24} />
            <input 
              type="text"
              placeholder="Search for a course or department (e.g., CSE, Cyber, AI, Civil)..."
              className="w-full bg-transparent pl-10 pr-10 py-3 text-xl md:text-2xl text-foreground placeholder:text-muted-foreground focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ArrowRight className="absolute right-0 text-foreground" size={24} />
          </div>
        </div>

        {/* ── FILTERS & RESULTS COUNT BAR ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          {/* Level Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {levelFilter ? (
              <>
                <div className="px-5 py-2 border border-foreground bg-foreground text-background text-sm font-bold flex items-center gap-2 shadow-xs">
                  {levelFilter === "Research (Ph.D)" ? "Doctoral Studies" : `${levelFilter} Programmes`}
                </div>
                <button 
                  onClick={() => setLevelFilter(null)}
                  className="px-4 py-2 border border-border text-muted-foreground hover:border-foreground text-sm flex items-center gap-2 transition-colors cursor-pointer"
                >
                  View all study options
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setLevelFilter(null)}
                  className={`px-5 py-2 text-sm font-bold border transition-colors cursor-pointer ${
                    levelFilter === null ? "bg-foreground text-background border-foreground shadow-xs" : "border-border text-muted-foreground hover:border-foreground"
                  }`}
                >
                  All Programmes ({allCourses.length})
                </button>

                <button 
                  onClick={() => setLevelFilter("Undergraduate")}
                  className={`px-4 py-2 border flex items-center gap-2 text-sm font-bold transition-colors cursor-pointer ${
                    levelFilter === "Undergraduate" ? "bg-foreground text-background border-foreground shadow-xs" : "border-border text-muted-foreground hover:border-foreground"
                  }`}
                >
                  Undergraduate Programmes <Plus size={16} />
                </button>

                <button 
                  onClick={() => setLevelFilter("Postgraduate")}
                  className={`px-4 py-2 border flex items-center gap-2 text-sm font-bold transition-colors cursor-pointer ${
                    levelFilter === "Postgraduate" ? "bg-foreground text-background border-foreground shadow-xs" : "border-border text-muted-foreground hover:border-foreground"
                  }`}
                >
                  Postgraduate Programmes <Plus size={16} />
                </button>

                <button 
                  onClick={() => setLevelFilter("Research (Ph.D)")}
                  className={`px-4 py-2 border flex items-center gap-2 text-sm font-bold transition-colors cursor-pointer ${
                    levelFilter === "Research (Ph.D)" ? "bg-foreground text-background border-foreground shadow-xs" : "border-border text-muted-foreground hover:border-foreground"
                  }`}
                >
                  Doctoral Studies <Plus size={16} />
                </button>
              </>
            )}
          </div>

          {/* Results Count Display & View Toggles */}
          <div className="flex items-center gap-6">
            <div className="text-sm font-semibold text-muted-foreground">
              Showing results 1 - {filteredCourses.length} of {allCourses.length}
            </div>

            {/* 3 View Mode Toggle Switcher (Only shown when showViewToggles = true) */}
            {showViewToggles && (
              <div className="flex items-center gap-1 border border-border p-1 bg-card">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 transition-colors cursor-pointer ${
                    viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Detailed Cards List View (Default)"
                >
                  <List size={18} />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 transition-colors cursor-pointer ${
                    viewMode === "table" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Compact Table View"
                >
                  <LayoutList size={18} />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 transition-colors cursor-pointer ${
                    viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── MODE 1: DETAILED HORIZONTAL CARDS LIST (Default View) ── */}
        {viewMode === "list" && (
          <div className="flex flex-col border-t border-border">
            {filteredCourses.map((course, idx) => (
              <Link 
                to={`/programmes/${course.slug}` as any} 
                key={idx} 
                className="flex flex-col md:flex-row gap-6 md:gap-8 py-8 border-b border-border group cursor-pointer hover:bg-muted/50 transition-colors -mx-4 px-4 md:-mx-8 md:px-8 rounded-sm"
              >
                {/* Image (Flat static - no zoom animation) */}
                <div className="w-full md:w-[360px] shrink-0 overflow-hidden bg-[#082B5C] h-[220px]">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">COURSE</span>
                    <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight text-foreground group-hover:underline underline-offset-8 decoration-1 leading-tight flex items-center gap-3 font-['Outfit',sans-serif]">
                      {course.name}
                      <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={28} strokeWidth={3} />
                    </h3>
                  </div>
                  
                  <div className="flex-1 md:max-w-[280px] lg:max-w-xs flex flex-col pt-1">
                    <div className="flex justify-between border-b border-border pb-4 mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">DEPARTMENT:</span>
                        <span className="text-sm font-semibold text-foreground leading-tight">{course.department}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">LEVEL:</span>
                        <span className="text-sm font-semibold text-foreground leading-tight">{course.level}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 border-b border-border pb-4 mb-4">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">INTAKE</span>
                        <span className="text-sm font-semibold text-foreground">{course.intake}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">GOVT QUOTA</span>
                        <span className="text-sm font-semibold text-foreground">{course.govtQuota}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">MGMT QUOTA</span>
                        <span className="text-sm font-semibold text-foreground">{course.managementQuota}</span>
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

        {/* ── MODE 2: DENSE COMPACT TABLE VIEW (Shown when showViewToggles = true and viewMode = "table") ── */}
        {showViewToggles && viewMode === "table" && (
          <div className="overflow-x-auto border border-border bg-card shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#082B5C] text-white uppercase text-[11px] font-black tracking-wider border-b border-border">
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
              <tbody className="divide-y divide-border">
                {filteredCourses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-foreground">
                      <Link to={`/programmes/${course.slug}` as any} className="hover:text-primary transition-colors block">
                        {course.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-extrabold uppercase bg-muted text-foreground border border-border">
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
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── MODE 3: GRID VIEW (Shown when showViewToggles = true and viewMode = "grid") ── */}
        {showViewToggles && viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCourses.map((course, idx) => (
              <Link 
                to={`/programmes/${course.slug}` as any} 
                key={idx} 
                className="group flex flex-col justify-between bg-card border border-border hover:border-primary transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer overflow-hidden"
              >
                <div>
                  <div className="relative w-full h-36 bg-[#082B5C] overflow-hidden border-b border-border">
                    <img 
                      src={course.image} 
                      alt="" 
                      className="w-full h-full object-cover relative z-0" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-5" />
                    
                    <span className="absolute top-3 left-3 bg-[#082B5C] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 border border-white/20 shadow-xs z-10">
                      {course.level}
                    </span>

                    <span className="absolute bottom-2.5 left-3 right-3 text-xs font-bold text-white/90 truncate font-mono z-10">
                      {course.department}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {course.name}
                    </h3>

                    <div className="grid grid-cols-3 gap-1 pt-2 border-t border-border/80 text-center">
                      <div className="bg-muted/40 p-1.5 border border-border/50">
                        <span className="block text-[9px] font-extrabold uppercase text-muted-foreground">Intake</span>
                        <span className="text-xs font-black text-foreground">{course.intake}</span>
                      </div>
                      <div className="bg-muted/40 p-1.5 border border-border/50">
                        <span className="block text-[9px] font-extrabold uppercase text-muted-foreground">Govt Q</span>
                        <span className="text-xs font-black text-foreground">{course.govtQuota}</span>
                      </div>
                      <div className="bg-muted/40 p-1.5 border border-border/50">
                        <span className="block text-[9px] font-extrabold uppercase text-muted-foreground">Mgmt Q</span>
                        <span className="text-xs font-black text-foreground">{course.managementQuota}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-muted/30 border-t border-border flex items-center justify-between text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <span>Explore Department Page</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredCourses.length === 0 && (
          <div className="py-16 text-center text-muted-foreground bg-card border border-border text-base">
            No programmes found matching your search. Try adjusting the search keywords or filters.
          </div>
        )}

        <div className="mt-8 text-xs text-muted-foreground leading-relaxed max-w-4xl border-t border-border pt-4">
          * Five percent (5%) of seats within Approved Intake shall be allowed for admission under NRI category. In the event of non-availability of students in NRI seats, the seats shall be given to general candidates as per merit.
        </div>
      </div>
    </section>
  );
}
