/**
 * Chemins centralisés des images du site.
 *
 * Les photos de scène (scene-01..04) sont de VRAIES photos de Maxxou en
 * représentation (noir & blanc, format portrait 4:5). Les visuels manquants
 * (personnages, poster vidéo) restent des placeholders SVG générés
 * (`npm run gen-placeholders`), à remplacer quand le client fournit le reste.
 *
 * Pour la vidéo de présentation : voir `siteConfig.video` dans
 * `src/lib/site-config.ts`.
 */

export const media = {
  /** Portrait principal (hero / à propos). Photo de scène, format portrait 4:5. */
  portrait: "/images/scene/scene-01.jpg",
  /** Image d'ambiance de scène (bandeaux). */
  scene: "/images/scene/scene-02.jpg",
  /** Affiche / poster de la vidéo de présentation (placeholder « à venir »). */
  videoPoster: "/images/video/poster.svg",
} as const;

export type GalerieItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Mise en avant éventuelle (non utilisé par la grille portrait actuelle). */
  feature?: boolean;
};

/** Photos de scène pour la galerie (grille portrait + lightbox). Vraies photos. */
export const galerie: readonly GalerieItem[] = [
  {
    id: "g1",
    src: "/images/scene/scene-01.jpg",
    alt: "Maxxou au micro sous les projecteurs, enseigne « Le Fieald » en fond de scène",
    width: 3277,
    height: 4096,
  },
  {
    id: "g2",
    src: "/images/scene/scene-02.jpg",
    alt: "Maxxou en pied sur scène, sourire et micro en main",
    width: 3277,
    height: 4096,
  },
  {
    id: "g3",
    src: "/images/scene/scene-03.jpg",
    alt: "Maxxou en pleine improvisation, le regard tourné vers la salle",
    width: 3277,
    height: 4096,
  },
  {
    id: "g4",
    src: "/images/scene/scene-04.jpg",
    alt: "Maxxou au micro dans une ambiance feutrée, lumières de scène diffuses",
    width: 3277,
    height: 4096,
  },
];
