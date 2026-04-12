import { useState, useEffect } from "react";

/**
 * Custom hook to track the current vertical scroll position.
 * Useful for showing/hiding the sticky nav shadow, back-to-top button, etc.
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
