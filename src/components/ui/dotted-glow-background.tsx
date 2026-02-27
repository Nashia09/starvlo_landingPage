"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type DottedGlowBackgroundProps = {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  darkColor?: string;
  glowColor?: string;
  darkGlowColor?: string;
  colorLightVar?: string;
  colorDarkVar?: string;
  glowColorLightVar?: string;
  glowColorDarkVar?: string;
  opacity?: number;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
  fps?: number;
  maxDots?: number;
  shadowBlurScale?: number;
  pauseWhenOffscreen?: boolean;
};

export const DottedGlowBackground = ({
  className,
  gap = 12,
  radius = 2,
  color = "rgba(0,0,0,0.7)",
  darkColor,
  glowColor = "rgba(0, 170, 255, 0.85)",
  darkGlowColor,
  colorLightVar,
  colorDarkVar,
  glowColorLightVar,
  glowColorDarkVar,
  opacity = 0.6,
  backgroundOpacity = 0,
  speedMin = 0.4,
  speedMax = 1.3,
  speedScale = 1,
  fps = 30,
  maxDots = 2500,
  shadowBlurScale = 4,
  pauseWhenOffscreen = true,
}: DottedGlowBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const dotsRef = useRef<Array<{ x: number; y: number; phase: number; speed: number }>>([]);
  const [resolvedColor, setResolvedColor] = useState<string>(color);
  const [resolvedGlowColor, setResolvedGlowColor] = useState<string>(glowColor);
  const isVisibleRef = useRef<boolean>(true);

  const resolveCssVariable = (el: Element, variableName?: string): string | null => {
    if (!variableName) return null;
    const normalized = variableName.startsWith("--") ? variableName : `--${variableName}`;
    const fromEl = getComputedStyle(el).getPropertyValue(normalized).trim();
    if (fromEl) return fromEl;
    const root = document.documentElement;
    const fromRoot = getComputedStyle(root).getPropertyValue(normalized).trim();
    return fromRoot || null;
  };

  const detectDarkMode = (): boolean => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) return true;
    if (root.classList.contains("light")) return false;
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const rebuildDots = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    let rect = container.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) {
      const parent = container.parentElement;
      if (parent) {
        rect = parent.getBoundingClientRect();
      }
    }
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = `${Math.floor(rect.width)}px`;
    canvas.style.height = `${Math.floor(rect.height)}px`;

    const area = rect.width * rect.height;
    const minGap = Math.sqrt(area / Math.max(1, maxDots));
    const g = Math.max(gap, minGap);
    const cols = Math.ceil(rect.width / g) + 1;
    const rows = Math.ceil(rect.height / g) + 1;
    const dots: Array<{ x: number; y: number; phase: number; speed: number }> = [];
    const offsetX = g / 2;
    const offsetY = g / 2;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c * g + offsetX) * dpr;
        const y = (r * g + offsetY) * dpr;
        const phase = Math.random() * Math.PI * 2;
        const speed = speedMin + Math.random() * (speedMax - speedMin);
        dots.push({ x, y, phase, speed });
      }
    }
    dotsRef.current = dots;
  };

  useEffect(() => {
    const container = containerRef.current ?? document.documentElement;
    const compute = () => {
      const isDark = detectDarkMode();
      let nextColor: string = color;
      let nextGlow: string = glowColor;
      if (isDark) {
        const varDot = resolveCssVariable(container, colorDarkVar);
        const varGlow = resolveCssVariable(container, glowColorDarkVar);
        nextColor = varDot || darkColor || nextColor;
        nextGlow = varGlow || darkGlowColor || nextGlow;
      } else {
        const varDot = resolveCssVariable(container, colorLightVar);
        const varGlow = resolveCssVariable(container, glowColorLightVar);
        nextColor = varDot || color || nextColor;
        nextGlow = varGlow || glowColor || nextGlow;
      }
      setResolvedColor(nextColor);
      setResolvedGlowColor(nextGlow);
    };
    compute();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => compute();
    media.addEventListener("change", onChange);

    const ro = new ResizeObserver(() => rebuildDots());
    if (containerRef.current) ro.observe(containerRef.current);
    rebuildDots();

    let io: IntersectionObserver | null = null;
    if (pauseWhenOffscreen && containerRef.current) {
      io = new IntersectionObserver((entries) => {
        const e = entries[0];
        isVisibleRef.current = !!e?.isIntersecting;
      }, { threshold: 0 });
      io.observe(containerRef.current);
    }

    return () => {
      media.removeEventListener("change", onChange);
      ro.disconnect();
      io?.disconnect();
    };
  }, [
    gap,
    radius,
    color,
    darkColor,
    glowColor,
    darkGlowColor,
    colorLightVar,
    colorDarkVar,
    glowColorLightVar,
    glowColorDarkVar,
    speedMin,
    speedMax,
    maxDots,
    pauseWhenOffscreen,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let lastTs = performance.now();
    let lastDraw = 0;
    const frameInterval = 1000 / Math.max(1, fps);

    const render = (ts: number) => {
      if (!isVisibleRef.current && pauseWhenOffscreen) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }
      if (ts - lastDraw < frameInterval) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }
      lastDraw = ts;
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (backgroundOpacity > 0) {
        const grd = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) / 1.1);
        grd.addColorStop(0, `rgba(0,0,0,${backgroundOpacity * opacity})`);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      }

      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.phase += d.speed * speedScale * dt;
        const s = (Math.sin(d.phase) + 1) * 0.5;
        const r = radius * (0.7 + 0.6 * s);
        const a = (0.25 + 0.55 * s) * opacity;

        ctx.save();
        ctx.globalAlpha = a;
        ctx.shadowColor = resolvedGlowColor;
        ctx.shadowBlur = r * shadowBlurScale;
        ctx.fillStyle = resolvedColor;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [radius, opacity, backgroundOpacity, resolvedColor, resolvedGlowColor, speedScale, fps, shadowBlurScale, pauseWhenOffscreen]);

  return (
    <div ref={containerRef} className={cn("w-full h-full", className)}>
      <canvas ref={canvasRef} />
    </div>
  );
};

