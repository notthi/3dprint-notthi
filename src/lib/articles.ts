/**
 * 記事レジストリ — content/articles/{category}/{slug}.mdx のフロントマターを読む
 *
 * 旧方式（meta.ts手動import＋配列手動登録）を廃止し、ファイルシステムが唯一の情報源。
 * Keystatic（/keystatic）で記事を追加・編集すると自動でここに反映される。
 * サーバー専用（fs使用）— クライアントコンポーネントからimportしないこと。
 */
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

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

export type TocItem = { id: string; label: string };

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
  related: RelatedArticle[];
};

export type ArticleEntry = ArticleMeta & {
  href: string;
  hoverBorderColor: string;
  toc: TocItem[];
};

const CONTENT_DIR = join(process.cwd(), "content/articles");
const CATEGORIES: ArticleCategory[] = ["filaments", "printers", "howto"];

/**
 * 本文から目次を自動抽出する。
 * - 新形式: Markdown見出し `## テキスト` → rehype-slug と同じ github-slugger でID生成
 * - 旧形式: <section id="xxx"> ... <h2 ...>テキスト</h2> のペア
 */
export function extractToc(body: string): TocItem[] {
  const slugger = new GithubSlugger();
  const toc: TocItem[] = [];

  // 旧形式（セクションJSX）を先に検出
  const legacy = [...body.matchAll(/<section id="([^"]+)"[^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/g)];
  if (legacy.length > 0) {
    for (const m of legacy) {
      const label = m[2].replace(/<[^>]+>/g, "").replace(/\{[^}]*\}/g, "").trim();
      if (label) toc.push({ id: m[1], label });
    }
    return toc;
  }

  // 新形式（Markdown見出し）
  for (const m of body.matchAll(/^## (.+)$/gm)) {
    const label = m[1].trim();
    toc.push({ id: slugger.slug(label), label });
  }
  return toc;
}

function loadArticle(category: ArticleCategory, file: string): ArticleEntry {
  const slug = file.replace(/\.mdx$/, "");
  const raw = readFileSync(join(CONTENT_DIR, category, file), "utf8");
  const { data, content } = matter(raw);
  const badgeColor = (data.badgeColor as string) ?? "#06b6d4";
  return {
    category,
    slug,
    badge: (data.badge as string) ?? "",
    badgeColor,
    breadcrumbLabel: (data.breadcrumbLabel as string) ?? (data.title as string) ?? slug,
    title: (data.title as string) ?? slug,
    description: (data.description as string) ?? "",
    updatedAt: (data.updatedAt as string) ?? "",
    tags: (data.tags as string[]) ?? [],
    related: (data.related as RelatedArticle[]) ?? [],
    href: `/${category}/${slug}`,
    hoverBorderColor: badgeColor,
    toc: extractToc(content),
  };
}

function loadAll(): ArticleEntry[] {
  const all: ArticleEntry[] = [];
  for (const category of CATEGORIES) {
    const dir = join(CONTENT_DIR, category);
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir)) {
      if (!file.endsWith(".mdx")) continue;
      all.push(loadArticle(category, file));
    }
  }
  return all;
}

export const articles: ArticleEntry[] = loadAll();

export function getArticlesByCategory(category: ArticleCategory): ArticleEntry[] {
  return articles.filter((a) => a.category === category);
}

export function getArticleByHref(href: string): ArticleEntry | undefined {
  return articles.find((a) => a.href === href);
}

export function getArticle(category: ArticleCategory, slug: string): ArticleEntry | undefined {
  return articles.find((a) => a.category === category && a.slug === slug);
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
