import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Terms of Service — InfinityTV" };

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container pt-12 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Terms of Service</h1>
        <p className="text-muted-foreground mb-6 text-sm">Last updated: May 8, 2026</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By placing an order or using the InfinityTV service, you agree to be bound by these Terms of Service. If you do not agree, please do not use our service.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
            <p>InfinityTV provides access to television content via internet protocol (IPTV), including live channels, on-demand movies, and series. After payment is confirmed, we deliver your service credentials directly via WhatsApp. Service availability and content may vary by plan.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Service Credentials</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your credentials are personal and may not be shared beyond the number of connections in your plan</li>
              <li>You are responsible for keeping your credentials confidential</li>
              <li>You are responsible for all activity that occurs using your credentials</li>
              <li>Notify us immediately if you suspect unauthorized use</li>
              <li>Sharing credentials beyond your allowed connections is prohibited and may result in suspension</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Payment</h2>
            <p>Payment is processed manually after you place your order. We accept Card, PayPal, E-Transfer, Crypto, MoneyGram, and Western Union. There is no automatic billing — each renewal requires a new order. Prices are subject to change with prior notice.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Redistribute, resell, or share your subscription beyond permitted connections</li>
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse-engineer, modify, or tamper with the service</li>
              <li>Record, download, or redistribute any content from the service</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Service Availability</h2>
            <p>We strive to maintain reliable uptime but do not guarantee uninterrupted service. Scheduled maintenance or circumstances beyond our control may occasionally cause disruptions. Compensation or extensions may be offered at our discretion for significant outages.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Termination</h2>
            <p>We reserve the right to suspend or terminate service at any time if you violate these Terms. Upon termination, your right to use the service will immediately cease.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
            <p>InfinityTV shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use the service.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
            <p>These Terms are governed by general principles of international commercial law. Any disputes will be resolved through good-faith negotiation between the parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to Terms</h2>
            <p>We may modify these terms at any time. Changes will be posted on this page with an updated revision date.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please email us at <a href="mailto:contact@infinitytv.io" className="text-primary hover:underline">contact@infinitytv.io</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
