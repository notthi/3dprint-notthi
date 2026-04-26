import type { MDXComponents } from "mdx/types";
import OriginalProductCard from "@/components/ProductCard";
import OriginalRankingItem from "@/components/RankingItem";

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
    ProductCard,
    RankingItem: OriginalRankingItem,
    ...components,
  };
}
