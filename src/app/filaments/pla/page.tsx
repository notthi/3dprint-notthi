import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import PlaContent from "../../../../content/articles/filaments-pla.mdx";
import { meta } from "../../../../content/articles/filaments-pla.meta";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "3Dプリントラボ",
    url: "https://3dprint.notthi.com/filaments/pla",
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: "https://3dprint.notthi.com/filaments/pla",
  },
};

export default function FilamentsPlaPage() {
  return (
    <ArticleLayout
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "フィラメント", href: "/filaments" },
        { label: "PLA" },
      ]}
      title={meta.title}
      updatedAt={meta.updatedAt}
      tags={meta.tags}
      toc={meta.toc}
      related={meta.related}
    >
      <PlaContent />
    </ArticleLayout>
  );
}
