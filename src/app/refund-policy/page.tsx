import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Refund Policy — InfinityTV" };

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container pt-12 pb-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Refund Policy</h1>
        <p className="text-muted-foreground mb-6 text-sm">Last updated: March 29, 2026</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Free Trial</h2>
            <p>We offer a free trial period so you can test our service before committing to a subscription. We encourage all customers to take advantage of this trial to ensure the service meets their needs and is compatible with their devices.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Refund Eligibility</h2>
            <p>Refund requests are evaluated on a case-by-case basis. You may be eligible for a refund if:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You experience persistent technical issues that our support team is unable to resolve</li>
              <li>The service is significantly different from what was described at the time of purchase</li>
              <li>You request a refund within 7 days of your initial purchase</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Non-Refundable Cases</h2>
            <p>Refunds will not be issued in the following cases:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The refund request is made after 7 days from the purchase date</li>
              <li>Your account was suspended or terminated due to a violation of our Terms of Service</li>
              <li>You simply changed your mind after purchasing a subscription</li>
              <li>Issues caused by your internet connection, device compatibility, or third-party software</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. How to Request a Refund</h2>
            <p>To request a refund, please contact our support team through our <a href="/#contact" className="text-primary hover:underline">contact page</a> with your account email, order ID, reason for the refund, and any relevant screenshots.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Processing Time</h2>
            <p>Approved refunds will be processed within 5–10 business days. The refund will be issued to the original payment method used for the purchase.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Chargebacks</h2>
            <p>We encourage customers to contact us directly before initiating a chargeback. Filing a chargeback without first contacting our support team may result in permanent account suspension.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
            <p>For any questions regarding our refund policy, please reach out to us via our <a href="/#contact" className="text-primary hover:underline">contact page</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
