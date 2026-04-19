import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "フィラメント | 3Dプリントラボ",
  description: "PLA・PETG・ABSなど素材別におすすめフィラメントをまとめました。",
};

const articles = [
  { title: "PLAフィラメントおすすめ8選【2026年版】", description: "コスパ・品質・色の豊富さで選ぶべきブランドをランキング形式で紹介。", href: "/filaments/recommend", category: "まとめ", date: "2026年4月" },
];

export default function FilamentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">フィラメント</h1>
      <p className="text-gray-500 text-sm mb-8">素材別・ブランド別のフィラメント比較記事をまとめています。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((a) => <ArticleCard key={a.href} {...a} />)}
      </div>
    </div>
  );
}
