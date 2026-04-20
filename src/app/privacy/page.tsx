import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 3Dプリントラボ",
  description: "3Dプリントラボのプライバシーポリシー・Cookie・個人情報の取り扱いについて説明します。",
};

const sections = [
  {
    title: "個人情報の収集について",
    content: `当サイトでは、お問い合わせフォームなどを通じてお名前・メールアドレス等の個人情報をご提供いただく場合があります。取得した個人情報は、お問い合わせへの回答など必要な範囲でのみ利用し、第三者への提供は行いません。`,
  },
  {
    title: "アクセス解析ツールについて",
    content: `当サイトはGoogleアナリティクスを使用しています。GoogleアナリティクスはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。収集されたデータはGoogleのプライバシーポリシーに基づいて管理されます。Cookieを無効にすることでデータ収集を拒否できます。`,
  },
  {
    title: "アフィリエイトプログラムについて",
    content: `当サイトはAmazonアソシエイト・楽天アフィリエイト・ValueCommerce（Yahoo!ショッピング）・メルカリアンバサダープログラムに参加しています。これらのサービスは、商品リンクのクリック情報をもとに紹介料を計算するためにCookieを使用します。`,
  },
  {
    title: "Cookieについて",
    content: `当サイトはCookieを使用しています。Cookieとは、Webサイトがお客様のコンピューターに送信する小さなデータファイルです。ブラウザの設定からCookieを無効にすることが可能ですが、一部機能が正常に動作しない場合があります。`,
  },
  {
    title: "免責事項",
    content: `当サイトの情報は正確性を期していますが、内容の完全性・正確性・有用性を保証するものではありません。当サイトの情報を参考にした結果生じたいかなる損害についても、運営者は責任を負いかねます。商品の購入・ご利用にあたっては各販売サイト・メーカー公式情報を必ずご確認ください。`,
  },
  {
    title: "著作権について",
    content: `当サイトに掲載されているコンテンツ（文章・画像・デザイン等）の著作権は運営者に帰属します。無断転載・複製は禁止します。引用する場合は出典を明記してください。`,
  },
  {
    title: "リンクについて",
    content: `当サイトへのリンクは原則として自由です。ただし、公序良俗に反するサイト・誹謗中傷を目的としたサイトからのリンクはお断りします。当サイトからの外部リンク先については、内容・安全性を保証するものではありません。`,
  },
  {
    title: "プライバシーポリシーの変更",
    content: `本ポリシーは、法令変更やサービス内容の変更に伴い、予告なく改定する場合があります。最新のポリシーは常に本ページに掲載します。`,
  },
];

export default function PrivacyPage() {
  const today = new Date();
  const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

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
            <span style={{ color: "#06b6d4" }}>プライバシーポリシー</span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#f1f5f9" }}>
            プライバシーポリシー
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            最終更新日：{dateStr}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "52rem", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {/* Intro */}
        <p
          style={{
            color: "#94a3b8",
            lineHeight: "1.85",
            marginBottom: "2.5rem",
            padding: "1.25rem 1.5rem",
            backgroundColor: "#1e293b",
            borderRadius: "0.75rem",
            borderLeft: "4px solid #06b6d4",
          }}
        >
          3Dプリントラボ（以下「当サイト」）は、ユーザーのプライバシーを尊重し、
          個人情報の保護に努めます。以下に当サイトのプライバシーポリシーを定めます。
        </p>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {sections.map((section, index) => (
            <div
              key={section.title}
              style={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "1rem",
                padding: "1.75rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#f1f5f9",
                  marginBottom: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    backgroundColor: "rgba(6,182,212,0.15)",
                    border: "1px solid rgba(6,182,212,0.3)",
                    borderRadius: "50%",
                    color: "#06b6d4",
                    fontSize: "0.7rem",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <p style={{ color: "#94a3b8", lineHeight: "1.85", fontSize: "0.9rem" }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.5rem",
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
            borderRadius: "1rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "1rem" }}>
            プライバシーポリシーに関するお問い合わせは下記よりご連絡ください。
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
      </section>
    </main>
  );
}
