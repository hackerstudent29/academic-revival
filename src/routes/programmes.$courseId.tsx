import { createFileRoute, Link } from '@tanstack/react-router';
import { allCourses } from '@/lib/courseData';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const markdownImports = import.meta.glob('@/content/departments/*.md', { query: '?raw', import: 'default' });

const newsItems = [
  { title: "National Level Tech Hackathon 2026 Registration Open", date: "Aug 24, 2026" },
  { title: "International Conference on Modern Engineering & AI", date: "Sep 12, 2026" },
  { title: "Annual Alumni Meet & Corporate Tech Symposium", date: "Oct 05, 2026" }
];

export const Route = createFileRoute('/programmes/$courseId')({
  loader: async ({ params }) => {
    const course = allCourses.find(c => c.slug === params.courseId);
    if (!course) throw new Error("Course not found");
    
    let markdownContent = null;
    if (course.markdownFile) {
      const importFn = markdownImports[`/src/content/departments/${course.markdownFile}`];
      if (importFn) {
        markdownContent = await importFn() as string;
      }
    }

    return { course, markdownContent };
  },
  component: CoursePage,
});

function parseDepartmentMarkdown(markdown: string | null): Record<string, string> {
  const sections: Record<string, string[]> = {
    about: [],
    obe: [],
    'job-profile': [],
    faculty: [],
    facilities: [],
    academics: [],
    'news-events': [],
    'student-activities': [],
  };

  if (!markdown) return {};

  const lines = markdown.split('\n');
  let currentTab = 'about';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      const heading = line.replace(/^##\s+/, '').toLowerCase();
      
      if (
        heading.includes('overview') ||
        heading.includes('vision') ||
        heading.includes('mission') ||
        heading.includes('welcome') ||
        heading.includes('about')
      ) {
        currentTab = 'about';
      } else if (
        heading.includes('peo') ||
        heading.includes('pso') ||
        heading.includes('outcome') ||
        heading.includes('objective') ||
        heading.includes('obe') ||
        (heading.includes('program') && heading.includes('outcome'))
      ) {
        currentTab = 'obe';
      } else if (
        heading.includes('job profile') ||
        heading.includes('employment') ||
        heading.includes('career') ||
        heading.includes('salary') ||
        heading.includes('prospect')
      ) {
        currentTab = 'job-profile';
      } else if (
        heading.includes('faculty') ||
        heading.includes('staff')
      ) {
        currentTab = 'faculty';
      } else if (
        heading.includes('facilit') ||
        heading.includes('laborator') ||
        heading.includes('lab')
      ) {
        currentTab = 'facilities';
      } else if (
        heading.includes('regulation') ||
        heading.includes('course material') ||
        heading.includes('teaching method') ||
        heading.includes('curriculum') ||
        heading.includes('programme') ||
        heading.includes('academic') ||
        heading.includes('unit')
      ) {
        currentTab = 'academics';
      } else if (
        heading.includes('news') ||
        heading.includes('event') ||
        heading.includes('symposium')
      ) {
        currentTab = 'news-events';
      } else if (
        heading.includes('student') ||
        heading.includes('activit') ||
        heading.includes('club') ||
        heading.includes('association')
      ) {
        currentTab = 'student-activities';
      }
    }

    if (sections[currentTab]) {
      if (!line.startsWith('# ')) {
        sections[currentTab].push(line);
      }
    }
  }

  const result: Record<string, string> = {};
  for (const [key, val] of Object.entries(sections)) {
    result[key] = val.join('\n').trim();
  }
  return result;
}

const departmentTabsList = [
  { id: 'about', label: 'About Department' },
  { id: 'obe', label: 'OBE' },
  { id: 'job-profile', label: 'JOB PROFILE' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'facilities', label: 'Department Facilities' },
  { id: 'academics', label: 'Academics' },
  { id: 'news-events', label: 'News and Events' },
  { id: 'student-activities', label: 'Student Activities' },
];

