"use client";
import { affiliateConfig, amazonUrl, amazonSearchUrl, rakutenSearchUrl, yahooSearchUrl, mercariSearchUrl } from "@/lib/affiliateConfig";
import { getProduct } from "@/lib/products";

type RankingItemProps = {
  rank: number;
  // --- 商品マスタから自動取得する場合 ---
  productId?: string;
  // --- 個別指定する場合（productIdより優先） ---
  name?: string;
  description?: string;
  price?: string;
  asin?: string;
  image?: string;
  // --- 共通 ---
  pros: string[];
  cons: string[];
  badge?: string;
};

const rankColors: { [key: number]: { bg: string; color: string; label: string } } = {
  1: { bg: "#c98a1b", color: "#000", label: "🥇" },
  2: { bg: "#5c6469", color: "#000", label: "🥈" },
  3: { bg: "#B45309", color: "#fff", label: "🥉" },
};

export default function RankingItem({
  rank,
  productId,
  name: nameProp,
  description: descProp,
  price: priceProp,
  asin: asinProp,
  image: imageProp,
  pros,
  cons,
  badge,
}: RankingItemProps) {
  // 商品マスタから取得（productIdが指定された場合）
  const product = productId ? getProduct(productId) : undefined;

  // 個別指定 > 商品マスタ の優先順位でマージ
  const name        = nameProp        ?? product?.name        ?? "";
  const description = descProp        ?? product?.description ?? "";
  const price       = priceProp       ?? product?.price       ?? "";
  const asin        = asinProp        ?? product?.asin        ?? "";
  const image       = imageProp       ?? product?.image       ?? "";
  const keyword     = product?.keyword ?? name;

  // リンク生成：ASINがあれば直リン、なければキーワード検索
  const amazonHref  = asin ? amazonUrl(asin) : amazonSearchUrl(keyword);
  const rakutenHref = rakutenSearchUrl(keyword);
  const yahooHref   = yahooSearchUrl(keyword);
  const mercariHref = mercariSearchUrl(keyword);

  const rankInfo = rankColors[rank] ?? { bg: "#e4dccd", color: "#5c6469", label: String(rank) };

  const shopButtons = [
    { label: "Amazon", href: amazonHref,  bg: "#FF9900", color: "#000" },
    { label: "楽天",   href: rakutenHref, bg: "#BF0000", color: "#fff" },
    { label: "Yahoo!", href: yahooHref,   bg: "#FF0033", color: "#fff" },
    { label: "メルカリ", href: mercariHref, bg: "#FF4455", color: "#fff" },
  ];

  return (
    <div
      id={`rank-${rank}`}
      style={{
        backgroundColor: "#fffcf7",
        border: rank <= 3 ? "1px solid #e4dccd" : "1px solid #fffcf7",
        borderRadius: "1rem",
        padding: "1.5rem",
        marginBottom: "1.5rem",
        position: "relative",
        boxShadow: rank === 1 ? "0 0 0 1px rgba(245,158,11,0.3), 0 4px 20px rgba(245,158,11,0.08)" : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        {/* ランクバッジ */}
        <div style={{
          width: "44px", height: "44px", borderRadius: "50%",
          backgroundColor: rankInfo.bg, color: rankInfo.color,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: "800", fontSize: rank <= 3 ? "1.2rem" : "1rem", flexShrink: 0,
        }}>
          {rankInfo.label}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <h3 style={{ color: "#1e2a30", fontWeight: "700", fontSize: "1.05rem" }}>{name}</h3>
            {badge && (
              <span style={{
                backgroundColor: "rgba(160,64,46,0.15)", color: "#a0402e",
                border: "1px solid rgba(160,64,46,0.3)", borderRadius: "9999px",
                padding: "0.1rem 0.6rem", fontSize: "0.7rem", fontWeight: "600",
              }}>{badge}</span>
            )}
          </div>

          {/* 商品画像 */}
          {image && (
            <div style={{ margin: "0.75rem 0" }}>
              <img
                src={image}
                alt={name}
                style={{ maxHeight: "120px", objectFit: "contain", borderRadius: "0.5rem" }}
              />
            </div>
          )}

          <p style={{ color: "#5c6469", fontSize: "0.875rem", lineHeight: "1.7", margin: "0.5rem 0 1rem" }}>
            {description}
          </p>

          {/* メリット・デメリット */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
            <div>
              <p style={{ color: "#2f7d4f", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.4rem" }}>✓ メリット</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {pros.map((p, i) => (
                  <li key={i} style={{ color: "#2e3a40", fontSize: "0.8rem", marginBottom: "0.25rem" }}>• {p}</li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ color: "#c2412d", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.4rem" }}>✗ デメリット</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {cons.map((c, i) => (
                  <li key={i} style={{ color: "#2e3a40", fontSize: "0.8rem", marginBottom: "0.25rem" }}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 価格 + 購入ボタン */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
            <p style={{ color: "#1e2a30", fontWeight: "700", fontSize: "0.95rem" }}>
              参考価格：<span style={{ color: "#a0402e" }}>{price}</span>
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {shopButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{
                    backgroundColor: btn.bg, color: btn.color,
                    padding: "0.35rem 0.85rem", borderRadius: "0.4rem",
                    fontSize: "0.75rem", fontWeight: "700", textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
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
