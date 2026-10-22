/**
 * Keystatic 設定 — 記事のビジュアル編集（WordPressブロックエディタ相当）
 *
 * 起動: npm run dev → http://localhost:3000/keystatic
 * 保存: content/articles/{カテゴリ}/{スラッグ}.mdx にファイル書き込み（ローカルモード）
 * 公開: /admin の公開ボタン（git commit & push → Vercel自動デプロイ）
 */
import { config, fields, collection, singleton } from "@keystatic/core";
import { wrapper, block } from "@keystatic/core/content-components";

/* ── 記事本文で使えるブロック定義（エディタの挿入メニューに出る） ── */
const articleComponents = {
  Lead: wrapper({
    label: "リード文（冒頭要約カード）",
    schema: {},
  }),
  Tip: wrapper({
    label: "補足ボックス（シアン）",
    schema: {
      title: fields.text({ label: "タイトル（省略可）" }),
    },
  }),
  Warn: wrapper({
    label: "注意ボックス（アンバー）",
    schema: {
      title: fields.text({ label: "タイトル（省略可）" }),
    },
  }),
  ProsCons: block({
    label: "メリット・デメリット",
    schema: {
      prosTitle: fields.text({ label: "左タイトル", defaultValue: "メリット" }),
      consTitle: fields.text({ label: "右タイトル", defaultValue: "デメリット" }),
      pros: fields.array(fields.text({ label: "項目" }), {
        label: "メリット",
        itemLabel: (p) => p.value,
      }),
      cons: fields.array(fields.text({ label: "項目" }), {
        label: "デメリット",
        itemLabel: (p) => p.value,
      }),
    },
  }),
  SpecList: block({
    label: "スペック一覧（ラベル＋値）",
    schema: {
      items: fields.array(
        fields.object({
          label: fields.text({ label: "ラベル" }),
          value: fields.text({ label: "値" }),
        }),
        { label: "項目", itemLabel: (p) => p.fields.label.value }
      ),
    },
  }),
  Steps: block({
    label: "番号付き手順",
    schema: {
      items: fields.array(
        fields.object({
          title: fields.text({ label: "タイトル" }),
          body: fields.text({ label: "説明（省略可）", multiline: true }),
        }),
        { label: "手順", itemLabel: (p) => p.fields.title.value }
      ),
    },
  }),
  CheckList: block({
    label: "チェックリスト",
    schema: {
      variant: fields.select({
        label: "種類",
        options: [
          { label: "✓ チェック（緑）", value: "check" },
          { label: "✗ バツ（赤）", value: "cross" },
        ],
        defaultValue: "check",
      }),
      items: fields.array(fields.text({ label: "項目" }), {
        label: "項目",
        itemLabel: (p) => p.value,
      }),
    },
  }),
  PriceList: block({
    label: "価格リスト",
    schema: {
      items: fields.array(
        fields.object({
          label: fields.text({ label: "モデル名" }),
          price: fields.text({ label: "価格" }),
        }),
        { label: "行", itemLabel: (p) => p.fields.label.value }
      ),
    },
  }),
  CTA: wrapper({
    label: "CTAボタン（誘導）",
    schema: {
      href: fields.text({ label: "リンク先URL" }),
      label: fields.text({ label: "ボタンのテキスト" }),
    },
  }),
  FAQ: block({
    label: "よくある質問（Q&A）",
    schema: {
      items: fields.array(
        fields.object({
          q: fields.text({ label: "質問" }),
          a: fields.text({ label: "回答", multiline: true }),
        }),
        { label: "Q&A", itemLabel: (p) => p.fields.q.value }
      ),
    },
  }),
  RankingItem: block({
    label: "商品ランキングカード",
    schema: {
      rank: fields.integer({ label: "順位", defaultValue: 1 }),
      productId: fields.text({ label: "商品ID（「商品マスタ」のID）" }),
      badge: fields.text({ label: "バッジ（省略可）" }),
      pros: fields.array(fields.text({ label: "項目" }), {
        label: "メリット",
        itemLabel: (p) => p.value,
      }),
      cons: fields.array(fields.text({ label: "項目" }), {
        label: "デメリット",
        itemLabel: (p) => p.value,
      }),
    },
  }),
  ProductCard: block({
    label: "商品カード",
    schema: {
      productId: fields.text({ label: "商品ID（src/lib/products.ts のid）" }),
    },
  }),
};

