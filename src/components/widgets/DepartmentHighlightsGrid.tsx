import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Award, GraduationCap, Briefcase } from 'lucide-react';
import type { Course } from '@/lib/courseData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 }
  }
};

function getExpandedCareers(slug?: string, existingCareers?: string[]): string[] {
  const s = slug?.toLowerCase() || '';

  if (s.includes('csbs') || s.includes('business-systems')) {
    return [
      "Enterprise Business Systems Analyst",
      "Financial Tech Developer",
      "Business Analytics Consultant",
      "Product Strategy Manager",
      "Cloud Enterprise Engineer",
      "IT Operations Lead",
      "Data Strategist"
    ];
  }
  if (s.includes('aids') || s.includes('aiml') || s.includes('data-science') || s.includes('machine-learning')) {
    return [
      "AI Research Scientist",
      "Machine Learning Engineer",
      "Big Data Analytics Architect",
      "Deep Learning Specialist",
      "NLP & Computer Vision Engineer",
      "Data Science Consultant",
      "MLOps Pipeline Specialist"
    ];
  }
  if (s.includes('cyber')) {
    return [
      "Information Security Analyst",
      "Ethical Hacker & Pen-Tester",
      "Cyber Threat Hunter",
      "Digital Forensics Investigator",
      "Cloud Security Architect",
      "SOC Incident Analyst",
      "Security Compliance Consultant"
    ];
  }
  if (s.includes('ece') || s.includes('electronics')) {
    return [
      "Embedded Systems Engineer",
      "VLSI Design Engineer",
      "IoT Solutions Architect",
      "RF & Wireless Systems Engineer",
      "Robotics Systems Developer",
      "Telecom Network Engineer"
    ];
  }
  if (s.includes('eee') || s.includes('electrical')) {
    return [
      "Power Systems Engineer",
      "EV & Battery Systems Specialist",
      "Smart Grid Automation Engineer",
      "Industrial Automation & PLC Specialist",
      "Control Systems Engineer",
      "Electrical Design Consultant"
    ];
  }
  if (s.includes('mech') || s.includes('mechanical')) {
    return [
      "CAD / CAM / CAE Design Engineer",
      "Robotics & Automation Engineer",
      "Thermal & HVAC Systems Analyst",
      "Manufacturing Operations Engineer",
      "Automotive R&D Specialist",
      "Supply Chain Engineer"
    ];
  }
  if (s.includes('civil') || s.includes('structural')) {
    return [
      "Structural Design Engineer",
      "BIM & CAD Consultant",
      "Construction Project Manager",
      "Geotechnical Engineer",
      "Transportation & Urban Planner",
      "Quantity Surveyor & Site Engineer"
    ];
  }
  if (s.includes('cse') || s.includes('computer-science')) {
    return [
      "Software Development Engineer (SDE)",
      "Cloud Solutions Architect",
      "Full Stack Web Developer",
      "Data Engineer",
      "DevOps & SRE Specialist",
      "Systems Product Manager",
      "AI & Machine Learning Engineer",
      "Cyber Security Analyst"
    ];
  }

  if (existingCareers && existingCareers.length >= 5) {
    return existingCareers;
  }

  return [
    "Software Development Engineer",
    "Systems Design Engineer",
    "R&D Engineer",
    "Technical Project Manager",
    "Data & Automation Specialist",
    "Consulting Technology Lead"
  ];
}

