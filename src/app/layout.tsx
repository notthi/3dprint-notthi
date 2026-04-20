import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

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

        {/* Yahoo! ValueCommerce LinkSwitch */}
        <Script id="vc-pid" strategy="afterInteractive">
          {`var vc_pid = "892598647";`}
        </Script>
        <Script
          src="//aml.valuecommerce.com/vcdal.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
