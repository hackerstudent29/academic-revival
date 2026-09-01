import React from 'react';
import { X, Handshake, Calendar, Clock, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { MouPartner } from '@/types/placement';

interface MoUDetailModalProps {
  mou: MouPartner | null;
  onClose: () => void;
}

export const MoUDetailModal: React.FC<MoUDetailModalProps> = ({ mou, onClose }) => {
  if (!mou) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-2xl bg-background dark:bg-card text-foreground rounded-2xl shadow-2xl overflow-hidden border border-border animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
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
            <Handshake className="w-6 h-6 text-white" />
            {mou.partnerName}
          </h3>
          <p className="text-xs sm:text-sm text-primary-foreground/80 mt-1">
            Official Memorandum of Understanding with MSAJCE Industry-Institute Interaction (III) Cell
          </p>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Metadata Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] font-medium mb-1">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                Signed On
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">{mou.date}</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] font-medium mb-1">
                <Clock className="w-3.5 h-3.5 text-primary" />
                Tenure Duration
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">{mou.duration}</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-xl border border-border col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] font-medium mb-1">
                <FileText className="w-3.5 h-3.5 text-primary" />
                Academic Cycle
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">{mou.year}</p>
            </div>
          </div>

          {/* Purpose & Scope */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Scope of Alliance</h4>
            <p className="text-xs sm:text-sm text-foreground leading-relaxed bg-muted/30 p-3.5 rounded-xl border border-border">
              {mou.scope}
            </p>
          </div>

          {/* Key Student Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5">
              Key Strategic Initiatives & Student Deliverables
            </h4>
            <div className="space-y-2">
              {mou.keyInitiatives.map((init, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{init}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">
              Verified by Dean (Industry Alliances), MSAJCE
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold tracking-wide transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