export function DepartmentHighlightsGrid({ course }: { course?: Course }) {
  const intakeTotal = course ? course.intake : '60';
  const intakeGovt = course ? course.govtQuota : '30';
  const intakeMgmt = course ? course.managementQuota : '30';
  const careers = getExpandedCareers(course?.slug, course?.details?.careers);
  const isPG = course?.level === 'PG';

  return (
    <div className="my-14">
      <h3 className="text-2xl md:text-3xl font-oswald font-bold uppercase tracking-tight mb-6 text-primary">
        Programme Highlights
      </h3>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-t border-border/60 bg-card/40 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-xs"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Duration */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 border-r border-b border-border/60 p-5 sm:p-6 md:p-8 flex flex-col justify-center bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 font-oswald">Duration</div>
          <div className="text-lg md:text-xl font-bold text-foreground leading-tight font-sans">
            {isPG ? (
              <>2 years <span className="text-muted-foreground font-normal">(Regular 4 Semesters)</span></>
            ) : (
              <>4 years <span className="text-muted-foreground font-normal">(Regular 8 Semesters)</span><br/><span className="text-base text-foreground font-bold">3 years</span> <span className="text-muted-foreground font-normal">(Lateral Entry 6 Semesters)</span></>
            )}
          </div>
        </motion.div>

        {/* Semesters */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 border-r border-b border-border/60 p-5 sm:p-6 md:p-8 flex flex-col justify-center bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 font-oswald">Semesters</div>
          <div className="text-lg md:text-xl font-bold text-foreground leading-tight font-sans">
            {isPG ? (
              <>4 <span className="text-muted-foreground font-normal">(Regular)</span></>
            ) : (
              <>8 <span className="text-muted-foreground font-normal">(Regular)</span><br/>6 <span className="text-muted-foreground font-normal">(Lateral)</span></>
            )}
          </div>
        </motion.div>

        {/* Intake */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 border-r border-b border-border/60 p-5 sm:p-6 md:p-8 flex flex-col justify-center bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 font-oswald">Intake / Seats</div>
          <div className="text-3xl md:text-4xl font-black text-foreground mb-1 font-oswald">{intakeTotal}</div>
          <div className="text-xs sm:text-sm font-medium text-muted-foreground leading-tight font-sans">
            Government — <span className="text-foreground font-bold">{intakeGovt}</span><br/>
            Management — <span className="text-foreground font-bold">{intakeMgmt}</span>
          </div>
        </motion.div>

        {/* Eligibility Section (Clean Flat Text Format without Sub-Cards) */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-4 border-r border-b border-border/60 p-5 sm:p-6 md:p-8 bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 font-oswald">Eligibility Criteria</div>
          
          {isPG ? (
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed max-w-4xl font-sans">
              <strong className="text-foreground font-bold font-oswald uppercase tracking-wide mr-2">PG Degree Criteria:</strong>
              A recognized Bachelor's Degree in B.E. / B.Tech or equivalent in the relevant engineering branch with a valid TANCET or GATE score as prescribed by Anna University norms.
            </p>
          ) : (
            <div className="space-y-3 max-w-5xl">
              <p className="text-xs sm:text-sm md:text-base text-foreground/90 leading-relaxed font-sans">
                <strong className="text-foreground font-bold font-oswald uppercase tracking-wide mr-2">Regular Entry (10+2 / HSC — 4 Years):</strong>
                Pass in 10+2 (HSC) or equivalent examination with a minimum aggregate percentage in Physics, Chemistry, and Mathematics (PCM) as prescribed by Govt. of Tamil Nadu / Anna University norms.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-foreground/90 leading-relaxed font-sans">
                <strong className="text-foreground font-bold font-oswald uppercase tracking-wide mr-2">Lateral Entry (Direct 2nd Year — 3 Years):</strong>
                Passed 3-year Diploma in Engineering / Technology in appropriate branch OR B.Sc. Degree with Mathematics at 10+2 level with prescribed qualifying aggregate percentage.
              </p>
            </div>
          )}
        </motion.div>

        {/* Curriculum & Syllabus (Proper spacing between text and arrow) */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 border-r border-b border-border/60 p-5 sm:p-6 md:p-8 bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 font-oswald">Curriculum & Syllabus</div>
          <div className="flex flex-wrap gap-3.5">
            <a 
              href="https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-between gap-4 px-4 py-2.5 bg-foreground/[0.04] hover:bg-primary text-foreground hover:text-white border border-border/80 hover:border-primary rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-xs font-bold uppercase tracking-wider font-oswald transition-all duration-200 group/link shadow-xs min-w-[170px]"
            >
              <span>2021 Regulation</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-white transition-colors shrink-0" />
            </a>
            <a 
              href="https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-between gap-4 px-4 py-2.5 bg-foreground/[0.04] hover:bg-primary text-foreground hover:text-white border border-border/80 hover:border-primary rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-xs font-bold uppercase tracking-wider font-oswald transition-all duration-200 group/link shadow-xs min-w-[170px]"
            >
              <span>2017 Regulation</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-white transition-colors shrink-0" />
            </a>
          </div>
        </motion.div>

        {/* Career Opportunities (Clean Flat Bullet List without Pill Cards) */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 border-r border-b border-border/60 p-5 sm:p-6 md:p-8 bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 font-oswald flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-primary" /> Career Opportunities & Job Roles
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {careers.map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/90 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
