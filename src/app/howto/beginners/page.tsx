import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/howto-beginners.mdx";
import { meta } from "../../../../content/articles/howto-beginners.meta";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "3Dプリントラボ",
    url: "https://3dprint.notthi.com/howto/beginners",
    title: meta.title,
    description: meta.description,
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  alternates: { canonical: "https://3dprint.notthi.com/howto/beginners" },
};

export default function HowtoBeginners() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "ホーム", href: "/" }, { label: "使い方", href: "/howto" }, { label: "初心者ガイド" }]}
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
