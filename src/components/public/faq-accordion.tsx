"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { FaqEntry } from "@/data/faq";

export function FaqAccordion({ entries }: { entries: readonly FaqEntry[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-noir-900/10">
      {entries.map((f, i) => (
        <Accordion.Item key={f.question} value={`item-${i}`}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4 focus-visible:ring-offset-paper">
              <span className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-gold-700">
                {f.question}
              </span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-noir-900/[0.04] text-gold-700 ring-1 ring-noir-900/10 transition-transform duration-300 group-data-[state=open]:rotate-45">
                <Plus size={16} aria-hidden />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[acc-up_0.3s_var(--ease-out-expo)] data-[state=open]:animate-[acc-down_0.3s_var(--ease-out-expo)]">
            <p className="max-w-2xl pb-6 pr-6 leading-relaxed text-stone-600">{f.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
