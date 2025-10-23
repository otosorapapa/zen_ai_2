import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ParallaxOptions = {
  intensity?: number;
  maxTranslate?: number;
  axis?: "x" | "y";
};

export function useParallax<T extends HTMLElement>({
  intensity = 0.15,
  maxTranslate = 24,
  axis = "y",
}: ParallaxOptions = {}) {
  const elementRef = useRef<T | null>(null);
  const frameRef = useRef<number>();
  const [style, setStyle] = useState<CSSProperties>({ transform: "translate3d(0,0,0)" });

  const setRef = useCallback((node: T | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updatePosition = () => {
      const node = elementRef.current;
      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (elementCenter - viewportCenter) * intensity;
      const clamped = Math.max(-maxTranslate, Math.min(maxTranslate, offset));
      const transform =
        axis === "x"
          ? `translate3d(${clamped}px, 0, 0)`
          : `translate3d(0, ${clamped}px, 0)`;

      setStyle((previous) => {
        if (previous.transform === transform) {
          return previous;
        }
        return { transform };
      });
    };

    const handleScroll = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [axis, intensity, maxTranslate]);

  return { ref: setRef, style };
}
