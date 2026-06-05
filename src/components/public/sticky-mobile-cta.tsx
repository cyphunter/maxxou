import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Barre d'action fixe en bas d'écran, mobile uniquement. Style galerie :
 * fond ivoire, filet 1px, deux actions à angles francs.
 */
export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-ink/10 bg-ivory px-3 pt-3 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={siteConfig.social.instagram || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-none border border-ink/25 py-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
      >
        <Instagram size={15} aria-hidden className="text-gold-700" />
        Instagram
      </a>
      <Link
        href="/dates"
        className="flex flex-1 items-center justify-center gap-2 rounded-none bg-gold-500 py-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-noir-950 transition-colors hover:bg-gold-400"
      >
        Réserver
      </Link>
    </div>
  );
}
