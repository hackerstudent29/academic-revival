import { createFileRoute, Link } from '@tanstack/react-router';
import { allCourses } from '@/lib/courseData';
import { ArrowRight, ChevronRight, Award, BookOpen, Users, Building, Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { useEffect, useState, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { KeyDriversAccordion } from "@/components/KeyDriversAccordion";
import { DepartmentHighlightsGrid } from "@/components/DepartmentHighlightsGrid";

const markdownImports = import.meta.glob('@/content/departments/*.md', { query: '?raw', import: 'default' });

const NEWS_CATEGORIES = ['All', 'Placements', 'Research', 'Workshops', 'Seminars', 'Achievements'];

const categoryColors: Record<string, string> = {
  'Placements': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'Research': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'Workshops': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  'Seminars': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Achievements': 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
};

import { allEvents } from '@/lib/eventsData';
import { allFaculty } from '@/lib/facultyData';

const upcomingEventsData = allEvents.filter(e => e.id.startsWith('dept-') || e.id.startsWith('side-'));

const highlightsData = [
  { ...allEvents.find(e => e.id === 'featured-1'), className: "col-span-1 row-span-2" },
  { ...allEvents.find(e => e.id === 'featured-2'), className: "col-span-1 row-span-1" },
  { ...allEvents.find(e => e.id === 'featured-3'), className: "col-span-1 row-span-1" }
].filter(e => e.id);

const studentCoordinators: Record<string, Array<{
  name: string;
  designation: string;
  email: string;
  quote: string;
  photo: string;
}>> = {
  "computer-science-and-engineering": [
    {
      name: "Rahul Kumar S",
      designation: "Student Page Representative, IV Year, CSE",
      email: "rahul.cse@msajce-edu.in",
      quote: "Empowering student innovation through collaborative tech builds.",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Priya Dharshini M",
      designation: "Joint Page Representative, III Year, CSE",
      email: "priya.cse@msajce-edu.in",
      quote: "Bridging academic theory with real-world developers' sprint.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "information-technology": [
    {
      name: "Sanjay R",
      designation: "Student Page Representative, IV Year, IT",
      email: "sanjay.it@msajce-edu.in",
      quote: "Securing enterprise systems and network pipelines for tomorrow.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Deepa Lakshmi K",
      designation: "Joint Page Representative, III Year, IT",
      email: "deepa.it@msajce-edu.in",
      quote: "Architecting cloud-native solutions with agile engineering.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "artificial-intelligence-and-data-science": [
    {
      name: "Ashwin Kumar A",
      designation: "Student Page Representative, IV Year, AI&DS",
      email: "ashwin.aids@msajce-edu.in",
      quote: "Unlocking patterns in big data to drive algorithmic decision-making.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Meera Jasmine S",
      designation: "Joint Page Representative, III Year, AI&DS",
      email: "meera.aids@msajce-edu.in",
      quote: "Building ethical, fair, and scalable machine learning frameworks.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "artificial-intelligence-and-machine-learning": [
    {
      name: "Karthik Raja S",
      designation: "Student Page Representative, IV Year, AI&ML",
      email: "karthik.aiml@msajce-edu.in",
      quote: "Deepening our understanding of neural nets and autonomous learning agents.",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Shalini V",
      designation: "Joint Page Representative, III Year, AI&ML",
      email: "shalini.aiml@msajce-edu.in",
      quote: "Bridging human logic with scalable deep learning model paradigms.",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "computer-science-and-business-systems": [
    {
      name: "Abishek G",
      designation: "Student Page Representative, IV Year, CSBS",
      email: "abishek.csbs@msajce-edu.in",
      quote: "Aligning computer science solutions with strategic business analytics.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Nithya R",
      designation: "Joint Page Representative, III Year, CSBS",
      email: "nithya.csbs@msajce-edu.in",
      quote: "Integrating customer-centric tech tools into commercial systems.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "computer-science-and-engineering-cyber-security": [
    {
      name: "Rohit S",
      designation: "Student Page Representative, IV Year, Cyber Security",
      email: "rohit.cyber@msajce-edu.in",
      quote: "Defending systems against next-gen cyber threats and vector attacks.",
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Anjali M",
      designation: "Joint Page Representative, III Year, Cyber Security",
      email: "anjali.cyber@msajce-edu.in",
      quote: "Advocating cryptographically secure network protocols and systems.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "civil-engineering": [
    {
      name: "Hariharan M",
      designation: "Student Page Representative, IV Year, Civil",
      email: "hariharan.civil@msajce-edu.in",
      quote: "Building sustainable and earthquake-resistant smart city foundations.",
      photo: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Divya K",
      designation: "Joint Page Representative, III Year, Civil",
      email: "divya.civil@msajce-edu.in",
      quote: "Optimizing green building resources and structural design limits.",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "mechanical-engineering": [
    {
      name: "Vignesh R",
      designation: "Student Page Representative, IV Year, Mech",
      email: "vignesh.mech@msajce-edu.in",
      quote: "Reimagining thermal systems and next-generation autonomous robotics.",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Swathi S",
      designation: "Joint Page Representative, III Year, Mech",
      email: "swathi.mech@msajce-edu.in",
      quote: "Designing clean aerodynamic structures and lightweight systems.",
      photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "electrical-and-electronics-engineering": [
    {
      name: "Rajesh K",
      designation: "Student Page Representative, IV Year, EEE",
      email: "rajesh.eee@msajce-edu.in",
      quote: "Pioneering smart grid solutions and clean electric vehicle drivetrains.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Ramya V",
      designation: "Joint Page Representative, III Year, EEE",
      email: "ramya.eee@msajce-edu.in",
      quote: "Fostering robust power distribution layouts and solid-state units.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
    }
  ],
  "electronics-and-communication-engineering": [
    {
      name: "Dinesh S",
      designation: "Student Page Representative, IV Year, ECE",
      email: "dinesh.ece@msajce-edu.in",
      quote: "Connecting devices globally via next-generation IoT communication links.",
      photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Pavithra R",
      designation: "Joint Page Representative, III Year, ECE",
      email: "pavithra.ece@msajce-edu.in",
      quote: "Designing low-power analog chips and RF transceiver systems.",
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop"
    }
  ]
};

const getStudentCoordinators = (slug: string) => {
  const rootSlug = slug.replace(/^pg-/, '');
  if (studentCoordinators[rootSlug]) {
    return studentCoordinators[rootSlug];
  }
  
  // Generic fallback based on department root slug
  const cleanSlug = rootSlug.replace('-engineering', '').replace('bachelor-of-', '').replace('pg-', '');
  const prefix = cleanSlug.split('-').map(s => s[0]).join('').toUpperCase() || 'Dept';
  
  return [
    {
      name: `Arun Kumar M`,
      designation: `Student Page Representative, IV Year, ${prefix}`,
      email: `arun.${cleanSlug}@msajce-edu.in`,
      quote: "Driving collaborative engineering and industry-aligned seminars.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: `Kavitha R`,
      designation: `Joint Page Representative, III Year, ${prefix}`,
      email: `kavitha.${cleanSlug}@msajce-edu.in`,
      quote: "Fostering outcome-driven research and technical symposium setups.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop"
    }
  ];
};

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
    research: [],
  };

  if (!markdown) return {};

  const lines = markdown.split('\n');
  let currentTab = 'about';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      const heading = line.replace(/^##\s+/, '').toLowerCase();
      
      if (
        heading.includes('about') ||
        heading.includes('overview') ||
        heading.includes('welcome') ||
        heading.includes('introduction')
      ) {
        currentTab = 'about';
      } else if (
        heading.includes('obe') ||
        heading.includes('outcome based') ||
        heading.includes('peo') ||
        heading.includes('pso') ||
        heading.includes('outcome') ||
        heading.includes('objective')
      ) {
        currentTab = 'obe';
      } else if (
        heading.includes('job profile') ||
        heading.includes('career') ||
        heading.includes('employment') ||
        heading.includes('prospect') ||
        heading.includes('salary')
      ) {
        currentTab = 'job-profile';
      } else if (
        heading.includes('faculty') ||
        heading.includes('staff') ||
        heading.includes('professor')
      ) {
        currentTab = 'faculty';
      } else if (
        heading.includes('facilit') ||
        heading.includes('laborator') ||
        heading.includes('lab')
      ) {
        currentTab = 'facilities';
      } else if (
        heading.includes('academic') ||
        heading.includes('curriculum') ||
        heading.includes('syllabus') ||
        heading.includes('regulation') ||
        heading.includes('programme') ||
        heading.includes('course material') ||
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
        heading.includes('association') ||
        heading.includes('chapter')
      ) {
        currentTab = 'student-activities';
      } else if (
        heading.includes('research') ||
        heading.includes('publication') ||
        heading.includes('mou') ||
        heading.includes('patent') ||
        heading.includes('fdp')
      ) {
        currentTab = 'research';
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
    let content = val.join('\n').trim();
    result[key] = content;
  }
  return result;
}

const departmentTabsList = [
  { id: 'about', label: 'Overview' },
  { id: 'obe', label: 'Outcomes' },
  { id: 'academics', label: 'Curriculum & Syllabus' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'research', label: 'Research' },
  { id: 'job-profile', label: 'Careers' },
  { id: 'student-activities', label: 'Activities' },
  { id: 'news-events', label: 'Happenings' },
];

function CoursePage() {
  const { course, markdownContent } = Route.useLoaderData();
  const [hidden, setHidden] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [activeCategory, setActiveCategory] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (activeTab !== 'news-events') return;
    const timer = setInterval(() => {
      setStartIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeTab]);

  const parsedContent = parseDepartmentMarkdown(markdownContent);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const contentContainer = document.getElementById('department-main-content');
    if (contentContainer) {
      const yOffset = -120; // Slightly tighter offset so the content is clearly focused
      const y = contentContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      // Always smoothly scroll to the content area when a tab is clicked,
      // so the user immediately sees the new content even if they were at the hero section.
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 160) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const markdownComponents = {
    h2: ({ node, children, ...props }: any) => {
      const tabLabel = departmentTabsList.find(t => t.id === activeTab)?.label || children;
      return (
        <h2 className="text-primary font-black uppercase text-2xl md:text-3xl lg:text-4xl tracking-tight mb-10 mt-2 border-b-2 border-primary/20 pb-4" {...props}>
          {tabLabel}
        </h2>
      );
    },
    h3: ({ node, children, ...props }: any) => {
      const text = String(children);
      if (text.toUpperCase() === 'ABOUT DEPARTMENT' || text.toUpperCase() === 'DEPARTMENT INTRODUCTION') {
         return null;
      }

      return (
        <div className="mt-14 mb-6 department-h3-container">
          <h3 className="text-foreground font-serif text-2xl md:text-3xl tracking-tight" {...props}>
            {children}
          </h3>
        </div>
      );
    },
    h4: ({ node, children, ...props }: any) => (
      <h4 className="text-foreground font-bold text-base md:text-lg tracking-tight mt-8 mb-3 text-primary" {...props}>
        {children}
      </h4>
    ),
    p: ({ node, children, ...props }: any) => (
      <p className="text-muted-foreground text-base md:text-lg leading-[1.8] mb-8" {...props}>
        {children}
      </p>
    ),
    strong: ({ node, children, ...props }: any) => (
      <strong className="text-foreground font-bold" {...props}>
        {children}
      </strong>
    ),
    blockquote: ({ node, children, ...props }: any) => (
      <blockquote className="border-l-[3px] border-primary pl-6 py-2 my-10" {...props}>
        <p className="text-2xl md:text-3xl font-serif italic text-foreground leading-[1.4] tracking-tight m-0">
          {children}
        </p>
      </blockquote>
    ),
    table: ({ node, children, ...props }: any) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full text-left text-sm border-collapse border-y border-foreground/20" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ node, children, ...props }: any) => (
      <thead className="text-foreground uppercase text-[11px] tracking-widest font-black" {...props}>
        {children}
      </thead>
    ),
    th: ({ node, children, ...props }: any) => (
      <th className="p-4 font-black text-foreground border border-foreground/20 align-bottom" {...props}>
        {children}
      </th>
    ),
    td: ({ node, children, ...props }: any) => (
      <td className="p-4 text-foreground/80 align-top border border-foreground/20 font-medium" {...props}>
        {children}
      </td>
    ),
    ol: ({ node, children, ...props }: any) => (
      <ol style={{ listStyleType: 'decimal', listStylePosition: 'outside', paddingLeft: '1.25rem', marginLeft: '0', margin: '1.5rem 0' }} className="space-y-4 text-muted-foreground [&_ul]:pl-5 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ol]:pl-5" {...props}>
        {children}
      </ol>
    ),
    ul: ({ node, children, ...props }: any) => (
      <ul style={{ listStyleType: 'disc', listStylePosition: 'outside', paddingLeft: '1.25rem', marginLeft: '0', margin: '0.5rem 0 1rem 0' }} className="space-y-2 text-muted-foreground [&_ul]:pl-5 [&_ul]:mt-2 [&_ol]:pl-5" {...props}>
        {children}
      </ul>
    ),

    li: ({ node, children, ...props }: any) => {
      const rawText = node.children?.map((c: any) => c.value || (c.children ? c.children[0]?.value : '')).join('') || '';
      const missionMatch = rawText.match(/^([MV]\d*)\.\s*(.*)/);
      if (missionMatch) {
        return (
          <li className="flex items-start gap-4 mb-6 list-none -ml-5" {...props}>
            <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-xs mt-0.5">
              {missionMatch[1]}
            </span>
            <span className="text-muted-foreground leading-[1.8] text-base md:text-lg">{missionMatch[2]}</span>
          </li>
        );
      }
      return (
        <li style={{ display: 'list-item' }} className="leading-[1.8] text-muted-foreground text-base md:text-lg [&>p]:inline" {...props}>
          {children}
        </li>
      );
    },
    hr: ({ node, ...props }: any) => (
      <hr className="my-8 border-border" {...props} />
    ),
  };

  return (
    <div className="min-h-screen bg-[#EAEAEA] dark:bg-[#15141c]">
      {/* Sub Navigation Bar with Sticky Scroll Indicator */}
      <motion.div 
        animate={{ y: hidden ? -65 : 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="sticky top-[65px] z-40 w-full msajce-header-glass border-b border-foreground/10 hidden md:block"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-1 flex items-center justify-between">
          <div className="font-serif text-foreground tracking-tight text-lg md:text-xl mr-12 shrink-0 hidden lg:block">
            {course.shortName || course.name}
          </div>
          <div className="flex-1 overflow-hidden ml-8">
            <ul className="flex items-center gap-5 lg:gap-6 text-[13px] font-bold uppercase tracking-[0.04em] text-foreground overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] whitespace-nowrap py-0.5 w-full">
              {departmentTabsList.map((tab, index) => {
                const isActive = activeTab === tab.id;
                return (
                  <li
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative py-1.5 cursor-pointer transition-colors duration-200 select-none shrink-0 ${index === 0 ? 'ml-auto' : ''} ${
                      isActive
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`overlay-${course.id}`}
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 0, transition: { duration: 0.18, ease: "easeOut" } }}
          exit={{ opacity: 0.85, transition: { duration: 0.12, ease: "easeIn" } }}
          className="fixed inset-0 bg-background z-[100] pointer-events-none"
        />

        <motion.div
          key={`page-${course.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
          className="w-full flex flex-col"
        >

          {/* Hero Image Section (Flat & Static - No Zoom Animation) */}
          <div className="w-full h-[60vh] md:h-[75vh] bg-muted relative overflow-hidden">
            <img 
              src={course.image} 
              alt={course.name} 
              className="w-full h-full object-cover"
            />
          </div>
        
      {/* Information Header Box */}
      <div className="relative -mt-28 md:-mt-36 left-0 w-full px-6 lg:px-12 z-10 flex justify-center md:justify-start max-w-[1440px] mx-auto right-0">
        <div className="bg-[#EAEAEA] dark:bg-[#15141c] w-full max-w-5xl p-8 md:p-12 lg:p-14 border border-border rounded-none">
          
          {/* Course Name & Lead Statement */}
          <div className="mb-2">
             <span className="block text-[11px] font-bold text-primary mb-3 uppercase tracking-[0.2em]">
               Department of
             </span>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-foreground mb-6 leading-tight">
               {course.name}
             </h1>
             
             {/* Hero Strip */}
             <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] md:text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-6">
               <span>Est. 1999</span>
               <span className="w-1 h-1 rounded-full bg-border"></span>
               <span>NAAC Accredited</span>
               <span className="w-1 h-1 rounded-full bg-border"></span>
               <span className="text-foreground">{course.intake} Seats</span>
               <span className="w-1 h-1 rounded-full bg-border"></span>
               <span>Anna University Affiliated</span>
             </div>
             
             <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mt-6 border-t border-border/50 pt-6">
               {course.description}
             </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div id="department-main-content" className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-6 md:pt-8 pb-24">
        
        {/* Main Column: Clean Tab Content Area */}
        <div className="min-h-[500px] w-full max-w-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, scale: 0.99, filter: "blur(2px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Tab 1: About Department */}
              {activeTab === 'about' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {parsedContent['about'] ? (
                    (() => {
                      const aboutSections = parsedContent['about'].split('[DEPARTMENT_HIGHLIGHTS]');
                      return (
                        <>
                          {aboutSections.map((section, idx) => (
                            <Fragment key={idx}>
                              <article className="department-prose mx-0 max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                                  {section}
                                </ReactMarkdown>
                              </article>
                              {idx === 0 && aboutSections.length > 1 && (
                                <DepartmentHighlightsGrid course={course} />
                              )}
                            </Fragment>
                          ))}
                        </>
                      );
                    })()
                  ) : (
                    <article className="department-prose mx-0 max-w-none">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Overview</h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          {course.details.overview}
                        </p>
                      </div>
                    </article>
                  )}
                </div>
              )}

              {/* Tab 2: OBE (Outcome Based Education) */}
              {activeTab === 'obe' && (
                <article className="department-prose mx-0 max-w-none">
                  {parsedContent['obe'] ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {parsedContent['obe']}
                    </ReactMarkdown>
                  ) : (
                    <div className="space-y-8">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Outcomes</h2>
                      <div className="p-6 bg-card border border-border rounded-sm space-y-4 shadow-xs">
                        <h4 className="font-bold text-lg text-foreground">Programme Educational Objectives (PEOs)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Graduates are equipped to analyze, design, develop, and test modern engineering solutions with creativity, sustainability, and leadership.
                        </p>
                      </div>
                      <div className="p-6 bg-card border border-border rounded-sm space-y-4 shadow-xs">
                        <h4 className="font-bold text-lg text-foreground">Program Specific Outcomes (PSOs)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Apply cutting-edge domain tools and engineering frameworks to solve real-world problems and deliver industry-ready applications.
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              )}

              {/* Tab 3: JOB PROFILE */}
              {activeTab === 'job-profile' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  
                  {parsedContent['job-profile'] ? (
                    (() => {
                      const jobProfileSections = parsedContent['job-profile'].split('[KEY_DRIVERS_ACCORDION]');
                      return (
                        <>
                          {jobProfileSections.map((section, idx) => (
                            <Fragment key={idx}>
                              <article className="department-prose mx-0 max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                                  {section}
                                </ReactMarkdown>
                              </article>
                              {idx === 0 && jobProfileSections.length > 1 && (
                                <KeyDriversAccordion drivers={course.details.keyDrivers} />
                              )}
                            </Fragment>
                          ))}
                        </>
                      );
                    })()
                  ) : (
                    <div className="space-y-12">
                      <div className="max-w-3xl mb-12">
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-foreground">Careers & Outcomes</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          Graduates from the {course.name} department are highly sought after by top-tier global companies. The comprehensive curriculum equips you with the exact technical and professional skills needed to excel in these premier career roles.
                        </p>
                      </div>

                      {/* Career Roles - Compact Grid */}
                      <div className="mb-16">
                        <h3 className="text-lg font-black uppercase tracking-tighter mb-6 text-foreground border-b border-border/50 pb-2">Key Career Paths</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                          {course.details.careers.map((role) => (
                            <div key={role} className="flex items-center gap-3 py-2 border-b border-border/30 last:border-0 sm:last:border-b lg:last:border-b">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><path d="m9 18 6-6-6-6"/></svg>
                              <h4 className="font-bold text-sm md:text-base text-foreground/90">{role}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Top Recruiters Section - Logo Wall (Always Visible at bottom) */}
                  {course.details.recruiters && course.details.recruiters.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-border/50">
                      <h3 className="text-lg font-black uppercase tracking-tighter mb-10 text-foreground text-center">Top Hiring Partners</h3>
                      <div className="flex flex-wrap gap-10 md:gap-14 justify-center items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        {course.details.recruiters.map((recruiter, i) => {
                          const domains: Record<string, string> = {
                            "tcs": "tcs.com",
                            "infosys": "infosys.com",
                            "cognizant": "cognizant.com",
                            "wipro": "wipro.com",
                            "hcl technology": "hcltech.com",
                            "hcl technologies": "hcltech.com",
                            "tech mahindra": "techmahindra.com",
                            "intel": "intel.com",
                            "ibm": "ibm.com",
                            "fss": "fsstech.com",
                            "accenture": "accenture.com",
                            "l&t technology services": "ltts.com",
                            "l&t construction": "lntecc.com",
                            "tata projects": "tataprojects.com",
                            "sobha": "sobha.com",
                            "godrej properties": "godrejproperties.com",
                            "afcons": "afcons.com",
                            "zoho": "zoho.com",
                            "google": "google.com",
                            "microsoft": "microsoft.com",
                            "amazon": "amazon.com",
                            "cts": "cognizant.com"
                          };
                          const domain = domains[recruiter.toLowerCase()] || `${recruiter.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
                          
                          return (
                            <div key={i} className="group relative flex items-center justify-center h-10 md:h-12 w-auto max-w-[140px]">
                              <img 
                                src={`https://logo.clearbit.com/${domain}`} 
                                alt={`${recruiter} logo`}
                                className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all"
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement!.innerHTML = `<span class="font-black text-xl md:text-2xl tracking-tighter text-foreground/70">${recruiter.toUpperCase()}</span>`;
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Tab 4: Faculty */}
              {activeTab === 'faculty' && (() => {
                const deptFaculty = allFaculty.filter(f => f.departmentSlug === course.slug);
                const displayFaculty = deptFaculty.length > 0 ? deptFaculty : allFaculty.slice(0, 4);

                const hodFaculty = displayFaculty.find(f => f.designation.toLowerCase().includes('head')) || displayFaculty[0];
                const otherFaculty = displayFaculty.filter(f => f.id !== hodFaculty?.id);

                const renderFacultyCard = (faculty: any) => (
                  <div key={faculty.id} className="group relative flex flex-col bg-card border border-border rounded-sm shadow-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                    
                    {/* Image (Top Half - Full Width) */}
                    <div className="w-full aspect-square relative bg-muted overflow-hidden border-b border-border">
                      <img 
                        src={faculty.photo} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy" 
                      />
                    </div>

                    {/* Name & Designation (Bottom Half - Default State) */}
                    <div className="p-5 sm:p-6 flex flex-col bg-card z-10 relative flex-1 justify-center">
                      <h4 className="font-black text-foreground text-[16px] sm:text-[17px] tracking-tight mb-1.5 truncate">{faculty.name}</h4>
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary truncate">{faculty.designation}</p>
                    </div>

                    {/* Hover Overlay Details (Covers the entire card on hover) */}
                    <div className="absolute inset-0 bg-card/95 backdrop-blur-md p-4 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-y-4 group-hover:translate-y-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      
                      {/* Header inside hover */}
                      <div className="mb-2 shrink-0">
                        <h4 className="font-black text-foreground text-[15px] tracking-tight mb-0.5 line-clamp-1">{faculty.name}</h4>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-primary line-clamp-1">{faculty.designation}</p>
                      </div>

                      <div className="w-full h-px bg-border/60 mb-3 shrink-0" />

                      {/* Details */}
                      <div className="flex flex-col gap-1 mb-3 shrink-0">
                        <p className="text-[11px] font-semibold text-foreground/90"><span className="text-muted-foreground font-normal">Joined:</span> {faculty.dateOfJoining}</p>
                        <p className="text-[11px] font-semibold text-foreground/90"><span className="text-muted-foreground font-normal">Employment:</span> {faculty.association}</p>
                      </div>

                      {/* Courses Taught */}
                      <div className="mb-3 shrink-0">
                        <p className="text-[11px] text-foreground leading-relaxed">
                          <span className="font-bold text-foreground/80 block mb-0.5">Courses Taught (Current Sem):</span> 
                          Data Structures, Machine Learning
                        </p>
                      </div>

                      {/* Short Bio / Philosophy */}
                      <div className="mb-3 flex-1 shrink-0">
                        <p className="text-[11px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-3">
                          "{faculty.bio}"
                        </p>
                      </div>

                      {/* Footer Info (Email) */}
                      <div className="flex items-center pt-2 border-t border-border/40 text-[10px] font-semibold text-foreground/80 hover:text-primary transition-colors cursor-pointer w-fit mt-auto shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <span>{faculty.name.split(' ').pop()?.toLowerCase() || 'faculty'}@msajce-edu.in</span>
                      </div>

                    </div>
                  </div>
                );

                return (
                  <div className="space-y-12 mx-0 max-w-none">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 text-primary">Faculty</h2>
                      <p className="text-sm text-muted-foreground">The department is powered by accomplished professors, doctorates, and researchers committed to student mentoring and outcome-based engineering education.</p>
                    </div>

                    {hodFaculty && (
                      <div className="mb-14">
                        <h3 className="text-2xl md:text-3xl font-serif tracking-tight mb-8 text-foreground border-b border-border/50 pb-3">Head of Department</h3>
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 py-2">
                          {/* Left: Image & Identity */}
                          <div className="w-full md:w-[280px] shrink-0 flex flex-col">
                            <div className="w-full aspect-square bg-muted overflow-hidden rounded-sm border border-border mb-5">
                              <img src={hodFaculty.photo} alt={hodFaculty.name} className="w-full h-full object-cover filter hover:scale-105 transition-transform duration-700" loading="lazy" />
                            </div>
                            <h4 className="font-black text-foreground text-xl md:text-2xl tracking-tight mb-1">{hodFaculty.name}</h4>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">{hodFaculty.designation}</p>
                          </div>

                          {/* Right: Details (Always visible) */}
                          <div className="flex-1 flex flex-col justify-center py-2">
                            <div className="mb-8">
                              <h5 className="font-black text-sm text-foreground/80 uppercase tracking-widest mb-3">Biography & Vision</h5>
                              <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-4 py-1">
                                "{hodFaculty.bio}"
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                              <div>
                                <h6 className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest mb-1.5">Date of Joining</h6>
                                <p className="text-sm font-semibold text-foreground/90">{hodFaculty.dateOfJoining}</p>
                              </div>
                              <div>
                                <h6 className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest mb-1.5">Employment Type</h6>
                                <p className="text-sm font-semibold text-foreground/90">{hodFaculty.association}</p>
                              </div>
                            </div>

                            <div className="mb-8">
                              <h6 className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest mb-1.5">Courses Taught</h6>
                              <p className="text-sm font-semibold text-foreground/90">Data Structures, Machine Learning</p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-border/50 flex items-center gap-2 text-[13px] font-semibold text-primary/90 hover:text-primary transition-colors cursor-pointer w-fit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                              <span>{hodFaculty.name.split(' ').pop()?.toLowerCase() || 'faculty'}@msajce-edu.in</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {otherFaculty.length > 0 && (
                      <div>
                        <h3 className="text-2xl md:text-3xl font-serif tracking-tight mb-6 text-foreground border-b border-border/50 pb-3">Professors</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                          {otherFaculty.map(faculty => renderFacultyCard(faculty))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Tab 5: Department Facilities */}
              {activeTab === 'facilities' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <article className="department-prose mx-0 max-w-none">
                    {parsedContent['facilities'] ? (
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {parsedContent['facilities']}
                      </ReactMarkdown>
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Facilities</h2>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        State-of-the-art laboratory infrastructure equipped with the latest software suites, hardware rigs, computing workstations, and industry-grade testing apparatus.
                      </p>
                    </div>
                  )}
                </article>
                </div>
              )}

              {/* Tab 6: Academics */}
              {activeTab === 'academics' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <article className="department-prose mx-0 max-w-none">
                    {parsedContent['academics'] ? (
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {parsedContent['academics']}
                      </ReactMarkdown>
                    ) : (
                      <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-foreground">Curriculum & Syllabus</h2>
                        <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          {course.details.courseUnits}
                        </div>
                      </div>
                    )}
                  </article>
                </div>
              )}

              {/* Tab 7: News and Events */}
              {activeTab === 'news-events' && (() => {
                const filteredHighlights = activeCategory === 'All' ? highlightsData : highlightsData.filter(h => h.category === activeCategory);
                const filteredUpcoming = activeCategory === 'All' ? upcomingEventsData : upcomingEventsData.filter(e => e.category === activeCategory);

                const visibleUpcoming = [];
                if (filteredUpcoming.length > 0) {
                  for (let i = 0; i < Math.min(3, filteredUpcoming.length); i++) {
                    visibleUpcoming.push(filteredUpcoming[(startIndex + i) % filteredUpcoming.length]);
                  }
                }

                return (
                <div className="space-y-12">
                  <div className="mb-4">
                    <h2 className="text-primary font-black uppercase text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6 mt-2">
                      Happenings
                    </h2>
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2 border-b-2 border-primary/20 pb-4">
                      {NEWS_CATEGORIES.map(category => {
                        const isActive = activeCategory === category;
                        return (
                          <button
                            key={category}
                            onClick={() => {
                              setActiveCategory(category);
                              setStartIndex(0);
                            }}
                            className={`relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer outline-none ${
                              isActive 
                                ? 'text-primary-foreground' 
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            } rounded-full`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="activeCategoryPill"
                                className="absolute inset-0 bg-primary rounded-full z-0"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                              />
                            )}
                            <span className="relative z-10">{category}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left: Event Gallery */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center gap-3 border-b border-border pb-3">
                        <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Recent Highlights</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredHighlights.length > 0 ? filteredHighlights.slice(0, 4).map((highlight, idx) => (
                          <Link to={`/events/${highlight.id}`} key={idx} className="group flex flex-col gap-3 items-start">
                            <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden bg-muted">
                              <img src={highlight.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={highlight.title} />
                              <div className="absolute top-2 left-2">
                                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-background/90 text-foreground shadow-sm rounded-[2px]">
                                  {highlight.category}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start w-full">
                              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1.5 block">{highlight.date}</span>
                              <h4 className="text-[14px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                {highlight.title}
                              </h4>
                            </div>
                          </Link>
                        )) : (
                          <div className="col-span-1 sm:col-span-2 py-12 text-center text-muted-foreground italic text-sm border border-dashed border-border">No recent highlights in this category.</div>
                        )}
                      </div>
                      <p className="text-sm text-foreground/80 font-medium leading-relaxed mt-4">
                        Glimpses from our recent {course.name} symposiums, corporate guest lectures, and national-level hackathons. 
                        Our department fosters a vibrant ecosystem of technical learning and extracurricular engagement.
                      </p>
                    </div>

                    {/* Right: Upcoming Events */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center gap-3 border-b border-border pb-3">
                        <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Upcoming Events</h3>
                      </div>
                      
                      <div className="relative overflow-hidden flex flex-col gap-6">
                        <AnimatePresence initial={false} mode="popLayout">
                          {visibleUpcoming.length > 0 ? visibleUpcoming.map((item) => {
                            const dateObj = new Date(item.date);
                            return (
                              <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full shrink-0"
                              >
                                <Link to={`/events/${item.id}`} className="group flex flex-col">
                                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3 block">
                                    {item.category}
                                  </span>

                                  <div className="flex items-start gap-4">
                                    {/* Thumbnail */}
                                    <div className="relative w-[120px] xl:w-[140px] aspect-[3/2] rounded-[4px] overflow-hidden shrink-0 bg-muted">
                                      <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                      />
                                      {/* Date Badge Overlay */}
                                      {!isNaN(dateObj.getTime()) && (
                                        <div className="absolute top-2 left-2 bg-white dark:bg-background shadow-md rounded-[3px] overflow-hidden flex flex-col items-center justify-center min-w-[38px] border border-border/50">
                                          <span className="bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-widest w-full text-center py-0.5 leading-tight">
                                            {dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase()}
                                          </span>
                                          <span className="text-foreground text-[15px] leading-none font-black py-1.5 px-1">
                                            {dateObj.getDate()}
                                          </span>
                                        </div>
                                      )}
                                    </div>

                                    {/* Title */}
                                    <div className="flex flex-col justify-start flex-1 min-w-0 pt-1">
                                      <h4 className="text-[15px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                        {item.title}
                                      </h4>
                                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-2">
                                        Organized by {course.department} Dept.
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          }) : (
                            <div className="py-12 text-center text-muted-foreground italic text-sm border border-dashed border-border">No upcoming events in this category.</div>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      <div className="pt-4 mt-6">
                        <Link to="/contact" className="inline-flex items-center justify-center w-full py-4 border border-primary text-[12px] font-black text-primary uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
                          View All News & Events <ArrowRight size={14} className="ml-2" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );})()}

              {/* Tab 8: Student Activities */}
              {activeTab === 'student-activities' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                  {parsedContent['student-activities'] ? (
                    <article className="mx-0 max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {parsedContent['student-activities']}
                      </ReactMarkdown>
                    </article>
                  ) : (
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 text-foreground">Activities</h2>
                      <p className="text-sm text-muted-foreground">Active student-led technical chapters, national symposiums, hackathons, and industrial immersions.</p>
                    </div>
                  )}

                  {/* Editorial Activities Layout */}
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 pt-8">
                    
                    {/* Left Column: Chapters & Placements */}
                    <div className="flex-1 space-y-12">
                      <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-serif tracking-tight text-foreground border-b border-border pb-4">Student Chapters & Clubs</h3>
                        <div className="space-y-6">
                          {course.details.activities?.chapters?.map((chapter, idx) => (
                            <div key={idx}>
                              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{chapter.title}</h4>
                              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{chapter.description}</p>
                            </div>
                          )) || <p className="text-muted-foreground italic text-sm">Activities data not configured.</p>}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-serif tracking-tight text-foreground border-b border-border pb-4">Industrial Visits & Placements</h3>
                        <div className="space-y-6">
                          {course.details.activities?.placements?.map((placement, idx) => (
                            <div key={idx}>
                              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{placement.title}</h4>
                              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{placement.description}</p>
                            </div>
                          )) || <p className="text-muted-foreground italic text-sm">Placement data not configured.</p>}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Numbered Highlights (No Cards) */}
                    <div className="flex-1 space-y-10 border-l-0 lg:border-l border-border lg:pl-12">
                      {course.details.activities?.highlights?.map((highlight, idx) => (
                        <div key={idx} className="flex gap-6 items-start group cursor-default">
                          <div className="text-3xl md:text-4xl font-black text-muted-foreground/30 group-hover:text-primary transition-colors font-mono pt-1">
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">{highlight.title.replace(/^\d+\s*/, '')}</h4>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{highlight.description}</p>
                          </div>
                        </div>
                      )) || <p className="text-muted-foreground italic text-sm">Highlights data not configured.</p>}
                    </div>
                  </div>

                  {/* Student Coordinator Profiles */}
                  {(() => {
                    const coordinators = getStudentCoordinators(course.slug);
                    return (
                      <div className="pt-8 border-t border-border/50">
                        <div className="mb-8">
                          <h3 className="text-xl md:text-2xl font-serif tracking-tight text-foreground pb-2 border-b border-border/40">Student Page Representatives</h3>
                          <p className="text-xs text-muted-foreground mt-2">Student coordinators responsible for managing and maintaining this department's digital space.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                          {coordinators.map((coordinator, idx) => {
                            const [role, ...rest] = coordinator.designation.split(', ');
                            const yearDept = rest.join(', ');
                            return (
                              <div key={idx} className="flex flex-col sm:flex-row gap-6 py-6 border-b border-border/40 lg:border-b-0 last:border-0 items-start">
                                {/* Left: Student Photo Visual Anchor */}
                                <div className="w-[160px] shrink-0 mx-auto sm:mx-0">
                                  <div className="w-full aspect-square bg-muted overflow-hidden rounded-sm border border-border">
                                    <img 
                                      src={coordinator.photo} 
                                      alt={coordinator.name} 
                                      className="w-full h-full object-cover" 
                                      loading="lazy" 
                                    />
                                  </div>
                                </div>

                                {/* Right: Stacks Name, Designation, Quote, and Email */}
                                <div className="flex-1 flex flex-col justify-start text-left py-0.5">
                                  <div className="mb-3.5">
                                    <h4 className="font-black text-foreground text-lg tracking-tight mb-1">{coordinator.name}</h4>
                                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                                      <span className="text-primary">{role}</span>
                                      <span className="text-muted-foreground/60">•</span>
                                      <span className="text-[#059669]">{yearDept}</span>
                                    </div>
                                  </div>

                                  <div className="mb-5">
                                    <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-3 py-0.5">
                                      "{coordinator.quote}"
                                    </p>
                                  </div>

                                  <div className="pt-3 border-t border-border/30 flex items-center gap-2 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors cursor-pointer w-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    <a href={`mailto:${coordinator.email}`} className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors">{coordinator.email}</a>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Tab 9: Research */}
              {activeTab === 'research' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                  {parsedContent['research'] ? (
                    <article className="mx-0 max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                        {parsedContent['research']}
                      </ReactMarkdown>
                    </article>
                  ) : (
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 text-foreground">Research & Development</h2>
                      <p className="text-sm text-muted-foreground mb-8">Pioneering innovations, strategic partnerships, and academic excellence.</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="space-y-12">
                          <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-serif tracking-tight text-foreground border-b border-border pb-4">Publications & Patents</h3>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Research Publications</h4>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Our faculty and students actively publish in high-impact international journals and top-tier IEEE/ACM conferences.</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Patent Details</h4>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Fostering a culture of innovation with multiple patents filed and published in emerging technological domains.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-12">
                          <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-serif tracking-tight text-foreground border-b border-border pb-4">Collaborations & Projects</h3>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">MoU & Partnerships</h4>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Strategic Memorandums of Understanding (MoUs) with leading industries and academic institutions for knowledge exchange.</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Industrial Projects</h4>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Solving real-world challenges through government-funded and industry-sponsored consultancy projects.</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">FDPs Attended & Organized</h4>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Continuous learning via Faculty Development Programs (FDPs) to stay abreast with state-of-the-art technological advancements.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
