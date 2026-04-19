import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "使い方 | 3Dプリントラボ",
  description: "3Dプリンターの始め方・設定方法・トラブル解決まで丁寧に解説します。",
};

const articles = [
  { title: "3Dプリンター初心者ガイド完全版", description: "購入から初めての印刷まで、初心者がつまずくポイントをすべて解説。", href: "/howto/beginners", category: "ガイド", date: "2026年4月" },
];

export default function HowtoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">使い方・ガイド</h1>
      <p className="text-gray-500 text-sm mb-8">設定方法・スライサーの使い方・トラブル解決の記事をまとめています。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((a) => <ArticleCard key={a.href} {...a} />)}
      </div>
    </div>
  );
}
