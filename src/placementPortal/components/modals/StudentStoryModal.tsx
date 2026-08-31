import React from 'react';
import { X, Award, Briefcase, GraduationCap, Lightbulb, CheckCircle2 } from 'lucide-react';
import { FeaturedAchievement } from '../../types';

interface StudentStoryModalProps {
  story: FeaturedAchievement | null;
  onClose: () => void;
}

export const StudentStoryModal: React.FC<StudentStoryModalProps> = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082B5C]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top visual hero */}
        <div className="relative bg-gradient-to-r from-[#082B5C] to-[#1769AA] text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={story.photo}
              alt={story.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white/40 shadow-lg"
            />
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-1.5 uppercase">
                <Award className="w-3 h-3" />
                Package: {story.package}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif]">{story.name}</h3>
              <p className="text-xs sm:text-sm text-[#DCEEFF] flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5" />
                {story.programme} • {story.batch}
              </p>
              <p className="text-xs text-blue-200 mt-1 font-semibold flex items-center justify-center sm:justify-start gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-blue-300" />
                {story.company} — {story.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Internship to Offer Transition */}
          <div className="p-4 bg-[#F5FAFF] rounded-xl border border-blue-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#082B5C] mb-1">
              Internship Role & Background
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-[#1769AA]">{story.internshipRole}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {story.story}
            </p>
          </div>

          {/* Advice & Interview Strategy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#082B5C] mb-3 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Preparation Tips & Key Strategies for Juniors
            </h4>
            <div className="space-y-2.5">
              {story.interviewTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer action */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              Verified Student Placement Record • MSAJCE Placement Cell
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#082B5C] hover:bg-[#1769AA] text-white text-xs font-semibold tracking-wide transition-colors"
            >
              Close Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
