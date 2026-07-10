#!/usr/bin/env node
/**
 * CMS移行スクリプト（一回限り・2026-06 ビジュアルエディタ導入時）
 *
 * content/articles/{cat}-{slug}.mdx + {cat}-{slug}.meta.ts
 *   → content/articles/{cat}/{slug}.mdx（YAMLフロントマター付き）
 *
 * - toc はフロントマターに保存しない（レンダリング時に見出しから自動抽出）
 * - 元ファイルは削除しない（--delete を付けたときだけ削除）
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matter = require("gray-matter");

const ROOT = process.cwd();
const SRC = path.join(ROOT, "content/articles");
const CATEGORIES = ["filaments", "printers", "howto"];
const DELETE = process.argv.includes("--delete");

function parseMetaTs(file) {
  const raw = fs.readFileSync(file, "utf8");
  // export const meta = { ... }; の部分だけを切り出す（後続コメント等を無視）
  const start = raw.indexOf("export const meta");
  const end = raw.lastIndexOf("};");
  if (start === -1 || end === -1) throw new Error("meta オブジェクトが見つからない");
  let src = raw
    .slice(start, end + 2)
    .replace(/export const meta\s*=/, "(")
    .replace(/;\s*$/, ")")
    .replace(/ as const/g, "")
    .replace(/ as string\[\]/g, "");
  return vm.runInNewContext(src, {});
}

let migrated = 0;
const errors = [];

for (const f of fs.readdirSync(SRC)) {
  if (!f.endsWith(".meta.ts") || f.startsWith("_template")) continue;
  const base = f.replace(/\.meta\.ts$/, "");
  const mdxPath = path.join(SRC, `${base}.mdx`);
  if (!fs.existsSync(mdxPath)) {
    errors.push(`${base}: 対応する .mdx がない`);
    continue;
  }

  let meta;
  try {
    meta = parseMetaTs(path.join(SRC, f));
  } catch (e) {
    errors.push(`${base}: meta.ts 解析失敗 — ${e.message}`);
    continue;
  }

  const { category, slug, toc: _dropToc, ...rest } = meta;
  if (!CATEGORIES.includes(category)) {
    errors.push(`${base}: 不明カテゴリ "${category}"`);
    continue;
  }

  const body = fs.readFileSync(mdxPath, "utf8").replace(/^\n+/, "");
  const destDir = path.join(SRC, category);
  fs.mkdirSync(destDir, { recursive: true });
  const dest = path.join(destDir, `${slug}.mdx`);
  fs.writeFileSync(dest, matter.stringify(body, rest));
  migrated++;

  if (DELETE) {
    fs.unlinkSync(path.join(SRC, f));
    fs.unlinkSync(mdxPath);
  }
}

console.log(`✅ ${migrated} 記事を移行${DELETE ? "（元ファイル削除済み）" : "（元ファイルは保持）"}`);
if (errors.length) {
  console.log(`⚠ エラー ${errors.length} 件:`);
  for (const e of errors) console.log("  - " + e);
  process.exit(1);
}
