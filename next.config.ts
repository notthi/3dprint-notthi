import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // ルートをプロジェクトに固定する。親フォルダ（Dropbox/Programing等）に
  // node_modulesやlockfileが紛れ込むと、ワークスペース推定が親を指して
  // フォルダ全体（数十GB）を監視しようとしメモリが暴走するため必須。
  // 注意: __dirname は使わない（TS設定は変換されて実行されるため誤解決の恐れ）。
  // devサーバーは必ずプロジェクトルートから起動すること（npm run dev）。
  turbopack: { root: process.cwd() },
};

const withMDX = createMDX({
  options: {
    // Turbopack対応のためプラグインは文字列で指定する（Next 16公式仕様）
    remarkPlugins: ["remark-gfm", "remark-frontmatter"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
