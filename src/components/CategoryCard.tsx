"use client";
import Link from "next/link";

type CategoryLink = { href: string; label: string };

type CategoryCardProps = {
  href: string;
  icon: string;
  title: string;
  description: string;
  accent: string;
  links: CategoryLink[];
};

export default function CategoryCard({
  href,
  icon,
  title,
  description,
  accent,
  links,
}: CategoryCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        border: "1px solid #334155",
        borderRadius: "1rem",
        padding: "1.75rem",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = accent;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = `0 12px 32px ${accent}22`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#334155";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{icon}</div>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#f1f5f9", marginBottom: "0.5rem" }}>
        {title}
      </h3>
      <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: "1.6" }}>
        {description}
      </p>

      {/* Sub-links */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{ color: "#64748b", fontSize: "0.875rem", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = accent)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#64748b")}
            >
              ▸ {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        style={{
          display: "inline-block",
          color: accent,
          fontSize: "0.875rem",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        すべて見る →
      </Link>
    </div>
  );
}
