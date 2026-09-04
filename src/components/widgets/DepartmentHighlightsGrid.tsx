import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Course } from '@/lib/courseData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 }
  }
};

export function DepartmentHighlightsGrid({ course }: { course?: Course }) {
  // Use course data if provided, otherwise fallback to defaults
  const intakeTotal = course ? course.intake : '60';
  const intakeGovt = course ? course.govtQuota : '30';
  const intakeMgmt = course ? course.managementQuota : '30';
  const careers = course && course.details.careers ? course.details.careers : [
    "Software Development Engineer",
    "Systems Design Engineer",
    "Data Analyst",
    "Cloud Architect"
  ];
  
  const isPG = course?.level === 'PG';
  
  const eligibilityText = isPG 
    ? "A recognized Bachelor's Degree in Engineering / Technology (B.E. / B.Tech) or equivalent in the relevant field with a valid TANCET or GATE score as prescribed by Anna University norms."
    : "Pass in 10+2 (HSC) or equivalent system of education with a minimum average percentage in Physics, Chemistry, and Mathematics as prescribed by Government of Tamil Nadu / Anna University. Lateral Entry candidates must possess a Diploma in Engineering / Technology or a B.Sc. Degree.";

  return (
    <div className="my-14">
      <h3 className="text-2xl md:text-3xl font-oswald font-bold uppercase tracking-tight mb-6 text-primary">
        Programme Highlights
      </h3>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l border-t border-border/60"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Duration */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 border-r border-b border-border/60 p-4 sm:p-6 md:p-8 flex flex-col justify-center bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Duration</div>
          <div className="text-lg md:text-xl font-bold text-foreground leading-tight">
            {isPG ? (
              <>2 years <span className="text-muted-foreground font-normal">(Regular)</span></>
            ) : (
              <>4 years <span className="text-muted-foreground font-normal">(Regular)</span><br/>3 years <span className="text-muted-foreground font-normal">(Lateral Entry)</span></>
            )}
          </div>
        </motion.div>

        {/* Semesters */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 border-r border-b border-border/60 p-4 sm:p-6 md:p-8 flex flex-col justify-center bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Semesters</div>
          <div className="text-lg md:text-xl font-bold text-foreground leading-tight">
            {isPG ? (
              <>4 <span className="text-muted-foreground font-normal">(Regular)</span></>
            ) : (
              <>8 <span className="text-muted-foreground font-normal">(Regular)</span><br/>6 <span className="text-muted-foreground font-normal">(Lateral)</span></>
            )}
          </div>
        </motion.div>

        {/* Intake */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 border-r border-b border-border/60 p-4 sm:p-6 md:p-8 flex flex-col justify-center bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Intake / Seats</div>
          <div className="text-3xl md:text-4xl font-black text-foreground mb-1">{intakeTotal}</div>
          <div className="text-sm font-medium text-muted-foreground leading-tight">Government - {intakeGovt}<br/>Management - {intakeMgmt}</div>
        </motion.div>

        {/* Eligibility */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-4 border-r border-b border-border/60 p-4 sm:p-6 md:p-8 bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Eligibility</div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
            {eligibilityText}
          </p>
        </motion.div>

        {/* Curriculum & Syllabus */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 border-r border-b border-border/60 p-4 sm:p-6 md:p-8 bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Curriculum & Syllabus</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-4 py-3 border border-border/60 rounded-sm hover:border-primary text-sm font-bold transition-all group/link">
              2021 Regulation <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
            </a>
            <a href="https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-4 py-3 border border-border/60 rounded-sm hover:border-primary text-sm font-bold transition-all group/link">
              2017 Regulation <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Career Opportunities */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 border-r border-b border-border/60 p-6 md:p-8 bg-transparent group hover:bg-foreground/[0.02] transition-colors">
          <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Career Opportunities</div>
          <div className="flex flex-wrap gap-2">
            {careers.map((label, i) => (
              <span key={i} className="text-xs font-bold px-3 py-1.5 bg-foreground/5 hover:bg-primary/10 hover:text-primary rounded-sm transition-colors cursor-default">
                {label}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
