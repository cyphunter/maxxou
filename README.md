# Maxxou Officiel

Site vitrine de **Maxxou Officiel** — humoriste & improvisateur, seul-en-scène mêlant humour, improvisation et thérapie des parties (Lyon & sa région, en tournée).

Next.js 16 (App Router) + React 19 + TypeScript strict, déployé sur **Cloudflare Workers** via `@opennextjs/cloudflare`. **Showcase pur** : pas de base de données — le formulaire de contact et l'inscription newsletter passent par une Server Action + Resend.

> Référence agence : voir `../CLAUDE.md` et `../CONVENTIONS.md` à la racine de `freelance/`.

## Démarrage rapide

```bash
npm install
npm run gen-placeholders   # (re)génère les visuels SVG de placeholder
npm run dev                # http://localhost:3000
```

Build & déploiement Cloudflare :

```bash
npm run preview            # build OpenNext + preview Workers local
wrangler secret put RESEND_API_KEY          # une fois, en prod
npm run deploy             # build + deploy Workers
```

## Stack

- **Next.js 16** App Router + React 19 + TypeScript strict
- **Cloudflare Workers** via `@opennextjs/cloudflare`
- **Tailwind v4** (CSS-first via `@theme` dans `globals.css`)
- **Framer Motion** (animations, `prefers-reduced-motion` respecté)
- **Resend** + React Email (contact + newsletter)
- **Zod** (validation) · **sanitize-html** · **schema-dts** (JSON-LD)
- **lucide-react** (icônes)

## Scripts

| Script | Effet |
|---|---|
| `npm run dev` | Serveur dev (heap cappée 4 GB) |
| `npm run dev:webpack` | Dev en Webpack (fallback si fuite Turbopack) |
| `npm run dev:clean` | Purge `.next`/`.open-next`/`.wrangler` puis dev |
| `npm run gen-placeholders` | Génère les placeholders SVG dans `public/images/` |
| `npm run build` | Build OpenNext (production Workers) |
| `npm run preview` | Build + preview Workers local |
| `npm run deploy` | Build + deploy Workers prod |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Contenu éditable (sans toucher au code)

- **`src/lib/site-config.ts`** — identité, slogans, coordonnées, réseaux (Instagram), navigation, mentions légales, config vidéo, newsletter.
- **`src/data/*.ts`** — un fichier par sujet :
  - `personnages.ts` — la troupe intérieure (parts therapy)
  - `dates.ts` — calendrier des représentations
  - `services.ts` — spectacle / interventions / partenariats
  - `benefices.ts` · `atouts.ts` · `faq.ts` · `temoignages.ts` · `stats.ts`
  - `media.ts` — chemins des images + galerie

## Vidéo de présentation (home)

Section « bande-annonce » prête : tant que `siteConfig.video.src` est vide, un emplacement élégant s'affiche. Pour activer la vraie vidéo : déposez le `.mp4` dans `public/videos/` et renseignez `video.src` (et `video.poster`) dans `src/lib/site-config.ts`.

## Images

Tous les visuels sont des **placeholders SVG** générés (`npm run gen-placeholders`), marqués « à remplacer ». Déposez les vraies photos aux mêmes chemins dans `public/images/` (idéalement `.webp` pré-optimisées — cf. CLAUDE.md agence §8) puis adaptez `src/data/media.ts` / `personnages.ts` si les extensions changent.

## Structure

```
src/
├── app/
│   ├── page.tsx                 # Accueil
│   ├── spectacle/page.tsx
│   ├── personnages/page.tsx
│   ├── dates/page.tsx
│   ├── a-propos/page.tsx
│   ├── contact/page.tsx
│   ├── mentions-legales/page.tsx
│   ├── confidentialite/page.tsx
│   ├── health/route.ts
│   ├── sitemap.ts · robots.ts · manifest.ts
│   ├── icon.tsx · apple-icon.tsx · opengraph-image.tsx · twitter-image.tsx
│   ├── not-found.tsx · error.tsx
│   ├── layout.tsx · globals.css
├── components/{public,ui,motion,seo}/
├── lib/{site-config,seo,utils,image-loader,sanitize}.ts
│   ├── actions/{contact,newsletter}.ts
│   └── schemas/{contact,newsletter}.ts
├── data/*.ts
└── emails/{contact,newsletter}-notification.tsx
scripts/gen-placeholders.mjs
```

## Avant livraison

Voir [`PRELAUNCH.md`](./PRELAUNCH.md) (checklist) et [`LIVRAISON.md`](./LIVRAISON.md) (doc client).
