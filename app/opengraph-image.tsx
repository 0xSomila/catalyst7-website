import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Catalyst 7 — Technology. Production. Consulting."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo / wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#CC1414",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#EDE5D0",
              fontWeight: 700,
              fontSize: "22px",
              letterSpacing: "-1px",
            }}
          >
            C7
          </div>
          <span
            style={{
              color: "#EDE5D0",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Catalyst 7
          </span>
        </div>

        {/* Centre: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              color: "#EDE5D0",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            We build the systems
            <br />
            that move{" "}
            <span style={{ color: "#CC1414" }}>business</span>.
          </div>
          <div
            style={{
              color: "#999999",
              fontSize: "24px",
              fontWeight: 400,
            }}
          >
            Technology. Production. Consulting. — Pretoria, South Africa.
          </div>
        </div>

        {/* Bottom: three verticals */}
        <div style={{ display: "flex", gap: "40px" }}>
          {["Technology", "Production", "Consulting"].map((v) => (
            <div
              key={v}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#CC1414",
                }}
              />
              <span style={{ color: "#EDE5D0", fontSize: "16px", fontWeight: 500 }}>
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
