import type { Metadata } from "next";
import Link from "next/link";
import { readdir } from "fs/promises";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "記事管理 | 3Dプリントラボ",
  robots: { index: false, follow: false },
};

const OBSIDIAN_DRAFTS = "/Applications/Obsidian/ObsidianVault/33_LIFEWORK/3dprint記事下書き";

async function getDraftFiles(): Promise<string[]> {
  try {
    const files = await readdir(OBSIDIAN_DRAFTS);
    return files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
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

export default async function AdminPage() {
  const draftFiles = await getDraftFiles();

  // Obsidianファイル名 → hrefs に変換して登録済みか判定
  const registeredHrefs = new Set(articles.map((a) => a.href));
  const draftSlugs = draftFiles.map((f) => f.replace(/\.mdx?$/, ""));

  // カテゴリ別に集計
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
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#f1f5f9", marginBottom: "0.5rem" }}>
            記事管理ダッシュボード
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.875rem" }}>
            このページは検索エンジンにインデックスされません（noindex）
          </p>
        </div>

        {/* サマリーカード */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { label: "登録済み記事", value: articles.length,      color: "#10b981" },
            { label: "Obsidian下書き", value: draftFiles.length,  color: "#f59e0b" },
            { label: "未登録の下書き", value: draftSlugs.filter(
                (slug) => !registeredHrefs.has(`/printers/${slug}`) &&
                          !registeredHrefs.has(`/filaments/${slug}`) &&
                          !registeredHrefs.has(`/howto/${slug}`)
              ).length, color: "#ef4444" },
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

        {/* カテゴリ別 登録済み記事 */}
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
                  {/* ステータス */}
                  <span style={{
                    backgroundColor: "rgba(16,185,129,0.15)", color: "#10b981",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: "9999px", padding: "0.1rem 0.6rem",
                    fontSize: "0.7rem", fontWeight: "700", flexShrink: 0,
                  }}>公開済み</span>

                  {/* バッジ */}
                  <span style={{
                    backgroundColor: "rgba(6,182,212,0.1)", color: "#06b6d4",
                    border: "1px solid rgba(6,182,212,0.25)",
                    borderRadius: "9999px", padding: "0.1rem 0.6rem",
                    fontSize: "0.7rem", fontWeight: "600", flexShrink: 0,
                  }}>{article.badge}</span>

                  {/* タイトル */}
                  <span style={{ color: "#f1f5f9", fontSize: "0.875rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {article.title}
                  </span>

                  {/* 更新日 */}
                  <span style={{ color: "#475569", fontSize: "0.75rem", flexShrink: 0 }}>
                    {article.updatedAt}
                  </span>

                  {/* リンク */}
                  <Link href={article.href} style={{
                    color: "#06b6d4", fontSize: "0.75rem", flexShrink: 0,
                    textDecoration: "none", fontWeight: "600",
                  }}>
                    開く →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Obsidian 下書き一覧 */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{
            fontSize: "1rem", fontWeight: "700", color: "#f59e0b",
            borderLeft: "4px solid #f59e0b", paddingLeft: "0.75rem", marginBottom: "1rem",
          }}>
            Obsidian 下書き（{draftFiles.length}件）
          </h2>

          {draftFiles.length === 0 ? (
            <p style={{ color: "#475569", fontSize: "0.875rem" }}>
              ローカル環境でのみ表示されます（Vercel上では非表示）
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {draftFiles.map((file) => {
                const slug = file.replace(/\.mdx?$/, "");
                const isRegistered =
                  registeredHrefs.has(`/printers/${slug}`) ||
                  registeredHrefs.has(`/filaments/${slug}`) ||
                  registeredHrefs.has(`/howto/${slug}`);
                return (
                  <div key={file} style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    backgroundColor: "#1e293b",
                    border: `1px solid ${isRegistered ? "#334155" : "rgba(245,158,11,0.3)"}`,
                    borderRadius: "0.625rem", padding: "0.75rem 1.25rem",
                  }}>
                    <span style={{
                      backgroundColor: isRegistered ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)",
                      color: isRegistered ? "#10b981" : "#f59e0b",
                      border: `1px solid ${isRegistered ? "rgba(16,185,129,0.3)" : "rgba(245,158,11,0.3)"}`,
                      borderRadius: "9999px", padding: "0.1rem 0.6rem",
                      fontSize: "0.7rem", fontWeight: "700", flexShrink: 0,
                    }}>
                      {isRegistered ? "登録済み" : "未登録"}
                    </span>
                    <span style={{ color: "#cbd5e1", fontSize: "0.875rem", flex: 1, fontFamily: "monospace" }}>
                      {file}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 記事候補リスト へのリンク */}
        <section>
          <h2 style={{
            fontSize: "1rem", fontWeight: "700", color: "#8b5cf6",
            borderLeft: "4px solid #8b5cf6", paddingLeft: "0.75rem", marginBottom: "1rem",
          }}>
            次に書く記事候補
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { priority: "S-3", href: "/filaments/abs",              title: "ABSフィラメント おすすめ5選・印刷設定ガイド" },
              { priority: "S-5", href: "/printers/bambu-p1s-review",  title: "Bambu Lab P1S レビュー・A1との違いを徹底比較" },
              { priority: "A-1", href: "/howto/bambu-studio",         title: "Bambu Studio 使い方 完全ガイド【初心者向け】" },
              { priority: "A-2", href: "/howto/orca-slicer",          title: "OrcaSlicer 使い方と設定【Bambu Lab・各社対応】" },
              { priority: "A-3", href: "/filaments/tpu",              title: "TPUフィラメント おすすめ・使い方" },
              { priority: "A-8", href: "/howto/bambu-ams",            title: "Bambu Lab AMS 完全ガイド" },
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
