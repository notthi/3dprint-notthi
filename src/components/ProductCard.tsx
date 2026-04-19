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
  price?: string;
  description?: string;
  asin?: string;
  keyword?: string;
  image?: string;
  links?: ShopLinks;
};

const shops = [
  { key: "amazon" as const, label: "Amazon", bg: "bg-[#FF9900]", hover: "hover:bg-[#e68a00]" },
  { key: "rakuten" as const, label: "楽天市場", bg: "bg-[#BF0000]", hover: "hover:bg-[#a30000]" },
  { key: "yahoo" as const, label: "Yahoo!", bg: "bg-[#6001D2]", hover: "hover:bg-[#5000b8]" },
  { key: "mercari" as const, label: "メルカリ", bg: "bg-[#FF4B4B]", hover: "hover:bg-[#e04343]" },
];

const ProductCard = ({ name, price, description, asin, keyword, image, links }: ProductCardProps) => {
  const searchWord = keyword ?? name;
  const resolvedLinks: ShopLinks = {
    amazon: links?.amazon ?? (asin ? amazonUrl(asin) : amazonSearchUrl(searchWord)),
    rakuten: links?.rakuten ?? rakutenSearchUrl(searchWord),
    yahoo: links?.yahoo ?? yahooSearchUrl(searchWord),
    mercari: links?.mercari ?? mercariSearchUrl(searchWord),
  };

  const imageUrl = image ?? (asin
    ? "https://images-fe.ssl-images-amazon.com/images/P/" + asin + ".01._SX160_.jpg"
    : null);

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm my-6">
      <div className="flex gap-4 items-start">
        {imageUrl && (
          <a href={resolvedLinks.amazon} target="_blank" rel="noopener noreferrer nofollow" className="flex-shrink-0">
            <img
              src={imageUrl}
              alt={name}
              width={80}
              height={80}
              className="w-20 h-20 object-contain rounded border border-gray-100"
            />
          </a>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-sm leading-snug">{name}</p>
          {price && (
            <p className="mt-1 text-sm text-gray-700">
              <span className="text-orange-500 font-bold">{price}</span>
              <span className="text-xs text-gray-400 ml-1">（目安）</span>
            </p>
          )}
          {description && <p className="mt-1 text-xs text-gray-500 leading-relaxed">{description}</p>}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {shops.map((shop) => (
          <a
            key={shop.key}
            href={resolvedLinks[shop.key]}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={"flex items-center justify-center gap-1 " + shop.bg + " " + shop.hover + " text-white text-xs font-bold py-2 px-2 rounded-lg transition"}
          >
            {shop.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
