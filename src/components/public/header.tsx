"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { UnderlineLink, FrameButton } from "@/components/ui/gallery";

/**
 * En-tête « galerie » : sticky, filet 1px, fond ivoire translucide. Wordmark
 * sobre + point doré, navigation en liens-cartels, menu mobile plein écran.
 * Angles francs partout, aucune ombre.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-[2px]">
      <div className="container-gallery flex items-center justify-between py-5">
        {/* Wordmark */}
        <Link
          href="/"
          className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
          aria-label={`${siteConfig.name} — accueil`}
        >
          <span className="font-display text-lg tracking-tight text-ink">
            {siteConfig.shortName}
            <span className="ml-0.5 text-gold-600">.</span>
          </span>
          <span className="mt-1 text-[0.58rem] uppercase tracking-[0.24em] text-stone-500">
            {siteConfig.role}
          </span>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-9 md:flex">
          {siteConfig.navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <UnderlineLink
                key={item.href}
                href={item.href}
                active={active}
                className={cn(
                  "text-[0.74rem] tracking-[0.16em]",
                  active ? "text-ink" : "text-stone-600 hover:text-ink",
                )}
              >
                {item.label}
              </UnderlineLink>
            );
          })}
          {siteConfig.social.instagram ? (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram — ${siteConfig.instagramHandle}`}
              className="inline-flex h-9 w-9 items-center justify-center border border-ink/20 text-stone-600 transition-colors hover:border-ink hover:text-ink"
            >
              <Instagram size={16} aria-hidden />
            </a>
          ) : null}
          <FrameButton href="/dates" variant="solid" className="px-5 py-2.5 text-[0.7rem]">
            Réserver
          </FrameButton>
        </nav>

        {/* Burger mobile */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 md:hidden"
            >
              <Menu size={20} aria-hidden />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[90] bg-noir-950/40 backdrop-blur-sm data-[state=open]:animate-[fade-in_0.3s_ease]" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-[95] flex w-[88%] max-w-sm flex-col border-l border-ink/10 bg-ivory p-6 text-ink focus:outline-none data-[state=open]:animate-[slide-in-right_0.4s_var(--ease-out-expo)]">
              <Dialog.Title className="sr-only">Menu de navigation</Dialog.Title>
              <Dialog.Description className="sr-only">
                Liens principaux du site de {siteConfig.name}
              </Dialog.Description>
              <div className="flex items-center justify-between">
                <span className="font-display text-lg tracking-tight text-ink">
                  {siteConfig.shortName}
                  <span className="ml-0.5 text-gold-600">.</span>
                </span>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Fermer le menu"
                    className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    <X size={20} aria-hidden />
                  </button>
                </Dialog.Close>
              </div>

              <nav aria-label="Navigation mobile" className="mt-12 flex flex-col border-t border-ink/10">
                {siteConfig.navigation.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="flex items-baseline gap-4 border-b border-ink/10 py-4 font-display text-2xl text-ink transition-colors hover:text-gold-800"
                    >
                      <span className="text-xs tabular-nums text-stone-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "underline-offset-[6px]",
                          active && "underline decoration-gold-600 decoration-1",
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8">
                <FrameButton
                  href="/dates"
                  variant="solid"
                  className="w-full"
                >
                  Réserver une date
                </FrameButton>
              </div>

              <div className="mt-auto space-y-2 pt-8 text-sm text-stone-500">
                {siteConfig.social.instagram ? (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                  >
                    <Instagram size={15} aria-hidden className="text-gold-700" />
                    {siteConfig.instagramHandle}
                  </a>
                ) : null}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="block transition-colors hover:text-ink"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="text-stone-400">{siteConfig.contact.serviceAreaLabel}</p>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
