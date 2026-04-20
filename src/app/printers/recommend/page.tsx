import type { Metadata } from "next";
import RankingItem from "@/components/RankingItem";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "家庭用3Dプリンターおすすめ7選【2026年版】初心者でも失敗しない選び方",
  description:
    "家庭用に最適な3Dプリンターを徹底比較。価格・精度・使いやすさを総合評価したランキング形式で解説。初心者が失敗しない選び方のポイントも詳しく紹介します。",
};

const printers = [
  {
    rank: 1,
    name: "Bambu Lab A1 Mini",
    image: "https://m.media-amazon.com/images/I/71X5s5izhsL._AC_SL1500_.jpg",
    asin: "B0CRYJBKQQ",
    description:
      "2026年最もおすすめの家庭用3Dプリンター。自動キャリブレーション・自動レベリング搭載で、箱から出してすぐ高品質な印刷が可能。静音設計で子供部屋や寝室にも設置しやすい。",
    price: "約45,000円",
    pros: ["設置・設定が超簡単", "自動キャリブレーション搭載", "静音（約45dB）", "コンパクトで場所を取らない"],
    cons: ["消耗品はBambu純正が推奨", "ビルドサイズがやや小さめ（180×180×180mm）"],
    badge: "初心者に最強",
  },
  {
    rank: 2,
    name: "Bambu Lab A1",
    asin: "B0D17V4SKM",
    description:
      "A1 Miniの上位版。ビルドサイズが256×256×256mmと広く、大きなパーツも一発印刷できる。AMS Liteを追加すれば多色印刷にも対応。家庭用としてコスパ最高クラス。",
    price: "約65,000円",
    pros: ["広いビルドサイズ（256×256×256mm）", "多色印刷対応（AMS Lite付属モデルあり）", "高速印刷（最大500mm/s）", "自動キャリブレーション"],
    cons: ["A1 Miniより価格が高い", "本体サイズが大きめ"],
    badge: "コスパ最高",
  },
  {
    rank: 3,
    name: "Creality Ender-3 V3 SE",
    asin: "B0CBWHJSQ9",
    description:
      "2万円台で買える入門機の定番。自動レベリング・CR Touch搭載で初心者でも扱いやすい。世界中に使用者がいるため、トラブル時の情報が豊富。コスパを最重視する方に。",
    price: "約25,000円",
    pros: ["2万円台の低価格", "自動レベリング搭載", "情報・コミュニティが豊富", "カスタマイズ性が高い"],
    cons: ["Bambu Labより設定に慣れが必要", "印刷速度はやや遅め", "騒音がやや大きい"],
    badge: "コスト重視",
  },
  {
    rank: 4,
    name: "Bambu Lab P1S",
    asin: "B0CHDM8VVZ",
    description:
      "全密閉チャンバー搭載のミドルレンジ機。ABSやナイロンなど高温フィラメントを安定して印刷できる。本格的な作品を作りたい中級者にも対応。",
    price: "約120,000円",
    pros: ["密閉チャンバーでABS・ナイロンも安定印刷", "AMS対応で最大16色", "高速・高精度", "静音設計"],
    cons: ["価格が高め", "家庭用にはオーバースペックな場合も"],
    badge: "本格派向け",
  },
  {
    rank: 5,
    name: "AnkerMake M5C",
    description:
      "Ankerブランドの3Dプリンター。スマホアプリから操作でき、初心者でも直感的に使える。最大500mm/sの高速印刷に対応し、素早く完成品を手にできる。",
    price: "約50,000円",
    pros: ["スマホアプリで簡単操作", "高速印刷（最大500mm/s）", "Ankerの国内サポートが安心", "自動レベリング搭載"],
    cons: ["純正スライサーソフトへの依存が高い", "フィラメント選択肢が限られる"],
  },
  {
    rank: 6,
    name: "Creality K1C",
    description:
      "Creality最速クラスの家庭用機。最大600mm/sの印刷速度と全密閉チャンバーを備え、カーボンファイバー入りフィラメントにも対応。速さと素材の幅広さが魅力。",
    price: "約70,000円",
    pros: ["最大600mm/sの高速印刷", "カーボンファイバー対応", "密閉チャンバーでABSも安定", "AIカメラ標準搭載"],
    cons: ["設定がやや複雑", "価格がやや高め"],
  },
  {
    rank: 7,
    name: "Prusa MK4S",
    description:
      "チェコ発の老舗ブランド・Prusaの定番機種。品質・耐久性・サポートに定評があり、長期間安定して使いたい方に最適。",
    price: "約120,000円（完成品）",
    pros: ["品質・信頼性が業界トップクラス", "自動キャリブレーション", "サポートと資料が充実", "オープンソースで改造自由"],
    cons: ["価格が高め", "日本語サポートは限定的"],
  },
];

