import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

interface PlacementContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlacementContactModal: React.FC<PlacementContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'Campus Recruitment Invitation',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-2xl bg-background dark:bg-card text-foreground rounded-xl shadow-2xl overflow-hidden border border-border animate-in zoom-in-95 duration-300 max-h-[92vh] overflow-y-auto"
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

          <div className="inline-flex items-center gap-1.5 bg-primary-foreground/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 uppercase font-oswald">
            Recruiter & Student Helpdesk
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-oswald">
            Contact Training & Placement Cell
          </h3>
          <p className="text-xs sm:text-sm text-primary-foreground/80 mt-1">
            Connect with our placement officers for recruitment drive invitations, internship partnerships, and student queries.
          </p>
        </div>

        <div className="p-6 sm:p-7 space-y-6">
          {/* Quick Info Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-muted/50 rounded-xl border border-border flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Direct Desk</p>
                <p className="text-xs font-semibold text-foreground">044-2747 0021</p>
                <p className="text-[11px] text-muted-foreground">Ext: 114 / 115</p>
              </div>
            </div>
            <div className="p-3 bg-muted/50 rounded-xl border border-border flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Official Email</p>
                <p className="text-xs font-semibold text-foreground">placement@msajce-edu.in</p>
                <p className="text-[11px] text-muted-foreground">Quick response desk</p>
              </div>
            </div>
            <div className="p-3 bg-muted/50 rounded-xl border border-border flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Office Suite</p>
                <p className="text-xs font-semibold text-foreground">Placement Suite</p>
                <p className="text-[11px] text-muted-foreground">Admin Block, 2nd Floor</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">Inquiry Dispatched Successfully!</h4>
              <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. The Head of Training & Placement Cell at MSAJCE has received your message and will reach out to <span className="font-semibold">{formData.email}</span> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Organization / Department *</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Infosys Talent Acquisition / CSE Final Year"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Phone / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Nature of Inquiry *</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                >
                  <option value="Campus Recruitment Invitation">Campus Recruitment Invitation (On-Campus / Pooled)</option>
                  <option value="Internship & PPO Collaboration">Internship & PPO Collaboration</option>
                  <option value="Industry-Institute MoU Partnership">Industry-Institute MoU Partnership</option>
                  <option value="Guest Lecture / Workshop Proposal">Guest Lecture / Workshop Proposal</option>
                  <option value="Student Placement Cell Verification">Student Placement Cell Verification</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Detailed Message / Requirement *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify target engineering branches, tentative drive dates, and hiring profiles..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Office Hours: Mon – Fri (8:30 AM – 4:30 PM)</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold tracking-wide flex items-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Official Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
