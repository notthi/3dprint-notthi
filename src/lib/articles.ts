import { meta as filamentsPla } from "../../content/articles/filaments-pla.meta";
import { meta as filamentsPetg } from "../../content/articles/filaments-petg.meta";
import { meta as filamentsRecommend } from "../../content/articles/filaments-recommend.meta";
import { meta as printersRecommend } from "../../content/articles/printers-recommend.meta";
import { meta as printersBeginners } from "../../content/articles/printers-beginners.meta";
import { meta as printersHomeUse } from "../../content/articles/printers-home-use.meta";
import { meta as howtoBeginners } from "../../content/articles/howto-beginners.meta";
import { meta as howtoTrouble } from "../../content/articles/howto-trouble.meta";

export type ArticleCategory = "filaments" | "printers" | "howto";

export type RelatedArticle = {
  href: string;
  title: string;
  badge?: string;
  badgeColor?: string;
};

export type ArticleEntry = {
  href: string;
  category: ArticleCategory;
  slug: string;
  badge: string;
  badgeColor: string;
  hoverBorderColor: string;
  title: string;
  description: string;
  updatedAt: string;
  tags: string[];
  toc: { id: string; label: string }[];
  related: RelatedArticle[];
};

export const articles: ArticleEntry[] = [
  {
    href: "/filaments/pla",
    category: "filaments",
    slug: "pla",
    badge: "PLA",
    badgeColor: "#06b6d4",
    hoverBorderColor: "#06b6d4",
    title: filamentsPla.title,
    description: filamentsPla.description,
    updatedAt: filamentsPla.updatedAt,
    tags: filamentsPla.tags,
    toc: filamentsPla.toc,
    related: filamentsPla.related,
  },
  {
    href: "/filaments/petg",
    category: "filaments",
    slug: "petg",
    badge: "PETG",
    badgeColor: "#f59e0b",
    hoverBorderColor: "#f59e0b",
    title: filamentsPetg.title,
    description: filamentsPetg.description,
    updatedAt: filamentsPetg.updatedAt,
    tags: filamentsPetg.tags,
    toc: filamentsPetg.toc,
    related: filamentsPetg.related,
  },
  {
    href: "/filaments/recommend",
    category: "filaments",
    slug: "recommend",
    badge: "ランキング",
    badgeColor: "#8b5cf6",
    hoverBorderColor: "#8b5cf6",
    title: filamentsRecommend.title,
    description: filamentsRecommend.description,
    updatedAt: filamentsRecommend.updatedAt,
    tags: filamentsRecommend.tags,
    toc: filamentsRecommend.toc,
    related: filamentsRecommend.related,
  },
  {
    href: "/printers/recommend",
    category: "printers",
    slug: "recommend",
    badge: "ランキング",
    badgeColor: "#06b6d4",
    hoverBorderColor: "#06b6d4",
    title: printersRecommend.title,
    description: printersRecommend.description,
    updatedAt: printersRecommend.updatedAt,
    tags: printersRecommend.tags,
    toc: printersRecommend.toc,
    related: printersRecommend.related,
  },
  {
    href: "/printers/beginners",
    category: "printers",
    slug: "beginners",
    badge: "初心者",
    badgeColor: "#10b981",
    hoverBorderColor: "#10b981",
    title: printersBeginners.title,
    description: printersBeginners.description,
    updatedAt: printersBeginners.updatedAt,
    tags: printersBeginners.tags,
    toc: printersBeginners.toc,
    related: printersBeginners.related,
  },
  {
    href: "/printers/home-use",
    category: "printers",
    slug: "home-use",
    badge: "家庭用",
    badgeColor: "#8b5cf6",
    hoverBorderColor: "#8b5cf6",
    title: printersHomeUse.title,
    description: printersHomeUse.description,
    updatedAt: printersHomeUse.updatedAt,
    tags: printersHomeUse.tags,
    toc: printersHomeUse.toc,
    related: printersHomeUse.related,
  },
  {
    href: "/howto/beginners",
    category: "howto",
    slug: "beginners",
    badge: "入門",
    badgeColor: "#10b981",
    hoverBorderColor: "#10b981",
    title: howtoBeginners.title,
    description: howtoBeginners.description,
    updatedAt: howtoBeginners.updatedAt,
    tags: howtoBeginners.tags,
    toc: howtoBeginners.toc,
    related: howtoBeginners.related,
  },
  {
    href: "/howto/trouble",
    category: "howto",
    slug: "trouble",
    badge: "トラブル",
    badgeColor: "#ef4444",
    hoverBorderColor: "#ef4444",
    title: howtoTrouble.title,
    description: howtoTrouble.description,
    updatedAt: howtoTrouble.updatedAt,
    tags: howtoTrouble.tags,
    toc: howtoTrouble.toc,
    related: howtoTrouble.related,
  },
];

export function getArticlesByCategory(category: ArticleCategory): ArticleEntry[] {
  return articles.filter((a) => a.category === category);
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
