import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { ExternalLink, FileText, Download, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

const title = "Curriculum & Syllabus | MSAJCE";
const description = "Explore the academic curriculum and syllabi for all undergraduate and postgraduate programmes at MSAJCE.";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CurriculumPage,
});

const ugDepartments = [
  { 
    name: "Civil Engineering", 
    code: "CIVIL", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/101CIVIL24-25.pdf",
    image: "https://images.unsplash.com/photo-1541888081033-0c46b5a415ff?auto=format&fit=crop&q=80&w=1200",
    desc: "Shape the world by designing sustainable infrastructure, smart cities, and resilient structural systems."
  },
  { 
    name: "Computer Science & Engineering", 
    code: "CSE", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/102CSE24-25.pdf",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    desc: "Master the fundamentals of software development, algorithmic thinking, and modern software architecture."
  },
  { 
    name: "CSE (AI & Machine Learning)", 
    code: "AIML", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/103AIML24-25.pdf",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    desc: "Specialize in the core mathematics and architectures behind artificial intelligence and deep learning."
  },
  { 
    name: "CSE (Cyber Security)", 
    code: "CSCS", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/104CSCS24-25.pdf",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    desc: "Learn to defend critical infrastructure, analyze malware, and master ethical hacking in our dedicated cybersecurity labs."
  },
  { 
    name: "Electrical & Electronics", 
    code: "EEE", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/105EEE24-25.pdf",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1200",
    desc: "Master power systems, renewable energy technologies, and control systems for a sustainable future."
  },
  { 
    name: "Electronics & Communication", 
    code: "ECE", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/106ECE24-25.pdf",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200",
    desc: "From embedded systems to 5G communication, explore the hardware that brings the digital world to life."
  },
  { 
    name: "Mechanical Engineering", 
    code: "MECH", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/107MECH24-25.pdf",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    desc: "Design, analyze, and manufacture the physical systems and robotics that drive modern industry."
  },
  { 
    name: "Artificial Intelligence & Data Science", 
    code: "AI&DS", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/201AIDS24-25.pdf",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    desc: "Dive into the future with advanced machine learning, neural networks, and big data analytics designed for the next generation of data scientists."
  },
  { 
    name: "Computer Science & Business Systems", 
    code: "CSBS", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/202CSBS24-25.pdf",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    desc: "A unique blend of computer science and management principles tailored for building tech-savvy business leaders."
  },
  { 
    name: "B.Tech ACT", 
    code: "ACT", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/203ACT24-25.pdf",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    desc: "Specialized undergraduate program focusing on advanced technical applications and industry standards."
  },
  { 
    name: "Information Technology", 
    code: "IT", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/205IT24-25.pdf",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    desc: "Focus on cloud computing, enterprise network administration, and modern web technologies that power today's IT infrastructure."
  }
];

