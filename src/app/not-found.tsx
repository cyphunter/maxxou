import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page introuvable",
  description: "Cette page n'existe pas ou a été déplacée.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section-noir grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div aria-hidden className="aurora opacity-50" />
      <div className="relative">
        <span className="section-number">404</span>
        <h1 className="fluid-h2 mt-2 text-ivory">Cette page a quitté la scène.</h1>
        <p className="mx-auto mt-4 max-w-md text-cream-100/75">
          La page que vous cherchez n&apos;existe pas ou a tiré sa révérence. Revenons sous les
          projecteurs.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-noir-900 transition-colors hover:bg-gold-400"
        >
          <ArrowLeft size={16} aria-hidden />
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
