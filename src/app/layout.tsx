import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
    url: "https://www.infinitytv.io/infinitytv-iptv",
    siteName: "InfinityTV",
    images: [
      {
        url: "https://www.infinitytv.io/assets/logo-mark.png",
        width: 1200,
        height: 630,
        alt: "InfinityTV — Premium IPTV Service",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={poppins.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
