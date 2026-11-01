import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export function GET(request: Request) {
  const raw = new URL(request.url).searchParams.get("title") ?? "VantagePoint OS";
  const title = raw.replace(/\s+/g, " ").trim().slice(0, 90) || "VantagePoint OS";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111729",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: "18px",
              height: "56px",
              background: "#d6a445",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              letterSpacing: "0.16em",
              color: "#d6a445",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            VANTAGEPOINT OS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "68px",
            lineHeight: 1.05,
            fontWeight: 600,
            maxWidth: "980px",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: "24px", color: "#c5cbd4" }}>
          For outpatient physical therapy owners
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
