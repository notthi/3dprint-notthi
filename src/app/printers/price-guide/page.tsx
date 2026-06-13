import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/printers-price-guide.mdx";
import { meta } from "../../../../content/articles/printers-price-guide.meta";
import { generateArticleMetadata } from "@/lib/metadata";
import { buildBreadcrumb, buildRelated } from "@/lib/articles";

const href = `/${meta.category}/${meta.slug}`;
export const metadata: Metadata = generateArticleMetadata(href, meta);

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={buildBreadcrumb(meta)}
      title={meta.title}
      updatedAt={meta.updatedAt}
      tags={meta.tags}
      toc={meta.toc}
      related={buildRelated(meta.related, meta.category, href)}
    >
      <Content />
    </ArticleLayout>
  );
}
