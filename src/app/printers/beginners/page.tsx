import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "初心者向け3Dプリンターの選び方【2026年版】失敗しない5つのチェックポイント",
  description:
    "3Dプリンター初心者が最初の1台を選ぶときに確認すべきポイントを解説。自動レベリング・価格・サポートなど重要な5項目でおすすめ機種を比較します。",
};

const toc = [
  { id: "checklist", label: "初心者が確認すべき5項目" },
  { id: "auto-level", label: "自動レベリングの重要性" },
  { id: "budget", label: "予算別おすすめ" },
  { id: "avoid", label: "初心者が避けるべき機種" },
  { id: "recommend", label: "最終おすすめ" },
];

const related = [
  { href: "/printers/recommend", title: "家庭用3Dプリンターおすすめ7選ランキング", badge: "ランキング" },
  { href: "/printers/home-use", title: "家庭用・静音モデルの選び方", badge: "家庭用", badgeColor: "#06b6d4" },
  { href: "/howto/beginners", title: "3Dプリンター初心者ガイド完全版", badge: "入門", badgeColor: "#10b981" },
];

const S = {
  card: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" } as React.CSSProperties,
  h2: { fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.25rem" } as React.CSSProperties,
  p: { color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" } as React.CSSProperties,
  muted: { color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7" } as React.CSSProperties,
  section: { marginBottom: "2.5rem" } as React.CSSProperties,
  disclaimer: { color: "#475569", fontSize: "0.75rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", lineHeight: "1.6" } as React.CSSProperties,
};

export default function PrintersBeginners() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "プリンター", href: "/printers" },
        { label: "初心者向け" },
      ]}
      title="初心者向け3Dプリンターの選び方【2026年版】失敗しない5つのチェックポイント"
      updatedAt="2026年4月"
      tags={["初心者", "選び方", "自動レベリング", "比較"]}
      toc={toc}
      related={related}
    >
      {/* Intro */}
      <div style={S.card}>
        <p style={S.p}>
          3Dプリンターは種類が多く、初心者が最初の1台を選ぶのは難しいと感じるかもしれません。
          でも<strong style={{ color: "#f1f5f9" }}>5つのポイント</strong>を押さえれば、失敗なく選べます。
        </p>
        <p style={{ ...S.p, marginBottom: 0 }}>
          この記事では初心者が特に重視すべき項目を整理し、予算別のおすすめも紹介します。
        </p>
      </div>

      {/* Checklist */}
      <section id="checklist" style={S.section}>
        <h2 style={S.h2}>初心者が確認すべき5項目</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { num: "01", title: "自動レベリング搭載か", desc: "ベッドの水平調整は初心者最大の難関。自動化されているかどうかが成功率を大きく左右します。" },
            { num: "02", title: "組み立て作業は少ないか", desc: "完成品に近い状態で届く機種ほど、最初の印刷までスムーズに進められます。" },
            { num: "03", title: "日本語サポートはあるか", desc: "困ったときに頼れる日本語のサポートや充実したコミュニティがある機種を選びましょう。" },
            { num: "04", title: "消耗品が入手しやすいか", desc: "ノズルやフィラメントなど消耗品がAmazon等で簡単に購入できる機種を選ぶと長続きします。" },
            { num: "05", title: "静音性・設置スペースは適切か", desc: "使用環境に合った騒音レベルとサイズかどうかを事前に確認しましょう。" },
          ].map((item) => (
            <div
              key={item.num}
              style={{
                display: "flex",
                gap: "1rem",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  color: "#06b6d4",
                  fontWeight: "800",
                  fontSize: "1.1rem",
                  fontVariantNumeric: "tabular-nums",
                  minWidth: "28px",
                }}
              >
                {item.num}
              </span>
              <div>
                <p style={{ color: "#f1f5f9", fontWeight: "700", fontSize: "0.9rem", marginBottom: "0.25rem" }}>{item.title}</p>
                <p style={{ ...S.muted, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Auto leveling */}
      <section id="auto-level" style={S.section}>
        <h2 style={S.h2}>自動レベリングの重要性</h2>
        <div style={S.card}>
          <p style={S.p}>
            3Dプリンターの「レベリング」とは、ノズルとベッドの距離を均一に保つ調整作業です。
            この調整が不十分だと印刷物がベッドに付かなかったり、1層目が潰れてしまったりします。
          </p>
          <p style={S.p}>
            <strong style={{ color: "#f1f5f9" }}>自動レベリング機能</strong>があれば、この作業をプリンターが自動で行います。
            初心者にとって最も大きなつまずきポイントがなくなるため、
            最初の1台には<strong style={{ color: "#06b6d4" }}>自動レベリング搭載機種を強くおすすめ</strong>します。
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            2026年現在、3万円以上の機種のほとんどに自動レベリングが搭載されています。
          </p>
        </div>
      </section>

      {/* Budget */}
      <section id="budget" style={S.section}>
        <h2 style={S.h2}>予算別おすすめ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {[
            {
              budget: "2〜3万円",
              name: "Creality Ender-3 V3 SE",
              note: "自動レベリング搭載の入門機定番。世界中に使用者がいてトラブル情報も豊富。",
              color: "#f59e0b",
            },
            {
              budget: "4〜5万円",
              name: "Bambu Lab A1 Mini",
              note: "初心者に最もおすすめ。自動キャリブレーション・静音・コンパクトを全部備えた最強コスパ機。",
              color: "#06b6d4",
            },
            {
              budget: "6〜8万円",
              name: "Bambu Lab A1",
              note: "A1 Miniより印刷サイズが広く、大きなパーツも一度で印刷可能。本格的に楽しみたい方に。",
              color: "#10b981",
            },
          ].map((item) => (
            <div
              key={item.budget}
              style={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.75rem",
                padding: "1.25rem",
                borderLeft: `3px solid ${item.color}`,
              }}
            >
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    backgroundColor: `${item.color}22`,
                    color: item.color,
                    border: `1px solid ${item.color}44`,
                    borderRadius: "9999px",
                    padding: "0.1rem 0.625rem",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  {item.budget}
                </span>
                <span style={{ color: "#f1f5f9", fontWeight: "700" }}>{item.name}</span>
              </div>
              <p style={{ ...S.muted, margin: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to avoid */}
      <section id="avoid" style={S.section}>
        <h2 style={S.h2}>初心者が避けるべき機種</h2>
        <div style={S.card}>
          <p style={S.p}>以下の特徴を持つ機種は、初心者には扱いが難しくなりがちです。</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "手動レベリングのみで自動機能がない機種",
              "購入後の組み立て工数が非常に多い機種（キット型）",
              "レジン（光造形）プリンター（後処理が複雑で初心者には不向き）",
              "安すぎるノーブランド機（品質が不安定・サポートなし）",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.625rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#ef4444", flexShrink: 0 }}>✗</span>
                <span style={S.muted}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final recommend */}
      <section id="recommend" style={S.section}>
        <h2 style={S.h2}>最終おすすめ</h2>
        <div style={{ backgroundColor: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "0.75rem", padding: "1.5rem" }}>
          <p style={S.p}>
            詳細なスペック比較・購入リンク・価格情報は以下のランキング記事でご確認ください。
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
