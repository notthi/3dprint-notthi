import Link from "next/link";
type Props = { title: string; description: string; href: string; category: string; date?: string };
const ArticleCard = ({ title, description, href, category, date }: Props) => (
  <Link href={href} className="block group">
    <article className="border border-gray-200 rounded-lg p-5 hover:border-orange-300 hover:shadow-sm transition bg-white h-full">
      <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded">{category}</span>
      <h2 className="mt-3 font-bold text-gray-900 group-hover:text-orange-500 transition leading-snug">{title}</h2>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">{description}</p>
      {date && <p className="mt-3 text-xs text-gray-400">{date}</p>}
    </article>
  </Link>
);
export default ArticleCard;
