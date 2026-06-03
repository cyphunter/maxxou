/**
 * Les personnages du spectacle — chacun incarne une « part » de nous
 * (inspiration : thérapie des parties / Internal Family Systems).
 *
 * `icon` est une clé mappée vers une icône lucide dans le composant
 * `personnage-card.tsx` (les fichiers data n'importent pas de composants).
 * `accent` pilote la couleur dominante de la carte (or / bleu nuit / bordeaux).
 *
 * ⚠️ Textes à valider/ajuster avec Maxou. Visuels = placeholders SVG.
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
      "Toujours en première ligne pour pointer le moindre défaut. Derrière sa sévérité se cache une part qui, maladroitement, cherche à nous protéger de l'échec et du regard des autres.",
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
      "Il anticipe tous les scénarios, surtout les pires. Sous ses alarmes incessantes vit une part hyper-vigilante qui veut, à sa façon, nous garder en sécurité.",
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
      "Règle en main, il vise l'irréprochable. Une part exigeante qui confond souvent « bien fait » et « jamais fini » — et nous épuise à viser l'impossible.",
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
      "Curieux, joueur, parfois blessé. La part la plus vivante de nous — celle qui sait encore s'émerveiller, et qu'on a trop souvent priée de se calmer.",
    replique: "« J'ai une super idée ! …J'ai oublié. Mais elle était géniale. »",
    icon: "sparkles",
    accent: "gold",
    image: "/images/personnages/l-enfant.svg",
  },
  {
    slug: "le-protecteur",
    name: "Le Protecteur",
    part: "Le garde du corps des émotions",
    tagline: "« Personne ne passe. »",
    description:
      "Bras croisés devant la porte, il filtre tout ce qui pourrait faire mal. Une part loyale jusqu'à l'excès, qui nous isole parfois en croyant nous défendre.",
    replique: "« Tu veux t'attacher à quelqu'un ? Faudra d'abord me passer dessus. »",
    icon: "shield",
    accent: "navy",
    image: "/images/personnages/le-protecteur.svg",
  },
  {
    slug: "le-saboteur",
    name: "Le Saboteur",
    part: "Le roi de la procrastination élégante",
    tagline: "« On verra demain. »",
    description:
      "Il a toujours une excellente raison de tout remettre à plus tard. Une part qui, en évitant l'effort, nous protège surtout de la peur d'échouer pour de vrai.",
    replique: "« Je commence lundi. Comme la semaine dernière. »",
    icon: "hourglass",
    accent: "wine",
    image: "/images/personnages/le-saboteur.svg",
  },
  {
    slug: "le-reveur",
    name: "Le Rêveur",
    part: "L'agence de voyages mentale, ouverte 24h/24",
    tagline: "« Et si on partait tout recommencer ? »",
    description:
      "Il imagine des vies entières pendant une réunion. Une part créative et idéaliste, ressource immense… tant qu'elle ne nous fait pas rater le présent.",
    replique: "« Pardon, vous disiez ? J'étais en Italie. »",
    icon: "cloud",
    accent: "navy",
    image: "/images/personnages/le-reveur.svg",
  },
  {
    slug: "le-chef-d-orchestre",
    name: "Le Chef d'orchestre",
    part: "Le Self — la part calme qui les écoute toutes",
    tagline: "« Chacun aura son solo. »",
    description:
      "Ni juge, ni gendarme : il accueille toutes les autres parts sans en bannir aucune. Quand il reprend la baguette, le vacarme intérieur devient enfin une musique.",
    replique: "« Vous pouvez tous parler. Mais un par un, s'il vous plaît. »",
    icon: "compass",
    accent: "gold",
    image: "/images/personnages/le-chef-d-orchestre.svg",
  },
] as const;
