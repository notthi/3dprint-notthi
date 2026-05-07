import type { Metadata } from "next";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "記事管理 | 3Dプリントラボ",
  robots: { index: false, follow: false },
};

type DraftEntry = {
  file: string;
  title: string;
  href: string;
  category: string;
  status: "draft" | "review" | "ready";
  updatedAt: string;
};

async function getDrafts(): Promise<DraftEntry[]> {
  try {
    const filePath = path.join(process.cwd(), "docs", "draft-status.json");
    const raw = await readFile(filePath, "utf-8");
    return JSON.parse(raw) as DraftEntry[];
  } catch {
    return [];
  }
}

const categoryLabel: Record<string, string> = {
  filaments: "フィラメント",
  printers:  "プリンター",
  howto:     "使い方",
};

const categoryColor: Record<string, string> = {
  filaments: "#f59e0b",
  printers:  "#06b6d4",
  howto:     "#10b981",
};

const statusStyle: Record<string, { bg: string; color: string; border: string; label: string }> = {
  draft:  { bg: "rgba(245,158,11,0.1)",  color: "#f59e0b", border: "rgba(245,158,11,0.3)",  label: "下書き" },
  review: { bg: "rgba(139,92,246,0.1)",  color: "#8b5cf6", border: "rgba(139,92,246,0.3)",  label: "レビュー中" },
  ready:  { bg: "rgba(16,185,129,0.1)",  color: "#10b981", border: "rgba(16,185,129,0.3)",  label: "公開準備完了" },
};

