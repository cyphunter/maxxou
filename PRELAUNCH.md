# Checklist pré-livraison — Maxxou Officiel

Site vitrine (showcase, sans base de données). À cocher avant mise en ligne.

## Contenu & personnalisation

- [ ] `src/lib/site-config.ts` : domaine réel, email, **lien Instagram** + handle, slogans, mentions légales (raison sociale / statut / SIRET), directeur de publication
- [ ] `src/data/dates.ts` : vraies dates de tournée (et `ticketUrl` des billetteries)
- [ ] `src/data/personnages.ts` : noms/descriptions validés avec Maxxou
- [ ] `src/data/temoignages.ts` : vrais avis (avec accord) — retirer les placeholders
- [ ] Vraies images déposées dans `public/images/` (remplacent les SVG placeholders)
- [ ] Vidéo : fichier dans `public/videos/` + `siteConfig.video.src` renseigné (sinon l'emplacement « à venir » reste affiché)

## Qualité technique

- [x] `npm run typecheck` : 0 erreur
- [x] `npm run lint` : 0 erreur
- [x] `npm run build:next` : build OK (toutes les routes générées)
- [ ] Lighthouse mobile ≥ 95 (Perf / A11y / SEO / Best Practices) — joindre rapport
- [ ] LCP < 2.5s · INP < 200ms · CLS < 0.1 · FCP < 1.8s (mobile 4G simulé)
- [ ] Bundle JS initial < 170 KB gzip
- [ ] Console navigateur : 0 erreur sur toutes les routes

## Accessibilité

- [ ] Navigation clavier complète (menu, accordéon FAQ, lightbox galerie, formulaires)
- [ ] Focus visible partout · skip-to-content fonctionnel
- [ ] Contraste ≥ 4.5:1 (texte normal) — vérifié axe DevTools (clair ET sombre)
- [ ] Tous les `alt` renseignés · `prefers-reduced-motion` respecté
- [ ] Formulaires contact + newsletter : labels liés, erreurs claires en français

## SEO

- [ ] 1 seul `<h1>` par page (PageHero), hiérarchie logique
- [ ] Metadata (title/description/canonical/OG) sur chaque page
- [ ] JSON-LD valides (Person + WebSite global, FAQPage, ItemList personnages, TheaterEvent spectacle/dates) — testés au Rich Results Test
- [ ] OpenGraph 1200×630 testée (Facebook Debugger + Twitter Card Validator)
- [ ] `/sitemap.xml` et `/robots.txt` OK · URLs FR claires
- [ ] Google Search Console + Bing : site ajouté, sitemap soumis

## Sécurité

- [ ] Headers A+ sur [securityheaders.com](https://securityheaders.com) (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- [ ] HTTPS partout, 0 mixed content
- [ ] Validation Zod sur les Server Actions (contact + newsletter) · honeypots actifs
- [ ] Secrets via `wrangler secret put` (RESEND_API_KEY) — 0 clé en clair

## Légal RGPD (pas d'e-commerce → pas de CGU/CGV)

- [ ] Mentions légales en ligne (raison sociale, SIRET, hébergeur Cloudflare)
- [ ] Politique de confidentialité en ligne
- [ ] Formulaires : case RGPD non pré-cochée + lien politique
- [ ] Pas de bandeau cookies (aucun cookie tiers ; Cloudflare Web Analytics si besoin)

## Email (Resend)

- [ ] Domaine vérifié sur Resend (SPF + DKIM + DMARC en DNS)
- [ ] Test contact → email reçu en inbox (Gmail/Outlook)
- [ ] Test inscription newsletter → notification reçue
- [ ] `from` = `contact@<domaine>` (pas Gmail)

## DNS / Domaine

- [ ] NS pointe vers Cloudflare · A/CNAME @ et www → Workers (proxy ON)
- [ ] SSL/TLS « Full (strict) » · cert valide
- [ ] Email forwarding `contact@<domaine>` → boîte de Maxxou (Cloudflare Email Routing)

## Responsive & cross-browser

- [ ] 375 / 768 / 1024 / 1440 / 1920 · iOS Safari · Android Chrome
- [ ] Pas de scroll horizontal à 320px · touch targets ≥ 44px
- [ ] Barre mobile sticky ne masque pas le contenu / le footer

## Pages d'erreur & monitoring

- [ ] `not-found.tsx` et `error.tsx` testées
- [ ] `observability.enabled = true` (wrangler.jsonc) · `/health` répond 200
- [ ] Uptime monitoring externe (UptimeRobot / BetterStack) check 5 min

## Livraison

- [ ] `LIVRAISON.md` rempli (accès, édition contenu, vidéo, urgence)
- [ ] Démo client : tour du site, comment éditer dates / config / vidéo
