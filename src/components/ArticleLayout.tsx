"use client";
import Link from "next/link";

type BreadcrumbItem = { label: string; href?: string };
type TocItem = { id: string; label: string };
type RelatedArticle = { href: string; title: string; badge?: string; badgeColor?: string };

type ArticleLayoutProps = {
  breadcrumb: BreadcrumbItem[];
  title: string;
  updatedAt?: string;
  tags?: string[];
  toc?: TocItem[];
  related?: RelatedArticle[];
  children: React.ReactNode;
};

export default function ArticleLayout({
  breadcrumb,
  title,
  updatedAt,
  tags = [],
  toc = [],
  related = [],
  children,
}: ArticleLayoutProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#0f172a", borderBottom: "1px solid #1e293b", padding: "0.75rem 1.5rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8rem", color: "#64748b", flexWrap: "wrap" }}>
            {breadcrumb.map((item, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                {i > 0 && <span>›</span>}
                {item.href ? (
                  <Link href={item.href} className="footer-link">{item.label}</Link>
                ) : (
                  <span style={{ color: "#94a3b8" }}>{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1a2540 100%)", borderBottom: "1px solid #334155", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              {tags.map((tag) => (
                <span key={tag} style={{ backgroundColor: "#334155", color: "#94a3b8", borderRadius: "9999px", padding: "0.2rem 0.75rem", fontSize: "0.75rem" }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: "800", color: "#f1f5f9", lineHeight: "1.35", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
            {title}
          </h1>
          {updatedAt && (
            <p style={{ color: "#64748b", fontSize: "0.8rem" }}>更新日: {updatedAt}</p>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {/* Inline TOC Box */}
        {toc.length > 0 && (
          <div style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <p style={{ color: "#06b6d4", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              📋 目次
            </p>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem", counterReset: "toc-counter" }}>
              {toc.map((item, i) => (
                <li key={item.id} style={{ display: "flex", alignItems: "baseline", gap: "0.625rem" }}>
                  <span style={{ color: "#06b6d4", fontSize: "0.75rem", fontWeight: "700", flexShrink: 0, minWidth: "1.2rem" }}>
                    {i + 1}.
                  </span>
                  <a
                    href={`#${item.id}`}
                    style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem", lineHeight: "1.5", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#06b6d4")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#94a3b8")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Main Content */}
        <article>{children}</article>

        {/* Related Articles */}
        {related.length > 0 && (
          <div style={{ marginTop: "3rem", borderTop: "1px solid #334155", paddingTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#f1f5f9", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ display: "inline-block", width: "4px", height: "1.1rem", backgroundColor: "#06b6d4", borderRadius: "2px" }} />
              関連記事
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
              {related.map((article) => (
                <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
                  <div
                    style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.25rem", transition: "border-color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#06b6d4")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#334155")}
                  >
                    {article.badge && (
                      <span style={{ display: "inline-block", backgroundColor: `${article.badgeColor ?? "#06b6d4"}22`, color: article.badgeColor ?? "#06b6d4", border: `1px solid ${article.badgeColor ?? "#06b6d4"}44`, borderRadius: "9999px", padding: "0.15rem 0.625rem", fontSize: "0.7rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                        {article.badge}
                      </span>
                    )}
                    <p style={{ color: "#cbd5e1", fontSize: "0.875rem", fontWeight: "600", lineHeight: "1.5" }}>
                      {article.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
