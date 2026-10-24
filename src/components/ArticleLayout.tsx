"use client";
import Link from "next/link";
import { Disclaimer } from "@/components/blocks";

// 書いた人（10/24）。使ってきた機種は notthi.com の体験談まとめと同じ
function AuthorBox() {
  return (
    <div style={{ marginTop: "2.5rem", backgroundColor: "#fffcf7", border: "1px solid #e4dccd", borderRadius: "0.75rem", padding: "1.25rem 1.375rem", display: "grid", gap: "0.375rem" }}>
      <p style={{ color: "#a0402e", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em" }}>書いた人</p>
      <p style={{ color: "#1e2a30", fontWeight: 700 }}>のってぃ（Cubic未来デザイン研究所）</p>
      <p style={{ color: "#5c6469", fontSize: "0.85rem", lineHeight: 1.7 }}>製造業の機械系エンジニア。家庭用3Dプリンターは2018年から8年。使ってきた機種は、組み立て式のCore i3 → ANYCUBIC MEGA-S → Bambu Lab P1S（AMS付き）。使っていない機種は、そのことを記事の最初に書いています。</p>
      <a href="https://notthi.com/3d-printer-notes/" style={{ color: "#a0402e", fontSize: "0.85rem", fontWeight: 600 }}>8年間の体験談（作ったもの・失敗と直し方）を読む →</a>
    </div>
  );
}

type BreadcrumbItem = { label: string; href?: string };
type TocItem = { id: string; label: string };
type RelatedArticle = { href: string; title: string; badge?: string; badgeColor?: string };

type ArticleLayoutProps = {
  breadcrumb: BreadcrumbItem[];
  title: string;
  updatedAt?: string;
  handsOn?: boolean;
  tags?: string[];
  toc?: TocItem[];
  related?: RelatedArticle[];
  children: React.ReactNode;
};

export default function ArticleLayout({
  breadcrumb,
  title,
  updatedAt,
  handsOn,
  tags = [],
  toc = [],
  related = [],
  children,
}: ArticleLayoutProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#f2ece2", borderBottom: "1px solid #fffcf7", padding: "0.75rem 1.5rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8rem", color: "#6b7378", flexWrap: "wrap" }}>
            {breadcrumb.map((item, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                {i > 0 && <span>›</span>}
                {item.href ? (
                  <Link href={item.href} className="footer-link">{item.label}</Link>
                ) : (
                  <span style={{ color: "#5c6469" }}>{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div style={{ background: "linear-gradient(135deg, #f2ece2 0%, #f7f2e9 100%)", borderBottom: "1px solid #e4dccd", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              {tags.map((tag) => (
                <span key={tag} style={{ backgroundColor: "#e4dccd", color: "#5c6469", borderRadius: "9999px", padding: "0.2rem 0.75rem", fontSize: "0.75rem" }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: "800", color: "#1e2a30", lineHeight: "1.35", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
            {title}
          </h1>
          {updatedAt && (
            <p style={{ color: "#6b7378", fontSize: "0.8rem" }}>更新日: {updatedAt}</p>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {/* 広告の表示（景品表示法のステマ規制：記事の最初に）。10/24 */}
        <p style={{ fontSize: "0.75rem", color: "#5c6469", backgroundColor: "#fffcf7", border: "1px solid #e4dccd", borderRadius: "0.5rem", padding: "0.5rem 0.875rem", marginBottom: "1rem" }}>
          ※この記事には広告（アフィリエイトリンク）が含まれます
        </p>
        {/* 筆者が使っていない機種は、そのことを最初に正直に書く（10/24 本人「使ってないので、修正しましょう」） */}
        {handsOn === false && (
          <div style={{ backgroundColor: "#fffcf7", border: "1px solid #f59e0b66", borderLeft: "4px solid #c98a1b", borderRadius: "0.5rem", padding: "0.875rem 1rem", marginBottom: "1.5rem", fontSize: "0.85rem", color: "#2e3a40", lineHeight: 1.7 }}>
            <b style={{ color: "#a86f0e" }}>この機種は、筆者は使っていません。</b>
            公式の仕様と、公開されている評判をもとに整理した解説です（実機レビューではありません）。筆者が使っているのは Bambu Lab P1S（AMS付き）です。
          </div>
        )}

        {/* Inline TOC Box */}
        {toc.length > 0 && (
          <div style={{ backgroundColor: "#fffcf7", border: "1px solid #e4dccd", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <p style={{ color: "#a0402e", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              📋 目次
            </p>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem", counterReset: "toc-counter" }}>
              {toc.map((item, i) => (
                <li key={item.id} style={{ display: "flex", alignItems: "baseline", gap: "0.625rem" }}>
                  <span style={{ color: "#a0402e", fontSize: "0.75rem", fontWeight: "700", flexShrink: 0, minWidth: "1.2rem" }}>
                    {i + 1}.
                  </span>
                  <a
                    href={`#${item.id}`}
                    style={{ color: "#5c6469", textDecoration: "none", fontSize: "0.875rem", lineHeight: "1.5", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#a0402e")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5c6469")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Main Content */}
        <article className="article-body">
          {children}
          <AuthorBox />
          <Disclaimer />
        </article>

        {/* Related Articles */}
        {related.length > 0 && (
          <div style={{ marginTop: "3rem", borderTop: "1px solid #e4dccd", paddingTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1e2a30", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ display: "inline-block", width: "4px", height: "1.1rem", backgroundColor: "#a0402e", borderRadius: "2px" }} />
              関連記事
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
              {related.map((article) => (
                <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
                  <div
                    style={{ backgroundColor: "#fffcf7", border: "1px solid #e4dccd", borderRadius: "0.75rem", padding: "1.25rem", transition: "border-color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#a0402e")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#e4dccd")}
                  >
                    {article.badge && (
                      <span style={{ display: "inline-block", backgroundColor: `${article.badgeColor ?? "#a0402e"}22`, color: article.badgeColor ?? "#a0402e", border: `1px solid ${article.badgeColor ?? "#a0402e"}44`, borderRadius: "9999px", padding: "0.15rem 0.625rem", fontSize: "0.7rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                        {article.badge}
                      </span>
                    )}
                    <p style={{ color: "#2e3a40", fontSize: "0.875rem", fontWeight: "600", lineHeight: "1.5" }}>
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
