"use client";

import { useEffect, useRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

type SectionRevealProps = ComponentPropsWithoutRef<"section">;

/**
 * Drop-in replacement for <section>. Fires a global "apex:section-reveal"
 * event whenever it scrolls into view, which SceneBackground listens for
 * to replay the slash-bar animation — keeps section markup untouched.
 */
export default function SectionReveal({ children, ...props }: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.dispatchEvent(new Event("apex:section-reveal"));
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} {...props}>
      {children}
    </section>
  );
}
