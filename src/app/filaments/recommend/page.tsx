import type { Metadata } from "next";
import RankingItem from "@/components/RankingItem";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "PLAフィラメントおすすめ8選【2026年版】初心者でも使いやすい定番素材を比較",
  description:
    "3Dプリンター初心者に最もおすすめのPLAフィラメントを徹底比較。コスパ・品質・色の豊富さで選ぶべきブランドをランキング形式で紹介します。",
};

const rankings = [
  {
    rank: 1,
    name: "Bambu Lab PLA Basic",
    asin: "B0CGR29R63",
    description:
      "Bambu Lab純正のPLAフィラメント。AMS自動認識対応で品質が非常に安定。初めてのフィラメントとして最適。",
    price: "約2,800円（1kg）",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CGR29R63?tag=22020-22",
    pros: ["AMS自動認識対応", "品質が非常に安定", "豊富なカラーバリエーション", "反りにくい"],
    cons: ["他社より価格がやや高め"],
    badge: "Bambuユーザー必携",
  },
  {
    rank: 2,
    name: "eSUN PLA+",
    asin: "B07RQKH35B",
    description:
      "世界中で愛用される定番フィラメント。通常PLAより靭性が高く折れにくい。コスパ最高クラス。",
    price: "約2,200円（1kg）",
    amazonUrl: "https://www.amazon.co.jp/dp/B07RQKH35B?tag=22020-22",
    pros: ["コスパ最高クラス", "通常PLAより丈夫", "色のラインナップが豊富", "どのプリンターでも使いやすい"],
    cons: ["印刷温度の微調整が必要な場合も"],
    badge: "コスパ最強",
  },
  {
    rank: 3,
    name: "OVERTURE PLA",
    description:
      "Amazon.co.jpで人気の高コスパブランド。均一な太さで詰まりにくく初心者でも安心。",
    price: "約1,900円（1kg）",
    amazonUrl: "https://www.amazon.co.jp/s?k=OVERTURE+PLA+フィラメント&tag=22020-22",
    pros: ["価格が安い", "詰まりにくい", "環境配慮スプール", "Amazonで入手しやすい"],
    cons: ["色のバリエーションがやや少ない"],
    badge: "コスト重視",
  },
];

const toc = [
  { id: "how-to-choose", label: "PLAフィラメントの選び方" },
  { id: "ranking", label: "おすすめランキング トップ3" },
  { id: "rank-1", label: "1位：Bambu Lab PLA Basic" },
  { id: "rank-2", label: "2位：eSUN PLA+" },
  { id: "rank-3", label: "3位：OVERTURE PLA" },
  { id: "summary", label: "まとめ" },
];

const related = [
  { href: "/filaments/petg", title: "PETGフィラメントおすすめ解説", badge: "PETG", badgeColor: "#8b5cf6" },
  { href: "/printers/recommend", title: "家庭用3Dプリンターおすすめ7選", badge: "ランキング" },
  { href: "/howto/beginners", title: "3Dプリンター初心者ガイド", badge: "入門", badgeColor: "#10b981" },
];

const S = {
  card: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" } as React.CSSProperties,
  h2: { fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.25rem" } as React.CSSProperties,
  p: { color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" } as React.CSSProperties,
  cyan: { color: "#06b6d4", fontWeight: "700" } as React.CSSProperties,
  muted: { color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7" } as React.CSSProperties,
  section: { marginBottom: "2.5rem" } as React.CSSProperties,
  disclaimer: { color: "#475569", fontSize: "0.75rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", lineHeight: "1.6" } as React.CSSProperties,
};

export default function FilamentsRecommendPage() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "フィラメント", href: "/filaments" },
        { label: "PLAおすすめ8選" },
      ]}
      title="PLAフィラメントおすすめ8選【2026年版】初心者でも使いやすい定番素材を比較"
      updatedAt="2026年4月"
      tags={["PLA", "初心者", "比較", "ランキング"]}
      toc={toc}
      related={related}
    >
      {/* Intro */}
      <div style={S.card}>
        <p style={S.p}>
          3Dプリンターで最もよく使われる素材が<strong style={{ color: "#f1f5f9" }}>PLA（ポリ乳酸）</strong>です。
          扱いやすく反りにくいため<strong style={{ color: "#f1f5f9" }}>初心者に最適なフィラメント</strong>です。
        </p>
        <p style={{ ...S.p, marginBottom: 0 }}>
          この記事では<strong style={{ color: "#f1f5f9" }}>コスパ・品質・使いやすさ・色の豊富さ</strong>の4軸で人気ブランドを比較しました。
        </p>
      </div>

      {/* How to choose */}
      <section id="how-to-choose" style={S.section}>
        <h2 style={S.h2}>PLAフィラメントの選び方</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { title: "① 径は1.75mmが標準", desc: "ほとんどの家庭用プリンターは1.75mm径対応。購入前に確認しましょう。" },
            { title: "② PLA vs PLA+", desc: "PLA+は通常PLAより靭性が高く折れにくい。価格差がわずかならPLA+がおすすめ。" },
            { title: "③ 印刷温度は190〜220℃が目安", desc: "使用するプリンターに合わせて±5℃で微調整するのがコツ。" },
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
              <p style={{ ...S.cyan, marginBottom: "0.375rem" }}>{item.title}</p>
              <p style={{ ...S.muted, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" style={S.section}>
        <h2 style={S.h2}>トップ3 詳細ランキング</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {rankings.map((item) => (
            <RankingItem key={item.rank} {...item} />
          ))}
        </div>
      </section>

      {/* Summary */}
      <section id="summary" style={S.section}>
        <h2 style={S.h2}>まとめ：初心者はeSUN PLA+かBambu Lab純正から始めよう</h2>
        <div style={S.card}>
          <p style={S.p}>
            Bambu Lab製プリンターなら<strong style={{ color: "#f1f5f9" }}>Bambu Lab PLA Basic</strong>、
            他のプリンターには<strong style={{ color: "#f1f5f9" }}>eSUN PLA+</strong>がコスパ・品質ともに最高です。
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            プリンター選びは「
            <a href="/printers/recommend" style={{ color: "#06b6d4", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              家庭用3Dプリンターおすすめ7選
            </a>
            」もあわせてご覧ください。
          </p>
        </div>
      </section>

      <p style={S.disclaimer}>
        当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce・メルカリアンバサダーに参加しています。記事内のリンクから商品を購入すると、売上の一部が当サイトに還元される場合があります。価格は記事執筆時点のものです。
      </p>
    </ArticleLayout>
  );
}
