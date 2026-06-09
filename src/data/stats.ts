/**
 * Quelques chiffres — ton volontairement léger et honnête.
 * Utilisés par `stats-editorial.tsx` (compteurs animés au scroll).
 */

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

export const stats: readonly Stat[] = [
  { value: 4, label: "parts de vous, enfin sur scène" },
  { value: 75, suffix: " min", label: "de rire et de réflexion" },
  { value: 100, suffix: " %", label: "humour bienveillant" },
  { value: 0, suffix: " %", label: "jugement, promis" },
];
