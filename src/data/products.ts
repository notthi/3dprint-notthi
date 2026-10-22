// 商品マスタ。正本は src/data/products.json（Keystaticの「商品マスタ」画面から編集できる）。
// 記事の <ProductCard productId="..."> と <RankingItem productId="..."> はここを参照する。
// 存在しないIDを記事で使うと、ビルド前のチェック（scripts/check-content.js）で止まる。
import data from "./products.json";

export type Product = {
  id?: string;
  name: string;
  asin?: string;
  price?: string;
  description?: string;
  keyword?: string;
  image?: string;
  links?: { amazon?: string; rakuten?: string; yahoo?: string; mercari?: string };
};

// Keystaticは空欄を "" で保存するので、空の値は「指定なし」として取り除く
// （空の links.amazon などが残ると、空のリンクが出てしまうため）。
function clean<T extends object>(obj: T): T {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === "" || v === null || v === undefined) continue;
    if (typeof v === "object") {
      const inner = clean(v as object);
      if (Object.keys(inner).length) out[k] = inner;
    } else {
      out[k] = v;
    }
  }
  return out as T;
}

export const products: Record<string, Product> = Object.fromEntries(
  (data.items as Product[])
    .filter((p) => p.id)
    .map((p) => [p.id as string, clean(p)])
);

export function getProduct(id: string): Product | undefined {
  return products[id];
}
