import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InfinityTV — Premium IPTV Service | 22,000+ Channels",
  description: "Stream 22,000+ live channels and 95,000+ movies in 4K with zero buffering. Anti-freeze technology. Instant setup on any device. Starting from $4.91/month.",
  keywords: "IPTV, streaming, live TV, channels, sports, movies, 4K, premium IPTV",
  verification: {
    google: "5TpyzPvkGjA5ywQZg12VeY0CgEUVPSQ652ECzQtv6Gw",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "InfinityTV — Premium IPTV Service",
    description: "22,000+ live channels & 95,000+ movies in 4K. From $4.91/mo.",
    images: [{ url: "/assets/logo-mark.png" }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Providers>{children}</Providers>
        <div id="google_translate_element" style={{ display: "none" }} />
        <Script id="gt-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: "en", autoDisplay: false }, "google_translate_element");
          }
        `}</Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
