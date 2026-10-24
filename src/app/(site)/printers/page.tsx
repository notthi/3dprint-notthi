import Link from "next/link";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "3Dプリンターおすすめ比較 | 機種選びの完全ガイド",
  description: "3Dプリンターのおすすめ機種を価格帯・用途別に比較。初心者向けから本格機まで厳選して紹介。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "3Dプリントラボ",
    url: "https://3dprint.notthi.com/printers",
    title: "3Dプリンターおすすめ比較 | 機種選びの完全ガイド",
    description: "3Dプリンターのおすすめ機種を価格帯・用途別に比較。初心者向けから本格機まで厳選して紹介。",
  },
  twitter: {
    card: "summary_large_image",
    title: "3Dプリンターおすすめ比較 | 機種選びの完全ガイド",
    description: "3Dプリンターのおすすめ機種を価格帯・用途別に比較。初心者向けから本格機まで厳選して紹介。",
  },
  alternates: {
    canonical: "https://3dprint.notthi.com/printers",
  },
};

const articles = getArticlesByCategory("printers");

export default function PrintersPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #f2ece2 0%, #fffcf7 100%)",
          borderBottom: "1px solid #e4dccd",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ color: "#6b7378", fontSize: "0.8rem", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "#6b7378", textDecoration: "none" }}>ホーム</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#a0402e" }}>プリンター</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>🖨️</span>
            <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#1e2a30" }}>3Dプリンター</h1>
          </div>
          <p style={{ color: "#5c6469", fontSize: "1rem", lineHeight: "1.6" }}>
            機種の選び方からおすすめランキングまで。あなたにぴったりの1台が見つかります。
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
