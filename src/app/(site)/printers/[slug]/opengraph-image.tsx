import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { getArticle, getArticlesByCategory } from "@/lib/articles";

export function generateStaticParams() {
  return getArticlesByCategory("printers").map((a) => ({ slug: a.slug }));
}

export const alt = "3Dプリントラボ";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Next 16: params は Promise で渡される
export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const meta = getArticle("printers", slug)!;
  return generateOgImage({
    title: meta.title,
    badge: meta.badge,
    badgeColor: meta.badgeColor,
    category: meta.category,
  });
}
