export const meta = {
  category: "printers" as const,
  slug: "types",
  badge: "種類解説",
  badgeColor: "#8b5cf6",
  breadcrumbLabel: "3Dプリンターの種類",
  title: "3Dプリンターの種類を解説【FDM・光造形・SLSの違いと選び方】",
  description:
    "3Dプリンターの主な種類（FDM・MSLA/LCD・SLS・SLA）の違いを初心者向けに解説。家庭用で選ぶべき方式と、用途別のおすすめをまとめました。",
  updatedAt: "2026年5月",
  tags: ["種類", "FDM", "光造形", "SLS", "選び方", "初心者"] as string[],
  toc: [
    { id: "overview",   label: "3Dプリンターの主な種類" },
    { id: "fdm",        label: "FDM（熱溶解積層）" },
    { id: "msla",       label: "MSLA（LCD光造形）" },
    { id: "sla",        label: "SLA（ステレオリソグラフィー）" },
    { id: "sls",        label: "SLS（選択的レーザー焼結）" },
    { id: "compare",    label: "FDM vs 光造形 比較" },
    { id: "summary",    label: "まとめ" },
  ],
  related: [
    { href: "/printers/fdm-vs-resin",       title: "FDMと光造形どっちを買う？",       badge: "比較",    badgeColor: "#06b6d4" },
    { href: "/printers/bambu-a1-mini-review", title: "Bambu Lab A1 Mini レビュー",    badge: "レビュー", badgeColor: "#06b6d4" },
    { href: "/printers/beginners",           title: "初心者向け3Dプリンター選び方",    badge: "初心者",  badgeColor: "#10b981" },
  ],
};
