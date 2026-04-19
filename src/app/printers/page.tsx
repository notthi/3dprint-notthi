import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "3Dプリンター | 3Dプリントラボ",
  description: "家庭用・初心者向け・コスパ最強など目的別に3Dプリンターをまとめました。",
};

const articles = [
  { title: "家庭用3Dプリンターおすすめ7選【2026年版】", description: "価格・精度・使いやすさを総合評価したランキング。初心者でも失敗しない選び方を解説。", href: "/printers/recommend", category: "まとめ", date: "2026年4月" },
];

export default function PrintersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">3Dプリンター</h1>
      <p className="text-gray-500 text-sm mb-8">機種選び・比較・レビュー記事をまとめています。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((a) => <ArticleCard key={a.href} {...a} />)}
      </div>
    </div>
  );
}
