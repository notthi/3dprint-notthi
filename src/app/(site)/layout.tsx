import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
