"use client";
import { useState } from "react";

export default function PublishButton() {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function publish() {
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch("/api/publish", { method: "POST" });
      const data = await res.json();
      setResult(data.message ?? data.error ?? "不明な応答");
    } catch (e) {
      setResult(`エラー: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
      <button
        onClick={publish}
        disabled={busy}
        style={{
          backgroundColor: busy ? "#334155" : "#10b981",
          color: "#0f172a",
          fontWeight: 700,
          fontSize: "0.9rem",
          padding: "0.625rem 1.5rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: busy ? "wait" : "pointer",
        }}
      >
        {busy ? "公開中…" : "🚀 公開（commit & push）"}
      </button>
      {result && <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{result}</span>}
    </div>
  );
}
