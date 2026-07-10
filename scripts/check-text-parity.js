#!/usr/bin/env node
/**
 * 記事変換のテキスト保全チェッカー
 * git HEAD の旧版と作業ツリーの新版から「可視テキスト」を抽出して類似度を出す。
 * 使い方: node scripts/check-text-parity.js content/articles/printers/xxx.mdx
 * 出力: similarity 0..1（0.93未満は要確認）
 */
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");

function extractText(src) {
  return src
    .replace(/^---[\s\S]*?---/, "")                 // frontmatter
    .replace(/^export const S = \{[\s\S]*?\};$/m, "") // スタイル定義
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")           // JSXコメント
    .replace(/<[^>]*>/g, " ")                        // タグ
    .replace(/[{}\[\]()"'`,:;=~|•✓✗→#*\-_\s]/g, "") // 記号・空白
    .replace(/[a-zA-Z0-9.%/]+/g, "");                // 英数（style値・URL等）
}

function bigrams(s) {
  const set = new Map();
  for (let i = 0; i < s.length - 1; i++) {
    const g = s.slice(i, i + 2);
    set.set(g, (set.get(g) || 0) + 1);
  }
  return set;
}

function similarity(a, b) {
  const A = bigrams(a), B = bigrams(b);
  let inter = 0, total = 0;
  for (const [g, n] of A) { inter += Math.min(n, B.get(g) || 0); total += n; }
  for (const n of B.values()) total += n;
  return total === 0 ? 1 : (2 * inter) / total;
}

const file = process.argv[2];
if (!file) { console.error("usage: check-text-parity.js <path>"); process.exit(2); }
const oldSrc = execFileSync("git", ["show", `HEAD:${file}`], { encoding: "utf8" });
const newSrc = fs.readFileSync(file, "utf8");
const sim = similarity(extractText(oldSrc), extractText(newSrc));
console.log(`${sim.toFixed(4)} ${file}`);
process.exit(sim >= 0.93 ? 0 : 1);
