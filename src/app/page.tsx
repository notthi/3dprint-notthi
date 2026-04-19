import Link from "next/link";
import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: "3Dプリンターガイド | おすすめ機種・フィラメント・使い方を徹底解説",
  description:
    "3Dプリンターの選び方からフィラメントの比較、印刷テクニックまで初心者にわかりやすく解説。2024年最新のおすすめ機種ランキングも掲載。",
};

const categories = [
  {
    href: "/printers",
    icon: "🖨️",
    title: "3Dプリンター",
    description: "機種の選び方・おすすめランキング・比較表",
    accent: "#06b6d4",
    links: [
      { href: "/printers/recommend", label: "おすすめランキング" },
      { href: "/printers/home-use", label: "家庭用プリンター7選" },
      { href: "/printers/beginners", label: "初心者向けガイド" },
    ],
  },
  {
    href: "/filaments",
    icon: "🧵",
    title: "フィラメント",
    description: "PLA・PETG・TPUの違いと使い方",
    accent: "#8b5cf6",
    links: [
      { href: "/filaments/recommend", label: "おすすめランキング" },
      { href: "/filaments/pla", label: "PLAフィラメント8選" },
      { href: "/filaments/petg", label: "PETGフィラメント" },
    ],
  },
  {
    href: "/howto",
    icon: "📖",
    title: "使い方・ノウハウ",
    description: "設定・スライサー・トラブル解決",
    accent: "#10b981",
    links: [
      { href: "/howto/beginners", label: "初心者完全ガイド" },
      { href: "/howto/trouble", label: "トラブル解決集" },
    ],
  },
];

const features = [
  {
    icon: "🎯",
    title: "初心者でもわかる",
    desc: "専門用語をわかりやすく解説。初めての3Dプリンター選びもサポート。",
  },
  {
    icon: "💰",
    title: "コスパで選ぶ",
    desc: "価格帯別のおすすめ機種を厳選。予算に合った最適な1台が見つかる。",
  },
  {
    icon: "🔧",
    title: "実際に使って比較",
    desc: "実機レビューと比較表で、スペック表だけではわからない差がわかる。",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ===== Hero Section ===== */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c1a2e 100%)",
          padding: "5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "60rem", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(6,182,212,0.15)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "9999px",
              padding: "0.375rem 1rem",
              color: "#06b6d4",
              fontSize: "0.8rem",
              fontWeight: "600",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
            }}
          >
            ✦ 2024年最新情報対応
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              lineHeight: "1.2",
              color: "#f1f5f9",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            3Dプリンターを
            <br />
            <span style={{ color: "#06b6d4" }}>もっと楽しく</span>、
            <span style={{ color: "#06b6d4" }}>賢く選ぶ</span>
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.1rem",
              lineHeight: "1.7",
              marginBottom: "2.5rem",
              maxWidth: "540px",
              margin: "0 auto 2.5rem",
            }}
          >
            機種選びからフィラメント比較、印刷テクニックまで。
            <br />
            初心者でも安心して3Dプリンターを始められるガイドサイトです。
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/printers/recommend" className="btn-primary">
              おすすめ機種を見る →
            </Link>
            <Link href="/howto/beginners" className="btn-secondary">
              初心者ガイドを読む
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Category Cards ===== */}
      <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: "700", color: "#f1f5f9", marginBottom: "0.5rem" }}>
          カテゴリーから探す
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: "2.5rem" }}>
          目的に合わせてコンテンツを選んでください
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.href} {...cat} />
          ))}
        </div>
      </section>

      {/* ===== Features ===== */}
      <section
        style={{
          backgroundColor: "#1e293b",
          borderTop: "1px solid #334155",
          borderBottom: "1px solid #334155",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "60rem", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "700", color: "#f1f5f9", marginBottom: "2.5rem" }}>
            このサイトの特徴
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {features.map((f) => (
              <div key={f.title} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                <h3 style={{ fontWeight: "700", color: "#f1f5f9", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.6" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ maxWidth: "60rem", margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#f1f5f9", marginBottom: "0.75rem" }}>
          まずは機種選びから始めよう
        </h2>
        <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>
          予算・用途別のおすすめ3Dプリンターをランキング形式で紹介しています
        </p>
        <Link href="/printers/recommend" className="btn-primary">
          おすすめランキングを見る →
        </Link>
      </section>
    </main>
  );
}
