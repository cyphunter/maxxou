/**
 * Génère des placeholders SVG « premium » pour le site Maxou Officiel.
 *
 * Pourquoi : sharp est blacklisté (binaire natif) et on ne dépend d'aucune
 * banque d'images externe (CSP self-only). Ces SVG théâtraux (bleu nuit /
 * bordeaux + projecteur doré) tiennent lieu de visuels en attendant les
 * vraies photos. Remplacez simplement chaque fichier dans public/images/
 * par la vraie photo (même chemin, idéalement .webp pré-optimisé).
 *
 * Usage : npm run gen-placeholders
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "images");

const ACCENTS = {
  navy: { from: "#15203f", to: "#0b1020", glow: "rgba(227,175,59,0.22)" },
  wine: { from: "#4b1320", to: "#260a11", glow: "rgba(221,144,157,0.20)" },
  gold: { from: "#1c2c54", to: "#0b1020", glow: "rgba(227,175,59,0.30)" },
};

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;");

function svg({ w, h, title, subtitle, accent = "navy", play = false }) {
  const a = ACCENTS[accent] ?? ACCENTS.navy;
  const cx = w / 2;
  const cy = h / 2;
  const monoSize = Math.round(Math.min(w, h) * 0.2);
  const titleSize = Math.round(Math.min(w, h) * 0.072);
  const subSize = Math.round(Math.min(w, h) * 0.032);
  const inset = Math.round(Math.min(w, h) * 0.035);
  const play_r = Math.round(Math.min(w, h) * 0.11);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)} — visuel à remplacer">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${a.from}"/>
      <stop offset="1" stop-color="${a.to}"/>
    </linearGradient>
    <radialGradient id="spot" cx="50%" cy="0%" r="70%">
      <stop offset="0" stop-color="${a.glow}"/>
      <stop offset="60%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.05)"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#dots)"/>
  <rect width="${w}" height="${h}" fill="url(#spot)"/>
  <rect x="${inset}" y="${inset}" width="${w - inset * 2}" height="${h - inset * 2}" fill="none" stroke="rgba(227,175,59,0.45)" stroke-width="1.5" rx="${inset}"/>
  ${
    play
      ? `<circle cx="${cx}" cy="${cy - subSize}" r="${play_r}" fill="rgba(227,175,59,0.95)"/>
  <path d="M ${cx - play_r * 0.32} ${cy - subSize - play_r * 0.45} L ${cx + play_r * 0.5} ${cy - subSize} L ${cx - play_r * 0.32} ${cy - subSize + play_r * 0.45} Z" fill="#10182f"/>`
      : `<text x="${cx}" y="${cy - subSize}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${monoSize}" fill="#e3af3b" font-style="italic">M</text>`
  }
  <text x="${cx}" y="${cy + titleSize * 1.3}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${titleSize}" fill="#f3ecde">${esc(title)}</text>
  <text x="${cx}" y="${cy + titleSize * 1.3 + subSize * 1.8}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${subSize}" letter-spacing="2" fill="rgba(243,236,222,0.62)">${esc(subtitle)}</text>
  <text x="${cx}" y="${h - inset * 1.6}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(subSize * 0.78)}" letter-spacing="3" fill="rgba(227,175,59,0.7)">VISUEL À REMPLACER · ${w}×${h}</text>
</svg>`;
}

function write(rel, content) {
  const full = join(OUT, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, "utf8");
  console.log("✓", rel);
}

// ─── Personnages (doit refléter src/data/personnages.ts) ──────────────
const personnages = [
  { slug: "le-critique", name: "Le Critique", accent: "wine" },
  { slug: "l-anxieux", name: "L'Anxieux", accent: "navy" },
  { slug: "le-perfectionniste", name: "Le Perfectionniste", accent: "gold" },
  { slug: "l-enfant", name: "L'Enfant", accent: "gold" },
  { slug: "le-protecteur", name: "Le Protecteur", accent: "navy" },
  { slug: "le-saboteur", name: "Le Saboteur", accent: "wine" },
  { slug: "le-reveur", name: "Le Rêveur", accent: "navy" },
  { slug: "le-chef-d-orchestre", name: "Le Chef d'orchestre", accent: "gold" },
];

// ─── Poster vidéo (toujours placeholder tant que la vraie vidéo n'est pas prête) ─
write("video/poster.svg", svg({ w: 1600, h: 900, title: "Bande-annonce", subtitle: "VIDÉO À VENIR", accent: "navy", play: true }));

// NB : le portrait (portrait-maxou) et les photos de scène (scene-01..04) sont
// désormais de VRAIES photos (.jpg) — ce script ne les régénère plus.

// ─── Personnages ──────────────────────────────────────────────────────
personnages.forEach((p) =>
  write(
    `personnages/${p.slug}.svg`,
    svg({ w: 800, h: 1000, title: p.name, subtitle: "PERSONNAGE", accent: p.accent }),
  ),
);

console.log("\nPlaceholders générés dans public/images/.");
