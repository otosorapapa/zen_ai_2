import { useCallback, useEffect, useRef, useState } from "react";

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useRevealOnScroll<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
}: RevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const cleanupObserver = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = null;
  }, []);

  const setRef = useCallback((node: T | null) => {
    if (observerRef.current && targetRef.current) {
      observerRef.current.unobserve(targetRef.current);
    }

    targetRef.current = node;

    if (observerRef.current && node) {
      observerRef.current.observe(node);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    cleanupObserver();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && observerRef.current) {
              observerRef.current.disconnect();
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    const node = targetRef.current;
    if (node) {
      observerRef.current.observe(node);
    }

    return () => {
      cleanupObserver();
    };
  }, [threshold, rootMargin, once, cleanupObserver]);

  return { ref: setRef, isVisible };
}
