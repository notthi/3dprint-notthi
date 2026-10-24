import Link from "next/link";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "3Dプリンター フィラメントおすすめ比較 | PLA・PETG・TPU解説",
  description: "3DプリンターのフィラメントをPLA・PETG・TPU別に比較。素材の特性・用途・おすすめ製品を解説。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "3Dプリントラボ",
    url: "https://3dprint.notthi.com/filaments",
    title: "3Dプリンター フィラメントおすすめ比較 | PLA・PETG・TPU解説",
    description: "3DプリンターのフィラメントをPLA・PETG・TPU別に比較。素材の特性・用途・おすすめ製品を解説。",
  },
  twitter: {
    card: "summary_large_image",
    title: "3Dプリンター フィラメントおすすめ比較 | PLA・PETG・TPU解説",
    description: "3DプリンターのフィラメントをPLA・PETG・TPU別に比較。素材の特性・用途・おすすめ製品を解説。",
  },
  alternates: {
    canonical: "https://3dprint.notthi.com/filaments",
  },
};

const articles = getArticlesByCategory("filaments");

export default function FilamentsPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #f2ece2 0%, #1e1a2e 100%)",
          borderBottom: "1px solid #e4dccd",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ color: "#6b7378", fontSize: "0.8rem", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "#6b7378", textDecoration: "none" }}>ホーム</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#4a76a0" }}>フィラメント</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>🧵</span>
            <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#1e2a30" }}>フィラメント</h1>
          </div>
          <p style={{ color: "#5c6469", fontSize: "1rem", lineHeight: "1.6" }}>
            PLA・PETG・TPUなど素材別の特性と選び方。用途に合った最適なフィラメントが見つかります。
          </p>
        </div>
      </section>

      {/* Articles */}
      <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {articles.map((article) => (
            <ArticleCard
              key={article.href}
              href={article.href}
              badge={article.badge}
              badgeColor={article.badgeColor}
              title={article.title}
              desc={article.description}
              tags={article.tags}
              hoverBorderColor={article.hoverBorderColor}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
