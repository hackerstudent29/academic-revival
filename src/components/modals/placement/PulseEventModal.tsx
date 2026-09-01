import React from 'react';
import { X, Calendar, MapPin, CheckCircle, Bell, Users } from 'lucide-react';
import { PlacementPulseEvent } from '@/types/placement';

interface PulseEventModalProps {
  event: PlacementPulseEvent | null;
  onClose: () => void;
}

export const PulseEventModal: React.FC<PulseEventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  const [registered, setRegistered] = React.useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-xl bg-background dark:bg-card text-foreground rounded-2xl shadow-2xl overflow-hidden border border-border animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary text-primary-foreground p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
              event.status === 'UPCOMING'
                ? 'bg-emerald-500 text-white'
                : event.status === 'ONGOING'
                ? 'bg-amber-500 text-white'
                : 'bg-slate-500 text-white'
            }`}>
              {event.status}
            </span>
            <span className="bg-white/20 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase">
              {event.type}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif]">
            {event.title}
          </h3>
          <p className="text-xs sm:text-sm text-primary-foreground/80 mt-1">
            {event.subtitle}
          </p>
        </div>

        <div className="p-6 sm:p-7 space-y-5">
          {/* Metadata info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-muted/50 rounded-xl border border-border flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Date & Timing</p>
                <p className="text-xs font-semibold text-foreground">{event.date}</p>
              </div>
            </div>
            <div className="p-3 bg-muted/50 rounded-xl border border-border flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Venue / Platform</p>
                <p className="text-xs font-semibold text-foreground">{event.venueOrMode}</p>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="p-3.5 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground mb-1">
              <Users className="w-4 h-4 text-primary" />
              Candidate Eligibility Criteria
            </div>
            <p className="text-xs sm:text-sm text-foreground font-medium">
              {event.eligible}
            </p>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Event Dossier</h4>
            <p className="text-xs sm:text-sm text-foreground leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Action */}
          <div className="pt-3 border-t border-border flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">
              Coordinated by MSAJCE Training & Placement Cell
            </span>
            <button
              onClick={() => {
                setRegistered(true);
                setTimeout(() => {
                  setRegistered(false);
                  onClose();
                }, 1400);
              }}
              className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
            >
              {registered ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Calendar Reminder Synced!</span>
                </>
              ) : (
                <>
                  <Bell className="w-3.5 h-3.5" />
                  <span>Add Reminder to Student Calendar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
