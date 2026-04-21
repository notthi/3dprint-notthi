import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "PETGフィラメントとは？PLAとの違い・使い方を徹底解説【2026年版】",
  description:
    "PLAより耐久性・耐熱性が高いPETGフィラメントの特徴、印刷設定、PLA・ABSとの比較をわかりやすく解説します。実用パーツ作りに最適な素材です。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "3Dプリントラボ",
    url: "https://3dprint.notthi.com/filaments/petg",
    title: "PETGフィラメントとは？PLAとの違い・使い方を徹底解説【2026年版】",
    description: "PLAより耐久性・耐熱性が高いPETGフィラメントの特徴、印刷設定、PLA・ABSとの比較をわかりやすく解説します。実用パーツ作りに最適な素材です。",
  },
  twitter: {
    card: "summary_large_image",
    title: "PETGフィラメントとは？PLAとの違い・使い方を徹底解説【2026年版】",
    description: "PLAより耐久性・耐熱性が高いPETGフィラメントの特徴、印刷設定、PLA・ABSとの比較をわかりやすく解説します。実用パーツ作りに最適な素材です。",
  },
  alternates: {
    canonical: "https://3dprint.notthi.com/filaments/petg",
  },
};

const toc = [
  { id: "what-is-petg", label: "PETGフィラメントとは" },
  { id: "pros-cons", label: "メリット・デメリット" },
  { id: "vs-pla", label: "PLA・ABSとの比較" },
  { id: "print-settings", label: "推奨印刷設定" },
  { id: "use-cases", label: "PETGに向いた用途" },
];

const related = [
  { href: "/filaments/pla", title: "PLAフィラメントの特徴・使い方", badge: "PLA", badgeColor: "#06b6d4" },
  { href: "/filaments/recommend", title: "フィラメントおすすめランキング", badge: "ランキング" },
  { href: "/printers/recommend", title: "家庭用3Dプリンターおすすめ7選", badge: "プリンター" },
];

const S = {
  card: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" } as React.CSSProperties,
  h2: { fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.25rem" } as React.CSSProperties,
  p: { color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" } as React.CSSProperties,
  muted: { color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7" } as React.CSSProperties,
  section: { marginBottom: "2.5rem" } as React.CSSProperties,
  disclaimer: { color: "#475569", fontSize: "0.75rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", lineHeight: "1.6" } as React.CSSProperties,
};

export default function FilamentsPetgPage() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "フィラメント", href: "/filaments" },
        { label: "PETG" },
      ]}
      title="PETGフィラメントとは？PLAとの違い・使い方を徹底解説【2026年版】"
      updatedAt="2026年4月"
      tags={["PETG", "フィラメント", "実用パーツ"]}
      toc={toc}
      related={related}
    >
      {/* Intro */}
      <div style={S.card}>
        <p style={S.p}>
          <strong style={{ color: "#f1f5f9" }}>PETG（ポリエチレンテレフタレートグリコール）</strong>はPLAとABSの中間に位置するフィラメントです。
          PLAより<strong style={{ color: "#f1f5f9" }}>耐熱性・耐衝撃性が高く</strong>、ABSより扱いやすいため、
          実用的なパーツを作りたい方に人気の素材です。
        </p>
        <p style={{ ...S.p, marginBottom: 0 }}>
          PETGはペットボトルと同じ樹脂系統で、食品容器などにも使われる安全性の高い素材です。
        </p>
      </div>

      {/* What is PETG */}
      <section id="what-is-petg" style={S.section}>
        <h2 style={S.h2}>PETGフィラメントとは</h2>
        <div style={S.card}>
          <p style={S.p}>
            PETGはPET（ポリエチレンテレフタレート）にグリコールを添加した素材で、
            純粋なPETに比べて<strong style={{ color: "#f1f5f9" }}>透明度が高く加工しやすい</strong>特性があります。
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            ノズル温度230〜250℃、ベッド温度70〜85℃で印刷します。
            PLAより少し温度が高いため、対応したプリンターが必要です。
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
              {["PLAより耐熱性が高い（80℃前後）", "耐衝撃性が高く折れにくい", "透明度が高い色もある", "層間密着性が優れている", "ABSより反りにくい"].map((t, i) => (
                <li key={i} style={{ color: "#cbd5e1", fontSize: "0.8rem" }}>• {t}</li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "0.75rem", padding: "1.25rem" }}>
            <p style={{ color: "#ef4444", fontWeight: "700", fontSize: "0.85rem", marginBottom: "0.75rem" }}>✗ デメリット</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {["糸引き（ストリング）が出やすい", "PLAより印刷温度が高い", "ベッドへの貼り付きが強すぎることも", "吸湿しやすい（保管に注意）"].map((t, i) => (
                <li key={i} style={{ color: "#cbd5e1", fontSize: "0.8rem" }}>• {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PLA vs ABS comparison */}
      <section id="vs-pla" style={S.section}>
        <h2 style={S.h2}>PLA・ABSとの比較</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #334155" }}>
                {["項目", "PLA", "PETG", "ABS"].map((h) => (
                  <th key={h} style={{ color: "#06b6d4", fontWeight: "700", padding: "0.625rem 0.75rem", textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["扱いやすさ", "◎ 非常に簡単", "○ 普通", "△ 難しい"],
                ["耐熱性", "△ 60℃前後", "○ 80℃前後", "◎ 100℃前後"],
                ["耐衝撃性", "△ やや脆い", "○ 良好", "○ 良好"],
                ["反りにくさ", "◎ 反りにくい", "○ 普通", "△ 反りやすい"],
                ["臭い", "○ 少ない", "○ 少ない", "△ 強い"],
                ["価格（1kg）", "○ 1,500〜2,500円", "○ 2,000〜3,000円", "△ 2,000〜3,500円"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #1e293b", backgroundColor: i % 2 === 0 ? "#1e293b" : "transparent" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ color: j === 0 ? "#94a3b8" : "#cbd5e1", padding: "0.625rem 0.75rem" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Print settings */}
      <section id="print-settings" style={S.section}>
        <h2 style={S.h2}>推奨印刷設定</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {[
            { label: "ノズル温度", val: "230〜250℃（ブランドにより調整）" },
            { label: "ベッド温度", val: "70〜85℃（推奨）" },
            { label: "印刷速度", val: "30〜60mm/s（ゆっくりめが安定）" },
            { label: "リトラクション", val: "多めに設定して糸引きを防止" },
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

      {/* Use cases */}
      <section id="use-cases" style={S.section}>
        <h2 style={S.h2}>PETGに向いた用途</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[
            { title: "機械・実用パーツ", desc: "ブラケット・クリップなど衝撃に強いパーツ" },
            { title: "食品周りのアイテム", desc: "食器・容器など（フードセーフグレード確認を）" },
            { title: "屋外・高温環境", desc: "車内アクセサリー・屋外設置品" },
            { title: "透明・半透明パーツ", desc: "ランプカバー・光拡散パーツなど" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.75rem",
                padding: "1rem",
              }}
            >
              <p style={{ color: "#06b6d4", fontWeight: "700", fontSize: "0.8rem", marginBottom: "0.375rem" }}>{item.title}</p>
              <p style={{ ...S.muted, margin: 0, fontSize: "0.775rem" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <p style={S.disclaimer}>
        当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce・メルカリアンバサダーに参加しています。価格は記事執筆時点のものです。
      </p>
    </ArticleLayout>
  );
}
