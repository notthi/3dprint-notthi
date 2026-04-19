import ArticleCard from "@/components/ArticleCard";
const articles = [
  { title: "家庭用3Dプリンターおすすめ7選【2026年版】初心者でも失敗しない選び方", description: "家庭用に最適な3Dプリンターを徹底比較。価格・精度・使いやすさを総合評価したランキングです。", href: "/printers/recommend", category: "3Dプリンター", date: "2026年4月" },
  { title: "PLAフィラメントおすすめ8選｜初心者でも使いやすい定番素材を比較", description: "最もポピュラーなPLAフィラメントを徹底比較。コスパ・品質・色の豊富さで選ぶべきブランドを紹介。", href: "/filaments/recommend", category: "フィラメント", date: "2026年4月" },
  { title: "3Dプリンター初心者ガイド｜購入から初めての印刷まで完全解説", description: "3Dプリンターを初めて使う方向けに、機種選びから設定・スライサーの使い方まで丁寧に解説します。", href: "/howto/beginners", category: "使い方", date: "2026年4月" },
];
const cats = [
  { name: "🖨 3Dプリンター", desc: "おすすめ機種・比較", href: "/printers/recommend" },
  { name: "🧵 フィラメント", desc: "素材・ブランド比較", href: "/filaments/recommend" },
  { name: "📖 使い方", desc: "設定・トラブル解決", href: "/howto/beginners" },
];
export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <section className="text-center py-12 border-b border-gray-100 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          3Dプリンターの<span className="text-orange-500">「買う・使う」</span>で<br className="hidden md:block" />迷わないための専門サイト
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">初心者から上級者まで、3Dプリンターとフィラメントの選び方・使い方を徹底解説。</p>
      </section>
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cats.map((c) => (
            <a key={c.href} href={c.href} className="border border-gray-200 rounded-xl p-6 text-center hover:border-orange-300 hover:shadow-sm transition bg-white">
              <p className="text-xl font-bold text-gray-900">{c.name}</p>
              <p className="mt-1 text-sm text-gray-500">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-500 rounded block"></span>注目の記事
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((a) => <ArticleCard key={a.href} {...a} />)}
        </div>
      </section>
      <p className="mt-12 text-xs text-gray-400 text-center">当サイトはAmazonアソシエイト・プログラムに参加しています。</p>
    </div>
  );
}
