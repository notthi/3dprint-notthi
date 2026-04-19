import Link from "next/link";

const footerLinks = {
  プリンター: [
    { href: "/printers", label: "プリンターTOP" },
    { href: "/printers/recommend", label: "おすすめランキング" },
    { href: "/printers/home-use", label: "家庭用プリンター" },
    { href: "/printers/beginners", label: "初心者向け" },
  ],
  フィラメント: [
    { href: "/filaments", label: "フィラメントTOP" },
    { href: "/filaments/recommend", label: "おすすめランキング" },
    { href: "/filaments/pla", label: "PLAフィラメント" },
    { href: "/filaments/petg", label: "PETGフィラメント" },
  ],
  使い方: [
    { href: "/howto", label: "ノウハウTOP" },
    { href: "/howto/beginners", label: "初心者ガイド" },
    { href: "/howto/trouble", label: "トラブル解決" },
  ],
  サイト情報: [
    { href: "/about", label: "このサイトについて" },
    { href: "/privacy", label: "プライバシーポリシー" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        borderTop: "1px solid #334155",
        marginTop: "4rem",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        {/* Logo + Description */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#06b6d4",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0f172a",
                fontWeight: "800",
                fontSize: "13px",
              }}
            >
              3DP
            </div>
            <span style={{ fontWeight: "700", color: "#f1f5f9", fontSize: "1.1rem" }}>
              3Dプリントラボ
            </span>
          </div>
          <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: "1.6", maxWidth: "480px" }}>
            3Dプリンター・フィラメントの選び方から使い方まで、初心者にもわかりやすく解説するガイドサイトです。
          </p>
        </div>

        {/* Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  color: "#06b6d4",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    {/* footer-link クラスで CSS hover を適用 */}
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #1e293b", paddingTop: "1.5rem" }}>
          <p style={{ color: "#475569", fontSize: "0.75rem", lineHeight: "1.6", marginBottom: "0.75rem" }}>
            当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce（Yahoo!ショッピング）・メルカリアンバサダーに参加しており、紹介料を受け取る場合があります。
            商品の価格・在庫状況は各販売サイトをご確認ください。
          </p>
          <p style={{ color: "#334155", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} 3Dプリントラボ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
