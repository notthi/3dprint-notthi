import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: { template: "%s | 3Dプリントラボ", default: "3Dプリントラボ - 3Dプリンター・フィラメントの専門情報サイト" },
  description: "3Dプリンター初心者からマニアまで。おすすめ機種・フィラメント比較・使い方ガイドを徹底解説。",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
