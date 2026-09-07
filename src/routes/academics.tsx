import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Download, X, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

const title = "Academics & Curriculum | MSAJCE";
const description = "Explore academic calendars, regulation handbooks (R-2024, R-2021, R-2017), COE examination schedules, and department syllabi for MSAJCE.";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AcademicsPage,
});

// PDF Viewer Dialog Component matching curriculum style with black & grey bottom-to-top filling animation
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
        <button className="group relative flex-1 min-w-[160px] sm:min-w-[200px] flex items-center justify-between px-6 py-4.5 border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-white transition-all duration-300 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-xs">
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
          <span className="relative z-10 text-xs uppercase tracking-widest font-oswald flex items-center gap-3 font-bold text-foreground dark:text-white group-hover:text-white transition-colors duration-300">
            <Icon className="w-4 h-4" /> {triggerLabel}
          </span>
          <ExternalLink className="relative z-10 w-4 h-4 text-foreground/70 dark:text-white/80 group-hover:text-white transition-all duration-300" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[94vh] p-0 flex flex-col overflow-hidden bg-background border border-foreground/15 shadow-2xl [&>button]:hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
        
        {/* Cleaner Modern Header matching theme */}
        <div className="flex items-center justify-between bg-foreground/5 px-5 py-3.5 border-b border-foreground/10">
          <div className="flex flex-col">
            <h2 className="text-lg font-black uppercase tracking-tight leading-none text-primary font-oswald">{departmentName}</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground font-oswald mt-1">{title} DOCUMENT</p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              download
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold font-oswald uppercase tracking-wider bg-foreground text-background rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-foreground/90 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>
            <DialogClose asChild>
              <button className="p-2 text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
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

// Academic Calendar & Regulations Items
const academicCalendarItems = [
  {
    code: "CALENDAR 2024-25",
    name: "Academic Calendar 2024–2025",
    desc: "Complete schedule of Odd & Even semester reopening dates, 4 Continuous Internal Assessment Tests (IAT I–IV), university lab exams, and gazetted institutional holidays.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/201AIDS24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    code: "REGULATION 2024",
    name: "Autonomous Regulation 2024",
    desc: "Governing framework for newly admitted batches incorporating Choice Based Credit System (CBCS), mandatory NPTEL credit transfer, Industry 4.0 electives, and afternoon practical sessions.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/102CSE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    code: "COE EXAMINATIONS",
    name: "Controller of Examinations (COE) Cell",
    desc: "Evaluation guidelines governing internal assessment weightage (40%), end-semester university exams (60%), 75% attendance criteria, arrear examinations, and revaluation procedures.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1200",
    pdf2024: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  }
];

const ugDepartments = [
  { 
    name: "Civil Engineering", 
    code: "CIVIL", 
    slug: "civil-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/101CIVIL24-25.pdf",
    image: "https://images.unsplash.com/photo-1541888081033-0c46b5a415ff?auto=format&fit=crop&q=80&w=1200",
    desc: "Shape the world by designing sustainable infrastructure, smart cities, and resilient structural systems."
  },
  { 
    name: "Computer Science & Engineering", 
    code: "CSE", 
    slug: "computer-science-and-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/102CSE24-25.pdf",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    desc: "Master the fundamentals of software development, algorithmic thinking, and modern software architecture."
  },
  { 
    name: "CSE (AI & Machine Learning)", 
    code: "AIML", 
    slug: "cse-aiml",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/103AIML24-25.pdf",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    desc: "Specialize in the core mathematics and architectures behind artificial intelligence and deep learning."
  },
  { 
    name: "CSE (Cyber Security)", 
    code: "CSCS", 
    slug: "cse-cyber-security",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/104CSCS24-25.pdf",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    desc: "Learn to defend critical infrastructure, analyze malware, and master ethical hacking in our dedicated cybersecurity labs."
  },
  { 
    name: "Electrical & Electronics", 
    code: "EEE", 
    slug: "electrical-and-electronics-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/105EEE24-25.pdf",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1200",
    desc: "Master power systems, renewable energy technologies, and control systems for a sustainable future."
  },
  { 
    name: "Electronics & Communication", 
    code: "ECE", 
    slug: "electronics-and-communication-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/106ECE24-25.pdf",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200",
    desc: "From embedded systems to 5G communication, explore the hardware that brings the digital world to life."
  },
  { 
    name: "Mechanical Engineering", 
    code: "MECH", 
    slug: "mechanical-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/107MECH24-25.pdf",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    desc: "Design, analyze, and manufacture the physical systems and robotics that drive modern industry."
  },
  { 
    name: "Artificial Intelligence & Data Science", 
    code: "AI&DS", 
    slug: "artificial-intelligence-and-data-science",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/201AIDS24-25.pdf",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    desc: "Dive into the future with advanced machine learning, neural networks, and big data analytics designed for the next generation of data scientists."
  },
  { 
    name: "Computer Science & Business Systems", 
    code: "CSBS", 
    slug: "computer-science-and-business-systems",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/202CSBS24-25.pdf",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    desc: "A unique blend of computer science and management principles tailored for building tech-savvy business leaders."
  },
  { 
    name: "B.Tech ACT", 
    code: "ACT", 
    slug: "ece-advanced-communication",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/203ACT24-25.pdf",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    desc: "Specialized undergraduate program focusing on advanced technical applications and industry standards."
  },
  { 
    name: "Information Technology", 
    code: "IT", 
    slug: "information-technology",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/205IT24-25.pdf",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    desc: "Focus on cloud computing, enterprise network administration, and modern web technologies that power today's IT infrastructure."
  }
];

