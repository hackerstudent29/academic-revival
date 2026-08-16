import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WORD_IMAGES: Record<string, string> = {
  Innovation: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  Technology: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  Excellence: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
  Design: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  Creativity: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
  Craftsmanship: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
};

export function RotatingWord({
  homeWord,
  words,
  homeDuration = 5000,
  wordDuration = 2000,
}: {
  homeWord: string;
  words: string[];
  homeDuration?: number;
  wordDuration?: number;
}) {
  const sequence = useRef<{ word: string; duration: number }[]>([]);
  sequence.current = [
    { word: homeWord, duration: homeDuration },
    ...words.map((w) => ({ word: w, duration: wordDuration })),
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    const current = sequence.current[step]!;
    const t = setTimeout(() => setStep((s) => (s + 1) % sequence.current.length), current.duration);
    return () => clearTimeout(t);
  }, [step]);

  const word = sequence.current[step]!.word;
  const img = word === homeWord ? undefined : WORD_IMAGES[word];
  const letters = word.split("");

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial="hidden"
          animate="show"
          exit="out"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.035 } },
            out: { transition: { staggerChildren: 0.018, staggerDirection: -1 } },
          }}
          className="inline-block whitespace-nowrap"
          style={
            (img
              ? {
                  backgroundImage: `url("${img}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }
              : {}) as React.CSSProperties
          }
        >
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              className="inline-block"
              variants={{
                hidden: { y: "0.6em", opacity: 0, rotateX: -70, filter: "blur(6px)" },
                show: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  filter: "blur(0px)",
                  transition: { type: "spring", stiffness: 380, damping: 26, mass: 0.7 },
                },
                out: {
                  y: "-0.5em",
                  opacity: 0,
                  filter: "blur(6px)",
                  transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
                },
              }}
              style={{ transformPerspective: 800 }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}