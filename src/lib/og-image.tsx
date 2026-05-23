import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png" as const;

const CATEGORY_LABELS: Record<string, string> = {
  filaments: "フィラメント",
  printers: "プリンター",
  howto: "使い方",
};

const SITE_NAME = "3Dプリントラボ";
const SITE_DOMAIN = "3dprint.notthi.com";

type OgImageArgs = {
  title: string;
  badge: string;
  badgeColor: string;
  category: string;
};

export async function generateOgImage({ title, badge, badgeColor, category }: OgImageArgs) {
  const fontData = await readFile(
    join(process.cwd(), "assets/fonts/NotoSansJP-Bold.ttf")
  );
  const categoryLabel = CATEGORY_LABELS[category] ?? category;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px 56px 88px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#f1f5f9",
          fontFamily: "NotoSansJP",
          borderLeft: `18px solid ${badgeColor}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: badgeColor,
              color: "#0f172a",
              padding: "12px 32px",
              borderRadius: "999px",
              fontSize: "34px",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {badge}
          </div>
          <div style={{ display: "flex", color: "#94a3b8", fontSize: "30px" }}>
            {categoryLabel}
          </div>
        </div>

        <div
          style={{
            display: "-webkit-box",
            fontSize: "68px",
            lineHeight: 1.3,
            fontWeight: 700,
            color: "#f1f5f9",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #334155",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#06b6d4",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            {SITE_NAME}
          </div>
          <div style={{ display: "flex", color: "#64748b", fontSize: "28px" }}>
            {SITE_DOMAIN}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        {
          name: "NotoSansJP",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
