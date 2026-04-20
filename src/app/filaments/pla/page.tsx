import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "PLAフィラメントとは？特徴・使い方・注意点を徹底解説【2026年版】",
  description:
    "3Dプリンターで最も普及しているPLAフィラメントの特徴、印刷設定、メリット・デメリットをわかりやすく解説。初心者が最初に知っておくべき知識をまとめました。",
};

const toc = [
  { id: "what-is-pla", label: "PLAフィラメントとは" },
  { id: "pros-cons", label: "メリット・デメリット" },
  { id: "print-settings", label: "推奨印刷設定" },
  { id: "pla-plus", label: "PLA vs PLA+" },
  { id: "recommend", label: "おすすめフィラメント" },
];

const related = [
  { href: "/filaments/recommend", title: "PLAフィラメントおすすめ8選ランキング", badge: "ランキング" },
  { href: "/filaments/petg", title: "PETGフィラメントの特徴・使い方", badge: "PETG", badgeColor: "#8b5cf6" },
  { href: "/howto/beginners", title: "3Dプリンター初心者ガイド", badge: "入門", badgeColor: "#10b981" },
];

const S = {
  card: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" } as React.CSSProperties,
  h2: { fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.25rem" } as React.CSSProperties,
  p: { color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" } as React.CSSProperties,
  muted: { color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7" } as React.CSSProperties,
  section: { marginBottom: "2.5rem" } as React.CSSProperties,
  disclaimer: { color: "#475569", fontSize: "0.75rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", lineHeight: "1.6" } as React.CSSProperties,
};

export default function FilamentsPlaPage() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "フィラメント", href: "/filaments" },
        { label: "PLA" },
      ]}
      title="PLAフィラメントとは？特徴・使い方・注意点を徹底解説【2026年版】"
      updatedAt="2026年4月"
      tags={["PLA", "入門", "フィラメント"]}
      toc={toc}
      related={related}
    >
      {/* Intro */}
      <div style={S.card}>
        <p style={S.p}>
          <strong style={{ color: "#f1f5f9" }}>PLA（ポリ乳酸）</strong>は家庭用3Dプリンターで最も広く使われているフィラメントです。
          植物由来の素材で扱いやすく、初心者でも失敗しにくいのが最大の特長です。
        </p>
        <p style={{ ...S.p, marginBottom: 0 }}>
          この記事ではPLAの特徴・印刷設定・PLA+との違いを詳しく解説します。
        </p>
      </div>

      {/* What is PLA */}
      <section id="what-is-pla" style={S.section}>
        <h2 style={S.h2}>PLAフィラメントとは</h2>
        <div style={S.card}>
          <p style={S.p}>
            PLAはトウモロコシや砂糖きびなど<strong style={{ color: "#f1f5f9" }}>植物由来の生分解性プラスチック</strong>です。
            石油由来のプラスチックに比べて環境負荷が低く、印刷時の臭いも少ないため室内で使いやすい素材です。
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            融点が約180〜200℃と低く、ヒートベッドなしでも印刷できるため、
            エントリー機種でも問題なく扱えます。
          </p>
        </div>
      </section>

      {/* Pros / Cons */}
      <section id="pros-cons" style={S.section}>
        <h2 style={S.h2}>メリット・デメリット</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ backgroundColor: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "0.75rem", padding: "1.25rem" }}>
            <p style={{ color: "#10b981", fontWeight: "700", fontSize: "0.85rem", marginBottom: "0.75rem" }}>✓ メリット</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {["扱いやすく初心者向け", "反りにくい（ヒートベッド不要）", "印刷時の臭いが少ない", "色のバリエーションが豊富", "安価で手に入りやすい"].map((t, i) => (
                <li key={i} style={{ color: "#cbd5e1", fontSize: "0.8rem" }}>• {t}</li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "0.75rem", padding: "1.25rem" }}>
            <p style={{ color: "#ef4444", fontWeight: "700", fontSize: "0.85rem", marginBottom: "0.75rem" }}>✗ デメリット</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {["耐熱性が低い（60℃前後で変形）", "紫外線に弱い（屋外使用には不向き）", "吸湿しやすい（保管に注意）", "やや脆く衝撃に弱い"].map((t, i) => (
                <li key={i} style={{ color: "#cbd5e1", fontSize: "0.8rem" }}>• {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Print settings */}
      <section id="print-settings" style={S.section}>
        <h2 style={S.h2}>推奨印刷設定</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {[
            { label: "ノズル温度", val: "190〜220℃（ブランドにより調整）" },
            { label: "ベッド温度", val: "0〜60℃（なしでも印刷可）" },
            { label: "印刷速度", val: "40〜80mm/s（品質重視なら遅めに）" },
            { label: "フィラメント径", val: "1.75mm（標準）" },
            { label: "保管方法", val: "乾燥剤と密封袋で湿気から守る" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: "1rem",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.5rem",
                padding: "0.75rem 1.25rem",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#06b6d4", fontWeight: "700", fontSize: "0.8rem", flexShrink: 0, minWidth: "100px" }}>{item.label}</span>
              <span style={S.muted}>{item.val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PLA vs PLA+ */}
      <section id="pla-plus" style={S.section}>
        <h2 style={S.h2}>PLA vs PLA+：どちらを選ぶ？</h2>
        <div style={S.card}>
          <p style={S.p}>
            <strong style={{ color: "#f1f5f9" }}>PLA+</strong>は通常のPLAに改良を加えたバージョンです。
            靭性（粘り強さ）が高く、曲げや衝撃に対して折れにくくなっています。
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            価格差が数百円以内であれば<strong style={{ color: "#f1f5f9" }}>PLA+を選ぶのがおすすめ</strong>です。
            印刷設定はほぼ同じなので、初心者でも気軽に使えます。
          </p>
        </div>
      </section>

      {/* Recommend */}
      <section id="recommend" style={S.section}>
        <h2 style={S.h2}>おすすめフィラメント</h2>
        <div style={{ backgroundColor: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "0.75rem", padding: "1.5rem" }}>
          <p style={S.p}>
            詳しいランキングと各ブランドのレビューは以下の記事をご覧ください。
          </p>
          <a
            href="/filaments/recommend"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#06b6d4",
              color: "#0f172a",
              fontWeight: "700",
              fontSize: "0.875rem",
              padding: "0.625rem 1.25rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
            }}
          >
            → PLAフィラメントおすすめ8選を見る
          </a>
        </div>
      </section>

      <p style={S.disclaimer}>
        当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce・メルカリアンバサダーに参加しています。価格は記事執筆時点のものです。
      </p>
    </ArticleLayout>
  );
}
