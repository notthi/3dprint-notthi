import type { Metadata } from "next";
export const metadata: Metadata = { title: "このサイトについて | 3Dプリントラボ" };
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose">
      <h1>このサイトについて</h1>
      <p><strong>3Dプリントラボ</strong>は、3Dプリンター初心者〜中級者が「何を買うか」「どう使うか」で迷わないための専門情報サイトです。</p>
      <h2>掲載情報について</h2>
      <p>当サイトの情報は執筆時点のものです。価格・仕様は変更される場合があります。最新情報は各販売ページでご確認ください。</p>
      <h2>アフィリエイトについて</h2>
      <p>当サイトはAmazonアソシエイト・プログラム、楽天アフィリエイト、ValueCommerce（Yahoo!ショッピング）に参加しています。記事内のリンクから商品を購入すると、売上の一部が当サイトに還元される場合があります。</p>
      <h2>お問い合わせ</h2>
      <p>ご意見・ご要望はX（旧Twitter）からお気軽にどうぞ。</p>
    </div>
  );
}
