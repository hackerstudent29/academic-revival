import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "வணக்கம்",
  "Hello",
  "Hallo",
  "Bonjour",
  "नमस्ते",
  "こんにちは",
  "مرحباً",
  "Welcome to MSAJCE",
];

export function DynamicText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= greetings.length - 1) return;
    const t = setTimeout(() => setIndex((i) => i + 1), 1100);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="mb-3 flex min-h-[42px] items-center gap-3" aria-label="Greetings">
      <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-primary" />
      <div className="relative h-8 min-w-[220px] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center whitespace-nowrap text-lg font-semibold tracking-tight text-foreground"
          >
            {greetings[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}