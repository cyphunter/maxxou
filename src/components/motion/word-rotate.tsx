"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type WordRotateProps = {
  words: readonly string[];
  /** Intervalle entre deux mots (ms). */
  interval?: number;
  className?: string;
};

/**
 * Fait défiler une liste de mots à la même position (slide vertical doux).
 * Respecte prefers-reduced-motion : affiche le premier mot, figé.
 */
export function WordRotate({ words, interval = 2600, className }: WordRotateProps) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce || words.length <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [reduce, words.length, interval]);

  if (reduce) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={cn("relative inline-grid align-bottom", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "0.55em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.55em", opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
