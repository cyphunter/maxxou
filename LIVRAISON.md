# Livraison — Maxou Officiel

> Document remis le jour de la mise en ligne. À conserver précieusement.

## Informations générales

- **Site** : https://maxou-officiel.fr  *(domaine à confirmer)*
- **Mis en ligne le** : `JJ/MM/AAAA`
- **Développeur** : Kevin — fostraceur999@gmail.com
- **Repo GitHub** : `<URL>`
- **Type** : site vitrine (showcase) — pas de base de données, pas de back-office.

## Comment modifier le contenu (sans connaissances techniques)

Tout le contenu est dans des fichiers texte simples, éditables directement sur GitHub (icône crayon → modifier → « Commit changes » ; le site se met à jour en 2–3 min).

### 1. Coordonnées, slogans, Instagram, infos générales
Fichier : **`src/lib/site-config.ts`**. On y modifie : email, ville, **lien Instagram** (`social.instagram`), slogans, textes de la newsletter, mentions légales (bloc `legal`).

### 2. Les dates de représentation
Fichier : **`src/data/dates.ts`**. Chaque date : `date` (format `2026-10-24`), `city`, `venue`, `address`, `status` (`open` = billetterie ouverte, `soon` = bientôt, `soldout` = complet, `past` = passée), `ticketUrl` (lien billetterie ; si vide → bouton « Réserver » renvoie vers la page Contact).

### 3. Les personnages
Fichier : **`src/data/personnages.ts`**. Pour chaque personnage : nom, « part » représentée, accroche, description, réplique, couleur d'accent (`gold` / `navy` / `wine`).

### 4. Les autres contenus
- Services (spectacle / interventions / partenariats) : `src/data/services.ts`
- Bénéfices, atouts, FAQ, témoignages : `src/data/*.ts`

### 5. La vidéo de présentation (accueil)
1. Déposer le fichier `.mp4` dans `public/videos/` (ex : `maxou-teaser.mp4`).
2. Dans `src/lib/site-config.ts`, bloc `video`, renseigner `src: "/videos/maxou-teaser.mp4"` (et un `poster` si souhaité).
3. La section « bande-annonce » bascule automatiquement en lecteur vidéo.

### 6. Les images
1. Préparer l'image en **WebP** (idéalement < 300 KB ; hero < 200 KB).
2. Sur GitHub, `public/images/…` → Add file → Upload files, **au même chemin** que le placeholder à remplacer.
3. Si l'extension change (`.svg` → `.webp`), adapter le chemin dans `src/data/media.ts` ou `src/data/personnages.ts`.
4. Toujours un texte `alt` descriptif (SEO + accessibilité).

## Accès importants

| Service | URL | Compte |
|---|---|---|
| **Cloudflare** | https://dash.cloudflare.com | `<email>` (2FA actif) |
| **Resend** (emails contact + newsletter) | https://resend.com | `<email>` |
| **GitHub** (code) | `<URL repo>` | `<username>` |
| **Registrar domaine** | `<URL>` | `<identifiant>` |
| **Google Search Console** | https://search.google.com/search-console | `<email>` |
| **Instagram** | https://instagram.com/`<compte>` | `<compte Maxou>` |
| **Monitoring** (UptimeRobot/BetterStack) | `<URL>` | `<email>` |

> Conserver ces accès dans un gestionnaire de mots de passe (1Password / Bitwarden).

## Emails du site

- Expéditeur transactionnel : `contact@maxou-officiel.fr` (via Resend, domaine à vérifier).
- Les **demandes de contact** et les **inscriptions newsletter** arrivent par email (Resend) à l'adresse configurée.
- Pour une vraie liste de diffusion (Brevo, Mailchimp…), nous pouvons brancher le service ultérieurement.

## Sauvegarde

- **Aucune base de données** : tout le contenu est versionné dans le code (GitHub) — historique complet et restauration possible à tout moment.

## Procédure d'urgence

**Site inaccessible** → vérifier https://www.cloudflarestatus.com/ puis contacter Kevin. Rollback possible en ~30 s.
**Spam formulaire** → un honeypot anti-bot est déjà en place ; rate limiting WAF activable en 5 min si besoin.

## Maintenance & contact

**Kevin** — développeur freelance · fostraceur999@gmail.com
Mises à jour techniques / évolutions : `<selon forfait>`.

---
*Pour toute question, n'hésitez pas à me contacter.*
