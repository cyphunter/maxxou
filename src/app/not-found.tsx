import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { FrameButton } from "@/components/ui/gallery";

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
      className="relative flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center"
    >
      <span
        aria-hidden
        className="font-display text-[clamp(5rem,20vw,13rem)] font-normal leading-none tracking-tight text-ink/10"
      >
        404
      </span>
      <h1 className="mt-2 font-display text-[clamp(1.6rem,4vw,2.6rem)] font-normal text-ink">
        Cette page a quitté la scène.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-stone-600">
        La page que vous cherchez n&apos;existe pas ou a tiré sa révérence. Revenons sous les
        projecteurs.
      </p>
      <div className="mt-10">
        <FrameButton href="/" variant="solid">
          Retour à l&apos;accueil
        </FrameButton>
      </div>
    </main>
  );
}
