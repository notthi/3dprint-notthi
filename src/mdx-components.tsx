import type { MDXComponents } from "mdx/types";
import OriginalProductCard from "@/components/ProductCard";
import OriginalRankingItem from "@/components/RankingItem";
import {
  Lead,
  Tip,
  Warn,
  ProsCons,
  SpecList,
  Steps,
  CheckList,
  PriceList,
  CTA,
  FAQ,
} from "@/components/blocks";

type ProductCardMDXProps = {
  productId: string;
  name?: string;
  price?: string;
  description?: string;
};

function ProductCard({ productId, ...rest }: ProductCardMDXProps) {
  return <OriginalProductCard id={productId} {...rest} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 商品系（既存）
    ProductCard,
    RankingItem: OriginalRankingItem,
    // 記事ブロック（ビジュアルエディタ対応）
    Lead,
    Tip,
    Warn,
    ProsCons,
    SpecList,
    Steps,
    CheckList,
    PriceList,
    CTA,
    FAQ,
    ...components,
  };
}
