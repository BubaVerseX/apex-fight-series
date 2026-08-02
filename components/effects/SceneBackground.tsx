"use client";

import { useEffect, useRef } from "react";

/**
 * Global ambient background — mounted once in the root layout.
 *
 * IMPACT GRIT (this component): parallax spotlight + full-page grain,
 * both fixed behind all content, plus slash bars that replay on every
 * "apex:section-reveal" event dispatched by <SectionReveal>.
 *
 * PULSE STRIKE (see PulseGlow below): a local heartbeat glow dropped
 * into the hero/CTA sections themselves, since it needs to scroll with
 * those sections rather than stay pinned to the viewport.
 */
export default function SceneBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Coarse-pointer (phone/tablet) devices skip scroll-linked parallax math
    // entirely to avoid scroll jank — the static glow still renders.
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isCoarsePointer) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const offset = window.scrollY * 0.25;
        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate3d(-50%, ${-offset}px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const el = barsRef.current;
    if (!el) return;

    const replay = () => {
      el.classList.remove("scene-bars-active");
      // Force a reflow so the removed class actually takes effect before
      // it's re-added, otherwise the browser batches both and the
      // slide-in transition never replays.
      void el.offsetWidth;
      el.classList.add("scene-bars-active");
    };

    window.addEventListener("apex:section-reveal", replay);
    return () => window.removeEventListener("apex:section-reveal", replay);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={spotlightRef}
        className="scene-spotlight absolute left-1/2 top-0"
        style={{ transform: "translate3d(-50%, 0, 0)" }}
      />
      <div className="scene-grain-overlay absolute inset-0" />
      <div ref={barsRef} className="scene-bars fixed left-0 top-1/2">
        <span className="scene-bar scene-bar-red" />
        <span className="scene-bar scene-bar-white" />
      </div>
    </div>
  );
}

/**
 * The PULSE STRIKE heartbeat glow. Rendered locally inside a hero/CTA
 * section (which must be `relative`), not inside SceneBackground, so it
 * scrolls naturally with that section instead of staying viewport-fixed.
 */
export function PulseGlow({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`scene-pulse pointer-events-none absolute ${className}`} />;
}
