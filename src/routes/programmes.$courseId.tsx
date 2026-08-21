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

function CoursePage() {
  const { course, markdownContent } = Route.useLoaderData();
  const [hidden, setHidden] = useState(false);
  const [currentNews, setCurrentNews] = useState(0);
  const currentItem = newsItems[currentNews] || newsItems[0];
  const { scrollY } = useScroll();

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

  return (
    <div className="min-h-screen bg-background">
      {/* Sub Navigation */}
      <motion.div 
        animate={{ y: hidden ? -73 : 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="sticky top-[73px] z-40 bg-background border-b border-border hidden md:block"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ul className="flex items-center gap-8 text-sm font-semibold text-foreground overflow-x-auto whitespace-nowrap py-4">
            <li className="hover:text-primary cursor-pointer border-b-2 border-foreground pb-4 -mb-4">Course overview</li>
            <li className="hover:text-foreground cursor-pointer text-muted-foreground transition-colors">Student work</li>
            <li className="hover:text-foreground cursor-pointer text-muted-foreground transition-colors">Teaching staff</li>
            <li className="hover:text-foreground cursor-pointer text-muted-foreground transition-colors">Fees and funding</li>
            <li className="hover:text-foreground cursor-pointer text-muted-foreground transition-colors">Entry requirements</li>
            <li className="hover:text-foreground cursor-pointer text-muted-foreground transition-colors">Apply now</li>
            <li className="hover:text-foreground cursor-pointer text-muted-foreground transition-colors">Careers</li>
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
        
      {/* The White Info Box overlaying the bottom */}
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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Sidebar / Meta details */}
        <div className="lg:col-span-3 order-2 lg:order-1">
           <div className="sticky top-32 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary/5 p-6 rounded-sm border border-primary/10"
              >
                 <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">At a Glance</h4>
                 <ul className="space-y-4 text-sm">
                    <li className="flex justify-between border-b border-border pb-3">
                       <span className="text-muted-foreground">Total Intake</span>
                       <span className="font-semibold text-foreground">{course.intake}</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-3">
                       <span className="text-muted-foreground">Govt Quota</span>
                       <span className="font-semibold text-foreground">{course.govtQuota}</span>
                    </li>
                    <li className="flex justify-between pb-1">
                       <span className="text-muted-foreground">Mgmt Quota</span>
                       <span className="font-semibold text-foreground">{course.managementQuota}</span>
                    </li>
                 </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary text-primary-foreground p-6 rounded-sm min-h-[200px] flex flex-col justify-between shadow-lg"
              >
                 <h4 className="font-bold mb-4 uppercase tracking-widest text-xs opacity-80">News & Events</h4>
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
                        <span className="text-[10px] font-bold text-[#059669] bg-white/90 px-2 py-0.5 rounded-sm inline-block mb-3 uppercase tracking-widest">{currentItem.date}</span>
                        <p className="text-sm font-semibold leading-snug">{currentItem.title}</p>
                      </motion.div>
                   </AnimatePresence>
                 </div>
                 <Link to="/" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity mt-4 text-white">
                    View all news <ArrowRight size={14} />
                 </Link>
              </motion.div>
           </div>
        </div>

        {/* Right Column: Long form content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 order-1 lg:order-2"
        >
           {markdownContent ? (
             <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-8 prose-h2:mt-16 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-border [&_th]:border [&_th]:border-border [&_th]:p-4 [&_th]:bg-muted [&_td]:border [&_td]:border-border [&_td]:p-4 [&_td]:align-top [&_th]:text-left [&_td:first-child]:whitespace-nowrap [&_th:first-child]:whitespace-nowrap [&_td:first-child]:min-w-[220px]">
               <ReactMarkdown remarkPlugins={[remarkGfm]}>
                 {markdownContent}
               </ReactMarkdown>
             </article>
           ) : (
             <>
               <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-foreground">Why choose this course at MSAJCE</h2>
                  <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-6">
                    <p><strong className="text-foreground">Design focus:</strong> {course.details.overview.split('\n')[0]}</p>
                    <p><strong className="text-foreground">Pathway structure:</strong> {course.details.pathwayStructure}</p>
                    <p><strong className="text-foreground">Professionals and sponsors:</strong> {course.details.professionalsAndSponsors}</p>
                    <p><strong className="text-foreground">Industry networks:</strong> {course.details.industryNetworks}</p>
                    <p><strong className="text-foreground">Alumni success:</strong> {course.details.alumniSuccess}</p>
                  </div>
               </section>
    
               <div className="w-full h-px bg-border my-12" />
    
               <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-foreground">Course overview</h2>
                  <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-6 whitespace-pre-wrap">
                     {course.details.overview}
                  </div>
               </section>
    
               <div className="w-full h-px bg-border my-12" />
    
               <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-foreground">Course units</h2>
                  <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-6 whitespace-pre-wrap">
                     {course.details.courseUnits}
                  </div>
               </section>
    
               <div className="w-full h-px bg-border my-12" />
    
               <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-foreground">Optional Diploma Year</h2>
                  <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-6 whitespace-pre-wrap">
                     {course.details.optionalDiploma}
                  </div>
               </section>
             </>
           )}
        </motion.div>

        {/* Right Sidebar: Extra Info & CTAs */}
        <div className="lg:col-span-3 order-3 lg:order-3 relative">
          <div className="sticky top-40 space-y-8">
            {/* Widget 1: Contact info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-border p-6 rounded-sm bg-card shadow-sm"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 opacity-70">Contact Department</h4>
              <p className="text-sm font-semibold mb-1">Head of Department</p>
              <p className="text-xs text-muted-foreground mb-6">hod.{course.department.toLowerCase()}@msajce.edu</p>
              <Link to="/contact" className="block text-center w-full py-3 bg-[#059669] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#059669]/90 transition-colors shadow-md rounded-sm">
                Enquire Now
              </Link>
            </motion.div>

            {/* Widget 2: Recruiters */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-primary/10 p-6 rounded-sm bg-primary/5"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-primary">Top Recruiters</h4>
              <div className="flex flex-wrap gap-2">
                {course.details.recruiters.map((company: string) => (
                  <span key={company} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 bg-background border border-primary/20 text-primary shadow-sm rounded-full">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Widget 3: Career Opportunities */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-border p-6 rounded-sm bg-card shadow-sm"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 opacity-70">Career Opportunities</h4>
              <ul className="space-y-3 text-sm font-semibold text-foreground">
                {course.details.careers.map((role: string) => (
                  <li key={role} className="flex items-start gap-2">
                    <span className="text-[#059669] mt-1">•</span> {role}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Widget 4: Quick Links */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-border p-6 rounded-sm bg-card shadow-sm"
            >
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 opacity-70">Related Links</h4>
              <ul className="space-y-4 text-sm font-semibold text-foreground">
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
