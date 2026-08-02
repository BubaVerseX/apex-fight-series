"use client";

import { useEffect, useRef } from "react";

interface Hex {
  col: number;
  row: number;
  x: number;
  y: number;
  phase: number;
  activatedAt: number | null;
}

const HEX_SIZE = 22;
const HEX_SIZE_SMALL_VIEWPORT = 28;
const SMALL_VIEWPORT_WIDTH = 640;
const EMBER_RADIUS = 60;
const CLICK_BURST_RADIUS = 96;
const EMBER_DURATION = 1000;
const HAZE_RADIUS = 300;
const PULSE_PERIOD = 5200;
const RESIZE_DEBOUNCE = 150;
const NEIGHBOR_SEARCH_RANGE = 3;

function hexToRgb(hex: string): string {
  const clean = hex.trim().replace("#", "");
  const value = parseInt(clean, 16);
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
}

function drawHexPath(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

/**
 * Single fixed full-page canvas — the site's only background layer.
 * Idle: faint red hex outlines. On desktop, the cursor lights up nearby
 * hexes (spatially indexed, not a brute-force distance loop over the
 * whole grid) leaving a fading ember trail, plus a soft haze underneath.
 * Touch devices get the ambient pulse only; reduced-motion gets a static
 * grid with no animation loop at all.
 */
export default function HexGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const animate = !prefersReducedMotion;
    const interactive = animate && !isTouch;

    const rootStyles = getComputedStyle(document.documentElement);
    const redRgb = hexToRgb(rootStyles.getPropertyValue("--color-apex-red") || "#dc2626");
    const redBrightRgb = hexToRgb(rootStyles.getPropertyValue("--color-apex-red-bright") || "#ef4444");

    let hexes: Hex[] = [];
    let hexMap = new Map<string, Hex>();
    let hexSize = HEX_SIZE;
    let colSpacing = HEX_SIZE * 1.5;
    let rowSpacing = Math.sqrt(3) * HEX_SIZE;

    const mouse = { x: 0, y: 0, active: false };

    const buildGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      hexSize = width < SMALL_VIEWPORT_WIDTH ? HEX_SIZE_SMALL_VIEWPORT : HEX_SIZE;
      colSpacing = hexSize * 1.5;
      rowSpacing = Math.sqrt(3) * hexSize;

      const cols = Math.ceil(width / colSpacing) + 2;
      const rows = Math.ceil(height / rowSpacing) + 2;

      const nextHexes: Hex[] = [];
      const nextMap = new Map<string, Hex>();
      for (let col = 0; col < cols; col++) {
        const x = col * colSpacing;
        const yOffset = col % 2 === 0 ? 0 : rowSpacing / 2;
        for (let row = 0; row < rows; row++) {
          const y = row * rowSpacing + yOffset;
          const hex: Hex = { col, row, x, y, phase: Math.random() * Math.PI * 2, activatedAt: null };
          nextHexes.push(hex);
          nextMap.set(`${col},${row}`, hex);
        }
      }
      hexes = nextHexes;
      hexMap = nextMap;
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    };

    resizeCanvas();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, RESIZE_DEBOUNCE);
    };
    window.addEventListener("resize", onResize);

    // Rather than testing every hex's distance to the cursor every frame,
    // reverse the grid formula to find the handful of columns/rows that
    // could possibly fall within radius and only check those.
    const activateNearby = (x: number, y: number, radius: number) => {
      const now = performance.now();
      const approxCol = Math.round(x / colSpacing);
      for (let col = approxCol - NEIGHBOR_SEARCH_RANGE; col <= approxCol + NEIGHBOR_SEARCH_RANGE; col++) {
        const yOffset = col % 2 === 0 ? 0 : rowSpacing / 2;
        const approxRow = Math.round((y - yOffset) / rowSpacing);
        for (let row = approxRow - NEIGHBOR_SEARCH_RANGE; row <= approxRow + NEIGHBOR_SEARCH_RANGE; row++) {
          const hex = hexMap.get(`${col},${row}`);
          if (!hex) continue;
          const dx = hex.x - x;
          const dy = hex.y - y;
          if (dx * dx + dy * dy <= radius * radius) {
            hex.activatedAt = now;
          }
        }
      }
    };

    let moveScheduled = false;
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      if (!moveScheduled) {
        moveScheduled = true;
        requestAnimationFrame(() => {
          moveScheduled = false;
          activateNearby(mouse.x, mouse.y, EMBER_RADIUS);
        });
      }
    };
    const onClick = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      activateNearby(mouse.x, mouse.y, CLICK_BURST_RADIUS);
    };
    const onMouseLeaveWindow = () => {
      mouse.active = false;
    };

    if (interactive) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("click", onClick);
      document.addEventListener("mouseleave", onMouseLeaveWindow);
    }

    const drawHex = (hex: Hex, now: number) => {
      let strokeAlpha = 0.2;
      let fillAlpha = 0;
      let glow = 0;

      if (animate) {
        strokeAlpha = 0.15 + 0.05 * Math.sin((now / PULSE_PERIOD) * Math.PI * 2 + hex.phase);
      }

      if (interactive && hex.activatedAt !== null) {
        const elapsed = now - hex.activatedAt;
        if (elapsed < EMBER_DURATION) {
          const intensity = 1 - elapsed / EMBER_DURATION;
          fillAlpha = intensity * 0.85;
          strokeAlpha = 0.4 + intensity * 0.5;
          glow = intensity * 18;
        } else {
          hex.activatedAt = null;
        }
      }

      drawHexPath(ctx, hex.x, hex.y, hexSize);

      if (fillAlpha > 0) {
        ctx.shadowColor = `rgba(${redBrightRgb}, ${Math.min(fillAlpha + 0.2, 1)})`;
        ctx.shadowBlur = glow;
        ctx.fillStyle = `rgba(${redBrightRgb}, ${fillAlpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.strokeStyle = `rgba(${redRgb}, ${strokeAlpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    let rafId = 0;
    const render = (now: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      if (interactive && mouse.active) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, HAZE_RADIUS);
        gradient.addColorStop(0, `rgba(${redRgb}, 0.25)`);
        gradient.addColorStop(1, `rgba(${redRgb}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(mouse.x - HAZE_RADIUS, mouse.y - HAZE_RADIUS, HAZE_RADIUS * 2, HAZE_RADIUS * 2);
      }

      for (const hex of hexes) {
        drawHex(hex, now);
      }

      if (animate) {
        rafId = requestAnimationFrame(render);
      }
    };

    if (animate) {
      rafId = requestAnimationFrame(render);
    } else {
      render(performance.now());
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      if (interactive) {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("click", onClick);
        document.removeEventListener("mouseleave", onMouseLeaveWindow);
      }
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />;
}
