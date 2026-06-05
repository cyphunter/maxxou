import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png" as const;

type RenderOgOpts = {
  eyebrow: string;
  title: string;
  footerLeft?: string;
  footerRight?: string;
};

/**
 * Carte sociale « galerie » : fond ivoire, cartel anthracite, filet 1px en
 * cadre comme un passe-partout de musée, l'or en touche unique.
 */
export function renderOgImage({
  eyebrow,
  title,
  footerLeft,
  footerRight,
}: RenderOgOpts): ImageResponse {
  const leftText = footerLeft ?? siteConfig.contact.serviceAreaLabel;
  const rightText = footerRight ?? "maxxou-officiel.fr";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fcfaf5",
          padding: 64,
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(32, 32, 31, 0.18)",
            padding: "56px 60px",
          }}
        >
          {/* En-tête : wordmark */}
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: 34,
                fontFamily: "Georgia, serif",
                color: "#20201f",
                letterSpacing: -0.5,
              }}
            >
              {siteConfig.shortName}
              <span style={{ color: "#c4902a", marginLeft: 3 }}>.</span>
            </div>
          </div>

          {/* Titre */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 19,
                letterSpacing: 7,
                color: "#6a6962",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: 26,
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 64,
                lineHeight: 1.05,
                letterSpacing: -1.5,
                color: "#20201f",
                maxWidth: 980,
                fontFamily: "Georgia, serif",
              }}
            >
              {title}
            </div>
          </div>

          {/* Pied */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontSize: 22,
              color: "#6a6962",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{ width: 8, height: 8, background: "#e3af3b", marginRight: 12, display: "flex" }}
              />
              {leftText}
            </div>
            <div style={{ display: "flex" }}>{rightText}</div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
