#!/usr/bin/env node
/**
 * 公開前チェック（npm run build の前に自動で走る。単独では npm run check）
 *
 * 1つでも問題があれば終了コード1でビルドを止める。
 * Cloudflare（Workers Builds）は失敗したビルドを公開しないので、本番は前の正しい状態のまま残る。
 *
 * 見ているもの：
 *   - 商品マスタ（src/data/products.json）：IDの重複・空のID・空の商品名
 *   - 記事の productId（ProductCard / RankingItem）が商品マスタにあるか
 *   - 記事の内部リンク（本文の /カテゴリ/スラッグ、関連記事の href）の行き先があるか
 *   - 記事のフロントマター：title・description があるか
 */

const fs = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");

const ROOT = process.cwd();
const ARTICLES = path.join(ROOT, "content/articles");
const CATEGORIES = ["filaments", "printers", "howto"];
// 記事以外で存在するページ（src/app/(site) 配下）
const STATIC_PAGES = new Set(["/", "/about", "/privacy", ...CATEGORIES.map((c) => "/" + c)]);

const errors = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);

/* ── 商品マスタ ── */
const productsFile = "src/data/products.json";
const items = JSON.parse(fs.readFileSync(path.join(ROOT, productsFile), "utf-8")).items || [];
const productIds = new Set();
for (const [i, p] of items.entries()) {
  if (!p.id) { err(productsFile, `${i + 1}件目の商品にIDがありません`); continue; }
  if (productIds.has(p.id)) err(productsFile, `IDが重複しています：${p.id}`);
  productIds.add(p.id);
  if (!p.name) err(productsFile, `商品名が空です：${p.id}`);
}

/* ── 記事の一覧（_で始まるテンプレートは除く） ── */
const articles = [];
for (const cat of CATEGORIES) {
  const dir = path.join(ARTICLES, cat);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".mdx") || f.startsWith("_")) continue;
    articles.push({ cat, slug: f.replace(/\.mdx$/, ""), file: path.join("content/articles", cat, f) });
  }
}
const routes = new Set([...STATIC_PAGES, ...articles.map((a) => `/${a.cat}/${a.slug}`)]);

const normalize = (href) => {
  const p = href.split("#")[0].split("?")[0];
  return p.length > 1 ? p.replace(/\/$/, "") : p;
};

/* ── 記事ごとのチェック ── */
for (const a of articles) {
  const raw = fs.readFileSync(path.join(ROOT, a.file), "utf-8");
  const { data, content } = matter(raw);

  if (!data.title) err(a.file, "title がありません");
  if (!data.description) err(a.file, "description がありません");

  for (const m of content.matchAll(/productId\s*=\s*["']([^"']+)["']/g)) {
    if (!productIds.has(m[1])) err(a.file, `商品マスタにない productId：${m[1]}`);
  }

  const links = [];
  for (const r of data.related || []) if (r && r.href) links.push(["関連記事", r.href]);
  for (const m of content.matchAll(/\]\((\/[^)\s]*)\)/g)) links.push(["本文", m[1]]);
  for (const m of content.matchAll(/href\s*=\s*["'](\/[^"']*)["']/g)) links.push(["本文", m[1]]);
  for (const [where, href] of links) {
    if (href.startsWith("//")) continue; // 外部（プロトコル省略）
    if (!routes.has(normalize(href))) err(a.file, `${where}のリンク先がありません：${href}`);
  }
}

if (errors.length) {
  console.error(`\n❌ 公開前チェックで ${errors.length} 件の問題が見つかりました（ビルドを止めます）\n`);
  for (const e of errors) console.error("  - " + e);
  console.error("");
  process.exit(1);
}
console.log(`✅ 公開前チェックOK（記事 ${articles.length} 本・商品 ${productIds.size} 件）`);
