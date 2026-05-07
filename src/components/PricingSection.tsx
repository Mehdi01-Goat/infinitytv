"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CreditCard, Shield, Lock, Zap, Monitor, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import CheckoutDialog from "@/components/CheckoutDialog";

const connectionTabs = [
  { label: "1 Screen", value: "1 Connection", icon: Monitor },
  { label: "2 Screens", value: "2 Connections", icon: Monitor },
  { label: "3 Screens", value: "3 Connections", icon: Tv },
];

const features = [
  "22,000+ Worldwide Channels",
  "95,000+ VODs & Series",
  "Anti-Buffering Technology",
  "PPV Channels & EPG Guide",
  "4K & Full HD Quality",
  "All Devices Supported",
  "Stable & Fast Servers",
  "24/7 Online Support",
];

type Plan = {
  duration: string;
  price: string;
  perMonth: string;
  recommended?: boolean;
  oldPrice?: string;
  save?: string;
  saveAmount?: string;
  badge?: string;
};

const plansByConnection: Record<number, Plan[]> = {
  0: [
    { duration: "1 Month",   price: "$11.98",  perMonth: "$11.98", badge: "Most Flexible" },
    { duration: "3 Months",  price: "$19.98",  perMonth: "$6.66",  save: "44%", saveAmount: "$15.96" },
    { duration: "6 Months",  price: "$34.98",  perMonth: "$5.83",  save: "51%", saveAmount: "$36.90" },
    { duration: "12 Months", price: "$58.98",  perMonth: "$4.91",  save: "59%", saveAmount: "$84.78", recommended: true, oldPrice: "$143.76" },
  ],
  1: [
    { duration: "1 Month",   price: "$18.98",  perMonth: "$18.98", badge: "Most Flexible" },
    { duration: "3 Months",  price: "$29.98",  perMonth: "$9.99",  save: "47%", saveAmount: "$26.96" },
    { duration: "6 Months",  price: "$54.98",  perMonth: "$9.16",  save: "51%", saveAmount: "$58.90" },
    { duration: "12 Months", price: "$99.98",  perMonth: "$8.33",  save: "56%", saveAmount: "$127.78", recommended: true, oldPrice: "$227.76" },
  ],
  2: [
    { duration: "1 Month",   price: "$24.98",  perMonth: "$24.98", badge: "Most Flexible" },
    { duration: "3 Months",  price: "$49.98",  perMonth: "$16.66", save: "33%", saveAmount: "$24.96" },
    { duration: "6 Months",  price: "$84.98",  perMonth: "$14.16", save: "43%", saveAmount: "$64.90" },
    { duration: "12 Months", price: "$149.98", perMonth: "$12.49", save: "50%", saveAmount: "$149.78", recommended: true, oldPrice: "$299.76" },
  ],
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ duration: string; price: string; connections: string; oldPrice: string; perMonth: string }>({
    duration: "", price: "", connections: "", oldPrice: "", perMonth: "",
  });

  const handleOrderClick = (plan: Plan) => {
    setSelectedPlan({
      duration: plan.duration,
      price: plan.price,
      connections: connectionTabs[activeTab].value,
      oldPrice: plan.oldPrice ?? "",
      perMonth: plan.perMonth ?? "",
    });
    setCheckoutOpen(true);
  };

  return (
    <section id="pricing" className="py-24 border-t border-border">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            All plans include every feature. No hidden fees, no contracts. Cancel anytime.
          </p>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-xs text-emerald-400 font-semibold">
            <Shield size={12} /> 7-Day Money-Back Guarantee
          </div>
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs text-primary font-semibold">
            <Zap size={12} /> Save up to 59% Annually
          </div>
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-xs text-blue-400 font-semibold">
            <Lock size={12} /> SSL Secured Checkout
          </div>
        </div>

        {/* Connection tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {connectionTabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <button key={tab.label} onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === i
                    ? "bg-gradient-primary text-white shadow-glow"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}>
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 items-end"
          >
            {plansByConnection[activeTab].map((plan, i) =>
              plan.recommended ? (
                /* ── Recommended card ─────────────────────────── */
                <motion.div
                  key={plan.duration}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="relative p-px rounded-2xl lg:-mt-5 lg:mb-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {/* Best value badge */}
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-[11px] font-black px-5 py-1.5 rounded-full whitespace-nowrap shadow-glow tracking-wide z-10">
                    🏆 BEST VALUE
                  </span>

                  <div className="relative rounded-2xl bg-[#0D0D1F] px-5 pt-8 pb-6 h-full flex flex-col">
                    {/* Plan name + popularity */}
                    <div className="mb-4">
                      <h3 className="font-heading text-lg font-bold text-foreground">{plan.duration}</h3>
                      <p className="text-[10px] text-primary/60 font-semibold uppercase tracking-widest mt-0.5">
                        🔥 Most popular this week
                      </p>
                    </div>

                    {/* Per-month hero price */}
                    <div className="mb-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-heading text-5xl font-black text-gradient leading-none">{plan.perMonth}</span>
                        <span className="text-muted-foreground text-sm">/mo</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {plan.oldPrice && <span className="line-through mr-1.5">{plan.oldPrice}</span>}
                        <span className="text-foreground font-semibold">{plan.price} total</span>
                      </p>
                    </div>

                    {/* Savings pill */}
                    {plan.save && plan.saveAmount && (
                      <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/25 rounded-full px-3 py-1 mb-5 w-fit">
                        <span className="text-emerald-400 text-xs font-bold">✓ You save {plan.saveAmount} ({plan.save} off)</span>
                      </div>
                    )}

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/90">
                          <span className="w-4 h-4 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                            <Check size={9} className="text-primary" />
                          </span>
                          {f}
                        </li>
                      ))}
                      <li className="flex items-center gap-2.5 text-sm text-foreground font-semibold">
                        <span className="w-4 h-4 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                          <Check size={9} className="text-primary" />
                        </span>
                        Priority 24/7 Support
                      </li>
                    </ul>

                    {/* CTA */}
                    <Button
                      onClick={() => handleOrderClick(plan)}
                      className="w-full bg-gradient-primary text-white font-bold hover:opacity-90 shadow-glow py-5 rounded-xl text-sm mb-2"
                    >
                      <CreditCard size={14} className="mr-1.5" /> Order Now
                    </Button>
                    <p className="text-[10px] text-center text-primary/70 font-semibold">⚡ Activate in ~30 min</p>
                  </div>
                </motion.div>
              ) : (
                /* ── Regular card ──────────────────────────────── */
                <motion.div
                  key={plan.duration}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="relative rounded-2xl border border-border bg-card px-5 pt-5 pb-5 flex flex-col hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
                >
                  {/* Save badge */}
                  {plan.save ? (
                    <span className="absolute -top-3 right-4 bg-emerald-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full">
                      SAVE {plan.save}
                    </span>
                  ) : plan.badge ? (
                    <span className="absolute -top-3 right-4 bg-secondary border border-border text-muted-foreground text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {plan.badge}
                    </span>
                  ) : null}

                  {/* Plan name */}
                  <h3 className="font-heading text-base font-bold text-foreground mb-3">{plan.duration}</h3>

                  {/* Per-month hero price */}
                  <div className="mb-1">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-4xl font-black text-foreground leading-none">{plan.perMonth}</span>
                      <span className="text-muted-foreground text-xs">/mo</span>
                    </div>
                    {plan.duration !== "1 Month" ? (
                      <p className="text-[11px] text-muted-foreground mt-1">{plan.price} billed total</p>
                    ) : (
                      <p className="text-[11px] text-muted-foreground mt-1">Billed monthly</p>
                    )}
                  </div>

                  {/* Save amount */}
                  {plan.saveAmount && (
                    <p className="text-[11px] text-emerald-400 font-semibold mb-4">Save {plan.saveAmount} vs monthly</p>
                  )}
                  {!plan.saveAmount && <div className="mb-4" />}

                  {/* Features */}
                  <ul className="space-y-2 mb-5 flex-1">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors">
                        <Check size={11} className="text-muted-foreground/50 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={() => handleOrderClick(plan)}
                    variant="outline"
                    className="w-full font-semibold border-border hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all rounded-xl py-5 text-sm"
                  >
                    Get Started →
                  </Button>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom trust bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10 text-xs text-muted-foreground border-t border-border pt-8">
          <div className="flex items-center gap-2">
            <Shield size={13} className="text-emerald-400 shrink-0" />
            <span>7-Day Money-Back</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={13} className="text-primary shrink-0" />
            <span>Card · Crypto · PayPal · E-Transfer</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={13} className="text-primary shrink-0" />
            <span>Activated in ~30 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock size={13} className="text-blue-400 shrink-0" />
            <span>SSL Encrypted</span>
          </div>
        </div>

      </div>

      <CheckoutDialog
        open={checkoutOpen} onOpenChange={setCheckoutOpen}
        planName={selectedPlan.duration} planPrice={selectedPlan.price}
        connections={selectedPlan.connections}
        planOldPrice={selectedPlan.oldPrice || undefined}
        planPerMonth={selectedPlan.perMonth || undefined}
      />
    </section>
  );
};

export default PricingSection;
