import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    // Turbopack対応のためプラグインは文字列で指定する（Next 16公式仕様）
    remarkPlugins: ["remark-gfm", "remark-frontmatter"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default function config(phase: string): NextConfig {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  return withMDX({
    // 本番は全ページを静的ファイルに書き出し（out/）、Cloudflare Workers の静的アセットで配信する。
    // 2026-10-22 Vercel から移行（Vercel無料プランは広告・アフィリエイトのサイトに使えないため）。
    // npm run dev では書き出しモードにしない（Keystatic の画面とAPIが動かなくなるため）。
    output: isDev ? undefined : "export",
    // 画像の変換サーバーがないので、画像はそのまま配信する
    images: { unoptimized: true },
    // *.dev.tsx / *.dev.ts は自分のMacの npm run dev だけで使うページ
    // （Keystatic・記事管理 /admin・公開ボタンのAPI）。本番の書き出しには含めない。
    pageExtensions: isDev
      ? ["dev.tsx", "dev.ts", "js", "jsx", "md", "mdx", "ts", "tsx"]
      : ["js", "jsx", "md", "mdx", "ts", "tsx"],
    // ルートをプロジェクトに固定する。親フォルダ（Dropbox/Programing等）に
    // node_modulesやlockfileが紛れ込むと、ワークスペース推定が親を指して
    // フォルダ全体（数十GB）を監視しようとしメモリが暴走するため必須。
    // 注意: __dirname は使わない（TS設定は変換されて実行されるため誤解決の恐れ）。
    // devサーバーは必ずプロジェクトルートから起動すること（npm run dev）。
    turbopack: { root: process.cwd() },
  });
}
