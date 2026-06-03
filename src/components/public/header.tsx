"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Ticket, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-500 font-display text-lg font-medium tracking-tight text-noir-900",
        className,
      )}
    >
      M
    </span>
  );
}

export function Header({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparentOnTop;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500",
        solid
          ? "border-b border-noir-900/10 bg-paper/95 text-ink shadow-sm backdrop-blur-sm"
          : "bg-transparent text-ivory",
      )}
    >
      <div className="container-soft flex h-[var(--header-h,4.75rem)] items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label={`${siteConfig.name} — accueil`}
        >
          <Monogram className="transition-transform duration-500 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight">{siteConfig.name}</span>
            <span className="mt-1 text-[0.6rem] uppercase tracking-[0.22em] opacity-70">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-flex py-1 font-medium transition-opacity hover:opacity-100"
                >
                  <span className="opacity-85 transition-opacity group-hover:opacity-100">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          {siteConfig.social.instagram ? (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram — ${siteConfig.instagramHandle}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-current/20 transition hover:bg-current/5 hover:text-gold-700"
            >
              <Instagram size={17} aria-hidden />
            </a>
          ) : null}
          <Link
            href="/dates"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
              solid
                ? "bg-navy-900 text-ivory hover:bg-gold-500 hover:text-noir-900"
                : "bg-ivory/10 text-ivory ring-1 ring-ivory/35 backdrop-blur-sm hover:bg-gold-500 hover:text-noir-900 hover:ring-gold-500",
            )}
          >
            <Ticket size={15} aria-hidden />
            Réserver
          </Link>
        </nav>

        {/* Burger mobile */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-current/20 transition hover:bg-current/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 md:hidden"
            >
              <Menu size={20} aria-hidden />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[90] bg-navy-950/60 backdrop-blur-sm data-[state=open]:animate-[fade-in_0.3s_ease]" />
            <Dialog.Content className="section-noir fixed inset-y-0 right-0 z-[95] flex w-[88%] max-w-sm flex-col p-6 text-ivory shadow-cinema focus:outline-none data-[state=open]:animate-[slide-in-right_0.4s_var(--ease-out-expo)]">
              <Dialog.Title className="sr-only">Menu de navigation</Dialog.Title>
              <Dialog.Description className="sr-only">
                Liens principaux du site de {siteConfig.name}
              </Dialog.Description>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Monogram />
                  <span className="font-display text-lg">{siteConfig.name}</span>
                </div>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Fermer le menu"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-ivory/25 transition hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    <X size={20} aria-hidden />
                  </button>
                </Dialog.Close>
              </div>

              <nav aria-label="Navigation mobile" className="mt-12 flex flex-col gap-1">
                {siteConfig.navigation.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-ivory/10 py-4 font-display text-2xl transition-colors hover:text-gold-300"
                  >
                    <span>
                      <span className="mr-3 text-xs text-gold-500/70">0{i + 1}</span>
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>

              <Link
                href="/dates"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 font-medium text-noir-900 transition hover:bg-gold-400"
              >
                <Ticket size={16} aria-hidden />
                Réserver une date
              </Link>

              <div className="mt-auto pt-8 text-sm text-cream-100/70">
                {siteConfig.social.instagram ? (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-gold-300"
                  >
                    <Instagram size={15} aria-hidden className="text-gold-400" />
                    {siteConfig.instagramHandle}
                  </a>
                ) : null}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-2 block hover:text-gold-300"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="mt-2 text-cream-100/50">{siteConfig.contact.serviceAreaLabel}</p>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
