import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/filaments-petg.mdx";
import { meta } from "../../../../content/articles/filaments-petg.meta";
import { generateArticleMetadata } from "@/lib/metadata";
import { buildRelated } from "@/lib/articles";

export const metadata: Metadata = generateArticleMetadata("/filaments/petg", meta);

export default function FilamentsPetgPage() {
  const related = buildRelated(meta.related, "filaments", "/filaments/petg");
  return (
    <ArticleLayout
      breadcrumb={[{ label: "ホーム", href: "/" }, { label: "フィラメント", href: "/filaments" }, { label: "PETG" }]}
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
