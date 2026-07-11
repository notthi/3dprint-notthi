import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/printers-beginners.mdx";
import { meta } from "../../../../content/articles/printers-beginners.meta";
import { generateArticleMetadata } from "@/lib/metadata";
import { buildRelated } from "@/lib/articles";

export const metadata: Metadata = generateArticleMetadata("/printers/beginners", meta);

export default function PrintersBeginners() {
  const related = buildRelated(meta.related, "printers", "/printers/beginners");
  return (
    <ArticleLayout
      breadcrumb={[{ label: "ホーム", href: "/" }, { label: "プリンター", href: "/printers" }, { label: "初心者の選び方" }]}
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
