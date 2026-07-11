import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて | 3Dプリントラボ",
  description:
    "3Dプリントラボの運営者情報・サイトの目的・アフィリエイトポリシーについて説明します。",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderBottom: "1px solid #334155",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>ホーム</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#06b6d4" }}>このサイトについて</span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#f1f5f9" }}>
            このサイトについて
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "52rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {/* サイトの目的 */}
          <div
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#f1f5f9",
                borderLeft: "4px solid #06b6d4",
                paddingLeft: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              サイトの目的
            </h2>
            <p style={{ color: "#94a3b8", lineHeight: "1.85", marginBottom: "1rem" }}>
              「3Dプリントラボ」は、3Dプリンター・フィラメントの選び方から使い方まで、
              初心者にもわかりやすく解説することを目的としたガイドサイトです。
            </p>
            <p style={{ color: "#94a3b8", lineHeight: "1.85" }}>
              スペック比較や購入ガイドに加え、運営者が実際に使用している
              Bambu Lab P1S ComboおよびAnycubic Mega-Sの実機レビューも掲載しています。
              読者の皆さんが自分に合った1台・フィラメントを選べるよう、
              できる限り正直な情報をお届けします。
            </p>
          </div>

          {/* 運営者情報 */}
          <div
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#f1f5f9",
                borderLeft: "4px solid #06b6d4",
                paddingLeft: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              運営者情報
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0.625rem 1.5rem", alignItems: "start" }}>
              {[
                ["ハンドルネーム", "notthi"],
                ["職業", "機械系エンジニア"],
                ["趣味", "3Dプリンター・ドローン・ルアーフィッシング・DIY"],
                ["所有機", "Bambu Lab P1S Combo / Anycubic Mega-S"],
                ["メインブログ", "Cubic未来デザイン研究所（notthi.com）"],
              ].map(([label, value]) => (
                <>
                  <span key={`label-${label}`} style={{ color: "#64748b", fontSize: "0.875rem", fontWeight: "600", paddingTop: "0.1rem", whiteSpace: "nowrap" }}>
                    {label}
                  </span>
                  <span key={`value-${label}`} style={{ color: "#cbd5e1", fontSize: "0.875rem", lineHeight: "1.6" }}>
                    {value}
                  </span>
                </>
              ))}
            </div>
            <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "1.25rem", lineHeight: "1.6" }}>
              3Dプリンターは趣味の造形・釣り用ルアー・ドローンパーツの自作など、
              日常的に活用しています。実体験をベースにした情報発信を心がけています。
            </p>
          </div>

          {/* 掲載情報について */}
          <div
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#f1f5f9",
                borderLeft: "4px solid #06b6d4",
                paddingLeft: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              掲載情報について
            </h2>
            <p style={{ color: "#94a3b8", lineHeight: "1.85", marginBottom: "1rem" }}>
              当サイトの情報は執筆時点のものです。商品の価格・仕様・在庫状況は
              予告なく変更される場合があります。購入前に各販売サイトにて最新情報をご確認ください。
            </p>
            <p style={{ color: "#94a3b8", lineHeight: "1.85" }}>
              実機レビュー以外の記事（スペック比較・まとめ記事など）は、
              各メーカー公式情報・販売サイトの情報をもとに作成しています。
              実際の使用感とは異なる場合があることをご了承ください。
            </p>
          </div>

          {/* アフィリエイトについて */}
          <div
            style={{
              backgroundColor: "rgba(6,182,212,0.06)",
              border: "1px solid rgba(6,182,212,0.25)",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#f1f5f9",
                borderLeft: "4px solid #06b6d4",
                paddingLeft: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              アフィリエイト・広告について
            </h2>
            <p style={{ color: "#94a3b8", lineHeight: "1.85", marginBottom: "1rem" }}>
              当サイトは以下のアフィリエイトプログラムに参加しており、
              商品リンクを経由してご購入いただいた場合に紹介料を受け取ることがあります。
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                "Amazonアソシエイト・プログラム",
                "楽天アフィリエイト",
                "ValueCommerce（Yahoo!ショッピング）",
                "メルカリアンバサダープログラム",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#94a3b8", fontSize: "0.875rem" }}>
                  <span style={{ color: "#06b6d4", fontWeight: "700" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ color: "#94a3b8", lineHeight: "1.85", fontSize: "0.875rem" }}>
              紹介料の発生は読者の皆さんの購入金額に影響しません。
              アフィリエイト収益はサイト運営・コンテンツ制作に充てています。
              商品の評価はアフィリエイト契約の有無に関わらず、公正に行っています。
            </p>
          </div>

          {/* お問い合わせ */}
          <div
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "1rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#f1f5f9",
                marginBottom: "0.75rem",
              }}
            >
              お問い合わせ
            </h2>
            <p style={{ color: "#94a3b8", lineHeight: "1.85", marginBottom: "1.25rem" }}>
              サイトに関するご意見・ご質問はメインブログのお問い合わせフォームよりご連絡ください。
            </p>
            <a
              href="https://notthi.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #06b6d4",
                color: "#06b6d4",
                fontWeight: "600",
                padding: "0.625rem 1.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              お問い合わせフォーム →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
