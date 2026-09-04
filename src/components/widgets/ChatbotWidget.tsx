import { useState, useRef } from "react";
import { X, ExternalLink, RefreshCw, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] select-none font-sans pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 right-0 w-[360px] sm:w-[440px] md:w-[460px] h-[600px] max-h-[calc(100vh-100px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-sm shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden bg-white/15 backdrop-blur-md border border-white/20 shrink-0">
                  <img src="/images/bot-mascot.png" alt="AI Mascot" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-primary rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm leading-none text-white tracking-tight font-oswald uppercase">Lorin AI Assistant</h3>
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-1.5 py-0.5 rounded text-white/90 font-mono">
                      LIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-white/75 mt-0.5 font-medium font-sans">MSAJCE Campus AI Assistant</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleRefresh}
                  title="Reload AI Assistant"
                  className="p-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>

                <a
                  href="https://lorin-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Lorin AI in new tab"
                  className="p-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close Assistant"
                  className="p-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Embedded Iframe Body */}
            <div className="relative flex-1 w-full bg-background overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/90 backdrop-blur-sm text-foreground">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Connecting to Lorin AI...
                  </span>
                </div>
              )}

              <iframe
                key={iframeKey}
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

      {/* Floating Toggle Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.92 }}
        className="w-16 h-16 rounded-full overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer border-2 border-primary/20 bg-background/80 backdrop-blur-md focus:outline-none transition-shadow hover:shadow-primary/30 hover:border-primary relative"
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full flex items-center justify-center bg-primary text-white"
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full relative flex items-center justify-center"
            >
              <img
                src="/images/bot-mascot.png"
                alt="AI Assistant"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-background rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
