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
  verification: {
    google: "H-2op3uOgE2fk1Zux1YhjK1xI0fVNpKfrFpl6xb-HZ0",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S43BE05M60"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-S43BE05M60');`}
        </Script>

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
