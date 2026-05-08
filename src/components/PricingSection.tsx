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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch"
          >
            {plansByConnection[activeTab].map((plan, i) => (
              <motion.div
                key={plan.duration}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className={`relative h-full ${plan.recommended ? "p-px rounded-2xl" : ""}`}
                style={plan.recommended ? { background: "var(--gradient-primary)" } : {}}
              >
                {/* Best value badge */}
                {plan.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-[11px] font-black px-5 py-1.5 rounded-full whitespace-nowrap shadow-glow tracking-wide z-10">
                    🏆 BEST VALUE
                  </span>
                )}

                {/* Save / flexible badge */}
                {!plan.recommended && plan.save && (
                  <span className="absolute -top-3 right-4 bg-emerald-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full z-10">
                    SAVE {plan.save}
                  </span>
                )}
                {!plan.recommended && plan.badge && (
                  <span className="absolute -top-3 right-4 bg-secondary border border-border text-muted-foreground text-[10px] font-semibold px-2.5 py-0.5 rounded-full z-10">
                    {plan.badge}
                  </span>
                )}

                {/* Card body — identical layout for all 4 */}
                <div className={`relative flex flex-col h-full rounded-2xl border px-5 pb-6 hover:shadow-glow transition-all duration-300 group ${
                  plan.recommended
                    ? "bg-[#0D0D1F] border-transparent pt-8"
                    : "bg-card border-border hover:border-primary/30 pt-5"
                }`}>

                  {/* Plan name */}
                  <div className="mb-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">{plan.duration}</h3>
                    {plan.recommended && (
                      <p className="text-[10px] text-primary/60 font-semibold uppercase tracking-widest mt-0.5">🔥 Most popular this week</p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-heading text-5xl font-black leading-none ${plan.recommended ? "text-gradient" : "text-foreground"}`}>
                        {plan.perMonth}
                      </span>
                      <span className="text-muted-foreground text-sm">/mo</span>
                    </div>
                    <p className="text-sm text-foreground/80 font-semibold mt-1">
                      {plan.oldPrice && <span className="line-through text-muted-foreground font-normal mr-1.5">{plan.oldPrice}</span>}
                      {plan.duration === "1 Month" ? "Billed monthly" : `${plan.price} total`}
                    </p>
                  </div>

                  {/* Savings line */}
                  {plan.saveAmount ? (
                    <p className={`text-xs font-semibold mb-5 ${plan.recommended ? "text-emerald-400" : "text-emerald-500"}`}>
                      {plan.recommended ? `✓ You save ${plan.saveAmount} (${plan.save} off)` : `Save ${plan.saveAmount} vs monthly`}
                    </p>
                  ) : (
                    <div className="mb-5" />
                  )}

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/75 group-hover:text-foreground/90 transition-colors">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          plan.recommended ? "bg-primary/20 border border-primary/40" : "bg-muted border border-border"
                        }`}>
                          <Check size={9} className={plan.recommended ? "text-primary" : "text-muted-foreground"} />
                        </span>
                        {f}
                      </li>
                    ))}
                    {plan.recommended && (
                      <li className="flex items-center gap-2.5 text-sm text-foreground font-semibold">
                        <span className="w-4 h-4 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                          <Check size={9} className="text-primary" />
                        </span>
                        Priority 24/7 Support
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  {plan.recommended ? (
                    <>
                      <Button onClick={() => handleOrderClick(plan)}
                        className="w-full bg-gradient-primary text-white font-bold hover:opacity-90 shadow-glow py-5 rounded-xl text-sm mb-2">
                        <CreditCard size={14} className="mr-1.5" /> Order Now
                      </Button>
                      <p className="text-[10px] text-center text-primary/70 font-semibold">⚡ Activate in ~30 min</p>
                    </>
                  ) : (
                    <Button onClick={() => handleOrderClick(plan)} variant="outline"
                      className="w-full font-semibold border-border hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all rounded-xl py-5 text-sm">
                      Get Started →
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
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
