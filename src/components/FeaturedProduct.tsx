"use client";
import Link from "next/link";
import Image from "next/image";

type ShopButton = {
  label: string;
  href: string;
  bg: string;
  color: string;
};

type FeaturedProductProps = {
  badge?: string;
  name: string;
  tagline: string;
  points: string[];
  price: string;
  image?: string;
  reviewUrl?: string;
  shops: ShopButton[];
};

export default function FeaturedProduct({
  badge = "編集部イチオシ No.1",
  name,
  tagline,
  points,
  price,
  image,
  reviewUrl,
  shops,
}: FeaturedProductProps) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #efe7da 0%, #1a1040 100%)",
        borderTop: "1px solid #e4dccd",
        borderBottom: "1px solid #e4dccd",
        padding: "3rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(160,64,46,0.15)",
              border: "1px solid rgba(160,64,46,0.4)",
              borderRadius: "9999px",
              padding: "0.375rem 1.25rem",
              color: "#a0402e",
              fontSize: "0.8rem",
              fontWeight: "700",
              letterSpacing: "0.08em",
              marginBottom: "0.75rem",
            }}
          >
            ★ {badge}
          </span>
        </div>

        {/* Product Card */}
        <div
          style={{
            backgroundColor: "#fffcf7",
            border: "2px solid #a0402e",
            borderRadius: "1.25rem",
            overflow: "hidden",
            boxShadow: "0 0 40px rgba(160,64,46,0.12)",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 0,
          }}
        >
          {/* Left: Image */}
          <div
            style={{
              width: "260px",
              minHeight: "260px",
              backgroundColor: "#f2ece2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid #e4dccd",
              flexShrink: 0,
            }}
          >
            {image ? (
              <img
                src={image}
                alt={name}
                style={{ width: "220px", height: "220px", objectFit: "contain" }}
              />
            ) : (
              <div style={{ textAlign: "center", color: "#8a8f93" }}>
                <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🖨️</div>
                <p style={{ fontSize: "0.75rem" }}>画像準備中</p>
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div style={{ padding: "2rem" }}>
            {/* Name */}
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                color: "#1e2a30",
                marginBottom: "0.375rem",
                lineHeight: "1.3",
              }}
            >
              {name}
            </h2>

            {/* Tagline */}
            <p style={{ color: "#a0402e", fontSize: "0.9rem", fontWeight: "600", marginBottom: "1.25rem" }}>
              {tagline}
            </p>

            {/* Points */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {points.map((point, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#2e3a40", fontSize: "0.9rem", lineHeight: "1.5" }}>
                  <span style={{ color: "#a0402e", fontWeight: "700", flexShrink: 0 }}>✓</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div style={{ marginBottom: "1.25rem" }}>
              <span style={{ color: "#6b7378", fontSize: "0.8rem" }}>参考価格</span>
              <div style={{ color: "#1e2a30", fontSize: "1.5rem", fontWeight: "800" }}>{price}</div>
            </div>

            {/* Shop Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              {shops.map((shop) => (
                <a
                  key={shop.label}
                  href={shop.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    backgroundColor: shop.bg,
                    color: shop.color,
                    fontWeight: "700",
                    fontSize: "0.875rem",
                    padding: "0.625rem 1.25rem",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  {shop.label}
                </a>
              ))}
            </div>

            {/* Review Link */}
            {reviewUrl && (
              <Link
                href={reviewUrl}
                style={{
                  color: "#5c6469",
                  fontSize: "0.8rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                📝 実機レビュー記事を読む（notthi.com）→
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile style */}
      <style jsx>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="width: 260px"] {
            width: 100% !important;
            min-height: 200px !important;
            border-right: none !important;
            border-bottom: 1px solid #e4dccd;
          }
        }
      `}</style>
    </section>
  );
}
