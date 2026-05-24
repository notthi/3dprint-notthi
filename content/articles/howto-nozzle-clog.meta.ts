export const meta = {
  category: "howto" as const,
  slug: "nozzle-clog",
  badge: "ノズル詰まり",
  badgeColor: "#ef4444",
  breadcrumbLabel: "ノズル詰まりの直し方",
  title: "3Dプリンターのノズル詰まり（クロッグ）の直し方【原因・解決法まとめ】",
  description:
    "3Dプリンターのノズル詰まり（クロッグ）の原因と解決方法を解説。コールドプル・ノズル交換・詰まりを防ぐ設定まで、初心者向けにわかりやすく説明します。",
  updatedAt: "2026年5月",
  tags: ["ノズル詰まり", "クロッグ", "トラブル", "解決法", "メンテナンス"] as string[],
  toc: [
    { id: "cause",      label: "主な原因" },
    { id: "cold-pull",  label: "解決①：コールドプル" },
    { id: "heat",       label: "解決②：温度を上げて押し出す" },
    { id: "replace",    label: "解決③：ノズル交換" },
    { id: "prevention", label: "詰まりを防ぐ予防策" },
    { id: "summary",    label: "まとめ" },
  ],
  related: [
    { href: "/howto/trouble",        title: "3Dプリンタートラブル解決集",       badge: "トラブル",   badgeColor: "#ef4444" },
    { href: "/filaments/dryer",      title: "フィラメント乾燥機おすすめ4選",    badge: "乾燥機",     badgeColor: "#0ea5e9" },
    { href: "/howto/bambu-studio",   title: "Bambu Studioの使い方ガイド",       badge: "Bambu Studio", badgeColor: "#06b6d4" },
  ],
};
