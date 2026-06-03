import Link from "next/link";
import { Ticket, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Barre d'action fixe en bas d'écran, mobile uniquement.
 * Fond solide (pas de backdrop-blur — évite les artefacts au scroll).
 */
export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-noir-900/10 bg-paper px-3 pt-3 shadow-[0_-8px_24px_-12px_rgb(28_28_27_/_0.25)] md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={siteConfig.social.instagram || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-ink ring-1 ring-noir-900/20 transition-colors hover:bg-noir-900/[0.04]"
      >
        <Instagram size={16} aria-hidden className="text-gold-700" />
        Instagram
      </a>
      <Link
        href="/dates"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 py-3 text-sm font-medium text-noir-900 transition-colors hover:bg-gold-400"
      >
        <Ticket size={16} aria-hidden />
        Réserver
      </Link>
    </div>
  );
}
