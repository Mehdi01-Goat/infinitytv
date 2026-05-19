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
  description: "InfinityTV IPTV: Stream 22,000+ live channels and 95,000+ movies in 4K with zero buffering. Anti-freeze technology. Instant setup on any device. From $4.91/month.",
  alternates: {
    canonical: "https://www.infinitytv.io/infinitytv-iptv",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
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
