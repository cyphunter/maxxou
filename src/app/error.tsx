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
      className="section-noir relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <span className="section-number">500</span>
      <h1 className="fluid-h2 mt-2 text-ivory">Un trou de mémoire sur scène.</h1>
      <p className="mx-auto mt-4 max-w-md text-cream-100/75">
        Une erreur est survenue de notre côté. Le temps de retrouver le fil, réessayez dans un
        instant.
        {error.digest ? (
          <span className="mt-2 block text-xs text-cream-100/45">Référence : {error.digest}</span>
        ) : null}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex items-center rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-noir-900 transition-colors hover:bg-gold-400"
      >
        Réessayer
      </button>
    </main>
  );
}
