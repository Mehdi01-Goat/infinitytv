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
        <p className="text-muted-foreground mb-6 text-sm">Last updated: March 29, 2026</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you create an account, make a purchase, or contact us for support. This may include your name, email address, payment information, and any other information you choose to provide.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Process transactions and send related information</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Communicate with you about products, services, and promotions</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
            <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our service.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Our website may use cookies to enhance your experience. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, some parts of the service may not function properly.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Third-Party Services</h2>
            <p>We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, or assist us in analyzing how our service is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our <a href="/#contact" className="text-primary hover:underline">contact page</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
