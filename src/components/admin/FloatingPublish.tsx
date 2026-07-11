"use client";
import { useState } from "react";

/** /keystatic 画面右下に常駐する公開ボタン（ローカル編集専用） */
export default function FloatingPublish() {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function publish() {
    if (!confirm("編集内容を本番サイトに公開しますか？\n（git push → Vercelが自動デプロイ・反映まで2〜3分）")) return;
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/publish", { method: "POST" });
      const data = await res.json();
      setMsg(data.message ?? data.error ?? "不明な応答");
    } catch (e) {
      setMsg(`エラー: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: 99999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
      {msg && (
        <div style={{ maxWidth: "320px", backgroundColor: "#1e293b", color: "#cbd5e1", border: "1px solid #334155", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", lineHeight: 1.6, boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}>
          {msg}
        </div>
      )}
      <button
        onClick={publish}
        disabled={busy}
        style={{
          backgroundColor: busy ? "#334155" : "#10b981",
          color: "#0f172a",
          fontWeight: 700,
          fontSize: "14px",
          padding: "12px 20px",
          borderRadius: "9999px",
          border: "none",
          cursor: busy ? "wait" : "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
        }}
      >
        {busy ? "公開中…" : "🚀 公開"}
      </button>
    </div>
  );
}
