import Link from "next/link";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "3Dプリンターの使い方・ノウハウ | 初心者から上級者まで",
  description: "3Dプリンターのセットアップ・スライサー設定・トラブル解決など実践的なノウハウを解説。",
};

const articles = [
  {
    href: "/howto/beginners",
    badge: "入門",
    badgeColor: "#10b981",
    title: "3Dプリンター初心者ガイド【購入から最初の印刷まで】",
    desc: "3Dプリンターを初めて使う方のための完全ガイド。購入・開封・セットアップ・スライサー設定・最初の印刷まで丁寧に解説。",
    tags: ["初心者", "セットアップ", "入門"],
    hoverBorderColor: "#10b981",
  },
  {
    href: "/howto/trouble",
    badge: "トラブル",
    badgeColor: "#ef4444",
    title: "3Dプリンターのトラブル解決集【よくある失敗と対策】",
    desc: "反り・糸引き・剥離・ノズル詰まりなどよくあるトラブルの原因と解決方法をまとめて解説。",
    tags: ["トラブル", "失敗", "解決"],
    hoverBorderColor: "#ef4444",
  },
];

export default function HowtoPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #0d1f17 100%)",
          borderBottom: "1px solid #334155",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>ホーム</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#10b981" }}>使い方・ノウハウ</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>📖</span>
            <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#f1f5f9" }}>使い方・ノウハウ</h1>
          </div>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: "1.6" }}>
            セットアップから印刷テクニック、トラブル解決まで。実践的なノウハウをまとめています。
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
