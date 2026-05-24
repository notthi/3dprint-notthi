export const meta = {
  category: "howto" as const,
  slug: "warping-guide",
  badge: "反り対策",
  badgeColor: "#f59e0b",
  breadcrumbLabel: "反り（ワーピング）対策ガイド",
  title: "3Dプリンターの反り（ワーピング）対策ガイド【原因・解決法まとめ】",
  description:
    "3Dプリンターの反り（ワーピング）の原因と対策を解説。素材別の温度設定、ブリム・ラフトの使い方、ベッド定着を改善する方法を初心者向けにまとめました。",
  updatedAt: "2026年5月",
  tags: ["反り", "ワーピング", "トラブル", "設定", "ベッド定着"] as string[],
  toc: [
    { id: "cause",     label: "反りが起きる原因" },
    { id: "materials", label: "素材別の反りやすさ" },
    { id: "checklist", label: "反り対策チェックリスト" },
    { id: "firstlayer", label: "第一層の確認方法" },
    { id: "summary",   label: "まとめ" },
  ],
  related: [
    { href: "/howto/pla-warping",       title: "PLAの反り対策5選",             badge: "PLA反り",  badgeColor: "#ef4444" },
    { href: "/howto/bed-leveling",      title: "ベッドレベリングのやり方",       badge: "レベリング", badgeColor: "#06b6d4" },
    { href: "/howto/trouble",           title: "3Dプリンタートラブル解決集",     badge: "トラブル",  badgeColor: "#ef4444" },
  ],
};
