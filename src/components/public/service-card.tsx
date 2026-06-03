import Link from "next/link";
import { Drama, Users, Handshake, ArrowUpRight, Check, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

const ICONS: Record<string, LucideIcon> = {
  drama: Drama,
  users: Users,
  handshake: Handshake,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon] ?? Drama;

  return (
    <article className="gradient-ring hover-lift group relative flex h-full flex-col rounded-2xl bg-ivory p-7 shadow-soft ring-1 ring-noir-900/10">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-noir-900">
        <Icon size={22} aria-hidden />
      </span>
      <h3 className="mt-5 font-display text-2xl text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">{service.summary}</p>

      <ul className="mt-5 space-y-2.5">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-stone-700">
            <Check size={16} aria-hidden className="mt-0.5 shrink-0 text-gold-700" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/contact?sujet=${service.slug}`}
        className={cn(
          "mt-7 inline-flex items-center gap-2 self-start text-sm font-medium text-gold-700 transition-colors hover:text-gold-800",
        )}
      >
        {service.cta}
        <ArrowUpRight
          size={15}
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </article>
  );
}
