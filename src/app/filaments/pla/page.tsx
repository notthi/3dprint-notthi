import type { Metadata } from "next";
export const metadata: Metadata = { title: "PLAフィラメント | 3Dプリントラボ" };
export default function FilamentsPlaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">PLAフィラメント</h1>
      <p className="text-gray-500 mb-8">PLA素材の特徴・おすすめ商品をまとめています。</p>
      <a href="/filaments/recommend" className="text-orange-500 hover:underline">→ PLAフィラメントおすすめ8選を見る</a>
    </div>
  );
}
