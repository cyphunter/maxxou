/**
 * Numéro de section « catalogue d'exposition » : grand numéral display,
 * très discret (graphite pâle), posé au-dessus du sur-titre doré. Décoratif.
 */
export function SectionMark({ n }: { n: string }) {
  return (
    <span
      aria-hidden
      className="block font-display text-[2.75rem] font-normal leading-none tabular-nums text-ink/15 sm:text-[3.5rem]"
    >
      {n}
    </span>
  );
}
