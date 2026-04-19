import type { Metadata } from "next";
export const metadata: Metadata = { title: "プライバシーポリシー | 3Dプリントラボ" };
export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose">
      <h1>プライバシーポリシー</h1>
      <h2>個人情報の取り扱い</h2>
      <p>当サイトでは、お問い合わせの際に氏名・メールアドレス等の個人情報をご入力いただく場合があります。取得した個人情報は、お問い合わせへの対応以外には使用しません。</p>
      <h2>アクセス解析ツール</h2>
      <p>当サイトはGoogle Analyticsを使用しています。Cookieを通じてデータが収集されますが、個人を特定する情報は含まれません。</p>
      <h2>アフィリエイトプログラム</h2>
      <p>当サイトはAmazonアソシエイト・プログラム、楽天アフィリエイト、ValueCommerceに参加しています。</p>
      <h2>免責事項</h2>
      <p>当サイトの情報は可能な限り正確を期していますが、内容の正確性・完全性を保証するものではありません。</p>
      <p className="text-sm text-gray-500">制定日：2026年4月</p>
    </div>
  );
}
