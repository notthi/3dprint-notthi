This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 公開（Cloudflare Workers）

2026-10-22 に Vercel から移行。全ページを `out/` に静的に書き出し、Cloudflare Workers の静的アセットで配信する（設定は `wrangler.jsonc`）。

- GitHub と Cloudflare の Workers Builds がつながっている。`main` にマージすると本番に出る。ほかのブランチは、ビルドごとに確認用のURLが出る
- 手元から出すときは `npm run deploy`（ビルド→`wrangler deploy`）
- ビルドの前に `scripts/check-content.js` が走る。商品IDの欠け・内部リンク切れ・title/description漏れがあればビルドが止まり、本番は前の状態のまま残る
- Keystatic・`/admin`・公開ボタンのAPI は `*.dev.tsx` / `*.dev.ts`。`npm run dev` のときだけ使える
