# Maxxou Officiel — instructions Claude (spécifiques projet)

> Règles agence : voir `../CLAUDE.md` à la racine de `freelance/`.
> Référence détaillée : voir `../CONVENTIONS.md`.

## Identité du projet

- **Client** : Maxxou Officiel
- **Activité** : Humoriste & improvisateur — seul-en-scène mêlant humour, improvisation, psychanalyse et **thérapie des parties** (chaque personnage = une « part » de nous)
- **Zone** : Lyon & sa région (Annecy, Tassin-la-Demi-Lune…), en tournée
- **Site** : `https://maxxou-officiel.fr` (domaine PLACEHOLDER à confirmer)
- **SITE_ID** : `maxxou`
- **Type** : **Showcase pur** — pas de DB / R2 / KV. Contact + newsletter via Server Action + Resend.
- **Email expéditeur** : `contact@maxxou-officiel.fr` (Resend)

## Objectifs business

Faire connaître le spectacle · développer la communauté · faciliter les réservations · créer un univers fort autour de l'humour thérapeutique · **générer des abonnés Instagram**.

## Direction artistique

- **Palette** (sobre & élégante) : fond clair beige (`paper`/`bone`/`ivory`) + texte anthracite (`ink`/`noir-*`), profondeur **bleu nuit** (`navy-*`) & **bordeaux** (`wine-*`, rideau de scène), accents **jaune doré** (`gold-*`, projecteur / énergie / humour).
- **Polices** : Inter (body) + Fraunces (display serif, italique d'accent `.italic-display`).
- **Ton** : confiance + authenticité + légèreté. Humour bienveillant, jamais moqueur. Tout en français.
- **Animations** : Framer Motion + CSS. **Scroll natif** (pas de Lenis — cf. retour Kevin). `prefers-reduced-motion` respecté.

## Sources de contenu client-éditables

- **`src/lib/site-config.ts`** — identité, slogans, coordonnées, réseaux (Instagram), navigation, mentions légales, config **vidéo**, newsletter.
- **`src/data/*.ts`** — personnages, dates, services, bénéfices, atouts, faq, témoignages, stats, media.

## Points d'attention spécifiques

- **Vidéo home** : la section « bande-annonce » (`VideoShowcase`) affiche un emplacement tant que `siteConfig.video.src` est vide ; renseigner le `.mp4` (`public/videos/`) pour l'activer. CSP autorise déjà `media-src 'self' blob:`.
- **Images = PLACEHOLDERS SVG** générés par `npm run gen-placeholders` (théâtraux, marqués « à remplacer »). Remplacer par les vraies photos aux mêmes chemins dans `public/images/`.
- **Honeypot** : formulaire contact = champ caché `maxxou_hp` ; newsletter = `maxxou_news_hp`. Check serveur (faux succès si rempli).
- **Témoignages** : placeholders marqués — à remplacer par de vrais avis (avec accord).
- **Dates** : `src/data/dates.ts` = dates PLACEHOLDER (salles réelles citées en exemple) — à remplacer par la vraie tournée. La page `/dates` génère un JSON-LD `ItemList`/`TheaterEvent`.
- **Newsletter** : sans DB → notifie Maxxou par email (Resend). Pour brancher Brevo/Mailchimp/Resend Audiences : remplacer l'envoi dans `src/lib/actions/newsletter.ts`.
- **Instagram** : réseau principal (objectif abonnés) — mis en avant header, footer, bloc `InstagramCta`, barre mobile. Renseigner la vraie URL/handle dans `site-config`.
- **Pas de e-commerce** → pas de CGU/CGV ni droit de rétractation. Pages légales : Mentions légales + Confidentialité.
- Pas de bandeau cookies (aucun cookie tiers ; Cloudflare Web Analytics si besoin).
- **Thérapie des parties** : c'est un SPECTACLE d'humour, pas un soin. Ne jamais présenter Maxxou comme thérapeute.
