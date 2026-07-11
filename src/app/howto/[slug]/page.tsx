import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { generateArticleMetadata } from "@/lib/metadata";
import { buildBreadcrumb, buildRelated, getArticle, getArticlesByCategory } from "@/lib/articles";

export function generateStaticParams() {
  return getArticlesByCategory("howto").map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = getArticle("howto", slug);
  if (!meta) return {};
  return generateArticleMetadata(meta.href, meta);
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const meta = getArticle("howto", slug);
  if (!meta) notFound();

  const { default: Content } = await import(`../../../../content/articles/howto/${slug}.mdx`);

  return (
    <ArticleLayout
      breadcrumb={buildBreadcrumb(meta)}
      title={meta.title}
      updatedAt={meta.updatedAt}
      tags={meta.tags}
      toc={meta.toc}
      related={buildRelated(meta.related, meta.category, meta.href)}
    >
      <Content />
    </ArticleLayout>
  );
}
