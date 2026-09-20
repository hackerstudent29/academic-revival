import { useEffect, useRef } from "react";

interface MotionViewCanvasProps {
  width?: string | number;
  className?: string;
}

declare global {
  interface Window {
    MotionView?: {
      mount: (target: string | HTMLElement, options: unknown) => { destroy?: () => void };
    };
  }
}

export function MotionViewCanvas({ width = 340, className = "" }: MotionViewCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let instance: { destroy?: () => void } | null = null;

    const initMotion = () => {
      if (window.MotionView && canvas) {
        instance = window.MotionView.mount(canvas, {
          familyKey: "grid",
          imageCount: 20,
          aspectId: "16:9",
          loopSec: 12,
          params: {
            rows: 3,
            hero: 0.95,
            window: 0.3,
            path: 2,
            gutter: 0.013,
            life: 0.19,
            breathe: 0.02,
          },
          bgId: "paper",
          focusReach: 0.52,
          focusSoft: 2.4,
          easePts: [0.4, 0, 0.2, 1],
          texts: [
            {
              content: "",
              x: 0.09,
              y: 0.075,
              size: 0.0145,
              weight: 700,
              color: "#ffffff",
              font: "sans",
              tracking: 0.44,
              align: "left",
              id: "tx-1789885904347-0",
            },
            {
              content: "",
              x: 0.09,
              y: 0.855,
              size: 0.082,
              weight: 500,
              italic: true,
              color: "#ffffff",
              font: "serif",
              align: "left",
              leading: 0.94,
              id: "tx-1789885904348-1",
            },
            {
              content: "",
              x: 0.09,
              y: 0.945,
              size: 0.0135,
              weight: 650,
              color: "#a9a9b4",
              font: "sans",
              tracking: 0.3,
              align: "left",
              id: "tx-1789885904348-2",
            },
          ],
        });
      }
    };

    if (window.MotionView) {
      initMotion();
    } else {
      const existingScript = document.querySelector('script[src="https://feralui.dev/motionview/runtime.js"]');
      if (existingScript) {
        existingScript.addEventListener("load", initMotion);
      } else {
        const script = document.createElement("script");
        script.src = "https://feralui.dev/motionview/runtime.js";
        script.async = true;
        script.onload = initMotion;
        document.body.appendChild(script);
      }
    }

    return () => {
      if (instance && typeof instance.destroy === "function") {
        instance.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="motion"
      style={{ width: typeof width === "number" ? `${width}px` : width }}
      className={className}
    />
  );
}

export default MotionViewCanvas;
