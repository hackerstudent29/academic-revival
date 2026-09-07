import { createFileRoute, Link } from '@tanstack/react-router';
import { allCourses, Course } from '@/lib/courseData';
import { getDepartmentCurriculumSummary, getDepartmentOverviewDetails } from '@/lib/curriculumData';
import { getDepartmentResearchData } from '@/lib/departmentResearchData';
import { ArrowRight, ChevronRight, Award, BookOpen, Users, Building, Briefcase, GraduationCap, Calendar, CheckCircle2, Download, FileText, ExternalLink, X, Layers, Cpu, Sparkles, Check, Image as ImageIcon } from 'lucide-react';
import { useEffect, useState, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { KeyDriversAccordion } from "@/components/widgets/KeyDriversAccordion";
import { DepartmentHighlightsGrid } from "@/components/widgets/DepartmentHighlightsGrid";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

const DEPARTMENT_CURRICULUM_PDFS: Record<string, { name: string; pdf2024: string; pdf2021?: string; pdf2017?: string }> = {
  "civil-engineering": {
    name: "Civil Engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/101CIVIL24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "computer-science-and-engineering": {
    name: "Computer Science & Engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/102CSE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "cse-aiml": {
    name: "CSE (AI & Machine Learning)",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/103AIML24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "cse-cyber-security": {
    name: "CSE (Cyber Security)",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/104CSCS24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "electrical-and-electronics-engineering": {
    name: "Electrical & Electronics Engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/105EEE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "electronics-and-communication-engineering": {
    name: "Electronics & Communication Engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/106ECE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "mechanical-engineering": {
    name: "Mechanical Engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/107MECH24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "artificial-intelligence-and-data-science": {
    name: "Artificial Intelligence & Data Science",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/201AIDS24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "computer-science-and-business-systems": {
    name: "Computer Science & Business Systems",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/202CSBS24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "ece-advanced-communication": {
    name: "B.Tech ACT",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/203ACT24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "information-technology": {
    name: "Information Technology",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/205IT24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "pg-me-cse": {
    name: "M.E. Computer Science & Engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/MECSE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "pg-me-structural-engineering": {
    name: "M.E. Structural Engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/MECIVIL24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  "pg-me-vlsi-design": {
    name: "M.E. VLSI Design",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/204VLSI24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
};

function getDepartmentCurriculumPdfs(slug: string, courseName: string) {
  if (DEPARTMENT_CURRICULUM_PDFS[slug]) {
    return DEPARTMENT_CURRICULUM_PDFS[slug];
  }
  const s = slug.toLowerCase();
  for (const [key, val] of Object.entries(DEPARTMENT_CURRICULUM_PDFS)) {
    if (s.includes(key) || key.includes(s)) return val;
  }
  return {
    name: courseName,
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/102CSE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  };
}

function PdfViewerModal({ 
  triggerLabel, 
  triggerIcon: Icon, 
  pdfUrl, 
  title, 
  departmentName, 
  isPrimary = false 
}: { 
  triggerLabel: string, 
  triggerIcon: any, 
  pdfUrl: string, 
  title: string, 
  departmentName: string,
  isPrimary?: boolean
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`group relative flex-1 min-w-[160px] sm:min-w-[200px] flex items-center justify-between px-5 py-4 border transition-all duration-300 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-xs cursor-pointer ${
          isPrimary 
            ? "border-primary/40 bg-primary/10 text-primary hover:border-primary" 
            : "border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-white"
        }`}>
          {/* Liquid Ocean Wave Fill Overlay */}
          <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
            <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
              {/* Ocean Wave Crest SVG (Primary) */}
              <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                </svg>
              </span>
              {/* Secondary Depth Layer Wave */}
              <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                </svg>
              </span>
            </span>
          </span>

          {/* Content Layer */}
          <span className={`relative z-10 text-xs uppercase tracking-widest font-oswald flex items-center gap-2.5 transition-colors duration-300 ${
            isPrimary ? "font-black text-primary group-hover:text-white" : "font-bold text-foreground dark:text-white group-hover:text-white"
          }`}>
            <Icon className="w-4 h-4" /> {triggerLabel}
          </span>
          <ExternalLink className="relative z-10 w-4 h-4 text-foreground/70 dark:text-white/80 group-hover:text-white transition-all duration-300 shrink-0 ml-2" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[94vh] p-0 flex flex-col overflow-hidden bg-background border border-foreground/15 shadow-2xl [&>button]:hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
        
        {/* Modern Header */}
        <div className="flex items-center justify-between bg-foreground/5 px-5 py-3.5 border-b border-foreground/10">
          <div className="flex flex-col">
            <h2 className="text-lg font-black uppercase tracking-tight leading-none text-primary font-oswald">{departmentName}</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground font-oswald mt-1">{title} SYLLABUS &amp; REGULATION</p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              download
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold font-oswald uppercase tracking-wider bg-primary text-primary-foreground rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>
            <DialogClose asChild>
              <button className="p-2 text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs cursor-pointer">
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>
            </DialogClose>
          </div>
        </div>

        {/* PDF Mobile Fallback Notice */}
        <div className="sm:hidden flex items-center justify-between px-4 py-2 bg-foreground/10 text-foreground border-b border-foreground/20 font-oswald">
          <span className="text-xs font-bold uppercase tracking-wide font-oswald">Official Document PDF</span>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-black uppercase border-b border-foreground font-oswald pb-0.5">
             Download <Download className="w-3 h-3" />
          </a>
        </div>

        {/* PDF Iframe Viewer */}
        <div className="flex-1 w-full relative bg-foreground/5">
          <iframe 
            src={`${pdfUrl}#toolbar=0`} 
            className="absolute inset-0 w-full h-full border-none" 
            title={`${title} ${departmentName} Document`} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

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

interface LabFacility {
  id: string;
  name: string;
  code: string;
  image: string;
  capacity: string;
  area: string;
  description: string;
  equipment: string[];
  software: string[];
}

const cseLabFacilities: LabFacility[] = [
  {
    id: "c-ds-lab",
    name: "C & Data Structures Programming Laboratory",
    code: "CS8261 / CS3351",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop",
    capacity: "60 Workstations",
    area: "1,250 Sq. Ft. Air-Conditioned",
    description: "High-speed computing lab dedicated to foundational programming algorithms, linear/non-linear data structures, and memory optimization.",
    equipment: ["60 Intel Core i7 12th Gen Systems (16GB RAM, 512GB NVMe)", "1 Gbps Dedicated Fiber Leased Line", "Central 30 KVA Online UPS Power Backup"],
    software: ["GCC / G++ Compiler Suite", "Ubuntu Linux 22.04 LTS", "Visual Studio Code & Git"],
  },
  {
    id: "web-cloud-lab",
    name: "Web Technology & Full-Stack Application Lab",
    code: "CS8661 / IT8511",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop",
    capacity: "60 Workstations",
    area: "1,400 Sq. Ft. Air-Conditioned",
    description: "Modern enterprise web architecture studio for building cloud-native web APIs, microservices, and full-stack software suites.",
    equipment: ["High-Density Dell PowerEdge Blade Racks", "Interactive Digital Smart Board", "Cisco Gigabit Ethernet Switches"],
    software: ["React.js, Node.js, Express Frameworks", "MongoDB Enterprise, MySQL Workbench", "Docker & Kubernetes Orchestration Suite", "Postman API Suite"],
  },
  {
    id: "ai-gpu-center",
    name: "AI, Deep Learning & GPU Innovation Center",
    code: "AI3451 / AD8511",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop",
    capacity: "45 Workstations",
    area: "1,200 Sq. Ft. Air-Conditioned",
    description: "GPU-accelerated compute facility specialized for deep learning training, computer vision models, NLP, and generative AI research.",
    equipment: ["NVIDIA RTX GPU Workstation Rigs (CUDA Cores)", "High-Density Parallel Processing Compute Nodes", "4K Ultra-Wide Developer Monitors"],
    software: ["PyTorch & TensorFlow 2.x Frameworks", "OpenCV Image Processing Library", "JupyterLab & Anaconda Enterprise", "CUDA Toolkit & CuDNN Runtimes"],
  },
  {
    id: "networks-cyber-lab",
    name: "Networks, IoT & Cyber Forensic Security Lab",
    code: "CS8581 / CY3401",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&auto=format&fit=crop",
    capacity: "60 Workstations",
    area: "1,300 Sq. Ft. Air-Conditioned",
    description: "Simulated cyber defense operational center (SOC) for penetration testing, network packet analysis, and hardware IoT prototyping.",
    equipment: ["Cisco Managed Routers & 2960 Catalyst Switches", "Raspberry Pi 4 & Arduino Mega Hardware Kits", "Hardware Crypto Security USB Dongles"],
    software: ["Wireshark Network Protocol Analyzer", "Cisco Packet Tracer 8.x", "Snort Intrusion Detection System", "Kali Linux Penetration Tools"],
  },
  {
    id: "os-systems-lab",
    name: "Operating Systems & Systems Architecture Lab",
    code: "CS8461",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&auto=format&fit=crop",
    capacity: "60 Workstations",
    area: "1,250 Sq. Ft. Air-Conditioned",
    description: "Low-level kernel programming, process synchronization, system call implementation, and distributed filesystem experimentation environment.",
    equipment: ["Dual-Boot Intel Core i7 Systems", "Virtualization Workstation Clusters", "High-Speed Storage Area Network (SAN) Unit"],
    software: ["UNIX / Linux Kernel Development Suite", "Oracle VirtualBox & QEMU Emulator", "NASM Assembly & GCC Debugger"],
  },
];

const eceLabFacilities: LabFacility[] = [
  {
    id: "vlsi-eda-lab",
    name: "VLSI Design & Microprocessor Laboratory",
    code: "EC8661 / VL3201",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop",
    capacity: "60 Workstations",
    area: "1,300 Sq. Ft. Air-Conditioned",
    description: "State-of-the-art semiconductor IC layout design and FPGA hardware prototyping lab equipped with industry-standard EDA software.",
    equipment: ["Xilinx Artix-7 & Spartan-6 FPGA Trainer Boards", "8086 Microprocessor & 8051 Microcontroller Kits", "Logic Analyzers & Digital Storage Oscilloscopes"],
    software: ["Cadence Virtuoso IC Design Suite", "Xilinx Vivado Design Suite", "Keil MicroVision IDE & Proteus Simulator"],
  },
  {
    id: "comm-rf-lab",
    name: "Embedded Systems & RF Communication Lab",
    code: "EC8561",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop",
    capacity: "60 Workstations",
    area: "1,400 Sq. Ft. Air-Conditioned",
    description: "RF signal processing, antenna design, wireless transceiver testing, and optical communication infrastructure.",
    equipment: ["3 GHz Spectrum Analyzers & Vector Network Analyzers", "Optical Fiber Trainer Bench with Splicing Unit", "Microwave Bench & Horn Antenna Rigs"],
    software: ["MATLAB / Simulink with RF & Comm Toolboxes", "ANSYS HFSS Electromagnetics Suite", "LabVIEW System Design"],
  },
  {
    id: "power-drives-lab",
    name: "Power Electronics & Smart Grid Laboratory",
    code: "EE8661",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1000&auto=format&fit=crop",
    capacity: "60 Workstations",
    area: "1,500 Sq. Ft.",
    description: "Advanced power converter testing, electric vehicle motor drives, solar PV simulators, and smart grid automation setups.",
    equipment: ["IGBT / MOSFET Converter & Inverter Modules", "DC / AC Motor Generator Sets", "Digital Power Quality Analyzers"],
    software: ["PSCAD / EMTDC Power System Simulator", "MATLAB Simscape Power Systems", "ETAP Electrical Engineering Software"],
  },
];

const mechCivilLabFacilities: LabFacility[] = [
  {
    id: "cad-cam-studio",
    name: "CAD / CAM Design & Robotic Fabrication Studio",
    code: "ME8681 / CE8461",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop",
    capacity: "60 Workstations",
    area: "1,600 Sq. Ft. Air-Conditioned",
    description: "Computer-aided mechanical design, 3D printing prototyping, finite element analysis (FEA), and industrial robotic arm programming.",
    equipment: ["CNC Vertical Machining Center (VMC)", "High-Precision FDM 3D Printers", "6-Axis Industrial Robotic Arm Trainer"],
    software: ["AutoCAD Mechanical & Civil Suites", "SolidWorks 3D Modeling", "ANSYS Workbench (FEA & CFD)", "MasterCAM CNC Programming"],
  },
  {
    id: "structures-materials-lab",
    name: "Concrete & Advanced Structural Testing Laboratory",
    code: "CE8461",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=1000&auto=format&fit=crop",
    capacity: "60 Students",
    area: "1,800 Sq. Ft.",
    description: "Structural loading testbed for concrete beams, steel trusses, soil mechanics, and seismic-resistant building materials testing.",
    equipment: ["2000 kN Digital Compression Testing Machine", "100 Ton Universal Testing Machine (UTM)", "Soil Direct Shear Test Apparatus"],
    software: ["STAAD.Pro Structural Design", "ETABS Building Analysis", "Revit Structure BIM Suite"],
  },
];

function getFacilitiesForCourse(slug: string): LabFacility[] {
  const s = slug.toLowerCase();
  if (s.includes('ece') || s.includes('eee') || s.includes('vlsi') || s.includes('act')) {
    return [...eceLabFacilities, ...cseLabFacilities.slice(0, 2)];
  }
  if (s.includes('mech') || s.includes('civil') || s.includes('structural')) {
    return [...mechCivilLabFacilities, ...cseLabFacilities.slice(0, 2)];
  }
  return cseLabFacilities;
}

function DepartmentFacilitiesView({ courseSlug, courseName }: { courseSlug: string; courseName: string }) {
  const facilities = getFacilitiesForCourse(courseSlug);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12 w-full mx-0 max-w-none">
      
      {/* Header Banner */}
      <div className="border-b-2 border-primary/20 pb-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none mb-2">
          Facilities & Infrastructure
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-sans">
          State-of-the-art laboratory infrastructure equipped with high-performance computing rigs, specialized hardware suites, software environments, and dedicated research testbeds for {courseName}.
        </p>
      </div>

      {/* Facilities Side-by-Side Split Rows */}
      <div className="space-y-12 divide-y divide-border/60">
        {facilities.map((lab) => (
          <div
            key={lab.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 first:pt-0"
          >
            {/* Left Side: Lab Showcase Image (One Side) */}
            <div className="lg:col-span-5 w-full flex flex-col space-y-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border/80 bg-muted shadow-xs">
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-background/95 text-foreground text-[11px] font-bold font-oswald uppercase tracking-wider px-3 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs border border-border/60 shadow-xs">
                  Code: {lab.code}
                </div>

                {/* Modal Dialog for High-Res Photo & Full Specs */}
                <div className="absolute bottom-3 right-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary text-primary-foreground font-oswald text-xs font-bold uppercase tracking-wider rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-all shadow-md cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        View High-Res Photo
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 flex flex-col overflow-hidden bg-background border border-foreground/15 shadow-2xl rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                      <div className="flex items-center justify-between bg-foreground/5 px-6 py-4 border-b border-foreground/10">
                        <div>
                          <h3 className="text-lg font-black uppercase text-primary font-oswald leading-tight">
                            {lab.name}
                          </h3>
                          <span className="text-xs font-bold text-foreground/80 font-mono">
                            Course Code: {lab.code} | {lab.capacity} | {lab.area}
                          </span>
                        </div>
                        <DialogClose asChild>
                          <button className="p-2 text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs cursor-pointer">
                            <X className="w-5 h-5" />
                          </button>
                        </DialogClose>
                      </div>

                      <div className="p-6 overflow-y-auto space-y-6">
                        <div className="relative aspect-[16/9] w-full rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-xs">
                          <img
                            src={lab.image}
                            alt={lab.name}
                            className="w-full h-full object-cover block"
                          />
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-black text-foreground font-oswald uppercase text-base border-b border-border pb-1">
                            Overview & Specifications
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                            {lab.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="space-y-2">
                              <h5 className="font-bold text-xs uppercase tracking-wider text-primary font-oswald">
                                Hardware Rigs & Infrastructure
                              </h5>
                              <ul className="space-y-1 text-xs text-foreground/90 font-sans list-disc list-inside">
                                {lab.equipment.map((eq, i) => (
                                  <li key={i}>{eq}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h5 className="font-bold text-xs uppercase tracking-wider text-primary font-oswald">
                                Software Suites & License Runtimes
                              </h5>
                              <ul className="space-y-1 text-xs text-foreground/90 font-sans list-disc list-inside">
                                {lab.software.map((sw, i) => (
                                  <li key={i}>{sw}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono font-semibold text-muted-foreground px-1">
                <span>Capacity: {lab.capacity}</span>
                <span>Area: {lab.area}</span>
              </div>
            </div>

            {/* Right Side: Content About the Lab (Other Side) */}
            <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-foreground font-oswald uppercase tracking-tight leading-snug mb-2">
                  {lab.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {lab.description}
                </p>
              </div>

              {/* Hardware Rigs & Software Environments */}
              <div className="space-y-4 pt-2 border-t border-border/50">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-primary font-oswald block mb-2">
                    Hardware Equipment & Computing Rigs
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {lab.equipment.map((eq, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 text-xs font-semibold bg-foreground/[0.04] border border-border/80 text-foreground/90 rounded-xs"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-foreground font-oswald block mb-2">
                    Software Environments & Licenses
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {lab.software.map((sw, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 text-xs font-medium bg-muted/60 border border-border/70 text-muted-foreground rounded-xs font-mono"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

function DepartmentResearchView({ courseSlug, courseName }: { courseSlug: string; courseName: string }) {
  const researchData = getDepartmentResearchData(courseSlug);

  const publications = [
    {
      title: "Deep Learning Architectures for Autonomous Edge Computing Systems",
      authors: "Dr. E. Mohan, Dr. R. Vijayarangan",
      journal: "IEEE Transactions on Cloud Computing",
      indexing: "Scopus / Web of Science",
      year: "2024",
    },
    {
      title: "Blockchain-based Secure Data Aggregation in Smart Grid Networks",
      authors: "Dr. S. Jeyanthi, Mr. S. Vimalathithan",
      journal: "Springer Journal of Supercomputing",
      indexing: "Scopus",
      year: "2024",
    },
    {
      title: "Lightweight Cryptographic Protocols for Resource-Constrained IoT Devices",
      authors: "Mr. V. Pandarinathan, Mrs. M. S. Aishwarya",
      journal: "ACM Transactions on Embedded Systems",
      indexing: "Scopus / WoS",
      year: "2023",
    },
    {
      title: "Neural Network Optimizations for Real-Time Medical Image Segmentation",
      authors: "Dr. J. Paramesh, Mrs. S. Gayathri",
      journal: "Elsevier Computers in Biology and Medicine",
      indexing: "Scopus / Web of Science",
      year: "2023",
    },
  ];

  const patents = [
    {
      title: "AI-Driven Automated Crop Disease Detection System Using Edge Vision",
      appNo: "202441012345 A",
      inventors: "Dr. E. Mohan, Dr. S. Jeyanthi",
      domain: "Artificial Intelligence / Agriculture",
      status: "Published",
    },
    {
      title: "Smart Energy Meter with Cryptographic Blockchain Validation Unit",
      appNo: "202341098765 A",
      inventors: "Dr. R. Vijayarangan, Mr. S. Vimalathithan",
      domain: "Cybersecurity & Smart Grid",
      status: "Published",
    },
  ];

  const fundedProjects = [
    {
      title: "Design & Implementation of High-Performance CUDA-Accelerated Deep Learning Rigs",
      agency: "DST-SERB (Government of India)",
      amount: "₹18.50 Lakhs",
      duration: "3 Years (2022–2025)",
    },
    {
      title: "IoT-Based Smart Water Quality & Environmental Monitoring Infrastructure",
      agency: "TNSCST / Industry Sponsored",
      amount: "₹8.20 Lakhs",
      duration: "2 Years (2023–2025)",
    },
    {
      title: "Modernization of Cloud Computing & AI Research Infrastructure",
      agency: "AICTE MODROBS Scheme",
      amount: "₹25.00 Lakhs",
      duration: "Completed",
    },
  ];

  const corporateMoUs = [
    { name: "Tata Consultancy Services (TCS)", scope: "Curriculum Alignment, Guest Lectures & Industrial Placement Drives" },
    { name: "Infosys Campus Connect", scope: "Faculty Enablement & Foundation Program Certification" },
    { name: "Cisco Networking Academy", scope: "CCNA & Cyber Security Professional Certifications" },
    { name: "Zoho Corporation", scope: "Cloud Software Development Sprints & Product Internships" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12 w-full mx-0 max-w-none">
      
      {/* Header Banner */}
      <div className="border-b-2 border-primary/20 pb-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none mb-2">
          Research & Development
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-sans">
          Pioneering industrial research, patents, Scopus-indexed journal publications, funded consultancy projects, and active industry MoUs in {courseName}.
        </p>
      </div>

      {/* R&D Impact Stats Strip - Clean Border Lines, No White Card Backgrounds */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-border/80 divide-x divide-y md:divide-y-0 divide-border/60 rounded-sm overflow-hidden bg-transparent">
        <div className="p-6 space-y-1 bg-transparent">
          <span className="text-2xl md:text-3xl font-black text-primary font-oswald block">65+</span>
          <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">Scopus / WoS Papers</span>
        </div>
        <div className="p-6 space-y-1 bg-transparent">
          <span className="text-2xl md:text-3xl font-black text-primary font-oswald block">14+</span>
          <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">Patents Filed</span>
        </div>
        <div className="p-6 space-y-1 bg-transparent">
          <span className="text-2xl md:text-3xl font-black text-primary font-oswald block">₹51.7L</span>
          <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">Research Grants</span>
        </div>
        <div className="p-6 space-y-1 bg-transparent">
          <span className="text-2xl md:text-3xl font-black text-primary font-oswald block">18+</span>
          <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">Corporate MoUs</span>
        </div>
      </div>

      {/* Official Department Research Document Downloads (Matching official MSAJCE portal) */}
      <div className="space-y-6 border-b border-border/60 pb-8">
        <h3 className="text-xl font-black uppercase tracking-tight text-foreground font-oswald border-b border-border/60 pb-2 flex items-center justify-between">
          <span>Official Research Documents &amp; Files</span>
          <span className="text-xs font-bold text-primary font-oswald uppercase">Official Portal Records</span>
        </h3>

        {/* Primary Action Documents: MOU, Industrial Projects, Patent Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {researchData.mouUrl && (
            <div className="p-4 border border-border/80 bg-transparent rounded-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-xs text-primary shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-sm font-oswald uppercase">MOU Details</h4>
                  <p className="text-[11px] text-muted-foreground font-sans">Official Department MoU</p>
                </div>
              </div>
              <a
                href={researchData.mouUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="p-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-xs transition-colors shrink-0"
                title="Download MOU Details PDF"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          )}

          {researchData.industrialProjectsUrl && (
            <div className="p-4 border border-border/80 bg-transparent rounded-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-xs text-primary shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-sm font-oswald uppercase">Industrial Projects</h4>
                  <p className="text-[11px] text-muted-foreground font-sans">Industry Projects Record</p>
                </div>
              </div>
              <a
                href={researchData.industrialProjectsUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="p-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-xs transition-colors shrink-0"
                title="Download Industrial Projects PDF"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          )}

          {researchData.patentDetailsUrl && (
            <div className="p-4 border border-border/80 bg-transparent rounded-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-xs text-primary shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-sm font-oswald uppercase">Patent Details</h4>
                  <p className="text-[11px] text-muted-foreground font-sans">Patents &amp; IPR Grants</p>
                </div>
              </div>
              <a
                href={researchData.patentDetailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="p-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-xs transition-colors shrink-0"
                title="Download Patent Details PDF"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Publications Year-wise PDF Grid */}
        {researchData.publications && researchData.publications.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-foreground font-oswald">
              Publications (Yearly PDF Archives)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {researchData.publications.map((pub, idx) => (
                <a
                  key={idx}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="group p-3 border border-border/80 hover:border-primary/60 bg-transparent rounded-sm flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <div className="p-2 bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 rounded-xs shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-bold font-oswald text-foreground group-hover:text-primary transition-colors truncate" title={pub.title}>
                      {pub.title}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1">
                      Download PDF <Download className="w-2.5 h-2.5 inline" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* FDP Attended Details Year-wise PDF Grid */}
        {researchData.fdps && researchData.fdps.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-foreground font-oswald">
              FDP Attended Details (Yearly PDF Archives)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {researchData.fdps.map((fdp, idx) => (
                <a
                  key={idx}
                  href={fdp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="group p-3 border border-border/80 hover:border-primary/60 bg-transparent rounded-sm flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <div className="p-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-xs shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-bold font-oswald text-foreground group-hover:text-primary transition-colors truncate" title={fdp.title}>
                      {fdp.title}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1">
                      Download PDF <Download className="w-2.5 h-2.5 inline" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Section 1: Research Publications Table */}
      <div className="space-y-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-foreground font-oswald border-b border-border/60 pb-2">
          Featured Research Publications
        </h3>
        <div className="overflow-x-auto w-full border border-border/80 rounded-sm">
          <table className="w-full text-left border-collapse text-sm bg-transparent">
            <thead>
              <tr className="bg-muted/40 border-b border-border/80 text-foreground font-oswald uppercase text-xs tracking-wider">
                <th className="py-3 px-4.5 font-black border-r border-border/50">Paper Title</th>
                <th className="py-3 px-4 font-black border-r border-border/50 w-[200px]">Authors</th>
                <th className="py-3 px-4 font-black border-r border-border/50 w-[220px]">Journal / Publisher</th>
                <th className="py-3 px-4 font-black border-r border-border/50 w-[140px]">Indexing</th>
                <th className="py-3 px-3.5 font-black w-[70px] text-center">Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 font-sans text-xs sm:text-sm">
              {publications.map((pub, idx) => (
                <tr key={idx} className="hover:bg-muted/20 transition-colors">
                  <td className="py-3.5 px-4.5 align-middle border-r border-border/50 font-semibold text-foreground">
                    {pub.title}
                  </td>
                  <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs text-muted-foreground font-medium">
                    {pub.authors}
                  </td>
                  <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs font-bold text-primary">
                    {pub.journal}
                  </td>
                  <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs font-mono font-medium text-foreground/80">
                    {pub.indexing}
                  </td>
                  <td className="py-3.5 px-3.5 align-middle text-center font-mono text-xs font-bold text-muted-foreground">
                    {pub.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Patent Filings Table */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xl font-black uppercase tracking-tight text-foreground font-oswald border-b border-border/60 pb-2">
          Patents Filed & Published
        </h3>
        <div className="overflow-x-auto w-full border border-border/80 rounded-sm">
          <table className="w-full text-left border-collapse text-sm bg-transparent">
            <thead>
              <tr className="bg-muted/40 border-b border-border/80 text-foreground font-oswald uppercase text-xs tracking-wider">
                <th className="py-3 px-4.5 font-black border-r border-border/50">Patent Title</th>
                <th className="py-3 px-4 font-black border-r border-border/50 w-[160px]">Application No.</th>
                <th className="py-3 px-4 font-black border-r border-border/50 w-[200px]">Inventors</th>
                <th className="py-3 px-4 font-black border-r border-border/50 w-[180px]">Domain</th>
                <th className="py-3 px-4 font-black w-[110px] text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 font-sans text-xs sm:text-sm">
              {patents.map((pat, idx) => (
                <tr key={idx} className="hover:bg-muted/20 transition-colors">
                  <td className="py-3.5 px-4.5 align-middle border-r border-border/50 font-semibold text-foreground">
                    {pat.title}
                  </td>
                  <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs font-mono text-primary font-bold">
                    {pat.appNo}
                  </td>
                  <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs text-muted-foreground font-medium">
                    {pat.inventors}
                  </td>
                  <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs font-medium text-foreground/80">
                    {pat.domain}
                  </td>
                  <td className="py-3.5 px-4 align-middle text-center">
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 rounded-xs font-oswald">
                      {pat.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Funded R&D Projects Table */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xl font-black uppercase tracking-tight text-foreground font-oswald border-b border-border/60 pb-2">
          Sponsored R&D & Consultancy Projects
        </h3>
        <div className="overflow-x-auto w-full border border-border/80 rounded-sm">
          <table className="w-full text-left border-collapse text-sm bg-transparent">
            <thead>
              <tr className="bg-muted/40 border-b border-border/80 text-foreground font-oswald uppercase text-xs tracking-wider">
                <th className="py-3 px-4.5 font-black border-r border-border/50">Project Title</th>
                <th className="py-3 px-4 font-black border-r border-border/50 w-[220px]">Sponsoring Agency</th>
                <th className="py-3 px-4 font-black border-r border-border/50 w-[140px]">Sanctioned Amount</th>
                <th className="py-3 px-4 font-black w-[150px]">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 font-sans text-xs sm:text-sm">
              {fundedProjects.map((proj, idx) => (
                <tr key={idx} className="hover:bg-muted/20 transition-colors">
                  <td className="py-3.5 px-4.5 align-middle border-r border-border/50 font-semibold text-foreground">
                    {proj.title}
                  </td>
                  <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs font-bold text-primary">
                    {proj.agency}
                  </td>
                  <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs font-mono font-bold text-foreground">
                    {proj.amount}
                  </td>
                  <td className="py-3.5 px-4 align-middle text-xs font-medium text-muted-foreground">
                    {proj.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 4: Industry MoUs & Corporate Collaborations - Clean Border Lines */}
      <div className="space-y-4 pt-2 border-t border-border/50">
        <h3 className="text-xl font-black uppercase tracking-tight text-foreground font-oswald border-b border-border/60 pb-2">
          Strategic Industry MoUs & Partnerships
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {corporateMoUs.map((mou, idx) => (
            <div
              key={idx}
              className="p-4 border border-border/80 bg-transparent rounded-sm space-y-1"
            >
              <h4 className="font-black text-foreground text-sm font-oswald uppercase tracking-tight">
                {mou.name}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                {mou.scope}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

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
    if (!line) continue;

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

    if (line && sections[currentTab]) {
      if (!line.startsWith('# ')) {
        sections[currentTab]?.push(line);
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
  { id: 'academics', label: 'Curriculum' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'research', label: 'Research' },
  { id: 'job-profile', label: 'Careers' },
  { id: 'student-activities', label: 'Activities' },
  { id: 'news-events', label: 'Happenings' },
];

function getDepartmentHeaderTitle(course?: { name: string; shortName?: string; slug?: string }) {
  if (!course) return '';
  const slug = course.slug?.toLowerCase() || '';
  if (slug.includes('vlsi')) return 'Electronics & Comm. Engg (VLSI)';
  if (slug.includes('act') || slug.includes('advanced-communication')) return 'Electronics & Comm. Engg (ACT)';
  if (slug.includes('cyber')) return 'Computer Science & Engg (Cyber Security)';
  if (slug.includes('aids') || slug.includes('data-science')) return 'Artificial Intelligence & Data Science';
  if (slug.includes('aiml') || slug.includes('machine-learning')) return 'Artificial Intelligence & Machine Learning';
  if (slug.includes('csbs') || slug.includes('business-systems')) return 'Computer Science & Business Systems';
  return course.name;
}

function getHeroTitle(course?: { name: string; slug?: string }) {
  if (!course) return '';
  const slug = course.slug?.toLowerCase() || '';
  if (slug.includes('cyber')) return 'Computer Science & Engg (Cyber Security)';
  if (slug.includes('vlsi')) return 'Electronics & Comm. Engg (VLSI)';
  if (slug.includes('act') || slug.includes('advanced-communication')) return 'Electronics & Comm. Engg (ACT)';
  return course.name;
}

function CoursePage() {
  const { course, markdownContent } = Route.useLoaderData();
  const [activeTab, setActiveTab] = useState('about');
  const [activeCategory, setActiveCategory] = useState('All');
  const [startIndex, setStartIndex] = useState(0);

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
    requestAnimationFrame(() => {
      const contentContainer = document.getElementById('department-main-content');
      if (contentContainer) {
        const yOffset = -120;
        const y = contentContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const markdownComponents = {
    h2: ({ node, children, ...props }: any) => {
      const tabLabel = departmentTabsList.find(t => t.id === activeTab)?.label || children;
      return (
        <h2 className="text-primary font-oswald font-black uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4 sm:mb-8 border-b-2 border-primary/20 pb-3 sm:pb-4 break-words leading-tight" {...props}>
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
        <div className="mt-6 sm:mt-10 mb-3 sm:mb-4 department-h3-container">
          <h3 className="text-foreground font-oswald font-black uppercase text-base sm:text-xl md:text-2xl tracking-tight leading-snug break-words" {...props}>
            {children}
          </h3>
        </div>
      );
    },
    h4: ({ node, children, ...props }: any) => (
      <h4 className="text-foreground font-oswald font-bold text-sm sm:text-base md:text-lg tracking-tight mt-4 sm:mt-6 mb-2 leading-snug break-words" {...props}>
        {children}
      </h4>
    ),
    p: ({ node, children, ...props }: any) => (
      <p className="text-foreground/85 font-sans text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[1.8] mb-4 sm:mb-6 break-words" {...props}>
        {children}
      </p>
    ),
    strong: ({ node, children, ...props }: any) => (
      <strong className="text-foreground font-bold" {...props}>
        {children}
      </strong>
    ),
    blockquote: ({ node, children, ...props }: any) => (
      <blockquote className="border-l-[4px] border-primary pl-4 sm:pl-6 py-2 my-6 sm:my-8 bg-muted/30" {...props}>
        <p className="text-base sm:text-xl md:text-2xl font-oswald italic text-foreground leading-[1.4] tracking-tight m-0 break-words">
          {children}
        </p>
      </blockquote>
    ),
    table: ({ node, children, ...props }: any) => (
      <div className="w-full overflow-x-auto my-6 sm:my-8 border border-border shadow-2xs rounded-sm max-w-full">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[520px]" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ node, children, ...props }: any) => (
      <thead className="bg-muted/60 text-foreground uppercase text-[10px] sm:text-[11px] font-oswald tracking-widest font-bold" {...props}>
        {children}
      </thead>
    ),
    th: ({ node, children, ...props }: any) => (
      <th className="p-2.5 sm:p-3.5 font-oswald font-bold text-foreground border border-border align-bottom whitespace-nowrap sm:whitespace-normal" {...props}>
        {children}
      </th>
    ),
    td: ({ node, children, ...props }: any) => (
      <td className="p-2.5 sm:p-3.5 text-foreground/90 font-sans align-top border border-border font-medium text-xs sm:text-sm leading-relaxed break-words" {...props}>
        {children}
      </td>
    ),
    ol: ({ node, children, ...props }: any) => (
      <ol style={{ listStyleType: 'decimal', listStylePosition: 'outside', paddingLeft: '1.25rem', marginLeft: '0', margin: '1.5rem 0' }} className="space-y-3 sm:space-y-4 text-foreground/80 font-sans [&_ul]:pl-4 sm:[&_ul]:pl-5 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ol]:pl-4 sm:[&_ol]:pl-5 break-words" {...props}>
        {children}
      </ol>
    ),
    ul: ({ node, children, ...props }: any) => (
      <ul style={{ listStyleType: 'disc', listStylePosition: 'outside', paddingLeft: '1.25rem', marginLeft: '0', margin: '0.5rem 0 1rem 0' }} className="space-y-2 text-foreground/80 font-sans [&_ul]:pl-4 sm:[&_ul]:pl-5 [&_ul]:mt-2 [&_ol]:pl-4 sm:[&_ol]:pl-5 break-words" {...props}>
        {children}
      </ul>
    ),

    li: ({ node, children, ...props }: any) => {
      const rawText = node.children?.map((c: any) => c.value || (c.children ? c.children[0]?.value : '')).join('') || '';
      const missionMatch = rawText.match(/^([MV]\d*)\.\s*(.*)/);
      if (missionMatch) {
        return (
          <li className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 list-none -ml-4 sm:-ml-5" {...props}>
            <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-[11px] sm:text-xs mt-0.5 border border-foreground/20 shadow-2xs">
              {missionMatch[1]}
            </span>
            <span className="text-foreground/90 font-sans leading-relaxed sm:leading-[1.7] text-sm sm:text-base md:text-lg break-words">{missionMatch[2]}</span>
          </li>
        );
      }
      return (
        <li style={{ display: 'list-item' }} className="leading-relaxed sm:leading-[1.7] text-foreground/90 font-sans text-sm sm:text-base md:text-lg [&>p]:inline break-words" {...props}>
          {children}
        </li>
      );
    },
    hr: ({ node, ...props }: any) => (
      <hr className="my-6 sm:my-8 border-border" {...props} />
    ),
  };

  return (
    <div className="min-h-screen bg-page-bg text-foreground font-sans max-w-full">
      {/* Sub Navigation Bar with Sticky Scroll Indicator */}
      <SecondarySubNav
        title={getDepartmentHeaderTitle(course)}
        tabs={departmentTabsList}
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`page-${course.slug}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
          className="w-full flex flex-col max-w-full"
        >

      {/* Department Page Hero Section (Full-Screen Edge-to-Edge Layout with #212121 / #1C1C1E Background & Down-to-Up Filling Buttons) */}
      <section className="w-full bg-[#212121] dark:bg-[#121214] text-white pt-10 pb-12 border-b border-neutral-800 relative overflow-hidden min-h-[calc(100vh-110px)] flex flex-col justify-center">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between flex-1 py-4">
          
          {/* Top Section: Split Layout (Headline & Description vs Rectangular Image Showcase) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
            
            {/* Left Hero Column: Program Title, Pitch & Animated CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-oswald text-3xl sm:text-4xl md:text-[48px] lg:text-6xl font-black uppercase leading-[1.08] tracking-tight text-white mb-4"
              >
                {getHeroTitle(course)}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-[16px] sm:text-[17px] text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8"
              >
                {course.description}
              </motion.p>

              {/* Call to Action Buttons with Down-to-Up Filling Animation */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
                className="flex flex-wrap items-center gap-4 mb-2"
              >
                {/* Primary CTA Button: Dark Outline with Maroon Ocean Wave Fill */}
                <button
                  onClick={() => {
                    const el = document.getElementById('department-main-content');
                    if (el) {
                      const yOffset = -120;
                      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="group relative overflow-hidden bg-neutral-900/80 text-white font-bold font-oswald text-xs uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs px-7 py-3 shadow-md border border-neutral-600 transition-all cursor-pointer select-none inline-flex items-center"
                >
                  {/* Liquid Ocean Wave Fill Overlay */}
                  <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                    <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      {/* Ocean Wave Crest SVG (Primary) */}
                      <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                        <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                      </span>
                      {/* Secondary Depth Layer Wave */}
                      <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                        <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                        </svg>
                      </span>
                    </span>
                  </span>
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-white transition-colors duration-300">
                    <span>Explore Curriculum</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

                {/* Secondary CTA Button: Dark Outline with Maroon Ocean Wave Fill */}
                <Link
                  to="/admissions"
                  search={{ level: undefined }}
                  className="group relative overflow-hidden bg-neutral-900/80 text-white font-bold font-oswald text-xs uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs px-7 py-3 shadow-md border border-neutral-600 transition-all cursor-pointer select-none inline-flex items-center"
                >
                  {/* Liquid Ocean Wave Fill Overlay */}
                  <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                    <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      {/* Ocean Wave Crest SVG (Primary) */}
                      <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                        <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                      </span>
                      {/* Secondary Depth Layer Wave */}
                      <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                        <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                        </svg>
                      </span>
                    </span>
                  </span>
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-white transition-colors duration-300">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Column: Executive Photo Reference Card */}
            <div className="lg:col-span-5 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-sm shadow-2xl border border-neutral-700 bg-neutral-800 aspect-[16/10] w-full max-w-[520px] lg:ml-auto"
              >
                <img 
                  key={course.slug}
                  alt={getHeroTitle(course)} 
                  className="w-full h-full object-cover block"
                  src={course.image}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.endsWith('/images/eligibility_hero.jpg')) {
                      target.src = '/images/eligibility_hero.jpg';
                    }
                  }}
                />
              </motion.div>
            </div>

          </div>

          {/* Bottom Section: Full-Width Key Metadata Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="border-t border-neutral-700/80 pt-6 mt-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-6 text-[12.5px] mb-4">
              <div>
                <span className="block text-neutral-400 uppercase text-[10.5px] font-bold tracking-wider mb-1 font-oswald">Format</span>
                <p className="font-medium text-white flex items-center">
                  Full Time ({course.slug.startsWith('pg-') ? '2 Yrs' : '4 Yrs'})
                </p>
              </div>
              <div>
                <span className="block text-neutral-400 uppercase text-[10.5px] font-bold tracking-wider mb-1 font-oswald">Campus</span>
                <p className="font-medium text-white">MSAJCE Chennai</p>
              </div>
              <div>
                <span className="block text-neutral-400 uppercase text-[10.5px] font-bold tracking-wider mb-1 font-oswald">Intake Seats</span>
                <p className="font-medium text-white">{course.intake} Seats</p>
              </div>
              <div>
                <span className="block text-neutral-400 uppercase text-[10.5px] font-bold tracking-wider mb-1 font-oswald">Affiliation</span>
                <p className="font-medium text-white">Anna University</p>
              </div>
              <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                <span className="block text-neutral-400 uppercase text-[10.5px] font-bold tracking-wider mb-1 font-oswald">Accreditation</span>
                <p className="font-medium text-white">NAAC &amp; AICTE Approved</p>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 italic font-sans pt-2 border-t border-neutral-800">
              The degree program is affiliated to Anna University, Chennai and recognized by AICTE, New Delhi.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Main Content Layout */}
      <div id="department-main-content" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-24 overflow-x-hidden">
        
        {/* Main Column: Clean Tab Content Area */}
        <div className="min-h-[75vh] w-full max-w-full overflow-x-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Tab 1: About Department */}
              {activeTab === 'about' && (() => {
                const overviewData = getDepartmentOverviewDetails(course.slug, course.name);
                return (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                    
                    {/* 2-Column Overview Layout: Image on Left, Overview & Key Features on Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                      
                      {/* Left Column: Image Section (Matches text height on desktop) */}
                      <div className="lg:col-span-5 w-full flex flex-col">
                        <div className="relative w-full h-full min-h-[320px] lg:min-h-[440px] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-md bg-muted">
                          <img 
                            src={course.image} 
                            alt={`${course.name} Overview`} 
                            className="w-full h-full object-cover block"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (!target.src.endsWith('/images/eligibility_hero.jpg')) {
                                target.src = '/images/eligibility_hero.jpg';
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Right Column: Overview Content (Broad Content Paragraphs Only) */}
                      <div className="lg:col-span-7 flex flex-col justify-start space-y-4">
                        <div className="border-b border-border pb-2">
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-primary font-oswald leading-none">
                            Overview
                          </h2>
                        </div>

                        {overviewData.description.map((p, pIdx) => (
                          <p key={pIdx} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>

                    </div>

                    {/* Vision & Mission Section (Clean Flat List without Cards) */}
                    <div className="pt-6 border-t border-border space-y-6">
                      {/* Vision Block */}
                      <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-primary font-oswald mb-3">
                          Vision
                        </h3>
                        <div className="flex items-start gap-4 py-1">
                          <span className="w-9 h-9 rounded-full bg-foreground/10 border border-foreground/20 text-foreground font-oswald font-black flex items-center justify-center text-xs shrink-0 font-mono">
                            V
                          </span>
                          <p className="text-sm md:text-base text-foreground/90 font-medium leading-relaxed pt-1">
                            {overviewData.vision}
                          </p>
                        </div>
                      </div>

                      {/* Mission Block */}
                      <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-primary font-oswald mb-3">
                          Mission
                        </h3>
                        <div className="space-y-4">
                          {overviewData.missions.map((m, idx) => (
                            <div key={idx} className="flex items-start gap-4 py-1">
                              <span className="w-9 h-9 rounded-full bg-foreground/10 border border-foreground/20 text-foreground font-oswald font-black flex items-center justify-center text-xs shrink-0 font-mono">
                                M{idx + 1}
                              </span>
                              <p className="text-sm md:text-base text-foreground/90 font-medium leading-relaxed pt-1">
                                {m}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Department Highlights Grid (Lastly) */}
                    <DepartmentHighlightsGrid course={course} />

                  </div>
                );
              })()}

              {/* Tab 2: OBE (Outcome Based Education) */}
              {activeTab === 'obe' && (
                <article className="w-full mx-0 max-w-none">
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

              {/* Tab 3: Curriculum & Syllabi (Autonomous Academic Standards) */}
              {activeTab === 'academics' && (() => {
                const summary = getDepartmentCurriculumSummary(course.slug, course.name);
                const regPdfs = DEPARTMENT_CURRICULUM_PDFS[course.slug] || DEPARTMENT_CURRICULUM_PDFS['computer-science-and-engineering']!;
                const regPdf2024 = regPdfs.pdf2024 || "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf";
                const regPdf2021 = regPdfs.pdf2021 || "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf";
                const regPdf2017 = regPdfs.pdf2017 || "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf";

                return (
                  <div className="w-full space-y-10 md:space-y-12 mx-0 max-w-none animate-in fade-in slide-in-from-bottom-4 duration-500">
                    
                    {/* Header Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-primary/20 pb-5 md:pb-6 gap-4">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none mb-3">
                          {course.name} Curriculum & Syllabi
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
                          Autonomous Choice Based Credit System (CBCS) curriculum under Anna University standards.
                        </p>
                      </div>
                      <Link
                        to="/academics"
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-primary/40 bg-primary/10 text-primary text-xs font-bold font-oswald uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary hover:text-white transition-all shrink-0 w-fit"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>All Dept Regulations Directory &raquo;</span>
                      </Link>
                    </div>

                    {/* Official Regulation Downloads */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-2">
                      <a
                        href={regPdf2024}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between gap-4 px-6 py-3.5 bg-primary text-primary-foreground font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-all shadow-xs min-w-[210px]"
                      >
                        <span className="flex items-center gap-2.5">
                          <Download className="w-4 h-4 shrink-0" />
                          <span>Regulation 2024 PDF</span>
                        </span>
                        <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                      </a>

                      <a
                        href={regPdf2021}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between gap-4 px-6 py-3.5 border border-border bg-muted/30 text-foreground font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:border-primary hover:text-primary transition-all shadow-xs min-w-[190px]"
                      >
                        <span className="flex items-center gap-2.5">
                          <FileText className="w-4 h-4 text-primary shrink-0" />
                          <span>Regulation 2021 PDF</span>
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                      </a>

                      <a
                        href={regPdf2017}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 px-6 py-3.5 border border-border bg-muted/30 text-foreground font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:border-primary hover:text-primary transition-all shadow-xs min-w-[190px]"
                      >
                        <span className="flex items-center gap-2.5">
                          <FileText className="w-4 h-4 text-primary shrink-0" />
                          <span>Regulation 2017 PDF</span>
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                      </a>
                    </div>

                    {/* Spacious Academic Journey Table */}
                    {summary.semesterPhases && summary.semesterPhases.length > 0 && (
                      <div className="overflow-x-auto w-full border border-border/80 rounded-sm mt-4">
                        <table className="w-full text-left border-collapse text-sm bg-transparent">
                          <thead>
                            <tr className="bg-muted/50 border-b border-border/80 text-foreground font-oswald uppercase text-xs md:text-sm tracking-wider">
                              <th className="py-4 px-6 font-black border-r border-border/50 w-[220px] md:w-[240px]">Semester Phase</th>
                              <th className="py-4 px-6 font-black border-r border-border/50">Core Academic Focus</th>
                              <th className="py-4 px-6 font-black">Key Modules</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/60 font-sans">
                            {summary.semesterPhases.map((phase, pIdx) => (
                              <tr key={pIdx} className="hover:bg-muted/20 transition-colors">
                                <td className="py-6 px-6 align-top border-r border-border/50 space-y-1">
                                  <h4 className="font-black text-foreground font-oswald text-sm md:text-base uppercase tracking-tight">{phase.phase}</h4>
                                  <span className="text-xs text-primary font-bold font-mono block pt-0.5">{phase.semesters}</span>
                                </td>
                                <td className="py-6 px-6 align-top border-r border-border/50 text-sm text-muted-foreground leading-relaxed">
                                  {phase.focus}
                                </td>
                                <td className="py-6 px-6 align-top">
                                  <div className="flex flex-wrap gap-2.5 gap-y-3">
                                    {phase.keySubjects.map((sub, sIdx) => (
                                      <span 
                                        key={sIdx} 
                                        className="inline-block px-3.5 py-1.5 text-xs font-semibold bg-foreground/[0.04] border border-border/80 text-foreground/90 rounded-sm shadow-2xs hover:bg-foreground/[0.08] transition-colors"
                                      >
                                        {sub}
                                      </span>
                                    ))}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                  </div>
                );
              })()}
              {activeTab === 'job-profile' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  
                  {parsedContent['job-profile'] ? (
                    (() => {
                      const jobProfileSections = parsedContent['job-profile'].split('[KEY_DRIVERS_ACCORDION]');
                      return (
                        <>
                          {jobProfileSections.map((section, idx) => (
                            <Fragment key={idx}>
                              <article className="w-full mx-0 max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                                  {section}
                                </ReactMarkdown>
                              </article>
                              {idx === 0 && jobProfileSections.length > 1 && course.details.keyDrivers && (
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
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-primary font-oswald">Careers & Outcomes</h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
                          Graduates from the {course.name} department are highly sought after by top-tier global companies. The comprehensive curriculum equips you with the exact technical and professional skills needed to excel in these premier career roles.
                        </p>
                      </div>

                      {/* Career Roles - Compact Grid */}
                      <div className="mb-16">
                        <h3 className="text-lg font-black uppercase tracking-tighter mb-6 text-foreground font-oswald border-b border-border/50 pb-2">Key Career Paths</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                          {course.details.careers.map((role) => (
                            <div key={role} className="flex items-center gap-3 py-2 border-b border-border/30 last:border-0 sm:last:border-b lg:last:border-b">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><path d="m9 18 6-6-6-6"/></svg>
                              <h4 className="font-bold text-sm md:text-base text-foreground/90 font-sans">{role}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Top Recruiters Section - Logo Wall (Always Visible at bottom) */}
                  {course.details.recruiters && course.details.recruiters.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-border/50">
                      <h3 className="text-lg font-black uppercase tracking-tighter mb-8 text-foreground text-center font-oswald">Top Hiring Partners</h3>
                      <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center">
                        {course.details.recruiters.map((recruiter, i) => (
                          <div 
                            key={i} 
                            className="group flex items-center gap-2.5 bg-card dark:bg-[#1E201F] border border-border hover:border-primary/60 px-4 py-2.5 rounded-sm shadow-2xs transition-all hover:-translate-y-0.5 hover:shadow-xs"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary/70 group-hover:bg-primary group-hover:scale-125 transition-all shrink-0" />
                            <span className="font-bold font-oswald uppercase text-xs sm:text-sm tracking-wider text-foreground group-hover:text-primary transition-colors">
                              {recruiter}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Tab 4: Faculty */}
              {activeTab === 'faculty' && (() => {
                const deptFaculty = allFaculty.filter(f => f.departmentSlug === course.slug);
                const displayFaculty = deptFaculty.length > 0 ? deptFaculty : allFaculty.slice(0, 4);

                // Sort so HOD is at the top
                const sortedFaculty = [...displayFaculty].sort((a, b) => {
                  const aIsHod = a.designation.toLowerCase().includes('head');
                  const bIsHod = b.designation.toLowerCase().includes('head');
                  if (aIsHod && !bIsHod) return -1;
                  if (!aIsHod && bIsHod) return 1;
                  return 0;
                });

                return (
                  <div className="w-full space-y-6 mx-0 max-w-none">
                    <div className="border-b border-border pb-4">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-primary font-oswald">Faculty Directory</h2>
                      <p className="text-sm text-muted-foreground mt-1 font-sans">The department is powered by accomplished professors, doctorates, and researchers committed to outcome-based engineering education.</p>
                    </div>

                    <div className="overflow-x-auto w-full">
                      <table className="w-full text-left border-collapse border border-border/80 text-sm bg-transparent">
                        <thead>
                          <tr className="bg-muted/40 border-b border-border/80 text-foreground font-oswald uppercase text-xs tracking-wider">
                            <th className="py-3 px-3.5 font-black border-r border-border/50 text-center w-[50px]">S.No</th>
                            <th className="py-3 px-4 font-black border-r border-border/50">Name</th>
                            <th className="py-3 px-4 font-black border-r border-border/50">Designation</th>
                            <th className="py-3 px-4 font-black border-r border-border/50">Joined Date</th>
                            <th className="py-3 px-4 font-black border-r border-border/50">Employment</th>
                            <th className="py-3 px-4 font-black">Contact Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                          {sortedFaculty.map((faculty, idx) => {
                            const isHod = faculty.designation.toLowerCase().includes('head');
                            const email = `${faculty.name.split(' ').pop()?.toLowerCase() || 'faculty'}@msajce-edu.in`;
                            return (
                              <tr key={faculty.id} className={`transition-colors hover:bg-muted/30 ${isHod ? 'bg-primary/5' : ''}`}>
                                {/* 1. S.No */}
                                <td className="py-3.5 px-3.5 align-middle border-r border-border/50 text-center text-xs font-bold font-mono text-muted-foreground">
                                  {idx + 1}
                                </td>

                                {/* 2. Name (ALL CAPITAL LETTERS ONLY) */}
                                <td className="py-3.5 px-4 align-middle border-r border-border/50">
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-black text-foreground text-sm font-oswald uppercase tracking-tight">{faculty.name.toUpperCase()}</h4>
                                    {isHod && (
                                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest font-oswald shrink-0">HOD</span>
                                    )}
                                  </div>
                                </td>

                                {/* 3. Designation (Normal Case) */}
                                <td className="py-3.5 px-4 align-middle border-r border-border/50">
                                  <span className="text-xs font-bold text-primary font-sans">{faculty.designation}</span>
                                </td>

                                {/* 4. Joined Date */}
                                <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs text-muted-foreground font-medium font-mono">
                                  {faculty.dateOfJoining}
                                </td>

                                {/* 5. Employment (Normal Case) */}
                                <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs text-foreground font-semibold font-sans">
                                  {faculty.association}
                                </td>

                                {/* 6. Contact Details (Clickable Black Color Mail Link) */}
                                <td className="py-3.5 px-4 align-middle">
                                  <a 
                                    href={`mailto:${email}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground dark:text-white hover:text-primary hover:underline transition-colors cursor-pointer font-mono"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground dark:text-white shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    <span className="break-all">{email}</span>
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })()}

              {/* Tab 5: Department Facilities */}
              {activeTab === 'facilities' && (
                <DepartmentFacilitiesView courseSlug={course.slug} courseName={course.name} />
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
                          <Link to="/events/$eventId" params={{ eventId: highlight.id! }} key={idx} className="group flex flex-col gap-3 items-start">
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
                            const dateObj = new Date(item?.date || '');
                            return (
                              <motion.div
                                layout
                                key={item?.id}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full shrink-0"
                              >
                                <Link to="/events/$eventId" params={{ eventId: item?.id || '' }} className="group flex flex-col">
                                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3 block">
                                    {item?.category}
                                  </span>

                                  <div className="flex items-start gap-4">
                                    {/* Thumbnail */}
                                    <div className="relative w-[120px] xl:w-[140px] aspect-[3/2] rounded-[4px] overflow-hidden shrink-0 bg-muted">
                                      <img
                                        src={item?.image}
                                        alt={item?.title}
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
                                        {item?.title}
                                      </h4>
                                      {item?.venue && (
                                        <span className="text-black dark:text-white text-[12px] font-semibold font-sans mt-1 flex items-center gap-1 tracking-tight">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                          {item.venue}
                                        </span>
                                      )}
                                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1.5">
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
              {activeTab === 'student-activities' && (() => {
                const samplePdf = "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf";

                const coCurricularActivities = [
                  {
                    name: "Internship Details & Industry Certifications",
                    date: "2024 – 2025",
                    place: "MSAJCE Campus / Partner Companies",
                    link: samplePdf,
                  },
                  {
                    name: "Industrial Visits & Field Expeditions",
                    date: "2024 – 2025",
                    place: "TCS Siruseri / Infosys Mahindra World City / Zoho",
                    link: samplePdf,
                  },
                  {
                    name: "Professional Society Activities (CSI / IEEE / ISTE)",
                    date: "2024 – 2025",
                    place: "MSAJCE Auditorium & Advanced Computing Labs",
                    link: samplePdf,
                  },
                ];

                const extraCurricularActivities = [
                  {
                    name: "Extra Curricular Activities, Cultural & Sports Meets",
                    date: "2024 – 2025",
                    place: "MSAJCE Sports Complex & Campus Grounds",
                    link: samplePdf,
                  },
                ];

                const activityPhotos = [
                  {
                    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop",
                    location: "Chennai, Tamil Nadu, India",
                    title: "Academic & Industrial Segment Visit",
                    description: "Students visiting advanced engineering research labs and corporate tech parks.",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop",
                    location: "Space & Research Centre",
                    title: "Aerospace & Rocketry Expedition",
                    description: "Experiential learning trip studying space propulsion and high-performance computing.",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop",
                    location: "MSAJCE Auditorium",
                    title: "National Technical Symposium & Hackathon",
                    description: "Inter-college project expos, competitive programming sprints, and tech symposiums.",
                  },
                ];

                return (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12 w-full mx-0 max-w-none">
                    
                    {/* Header Banner */}
                    <div className="border-b-2 border-primary/20 pb-4">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none mb-2">
                        Student Activities
                      </h2>
                      <p className="text-sm text-muted-foreground font-sans">
                        Co-curricular accomplishments, industrial immersion field visits, extra-curricular events, and activity reports.
                      </p>
                    </div>

                    {/* Section 1: Co-Curricular Activities Table */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-black uppercase tracking-tight text-foreground font-oswald border-b border-border/60 pb-2">
                        Co Curricular Activities
                      </h3>
                      <div className="overflow-x-auto w-full border border-border/80 rounded-sm">
                        <table className="w-full text-left border-collapse text-sm bg-transparent">
                          <thead>
                            <tr className="bg-muted/40 border-b border-border/80 text-foreground font-oswald uppercase text-xs tracking-wider">
                              <th className="py-3 px-4.5 font-black border-r border-border/50">Activity Name</th>
                              <th className="py-3 px-4 font-black border-r border-border/50 w-[140px]">Timeline / Date</th>
                              <th className="py-3 px-4 font-black border-r border-border/50 w-[240px]">Venue / Location</th>
                              <th className="py-3 px-4 font-black w-[130px] text-center">Report</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/50 font-sans">
                            {coCurricularActivities.map((act, idx) => (
                              <tr key={idx} className="hover:bg-muted/20 transition-colors">
                                <td className="py-3.5 px-4.5 align-middle border-r border-border/50">
                                  <h4 className="font-bold text-foreground text-sm font-sans">{act.name}</h4>
                                </td>
                                <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs font-mono text-primary font-semibold">
                                  {act.date}
                                </td>
                                <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs text-muted-foreground font-medium">
                                  {act.place}
                                </td>
                                <td className="py-3.5 px-4 align-middle text-center">
                                  <a
                                    href={act.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Download Activity Report"
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-2xs group"
                                  >
                                    <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Section 2: Extra-Curricular Activities Table */}
                    <div className="space-y-4 pt-2">
                      <h3 className="text-xl font-black uppercase tracking-tight text-foreground font-oswald border-b border-border/60 pb-2">
                        Extra Curricular Activities
                      </h3>
                      <div className="overflow-x-auto w-full border border-border/80 rounded-sm">
                        <table className="w-full text-left border-collapse text-sm bg-transparent">
                          <thead>
                            <tr className="bg-muted/40 border-b border-border/80 text-foreground font-oswald uppercase text-xs tracking-wider">
                              <th className="py-3 px-4.5 font-black border-r border-border/50">Activity Name</th>
                              <th className="py-3 px-4 font-black border-r border-border/50 w-[140px]">Timeline / Date</th>
                              <th className="py-3 px-4 font-black border-r border-border/50 w-[240px]">Venue / Location</th>
                              <th className="py-3 px-4 font-black w-[130px] text-center">Report</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/50 font-sans">
                            {extraCurricularActivities.map((act, idx) => (
                              <tr key={idx} className="hover:bg-muted/20 transition-colors">
                                <td className="py-3.5 px-4.5 align-middle border-r border-border/50">
                                  <h4 className="font-bold text-foreground text-sm font-sans">{act.name}</h4>
                                </td>
                                <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs font-mono text-primary font-semibold">
                                  {act.date}
                                </td>
                                <td className="py-3.5 px-4 align-middle border-r border-border/50 text-xs text-muted-foreground font-medium">
                                  {act.place}
                                </td>
                                <td className="py-3.5 px-4 align-middle text-center">
                                  <a
                                    href={act.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Download Activity Report"
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-2xs group"
                                  >
                                    <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Section 3: Activity Photo Showcase Gallery */}
                    <div className="space-y-6 pt-4 border-t border-border/50">
                      <div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-foreground font-oswald border-b border-border/60 pb-2">
                          Activity Showcase & Field Visits
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Photographic glimpses of MSAJCE students participating in industrial field visits, research tours, and campus events.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activityPhotos.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex flex-col rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border bg-card shadow-xs"
                          >
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                              <img
                                src={photo.image}
                                alt={photo.title}
                                className="w-full h-full object-cover block"
                                loading="lazy"
                              />
                              <div className="absolute bottom-2 left-2 bg-background/90 text-foreground text-[10px] font-bold font-mono px-2 py-0.5 rounded-xs border border-border/50 shadow-xs">
                                {photo.location}
                              </div>
                            </div>
                            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-start">
                              <h4 className="font-bold text-foreground text-sm font-oswald uppercase tracking-tight">
                                {photo.title}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                                {photo.description}
                              </p>
                            </div>
                          </div>
                        ))}
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
                                      <span className="text-[#005DA6]">{yearDept}</span>
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
                );
              })()}

              {/* Tab 9: Research */}
              {activeTab === 'research' && (
                <DepartmentResearchView courseSlug={course.slug} courseName={course.name} />
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
