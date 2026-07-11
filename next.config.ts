import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // 親ディレクトリのlockfileに惑わされないようルートを固定（複数lockfile警告の抑制）
  turbopack: { root: __dirname },
};

const withMDX = createMDX({
  options: {
    // Turbopack対応のためプラグインは文字列で指定する（Next 16公式仕様）
    remarkPlugins: ["remark-gfm", "remark-frontmatter"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
