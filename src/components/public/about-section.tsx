import Link from "next/link";
import { ArrowUpRight, Shuffle, Mic, Puzzle } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/lib/site-config";
import { media } from "@/data/media";

const chips = [
  { icon: Shuffle, label: "Improvisation théâtrale" },
  { icon: Mic, label: "Scène & humour" },
  { icon: Puzzle, label: "Thérapie des parties" },
];

export function AboutSection() {
  return (
    <section className="section-noir grain relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="fil-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-soft relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
        <ScrollReveal className="lg:col-span-5">
          <div className="frame-premium relative aspect-[4/5]">
            <SmartImage
              src={media.portrait}
              alt="Portrait de Maxxou, humoriste et improvisateur"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-navy-950/70 px-4 py-1.5 text-xs font-medium text-ivory ring-1 ring-ivory/15 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
              {siteConfig.name} · {siteConfig.role}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <p className="eyebrow eyebrow--light">Qui est Maxxou ?</p>
          <h2 className="fluid-h2 mt-4 text-ivory">
            L&apos;humour comme{" "}
            <span className="italic-display text-gold-300">porte d&apos;entrée</span>.
          </h2>
          <p className="fluid-lead mt-6 text-cream-100/85">
            Humoriste et improvisateur, Maxxou met en scène les voix qui nous habitent. Nourri
            par la pratique de l&apos;impro, le goût de la scène et une vraie curiosité pour la
            thérapie des parties, il transforme nos contradictions en éclats de rire.
          </p>
          <p className="mt-5 leading-relaxed text-cream-100/70">
            Sur scène, pas de leçon ni de jugement : juste un miroir tendre et drôle, où chacun
            reconnaît un bout de soi. Une approche pédagogique et bienveillante qui rend les
            grands sujets intimes étonnamment légers.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {chips.map((c) => (
              <li
                key={c.label}
                className="inline-flex items-center gap-2 rounded-full bg-ivory/5 px-4 py-2 text-sm text-cream-100/85 ring-1 ring-ivory/12"
              >
                <c.icon size={14} aria-hidden className="text-gold-400" />
                {c.label}
              </li>
            ))}
          </ul>

          <Link
            href="/a-propos"
            className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            En savoir plus sur Maxxou
            <ArrowUpRight
              size={15}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
