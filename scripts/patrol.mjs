#!/usr/bin/env node
/**
 * 本番サイトの見回り（週1回、Macのlaunchdから。手動なら npm run patrol）
 *
 * 使い方: node scripts/patrol.mjs [サイトURL] [--report]
 *   サイトURLを省略すると https://3dprint.notthi.com
 *   --report を付けると、結果を手帳の「昨夜の自動処理」（lifework-dashboard の automation_runs）に1行書く
 *
 * 見ているもの（公開前チェック scripts/check-content.js では拾えない「外で起きた変化」）：
 *   - サイトマップの全ページが開けるか（200以外は問題）
 *   - 中身の空の商品リンク（Amazon・楽天・Yahoo!・メルカリの空検索）がないか
 *   - ページ内の内部リンクの行き先が開けるか（404など）
 *   - 商品カード・ランキングのAmazonボタンが、ページにあるべき数だけ出ているか（0件のページを報告）
 *
 * Amazonなど外部サイトへの実アクセスはしない（ボット判定で誤検知になるため）。
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

const args = process.argv.slice(2);
const REPORT = args.includes("--report");
const BASE = (args.find((a) => /^https?:\/\//.test(a)) || "https://3dprint.notthi.com").replace(/\/$/, "");
const JOB = "site-patrol-" + new URL(BASE).hostname.split(".")[0];
const REPORT_PROJ = "/Users/notthi/Library/CloudStorage/Dropbox/Programing/lifework-dashboard";
const started = new Date().toISOString();

const UA = "Mozilla/5.0 (site-patrol; notthi)";
async function get(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
      return { status: r.status, text: r.headers.get("content-type")?.includes("html") || url.endsWith(".xml") ? await r.text() : "" };
    } catch (e) {
      if (i === 2) return { status: 0, text: "", error: e.message };
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

async function pool(items, n, fn) {
  const out = []; let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

const problems = [];
// サイトマップ（WordPressなどの「サイトマップの目次」形式にも対応）
const locs = (xml) => [...(xml || "").matchAll(/<loc>\s*(?:<!\[CDATA\[)?([^<\]]+)/g)].map((m) => m[1].trim());
const sm = await get(BASE + "/sitemap.xml");
let pages = [];
if (/<sitemapindex/.test(sm.text || "")) {
  for (const sub of locs(sm.text)) pages.push(...locs((await get(sub)).text).filter((u) => !/\.xml$/.test(u)));
} else {
  pages = locs(sm.text);
}
pages = [...new Set(pages)].filter((u) => u.startsWith(BASE));
if (sm.status !== 200 || pages.length === 0) problems.push(`サイトマップを読めません（${sm.status}${sm.error ? " " + sm.error : ""}）`);

const EMPTY = [/amazon\.co\.jp\/s\?k=(&|&amp;|")/g, /search\.rakuten\.co\.jp\/search\/mall\/(%2F|\/)?(&|&amp;|")/g, /shopping\.yahoo\.co\.jp%2Fsearch%3Fp%3D(&|&amp;|")/g, /mercari\.com\/search\?keyword=(&|&amp;|")/g];
const internal = new Set();
let shopButtons = 0;

await pool(pages, 6, async (url) => {
  const r = await get(url);
  const path = url.replace(BASE, "") || "/";
  if (r.status !== 200) { problems.push(`開けないページ：${path}（${r.status || r.error}）`); return; }
  const empty = EMPTY.reduce((n, re) => n + (r.text.match(re) || []).length, 0);
  if (empty) problems.push(`空の商品リンク ${empty} 件：${path}`);
  shopButtons += (r.text.match(/amazon\.co\.jp\/(dp|s)\//g) || []).length + (r.text.match(/amazon\.co\.jp\/s\?k=/g) || []).length;
  const host = BASE.replace(/^https?:/, "");
  for (const m of r.text.matchAll(/href="((?:https?:)?\/[^"#?]*)/g)) {
    let h = m[1];
    if (h.startsWith("http") || h.startsWith("//")) {
      if (!h.replace(/^https?:/, "").startsWith(host + "/")) continue; // 外部サイト
      h = h.replace(/^(https?:)?\/\/[^/]+/, "");
    }
    if (!h || h.startsWith("/_next") || h.startsWith("/keystatic") || h.startsWith("/api") || h.startsWith("/wp-") || h.startsWith("/feed") || h.includes("/feed")) continue;
    internal.add(h.length > 1 ? h.replace(/\/$/, "") : h);
  }
});

const pageSet = new Set(pages.map((u) => (u.replace(BASE, "") || "/").replace(/(.)\/$/, "$1")));
const toCheck = [...internal].filter((h) => !pageSet.has(h) && !/\.(png|jpe?g|svg|ico|webp|xml|txt)$/.test(h));
await pool(toCheck, 6, async (h) => {
  const r = await get(BASE + h);
  if (r.status !== 200) problems.push(`リンク切れ：${h}（${r.status || r.error}）`);
});

if (pages.length && shopButtons === 0) problems.push("サイト全体で商品リンクが0件（商品カードが表示されていない可能性）");

const ok = problems.length === 0;
const summary = `${BASE.replace("https://", "")}：${pages.length}ページ・内部リンク${internal.size}種・商品リンク${shopButtons}件${ok ? "・問題なし" : `・問題${problems.length}件`}`;
console.log((ok ? "✅ " : "❌ ") + summary);
for (const p of problems) console.log("  - " + p);

if (REPORT) {
  if (!existsSync(REPORT_PROJ)) { console.error("lifework-dashboard が見つからないので報告できません"); process.exit(ok ? 0 : 1); }
  const r = spawnSync("/opt/homebrew/bin/node", ["scripts/report-run.mjs", JOB, ok ? "1" : "0", started, summary, problems.join("\n")], { cwd: REPORT_PROJ, encoding: "utf8", timeout: 120000 });
  console.log("ダッシュボード: " + ((r.stdout || r.stderr || "").trim() || `終了コード ${r.status}`));
}
process.exit(ok ? 0 : 1);
