import type { Metadata } from "next";
import RankingItem from "@/components/RankingItem";

export const metadata: Metadata = {
  title: "家庭用3Dプリンターおすすめ7選【2026年版】初心者でも失敗しない選び方",
  description:
    "家庭用に最適な3Dプリンターを徹底比較。価格・精度・使いやすさを総合評価したランキング形式で解説。初心者が失敗しない選び方のポイントも詳しく紹介します。",
};

const printers = [
  {
    rank: 1,
    name: "Bambu Lab A1 Mini",
    description:
      "2026年最もおすすめの家庭用3Dプリンター。自動キャリブレーション・自動レベリング搭載で、箱から出してすぐ高品質な印刷が可能。静音設計で子供部屋や寝室にも設置しやすい。",
    price: "約45,000円",
    amazonUrl: "https://www.amazon.co.jp/s?k=Bambu+Lab+A1+Mini&tag=YOUR_TAG",
    pros: ["設置・設定が超簡単", "自動キャリブレーション搭載", "静音（約45dB）", "コンパクトで場所を取らない"],
    cons: ["消耗品はBambu純正が推奨", "ビルドサイズがやや小さめ（180×180×180mm）"],
    badge: "初心者に最強",
  },
  {
    rank: 2,
    name: "Bambu Lab A1",
    description:
      "A1 Miniの上位版。ビルドサイズが256×256×256mmと広く、大きなパーツも一発印刷できる。AMS Liteを追加すれば多色印刷にも対応。家庭用としてコスパ最高クラス。",
    price: "約65,000円",
    amazonUrl: "https://www.amazon.co.jp/s?k=Bambu+Lab+A1&tag=YOUR_TAG",
    pros: ["広いビルドサイズ（256×256×256mm）", "多色印刷対応（AMS Lite付属モデルあり）", "高速印刷（最大500mm/s）", "自動キャリブレーション"],
    cons: ["A1 Miniより価格が高い", "本体サイズが大きめ"],
    badge: "コスパ最高",
  },
  {
    rank: 3,
    name: "Creality Ender-3 V3 SE",
    description:
      "2万円台で買える入門機の定番。自動レベリング・CR Touch搭載で初心者でも扱いやすい。世界中に使用者がいるため、トラブル時の情報が豊富。コスパを最重視する方に。",
    price: "約25,000円",
    amazonUrl: "https://www.amazon.co.jp/s?k=Ender-3+V3+SE&tag=YOUR_TAG",
    pros: ["2万円台の低価格", "自動レベリング搭載", "情報・コミュニティが豊富", "カスタマイズ性が高い"],
    cons: ["Bambu Labより設定に慣れが必要", "印刷速度はやや遅め", "騒音がやや大きい"],
    badge: "コスト重視",
  },
  {
    rank: 4,
    name: "Bambu Lab P1S",
    description:
      "全密閉チャンバー搭載のミドルレンジ機。ABSやナイロンなど高温フィラメントを安定して印刷できる。本格的な作品を作りたい中級者にも対応。",
    price: "約120,000円",
    amazonUrl: "https://www.amazon.co.jp/s?k=Bambu+Lab+P1S&tag=YOUR_TAG",
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
    amazonUrl: "https://www.amazon.co.jp/s?k=AnkerMake+M5C&tag=YOUR_TAG",
    pros: ["スマホアプリで簡単操作", "高速印刷（最大500mm/s）", "Ankerの国内サポートが安心", "自動レベリング搭載"],
    cons: ["純正スライサーソフトへの依存が高い", "フィラメント選択肢が限られる"],
  },
  {
    rank: 6,
    name: "Creality K1C",
    description:
      "Creality最速クラスの家庭用機。最大600mm/sの印刷速度と全密閉チャンバーを備え、カーボンファイバー入りフィラメントにも対応。速さと素材の幅広さが魅力。",
    price: "約70,000円",
    amazonUrl: "https://www.amazon.co.jp/s?k=Creality+K1C&tag=YOUR_TAG",
    pros: ["最大600mm/sの高速印刷", "カーボンファイバー対応", "密閉チャンバーでABSも安定", "AIカメラ標準搭載"],
    cons: ["設定がやや複雑", "価格がやや高め"],
  },
  {
    rank: 7,
    name: "Prusa MK4S",
    description:
      "チェコ発の老舗ブランド・Prusaの定番機種。品質・耐久性・サポートに定評があり、長期間安定して使いたい方に最適。",
    price: "約120,000円（完成品）",
    amazonUrl: "https://www.amazon.co.jp/s?k=Prusa+MK4&tag=YOUR_TAG",
    pros: ["品質・信頼性が業界トップクラス", "自動キャリブレーション", "サポートと資料が充実", "オープンソースで改造自由"],
    cons: ["価格が高め", "日本語サポートは限定的"],
  },
];

export default function PrintersRecommendPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <a href="/" className="hover:text-orange-500">ホーム</a>
        <span>/</span>
        <span className="text-gray-600">おすすめ7選</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3">
        家庭用3Dプリンターおすすめ7選【2026年版】<br className="hidden md:block" />
        初心者でも失敗しない選び方
      </h1>
      <p className="text-xs text-gray-400 mb-8">更新日: 2026年4月</p>

      <div className="prose mb-10">
        <p>
          家庭用3Dプリンターはここ数年で急速に使いやすくなりました。今は自動キャリブレーションや自動レベリングが標準搭載され、
          <strong>初心者でも箱を開けてすぐ印刷できる</strong>機種が増えています。
        </p>
        <p>
          この記事では家庭用途に絞って<strong>価格・使いやすさ・印刷品質・静音性</strong>の4軸で7機種を比較しました。
        </p>
      </div>

      <section className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-10">
        <h2 className="font-bold text-gray-900 mb-3 text-base">家庭用3Dプリンターの選び方 — 3つのポイント</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><span className="font-bold text-orange-600">① 自動レベリング搭載かどうか</span><br />初心者が最も躓くのがベッドのレベリング調整。自動レベリング搭載機種を選ぶだけで失敗率が大幅に下がります。</li>
          <li><span className="font-bold text-orange-600">② 予算は「本体＋フィラメント代」で考える</span><br />本体が安くても消耗品（フィラメント）が割高な機種もあります。ランニングコストも含めて比較しましょう。</li>
          <li><span className="font-bold text-orange-600">③ 静音性は設置場所で変わる</span><br />リビングや子供部屋に置くなら45〜50dB以下の機種を選ぶのがおすすめです。</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded block"></span>
          おすすめランキング
        </h2>
        <div className="space-y-5">
          {printers.map((printer) => (
            <RankingItem key={printer.rank} {...printer} />
          ))}
        </div>
      </section>

      <section className="prose mb-10">
        <h2>まとめ：迷ったらBambu Lab A1 Mini</h2>
        <p>
          初心者に最もおすすめなのは<strong>Bambu Lab A1 Mini</strong>です。予算を抑えたい場合は<strong>Creality Ender-3 V3 SE</strong>、
          大きなものを作りたい場合は<strong>Bambu Lab A1</strong>を選ぶと満足度が高いです。
        </p>
        <p>
          フィラメントの選び方については「<a href="/filaments/recommend" className="text-orange-500 hover:underline">PLAフィラメントおすすめ8選</a>」もあわせてご覧ください。
        </p>
      </section>

      <p className="text-xs text-gray-400 border-t border-gray-100 pt-6">
        当サイトはAmazonアソシエイト・プログラムに参加しています。記事内のリンクから商品を購入すると、売上の一部が当サイトに還元される場合があります。価格は記事執筆時点のものです。
      </p>
    </div>
  );
}
