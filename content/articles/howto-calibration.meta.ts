export const meta = {
  category: "howto" as const,
  slug: "calibration",
  badge: "キャリブレーション",
  badgeColor: "#06b6d4",
  breadcrumbLabel: "キャリブレーション完全ガイド",
  title: "3Dプリンター キャリブレーション完全ガイド【ベッドレベリング・フローレート・温度調整】",
  description:
    "3Dプリンターのキャリブレーション方法を初心者向けに解説。ベッドレベリング・Zオフセット・フローレート・リトラクション・温度塔の手順をステップごとにまとめました。",
  updatedAt: "2026年5月",
  tags: ["キャリブレーション", "ベッドレベリング", "フローレート", "温度塔", "初心者"] as string[],
  toc: [
    { id: "why",         label: "なぜキャリブレーションが必要か" },
    { id: "bed",         label: "ベッドレベリング" },
    { id: "z-offset",    label: "Zオフセット調整" },
    { id: "flow",        label: "フローレート調整" },
    { id: "retraction",  label: "リトラクション設定" },
    { id: "temp",        label: "温度塔（温度キャリブレーション）" },
    { id: "bambu",       label: "Bambu Lab機種の場合" },
    { id: "summary",     label: "まとめ" },
  ],
  related: [
    { href: "/howto/trouble",       title: "印刷失敗トラブル解決ガイド",    badge: "トラブル",   badgeColor: "#ef4444" },
    { href: "/howto/bed-leveling",  title: "ベッドレベリング完全ガイド",     badge: "レベリング", badgeColor: "#06b6d4" },
    { href: "/howto/pla-settings",  title: "PLA印刷設定の完全ガイド",       badge: "PLA設定",   badgeColor: "#22c55e" },
  ],
};
