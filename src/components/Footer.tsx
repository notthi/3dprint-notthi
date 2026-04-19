import Link from "next/link";
const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 mt-16">
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-gray-900 mb-3">3Dプリンター</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/printers/recommend" className="hover:text-orange-500">おすすめ一覧</Link></li>
            <li><Link href="/printers/beginners" className="hover:text-orange-500">初心者向け</Link></li>
            <li><Link href="/printers/home-use" className="hover:text-orange-500">家庭用</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3">フィラメント</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/filaments/recommend" className="hover:text-orange-500">おすすめ一覧</Link></li>
            <li><Link href="/filaments/pla" className="hover:text-orange-500">PLA</Link></li>
            <li><Link href="/filaments/petg" className="hover:text-orange-500">PETG</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3">使い方</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/howto/beginners" className="hover:text-orange-500">初心者ガイド</Link></li>
            <li><Link href="/howto/trouble" className="hover:text-orange-500">トラブル解決</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3">サイト情報</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-orange-500">このサイトについて</Link></li>
            <li><Link href="/privacy" className="hover:text-orange-500">プライバシーポリシー</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>© 2026 3Dプリントラボ. All rights reserved.</p>
        <p className="mt-1">当サイトはAmazonアソシエイト・プログラムに参加しています。</p>
      </div>
    </div>
  </footer>
);
export default Footer;
