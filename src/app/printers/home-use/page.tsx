import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "家庭用3Dプリンターの選び方【2026年版】リビング・子供部屋に置ける静音機種とは",
  description:
    "リビングや子供部屋に設置できる静音・コンパクトな家庭用3Dプリンターの選び方を解説。騒音・サイズ・使いやすさで比較したおすすめ機種も紹介します。",
};

const toc = [
  { id: "key-points", label: "家庭用に重要な3つのポイント" },
  { id: "noise", label: "静音性の目安" },
  { id: "size", label: "コンパクトモデル比較" },
  { id: "recommend", label: "おすすめ機種" },
];

const related = [
  { href: "/printers/recommend", title: "家庭用3Dプリンターおすすめ7選ランキング", badge: "ランキング" },
  { href: "/printers/beginners", title: "初心者向け3Dプリンターの選び方", badge: "初心者", badgeColor: "#10b981" },
  { href: "/howto/beginners", title: "3Dプリンター初心者ガイド", badge: "入門", badgeColor: "#06b6d4" },
];

const S = {
  card: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" } as React.CSSProperties,
  h2: { fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.25rem" } as React.CSSProperties,
  p: { color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" } as React.CSSProperties,
  muted: { color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7" } as React.CSSProperties,
  section: { marginBottom: "2.5rem" } as React.CSSProperties,
  disclaimer: { color: "#475569", fontSize: "0.75rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", lineHeight: "1.6" } as React.CSSProperties,
};

export default function PrintersHomeUse() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "プリンター", href: "/printers" },
        { label: "家庭用" },
      ]}
      title="家庭用3Dプリンターの選び方【2026年版】リビング・子供部屋に置ける静音機種とは"
      updatedAt="2026年4月"
      tags={["家庭用", "静音", "コンパクト", "比較"]}
      toc={toc}
      related={related}
    >
      {/* Intro */}
      <div style={S.card}>
        <p style={S.p}>
          リビングや子供部屋に3Dプリンターを置く場合、<strong style={{ color: "#f1f5f9" }}>静音性・コンパクトさ・使いやすさ</strong>が最も重要なポイントです。
        </p>
        <p style={{ ...S.p, marginBottom: 0 }}>
          最近の家庭向け機種は騒音対策が進んでおり、図書館並みの静かさで動作するモデルも登場しています。
        </p>
      </div>

      {/* Key points */}
      <section id="key-points" style={S.section}>
        <h2 style={S.h2}>家庭用に重要な3つのポイント</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              title: "① 騒音レベル（dB）で選ぶ",
              desc: "リビングに置くなら45dB以下が目安。就寝中も動かすなら40dB以下の機種が理想的です。",
            },
            {
              title: "② 設置面積とフットプリント",
              desc: "本体サイズに加え、フィラメントスプールや排熱スペースも考慮しましょう。奥行き40cm以内なら書棚の棚板でも設置可能です。",
            },
            {
              title: "③ 臭い・換気の問題",
              desc: "PLAは臭いが少ないですが、ABSは強い臭いが出ます。換気できる場所か、密閉チャンバー付き機種を選ぶと安心です。",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "rgba(6,182,212,0.06)",
                border: "1px solid rgba(6,182,212,0.2)",
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <p style={{ color: "#06b6d4", fontWeight: "700", fontSize: "0.9rem", marginBottom: "0.375rem" }}>{item.title}</p>
              <p style={{ ...S.muted, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Noise */}
      <section id="noise" style={S.section}>
        <h2 style={S.h2}>静音性の目安</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {[
            { db: "〜40dB", env: "図書館・深夜の住宅街レベル", color: "#10b981" },
            { db: "41〜50dB", env: "静かな事務所・会話ができるレベル", color: "#06b6d4" },
            { db: "51〜60dB", env: "通常の会話・エアコンの室内機レベル", color: "#f59e0b" },
            { db: "61dB〜", env: "掃除機・騒がしい事務所レベル（家庭には不向き）", color: "#ef4444" },
          ].map((item) => (
            <div
              key={item.db}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.5rem",
                padding: "0.75rem 1.25rem",
              }}
            >
              <span style={{ color: item.color, fontWeight: "700", fontSize: "0.9rem", flexShrink: 0, minWidth: "70px" }}>{item.db}</span>
              <span style={S.muted}>{item.env}</span>
            </div>
          ))}
        </div>
        <p style={{ ...S.muted, marginTop: "0.875rem" }}>
          Bambu Lab A1 Miniは約45dBで動作し、家庭用として非常に優れた静音性を持っています。
        </p>
      </section>

      {/* Size comparison */}
      <section id="size" style={S.section}>
        <h2 style={S.h2}>コンパクトモデル比較</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { name: "Bambu Lab A1 Mini", size: "347×315×365mm", noise: "約45dB", print: "180×180×180mm", note: "静音・コンパクトの最高バランス" },
            { name: "Creality Ender-3 V3 SE", size: "366×347×487mm", noise: "約50dB", print: "220×220×250mm", note: "コスパ重視でやや大きめ" },
            { name: "AnkerMake M5C", size: "375×360×480mm", noise: "約45dB", print: "220×220×250mm", note: "スマホ連携が便利" },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <p style={{ color: "#f1f5f9", fontWeight: "700", marginBottom: "0.5rem" }}>{item.name}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {[
                  { label: "本体サイズ", val: item.size },
                  { label: "騒音", val: item.noise },
                  { label: "印刷サイズ", val: item.print },
                ].map((d) => (
                  <div key={d.label}>
                    <span style={{ color: "#64748b", fontSize: "0.7rem" }}>{d.label}</span>
                    <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>{d.val}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: "#06b6d4", fontSize: "0.775rem", fontWeight: "600", marginTop: "0.5rem", marginBottom: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommend CTA */}
      <section id="recommend" style={S.section}>
        <h2 style={S.h2}>おすすめ機種</h2>
        <div style={{ backgroundColor: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "0.75rem", padding: "1.5rem" }}>
          <p style={S.p}>
            各機種の詳細レビュー・スペック比較・購入リンクは以下のランキング記事をご覧ください。
          </p>
          <a
            href="/printers/recommend"
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
            → 家庭用3Dプリンターおすすめ7選を見る
          </a>
        </div>
      </section>

      <p style={S.disclaimer}>
        当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce・メルカリアンバサダーに参加しています。価格は記事執筆時点のものです。
      </p>
    </ArticleLayout>
  );
}
