"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  { id: "1", title: "SKIPER-UI", img: "https://picsum.photos/id/10/200", color: "#FFFFFF" },
  { id: "2", title: "FA-FA", img: "https://picsum.photos/id/20/200", color: "#E50914" },
  { id: "3", title: "ATT", img: "https://picsum.photos/id/30/200", color: "#E50914" },
  { id: "4", title: "BAMB", img: "https://picsum.photos/id/40/200", color: "#E50914" },
  { id: "5", title: "SIRA", img: "https://picsum.photos/id/50/200", color: "#E50914" },
  { id: "6", title: "HOKA", img: "https://picsum.photos/id/60/200", color: "#E50914" },
  { id: "7", title: "SAWAN", img: "https://picsum.photos/id/70/200", color: "#E50914" },
  { id: "8", title: "KHATAM", img: "https://picsum.photos/id/80/200", color: "#E50914" },
];

export default function InteractiveHeadlineDock() {
  const [activeId, setActiveId] = useState("1");
  const activeItem = ITEMS.find((item) => item.id === activeId) ?? ITEMS[0]!;

  return (
    <div className="relative min-h-screen bg-[#0F0F0F] flex flex-col justify-between items-center p-8 overflow-hidden select-none">
      {/* Top Dock Navigation */}
      <div className="relative flex items-center gap-3 pt-6 z-20">
        {ITEMS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <div key={item.id} className="relative">
              <motion.button
                onClick={() => setActiveId(item.id)}
                animate={{
                  scale: isActive ? 1.2 : 0.9,
                  y: isActive ? -4 : 0,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-colors ${
                  isActive ? "border-white" : "border-transparent"
                }`}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </motion.button>

              {/* Floating Action Badge following Active Item */}
              {isActive && (
                <motion.div
                  layoutId="activeBadge"
                  className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#E50914] rounded-full flex items-center justify-center text-white shadow-lg pointer-events-none z-30"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                >
                  <svg
                    className="w-3.5 h-3.5 transform rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Kinetic Title */}
      <div className="my-auto flex items-center justify-center h-48 w-full text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={activeItem.id}
            initial={{ scaleY: 0.3, opacity: 0, y: 20 }}
            animate={{ scaleY: 1, opacity: 1, y: 0 }}
            exit={{ scaleY: 0.3, opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: activeItem.color }}
            className="text-8xl md:text-[140px] font-black tracking-tighter uppercase font-mono leading-none"
          >
            {activeItem.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Footer CLI Terminal Prompt */}
      <div className="pb-4 font-mono text-xs text-neutral-500 flex items-center gap-2">
        <span>pnpm</span>
        <span className="text-neutral-300">pnpm dlx skiper-ui add @skiper-ui/skiper6</span>
      </div>
    </div>
  );
}
