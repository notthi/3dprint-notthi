"use client";
import Link from "next/link";

type ArticleCardProps = {
  href: string;
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  tags: string[];
  hoverBorderColor?: string;
};

export default function ArticleCard({
  href,
  badge,
  badgeColor,
  title,
  desc,
  tags,
  hoverBorderColor = "#06b6d4",
}: ArticleCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          backgroundColor: "#1e293b",
          border: "1px solid #334155",
          borderRadius: "1rem",
          padding: "1.75rem",
          transition: "border-color 0.2s, transform 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = hoverBorderColor;
          el.style.transform = "translateX(4px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "#334155";
          el.style.transform = "translateX(0)";
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
          <div style={{ flex: 1 }}>
            {/* Badge + Tags */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.625rem", flexWrap: "wrap" }}>
              <span
                style={{
                  backgroundColor: `${badgeColor}22`,
                  color: badgeColor,
                  border: `1px solid ${badgeColor}44`,
                  borderRadius: "9999px",
                  padding: "0.2rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                }}
              >
                {badge}
              </span>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: "#334155",
                    color: "#94a3b8",
                    borderRadius: "9999px",
                    padding: "0.2rem 0.625rem",
                    fontSize: "0.7rem",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "1.125rem",
                fontWeight: "700",
                color: "#f1f5f9",
                marginBottom: "0.5rem",
                lineHeight: "1.4",
              }}
            >
              {title}
            </h2>

            {/* Description */}
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.6" }}>
              {desc}
            </p>
          </div>

          {/* Arrow */}
          <span style={{ color: "#475569", fontSize: "1.25rem", flexShrink: 0, marginTop: "0.25rem" }}>›</span>
        </div>
      </div>
    </Link>
  );
}
