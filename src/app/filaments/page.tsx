import Link from "next/link";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";

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

const articles = [
  {
    href: "/filaments/recommend",
    badge: "ランキング",
    badgeColor: "#8b5cf6",
    title: "3Dプリンターフィラメントおすすめランキング【素材別】",
    desc: "PLA・PETG・TPUなど素材別におすすめフィラメントを比較。用途に合った選び方も解説。",
    tags: ["比較", "ランキング", "PLA", "PETG"],
    hoverBorderColor: "#8b5cf6",
  },
  {
    href: "/filaments/pla",
    badge: "PLA",
    badgeColor: "#06b6d4",
    title: "PLAフィラメントおすすめ8選【初心者にも使いやすい】",
    desc: "最も一般的な素材PLAフィラメントの人気製品8選を比較。強度・色・価格の違いを詳しく解説。",
    tags: ["PLA", "初心者", "コスパ"],
    hoverBorderColor: "#06b6d4",
  },
  {
    href: "/filaments/petg",
    badge: "PETG",
    badgeColor: "#f59e0b",
    title: "PETGフィラメントおすすめ5選【耐熱・強度が必要な用途に】",
    desc: "PLAより強く耐熱性も高いPETGフィラメントの選び方とおすすめ製品を紹介。",
    tags: ["PETG", "耐熱", "強度"],
    hoverBorderColor: "#f59e0b",
  },
];

export default function FilamentsPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1a2e 100%)",
          borderBottom: "1px solid #334155",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>ホーム</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#8b5cf6" }}>フィラメント</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>🧵</span>
            <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#f1f5f9" }}>フィラメント</h1>
          </div>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: "1.6" }}>
            PLA・PETG・TPUなど素材別の特性と選び方。用途に合った最適なフィラメントが見つかります。
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
