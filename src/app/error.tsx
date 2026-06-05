"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center"
    >
      <span
        aria-hidden
        className="font-display text-[clamp(5rem,20vw,13rem)] font-normal leading-none tracking-tight text-ink/10"
      >
        500
      </span>
      <h1 className="mt-2 font-display text-[clamp(1.6rem,4vw,2.6rem)] font-normal text-ink">
        Un trou de mémoire sur scène.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-stone-600">
        Une erreur est survenue de notre côté. Le temps de retrouver le fil, réessayez dans un
        instant.
        {error.digest ? (
          <span className="mt-2 block text-xs text-stone-400">Référence : {error.digest}</span>
        ) : null}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 inline-flex h-12 items-center justify-center rounded-none bg-ink px-7 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-noir-700"
      >
        Réessayer
      </button>
    </main>
  );
}
