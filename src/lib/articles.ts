import { meta as filamentsPla } from "../../content/articles/filaments-pla.meta";
import { meta as filamentsPetg } from "../../content/articles/filaments-petg.meta";
import { meta as filamentsRecommend } from "../../content/articles/filaments-recommend.meta";
import { meta as printersRecommend } from "../../content/articles/printers-recommend.meta";
import { meta as printersBeginners } from "../../content/articles/printers-beginners.meta";
import { meta as printersHomeUse } from "../../content/articles/printers-home-use.meta";
import { meta as howtoBeginners } from "../../content/articles/howto-beginners.meta";
import { meta as howtoTrouble } from "../../content/articles/howto-trouble.meta";
import { meta as howtoPlaWarping } from "../../content/articles/howto-pla-warping.meta";
// AUTO_INJECT_IMPORT — このコメントの上に新しい記事のimportを追加すること。`npm run new-article` が自動で追記する。

export type ArticleCategory = "filaments" | "printers" | "howto";

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  filaments: "フィラメント",
  printers: "プリンター",
  howto: "使い方",
};

export type RelatedArticle = {
  href: string;
  title: string;
  badge?: string;
  badgeColor?: string;
};

export type ArticleMeta = {
  category: ArticleCategory;
  slug: string;
  badge: string;
  badgeColor: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  updatedAt: string;
  tags: string[];
  toc: { id: string; label: string }[];
  related: RelatedArticle[];
};

export type ArticleEntry = ArticleMeta & {
  href: string;
  hoverBorderColor: string;
};

function toEntry(m: ArticleMeta): ArticleEntry {
  return {
    ...m,
    href: `/${m.category}/${m.slug}`,
    hoverBorderColor: m.badgeColor,
  };
}

export const articles: ArticleEntry[] = [
  toEntry(filamentsPla),
  toEntry(filamentsPetg),
  toEntry(filamentsRecommend),
  toEntry(printersRecommend),
  toEntry(printersBeginners),
  toEntry(printersHomeUse),
  toEntry(howtoBeginners),
  toEntry(howtoTrouble),
  toEntry(howtoPlaWarping),
  // AUTO_INJECT_ENTRY — このコメントの上に toEntry(xxx) を追加すること。`npm run new-article` が自動で追記する。
];

export function getArticlesByCategory(category: ArticleCategory): ArticleEntry[] {
  return articles.filter((a) => a.category === category);
}

export function getArticleByHref(href: string): ArticleEntry | undefined {
  return articles.find((a) => a.href === href);
}

export function buildBreadcrumb(meta: Pick<ArticleMeta, "category" | "breadcrumbLabel">) {
  return [
    { label: "ホーム", href: "/" },
    { label: CATEGORY_LABELS[meta.category], href: `/${meta.category}` },
    { label: meta.breadcrumbLabel },
  ];
}

/**
 * Merges manual related articles with auto-generated same-category articles.
 * Deduplicates by href and caps at maxTotal.
 */
export function buildRelated(
  manualRelated: RelatedArticle[],
  category: ArticleCategory,
  currentHref: string,
  maxTotal: number = 4
): RelatedArticle[] {
  const seen = new Set([currentHref, ...manualRelated.map((r) => r.href)]);
  const autoRelated = articles
    .filter((a) => a.category === category && !seen.has(a.href))
    .map((a) => ({ href: a.href, title: a.title, badge: a.badge, badgeColor: a.badgeColor }));
  return [...manualRelated, ...autoRelated].slice(0, maxTotal);
}
