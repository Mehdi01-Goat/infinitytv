import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Privacy Policy — InfinityTV" };

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container pt-12 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6 text-sm">Last updated: May 8, 2026</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you place an order or contact us for support. This includes your name, email address, WhatsApp number, chosen payment method, and any other information you provide during checkout or in our support conversations.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Process your order and deliver your service credentials</li>
              <li>Communicate with you via email or WhatsApp to complete payment and activation</li>
              <li>Provide ongoing customer support and service updates</li>
              <li>Respond to your questions and support requests</li>
              <li>Detect and prevent fraudulent activity</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information only where strictly required to deliver the service (e.g., payment processing), and only with parties bound by confidentiality obligations.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
            <p>We use appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, or destruction. All data transmitted through our website is encrypted via SSL.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You may disable cookies in your browser settings; however, some parts of the site may not function as intended.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Third-Party Services</h2>
            <p>We may use third-party tools to help operate our website and deliver our service. These providers access only the data necessary to perform their function and are required to protect it in accordance with applicable standards.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
            <p>We retain your information for as long as necessary to provide the service and comply with our legal obligations. You may request deletion of your data at any time by contacting us.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be reflected by the updated date at the top of this page.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please email us at <a href="mailto:contact@infinitytv.io" className="text-primary hover:underline">contact@infinitytv.io</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