const toc = [
  { id: "how-to-choose", label: "家庭用3Dプリンターの選び方" },
  { id: "ranking", label: "おすすめランキング7選" },
  { id: "rank-1", label: "1位：Bambu Lab A1 Mini" },
  { id: "rank-2", label: "2位：Bambu Lab A1" },
  { id: "rank-3", label: "3位：Creality Ender-3 V3 SE" },
  { id: "summary", label: "まとめ" },
];

const related = [
  { href: "/filaments/recommend", title: "フィラメントおすすめランキング【素材別】", badge: "ランキング" },
  { href: "/filaments/pla", title: "PLAフィラメントおすすめ8選", badge: "PLA", badgeColor: "#06b6d4" },
  { href: "/howto/beginners", title: "3Dプリンター初心者ガイド", badge: "入門", badgeColor: "#10b981" },
];

export default function PrintersRecommendPage() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "プリンター", href: "/printers" },
        { label: "おすすめ7選" },
      ]}
      title="家庭用3Dプリンターおすすめ7選【2026年版】初心者でも失敗しない選び方"
      updatedAt="2026年4月"
      tags={["初心者", "比較", "ランキング", "家庭用"]}
      toc={toc}
      related={related}
    >
      {/* Intro */}
      <div style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <p style={{ color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" }}>
          家庭用3Dプリンターはここ数年で急速に使いやすくなりました。今は自動キャリブレーションや自動レベリングが標準搭載され、
          <strong style={{ color: "#f1f5f9" }}>初心者でも箱を開けてすぐ印刷できる</strong>機種が増えています。
        </p>
        <p style={{ color: "#cbd5e1", lineHeight: "1.85", margin: 0 }}>
          この記事では家庭用途に絞って<strong style={{ color: "#f1f5f9" }}>価格・使いやすさ・印刷品質・静音性</strong>の4軸で7機種を比較しました。
        </p>
      </div>

      {/* How to choose */}
      <section id="how-to-choose" style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.25rem" }}>
          家庭用3Dプリンターの選び方 — 3つのポイント
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              title: "① 自動レベリング搭載かどうか",
              desc: "初心者が最も躓くのがベッドのレベリング調整。自動レベリング搭載機種を選ぶだけで失敗率が大幅に下がります。",
            },
            {
              title: "② 予算は「本体＋フィラメント代」で考える",
              desc: "本体が安くても消耗品（フィラメント）が割高な機種もあります。ランニングコストも含めて比較しましょう。",
            },
            {
              title: "③ 静音性は設置場所で変わる",
              desc: "リビングや子供部屋に置くなら45〜50dB以下の機種を選ぶのがおすすめです。",
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
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.7", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1.5rem" }}>
          おすすめランキング
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {printers.map((printer) => (
            <RankingItem key={printer.rank} {...printer} />
          ))}
        </div>
      </section>

      {/* Summary */}
      <section id="summary" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", borderLeft: "4px solid #06b6d4", paddingLeft: "0.75rem", marginBottom: "1rem" }}>
          まとめ：迷ったらBambu Lab A1 Mini
        </h2>
        <div style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "0.75rem", padding: "1.5rem" }}>
          <p style={{ color: "#cbd5e1", lineHeight: "1.85", marginBottom: "0.875rem" }}>
            初心者に最もおすすめなのは<strong style={{ color: "#f1f5f9" }}>Bambu Lab A1 Mini</strong>です。予算を抑えたい場合は<strong style={{ color: "#f1f5f9" }}>Creality Ender-3 V3 SE</strong>、
            大きなものを作りたい場合は<strong style={{ color: "#f1f5f9" }}>Bambu Lab A1</strong>を選ぶと満足度が高いです。
          </p>
          <p style={{ color: "#cbd5e1", lineHeight: "1.85", margin: 0 }}>
            フィラメントの選び方については「
            <a href="/filaments/recommend" style={{ color: "#06b6d4", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              PLAフィラメントおすすめ8選
            </a>
            」もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* Affiliate disclaimer */}
      <p style={{ color: "#475569", fontSize: "0.75rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", lineHeight: "1.6" }}>
        当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce・メルカリアンバサダーに参加しています。記事内のリンクから商品を購入すると、売上の一部が当サイトに還元される場合があります。価格は記事執筆時点のものです。
      </p>
    </ArticleLayout>
  );
}
