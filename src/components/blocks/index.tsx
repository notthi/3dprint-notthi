/**
 * 記事用ブロックコンポーネント集
 *
 * ビジュアルエディタ（Keystatic）のブロックとして挿入され、
 * mdx-components.tsx 経由で全MDX記事から import 不要で使える。
 * 素のテキスト装飾（h2/h3/p/ul/table等）は globals.css の .article-body が担当。
 */
import type { ReactNode } from "react";

const C = {
  bgCard: "#1e293b",
  border: "#334155",
  text: "#cbd5e1",
  strong: "#f1f5f9",
  muted: "#94a3b8",
  faint: "#64748b",
  cyan: "#06b6d4",
  green: "#10b981",
  red: "#ef4444",
  amber: "#f59e0b",
};

/* ── Lead：記事冒頭の要約カード ─────────────────────────── */
export function Lead({ children }: { children: ReactNode }) {
  return <div className="blk-card blk-lead">{children}</div>;
}

/* ── Tip / Warn：補足・注意ボックス ─────────────────────── */
export function Tip({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="blk-lead" style={{ backgroundColor: "#0c1a2e", border: `1px solid ${C.cyan}`, borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" }}>
      {title && <p style={{ color: C.cyan, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>💡 {title}</p>}
      {children}
    </div>
  );
}

export function Warn({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="blk-lead" style={{ backgroundColor: "#1c1a0e", border: `1px solid ${C.amber}`, borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" }}>
      {title && <p style={{ color: C.amber, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>⚠ {title}</p>}
      {children}
    </div>
  );
}

/* ── ProsCons：メリット・デメリット2カラム ──────────────── */
export function ProsCons({
  pros = [],
  cons = [],
  prosTitle = "メリット",
  consTitle = "デメリット",
}: {
  pros?: string[];
  cons?: string[];
  prosTitle?: string;
  consTitle?: string;
}) {
  return (
    <div className="blk-proscons">
      <div style={{ backgroundColor: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "0.75rem", padding: "1.25rem" }}>
        <p style={{ color: C.green, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.75rem" }}>✓ {prosTitle}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {pros.map((t, i) => (
            <li key={i} style={{ color: C.text, fontSize: "0.8rem", lineHeight: 1.6 }}>• {t}</li>
          ))}
        </ul>
      </div>
      <div style={{ backgroundColor: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "0.75rem", padding: "1.25rem" }}>
        <p style={{ color: C.red, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.75rem" }}>✗ {consTitle}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {cons.map((t, i) => (
            <li key={i} style={{ color: C.text, fontSize: "0.8rem", lineHeight: 1.6 }}>• {t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── SpecList：ラベル＋値の行リスト ─────────────────────── */
export function SpecList({ items = [] }: { items?: { label: string; value: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
      {items.map((item) => (
        <div key={item.label} style={{ display: "flex", gap: "1rem", backgroundColor: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "0.5rem", padding: "0.75rem 1.25rem", alignItems: "center" }}>
          <span style={{ color: C.cyan, fontWeight: 700, fontSize: "0.8rem", flexShrink: 0, minWidth: "140px" }}>{item.label}</span>
          <span style={{ color: C.muted, fontSize: "0.875rem", lineHeight: 1.7 }}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Steps：番号付き手順 ────────────────────────────────── */
export function Steps({ items = [] }: { items?: { title: string; body?: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: "1rem", backgroundColor: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "0.75rem", padding: "1.25rem", alignItems: "flex-start" }}>
          <span style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(6,182,212,0.15)", color: C.cyan, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.9rem", flexShrink: 0 }}>
            {i + 1}
          </span>
          <div>
            <p style={{ color: C.strong, fontWeight: 700, fontSize: "0.9rem", marginBottom: item.body ? "0.375rem" : 0 }}>{item.title}</p>
            {item.body && <p style={{ color: C.muted, fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{item.body}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── CheckList：チェック／バツ リスト ───────────────────── */
export function CheckList({ items = [], variant = "check" }: { items?: string[]; variant?: "check" | "cross" }) {
  const mark = variant === "check" ? "✓" : "✗";
  const color = variant === "check" ? C.green : C.red;
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: "flex", gap: "0.625rem", color: C.text, fontSize: "0.875rem", lineHeight: 1.7 }}>
          <span style={{ color, fontWeight: 700, flexShrink: 0 }}>{mark}</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── PriceList：モデル／価格の行リスト ──────────────────── */
export function PriceList({ items = [] }: { items?: { label: string; price: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", backgroundColor: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "0.5rem", padding: "0.75rem 1.25rem" }}>
          <span style={{ color: C.text, fontSize: "0.875rem" }}>{item.label}</span>
          <span style={{ color: C.cyan, fontWeight: 700, fontSize: "0.95rem", flexShrink: 0 }}>{item.price}</span>
        </div>
      ))}
    </div>
  );
}

/* ── CTA：ボタン付き誘導ブロック ────────────────────────── */
export function CTA({ href, label, children }: { href: string; label: string; children?: ReactNode }) {
  return (
    <div className="blk-lead" style={{ backgroundColor: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" }}>
      {children}
      <a href={href} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: C.cyan, color: "#0f172a", fontWeight: 700, fontSize: "0.875rem", padding: "0.625rem 1.25rem", borderRadius: "0.5rem", textDecoration: "none", marginTop: children ? "0.5rem" : 0 }}>
        → {label}
      </a>
    </div>
  );
}

/* ── FAQ：Q&Aカードのリスト ─────────────────────────────── */
export function FAQ({ items = [] }: { items?: { q: string; a: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
      {items.map((item, i) => (
        <div key={i} style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "0.75rem", padding: "1.5rem" }}>
          <p style={{ color: C.cyan, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>Q. {item.q}</p>
          <p style={{ color: C.text, lineHeight: 1.85, margin: 0 }}>A. {item.a}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Disclaimer：アフィリエイト免責（ArticleLayoutが常設表示） ── */
export function Disclaimer() {
  return (
    <p style={{ color: "#475569", fontSize: "0.75rem", borderTop: `1px solid ${C.bgCard}`, paddingTop: "1.25rem", marginTop: "2.5rem", lineHeight: 1.6 }}>
      当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce・メルカリアンバサダーに参加しています。記事内のリンクから商品を購入すると、売上の一部が当サイトに還元される場合があります。価格は記事執筆時点のものです。
    </p>
  );
}
