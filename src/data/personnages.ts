/**
 * Les personnages du spectacle — chacun incarne une « part » de nous
 * (inspiration : thérapie des parties / Internal Family Systems).
 *
 * `icon` est une clé mappée vers une icône lucide dans le composant
 * `personnage-card.tsx` (les fichiers data n'importent pas de composants).
 * `accent` pilote la couleur dominante de la carte (or / bleu nuit / bordeaux).
 *
 * Les `description` reprennent les textes validés par Maxxou ; `tagline` et
 * `replique` ajoutent le ton humoristique des cartes. Visuels = placeholders SVG.
 */

export type PersonnageAccent = "gold" | "navy" | "wine";

export type Personnage = {
  slug: string;
  /** Nom de scène du personnage. */
  name: string;
  /** La « part » qu'il représente, en une formule. */
  part: string;
  /** Accroche courte (sous-titre de carte). */
  tagline: string;
  /** Description : ce qu'il révèle de nous, avec humour et bienveillance. */
  description: string;
  /** Une réplique signature (ton humoristique). */
  replique: string;
  icon: string;
  accent: PersonnageAccent;
  image: string;
};

export const personnages: readonly Personnage[] = [
  {
    slug: "le-critique",
    name: "Le Critique",
    part: "La voix qui juge tout, surtout vous",
    tagline: "« Tu aurais pu mieux faire. »",
    description:
      "Toujours dans l'analyse et le jugement, il décortique chaque situation avec précision. Rien ne lui échappe, ou presque.",
    replique: "« Bravo. Sincèrement. Bon, on reparle de tes trois fautes ? »",
    icon: "gavel",
    accent: "wine",
    image: "/images/personnages/le-critique.svg",
  },
  {
    slug: "l-anxieux",
    name: "L'Anxieux",
    part: "Le service météo intérieur, spécialité catastrophe",
    tagline: "« Et si ça tournait mal ? »",
    description:
      "Son esprit anticipe tous les scénarios possibles, surtout les pires. Il vit dans un monde de « et si… ».",
    replique: "« J'ai préparé un plan B. Et un plan C. Et un sac de survie. »",
    icon: "cloud-rain",
    accent: "navy",
    image: "/images/personnages/l-anxieux.svg",
  },
  {
    slug: "le-perfectionniste",
    name: "Le Perfectionniste",
    part: "Le contrôle qualité qui ne dort jamais",
    tagline: "« Encore un détail à régler. »",
    description:
      "Rien n'est jamais assez bien. Il ajuste, corrige et recommence jusqu'à satisfaction.",
    replique: "« C'est presque parfait. Donc c'est raté. »",
    icon: "ruler",
    accent: "gold",
    image: "/images/personnages/le-perfectionniste.svg",
  },
  {
    slug: "l-enfant",
    name: "L'Enfant",
    part: "La spontanéité qu'on a appris à faire taire",
    tagline: "« On joue ? »",
    description:
      "Curieux et spontané, il apporte légèreté, imagination et émerveillement.",
    replique: "« J'ai une super idée ! …J'ai oublié. Mais elle était géniale. »",
    icon: "sparkles",
    accent: "gold",
    image: "/images/personnages/l-enfant.svg",
  },
] as const;