function CoursePage() {
  const { course, markdownContent } = Route.useLoaderData();
  const [hidden, setHidden] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [currentNews, setCurrentNews] = useState(0);
  const currentItem = newsItems[currentNews] || newsItems[0];
  const { scrollY } = useScroll();

  const parsedContent = parseDepartmentMarkdown(markdownContent);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const contentContainer = document.getElementById('department-main-content');
    if (contentContainer) {
      const yOffset = -140;
      const y = contentContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
      if (window.pageYOffset > y) {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const markdownComponents = {
    h2: ({ node, children, ...props }: any) => (
      <h2 className="text-[#059669] font-black uppercase text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6 mt-2 border-b-2 border-[#059669]/20 pb-3" {...props}>
        {children}
      </h2>
    ),
    h3: ({ node, children, ...props }: any) => (
      <h3 className="text-foreground font-extrabold uppercase text-lg md:text-xl tracking-tight mt-8 mb-3" {...props}>
        {children}
      </h3>
    ),
    p: ({ node, children, ...props }: any) => (
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5" {...props}>
        {children}
      </p>
    ),
    strong: ({ node, children, ...props }: any) => (
      <strong className="text-foreground font-bold" {...props}>
        {children}
      </strong>
    ),
    blockquote: ({ node, children, ...props }: any) => (
      <blockquote className="border-l-4 border-[#059669] bg-card p-5 rounded-r-sm text-card-foreground italic my-6 shadow-xs" {...props}>
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sub Navigation Bar */}
      <motion.div 
        animate={{ y: hidden ? -73 : 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-xs"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ul className="flex items-center gap-6 lg:gap-8 text-xs md:text-sm font-bold uppercase tracking-wider text-foreground overflow-x-auto no-scrollbar whitespace-nowrap py-3.5">
            {departmentTabsList.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`cursor-pointer transition-all pb-1 border-b-2 select-none ${
                    isActive
                      ? 'text-primary border-primary font-extrabold shadow-xs'
                      : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                  }`}
                >
                  {tab.label}
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>

      {/* Breadcrumbs */}
      <div className="bg-background py-4 px-6 lg:px-12 border-b border-border md:hidden">
         <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Link to="/admissions" className="hover:text-foreground transition-colors">Admissions</Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-semibold truncate">{course.name}</span>
         </div>
      </div>

      {/* Hero Section */}
      <div className="w-full h-[70vh] md:h-[85vh] bg-muted">
        <img 
          src={course.image} 
          alt={course.name} 
          className="w-full h-full object-cover opacity-90"
        />
      </div>
        
      {/* Information Header Box */}
      <div className="relative -mt-24 md:-mt-32 left-0 w-full px-6 lg:px-12 z-10 flex justify-center md:justify-start max-w-[1440px] mx-auto right-0">
          <div className="bg-card w-full max-w-5xl shadow-xl p-8 md:p-12 lg:p-16 border border-border">
            
            {/* Course Name & Short Description */}
            <div className="mb-10">
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-card-foreground mb-4">
                 {course.name}
               </h1>
               <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                 {course.description}
               </p>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-border pt-8">
              <div>
                <span className="block text-[11px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Department</span>
                <span className="block text-sm md:text-base font-bold text-card-foreground">{course.department}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Level</span>
                <span className="block text-sm md:text-base font-bold text-card-foreground">{course.level}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Start date</span>
                <span className="block text-sm md:text-base font-bold text-card-foreground">{course.details.startDate}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Course length</span>
                <span className="block text-sm font-bold text-card-foreground leading-snug">{course.details.courseLength}</span>
              </div>
            </div>
          </div>
        </div>

      {/* Main Content Layout */}
      <div id="department-main-content" className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 md:pt-20 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Main Column: Clean Isolated Tab Content */}
        <div className="lg:col-span-8 order-1 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-8"
            >
              {/* Tab 1: About Department */}
              {activeTab === 'about' && (
                <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary">
                  {parsedContent['about'] ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {parsedContent['about']}
                    </ReactMarkdown>
                  ) : (
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">About Department</h2>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {course.details.overview}
                      </p>
                    </div>
                  )}
                </article>
              )}

              {/* Tab 2: OBE (Outcome Based Education) */}
              {activeTab === 'obe' && (
                <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary">
                  {parsedContent['obe'] ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {parsedContent['obe']}
                    </ReactMarkdown>
                  ) : (
                    <div className="space-y-8">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Outcome Based Education (OBE)</h2>
                      <div className="p-6 bg-card border border-border rounded-sm space-y-4">
                        <h4 className="font-bold text-lg text-foreground">Programme Educational Objectives (PEOs)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Graduates are prepared to analyze, design, develop, and test engineering solutions with creativity, modern tool usage, and leadership capabilities for societal and industrial growth.
                        </p>
                      </div>
                      <div className="p-6 bg-card border border-border rounded-sm space-y-4">
                        <h4 className="font-bold text-lg text-foreground">Program Specific Outcomes (PSOs)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Apply cutting-edge technologies and domain expertise to solve real-world problems and implement sustainable applications.
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              )}

              {/* Tab 3: JOB PROFILE */}
              {activeTab === 'job-profile' && (
                <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary">
                  {parsedContent['job-profile'] ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {parsedContent['job-profile']}
                    </ReactMarkdown>
                  ) : (
                    <div className="space-y-8">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Job Profile & Career Prospects</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                        {course.details.careers.map((role) => (
                          <div key={role} className="p-5 bg-card border border-border rounded-sm">
                            <span className="text-xs font-bold text-[#059669] uppercase tracking-widest block mb-1">Career Role</span>
                            <h4 className="font-bold text-base text-foreground">{role}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              )}

              {/* Tab 4: Faculty */}
              {activeTab === 'faculty' && (
                <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-border [&_th]:border [&_th]:border-border [&_th]:p-4 [&_th]:bg-muted [&_td]:border [&_td]:border-border [&_td]:p-4 [&_td]:align-top [&_th]:text-left [&_td:first-child]:whitespace-nowrap [&_th:first-child]:whitespace-nowrap [&_td:first-child]:min-w-[200px]">
                  {parsedContent['faculty'] ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {parsedContent['faculty']}
                    </ReactMarkdown>
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Department Faculty</h2>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        The department is powered by highly accomplished professors, doctorates, and researchers committed to student mentoring and outcome-based engineering education.
                      </p>
                    </div>
                  )}
                </article>
              )}

              {/* Tab 5: Department Facilities */}
              {activeTab === 'facilities' && (
                <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary">
                  {parsedContent['facilities'] ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {parsedContent['facilities']}
                    </ReactMarkdown>
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Department Facilities & Laboratories</h2>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        State-of-the-art laboratory infrastructure equipped with the latest software suites, hardware rigs, computing workstations, and industry-grade testing apparatus.
                      </p>
                    </div>
                  )}
                </article>
              )}

              {/* Tab 6: Academics */}
              {activeTab === 'academics' && (
                <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary">
                  {parsedContent['academics'] ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {parsedContent['academics']}
                    </ReactMarkdown>
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Academics & Curriculum</h2>
                      <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {course.details.courseUnits}
                      </div>
                    </div>
                  )}
                </article>
              )}

              {/* Tab 7: News and Events */}
              {activeTab === 'news-events' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 text-foreground">News & Events</h2>
                    <p className="text-sm text-muted-foreground">Latest happenings, guest lectures, seminars, and technical announcements from the department.</p>
                  </div>
                  
                  {parsedContent['news-events'] && (
                    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-p:text-muted-foreground">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {parsedContent['news-events']}
                      </ReactMarkdown>
                    </article>
                  )}

                  <div className="space-y-4">
                    {newsItems.map((item, idx) => (
                      <div key={idx} className="p-6 bg-card border border-border rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
                        <div>
                          <span className="text-[10px] font-bold text-[#059669] bg-[#059669]/10 px-2.5 py-1 rounded-sm uppercase tracking-widest inline-block mb-2">{item.date}</span>
                          <h4 className="font-bold text-card-foreground text-lg">{item.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">Organized by {course.name} Department, MSAJCE</p>
                        </div>
                        <Link to="/" className="text-xs font-bold text-primary hover:underline flex items-center gap-1 shrink-0 uppercase tracking-wider">
                          Details <ArrowRight size={14} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 8: Student Activities */}
              {activeTab === 'student-activities' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 text-foreground">Student Activities & Associations</h2>
                    <p className="text-sm text-muted-foreground">Active student-led technical chapters, national symposiums, hackathons, and cultural initiatives.</p>
                  </div>

                  {parsedContent['student-activities'] && (
                    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-p:text-muted-foreground">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {parsedContent['student-activities']}
                      </ReactMarkdown>
                    </article>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-card border border-border rounded-sm shadow-xs space-y-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm">01</div>
                      <h4 className="font-bold text-card-foreground text-lg">Department Technical Symposium</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Annual inter-collegiate technical festival featuring paper presentations, project expos, code debug contests, and circuit design tournaments.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-sm shadow-xs space-y-3">
                      <div className="w-10 h-10 rounded-full bg-[#059669]/10 flex items-center justify-center text-[#059669] font-black text-sm">02</div>
                      <h4 className="font-bold text-card-foreground text-lg">Hackathons & Coding Sprints</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Intensive 24-hour innovation hackathons focused on AI, sustainability, smart cities, and IoT product prototypes.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-sm shadow-xs space-y-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm">03</div>
                      <h4 className="font-bold text-card-foreground text-lg">Industry Expert Masterclasses</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Weekly technical lectures, hands-on tool bootcamps, and career orientation workshops delivered by corporate practitioners.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border rounded-sm shadow-xs space-y-3">
                      <div className="w-10 h-10 rounded-full bg-[#059669]/10 flex items-center justify-center text-[#059669] font-black text-sm">04</div>
                      <h4 className="font-bold text-card-foreground text-lg">Industrial Visits & Field Exposure</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Regular guided tours of leading industrial units, construction mega-sites, IT data centers, and advanced manufacturing hubs.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Sidebar: Extra Info, Stats & CTAs */}
        <div className="lg:col-span-4 order-2 relative">
          <div className="sticky top-28 space-y-6">
            
            {/* Widget 1: At a Glance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 rounded-sm border border-border shadow-xs"
            >
               <h4 className="font-bold text-primary mb-5 uppercase tracking-widest text-xs">At a Glance</h4>
               <ul className="space-y-4 text-sm">
                  <li className="flex justify-between border-b border-border pb-3">
                     <span className="text-muted-foreground font-medium">Total Intake</span>
                     <span className="font-bold text-foreground text-base">{course.intake}</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-3">
                     <span className="text-muted-foreground font-medium">Govt Quota</span>
                     <span className="font-bold text-foreground text-base">{course.govtQuota}</span>
                  </li>
                  <li className="flex justify-between pb-1">
                     <span className="text-muted-foreground font-medium">Mgmt Quota</span>
                     <span className="font-bold text-foreground text-base">{course.managementQuota}</span>
                  </li>
               </ul>
            </motion.div>

            {/* Widget 2: Contact info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-border p-6 rounded-sm bg-card shadow-xs"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs mb-3 text-foreground/70">Contact Department</h4>
              <p className="text-sm font-bold text-foreground mb-0.5">Head of Department</p>
              <p className="text-xs text-muted-foreground mb-5">hod.{course.department.toLowerCase()}@msajce.edu</p>
              <Link to="/contact" className="block text-center w-full py-3 bg-[#059669] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#059669]/90 transition-colors shadow-sm rounded-sm">
                Enquire Now
              </Link>
            </motion.div>

            {/* Widget 3: Live News & Events */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-primary text-primary-foreground p-6 rounded-sm min-h-[190px] flex flex-col justify-between shadow-md"
            >
               <h4 className="font-bold mb-3 uppercase tracking-widest text-xs opacity-85">News & Events</h4>
               <div className="flex-1 overflow-hidden relative">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={currentNews}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="py-2"
                    >
                      <span className="text-[10px] font-bold text-[#059669] bg-white px-2.5 py-0.5 rounded-sm inline-block mb-2 uppercase tracking-widest shadow-xs">{currentItem.date}</span>
                      <p className="text-sm font-bold leading-snug">{currentItem.title}</p>
                    </motion.div>
                 </AnimatePresence>
               </div>
               <button 
                 onClick={() => handleTabChange('news-events')}
                 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity mt-4 text-white text-left cursor-pointer"
               >
                  View all news <ArrowRight size={14} />
               </button>
            </motion.div>

            {/* Widget 4: Recruiters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-primary/10 p-6 rounded-sm bg-primary/5 shadow-xs"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs mb-3 text-primary">Top Recruiters</h4>
              <div className="flex flex-wrap gap-2">
                {course.details.recruiters.map((company: string) => (
                  <span key={company} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 bg-background border border-primary/20 text-primary shadow-xs rounded-full">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Widget 5: Career Opportunities */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="border border-border p-6 rounded-sm bg-card shadow-xs"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-foreground/70">Career Opportunities</h4>
              <ul className="space-y-2.5 text-sm font-semibold text-foreground">
                {course.details.careers.map((role: string) => (
                  <li key={role} className="flex items-start gap-2">
                    <span className="text-[#059669] mt-0.5">•</span> {role}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Widget 6: Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-border p-6 rounded-sm bg-card shadow-xs"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-foreground/70">Related Links</h4>
              <ul className="space-y-3.5 text-sm font-semibold text-foreground">
                <li><Link to="/academics" className="hover:text-[#059669] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Academic Rules</Link></li>
                <li><Link to="/placements" className="hover:text-[#059669] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Placement Records</Link></li>
                <li><Link to="/admissions" className="hover:text-[#059669] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Admission Process</Link></li>
              </ul>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
