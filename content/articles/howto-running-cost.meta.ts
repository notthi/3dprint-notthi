export const meta = {
  category: "howto" as const,
  slug: "running-cost",
  badge: "コスト計算",
  badgeColor: "#06b6d4",
  breadcrumbLabel: "ランニングコスト計算",
  title: "3Dプリンターのランニングコスト完全計算ガイド【電気代・フィラメント代】",
  description:
    "3Dプリンターのランニングコスト（電気代・フィラメント代・消耗品代）を計算する方法を解説。1時間・1kgあたりのコストと、月々の維持費の目安をまとめました。",
  updatedAt: "2026年5月",
  tags: ["ランニングコスト", "電気代", "フィラメント", "計算", "コスト"] as string[],
  toc: [
    { id: "filament",     label: "①フィラメント代（最大の変動費）" },
    { id: "electricity",  label: "②電気代" },
    { id: "consumables",  label: "③消耗品代" },
    { id: "total",        label: "月々のトータルコスト試算" },
    { id: "reduce",       label: "コストを下げるコツ" },
    { id: "summary",      label: "まとめ" },
  ],
  related: [
    { href: "/howto/side-business",       title: "3Dプリンターで副業を始める方法",  badge: "副業ガイド",      badgeColor: "#10b981" },
    { href: "/filaments/pla-recommend",   title: "PLAフィラメントおすすめ8選",     badge: "PLA",             badgeColor: "#10b981" },
    { href: "/filaments/petg-recommend",  title: "PETGフィラメントおすすめ5選",    badge: "PETG",            badgeColor: "#06b6d4" },
    { href: "/howto/filament-storage",    title: "フィラメントの保管・乾燥方法",    badge: "フィラメント保管", badgeColor: "#06b6d4" },
  ],
};
