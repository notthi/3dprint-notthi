#!/usr/bin/env node
/**
 * 新規記事スキャフォルダー
 *
 * 使い方：
 *   npm run new-article <category> <slug> [title]
 *
 * 例：
 *   npm run new-article filaments abs "ABSフィラメントの使い方【2026年版】"
 *   npm run new-article howto pla-warping
 *
 * 生成するファイル：
 *   content/articles/{category}-{slug}.meta.ts
 *   content/articles/{category}-{slug}.mdx
 *   src/app/{category}/{slug}/page.tsx
 *   src/app/{category}/{slug}/opengraph-image.tsx
 *
 * さらに src/lib/articles.ts に import / エントリを自動追記します。
 */

const fs = require("node:fs");
const path = require("node:path");

const ROOT = process.cwd();
const CATEGORIES = ["filaments", "printers", "howto"];

function fail(msg) {
  console.error(`\n❌ ${msg}\n`);
  process.exit(1);
}

function camelName(category, slug) {
  return (
    category +
    slug
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("")
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceOnce(src, needle, replacement, label) {
  const re = new RegExp(escapeRegExp(needle));
  if (!re.test(src)) {
    fail(`テンプレート置換に失敗: 「${label}」が見つかりません`);
  }
  return src.replace(re, replacement);
}

function main() {
  const [category, slug, ...titleParts] = process.argv.slice(2);
  const title = titleParts.join(" ").trim();

  if (!category || !slug) {
    fail(
      `引数が不足しています。\n  使い方: npm run new-article <category> <slug> [title]\n  カテゴリ: ${CATEGORIES.join(" | ")}`
    );
  }
  if (!CATEGORIES.includes(category)) {
    fail(
      `不正なカテゴリ: "${category}"\n  使えるカテゴリ: ${CATEGORIES.join(" | ")}`
    );
  }
  if (!/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(slug)) {
    fail(
      `不正なスラッグ: "${slug}"\n  小文字英数字とハイフンのみ（先頭末尾はハイフン不可）`
    );
  }

  const fileBase = `${category}-${slug}`;
  const metaPath = path.join(ROOT, "content/articles", `${fileBase}.meta.ts`);
  const mdxPath = path.join(ROOT, "content/articles", `${fileBase}.mdx`);
  const pageDir = path.join(ROOT, "src/app", category, slug);
  const pagePath = path.join(pageDir, "page.tsx");
  const ogPath = path.join(pageDir, "opengraph-image.tsx");
  const articlesPath = path.join(ROOT, "src/lib/articles.ts");
  const templateMetaPath = path.join(ROOT, "content/articles/_template.meta.ts");
  const templateMdxPath = path.join(ROOT, "content/articles/_template.mdx");

  for (const p of [metaPath, mdxPath, pagePath, ogPath]) {
    if (fs.existsSync(p)) {
      fail(`既に存在します: ${path.relative(ROOT, p)}`);
    }
  }
  if (!fs.existsSync(templateMetaPath) || !fs.existsSync(templateMdxPath)) {
    fail("テンプレートファイルが見つかりません (content/articles/_template.meta.ts / _template.mdx)");
  }

  // 1. meta.ts を生成
  let metaSrc = fs.readFileSync(templateMetaPath, "utf8");
  metaSrc = replaceOnce(
    metaSrc,
    `category: "filaments" as const,`,
    `category: "${category}" as const,`,
    "category"
  );
  metaSrc = replaceOnce(metaSrc, `slug: "template",`, `slug: "${slug}",`, "slug");
  metaSrc = replaceOnce(
    metaSrc,
    `breadcrumbLabel: "テンプレート",`,
    `breadcrumbLabel: "${slug}",`,
    "breadcrumbLabel"
  );
  if (title) {
    metaSrc = replaceOnce(
      metaSrc,
      `title: "記事タイトル【2026年版】〜〜〜を徹底解説",`,
      `title: ${JSON.stringify(title)},`,
      "title"
    );
  }
  fs.writeFileSync(metaPath, metaSrc);

  // 2. mdx 本文をテンプレからコピー
  fs.copyFileSync(templateMdxPath, mdxPath);

  // 3. page.tsx を生成
  fs.mkdirSync(pageDir, { recursive: true });
  const pageSrc = `import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Content from "../../../../content/articles/${fileBase}.mdx";
import { meta } from "../../../../content/articles/${fileBase}.meta";
import { generateArticleMetadata } from "@/lib/metadata";
import { buildBreadcrumb, buildRelated } from "@/lib/articles";

const href = \`/\${meta.category}/\${meta.slug}\`;

export const metadata: Metadata = generateArticleMetadata(href, meta);

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={buildBreadcrumb(meta)}
      title={meta.title}
      updatedAt={meta.updatedAt}
      tags={meta.tags}
      toc={meta.toc}
      related={buildRelated(meta.related, meta.category, href)}
    >
      <Content />
    </ArticleLayout>
  );
}
`;
  fs.writeFileSync(pagePath, pageSrc);

  // 4. opengraph-image.tsx を生成
  const ogSrc = `import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { meta } from "../../../../content/articles/${fileBase}.meta";

export const alt = meta.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOgImage({
    title: meta.title,
    badge: meta.badge,
    badgeColor: meta.badgeColor,
    category: meta.category,
  });
}
`;
  fs.writeFileSync(ogPath, ogSrc);

  // 5. articles.ts にマーカー駆動で追記
  const name = camelName(category, slug);
  let articlesSrc = fs.readFileSync(articlesPath, "utf8");

  const importMarker = "// AUTO_INJECT_IMPORT";
  const entryMarker = "  // AUTO_INJECT_ENTRY";

  if (!articlesSrc.includes(importMarker)) {
    fail(`src/lib/articles.ts に "${importMarker}" マーカーがありません`);
  }
  if (!articlesSrc.includes(entryMarker)) {
    fail(`src/lib/articles.ts に "${entryMarker}" マーカーがありません`);
  }
  if (articlesSrc.includes(`as ${name} }`)) {
    fail(`src/lib/articles.ts は既に "${name}" を import しています`);
  }

  const importLine = `import { meta as ${name} } from "../../content/articles/${fileBase}.meta";\n`;
  const entryLine = `  toEntry(${name}),\n`;

  articlesSrc = articlesSrc.replace(importMarker, `${importLine}${importMarker}`);
  articlesSrc = articlesSrc.replace(entryMarker, `${entryLine}${entryMarker}`);
  fs.writeFileSync(articlesPath, articlesSrc);

  const rel = (p) => path.relative(ROOT, p);
  console.log(`\n✅ 新規記事を生成しました\n`);
  console.log(`  📝 ${rel(metaPath)}`);
  console.log(`  📄 ${rel(mdxPath)}`);
  console.log(`  ⚛️  ${rel(pagePath)}`);
  console.log(`  🖼  ${rel(ogPath)}`);
  console.log(`  🔗 src/lib/articles.ts に "${name}" を登録しました\n`);
  console.log(`次の作業:`);
  console.log(`  1. ${rel(metaPath)} を編集（badge/badgeColor/tags/toc/related など）`);
  console.log(`  2. ${rel(mdxPath)} に本文を書く`);
  console.log(`  3. npm run dev → http://localhost:3000/${category}/${slug}`);
  console.log(``);
}

main();
