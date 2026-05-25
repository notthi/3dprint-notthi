export const meta = {
  category: "howto" as const,
  slug: "trouble",
  badge: "トラブル",
  badgeColor: "#ef4444",
  breadcrumbLabel: "トラブル解決",
  title: "3Dプリンター トラブル解決ガイド【2026年版】よくある失敗と対策を徹底解説",
  description:
    "3Dプリンターのよくあるトラブル（貼り付かない・詰まり・反り・糸引き・層剥離）の原因と解決策を網羅的にまとめました。初心者から中級者まで役立つ対処法ガイドです。",
  updatedAt: "2026年4月",
  tags: ["トラブル", "失敗", "対策", "メンテナンス"] as string[],
  toc: [
    { id: "no-stick", label: "ベッドに貼り付かない" },
    { id: "clog", label: "フィラメントが詰まる" },
    { id: "warping", label: "反り（ワーピング）" },
    { id: "stringing", label: "糸引き（ストリング）" },
    { id: "delamination", label: "層剥離・積層割れ" },
    { id: "under-extrusion", label: "アンダーエクストルージョン" },
    { id: "checklist", label: "印刷前チェックリスト" },
  ],
  related: [
    { href: "/howto/calibration",  title: "キャリブレーション完全ガイド",         badge: "キャリブレーション", badgeColor: "#06b6d4" },
    { href: "/howto/nozzle-clog",  title: "ノズル詰まりの原因と解消法",            badge: "ノズル詰まり",      badgeColor: "#ef4444" },
    { href: "/howto/warping-guide", title: "反り（ワーピング）対策完全ガイド",     badge: "反り対策",          badgeColor: "#06b6d4" },
    { href: "/howto/beginners",    title: "3Dプリンター初心者ガイド完全版",         badge: "入門",             badgeColor: "#10b981" },
  ],
};
