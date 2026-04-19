import Link from "next/link";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "3Dプリンターおすすめ比較 | 機種選びの完全ガイド",
  description: "3Dプリンターのおすすめ機種を価格帯・用途別に比較。初心者向けから本格機まで厳選して紹介。",
};

const articles = [
  {
    href: "/printers/recommend",
    badge: "ランキング",
    badgeColor: "#06b6d4",
    title: "3Dプリンターおすすめランキング【2024年最新】",
    desc: "価格帯別・用途別のおすすめ機種をランキング形式で解説。初めての1台選びに最適。",
    tags: ["初心者", "比較", "ランキング"],
    hoverBorderColor: "#06b6d4",
  },
  {
    href: "/printers/home-use",
    badge: "家庭用",
    badgeColor: "#8b5cf6",
    title: "家庭用3Dプリンターおすすめ7選【静音・コンパクト】",
    desc: "リビングや子供部屋でも使えるコンパクト・静音設計の家庭用3Dプリンターを厳選して紹介。",
    tags: ["家庭用", "静音", "コンパクト"],
    hoverBorderColor: "#8b5cf6",
  },
  {
    href: "/printers/beginners",
    badge: "初心者",
    badgeColor: "#10b981",
    title: "初心者向け3Dプリンター完全ガイド",
    desc: "3Dプリンターを初めて購入する方向けに、選び方・セットアップ・使い方を丁寧に解説。",
    tags: ["初心者", "入門", "使い方"],
    hoverBorderColor: "#10b981",
  },
];

export default function PrintersPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderBottom: "1px solid #334155",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>ホーム</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#06b6d4" }}>プリンター</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>🖨️</span>
            <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#f1f5f9" }}>3Dプリンター</h1>
          </div>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: "1.6" }}>
            機種の選び方からおすすめランキングまで。あなたにぴったりの1台が見つかります。
          </p>
        </div>
      </section>

      {/* Articles */}
      <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {articles.map((article) => (
            <ArticleCard key={article.href} {...article} />
          ))}
        </div>
      </section>
    </main>
  );
}
