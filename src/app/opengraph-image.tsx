import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Maxxou Officiel — humoriste & improvisateur, thérapie des parties (Lyon & sa région)";

export default function OpenGraphImage() {
  return renderOgImage({
    eyebrow: "Humoriste & improvisateur · Lyon & sa région",
    title: "Rire de ses parts pour mieux vivre avec elles.",
  });
}
