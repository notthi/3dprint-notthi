import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // 注意: turbopack.root を __dirname で指定してはいけない（TS設定は変換されて実行されるため
  // 誤ったディレクトリを指し、ウォッチャが暴走してメモリを食い尽くす）。
  // 「複数lockfile」警告は無害なので放置でよい。
};

const withMDX = createMDX({
  options: {
    // Turbopack対応のためプラグインは文字列で指定する（Next 16公式仕様）
    remarkPlugins: ["remark-gfm", "remark-frontmatter"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
