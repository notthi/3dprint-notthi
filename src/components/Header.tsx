"use client";
import Link from "next/link";
import LogoMark from "./LogoMark";
import { useState } from "react";

const navLinks = [
  { href: "/printers", label: "プリンター" },
  { href: "/filaments", label: "フィラメント" },
  { href: "/howto", label: "使い方・ノウハウ" },
  { href: "/about", label: "このサイトについて" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#f2ece2",
        borderBottom: "1px solid #e4dccd",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <LogoMark className="lab-mark" />
            <span className="lab-name"><b>3Dプリントラボ</b><small>by Cubic未来デザイン研究所</small></span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.5rem 1rem",
                  color: "#2e3a40",
                  textDecoration: "none",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  transition: "color 0.2s, background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#a0402e";
                  (e.target as HTMLElement).style.backgroundColor = "#fffcf7";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#2e3a40";
                  (e.target as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              padding: "0.5rem",
              color: "#2e3a40",
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              display: "none",
            }}
            className="show-mobile"
            aria-label="メニューを開く"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div style={{ borderTop: "1px solid #e4dccd", paddingBottom: "0.75rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  color: "#2e3a40",
                  textDecoration: "none",
                  borderRadius: "0.5rem",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
