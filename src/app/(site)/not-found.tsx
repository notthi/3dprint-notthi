import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - ページが見つかりません | 3Dプリントラボ",
};

const links = [
  { href: "/", label: "トップページ" },
  { href: "/printers", label: "プリンター" },
  { href: "/filaments", label: "フィラメント" },
  { href: "/howto", label: "使い方" },
];

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        backgroundColor: "#0f172a",
        textAlign: "center",
      }}
    >
      {/* 404 number */}
      <p
        style={{
          fontSize: "clamp(6rem, 20vw, 10rem)",
          fontWeight: "900",
          lineHeight: "1",
          background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "1rem",
          letterSpacing: "-0.04em",
        }}
      >
        404
      </p>

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: "700",
          color: "#f1f5f9",
          marginBottom: "0.75rem",
        }}
      >
        ページが見つかりませんでした
      </h1>

      {/* Subtitle */}
      <p
        style={{
          color: "#64748b",
          fontSize: "0.9rem",
          lineHeight: "1.7",
          marginBottom: "2.5rem",
          maxWidth: "400px",
        }}
      >
        お探しのページは削除されたか、URLが変更された可能性があります。
        以下のリンクからお探しの情報をご覧ください。
      </p>

      {/* Nav links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
        }}
      >
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              backgroundColor: i === 0 ? "#06b6d4" : "#1e293b",
              color: i === 0 ? "#0f172a" : "#cbd5e1",
              border: i === 0 ? "none" : "1px solid #334155",
              fontWeight: "700",
              fontSize: "0.875rem",
              padding: "0.625rem 1.375rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
