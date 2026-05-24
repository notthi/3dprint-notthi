export const meta = {
  category: "howto" as const,
  slug: "bed-leveling",
  badge: "ベッドレベリング",
  badgeColor: "#06b6d4",
  breadcrumbLabel: "ベッドレベリングのやり方",
  title: "3Dプリンターのベッドレベリングのやり方【自動・手動の違いと設定手順】",
  description:
    "3Dプリンターのベッドレベリング（オートレベリング）のやり方を解説。自動・手動の違い、Bambu Labでの設定手順、うまくいかない時の対処法をまとめました。",
  updatedAt: "2026年5月",
  tags: ["ベッドレベリング", "オートレベリング", "設定", "初心者", "キャリブレーション"] as string[],
  toc: [
    { id: "auto-vs-manual", label: "自動と手動の違い" },
    { id: "bambu",          label: "Bambu Lab機種での手順" },
    { id: "ender3",         label: "Ender-3での手順（半自動）" },
    { id: "z-offset",       label: "Zオフセット調整" },
    { id: "trouble",        label: "うまくいかない場合" },
    { id: "summary",        label: "まとめ" },
  ],
  related: [
    { href: "/howto/beginners",  title: "3Dプリンター初心者ガイド完全版",    badge: "入門",     badgeColor: "#10b981" },
    { href: "/howto/pla-warping", title: "PLAの反り対策完全ガイド",           badge: "反り対策", badgeColor: "#f59e0b" },
    { href: "/howto/trouble",    title: "3Dプリンタートラブル解決集",         badge: "トラブル", badgeColor: "#ef4444" },
  ],
};
