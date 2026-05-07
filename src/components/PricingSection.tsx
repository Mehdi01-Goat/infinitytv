"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CreditCard, Shield, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CheckoutDialog from "@/components/CheckoutDialog";

const connectionTabs = ["1 Connection", "2 Connections", "3 Connections"];

const features = [
  "22,000+ Worldwide Channels", "95,000+ VODs & Series", "Anti-Buffering Technology",
  "PPV Channels & EPG Guide", "4K & Full HD Quality", "All Devices Supported",
  "Stable & Fast Servers", "24/7 Online Support",
];

const plansByConnection: Record<number, { duration: string; price: string; perMonth?: string; recommended?: boolean; oldPrice?: string }[]> = {
  0: [
    { duration: "1 Month", price: "$11.98", perMonth: "$11.98" },
    { duration: "3 Months", price: "$19.98", perMonth: "$6.66" },
    { duration: "6 Months", price: "$34.98", perMonth: "$5.83" },
    { duration: "12 Months", price: "$58.98", perMonth: "$4.91", recommended: true, oldPrice: "$143.76" },
  ],
  1: [
    { duration: "1 Month", price: "$18.98", perMonth: "$18.98" },
    { duration: "3 Months", price: "$29.98", perMonth: "$9.99" },
    { duration: "6 Months", price: "$54.98", perMonth: "$9.16" },
    { duration: "12 Months", price: "$99.98", perMonth: "$8.33", recommended: true, oldPrice: "$227.76" },
  ],
  2: [
    { duration: "1 Month", price: "$24.98", perMonth: "$24.98" },
    { duration: "3 Months", price: "$49.98", perMonth: "$16.66" },
    { duration: "6 Months", price: "$84.98", perMonth: "$14.16" },
    { duration: "12 Months", price: "$149.98", perMonth: "$12.49", recommended: true, oldPrice: "$299.76" },
  ],
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ duration: "", price: "", connections: "", oldPrice: "", perMonth: "" });

  const handleOrderClick = (plan: { duration: string; price: string; oldPrice?: string; perMonth?: string }) => {
    setSelectedPlan({
      duration: plan.duration,
      price: plan.price,
      connections: connectionTabs[activeTab],
      oldPrice: plan.oldPrice ?? "",
      perMonth: plan.perMonth ?? "",
    });
    setCheckoutOpen(true);
  };

  return (
    <section id="pricing" className="py-24 border-t border-border">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-3">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">All plans include every feature. No hidden fees, no contracts.</p>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mt-2">
            <Zap size={12} className="text-primary" />
            <span className="text-sm text-primary font-semibold">Save up to 59% with the Annual Plan</span>
          </div>
        </div>

        {/* Money-back guarantee banner */}
        <div className="flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-5 py-2 mb-8 w-fit mx-auto text-xs sm:text-sm text-emerald-400 font-semibold">
          <span>🛡</span>
          <span>7-Day Money-Back Guarantee — No Questions Asked</span>
          <span className="text-emerald-500/40 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Cancel Anytime</span>
          <span className="text-emerald-500/40 hidden sm:inline">·</span>
          <span className="hidden sm:inline">No Setup Fees</span>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12 flex-wrap">
          {connectionTabs.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === i ? "bg-gradient-primary text-white shadow-glow" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {plansByConnection[activeTab].map((plan) =>
              plan.recommended ? (
                <div key={plan.duration} className="relative p-px rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
                  <div className="relative rounded-2xl bg-[#0F0F1E] p-6 h-full">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-glow">
                      🏆 BEST VALUE
                    </span>
                    <h3 className="font-heading text-lg font-bold mb-1 mt-2">{plan.duration}</h3>
                    <p className="text-[10px] text-primary/70 font-semibold uppercase tracking-widest mb-1">Most popular choice this week</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      {plan.oldPrice && <span className="text-xs text-muted-foreground line-through">{plan.oldPrice}</span>}
                      <span className="font-heading text-4xl font-bold text-gradient">{plan.price}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/25 rounded-full px-3 py-1 mb-5">
                      <span className="text-primary text-xs font-bold">Only {plan.perMonth} / month</span>
                    </div>
                    <ul className="space-y-2.5 mb-6">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/90">
                          <Check size={13} className="text-primary shrink-0" />{f}
                        </li>
                      ))}
                      <li className="flex items-center gap-2.5 text-sm text-foreground/90">
                        <Check size={13} className="text-primary shrink-0" /><strong>Priority Support</strong>
                      </li>
                    </ul>
                    <Button onClick={() => handleOrderClick(plan)} className="w-full bg-gradient-primary text-white font-bold hover:opacity-90 shadow-glow mb-1">
                      <CreditCard size={15} className="mr-1.5" />Order Now
                    </Button>
                    <p className="text-[10px] text-center text-primary font-semibold mb-1">⚡ Activate in ~30 min</p>
                    <p className="text-[10px] text-center text-muted-foreground">7-Day Money-Back Guarantee</p>
                  </div>
                </div>
              ) : (
                <div key={plan.duration} className="rounded-2xl border border-border glass-card p-6 hover:border-primary/25 hover:shadow-glow transition-all duration-300">
                  <h3 className="font-heading text-base font-bold mb-1">{plan.duration}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-heading text-3xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  {plan.perMonth && plan.duration !== "1 Month" ? (
                    <p className="text-xs text-muted-foreground mb-5">{plan.perMonth} / month</p>
                  ) : (
                    <p className="text-xs text-muted-foreground mb-5">Billed monthly</p>
                  )}
                  <ul className="space-y-2.5 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <Check size={13} className="text-muted-foreground/60 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => handleOrderClick(plan)} variant="outline" className="w-full font-semibold border-border hover:bg-secondary mb-2">
                    <CreditCard size={15} className="mr-1.5" />Get Started →
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground">7-Day Money-Back Guarantee</p>
                </div>
              )
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-10 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><Shield size={14} className="text-primary shrink-0" /><span>Secure Payment</span></div>
          <div className="flex items-center gap-2"><CreditCard size={14} className="text-primary shrink-0" /><span className="hidden sm:inline">Cards / Crypto / PayPal / E-Transfer</span><span className="sm:hidden">Card / Crypto / PayPal</span></div>
          <div className="flex items-center gap-2"><Lock size={14} className="text-primary shrink-0" /><span>SSL Encrypted</span></div>
        </div>

        <CheckoutDialog
          open={checkoutOpen} onOpenChange={setCheckoutOpen}
          planName={selectedPlan.duration} planPrice={selectedPlan.price}
          connections={selectedPlan.connections}
          planOldPrice={selectedPlan.oldPrice || undefined}
          planPerMonth={selectedPlan.perMonth || undefined}
        />
      </div>
    </section>
  );
};

export default PricingSection;
