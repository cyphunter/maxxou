"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Fine barre de progression dorée en haut de page qui suit le scroll.
 * Désactivée en prefers-reduced-motion.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700"
    />
  );
}