const pgDepartments = [
  { 
    name: "M.E. Computer Science & Engineering", 
    code: "M.E. CSE", 
    slug: "pg-me-cse",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/MECSE24-25.pdf",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200",
    desc: "Advanced postgraduate research and study in distributed systems, advanced algorithms, and software engineering."
  },
  { 
    name: "M.E. Structural Engineering", 
    code: "M.E. STRUCTURAL", 
    slug: "pg-me-structural-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/MECIVIL24-25.pdf",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    desc: "Specialized master's program focusing on the design, analysis, and execution of complex infrastructural projects."
  },
  { 
    name: "M.E. VLSI Design", 
    code: "M.E. VLSI", 
    slug: "pg-me-vlsi-design",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/204VLSI24-25.pdf",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    desc: "In-depth specialization in Very Large Scale Integration, focusing on semiconductor design, testing, and nanoelectronics."
  }
];

// Section Component using Curriculum's exact alternating row design
function DepartmentSection({ title, departments }: { title: string, departments: any[] }) {
  return (
    <section className="px-4 py-12 md:px-8 border-b border-foreground/10 bg-foreground/[0.02]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-foreground/10 pb-6">
            <Reveal variant="rise">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-none" dangerouslySetInnerHTML={{ __html: title }} />
            </Reveal>
            <Reveal variant="blur" delay={0.1}>
              <div className="flex gap-3 items-center text-[10px] font-bold font-oswald uppercase tracking-wider text-foreground/70">
                <span>R-2024</span>
                <span className="w-1 h-1 bg-foreground/40 rounded-full" />
                <span>R-2021</span>
                <span className="w-1 h-1 bg-foreground/40 rounded-full" />
                <span>R-2017</span>
              </div>
            </Reveal>
        </div>

        <div className="flex flex-col gap-16 lg:gap-20">
          {departments.map((dept, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div id={`dept-${dept.code.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={dept.code} className={`flex flex-col lg:flex-row gap-6 lg:gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'} scroll-mt-24`}>
                
                {/* Image Block with Signature Asymmetrical Curves */}
                <Reveal variant={isEven ? "slide-right" : "slide-left"} className="w-full lg:w-5/12">
                    <div className="relative aspect-[16/9] w-full overflow-hidden border border-foreground/15 bg-foreground/5 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs shadow-sm">
                      <img 
                        src={dept.image} 
                        alt={dept.name} 
                        className="w-full h-full object-cover filter grayscale-[30%]"
                      />
                    </div>
                </Reveal>

                {/* Content Block */}
                <Reveal variant="blur" delay={0.1} className="w-full lg:w-7/12 flex flex-col justify-center">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald border-l-2 border-foreground/60 pl-3">
                      {dept.code}
                    </span>
                    {dept.slug && (
                      <Link 
                        to="/programmes/$courseId"
                        params={{ courseId: dept.slug }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary hover:underline font-oswald"
                      >
                        Department Page <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary font-oswald leading-snug mb-4">
                    {dept.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-xl mb-6">
                    {dept.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <PdfViewerModal
                      triggerLabel="R-2024"
                      triggerIcon={Download}
                      pdfUrl={dept.pdf2024 || "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf"}
                      title="R-2024"
                      departmentName={dept.name}
                      isPrimary={true}
                    />
                    
                    <PdfViewerModal
                      triggerLabel="R-2021"
                      triggerIcon={FileText}
                      pdfUrl={dept.pdf2021 || "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf"}
                      title="R-2021"
                      departmentName={dept.name}
                    />

                    <PdfViewerModal
                      triggerLabel="R-2017"
                      triggerIcon={FileText}
                      pdfUrl={dept.pdf2017 || "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf"}
                      title="R-2017"
                      departmentName={dept.name}
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Hero Component matching Curriculum Page Hero exactly
function AcademicsHero() {
  const scrollToDept = (code: string) => {
    const id = `dept-${code.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const allSections = [...ugDepartments, ...pgDepartments];

  return (
    <>
      <section className="relative w-full overflow-hidden h-auto lg:h-[75vh] flex flex-col lg:block">
        
        {/* Desktop Image (Slides and reframes to the right) */}
        <motion.div 
          initial={{ width: "100%" }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-y-0 right-0 z-10 hidden lg:block pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
            alt="University academic hall and students" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Accent sliding block (The Dark Edge) */}
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "51%" }}
          transition={{ duration: 1.2, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-y-0 left-0 bg-foreground/80 z-20 hidden lg:block shadow-2xl"
          style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
        />

        {/* Sliding Background from Left with Diagonal Edge */}
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "50%" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-y-0 left-0 bg-background z-30 hidden lg:block"
          style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
        />

        {/* Mobile Image */}
        <div className="w-full h-[280px] relative lg:hidden block z-10">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
            alt="University academic hall and students" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[48%] px-6 py-12 md:py-16 lg:px-10 xl:px-12 flex flex-col justify-center z-40 relative lg:absolute lg:inset-y-0 lg:left-0 h-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-[10px] font-bold font-oswald tracking-widest uppercase text-foreground">Academic Framework</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-primary font-oswald mb-5 text-balance">
              Academic Calendar <br/>
              &amp; Regulations
            </h1>
            
            <p className="text-sm md:text-base font-medium text-muted-foreground leading-relaxed max-w-md">
              Institutional academic calendars, Anna University regulation schemes, COE assessment schedules, and syllabus roadmaps across all engineering programs.
            </p>
          </motion.div>
        </div>

      </section>

      {/* Navigation Strip Below Hero matching Curriculum Page with Black & Grey Filling Animation (Bottom to Top) */}
      <div className="w-full bg-foreground/[0.03] border-y border-border/40 py-5">
        <Reveal variant="rise" delay={0.3}>
          <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-12 overflow-hidden">
            <div className="flex flex-nowrap items-center gap-3 overflow-x-auto pb-4 -mb-4 scroll-smooth">
              {allSections.map((dept) => (
                <button 
                  key={dept.code}
                  onClick={() => scrollToDept(dept.code)}
                  className="relative group flex-shrink-0 text-xs font-black uppercase tracking-wider font-oswald px-5 py-2.5 bg-foreground/10 text-foreground border border-foreground/30 transition-all duration-300 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow overflow-hidden"
                >
                  <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  <span className="relative z-10 text-foreground group-hover:text-background transition-colors duration-300">
                    {dept.code}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}

function AcademicsPage() {
  return (
    <main className="bg-background pt-0 md:pt-1 min-h-screen">
      <AcademicsHero />

      {/* Academic Calendar & COE Section */}
      <DepartmentSection title="Academic Schedules<br/>& Regulations" departments={academicCalendarItems} />

      {/* UG Programmes Syllabus Section */}
      <DepartmentSection title="Undergraduate<br/>Programmes" departments={ugDepartments} />

      {/* PG Programmes Syllabus Section */}
      <DepartmentSection title="Postgraduate<br/>Programmes" departments={pgDepartments} />
    </main>
  );
}
