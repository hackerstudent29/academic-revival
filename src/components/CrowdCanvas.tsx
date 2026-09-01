"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const devMapping: Record<string, string> = {
  ram: "RAMANATHAN",
  niran: "NIRANJAN",
  ashwa: "ASHWA",
  sridhar: "SRIDHAR",
  nandhinii: "NANDHINI"
};

const HoverAnimatedTitle = ({ currentText, isHovered }: { currentText: string, isHovered: boolean }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [prevText, setPrevText] = useState(currentText);
  const [activeText, setActiveText] = useState(currentText);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (currentText !== activeText) {
      setPrevText(activeText);
      setActiveText(currentText);
    }
  }, [currentText, activeText]);

  useEffect(() => {
    if (prevText === activeText) return;

    const container = containerRef.current;
    if (!container) return;

    const oldChars = container.querySelectorAll('.char-old');
    const newChars = container.querySelectorAll('.char-new');

    if (tlRef.current) {
      tlRef.current.kill();
    }

    const tl = gsap.timeline();
    tlRef.current = tl;
    
    // Outbound
    tl.to(oldChars, {
      y: "-150%",
      rotationX: 15,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      stagger: {
        each: 0.04,
        from: "edges"
      }
    });

    // Inbound
    gsap.set(newChars, { y: "150%", rotationX: -15, opacity: 0, scaleY: 1, transformOrigin: "bottom center" });
    tl.to(newChars, {
      stagger: {
        each: 0.06,
        from: "center"
      },
      keyframes: [
        { y: "0%", rotationX: 0, opacity: 1, scaleY: 1.3, duration: 0.25, ease: "power2.out" },
        { scaleY: 1, duration: 0.4, ease: "elastic.out(1.5, 0.4)" }
      ]
    }, ">-0.15");

  }, [activeText, prevText]);

  return (
    <div 
      ref={containerRef}
      className="relative flex justify-center items-center overflow-hidden py-2"
    >
      <div className="absolute flex pointer-events-none text-black">
        {prevText.split('').map((char, i) => (
          <span key={`old-${prevText}-${i}`} className="char-old inline-block whitespace-pre">
            {char}
          </span>
        ))}
      </div>
      <div className={`flex transition-colors duration-300 pointer-events-none ${isHovered ? 'text-[#E50914]' : 'text-black'}`}>
        {activeText.split('').map((char, i) => (
          <span key={`new-${activeText}-${i}`} className="char-new inline-block whitespace-pre">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

const CrowdCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showTitle, setShowTitle] = useState(false);
  const [hoveredName, setHoveredName] = useState("THE DEVELOPERS");
  const [isHovering, setIsHovering] = useState(false);
  const hoveredNameRef = useRef("THE DEVELOPERS");
  const isHoveringRef = useRef(false);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // UTILS
    const randomRange = (min: number, max: number) =>
      min + Math.random() * (max - min);
    const randomIndex = (array: any[]) => randomRange(0, array.length) | 0;
    const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];
    const removeItemFromArray = (array: any[], item: any) =>
      removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array: any[]) =>
      removeFromArray(array, randomIndex(array));

    // TWEEN FACTORIES
    const resetPeep = ({ stage, peep }: { stage: any; peep: any }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX: number;
      let endX: number;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return {
        startX,
        startY,
        endX,
      };
    };

    const normalWalk = ({ peep, props }: { peep: any; props: any }) => {
      const { startX, startY, endX } = props;
      const xDuration = 8; // Faster walk
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(
        peep,
        {
          duration: xDuration,
          x: endX,
          ease: "none",
        },
        0,
      );
      tl.to(
        peep,
        {
          duration: yDuration,
          repeat: Math.max(1, Math.floor(xDuration / yDuration)),
          yoyo: true,
          y: startY - 10,
        },
        0,
      );

      return tl;
    };

    const stopWalk = ({ peep, props }: { peep: any; props: any }) => {
      const { startX, startY, endX } = props; // endX is the standing target X
      const dist = Math.abs(endX - startX);
      const stageWidth = stage.width || 1000;
      const xDuration = Math.max((dist / stageWidth) * 8, 0.5); // Faster stop walk
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.8, 1.2)); // Less varied speed for choreographed entrance
      
      tl.to(
        peep,
        {
          duration: xDuration,
          x: endX,
          ease: "power1.out",
        },
        0,
      );
      
      const repeatCount = Math.max(1, Math.floor(xDuration / yDuration));
      tl.to(
        peep,
        {
          duration: yDuration,
          repeat: repeatCount,
          yoyo: true,
          y: startY - 10,
        },
        0,
      );

      return tl;
    };


    // TYPES
    type Peep = {
      image: HTMLImageElement;
      name: string;
      isSpecial: boolean;
      width: number;
      height: number;
      x: number;
      y: number;
      anchorY: number;
      scaleX: number;
      walk: any;
      render: (ctx: CanvasRenderingContext2D) => void;
    };

    // FACTORY FUNCTIONS
    const createPeep = (image: HTMLImageElement): Peep => {
      // Scale down high-res images
      const scale = 0.3;
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;

      const peep: Peep = {
        image,
        name: image.dataset.name || "",
        isSpecial: image.dataset.special === "true",
        width,
        height,
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        walk: null,
        render: (ctx: CanvasRenderingContext2D) => {
          ctx.save();
          ctx.translate(peep.x, peep.y);
          ctx.scale(peep.scaleX, 1);
          ctx.drawImage(
            peep.image,
            0,
            0,
            image.naturalWidth,
            image.naturalHeight,
            0,
            0,
            peep.width,
            peep.height
          );
          ctx.restore();
        },
      };

      return peep;
    };

    // MAIN
    const stage = {
      width: 0,
      height: 0,
    };

    const allPeeps: Peep[] = [];
    const availablePeeps: Peep[] = []; // Regular crowd
    const specialPeeps: Peep[] = []; // Developers
    const crowd: Peep[] = []; // Currently on screen

    // Animation Phases
    let phase = 1; // 1 = Normal, 2 = Stopping, 3 = Empty Crowd

    const initCrowd = () => {
      // Initially fill the screen with regular peeps
      const initialCount = Math.min(30, availablePeeps.length); // Limit initial crowd density
      for (let i = 0; i < initialCount; i++) {
        const t = setTimeout(() => {
          if (phase < 3) addPeepToCrowd();
        }, Math.random() * 4000); // Randomly stagger their entrance over the first 4 seconds
        sequenceTimers.push(t);
      }
    };

    const addPeepToCrowd = () => {
      if (availablePeeps.length === 0) return null;

      const peep = removeRandomFromArray(availablePeeps);
      const walk = normalWalk({
        peep,
        props: resetPeep({
          peep,
          stage,
        }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        
        // Spawn a new regular peep if we are NOT in phase 3
        if (phase < 3) {
          addPeepToCrowd();
        }
      });

      peep.walk = walk;

      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);

      return peep;
    };

    const removePeepFromCrowd = (peep: Peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);

      crowd.forEach((peep) => {
        peep.render(ctx);
      });

      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;

      crowd.forEach((peep) => {
        peep.walk?.kill();
      });

      crowd.length = 0;
      availablePeeps.length = 0;
      specialPeeps.length = 0;
      
      allPeeps.forEach(p => {
        if (p.isSpecial) specialPeeps.push(p);
        else availablePeeps.push(p);
      });

      initCrowd();
    };

    const specialDevConfig: Record<string, { targetPct: number; spawnFrom: "left" | "right"; yOffset: number }> = {
      // Top floor
      ram: { targetPct: 0.33, spawnFrom: "left", yOffset: -60 },
      niran: { targetPct: 0.67, spawnFrom: "right", yOffset: -60 },
      // Bottom floor
      ashwa: { targetPct: 0.16, spawnFrom: "left", yOffset: 20 },
      sridhar: { targetPct: 0.50, spawnFrom: "left", yOffset: 20 },
      nandhinii: { targetPct: 0.84, spawnFrom: "right", yOffset: 20 },
    };

    const stopDeveloper = (name: string) => {
      const config = specialDevConfig[name];
      if (!config) return;

      let peep = specialPeeps.find(p => p.name === name);
      if (!peep) return;

      // Move from holding pool to screen
      removeItemFromArray(specialPeeps, peep);
      crowd.push(peep);
      
      const targetVisualCenter = stage.width * config.targetPct;
      const startY = stage.height - peep.height + config.yOffset;
      
      let startX = config.spawnFrom === "left" ? -peep.width : stage.width + peep.width;
      peep.scaleX = config.spawnFrom === "left" ? 1 : -1;
      
      // Final position X so that visual center is at targetVisualCenter
      const targetX = targetVisualCenter - (peep.width / 2) * peep.scaleX;

      peep.y = startY;
      peep.anchorY = startY;
      peep.x = startX;

      const props = { startX, startY, endX: targetX };
      peep.walk = stopWalk({ peep, props });
      crowd.sort((a, b) => a.anchorY - b.anchorY);
    };

    // LOAD IMAGES
    const regularImageCount = 100;
    const devNames = ["ram", "niran", "ashwa", "sridhar", "nandhinii"]; // Sequence of entry
    const totalImages = regularImageCount + devNames.length;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];
    let isCleanedUp = false;
    let sequenceTimers: NodeJS.Timeout[] = [];

    const init = () => {
      if (isCleanedUp) return;
      loadedImages.forEach((img) => {
        allPeeps.push(createPeep(img));
      });
      resize();
      gsap.ticker.add(render);

      // Start the sequence
      const t1 = setTimeout(() => {
        phase = 2; // Stopping sequence
        
        devNames.forEach((name, idx) => {
          const dt = setTimeout(() => {
            stopDeveloper(name);
          }, idx * 3000); // 3s between each dev starting their walk
          sequenceTimers.push(dt);
        });

        const totalStopDelay = devNames.length * 3000;
        const t2 = setTimeout(() => {
          phase = 3; // Empty crowd
        }, totalStopDelay + 3000); // 3s extra before emptying
        sequenceTimers.push(t2);

        // Show the title exactly when the crowd has fully cleared out
        // The walk takes 8s, so 10s gives a safe buffer for everyone to leave
        const t3 = setTimeout(() => {
          setShowTitle(true);
        }, totalStopDelay + 3000 + 10000); 
        sequenceTimers.push(t3);

      }, 2000); // Wait 2s initially
      sequenceTimers.push(t1);
    };

    const checkLoaded = (success: boolean, img: HTMLImageElement) => {
      loadedCount++;
      if (success) {
        loadedImages.push(img);
      }
      if (loadedCount === totalImages) {
        init();
      }
    };

    // Load dev peeps
    devNames.forEach((name) => {
      const img = document.createElement("img");
      img.dataset.name = name;
      img.dataset.special = "true";
      img.onload = () => checkLoaded(true, img);
      img.onerror = () => checkLoaded(false, img);
      img.src = `/images/peeps/${name}.png`;
    });

    // Load regular peeps
    for (let i = 1; i <= regularImageCount; i++) {
      const img = document.createElement("img");
      img.dataset.name = `peep-${i}`;
      img.dataset.special = "false";
      img.onload = () => checkLoaded(true, img);
      img.onerror = () => checkLoaded(false, img);
      img.src = `/images/peeps/peep-${i}.png`;
    }

    const handleMouseLeave = () => {
      if (isHoveringRef.current) {
        isHoveringRef.current = false;
        hoveredNameRef.current = "THE DEVELOPERS";
        canvas.style.cursor = "default";
        setHoveredName("THE DEVELOPERS");
        setIsHovering(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;

      if (subtitleRef.current) {
        const subtitleRect = subtitleRef.current.getBoundingClientRect();
        if (e.clientY < subtitleRect.bottom + 20) {
          handleMouseLeave();
          return;
        }
      }

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found: string | null = null;
      for (let i = crowd.length - 1; i >= 0; i--) {
        const peep = crowd[i];
        if (!peep.isSpecial) continue;
        
        const minX = peep.scaleX === 1 ? peep.x : peep.x - peep.width;
        const maxX = peep.scaleX === 1 ? peep.x + peep.width : peep.x;
        const minY = peep.y;
        const maxY = peep.y + peep.height;
        
        if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY) {
          found = peep.name;
          break;
        }
      }

      if (found && devMapping[found]) {
        canvas.style.cursor = "pointer";
        if (hoveredNameRef.current !== devMapping[found]) {
          isHoveringRef.current = true;
          hoveredNameRef.current = devMapping[found];
          setHoveredName(devMapping[found]);
          setIsHovering(true);
        }
      } else {
        canvas.style.cursor = "default";
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      isCleanedUp = true;
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      gsap.ticker.remove(render);
      crowd.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });
      sequenceTimers.forEach(t => clearTimeout(t));
    };
  }, []);

  return (
    <>
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@700&display=swap" rel="stylesheet" />
      <canvas ref={canvasRef} className="absolute bottom-0 h-[90vh] w-full" />
      
      <div 
        className={`absolute top-[12%] left-0 right-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 ease-out transform ${
          showTitle ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <h1 
          style={{ fontFamily: "'Gyozah', sans-serif" }} 
          className="flex flex-col items-center justify-center text-7xl md:text-9xl font-bold uppercase tracking-wider text-center"
        >
          <div className="text-black pointer-events-none">MEET</div>
          <HoverAnimatedTitle currentText={hoveredName} isHovered={isHovering} />
        </h1>
        <p ref={subtitleRef} style={{ fontFamily: "'Gyozah', sans-serif" }} className="mt-2 text-base md:text-lg font-bold text-black/60 tracking-widest text-center uppercase">
          (Go ahead, hover or click 'em. They haven't slept in days.)
        </p>
      </div>
    </>
  );
};

const Skiper39 = () => {
  return (
    <div className="relative h-full w-full bg-white text-black">
      <div className="absolute bottom-0 h-full w-screen">
        <CrowdCanvas />
      </div>
    </div>
  );
};

export { CrowdCanvas, Skiper39 };
