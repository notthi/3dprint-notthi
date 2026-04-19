type Props = { href: string; label?: string; size?: "sm" | "md" | "lg" };
const AffiliateCTA = ({ href, label = "Amazonで購入する", size = "md" }: Props) => {
  const sizes = { sm: "px-3 py-1.5 text-xs", md: "px-4 py-2 text-sm", lg: "px-6 py-3 text-base" };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow"
      className={`inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition ${sizes[size]}`}>
      🛒 {label}
    </a>
  );
};
export default AffiliateCTA;
