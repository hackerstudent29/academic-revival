import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    // Aggressively force scroll to top to combat asynchronous browser logic
    let attempts = 0;
    const interval = setInterval(() => {
      window.scrollTo(0, 0);
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true });
      }
      
      attempts++;
      if (attempts > 15) {
        clearInterval(interval); // Stop forcing after 150ms
      }
    }, 10);

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}
