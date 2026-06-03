"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * « Projecteur » : un halo doré doux qui suit le curseur sur tout le site.
 * Discret sur fond clair (blend screen), il révèle une lumière de scène sur les
 * sections sombres. Désactivé en reduced-motion et sur pointeur grossier (tactile).
 */
export function CursorSpotlight() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.28;
    let raf = 0;

    const apply = () => {
      raf = 0;
      el.style.setProperty("--sx", `${x}px`);
      el.style.setProperty("--sy", `${y}px`);
      el.style.opacity = "1";
    };
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-0 transition-opacity duration-1000"
      style={{
        background:
          "radial-gradient(420px circle at var(--sx, 50%) var(--sy, 28%), rgb(227 175 59 / 0.12), rgb(227 175 59 / 0.04) 40%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