/* ── 記事コレクション（カテゴリごと） ── */
function articleCollection(category: "printers" | "filaments" | "howto", label: string) {
  return collection({
    label,
    slugField: "title",
    path: `content/articles/${category}/*` as const,
    entryLayout: "content",
    format: { contentField: "body" },
    schema: {
      title: fields.slug({
        name: { label: "タイトル" },
        slug: { label: "URLスラッグ（英数字とハイフン）" },
      }),
      description: fields.text({
        label: "説明文（メタディスクリプション・80〜120文字）",
        multiline: true,
      }),
      badge: fields.text({ label: "バッジ（一覧カードに表示）" }),
      badgeColor: fields.text({ label: "バッジ色", defaultValue: "#06b6d4" }),
      breadcrumbLabel: fields.text({ label: "パンくずラベル（短め）" }),
      updatedAt: fields.text({ label: "更新日（例：2026年6月）" }),
      tags: fields.array(fields.text({ label: "タグ" }), {
        label: "タグ",
        itemLabel: (p) => p.value,
      }),
      related: fields.array(
        fields.object({
          href: fields.text({ label: "URL（例：/printers/recommend）" }),
          title: fields.text({ label: "タイトル" }),
          badge: fields.text({ label: "バッジ" }),
          badgeColor: fields.text({ label: "バッジ色", defaultValue: "#06b6d4" }),
        }),
        { label: "関連記事", itemLabel: (p) => p.fields.title.value }
      ),
      body: fields.mdx({
        label: "本文",
        components: articleComponents,
      }),
    },
  });
}


/* ── 商品マスタ（src/data/products.json）。記事の商品カード・ランキングが参照する ── */
const productsSingleton = singleton({
  label: "商品マスタ",
  path: "src/data/products",
  format: { data: "json" },
  schema: {
    items: fields.array(
      fields.object({
        id: fields.text({
          label: "ID（英小文字・数字・ハイフン。記事の productId に書く）",
          validation: { length: { min: 1 } },
        }),
        name: fields.text({ label: "商品名", validation: { length: { min: 1 } } }),
        asin: fields.text({ label: "ASIN（Amazonの商品番号。あれば商品ページへ直接リンク）" }),
        price: fields.text({ label: "価格の目安（例：約3,200円（1kg））" }),
        description: fields.text({ label: "ひとこと説明", multiline: true }),
        keyword: fields.text({ label: "検索キーワード（楽天・Yahoo!・メルカリ用）" }),
        image: fields.text({ label: "画像URL" }),
        links: fields.object(
          {
            amazon: fields.text({ label: "Amazon（直接指定する場合だけ）" }),
            rakuten: fields.text({ label: "楽天（直接指定する場合だけ）" }),
            yahoo: fields.text({ label: "Yahoo!（直接指定する場合だけ）" }),
            mercari: fields.text({ label: "メルカリ（直接指定する場合だけ）" }),
          },
          { label: "リンクの直接指定（空欄なら自動）" }
        ),
      }),
      {
        label: "商品",
        itemLabel: (p) => `${p.fields.name.value || "（名前なし）"}｜${p.fields.id.value}`,
      }
    ),
  },
});

export default config({
  storage: { kind: "local" },
  ui: {
    brand: { name: "3Dプリントラボ 記事管理" },
  },
  collections: {
    printers: articleCollection("printers", "プリンター記事"),
    filaments: articleCollection("filaments", "フィラメント記事"),
    howto: articleCollection("howto", "使い方記事"),
  },
  singletons: {
    products: productsSingleton,
  },
});
