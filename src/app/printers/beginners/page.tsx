import type { Metadata } from "next";
export const metadata: Metadata = { title: "初心者向け3Dプリンター | 3Dプリントラボ" };
export default function PrintersBeginners() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">初心者向け3Dプリンター</h1>
      <p className="text-gray-500 mb-8">初めての方におすすめの機種を紹介しています。</p>
      <a href="/printers/recommend" className="text-orange-500 hover:underline">→ おすすめ7選を見る</a>
    </div>
  );
}
