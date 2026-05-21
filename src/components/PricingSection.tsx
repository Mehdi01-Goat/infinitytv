"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CreditCard, Shield, Lock, Zap, Monitor, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import CheckoutDialog from "@/components/CheckoutDialog";
import { useTranslation } from "@/context/LanguageContext";

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
    { duration: "1 Month",   price: "€11.98",  perMonth: "€11.98", badge: "Most Flexible" },
    { duration: "3 Months",  price: "€19.98",  perMonth: "€6.66",  save: "44%", saveAmount: "€15.96" },
    { duration: "6 Months",  price: "€34.98",  perMonth: "€5.83",  save: "51%", saveAmount: "€36.90" },
    { duration: "12 Months", price: "€58.98",  perMonth: "€4.91",  save: "59%", saveAmount: "€84.78", recommended: true, oldPrice: "€143.76" },
  ],
  1: [
    { duration: "1 Month",   price: "€18.98",  perMonth: "€18.98", badge: "Most Flexible" },
    { duration: "3 Months",  price: "€29.98",  perMonth: "€9.99",  save: "47%", saveAmount: "€26.96" },
    { duration: "6 Months",  price: "€54.98",  perMonth: "€9.16",  save: "51%", saveAmount: "€58.90" },
    { duration: "12 Months", price: "€99.98",  perMonth: "€8.33",  save: "56%", saveAmount: "€127.78", recommended: true, oldPrice: "€227.76" },
  ],
  2: [
    { duration: "1 Month",   price: "€24.98",  perMonth: "€24.98", badge: "Most Flexible" },
    { duration: "3 Months",  price: "€49.98",  perMonth: "€16.66", save: "33%", saveAmount: "€24.96" },
    { duration: "6 Months",  price: "€84.98",  perMonth: "€14.16", save: "43%", saveAmount: "€64.90" },
    { duration: "12 Months", price: "€149.98", perMonth: "€12.49", save: "50%", saveAmount: "€149.78", recommended: true, oldPrice: "€299.76" },
  ],
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();
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
    <section id="pricing" className="py-12 md:py-24 border-t border-border">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("pricing_eyebrow")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            {t("pricing_title")} <span className="text-gradient">{t("pricing_title_gradient")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("pricing_sub")}
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
                  </ul>

                  {/* CTA */}
                  {plan.recommended ? (
                    <>
                      <Button onClick={() => handleOrderClick(plan)}
                        className="w-full bg-gradient-primary text-white font-bold hover:opacity-90 shadow-glow py-5 rounded-xl text-sm mb-2">
                        <CreditCard size={14} className="mr-1.5" /> {t("pricing_cta_recommended")}
                      </Button>
                      <p className="text-[10px] text-center text-primary/70 font-semibold">⚡ Activate in ~30 min</p>
                    </>
                  ) : (
                    <Button onClick={() => handleOrderClick(plan)} variant="outline"
                      className="w-full font-semibold border-border hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all rounded-xl py-5 text-sm">
                      {t("pricing_cta_default")}
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Payment methods */}
        <div className="mt-10 border-t border-border pt-8 flex flex-col items-center gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Accepted Payment Methods</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {/* Visa */}
            <div className="flex items-center justify-center h-9 px-4 rounded-lg bg-secondary border border-border">
              <svg height="22" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5 1.5L21.5 18.5H17L21 1.5H25.5Z" fill="#1A1F71"/>
                <path d="M40.5 2C39.5 1.6 37.9 1.2 36 1.2C31.5 1.2 28.3 3.5 28.3 6.8C28.3 9.3 30.6 10.7 32.3 11.5C34 12.3 34.6 12.9 34.6 13.6C34.6 14.7 33.2 15.3 31.9 15.3C30 15.3 29 15 27.4 14.3L26.7 14L26 18.1C27.2 18.6 29.4 19 31.7 19C36.5 19 39.6 16.8 39.6 13.2C39.6 11.2 38.4 9.7 35.6 8.4C34.1 7.7 33.2 7.1 33.2 6.3C33.2 5.6 34 4.9 35.6 4.9C37 4.9 38 5.2 38.8 5.5L39.2 5.7L40.5 2Z" fill="#1A1F71"/>
                <path d="M47 1.5H43.5C42.5 1.5 41.7 1.8 41.3 2.8L35 18.5H39.8L40.8 15.8H46.5L47.1 18.5H51.4L47 1.5ZM42 12.3L44.3 6L45.5 12.3H42Z" fill="#1A1F71"/>
                <path d="M15.5 1.5L11.1 13L10.6 10.5C9.7 7.7 7.1 4.7 4.2 3.2L8.2 18.5H13L20.4 1.5H15.5Z" fill="#1A1F71"/>
                <path d="M7 1.5H0L0 1.8C5.4 3.1 9 6.4 10.6 10.5L8.9 2.8C8.6 1.8 7.9 1.5 7 1.5Z" fill="#F9A533"/>
              </svg>
            </div>
            {/* Mastercard */}
            <div className="flex items-center justify-center h-9 px-3 rounded-lg bg-secondary border border-border">
              <svg height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13" cy="12" r="10" fill="#EB001B"/>
                <circle cx="25" cy="12" r="10" fill="#F79E1B"/>
                <path d="M19 5.3A10 10 0 0 1 23.7 12 10 10 0 0 1 19 18.7 10 10 0 0 1 14.3 12 10 10 0 0 1 19 5.3Z" fill="#FF5F00"/>
              </svg>
            </div>
            {/* PayPal */}
            <div className="flex items-center justify-center h-9 px-4 rounded-lg bg-secondary border border-border gap-1">
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 16.5L5.6 2H11.5C13.5 2 14.7 3.1 14.3 5.5C13.8 8.5 11.8 10 9.3 10H7L6 14L5.3 16.5H3.5Z" fill="#003087"/>
                <path d="M1 14.5L3.1 0H9C11 0 12.2 1.1 11.8 3.5C11.3 6.5 9.3 8 6.8 8H4.5L3.5 12L2.8 14.5H1Z" fill="#009CDE"/>
              </svg>
              <span className="text-xs font-bold text-[#003087]">PayPal</span>
            </div>
            {/* Crypto */}
            <div className="flex items-center justify-center h-9 px-4 rounded-lg bg-secondary border border-border gap-1.5">
              <svg height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#F7931A"/>
                <path d="M16.5 10.3C16.7 9 15.7 8.3 14.3 7.8L14.8 5.8L13.6 5.5L13.1 7.4C12.8 7.3 12.5 7.3 12.1 7.2L12.6 5.3L11.4 5L10.9 7L10.2 6.8L9 6.5L8.7 7.8C8.7 7.8 9.6 8 9.6 8C10.1 8.1 10.2 8.5 10.1 8.7L9.4 11.6C9.4 11.6 9.4 11.7 9.3 11.7C9.3 11.7 8.4 11.5 8.4 11.5L7.8 12.9L9 13.2L9.7 13.4L9.2 15.4L10.4 15.7L10.9 13.7C11.2 13.8 11.6 13.8 11.9 13.9L11.4 15.8L12.6 16.1L13.1 14.1C15.1 14.5 16.6 14.3 17.2 12.5C17.7 11.1 17.2 10.3 16.2 9.8C16.9 9.6 17.4 9.1 16.5 10.3ZM15 12.3C14.6 13.7 12.3 13 11.5 12.8L12.2 10.2C13 10.4 15.4 10.9 15 12.3ZM15.4 10C15 11.3 13.2 10.7 12.5 10.5L13.1 8.2C13.8 8.4 15.8 8.7 15.4 10Z" fill="white"/>
              </svg>
              <span className="text-xs font-semibold text-muted-foreground">Crypto</span>
            </div>
            {/* E-Transfer */}
            <div className="flex items-center justify-center h-9 px-4 rounded-lg bg-secondary border border-border">
              <span className="text-xs font-semibold text-muted-foreground">🏦 E-Transfer</span>
            </div>
            {/* MoneyGram */}
            <div className="flex items-center justify-center h-9 px-4 rounded-lg bg-secondary border border-border">
              <span className="text-xs font-bold" style={{color: '#d0021b'}}>MoneyGram</span>
            </div>
            {/* Western Union */}
            <div className="flex items-center justify-center h-9 px-4 rounded-lg bg-secondary border border-border">
              <span className="text-xs font-bold" style={{color: '#FFAA00'}}>Western Union</span>
            </div>
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

