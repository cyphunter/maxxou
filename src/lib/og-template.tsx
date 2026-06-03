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

export function renderOgImage({
  eyebrow,
  title,
  footerLeft,
  footerRight,
}: RenderOgOpts): ImageResponse {
  const leftText = footerLeft ?? siteConfig.contact.serviceAreaLabel;
  const rightText = footerRight ?? "maxou-officiel.fr";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0b1020 0%, #15203f 58%, #1c2c54 100%)",
          padding: 72,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#f3ecde",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 320,
            width: 720,
            height: 720,
            background: "radial-gradient(circle, rgba(227, 175, 59, 0.32), transparent 62%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(227, 175, 59, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(227, 175, 59, 0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* En-tête : monogramme + nom */}
        <div style={{ display: "flex", alignItems: "center", gap: 22, position: "relative" }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 38,
              background: "#e3af3b",
              color: "#10182f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: -1,
            }}
          >
            M
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              letterSpacing: 0.5,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        {/* Titre */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 5,
              color: "#f5dd97",
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {eyebrow}
          </div>
          <div style={{ fontSize: 66, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        {/* Pied */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#d8c8ab",
            fontFamily: "system-ui, sans-serif",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: "#e3af3b" }} />
            {leftText}
          </div>
          <div>{rightText}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
