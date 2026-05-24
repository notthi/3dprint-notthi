export const meta = {
  category: "howto" as const,
  slug: "infill-guide",
  badge: "インフィル",
  badgeColor: "#06b6d4",
  breadcrumbLabel: "インフィル設定ガイド",
  title: "3Dプリンターのインフィル（充填率）設定ガイド【強度・速度・素材別】",
  description:
    "3Dプリンターのインフィル（充填率）の設定方法を解説。用途別の推奨パーセント・パターンの違い・強度と速度のバランスの取り方をまとめました。",
  updatedAt: "2026年5月",
  tags: ["インフィル", "充填率", "設定", "強度", "スライサー"] as string[],
  toc: [
    { id: "density",   label: "充填率の目安" },
    { id: "patterns",  label: "インフィルパターンの種類" },
    { id: "by-use",    label: "用途別の推奨設定" },
    { id: "shell",     label: "シェルとの関係" },
    { id: "bambu",     label: "Bambu Studioでの設定方法" },
    { id: "summary",   label: "まとめ" },
  ],
  related: [
    { href: "/howto/slicer",         title: "スライサーソフトの選び方・比較",   badge: "スライサー",  badgeColor: "#06b6d4" },
    { href: "/howto/support",        title: "サポート材の種類・設定・外し方",   badge: "サポート",    badgeColor: "#06b6d4" },
    { href: "/howto/trouble",        title: "3Dプリンタートラブル解決集",       badge: "トラブル",    badgeColor: "#ef4444" },
  ],
};
