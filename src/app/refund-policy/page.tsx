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
        <p className="text-muted-foreground mb-6 text-sm">Last updated: May 8, 2026</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Free Trial First</h2>
            <p>We offer a free 24-hour trial so you can test the service on your devices before purchasing. We strongly encourage all new customers to use this trial — it is the best way to confirm compatibility and quality before any payment is made.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Refund Eligibility</h2>
            <p>Refund requests are reviewed on a case-by-case basis. We may consider a refund if all of the following apply:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You contact us within 7 days of your initial purchase</li>
              <li>You experience a persistent technical issue that our support team cannot resolve after reasonable attempts</li>
              <li>The service is materially different from what was described at the time of purchase</li>
            </ul>
            <p className="mt-3">A refund is not guaranteed — it is granted at our discretion after reviewing the circumstances of each case.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Non-Refundable Cases</h2>
            <p>Refunds will not be issued in the following cases:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The request is made more than 7 days after the purchase date</li>
              <li>Your account was suspended due to a violation of our Terms of Service</li>
              <li>You changed your mind after the service was delivered and activated</li>
              <li>Issues caused by your internet connection, device, or third-party apps</li>
              <li>You did not use the free trial before purchasing</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. How Refunds Are Issued</h2>
            <p>Because we accept multiple payment methods (Card, PayPal, E-Transfer, Crypto, MoneyGram, Western Union), refunds are handled manually and the method depends on what is practically available. We cannot guarantee a refund to the original payment method. If a refund is approved, we will coordinate with you directly to arrange the return.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Chargebacks</h2>
            <p>Please contact us before initiating a chargeback or dispute with your payment provider. Filing a chargeback without first contacting our support team may result in permanent account suspension and forfeiture of any refund consideration.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact Us</h2>
            <p>To request a refund or ask a question about this policy, please email us at <a href="mailto:contact@infinitytv.io" className="text-primary hover:underline">contact@infinitytv.io</a> with your order ID, WhatsApp number, and a description of the issue.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
