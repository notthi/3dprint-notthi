export const meta = {
  category: "printers" as const,
  slug: "price-guide",
  badge: "価格ガイド",
  badgeColor: "#8b5cf6",
  breadcrumbLabel: "価格帯別おすすめガイド",
  title: "3Dプリンター 価格帯別おすすめ【2025年版】いくら出せばいい？",
  description:
    "3Dプリンターの価格帯ごとに何が変わるかを解説。1〜3万円・3〜7万円・7〜15万円・15万円以上の各ゾーンでおすすめ機種を紹介します。",
  updatedAt: "2026年6月",
  tags: ["価格", "比較", "初心者", "おすすめ", "選び方"] as string[],
  // 見出しIDは rehype-slug の自動生成値（Phase 3 でtoc自体を自動抽出化予定）
  toc: [
    { id: "価格帯マップ", label: "価格帯マップ" },
    { id: "2000040000入門ゾーン", label: "¥2〜4万：入門ゾーン" },
    { id: "4000070000速さ機能アップゾーン", label: "¥4〜7万：速さ・機能アップゾーン" },
    { id: "70000150000マルチカラーai監視ゾーン", label: "¥7〜15万：マルチカラー・AI監視ゾーン" },
    { id: "150000250000フルスペックゾーン", label: "¥15万〜：フルスペックゾーン" },
    { id: "250000業務寄りゾーン", label: "¥25万〜：業務寄りゾーン" },
    { id: "よくある疑問", label: "よくある疑問" },
  ],
  related: [
    { href: "/printers/recommend", title: "家庭用3Dプリンターおすすめ7選", badge: "ランキング" },
    { href: "/printers/creality-comparison", title: "Creality機種比較（入門〜中級）", badge: "比較", badgeColor: "#06b6d4" },
    { href: "/howto/beginners", title: "3Dプリンター初心者ガイド", badge: "初心者", badgeColor: "#10b981" },
  ],
};
