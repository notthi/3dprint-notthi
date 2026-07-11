# 3dprint.notthi.com 全記事MDX移管計画

作成日: 2026-04-26
対象プロジェクト: `3dprint-notthi`
サイト: https://3dprint.notthi.com

## 方針

既存の記事ページをすべてMDX管理へ移管する。

目的は、今後100記事規模まで記事数を増やしても管理しやすい構成にすること。

- 記事本文は `content/articles/*.mdx` で管理
- 商品カード・ランキング・CTAなどはReactコンポーネントとして継続利用
- 商品データは `src/data/products.ts` に集約
- 既存URLはできるだけ維持する
- sitemap、記事一覧、カテゴリ一覧、関連記事を自動化する

## 判断理由

- 現在の記事数なら全移管コストがまだ低い
- TSX記事とMDX記事が混在すると将来管理が複雑になる
- SEO記事を量産するならMarkdown/MDXの方が扱いやすい
- Git管理・AI記事生成・レビューとの相性が良い
- CMS導入より軽く、Vercel/Next.js構成に合う

## 目標構成

```txt
content/
  articles/
    printers-recommend.mdx
    printers-beginners.mdx
    printers-home-use.mdx
    filaments-recommend.mdx
    filaments-pla.mdx
    filaments-petg.mdx
    howto-beginners.mdx
    howto-trouble.mdx

src/
  app/
    articles/
      page.tsx
      [slug]/page.tsx
  components/
    ProductCard.tsx
    RankingItem.tsx
    FeaturedProduct.tsx
    AffiliateCTA.tsx
  lib/
    articles.ts
  data/
    products.ts
```

※ URL方針によっては `/articles/[slug]` ではなく、既存URL `/printers/recommend` などでMDXを読む構成にする。

## 記事メタデータ案

```mdx
---
title: "家庭用3Dプリンターおすすめ7選【2026年版】初心者でも失敗しない選び方"
slug: "printers-recommend"
path: "/printers/recommend"
category: "printers"
description: "家庭用に最適な3Dプリンターを徹底比較。価格・精度・使いやすさを総合評価したランキング形式で解説。"
publishedAt: "2026-04-26"
updatedAt: "2026-04-26"
tags:
  - 3Dプリンター
  - おすすめ
  - 初心者
priority: 0.9
---
```

## ポチップ風コンポーネント方針

MDX移管後も、商品カード・ランキング・アフィリエイトCTAは継続利用する。

MDX本文では以下のように呼び出す想定。

```mdx
<ProductCard productId="bambu-a1-mini" />

<RankingItem rank={1} productId="bambu-a1-mini" />

<AffiliateCTA productId="pla-esun-white" />
```

商品情報はMDXに直書きせず、`src/data/products.ts` に集約する。

これにより、リンク変更・商品名変更・ボタン文言変更を一括管理できる。

## 移管対象記事

### printers

- [ ] `/printers/recommend` - 家庭用3Dプリンターおすすめ7選
- [ ] `/printers/beginners` - 初心者向け3Dプリンターの選び方
- [ ] `/printers/home-use` - 家庭用3Dプリンターの選び方

### filaments

- [ ] `/filaments/recommend` - PLAフィラメントおすすめ8選
- [ ] `/filaments/pla` - PLAフィラメントとは
- [ ] `/filaments/petg` - PETGフィラメントとは

### howto

- [ ] `/howto/beginners` - 3Dプリンター初心者ガイド完全版
- [ ] `/howto/trouble` - トラブル解決ガイド

## 固定ページとして残す候補

以下は記事ではなく固定ページとして残す。

- `/` - トップページ
- `/printers` - カテゴリトップ
- `/filaments` - カテゴリトップ
- `/howto` - カテゴリトップ
- `/about` - サイトについて
- `/privacy` - プライバシーポリシー

## 実施手順

### Phase 1: 現状確認

- [ ] Gitの最新版確認
- [ ] 作業ツリーの差分確認
- [ ] 既存記事ページの棚卸し
- [ ] 固定ページと記事ページの分類

### Phase 2: MDX基盤作成

- [ ] MDX関連パッケージ導入
- [ ] `content/articles/` 作成
- [ ] `src/lib/articles.ts` 作成
- [ ] 記事メタデータ型定義
- [ ] MDXレンダリング設定
- [ ] MDXから既存Reactコンポーネントを呼べるようにする

### Phase 3: 1記事で試験移管

- [ ] `/filaments/pla` など1記事をMDX化
- [ ] 表示確認
- [ ] metadata確認
- [ ] 商品カード表示確認
- [ ] `npm run lint`
- [ ] `npm run build`

### Phase 4: 全記事移管

- [ ] printers系記事をMDX化
- [ ] filaments系記事をMDX化
- [ ] howto系記事をMDX化
- [ ] 旧TSX記事ページをMDX読み込みページに置き換え
- [ ] 内部リンク確認

### Phase 5: 自動化

- [ ] sitemapをMDX記事メタデータから自動生成
- [ ] 記事一覧ページを自動生成
- [ ] カテゴリ別記事一覧を自動生成
- [ ] 関連記事表示を自動生成
- [ ] OGP/metadataを記事ごとに自動生成

### Phase 6: 量産体制

- [ ] 記事テンプレート作成
- [ ] カテゴリ設計を確定
- [ ] 追加候補20記事をリスト化
- [ ] 優先順位を決定
- [ ] MDXで記事追加を開始

## URL方針

SEO安全性を優先し、既存URLは維持する。

例:

```txt
/printers/recommend
/filaments/pla
/howto/trouble
```

内部実装はMDX化しても、公開URLは変えない。

## 注意点

- いきなり全記事を書き換えず、まず1記事で型を固める
- 既存のアフィリエイトリンク・ValueCommerce設定を壊さない
- 商品データをMDXに分散させない
- sitemapとcanonicalのURLズレに注意
- 旧URLを変える場合はリダイレクト必須

## 次の推奨アクション

1. 作業ツリー差分を整理する
2. MDX基盤を追加する
3. `/filaments/pla` を試験移管する
4. ビルド確認する
5. 問題なければ全記事へ横展開する
