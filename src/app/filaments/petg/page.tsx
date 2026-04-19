import type { Metadata } from "next";
export const metadata: Metadata = { title: "PETGフィラメント | 3Dプリントラボ" };
export default function FilamentsPetgPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">PETGフィラメント</h1>
      <p className="text-gray-500 mb-8">PLAより耐久性が高いPETG素材の解説記事を準備中です。</p>
      <a href="/filaments/recommend" className="text-orange-500 hover:underline">← フィラメントおすすめ一覧を見る</a>
    </div>
  );
}
