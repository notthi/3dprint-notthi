import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "3Dプリンター トラブル解決ガイド【2026年版】よくある失敗と対策を徹底解説",
  description:
    "3Dプリンターのよくあるトラブル（貼り付かない・詰まり・反り・糸引き・層剥離）の原因と解決策を網羅的にまとめました。初心者から中級者まで役立つ対処法ガイドです。",
};

const toc = [
  { id: "no-stick", label: "ベッドに貼り付かない" },
  { id: "clog", label: "フィラメントが詰まる" },
  { id: "warping", label: "反り（ワーピング）" },
  { id: "stringing", label: "糸引き（ストリング）" },
  { id: "delamination", label: "層剥離・積層割れ" },
  { id: "under-extrusion", label: "アンダーエクストルージョン" },
  { id: "checklist", label: "印刷前チェックリスト" },
];

const related = [
  { href: "/howto/beginners", title: "3Dプリンター初心者ガイド完全版", badge: "入門", badgeColor: "#10b981" },
  { href: "/printers/recommend", title: "家庭用3Dプリンターおすすめ7選", badge: "ランキング" },
  { href: "/filaments/pla", title: "PLAフィラメントの特徴・使い方", badge: "PLA", badgeColor: "#06b6d4" },
];

const S = {
  card: { backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" } as React.CSSProperties,
  h2: { fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.25rem" } as React.CSSProperties,
  p: { color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" } as React.CSSProperties,
  muted: { color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7" } as React.CSSProperties,
  section: { marginBottom: "2.5rem" } as React.CSSProperties,
  disclaimer: { color: "#475569", fontSize: "0.75rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", lineHeight: "1.6" } as React.CSSProperties,
};

type TroubleItem = {
  id: string;
  title: string;
  causes: string[];
  fixes: string[];
};

const troubles: TroubleItem[] = [
  {
    id: "no-stick",
    title: "ベッドに貼り付かない",
    causes: [
      "ノズルとベッドの距離が遠すぎる",
      "ベッド温度が低い",
      "ベッド表面が汚れている（手の脂など）",
      "印刷速度が速すぎる（1層目）",
    ],
    fixes: [
      "レベリングを再実施してノズルとベッドの距離を詰める",
      "ベッド温度を5℃上げる（PLAは50〜60℃推奨）",
      "IPA（無水エタノール）でベッド面を清掃する",
      "1層目の速度を通常の50%以下に設定する",
      "ブリム（縁取り）をスライサーで追加する",
    ],
  },
  {
    id: "clog",
    title: "フィラメントが詰まる（目詰まり）",
    causes: [
      "ノズル温度が低すぎる",
      "湿気を吸ったフィラメントを使用",
      "速度が速すぎてフィラメントが送り切れていない",
      "ノズルが長期間使用で摩耗・汚染",
    ],
    fixes: [
      "ノズル温度を5〜10℃上げる",
      "コールドプルでノズル内の異物を除去する",
      "フィラメントを乾燥させる（60〜70℃で6〜8時間）",
      "ノズルを交換する（500〜1,000時間が目安）",
    ],
  },
  {
    id: "warping",
    title: "反り（ワーピング）",
    causes: [
      "ベッド温度が低い",
      "印刷物の底面積が大きい",
      "フィラメントが湿気を含んでいる",
      "冷却ファンが強すぎる（最初の数層）",
    ],
    fixes: [
      "ヒートベッドを使用してベッドを温める",
      "スライサーでブリム（縁取り）を追加する",
      "ドラフトシールド（風よけ）を有効にする",
      "1〜3層目の冷却ファンを0〜50%に設定する",
      "ABSの場合は密閉チャンバー内で印刷する",
    ],
  },
  {
    id: "stringing",
    title: "糸引き（ストリング）",
    causes: [
      "ノズル温度が高すぎる",
      "リトラクション設定が不十分",
      "フィラメントが湿気を吸っている",
      "印刷速度が遅い（移動中に滲み出る）",
    ],
    fixes: [
      "ノズル温度を5℃下げる",
      "リトラクション距離を増やす（Bowden式：4〜6mm、Direct式：1〜2mm）",
      "リトラクション速度を上げる（40〜60mm/s）",
      "移動速度を上げる（150mm/s以上）",
      "「Combing」または「Avoid Crossing Perimeters」を有効にする",
    ],
  },
  {
    id: "delamination",
    title: "層剥離・積層割れ",
    causes: [
      "ノズル温度が低すぎる（層間接着不足）",
      "印刷速度が速すぎる",
      "冷却が強すぎる",
      "積層ピッチが大きすぎる",
    ],
    fixes: [
      "ノズル温度を5〜10℃上げる",
      "印刷速度を下げる",
      "冷却ファンを弱める（40〜60%程度）",
      "積層ピッチをノズル径の75%以下に設定する",
    ],
  },
  {
    id: "under-extrusion",
    title: "アンダーエクストルージョン（出材不足）",
    causes: [
      "エクストルーダーのグリップ不足",
      "フィラメントの巻き絡まり",
      "フローレートの設定ミス",
      "部分的なノズル詰まり",
    ],
    fixes: [
      "エクストルーダーの締め付け具合を確認・調整する",
      "スプールのフィラメントが絡んでいないか確認する",
      "フローレートを100〜105%に設定する",
      "ノズルを清掃または交換する",
    ],
  },
];

export default function HowtoTroublePage() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "使い方", href: "/howto" },
        { label: "トラブル解決" },
      ]}
      title="3Dプリンター トラブル解決ガイド【2026年版】よくある失敗と対策を徹底解説"
      updatedAt="2026年4月"
      tags={["トラブル", "失敗", "対策", "メンテナンス"]}
      toc={toc}
      related={related}
    >
      {/* Intro */}
      <div style={S.card}>
        <p style={S.p}>
          3Dプリンターのトラブルのほとんどは<strong style={{ color: "#f1f5f9" }}>原因と対策のパターンが決まって</strong>います。
          この記事では頻出するトラブル6種類の原因と解決策を網羅的にまとめました。
        </p>
        <p style={{ ...S.p, marginBottom: 0 }}>
          初心者ガイドは「
          <a href="/howto/beginners" style={{ color: "#06b6d4", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            3Dプリンター初心者ガイド完全版
          </a>
          」もあわせてご覧ください。
        </p>
      </div>

      {/* Trouble items */}
      {troubles.map((trouble) => (
        <section key={trouble.id} id={trouble.id} style={S.section}>
          <h2 style={S.h2}>{trouble.title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div
              style={{
                backgroundColor: "rgba(239,68,68,0.06)",
                border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <p style={{ color: "#ef4444", fontWeight: "700", fontSize: "0.8rem", marginBottom: "0.75rem" }}>主な原因</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                {trouble.causes.map((c, i) => (
                  <li key={i} style={{ color: "#cbd5e1", fontSize: "0.8rem", lineHeight: "1.5" }}>• {c}</li>
                ))}
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <p style={{ color: "#10b981", fontWeight: "700", fontSize: "0.8rem", marginBottom: "0.75rem" }}>解決策</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                {trouble.fixes.map((f, i) => (
                  <li key={i} style={{ color: "#cbd5e1", fontSize: "0.8rem", lineHeight: "1.5" }}>✓ {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Pre-print checklist */}
      <section id="checklist" style={S.section}>
        <h2 style={S.h2}>印刷前チェックリスト</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "ベッドのレベリングを最後に実施してから大きな変化はないか",
            "フィラメントが乾燥した状態か（しばらく使っていない場合は乾燥を）",
            "ノズルの詰まりや汚れがないか",
            "スライサーの設定（フィラメント種類・温度・速度）が正しいか",
            "ベッド表面が清潔か（IPA拭き取りを推奨）",
            "印刷中の振動で本体がずれないか（平らな場所に設置されているか）",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "center",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.5rem",
                padding: "0.75rem 1.25rem",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "18px",
                  height: "18px",
                  borderRadius: "3px",
                  border: "2px solid #06b6d4",
                  display: "inline-block",
                }}
              />
              <span style={S.muted}>{item}</span>
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
