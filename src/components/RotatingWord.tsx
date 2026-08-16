import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WORD_COLORS: Record<string, string> = {
  Innovation: "#818CF8", // Indigo
  Technology: "#34D399", // Emerald
  Excellence: "#FBBF24", // Amber
  Design: "#F87171",     // Red
  Creativity: "#A78BFA", // Violet
  Craftsmanship: "#F472B6", // Pink
};

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

function HoverScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }
    
    let frame = 0;
    const maxFrames = 15;
    const interval = setInterval(() => {
      frame++;
      if (frame >= maxFrames) {
        clearInterval(interval);
        setDisplayText(text);
        return;
      }
      
      const scrambled = text.split("").map((char, index) => {
        if (char === " ") return " ";
        if (index < (frame / maxFrames) * text.length) {
          return text[index];
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");
      
      setDisplayText(scrambled);
    }, 30);
    
    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-colors duration-300 cursor-default text-primary"
    >
      {displayText}
    </span>
  );
}

function HoverConstructText({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-colors duration-300 cursor-default flex text-primary"
      style={{ display: "inline-flex" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={isHovered ? { y: [15, 0], opacity: [0, 1], rotateX: [-90, 0] } : { y: 0, opacity: 1, rotateX: 0 }}
          transition={isHovered ? { duration: 0.4, delay: i * 0.05, type: "spring", stiffness: 150, damping: 12 } : { duration: 0.2 }}
          style={{ display: "inline-block", whiteSpace: "pre", transformOrigin: "bottom" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function RotatingWord({
  homeWord,
  homeWordNode,
  words,
  homeDuration = 5000,
  wordDuration = 2000,
}: {
  homeWord: string;
  homeWordNode?: React.ReactNode;
  words: string[];
  homeDuration?: number;
  wordDuration?: number;
}) {
  const sequence = useRef<{ id: string; word: React.ReactNode; duration: number }[]>([]);
  if (sequence.current.length === 0) {
    const homeItem = { 
      id: "home", 
      word: homeWord === "ARCHITECTURE" ? <HoverConstructText text={homeWord} /> : <HoverScrambleText text={homeWord} />, 
      duration: homeDuration 
    };

    const newSequence = [];
    words.forEach((w) => {
      newSequence.push(homeItem);
      newSequence.push({ id: w, word: w, duration: wordDuration });
    });
    newSequence.push(homeItem); // End permanently on home

    sequence.current = newSequence;
  }

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= sequence.current.length - 1) return; // Stop at home word

    const current = sequence.current[step]!;
    const t = setTimeout(() => setStep((s) => s + 1), current.duration);
    return () => clearTimeout(t);
  }, [step]);

  const currentItem = sequence.current[step]!;
  const color = currentItem.id === "home" ? undefined : WORD_COLORS[currentItem.id];

  return (
    <span className="relative inline-block whitespace-nowrap overflow-hidden" aria-live="polite">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentItem.id}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block whitespace-nowrap"
          style={
            color
              ? {
                  color: color,
                }
              : {}
          }
        >
          {currentItem.word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}