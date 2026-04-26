import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/filaments-recommend.mdx";
import { meta } from "../../../../content/articles/filaments-recommend.meta";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "3Dプリントラボ",
    url: "https://3dprint.notthi.com/filaments/recommend",
    title: meta.title,
    description: meta.description,
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  alternates: { canonical: "https://3dprint.notthi.com/filaments/recommend" },
};

export default function FilamentsRecommendPage() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "ホーム", href: "/" }, { label: "フィラメント", href: "/filaments" }, { label: "おすすめランキング" }]}
      title={meta.title}
      updatedAt={meta.updatedAt}
      tags={meta.tags}
      toc={meta.toc}
      related={meta.related}
    >
      <Content />
    </ArticleLayout>
  );
}
