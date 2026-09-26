import { useState, useEffect, useRef, FC } from "react";
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

    // Contextual Hover Detection (Minimal 4-5 small sentences, strictly NO emojis)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Hovering the chatbot launcher itself
      if (target.closest("[data-chatbot-launcher]")) {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setCurrentText("Click to chat with me");
        return;
      }

      // Hovering clickable links or buttons
      if (target.closest("a, button, [role='button'], input, select, textarea")) {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setCurrentText("Curious about this?");
        hoverTimeoutRef.current = setTimeout(startIdleRotation, 4000);
        return;
      }
    };

    // User Scroll
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 400) {
        lastScrollY = currentScrollY;
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setCurrentText("Can I help you?");
        hoverTimeoutRef.current = setTimeout(startIdleRotation, 4000);
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (idleIntervalRef.current) clearInterval(idleIntervalRef.current);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return currentText;
}

interface ChatbotWidgetProps {
  /** The URL where Lorin AI chatbot is hosted */
  botUrl?: string;
  /** Optional title shown in the popup header */
  title?: string;
}

export const ChatbotWidget: FC<ChatbotWidgetProps> = ({
  botUrl = "https://nvidia-powered-rag.vercel.app",
  title = "Lorin AI",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const isDark = useThemeDetector();
  const textMessage = useChatbotEmotions(isOpen);

  const cleanBaseUrl = botUrl.replace(/\/$/, "");
  const embedUrl = cleanBaseUrl.includes("?") 
    ? `${cleanBaseUrl}&embed=true` 
    : `${cleanBaseUrl}/?embed=true`;

  return (
    <div className="fixed bottom-0 right-4 sm:right-8 md:right-10 z-[999999] select-none font-sans pointer-events-auto">
      {/* Open Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.82, y: 28 }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 28,
              mass: 0.8,
            }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-24 right-4 sm:right-8 md:right-10 w-[360px] sm:w-[430px] md:w-[460px] h-[640px] max-h-[calc(100vh-120px)] bg-card border border-border dark:border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[1000000] backdrop-blur-xl will-change-transform"
          >
            {/* Embedded Iframe Container */}
            <div className="relative w-full h-full bg-background overflow-hidden flex-1">
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/95 backdrop-blur-md text-foreground"
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>

              <iframe
                key={iframeKey}
                src={embedUrl}
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
        {/* Floating Minimal Speech Bubble */}
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

        {/* Interactive Bot Toggle Button (Peeking Mascot when closed, Bot-like Closing Visor when open) */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 450, damping: 22 }}
          className="relative block focus:outline-none cursor-pointer"
          aria-label={isOpen ? "Close Lorin AI Assistant" : "Open Lorin AI Assistant"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="bot-close-mode"
                initial={{ opacity: 0, scale: 0.75, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.75, y: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                className="relative px-3.5 pt-2 pb-4 rounded-t-2xl bg-gradient-to-b from-[#9E2339] via-[#861E30] to-[#671422] dark:from-[#E11D48] dark:via-[#BE123C] dark:to-[#9F1239] border-t-2 border-x-2 border-white/30 dark:border-white/25 shadow-[0_-6px_22px_rgba(158,35,57,0.35)] dark:shadow-[0_-6px_25px_rgba(0,0,0,0.7)] backdrop-blur-md flex flex-col items-center justify-center select-none"
              >
                {/* Bot Antenna / Online Pulse & Close Label */}
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
                  <span className="text-[9px] font-oswald font-black uppercase tracking-wider text-white/95 leading-none">
                    CLOSE
                  </span>
                </div>

                {/* Cyber Robot Visor with Resting Eyes + Central Close 'X' */}
                <div className="relative flex items-center justify-center gap-1.5 px-2 py-1 rounded-xl bg-black/30 border border-white/20 text-white shadow-inner">
                  {/* Left Robot Eye (Resting squint) */}
                  <span className="w-1 h-2.5 rounded-full bg-white/45" />
                  {/* Animated Rotating Close Cross */}
                  <motion.div
                    initial={{ rotate: -90, scale: 0.6 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0.6 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  >
                    <X className="w-4 h-4 stroke-[3] text-white" />
                  </motion.div>
                  {/* Right Robot Eye (Resting squint) */}
                  <span className="w-1 h-2.5 rounded-full bg-white/45" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="bot-idle-mode"
                initial={{ opacity: 0, scale: 0.75, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.75, y: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                className="relative px-3.5 pt-2 pb-5 rounded-t-2xl bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#1E1E24] dark:via-[#18181B] dark:to-[#0F0F12] border-t-2 border-x-2 border-[#9E2339]/40 dark:border-[#E11D48]/50 shadow-[0_-6px_22px_rgba(158,35,57,0.18)] dark:shadow-[0_-6px_25px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center transition-colors"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export const LorinChatWidget = ChatbotWidget;
export default ChatbotWidget;
