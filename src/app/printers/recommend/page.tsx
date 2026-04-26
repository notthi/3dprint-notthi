import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/printers-recommend.mdx";
import { meta } from "../../../../content/articles/printers-recommend.meta";
import { generateArticleMetadata } from "@/lib/metadata";
import { buildRelated } from "@/lib/articles";

export const metadata: Metadata = generateArticleMetadata("/printers/recommend", meta);

export default function PrintersRecommendPage() {
  const related = buildRelated(meta.related, "printers", "/printers/recommend");
  return (
    <ArticleLayout
      breadcrumb={[{ label: "ホーム", href: "/" }, { label: "プリンター", href: "/printers" }, { label: "おすすめ7選" }]}
      title={meta.title}
      updatedAt={meta.updatedAt}
      tags={meta.tags}
      toc={meta.toc}
      related={related}
    >
      <Content />
    </ArticleLayout>
  );
}
