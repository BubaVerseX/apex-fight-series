"use client";

import Image, { type ImageProps } from "next/image";

interface LogoBadgeProps extends ImageProps {
  wrapperClassName?: string;
}

/**
 * Wraps a logo <Image> in a soft red glow + slow-rotating ring. The image
 * itself never animates — only the glow/ring layers behind it do.
 */
export default function LogoBadge({ wrapperClassName = "", className, alt, ...imageProps }: LogoBadgeProps) {
  return (
    <div className={`logo-badge relative z-10 aspect-square ${wrapperClassName}`}>
      <div aria-hidden className="logo-badge-glow pointer-events-none absolute" />
      <div aria-hidden className="logo-badge-ring pointer-events-none absolute" />
      <Image
        {...imageProps}
        alt={alt}
        className={`relative block h-full w-full object-contain ${className ?? ""}`}
      />
    </div>
  );
}
