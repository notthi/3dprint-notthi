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
  hoverBorderColor = "#a0402e",
}: ArticleCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          backgroundColor: "#fffcf7",
          border: "1px solid #e4dccd",
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
          el.style.borderColor = "#e4dccd";
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
                    backgroundColor: "#e4dccd",
                    color: "#5c6469",
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
                color: "#1e2a30",
                marginBottom: "0.5rem",
                lineHeight: "1.4",
              }}
            >
              {title}
            </h2>

            {/* Description */}
            <p style={{ color: "#5c6469", fontSize: "0.875rem", lineHeight: "1.6" }}>
              {desc}
            </p>
          </div>

          {/* Arrow */}
          <span style={{ color: "#8a8f93", fontSize: "1.25rem", flexShrink: 0, marginTop: "0.25rem" }}>›</span>
        </div>
      </div>
    </Link>
  );
}
