import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#20201f",
          color: "#e3af3b",
          fontSize: 116,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          letterSpacing: -4,
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
