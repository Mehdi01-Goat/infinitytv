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
  description: "Stream 22,000+ live channels and 95,000+ movies in 4K with zero buffering. Anti-freeze technology. Instant setup on any device. Starting from €4.91/month.",
  keywords: "IPTV, streaming, live TV, channels, sports, movies, 4K, premium IPTV",
  verification: {
    google: "5TpyzPvkGjA5ywQZg12VeY0CgEUVPSQ652ECzQtv6Gw",
  },
  other: {
    "msvalidate.01": "6E91777CF8AC180E83B2FCCE0BC832BA",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "InfinityTV — Premium IPTV Service",
    description: "22,000+ live channels & 95,000+ movies in 4K. From €4.91/mo.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.infinitytv.io/#organization",
      "name": "InfinityTV",
      "url": "https://www.infinitytv.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.infinitytv.io/assets/logo-mark.png",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["English", "French", "German", "Spanish", "Dutch"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.infinitytv.io/#website",
      "name": "InfinityTV",
      "url": "https://www.infinitytv.io",
      "publisher": { "@id": "https://www.infinitytv.io/#organization" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={poppins.variable}>
        <Providers>{children}</Providers>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','4216616488482117');
          fbq('track','PageView');
        `}</Script>
      </body>
    </html>
  );
}
