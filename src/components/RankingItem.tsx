import { affiliateConfig, rakutenSearchUrl, yahooSearchUrl, mercariSearchUrl } from "@/lib/affiliateConfig";

type RankingItemProps = {
  rank: number;
  name: string;
  description: string;
  price: string;
  amazonUrl?: string;
  pros: string[];
  cons: string[];
  badge?: string;
  asin?: string;
  image?: string;
};

const rankColors: { [key: number]: { bg: string; color: string; label: string } } = {
  1: { bg: "#F59E0B", color: "#000", label: "🥇" },
  2: { bg: "#94A3B8", color: "#000", label: "🥈" },
  3: { bg: "#B45309", color: "#fff", label: "🥉" },
};

export default function RankingItem({
  rank,
  name,
  description,
  price,
  amazonUrl,
  pros,
  cons,
  badge,
  asin,
  image,
}: RankingItemProps) {
  const rankInfo = rankColors[rank] ?? { bg: "#334155", color: "#94a3b8", label: String(rank) };

  const amazonHref =
    amazonUrl ??
    `https://www.amazon.co.jp/s?k=${encodeURIComponent(name)}&tag=${affiliateConfig.amazonTag}`;
  const rakutenHref = rakutenSearchUrl(name);
  const yahooHref = yahooSearchUrl(name);
  const mercariHref = mercariSearchUrl(name);

  const shopButtons = [
    { label: "Amazon", href: amazonHref, bg: "#FF9900", color: "#000" },
    { label: "楽天", href: rakutenHref, bg: "#BF0000", color: "#fff" },
    { label: "Yahoo!", href: yahooHref, bg: "#FF0033", color: "#fff" },
    { label: "メルカリ", href: mercariHref, bg: "#FF4455", color: "#fff" },
  ];

  return (
    <div
      id={`rank-${rank}`}
      style={{
        backgroundColor: "#1e293b",
        border: rank <= 3 ? "1px solid #334155" : "1px solid #1e293b",
        borderRadius: "1rem",
        padding: "1.5rem",
        position: "relative",
        boxShadow: rank === 1 ? "0 0 0 1px rgba(245,158,11,0.3), 0 4px 20px rgba(245,158,11,0.08)" : "none",
      }}
    >
      {/* Rank badge */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: rankInfo.bg,
            color: rankInfo.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "800",
            fontSize: rank <= 3 ? "1.2rem" : "1rem",
            flexShrink: 0,
          }}
        >
          {rankInfo.label}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Name + badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.375rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#f1f5f9", margin: 0 }}>
              {name}
            </h3>
            {badge && (
              <span
                style={{
                  backgroundColor: "rgba(6,182,212,0.15)",
                  color: "#06b6d4",
                  border: "1px solid rgba(6,182,212,0.3)",
                  borderRadius: "9999px",
                  padding: "0.15rem 0.625rem",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                }}
              >
                {badge}
              </span>
            )}
          </div>

          {/* Image + description */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
            {image && (
              <a href={amazonHref} target="_blank" rel="noopener noreferrer nofollow" style={{ flexShrink: 0 }}>
                <img
                  src={image}
                  alt={name}
                  width={88}
                  height={88}
                  style={{
                    width: "88px",
                    height: "88px",
                    objectFit: "contain",
                    backgroundColor: "#0f172a",
                    borderRadius: "0.5rem",
                    border: "1px solid #334155",
                    padding: "4px",
                  }}
                />
              </a>
            )}
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7", margin: 0 }}>
              {description}
            </p>
          </div>

          {/* Pros / Cons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <p style={{ color: "#10b981", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.375rem" }}>
                ✓ メリット
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                {pros.map((p, i) => (
                  <li key={i} style={{ color: "#cbd5e1", fontSize: "0.8rem", lineHeight: "1.5" }}>
                    • {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.375rem" }}>
                ✗ デメリット
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                {cons.map((c, i) => (
                  <li key={i} style={{ color: "#cbd5e1", fontSize: "0.8rem", lineHeight: "1.5" }}>
                    • {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price + Shop buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <span style={{ color: "#64748b", fontSize: "0.75rem" }}>参考価格</span>
              <p style={{ color: "#f1f5f9", fontWeight: "700", fontSize: "1rem", margin: 0 }}>{price}</p>
            </div>
            <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
              {shopButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    backgroundColor: btn.bg,
                    color: btn.color,
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    padding: "0.4rem 0.875rem",
                    borderRadius: "0.375rem",
                    textDecoration: "none",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
