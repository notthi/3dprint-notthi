import {
  amazonSearchUrl,
  amazonUrl,
  rakutenSearchUrl,
  yahooSearchUrl,
  mercariSearchUrl,
} from "@/lib/affiliateConfig";

type ShopLinks = {
  amazon?: string;
  rakuten?: string;
  yahoo?: string;
  mercari?: string;
};

type ProductCardProps = {
  name: string;
  image?: string;
  price?: string;
  description?: string;
  /** ASINを指定するとAmazon商品ページへ直リンク */
  asin?: string;
  /** キーワードを指定すると各ショップの検索URLを自動生成 */
  keyword?: string;
  /** 個別にURLを上書きしたい場合 */
  links?: ShopLinks;
};

const shops = [
  { key: "amazon" as const, label: "Amazon", bg: "bg-[#FF9900]", hover: "hover:bg-[#e68a00]", icon: "🛒" },
  { key: "rakuten" as const, label: "楽天市場", bg: "bg-[#BF0000]", hover: "hover:bg-[#a30000]", icon: "🛍️" },
  { key: "yahoo" as const, label: "Yahoo!", bg: "bg-[#6001D2]", hover: "hover:bg-[#5000b8]", icon: "🔮" },
  { key: "mercari" as const, label: "メルカリ", bg: "bg-[#FF4B4B]", hover: "hover:bg-[#e04343]", icon: "♻️" },
];

const ProductCard = ({ name, image, price, description, asin, keyword, links }: ProductCardProps) => {
  const searchWord = keyword ?? name;

  const resolvedLinks: ShopLinks = {
    amazon: links?.amazon ?? (asin ? amazonUrl(asin) : amazonSearchUrl(searchWord)),
    rakuten: links?.rakuten ?? rakutenSearchUrl(searchWord),
    yahoo: links?.yahoo ?? yahooSearchUrl(searchWord),
    mercari: links?.mercari ?? mercariSearchUrl(searchWord),
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm my-6">
      <div className="flex gap-4">
        {image && (
          <div className="flex-shrink-0">
            <img src={image} alt={name} className="w-24 h-24 object-contain rounded-lg border border-gray-100" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-sm leading-snug">{name}</p>
          {price && <p className="mt-1 text-orange-500 font-bold text-sm">{price}</p>}
          {description && <p className="mt-1 text-xs text-gray-500 leading-relaxed">{description}</p>}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {shops.map((shop) => (
          <a
            key={shop.key}
            href={resolvedLinks[shop.key]}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`flex items-center justify-center gap-1.5 ${shop.bg} ${shop.hover} text-white text-xs font-bold py-2 px-3 rounded-lg transition`}
          >
            <span>{shop.icon}</span>
            <span>{shop.label}で見る</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
