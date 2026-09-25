import { useState, useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EyeTracking } from "@/components/ui/eye-tracking";

const MINIMAL_MESSAGES = [
  "Ask Lorin AI",
  "Need help with admissions?",
  "Looking for courses?",
  "Ask me anything",
];

function useThemeDetector() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();

    const observer = new MutationObserver(() => checkDark());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

function useChatbotEmotions(isOpen: boolean) {
  const [currentText, setCurrentText] = useState(MINIMAL_MESSAGES[0] || "Ask Lorin AI");
  const idleIndexRef = useRef(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isOpen) return;

    const startIdleRotation = () => {
      if (idleIntervalRef.current) clearInterval(idleIntervalRef.current);
      idleIntervalRef.current = setInterval(() => {
        idleIndexRef.current = (idleIndexRef.current + 1) % MINIMAL_MESSAGES.length;
        const msg = MINIMAL_MESSAGES[idleIndexRef.current];
        if (msg) setCurrentText(msg);
      }, 6000);
    };

    startIdleRotation();

    // Hovering the chatbot launcher itself
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("[data-chatbot-launcher]")) {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setCurrentText("Click to chat with me");
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      if (idleIntervalRef.current) clearInterval(idleIntervalRef.current);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isOpen]);

  return currentText;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isDark = useThemeDetector();
  const textMessage = useChatbotEmotions(isOpen);

  return (
    <div className="fixed bottom-0 right-4 sm:right-8 md:right-10 z-[9999] select-none font-sans pointer-events-auto">
      {/* Open Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-8 md:right-10 w-[360px] sm:w-[440px] md:w-[460px] h-[600px] max-h-[calc(100vh-120px)] bg-card border border-border dark:border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[10000] backdrop-blur-xl"
          >
            {/* Full Space Embedded Iframe with unobtrusive floating close button */}
            <div className="relative w-full h-full bg-background overflow-hidden flex-1">
              {/* Floating Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close Assistant"
                className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors shadow-lg border border-white/20"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/95 backdrop-blur-md text-foreground">
                  <div className="relative flex items-center justify-center p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                    <EyeTracking
                      eyeSize={36}
                      gap={10}
                      variant={isDark ? "cyber" : "cartoon"}
                      irisColor={isDark ? "#00d4ff" : "#9E2339"}
                      irisColorSecondary={isDark ? "#9E2339" : "#E11D48"}
                      scleraColor={isDark ? "#0a0a1a" : "#FFFFFF"}
                      pupilColor={isDark ? "#001122" : "#0F172A"}
                      pupilRange={0.75}
                      reactivePupil={true}
                    />
                    <Sparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-spin" />
                  </div>
                  <span className="text-xs font-oswald font-bold uppercase tracking-wider text-muted-foreground">
                    Connecting to Lorin AI...
                  </span>
                </div>
              )}

              <iframe
                src="https://lorin-ai.vercel.app/"
                title="Lorin AI Assistant"
                onLoad={() => setIsLoading(false)}
                className="w-full h-full border-none bg-background"
                allow="microphone; camera; clipboard-write; encrypted-media; autoplay"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Sticky Mascot & Interactive Eyes Toggle */}
      <div 
        data-chatbot-launcher="true"
        className="relative group cursor-pointer flex flex-col items-center"
      >
        {/* Floating Minimal Speech Bubble (Strictly NO Emojis, Small & Compact) */}
        {!isOpen && (
          <div className="absolute bottom-[calc(100%-0.4rem)] mb-0.5 flex flex-col items-center pointer-events-none transition-all duration-300 opacity-95 group-hover:opacity-100 group-hover:-translate-y-1.5">
            <motion.div
              key={textMessage}
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative px-2.5 py-1 bg-white dark:bg-[#121214] text-slate-900 dark:text-white font-oswald text-[11px] uppercase font-bold tracking-wider rounded-lg shadow-[0_6px_20px_rgba(0,0,0,0.14)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.6)] flex items-center gap-1.5 border border-slate-200/90 dark:border-white/15 whitespace-nowrap leading-none"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span>{textMessage}</span>
            </motion.div>
            {/* Speech Bubble Arrow Indicator */}
            <div className="w-2 h-2 bg-white dark:bg-[#121214] rotate-45 -mt-1 rounded-xs border-r border-b border-slate-200/90 dark:border-white/15 shadow-2xs" />
          </div>
        )}

        {/* Peeking EyeTracking Button that Tracks Cursor and Pops Up on Hover */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative block focus:outline-none transition-transform duration-300 ease-out transform translate-y-3.5 sm:translate-y-4 group-hover:translate-y-0 group-hover:scale-105"
          aria-label={isOpen ? "Close Lorin AI Assistant" : "Open Lorin AI Assistant"}
        >
          {isOpen ? (
            <div className="mb-2 p-2.5 rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 transition-colors">
              <X className="w-6 h-6 stroke-[2.5]" />
            </div>
          ) : (
            <div className="relative px-3.5 pt-2 pb-5 rounded-t-2xl bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#1E1E24] dark:via-[#18181B] dark:to-[#0F0F12] border-t-2 border-x-2 border-primary/40 dark:border-primary/50 shadow-[0_-6px_22px_rgba(158,35,57,0.18)] dark:shadow-[0_-6px_25px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center transition-colors">
              <EyeTracking
                eyeSize={28}
                gap={8}
                variant={isDark ? "cyber" : "cartoon"}
                irisColor={isDark ? "#00d4ff" : "#9E2339"}
                irisColorSecondary={isDark ? "#9E2339" : "#E11D48"}
                scleraColor={isDark ? "#0a0a1a" : "#FFFFFF"}
                pupilColor={isDark ? "#001122" : "#0F172A"}
                pupilRange={0.75}
                reactivePupil={true}
                blinkInterval={3500}
              />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
