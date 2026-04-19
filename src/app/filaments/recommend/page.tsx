import type { Metadata } from "next";
import RankingItem from "@/components/RankingItem";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "PLAフィラメントおすすめ8選【2026年版】初心者でも使いやすい定番素材を比較",
  description: "3Dプリンター初心者に最もおすすめのPLAフィラメントを徹底比較。コスパ・品質・色の豊富さで選ぶべきブランドをランキング形式で紹介します。",
};

const rankings = [
  {
    rank: 1,
    name: "Bambu Lab PLA Basic",
    asin: "B0CGR29R63",
    description: "Bambu Lab純正のPLAフィラメント。AMS自動認識対応で品質が非常に安定。初めてのフィラメントとして最適。",
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
    description: "世界中で愛用される定番フィラメント。通常PLAより靭性が高く折れにくい。コスパ最高クラス。",
    price: "約2,200円（1kg）",
    amazonUrl: "https://www.amazon.co.jp/dp/B07RQKH35B?tag=22020-22",
    pros: ["コスパ最高クラス", "通常PLAより丈夫", "色のラインナップが豊富", "どのプリンターでも使いやすい"],
    cons: ["印刷温度の微調整が必要な場合も"],
    badge: "コスパ最強",
  },
  {
    rank: 3,
    name: "OVERTURE PLA",
    description: "Amazon.co.jpで人気の高コスパブランド。均一な太さで詰まりにくく初心者でも安心。",
    price: "約1,900円（1kg）",
    amazonUrl: "https://www.amazon.co.jp/s?k=OVERTURE+PLA+フィラメント&tag=22020-22",
    pros: ["価格が安い", "詰まりにくい", "環境配慮スプール", "Amazonで入手しやすい"],
    cons: ["色のバリエーションがやや少ない"],
    badge: "コスト重視",
  },
];

const allFilamentIds = [
  "bambu-pla-basic",
  "esun-pla-plus",
  "overture-pla",
  "polymaker-polylite-pla",
  "sunlu-pla-plus",
  "creality-hyper-pla",
];

export default function FilamentsRecommendPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <a href="/" className="hover:text-orange-500">ホーム</a>
        <span>/</span>
        <a href="/filaments" className="hover:text-orange-500">フィラメント</a>
        <span>/</span>
        <span className="text-gray-600">PLAおすすめ8選</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3">
        PLAフィラメントおすすめ8選【2026年版】<br className="hidden md:block" />初心者でも使いやすい定番素材を比較
      </h1>
      <p className="text-xs text-gray-400 mb-8">更新日: 2026年4月</p>
      <div className="prose mb-10">
        <p>3Dプリンターで最もよく使われる素材が<strong>PLA（ポリ乳酸）</strong>です。扱いやすく反りにくいため<strong>初心者に最適なフィラメント</strong>です。</p>
        <p>この記事では<strong>コスパ・品質・使いやすさ・色の豊富さ</strong>の4軸で8ブランドを比較しました。</p>
      </div>
      <section className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-10">
        <h2 className="font-bold text-gray-900 mb-3 text-base">PLAフィラメントの選び方</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><span className="font-bold text-orange-600">① 径は1.75mmが標準</span><br />ほとんどの家庭用プリンターは1.75mm径対応。購入前に確認しましょう。</li>
          <li><span className="font-bold text-orange-600">② PLA vs PLA+</span><br />PLA+は通常PLAより靭性が高く折れにくい。価格差がわずかならPLA+がおすすめ。</li>
          <li><span className="font-bold text-orange-600">③ 印刷温度は190〜220℃が目安</span><br />使用するプリンターに合わせて±5℃で微調整するのがコツ。</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded block"></span>トップ3 詳細ランキング
        </h2>
        <div className="space-y-5">
          {rankings.map((item) => (<RankingItem key={item.rank} {...item} />))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded block"></span>おすすめ6選 まとめ
        </h2>
        <p className="text-sm text-gray-600 mb-4">各商品はAmazon・楽天・Yahoo!・メルカリで価格を比較できます。</p>
        {allFilamentIds.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
      </section>
      <section className="prose mb-10">
        <h2>まとめ：初心者はeSUN PLA+かBambu Lab純正から始めよう</h2>
        <p>Bambu Lab製プリンターなら<strong>Bambu Lab PLA Basic</strong>、他のプリンターには<strong>eSUN PLA+</strong>がコスパ・品質ともに最高です。</p>
        <p>プリンター選びは「<a href="/printers/recommend" className="text-orange-500 hover:underline">家庭用3Dプリンターおすすめ7選</a>」もあわせてご覧ください。</p>
      </section>
      <p className="text-xs text-gray-400 border-t border-gray-100 pt-6">当サイトはAmazonアソシエイト・プログラムに参加しています。記事内のリンクから商品を購入すると、売上の一部が当サイトに還元される場合があります。</p>
    </div>
  );
}
