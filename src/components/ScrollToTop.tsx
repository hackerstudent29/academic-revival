import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // Force scroll to top on path change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    
    // A slight delay ensures it overrides the browser's native scroll restoration 
    // and Lenis initialization when doing a hard refresh.
    const t = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 50);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
