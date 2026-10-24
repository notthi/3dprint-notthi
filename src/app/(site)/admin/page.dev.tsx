import type { Metadata } from "next";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";
import { articles } from "@/lib/articles";
import PublishButton from "@/components/admin/PublishButton";

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
  filaments: "#c98a1b",
  printers:  "#a0402e",
  howto:     "#2f7d4f",
};

const statusStyle: Record<string, { bg: string; color: string; border: string; label: string }> = {
  draft:  { bg: "rgba(245,158,11,0.1)",  color: "#c98a1b", border: "rgba(245,158,11,0.3)",  label: "下書き" },
  review: { bg: "rgba(74,118,160,0.1)",  color: "#4a76a0", border: "rgba(74,118,160,0.3)",  label: "レビュー中" },
  ready:  { bg: "rgba(47,125,79,0.1)",  color: "#2f7d4f", border: "rgba(47,125,79,0.3)",  label: "公開準備完了" },
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
    <main style={{ backgroundColor: "#f2ece2", minHeight: "100vh", padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        {/* ヘッダー */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ color: "#6b7378", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
            <Link href="/" style={{ color: "#6b7378", textDecoration: "none" }}>ホーム</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#a0402e" }}>記事管理</span>
          </p>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#1e2a30", marginBottom: "0.25rem" }}>
            記事管理ダッシュボード
          </h1>
          <p style={{ color: "#8a8f93", fontSize: "0.8rem" }}>noindex — 検索エンジンにインデックスされません</p>
        </div>

        {/* 編集・公開アクション（ローカル環境で使用） */}
        <div style={{
          display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap",
          backgroundColor: "#fffcf7", border: "1px solid #e4dccd",
          borderRadius: "0.75rem", padding: "1.25rem", marginBottom: "2.5rem",
        }}>
          <a href="/keystatic" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "#a0402e", color: "#f2ece2", fontWeight: 700,
            fontSize: "0.9rem", padding: "0.625rem 1.5rem", borderRadius: "0.5rem",
            textDecoration: "none",
          }}>
            ✏️ 記事を編集（ブロックエディタ）
          </a>
          <PublishButton />
        </div>

        {/* サマリーカード */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { label: "公開済み記事",   value: articles.length, color: "#2f7d4f" },
            { label: "下書き",         value: drafts.length,   color: "#c98a1b" },
            { label: "公開準備完了",   value: drafts.filter((d) => d.status === "ready").length, color: "#4a76a0" },
          ].map((item) => (
            <div key={item.label} style={{
              backgroundColor: "#fffcf7", border: "1px solid #e4dccd",
              borderRadius: "0.75rem", padding: "1.25rem", textAlign: "center",
            }}>
              <p style={{ fontSize: "2rem", fontWeight: "800", color: item.color, margin: "0 0 0.25rem" }}>
                {item.value}
              </p>
              <p style={{ color: "#5c6469", fontSize: "0.8rem", margin: 0 }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* 下書き一覧 */}
        {drafts.length > 0 && (
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{
              fontSize: "1rem", fontWeight: "700", color: "#c98a1b",
              borderLeft: "4px solid #c98a1b", paddingLeft: "0.75rem", marginBottom: "1rem",
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
                    backgroundColor: "#fffcf7",
                    border: `1px solid ${ss.border}`,
                    borderRadius: "0.625rem", padding: "0.75rem 1.25rem",
                  }}>
                    <span style={{
                      backgroundColor: ss.bg, color: ss.color, border: `1px solid ${ss.border}`,
                      borderRadius: "9999px", padding: "0.1rem 0.6rem",
                      fontSize: "0.7rem", fontWeight: "700", flexShrink: 0,
                    }}>{ss.label}</span>
                    <span style={{
                      backgroundColor: "rgba(160,64,46,0.08)", color: categoryColor[draft.category],
                      borderRadius: "9999px", padding: "0.1rem 0.6rem",
                      fontSize: "0.7rem", fontWeight: "600", flexShrink: 0,
                    }}>{categoryLabel[draft.category]}</span>
                    <span style={{ color: "#1e2a30", fontSize: "0.875rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {draft.title}
                    </span>
                    <span style={{ color: "#8a8f93", fontSize: "0.75rem", flexShrink: 0 }}>{draft.updatedAt}</span>
                    {isRegistered && (
                      <Link href={draft.href} style={{ color: "#a0402e", fontSize: "0.75rem", flexShrink: 0, textDecoration: "none", fontWeight: "600" }}>
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
                  backgroundColor: "#fffcf7", border: "1px solid #e4dccd",
                  borderRadius: "0.625rem", padding: "0.75rem 1.25rem",
                }}>
                  <span style={{
                    backgroundColor: "rgba(47,125,79,0.15)", color: "#2f7d4f",
                    border: "1px solid rgba(47,125,79,0.3)",
                    borderRadius: "9999px", padding: "0.1rem 0.6rem",
                    fontSize: "0.7rem", fontWeight: "700", flexShrink: 0,
                  }}>公開済み</span>
                  <span style={{
                    backgroundColor: "rgba(160,64,46,0.1)", color: "#a0402e",
                    border: "1px solid rgba(160,64,46,0.25)",
                    borderRadius: "9999px", padding: "0.1rem 0.6rem",
                    fontSize: "0.7rem", fontWeight: "600", flexShrink: 0,
                  }}>{article.badge}</span>
                  <span style={{ color: "#1e2a30", fontSize: "0.875rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {article.title}
                  </span>
                  <span style={{ color: "#8a8f93", fontSize: "0.75rem", flexShrink: 0 }}>{article.updatedAt}</span>
                  <Link href={article.href} style={{
                    color: "#a0402e", fontSize: "0.75rem", flexShrink: 0,
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
            fontSize: "1rem", fontWeight: "700", color: "#4a76a0",
            borderLeft: "4px solid #4a76a0", paddingLeft: "0.75rem", marginBottom: "1rem",
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
                backgroundColor: "#fffcf7", border: "1px solid #fffcf7",
                borderRadius: "0.625rem", padding: "0.75rem 1.25rem",
              }}>
                <span style={{
                  backgroundColor: "rgba(74,118,160,0.1)", color: "#4a76a0",
                  border: "1px solid rgba(74,118,160,0.3)",
                  borderRadius: "9999px", padding: "0.1rem 0.6rem",
                  fontSize: "0.7rem", fontWeight: "700", flexShrink: 0,
                }}>{item.priority}</span>
                <span style={{ color: "#5c6469", fontSize: "0.875rem", flex: 1 }}>{item.title}</span>
                <span style={{ color: "#e4dccd", fontSize: "0.75rem", fontFamily: "monospace" }}>{item.href}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
