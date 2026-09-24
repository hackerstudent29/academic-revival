import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type LayoutGridCard = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({
  cards,
  className,
}: {
  cards: LayoutGridCard[];
  className?: string;
}) => {
  const [selected, setSelected] = useState<LayoutGridCard | null>(null);
  const [lastSelected, setLastSelected] = useState<LayoutGridCard | null>(null);

  const handleClick = (card: LayoutGridCard) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div
      className={cn(
        "w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative",
        className
      )}
    >
      {cards.map((card, i) => (
        <div key={card.id || i} className={cn(card.className, "min-h-[260px] sm:min-h-[300px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden cursor-pointer h-full w-full transition-all duration-300",
              "rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs border border-border shadow-xs",
              selected?.id === card.id
                ? "rounded-2xl cursor-pointer fixed sm:absolute inset-4 sm:inset-0 sm:h-3/4 sm:w-3/4 md:w-2/3 m-auto z-50 flex justify-center items-center flex-wrap flex-col border-2 border-primary/60 shadow-2xl"
                : lastSelected?.id === card.id
                ? "z-40 bg-white dark:bg-[#18181B]"
                : "bg-white dark:bg-[#18181B] hover:border-primary/50"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black/60 backdrop-blur-xs opacity-0 z-10 transition-opacity",
          selected?.id ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        animate={{ opacity: selected?.id ? 0.4 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: LayoutGridCard }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-300"
      )}
      alt="MSAJCE Central Library Showcase"
      onError={(e) => {
        (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
      }}
    />
  );
};

const SelectedCard = ({ selected }: { selected: LayoutGridCard | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-2xl shadow-2xl relative z-[60] overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.75,
        }}
        className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/70 to-transparent z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 40,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-6 sm:px-8 pb-6 sm:pb-8 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
