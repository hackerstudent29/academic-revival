import React from 'react';
import { X, Handshake, Calendar, Clock, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { MouPartner } from '../../types';

interface MoUDetailModalProps {
  mou: MouPartner | null;
  onClose: () => void;
}

export const MoUDetailModal: React.FC<MoUDetailModalProps> = ({ mou, onClose }) => {
  if (!mou) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082B5C]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#082B5C] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#1769AA] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {mou.domain}
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              {mou.status} Institutional MoU
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] flex items-center gap-2.5">
            <Handshake className="w-6 h-6 text-[#DCEEFF]" />
            {mou.partnerName}
          </h3>
          <p className="text-xs sm:text-sm text-[#DCEEFF] mt-1">
            Official Memorandum of Understanding with MSAJCE Industry-Institute Interaction (III) Cell
          </p>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Metadata Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-[#F5FAFF] rounded-xl border border-blue-100">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#1769AA]" />
                Signed On
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#082B5C]">{mou.date}</p>
            </div>
            <div className="p-3 bg-[#F5FAFF] rounded-xl border border-blue-100">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                <Clock className="w-3.5 h-3.5 text-[#1769AA]" />
                Tenure Duration
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#082B5C]">{mou.duration}</p>
            </div>
            <div className="p-3 bg-[#F5FAFF] rounded-xl border border-blue-100 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-1">
                <FileText className="w-3.5 h-3.5 text-[#1769AA]" />
                Academic Cycle
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#082B5C]">{mou.year}</p>
            </div>
          </div>

          {/* Purpose & Scope */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Scope of Alliance</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {mou.scope}
            </p>
          </div>

          {/* Key Student Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#082B5C] mb-2.5">
              Key Strategic Initiatives & Student Deliverables
            </h4>
            <div className="space-y-2">
              {mou.keyInitiatives.map((init, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                  <span>{init}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              Verified by Dean (Industry Alliances), MSAJCE
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#082B5C] hover:bg-[#1769AA] text-white text-xs font-semibold tracking-wide transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
