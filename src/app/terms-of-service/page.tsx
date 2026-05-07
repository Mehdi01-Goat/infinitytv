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
        <p className="text-muted-foreground mb-6 text-sm">Last updated: March 29, 2026</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the InfinityTV service, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access or use our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
            <p>InfinityTV provides access to television content via internet protocol (IPTV). The service includes live TV channels, on-demand content, and related features as described on our website. Service availability and content may vary by region and subscription plan.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>Account sharing beyond the allowed number of connections is prohibited</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Subscription & Payment</h2>
            <p>Subscriptions are billed according to the plan you select at the time of purchase. All payments are processed securely. Prices are subject to change with prior notice.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Redistribute, resell, or share your subscription with unauthorized users</li>
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse-engineer, modify, or tamper with the service</li>
              <li>Use VPNs or proxies to circumvent geographic restrictions unless permitted</li>
              <li>Record, download, or redistribute any content from the service</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Service Availability</h2>
            <p>While we strive to maintain 99.9% uptime, we do not guarantee uninterrupted access to the service. Scheduled maintenance, technical issues, or circumstances beyond our control may result in temporary service disruptions.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Termination</h2>
            <p>We reserve the right to suspend or terminate your account at any time if you violate these Terms of Service. Upon termination, your right to use the service will immediately cease.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
            <p>InfinityTV shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us through our <a href="/#contact" className="text-primary hover:underline">contact page</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
