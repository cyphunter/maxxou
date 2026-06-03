/**
 * Pourquoi faire confiance à Maxou — ce qui fonde sa légitimité.
 * `icon` = clé mappée vers une icône lucide dans `atouts-grid.tsx`.
 */

export type Atout = {
  title: string;
  description: string;
  icon: string;
};

export const atouts: readonly Atout[] = [
  {
    title: "L'improvisation chevillée au corps",
    description:
      "Des années de pratique de l'improvisation théâtrale : l'écoute, le lâcher-prise et la complicité avec le public.",
    icon: "shuffle",
  },
  {
    title: "L'expérience de la scène",
    description:
      "Le sens du rythme, du timing comique et de la présence — forgés représentation après représentation.",
    icon: "mic",
  },
  {
    title: "La thérapie des parties",
    description:
      "Une connaissance sérieuse de la thérapie des parties (IFS) : c'est elle qui donne au spectacle sa justesse et sa profondeur.",
    icon: "puzzle",
  },
  {
    title: "Curiosité pour la psyché",
    description:
      "Un intérêt sincère pour la psychanalyse et le développement personnel, nourri en continu — sans jamais se prendre au sérieux.",
    icon: "book-open",
  },
  {
    title: "Une approche bienveillante",
    description:
      "Pédagogue dans l'âme : rendre des sujets intimes accessibles, sans jamais moquer ni juger personne.",
    icon: "heart-handshake",
  },
  {
    title: "Du profond, en éclats de rire",
    description:
      "Le vrai talent : transformer des questions existentielles en moments de rire — et de réflexion qui restent.",
    icon: "sparkles",
  },
];
