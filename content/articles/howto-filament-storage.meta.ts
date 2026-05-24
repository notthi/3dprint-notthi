export const meta = {
  category: "howto" as const,
  slug: "filament-storage",
  badge: "フィラメント保管",
  badgeColor: "#06b6d4",
  breadcrumbLabel: "フィラメントの保管・乾燥",
  title: "フィラメントの保管・乾燥方法【完全ガイド】湿気による失敗を防ぐ",
  description:
    "3Dプリンターのフィラメント保管と乾燥方法を解説。素材別の乾燥温度・時間、おすすめのフィラメントドライヤー、防湿ケースの選び方をまとめました。",
  updatedAt: "2026年5月",
  tags: ["フィラメント", "保管", "乾燥", "ドライヤー", "湿気対策"] as string[],
  toc: [
    { id: "symptom",    label: "吸湿するとどうなるか" },
    { id: "humidity",   label: "素材別の吸湿しやすさ" },
    { id: "storage",    label: "保管方法3段階" },
    { id: "dryer",      label: "おすすめドライヤー" },
    { id: "temp-table", label: "素材別の乾燥設定" },
    { id: "check",      label: "吸湿の確認方法" },
    { id: "summary",    label: "まとめ" },
  ],
  related: [
    { href: "/filaments/dryer",         title: "フィラメント乾燥機おすすめ4選",      badge: "乾燥機",    badgeColor: "#0ea5e9" },
    { href: "/howto/nozzle-clog",       title: "ノズル詰まりの直し方",                badge: "ノズル詰まり", badgeColor: "#ef4444" },
    { href: "/filaments/pla-vs-petg",   title: "PLAとPETGどっちを選ぶ？",           badge: "比較",       badgeColor: "#06b6d4" },
  ],
};
