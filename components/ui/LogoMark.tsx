"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useId, useRef } from "react";

interface LogoMarkProps extends ImageProps {
  wrapperClassName?: string;
}

/**
 * Renders the logo twice, stacked: a flat solid-red silhouette (via an SVG
 * feColorMatrix filter recoloring the PNG's alpha shape, not a tint) offset
 * behind the real full-color logo — a print-misregistration look. On
 * hover/scroll-into-view it briefly jolts the offset/opacity via CSS
 * keyframes (see .logo-mark-back in globals.css) before settling back.
 */
export default function LogoMark({ wrapperClassName = "", className, alt, ...imageProps }: LogoMarkProps) {
  const filterId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const back = backRef.current;
    if (!wrapper || !back) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduceMotion || hoverCapable) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        back.classList.add("is-jolting");
        window.setTimeout(() => back.classList.remove("is-jolting"), 300);
        observer.disconnect();
      },
      { threshold: 0.6 },
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`logo-mark relative z-10 aspect-square ${wrapperClassName}`}>
      <svg aria-hidden className="absolute h-0 w-0">
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.8627  0 0 0 0 0.1490  0 0 0 0 0.1490  0 0 0 1 0"
          />
        </filter>
      </svg>
      <Image
        {...imageProps}
        ref={backRef}
        alt=""
        aria-hidden
        className="logo-mark-back pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
        style={{ filter: `url(#${filterId})` }}
      />
      <Image
        {...imageProps}
        alt={alt}
        className={`relative z-10 block h-full w-full object-contain ${className ?? ""}`}
      />
    </div>
  );
}
