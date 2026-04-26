import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/printers-home-use.mdx";
import { meta } from "../../../../content/articles/printers-home-use.meta";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "3Dプリントラボ",
    url: "https://3dprint.notthi.com/printers/home-use",
    title: meta.title,
    description: meta.description,
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  alternates: { canonical: "https://3dprint.notthi.com/printers/home-use" },
};

export default function PrintersHomeUsePage() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "ホーム", href: "/" }, { label: "プリンター", href: "/printers" }, { label: "家庭用・静音" }]}
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
