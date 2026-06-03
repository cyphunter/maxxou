/**
 * Calendrier des représentations.
 *
 * ⚠️ DATES PLACEHOLDER — à remplacer par les vraies dates de tournée.
 * `date` au format ISO (YYYY-MM-DD). `status` :
 *   - "open"    : billetterie ouverte (afficher le bouton Réserver)
 *   - "soon"    : date annoncée, billetterie bientôt ouverte
 *   - "soldout" : complet
 *   - "past"    : représentation passée (archives)
 * `ticketUrl` : lien billetterie (HelloAsso, BilletWeb, salle…). Vide → le
 * bouton renvoie vers la page Contact.
 */

export type DateStatus = "open" | "soon" | "soldout" | "past";

export type Representation = {
  id: string;
  /** Date ISO : "2026-10-04" */
  date: string;
  /** Horaire affiché, ex: "20h30". */
  time?: string;
  city: string;
  venue: string;
  address?: string;
  status: DateStatus;
  ticketUrl?: string;
  note?: string;
};

export const representations: readonly Representation[] = [
  {
    id: "d1",
    date: "2026-09-26",
    time: "20h30",
    city: "Lyon",
    venue: "Le Complexe du Rire",
    address: "7 rue des Capucins, 69001 Lyon",
    status: "open",
    ticketUrl: "",
    note: "Première de la saison",
  },
  {
    id: "d2",
    date: "2026-10-10",
    time: "20h00",
    city: "Lyon",
    venue: "L'Improvidence",
    address: "27 rue de l'Arbre Sec, 69001 Lyon",
    status: "open",
    ticketUrl: "",
  },
  {
    id: "d3",
    date: "2026-10-24",
    time: "21h00",
    city: "Paris",
    venue: "Le Point Virgule",
    address: "7 rue Sainte-Croix de la Bretonnerie, 75004 Paris",
    status: "open",
    ticketUrl: "",
  },
  {
    id: "d4",
    date: "2026-11-14",
    time: "20h30",
    city: "Paris",
    venue: "La Nouvelle Seine",
    address: "Port de la Tournelle, 75005 Paris",
    status: "soldout",
    ticketUrl: "",
    note: "Complet — liste d'attente possible",
  },
  {
    id: "d5",
    date: "2026-11-28",
    time: "20h30",
    city: "Villeurbanne",
    venue: "Le Rideau Rouge",
    status: "soon",
    ticketUrl: "",
    note: "Billetterie bientôt ouverte",
  },
  {
    id: "d6",
    date: "2026-12-12",
    time: "20h00",
    city: "Paris",
    venue: "Théâtre BO Saint-Martin",
    status: "soon",
    ticketUrl: "",
  },
];
