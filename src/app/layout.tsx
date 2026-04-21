import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://3dprint.notthi.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | 3Dプリントラボ",
    default: "3Dプリントラボ - 3Dプリンター・フィラメントの専門情報サイト",
  },
  description: "3Dプリンター初心者からマニアまで。おすすめ機種・フィラメント比較・使い方ガイドを徹底解説。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "3Dプリントラボ",
    url: baseUrl,
    title: "3Dプリントラボ - 3Dプリンター・フィラメントの専門情報サイト",
    description: "3Dプリンター初心者からマニアまで。おすすめ機種・フィラメント比較・使い方ガイドを徹底解説。",
  },
  twitter: {
    card: "summary_large_image",
    title: "3Dプリントラボ - 3Dプリンター・フィラメントの専門情報サイト",
    description: "3Dプリンター初心者からマニアまで。おすすめ機種・フィラメント比較・使い方ガイドを徹底解説。",
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
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
