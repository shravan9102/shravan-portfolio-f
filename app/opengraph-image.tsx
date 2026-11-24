import { ImageResponse } from "next/og";
export const alt = "Shravan Kumar – Data Scientist & AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OgImage() {
  return new ImageResponse(
    (<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#060a14 0%,#0b1a3a 100%)", color: "white" }}>
      <div style={{ display: "flex", fontSize: 28, color: "#22d3ee" }}>Portfolio</div>
      <div style={{ display: "flex", fontSize: 88, fontWeight: 700, marginTop: 16 }}>Shravan Kumar</div>
      <div style={{ display: "flex", fontSize: 36, color: "#94a3b8", marginTop: 20 }}>Data Scientist | AI/ML Engineer | Machine Learning Engineer</div>
    </div>), size);
}
