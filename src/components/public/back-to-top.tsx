"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Bouton flottant qui apparaît après ~600 px de scroll et ramène en haut.
 * Carré, filet 1px, anthracite au survol — cohérent avec la DA galerie.
 */
export function BackToTop() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Retour en haut de la page"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-[calc(5.5rem_+_env(safe-area-inset-bottom))] right-4 z-30 inline-flex h-12 w-12 items-center justify-center border border-ink/20 bg-ivory text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory md:bottom-6 md:right-6"
        >
          <ArrowUp
            size={18}
            aria-hidden
            className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5"
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
