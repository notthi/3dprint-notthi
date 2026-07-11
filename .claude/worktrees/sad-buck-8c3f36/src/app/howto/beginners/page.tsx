import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/howto-beginners.mdx";
import { meta } from "../../../../content/articles/howto-beginners.meta";
import { generateArticleMetadata } from "@/lib/metadata";
import { buildRelated } from "@/lib/articles";

export const metadata: Metadata = generateArticleMetadata("/howto/beginners", meta);

export default function HowtoBeginners() {
  const related = buildRelated(meta.related, "howto", "/howto/beginners");
  return (
    <ArticleLayout
      breadcrumb={[{ label: "ホーム", href: "/" }, { label: "使い方", href: "/howto" }, { label: "初心者ガイド" }]}
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
