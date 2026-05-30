import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import TrendingSection from "@/components/TrendingSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import SetupSteps from "@/components/SetupSteps";
import ComparisonSection from "@/components/ComparisonSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "InfinityTV IPTV — Premium IPTV Service | 22,000+ Channels",
  description: "InfinityTV IPTV: Stream 22,000+ live channels and 95,000+ movies in 4K with zero buffering. Anti-freeze technology. Instant setup on any device. From €4.91/month.",
  alternates: {
    canonical: "https://www.infinitytv.io/infinitytv-iptv",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BroadcastService",
      "@id": "https://www.infinitytv.io/infinitytv-iptv#service",
      "name": "InfinityTV",
      "description": "Premium streaming service with 22,000+ live channels and 95,000+ VODs in 4K. Anti-buffering technology, instant setup, works on all devices including Smart TV, Firestick, iOS, Android, Windows, and MAG.",
      "url": "https://www.infinitytv.io/infinitytv-iptv",
      "broadcastDisplayName": "InfinityTV",
      "inLanguage": ["en", "fr", "de", "es", "nl"],
      "provider": {
        "@type": "Organization",
        "@id": "https://www.infinitytv.io/#organization",
      },
      "areaServed": ["FR", "DE", "NL", "ES", "GB", "US", "CA", "AU"],
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "4.91",
        "highPrice": "149.98",
        "priceCurrency": "EUR",
        "offerCount": "12",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When will I get my IPTV subscription activated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once we receive your order, our team will activate your InfinityTV subscription based on your details (duration, number of connections, device). You will receive it after we complete the payment process, typically within 30 minutes.",
          },
        },
        {
          "@type": "Question",
          "name": "What devices are supported by InfinityTV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "InfinityTV supports all major devices including Smart TVs (Samsung, LG, Android TV), Amazon Firestick, iOS, Android, Windows, macOS, Linux, and MAG devices.",
          },
        },
        {
          "@type": "Question",
          "name": "Does InfinityTV offer a free trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, InfinityTV offers a 24-hour free trial so you can test the service before committing. Contact us via WhatsApp to request your trial.",
          },
        },
        {
          "@type": "Question",
          "name": "What channels are included in InfinityTV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "InfinityTV includes 22,000+ live channels from around the world, including sports (PPV, UFC, NFL, NHL, NBA), movies, news, entertainment, and international channels in multiple languages including French, German, Spanish, and Dutch.",
          },
        },
        {
          "@type": "Question",
          "name": "Does InfinityTV have a refund policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, InfinityTV offers a 7-day money-back guarantee. If you are not satisfied with the service, contact our support team for a full refund.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does InfinityTV cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "InfinityTV plans start from €4.91 per month on the 12-month plan. Monthly plans are available from €11.98. All plans include 22,000+ channels, 95,000+ VODs, and 4K quality.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <TrendingSection />
      <PricingSection />
      <DevicesSection />
      <SetupSteps />
      <ComparisonSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <CtaBanner />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
