import { ImageResponse } from "next/og";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 168,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          letterSpacing: -6,
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