const pgDepartments = [
  { 
    name: "M.E. Computer Science & Engineering", 
    code: "M.E. CSE", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/MECSE24-25.pdf",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200",
    desc: "Advanced postgraduate research and study in distributed systems, advanced algorithms, and software engineering."
  },
  { 
    name: "M.E. Structural Engineering", 
    code: "M.E. STRUCTURAL", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/MECIVIL24-25.pdf",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    desc: "Specialized master's program focusing on the design, analysis, and execution of complex infrastructural projects."
  },
  { 
    name: "M.E. VLSI Design", 
    code: "M.E. VLSI", 
    pdf2024: "https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/autonomous/204VLSI24-25.pdf",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    desc: "In-depth specialization in Very Large Scale Integration, focusing on semiconductor design, testing, and nanoelectronics."
  }
];

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
        <button className={`flex-1 min-w-[200px] flex items-center justify-between px-6 py-5 border transition-all group ${
          isPrimary 
            ? "border-foreground hover:bg-foreground hover:text-background" 
            : "border-foreground/20 hover:border-foreground"
        }`}>
          <span className={`text-xs uppercase tracking-widest flex items-center gap-3 ${isPrimary ? "font-black" : "font-bold text-muted-foreground group-hover:text-foreground transition-colors"}`}>
              <Icon className="w-4 h-4" /> {triggerLabel}
          </span>
          <ExternalLink className={`w-4 h-4 transition-opacity ${isPrimary ? "opacity-50 group-hover:opacity-100" : "opacity-30 group-hover:opacity-100"}`} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[96vh] p-0 flex flex-col overflow-hidden bg-background border border-foreground/10 shadow-2xl [&>button]:hidden sm:rounded-xl">
        
        {/* Cleaner Modern Header matching theme */}
        <div className="flex items-center justify-between bg-foreground/5 px-4 py-2 border-b border-foreground/10">
          <div className="flex flex-col">
            <h2 className="text-lg font-black uppercase tracking-tight leading-none text-foreground">{departmentName}</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-0.5">{title} SYLLABUS</p>
          </div>
          <div className="flex items-center">
            <DialogClose asChild>
              <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors group rounded-full">
                <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Close</span>
              </button>
            </DialogClose>
          </div>
        </div>

        {/* PDF Mobile Fallback Notice (visible only on small screens) */}
        <div className="md:hidden flex items-center justify-between px-4 py-2 bg-primary/10 text-primary">
          <span className="text-xs font-bold uppercase tracking-wide">Having trouble viewing?</span>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-black uppercase border-b border-primary pb-0.5">
             Download <Download className="w-3 h-3" />
          </a>
        </div>

        {/* PDF Iframe Viewer */}
        <div className="flex-1 w-full relative bg-foreground/5">
          <iframe 
            src={`${pdfUrl}#toolbar=0`} 
            className="absolute inset-0 w-full h-full border-none" 
            title={`${title} ${departmentName} Syllabus`} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DepartmentSection({ title, departments }: { title: string, departments: any[] }) {
  return (
    <section className="px-6 py-24 md:px-12 border-b border-foreground/10 bg-foreground/[0.02]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 border-b border-foreground/10 pb-12">
            <Reveal variant="slide-up">
              <h2 className="text-[2.5rem] md:text-[4rem] font-black uppercase tracking-tighter text-foreground leading-none" dangerouslySetInnerHTML={{ __html: title }} />
            </Reveal>
            <Reveal variant="blur" delay={0.1}>
              <div className="flex gap-4 items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span>R-2024</span>
                <span className="w-1 h-1 bg-foreground/30 rounded-full" />
                <span>R-2021</span>
                <span className="w-1 h-1 bg-foreground/30 rounded-full" />
                <span>R-2017</span>
              </div>
            </Reveal>
        </div>

        <div className="flex flex-col gap-32 lg:gap-48">
          {departments.map((dept, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={dept.code} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Block */}
                <Reveal variant={isEven ? "slide-right" : "slide-left"} className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden group border border-foreground/10 bg-foreground/5">
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <img 
                        src={dept.image} 
                        alt={dept.name} 
                        className="w-full h-full object-cover filter grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                </Reveal>

                {/* Content Block */}
                <Reveal variant="blur" delay={0.1} className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block border-l-2 border-primary pl-4">
                    {dept.code}
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-8">
                    {dept.name}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-muted-foreground leading-relaxed max-w-xl mb-12">
                    {dept.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    
                    <PdfViewerModal
                      triggerLabel="R-2024"
                      triggerIcon={Download}
                      pdfUrl={dept.pdf2024}
                      title="R-2024"
                      departmentName={dept.name}
                      isPrimary={true}
                    />
                    
                    <PdfViewerModal
                      triggerLabel="R-2021"
                      triggerIcon={FileText}
                      pdfUrl="https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/academics/2021Regulation.pdf"
                      title="R-2021"
                      departmentName={dept.name}
                    />

                    <PdfViewerModal
                      triggerLabel="R-2017"
                      triggerIcon={FileText}
                      pdfUrl="https://ounikqjoupdiewkyjusw.supabase.co/storage/v1/object/public/uploads/academics/2017Regulation.pdf"
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

function CurriculumHero() {
  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop" 
          alt="University campus and students" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-[1440px] px-6 py-20 md:px-12 lg:px-20 mx-auto flex flex-col items-center text-center">
        <Reveal variant="slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-primary">Academic Framework</span>
          </div>
        </Reveal>
        
        <Reveal variant="slide-up" delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase leading-[0.9] tracking-tighter text-foreground mb-8 text-balance">
            Curriculum <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">& Syllabus.</span>
          </h1>
        </Reveal>
        
        <Reveal variant="blur" delay={0.2}>
          <p className="text-base md:text-lg lg:text-xl font-medium text-foreground/80 leading-relaxed max-w-2xl mx-auto text-balance">
            Comprehensive academic roadmaps designed to meet rigorous industry standards. Explore detailed syllabi across our Autonomous and Affiliated regulations to chart your engineering journey.
          </p>
        </Reveal>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}

function CurriculumPage() {
  return (
    <main className="bg-background min-h-screen">
      <CurriculumHero />

      {/* UG Departments */}<DepartmentSection title="Undergraduate<br/>Programmes" departments={ugDepartments} />
      <DepartmentSection title="Postgraduate<br/>Programmes" departments={pgDepartments} />

    </main>
  );
}
