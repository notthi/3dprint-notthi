import type { Metadata } from "next";
export const metadata: Metadata = { title: "トラブル解決 | 3Dプリントラボ" };
export default function HowtoTroublePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">3Dプリンター トラブル解決</h1>
      <p className="text-gray-500 mb-8">よくあるトラブルの原因と対策をまとめています。（記事準備中）</p>
      <a href="/howto/beginners" className="text-orange-500 hover:underline">← 初心者ガイドを見る</a>
    </div>
  );
}
