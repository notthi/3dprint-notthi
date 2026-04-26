import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/printers-home-use.mdx";
import { meta } from "../../../../content/articles/printers-home-use.meta";
import { generateArticleMetadata } from "@/lib/metadata";
import { buildRelated } from "@/lib/articles";

export const metadata: Metadata = generateArticleMetadata("/printers/home-use", meta);

export default function PrintersHomeUsePage() {
  const related = buildRelated(meta.related, "printers", "/printers/home-use");
  return (
    <ArticleLayout
      breadcrumb={[{ label: "ホーム", href: "/" }, { label: "プリンター", href: "/printers" }, { label: "家庭用・静音" }]}
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
