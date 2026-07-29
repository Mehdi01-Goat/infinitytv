"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import InfluencerBanner from "@/components/InfluencerBanner";
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
import type { Influencer } from "@/lib/influencers";

export default function InfluencerLandingClient({ influencer }: { influencer: Influencer }) {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <InfluencerBanner influencer={influencer} />
      <HeroSection />
      <FeaturesGrid />
      <TrendingSection />
      <PricingSection defaultPromoCode={influencer.code} />
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