export default async function AdminPage() {
  const drafts = await getDrafts();
  const registeredHrefs = new Set(articles.map((a) => a.href));

  const byCategory = {
    printers:  articles.filter((a) => a.category === "printers"),
    filaments: articles.filter((a) => a.category === "filaments"),
    howto:     articles.filter((a) => a.category === "howto"),
  };

  return (
    <main style={{ backgroundColor: "#0f172a", minHeight: "100vh", padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        {/* ヘッダー */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>ホーム</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#06b6d4" }}>記事管理</span>
          </p>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#f1f5f9", marginBottom: "0.25rem" }}>
            記事管理ダッシュボード
          </h1>
          <p style={{ color: "#475569", fontSize: "0.8rem" }}>noindex — 検索エンジンにインデックスされません</p>
        </div>

        {/* サマリーカード */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { label: "公開済み記事",   value: articles.length, color: "#10b981" },
            { label: "下書き",         value: drafts.length,   color: "#f59e0b" },
            { label: "公開準備完了",   value: drafts.filter((d) => d.status === "ready").length, color: "#8b5cf6" },
          ].map((item) => (
            <div key={item.label} style={{
              backgroundColor: "#1e293b", border: "1px solid #334155",
              borderRadius: "0.75rem", padding: "1.25rem", textAlign: "center",
            }}>
              <p style={{ fontSize: "2rem", fontWeight: "800", color: item.color, margin: "0 0 0.25rem" }}>
                {item.value}
              </p>
              <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* 下書き一覧 */}
        {drafts.length > 0 && (
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{
              fontSize: "1rem", fontWeight: "700", color: "#f59e0b",
              borderLeft: "4px solid #f59e0b", paddingLeft: "0.75rem", marginBottom: "1rem",
            }}>
              下書き・準備中（{drafts.length}件）
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {drafts.map((draft) => {
                const ss = statusStyle[draft.status] ?? statusStyle.draft;
                const isRegistered = registeredHrefs.has(draft.href);
                return (
                  <div key={draft.href} style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    backgroundColor: "#1e293b",
                    border: `1px solid ${ss.border}`,
                    borderRadius: "0.625rem", padding: "0.75rem 1.25rem",
                  }}>
                    <span style={{
                      backgroundColor: ss.bg, color: ss.color, border: `1px solid ${ss.border}`,
                      borderRadius: "9999px", padding: "0.1rem 0.6rem",
                      fontSize: "0.7rem", fontWeight: "700", flexShrink: 0,
                    }}>{ss.label}</span>
                    <span style={{
                      backgroundColor: "rgba(6,182,212,0.08)", color: categoryColor[draft.category],
                      borderRadius: "9999px", padding: "0.1rem 0.6rem",
                      fontSize: "0.7rem", fontWeight: "600", flexShrink: 0,
                    }}>{categoryLabel[draft.category]}</span>
                    <span style={{ color: "#f1f5f9", fontSize: "0.875rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {draft.title}
                    </span>
                    <span style={{ color: "#475569", fontSize: "0.75rem", flexShrink: 0 }}>{draft.updatedAt}</span>
                    {isRegistered && (
                      <Link href={draft.href} style={{ color: "#06b6d4", fontSize: "0.75rem", flexShrink: 0, textDecoration: "none", fontWeight: "600" }}>
                        開く →
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* カテゴリ別 公開済み記事 */}
        {(Object.entries(byCategory) as [string, typeof articles][]).map(([cat, items]) => (
          <section key={cat} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{
              fontSize: "1rem", fontWeight: "700",
              color: categoryColor[cat],
              borderLeft: `4px solid ${categoryColor[cat]}`,
              paddingLeft: "0.75rem", marginBottom: "1rem",
            }}>
              {categoryLabel[cat]}（{items.length}件）
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {items.map((article) => (
                <div key={article.href} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  backgroundColor: "#1e293b", border: "1px solid #334155",
                  borderRadius: "0.625rem", padding: "0.75rem 1.25rem",
                }}>
                  <span style={{
                    backgroundColor: "rgba(16,185,129,0.15)", color: "#10b981",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: "9999px", padding: "0.1rem 0.6rem",
                    fontSize: "0.7rem", fontWeight: "700", flexShrink: 0,
                  }}>公開済み</span>
                  <span style={{
                    backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4",
                    border: "1px solid rgba(6,182,212,0.25)",
                    borderRadius: "9999px", padding: "0.1rem 0.6rem",
                    fontSize: "0.7rem", fontWeight: "600", flexShrink: 0,
                  }}>{article.badge}</span>
                  <span style={{ color: "#f1f5f9", fontSize: "0.875rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {article.title}
                  </span>
                  <span style={{ color: "#475569", fontSize: "0.75rem", flexShrink: 0 }}>{article.updatedAt}</span>
                  <Link href={article.href} style={{
                    color: "#06b6d4", fontSize: "0.75rem", flexShrink: 0,
                    textDecoration: "none", fontWeight: "600",
                  }}>開く →</Link>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* 次に書く記事候補 */}
        <section>
          <h2 style={{
            fontSize: "1rem", fontWeight: "700", color: "#8b5cf6",
            borderLeft: "4px solid #8b5cf6", paddingLeft: "0.75rem", marginBottom: "1rem",
          }}>
            次に書く記事候補
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { priority: "S-3", href: "/filaments/abs",             title: "ABSフィラメント おすすめ5選・印刷設定ガイド" },
              { priority: "S-5", href: "/printers/bambu-p1s-review", title: "Bambu Lab P1S レビュー・A1との違いを徹底比較" },
              { priority: "A-1", href: "/howto/bambu-studio",        title: "Bambu Studio 使い方 完全ガイド【初心者向け】" },
              { priority: "A-2", href: "/howto/orca-slicer",         title: "OrcaSlicer 使い方と設定【Bambu Lab・各社対応】" },
              { priority: "A-3", href: "/filaments/tpu",             title: "TPUフィラメント おすすめ・使い方" },
              { priority: "A-8", href: "/howto/bambu-ams",           title: "Bambu Lab AMS 完全ガイド" },
            ].map((item) => (
              <div key={item.href} style={{
                display: "flex", alignItems: "center", gap: "1rem",
                backgroundColor: "#1e293b", border: "1px solid #1e293b",
                borderRadius: "0.625rem", padding: "0.75rem 1.25rem",
              }}>
                <span style={{
                  backgroundColor: "rgba(139,92,246,0.1)", color: "#8b5cf6",
                  border: "1px solid rgba(139,92,246,0.3)",
                  borderRadius: "9999px", padding: "0.1rem 0.6rem",
                  fontSize: "0.7rem", fontWeight: "700", flexShrink: 0,
                }}>{item.priority}</span>
                <span style={{ color: "#94a3b8", fontSize: "0.875rem", flex: 1 }}>{item.title}</span>
                <span style={{ color: "#334155", fontSize: "0.75rem", fontFamily: "monospace" }}>{item.href}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
