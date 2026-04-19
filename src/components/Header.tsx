import Link from "next/link";
const Header = () => (
  <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
    <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl text-gray-900 flex items-center gap-2">
        <span>🖨</span><span>3Dプリントラボ</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <Link href="/printers" className="hover:text-orange-500 transition">プリンター</Link>
        <Link href="/filaments" className="hover:text-orange-500 transition">フィラメント</Link>
        <Link href="/howto" className="hover:text-orange-500 transition">使い方</Link>
      </nav>
    </div>
  </header>
);
export default Header;
