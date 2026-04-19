import AffiliateCTA from "./AffiliateCTA";

type RankingItemProps = {
  rank: number;
  name: string;
  description: string;
  price: string;
  amazonUrl: string;
  pros: string[];
  cons: string[];
  badge?: string;
  asin?: string;
};

const rankStyle: { [key: number]: string } = {
  1: "bg-yellow-400 text-white",
  2: "bg-gray-300 text-gray-700",
  3: "bg-amber-600 text-white",
};

const RankingItem = ({ rank, name, description, price, amazonUrl, pros, cons, badge, asin }: RankingItemProps) => {
  const imageUrl = asin
    ? "https://images-fe.ssl-images-amazon.com/images/P/" + asin + ".01._SX160_.jpg"
    : null;

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="flex items-start gap-4">
        <div className={"w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 " + (rankStyle[rank] || "bg-gray-100 text-gray-600")}>
          {rank}
        </div>
        <div className="flex-1">
          <div className="flex items-start gap-3 flex-wrap">
            {imageUrl && (
              <a href={amazonUrl} target="_blank" rel="noopener noreferrer nofollow" className="flex-shrink-0">
                <img src={imageUrl} alt={name} width={80} height={80} className="w-20 h-20 object-contain border border-gray-100 rounded" />
              </a>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-lg text-gray-900">{name}</h3>
                {badge && (
                  <span className="text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
                    {badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold text-green-600 mb-1">✓ メリット</p>
              <ul className="space-y-1">{pros.map((p, i) => <li key={i} className="text-xs text-gray-600">• {p}</li>)}</ul>
            </div>
            <div>
              <p className="text-xs font-bold text-red-500 mb-1">✗ デメリット</p>
              <ul className="space-y-1">{cons.map((c, i) => <li key={i} className="text-xs text-gray-600">• {c}</li>)}</ul>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
            <p className="text-sm font-bold text-gray-900">参考価格: <span className="text-orange-500">{price}</span></p>
            <AffiliateCTA href={amazonUrl} label="Amazonで見る" size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RankingItem;
