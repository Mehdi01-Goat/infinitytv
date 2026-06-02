"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check, Server, DollarSign, Settings, Shield, Play, Users,
  TrendingUp, Zap, BarChart3, Globe, ChevronDown, ArrowRight,
  Sparkles, Building2, Crown, Package, Headphones, RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Constants ────────────────────────────────────────────────────────────────
const COST_PER_CREDIT = 1.46; // Business plan: $349 / 240 credits
const DEFAULT_SELL_PRICE = 15;

function getProfitTier(clients: number) {
  if (clients <= 20)  return { label: "Side Income",        color: "text-muted-foreground" };
  if (clients <= 60)  return { label: "Part-Time Business", color: "text-blue-400" };
  if (clients <= 120) return { label: "Full-Time Income",   color: "text-emerald-400" };
  return              { label: "Enterprise Scale",          color: "text-amber-400" };
}

// ─── Panel Dashboard Mockup ───────────────────────────────────────────────────
function PanelDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-[360px] mx-auto rounded-2xl border border-border/60 bg-card shadow-2xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 py-3.5 bg-secondary/60 border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-foreground tracking-wide">Reseller Dashboard</span>
        </div>
        <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
          PRO Plan
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4 border-b border-border/30">
        <div className="rounded-xl bg-secondary/50 p-3.5">
          <p className="text-[10px] text-muted-foreground mb-1">Active Clients</p>
          <p className="font-heading text-2xl font-black text-foreground">48</p>
          <p className="text-[10px] text-emerald-400 font-semibold mt-0.5">+8 this month</p>
        </div>
        <div className="rounded-xl bg-secondary/50 p-3.5">
          <p className="text-[10px] text-muted-foreground mb-1">Credits Left</p>
          <p className="font-heading text-2xl font-black text-foreground">214</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Ready to sell</p>
        </div>
      </div>

      <div className="px-4 py-3 border-b border-border/30">
        <p className="text-[11px] text-muted-foreground mb-1">This Month's Revenue</p>
        <div className="flex items-end gap-2">
          <span className="font-heading text-3xl font-black text-foreground">$1,440</span>
          <span className="text-emerald-400 text-xs font-bold pb-1 flex items-center gap-0.5">
            <TrendingUp size={11} /> +23%
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground">48 clients × $30 avg price</p>
      </div>

      <div className="px-4 py-3">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5">Recent Activity</p>
        {[
          { label: "New client subscribed", time: "Just now",  dot: "bg-emerald-400" },
          { label: "Client #47 renewed",    time: "1h ago",    dot: "bg-primary" },
          { label: "Sub-reseller created",  time: "3h ago",    dot: "bg-blue-400" },
          { label: "Free trial issued",     time: "Yesterday", dot: "bg-primary/50" },
        ].map(({ label, time, dot }) => (
          <div key={time} className="flex items-center justify-between py-1.5 border-b border-border/20 last:border-0">
            <div className="flex items-center gap-2.5">
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
              <span className="text-xs text-foreground">{label}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">{time}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 px-4 pb-4 pt-2">
        <button className="py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
          + Add Client
        </button>
        <button className="py-2.5 rounded-xl bg-gradient-primary text-white text-xs font-bold shadow-glow">
          + Free Trial
        </button>
      </div>
    </motion.div>
  );
}

// ─── Profit calculator ────────────────────────────────────────────────────────
function ProfitCalculator() {
  const [clients, setClients] = useState(50);
  const [sellPrice, setSellPrice] = useState(DEFAULT_SELL_PRICE);
  const revenue = clients * sellPrice;
  const creditCost = Math.round(clients * COST_PER_CREDIT * 100) / 100;
  const profit = Math.round((revenue - creditCost) * 100) / 100;
  const margin = Math.round((profit / revenue) * 100);
  const tier = getProfitTier(clients);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur p-6 sm:p-10 shadow-card"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className={`font-heading text-xl font-black ${tier.color}`}>{tier.label}</p>
          <p className="text-xs text-muted-foreground mt-0.5">Estimated monthly potential</p>
        </div>
        <BarChart3 size={24} className="text-primary" />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Number of monthly clients</p>
            <span className="font-heading text-xl font-black text-primary">{clients}</span>
          </div>
          <Slider value={[clients]} onValueChange={(v) => setClients(v[0])} min={5} max={200} step={5} />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Your selling price / client / month</p>
            <span className="font-heading text-xl font-black text-primary">${sellPrice}</span>
          </div>
          <Slider value={[sellPrice]} onValueChange={(v) => setSellPrice(v[0])} min={5} max={50} step={1} />
          <p className="text-xs text-muted-foreground mt-1">You set your own prices — sell at any margin you want</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
        <div className="rounded-xl bg-secondary p-4 text-center">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Revenue</p>
          <p className="font-heading text-xl font-bold text-foreground">${revenue.toLocaleString()}</p>
        </div>
        <div className="rounded-xl bg-secondary p-4 text-center">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Credit Cost</p>
          <p className="font-heading text-xl font-bold text-foreground">${creditCost}</p>
        </div>
        <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-4 text-center">
          <p className="text-[10px] uppercase tracking-widest text-emerald-400 mb-1">Net Profit</p>
          <p className="font-heading text-xl font-bold text-emerald-400">${profit.toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 text-center">
          <p className="text-[10px] uppercase tracking-widest text-primary mb-1">Margin</p>
          <p className="font-heading text-xl font-bold text-primary">{margin}%</p>
        </div>
      </div>

      <Button
        onClick={() => setContactPlan({ name: "Starter", price: 199, credits: 120 })}
        className="w-full mt-6 bg-gradient-primary text-white font-bold py-6 shadow-glow hover:opacity-90 text-base"
      >
        Start Earning ${profit.toLocaleString()}/mo — Get Your Panel <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </motion.div>
  );
}

// ─── FAQ item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border bg-card overflow-hidden transition-colors ${open ? "border-primary/30" : "border-border"}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left">
        <span className="font-semibold text-foreground text-sm pr-4">{q}</span>
        <ChevronDown size={16} className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">{a}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function IptvReseller() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="pt-14 pb-20 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 65%)" }} />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <Sparkles size={13} className="text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">IPTV Reseller Program</span>
              </div>

              <h1 className="font-heading font-black leading-[1.05] mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Build Your Own<br /><span className="text-gradient">IPTV Business</span><br />From Scratch
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Buy credits at wholesale price, sell subscriptions at your own rate, keep{" "}
                <strong className="text-foreground">90%+ profit margins</strong>. Full panel. Full control. No tech skills needed.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Crown,     label: "Your brand, your prices" },
                  { icon: Zap,       label: "Instant panel access" },
                  { icon: Users,     label: "Create sub-resellers" },
                  { icon: RefreshCw, label: "Credits never expire" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-secondary/60 border border-border rounded-full px-3.5 py-2 text-sm">
                    <Icon size={13} className="text-primary shrink-0" />
                    <span className="font-medium text-foreground text-xs sm:text-sm">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setContactPlan({ name: "Starter", price: 199, credits: 120 })}
                  className="bg-gradient-primary text-white font-bold px-7 py-6 text-base shadow-glow hover:opacity-90">
                  Get Your Panel Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" onClick={() => setContactPlan({ name: "Starter", price: 199, credits: 120 })}
                  className="border-border px-7 py-6 text-base font-semibold hover:bg-secondary">
                  Ask a Question
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-5 flex items-center gap-1.5">
                <Users size={11} className="text-primary" />
                Trusted by <strong className="text-foreground">500+</strong> active resellers across 60+ countries
              </p>
            </motion.div>

            <div className="hidden lg:flex justify-center">
              <PanelDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="py-8 border-b border-border bg-secondary/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border max-w-4xl mx-auto">
            {[
              { icon: Users,     value: "500+",   label: "Active Resellers" },
              { icon: Globe,     value: "60+",    label: "Countries" },
              { icon: Package,   value: "90%+",   label: "Avg Profit Margin" },
              { icon: Headphones,value: "24/7",   label: "Reseller Support" },
            ].map(({ icon: Icon, value, label }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center px-4 sm:px-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  <Icon size={17} className="text-primary" />
                </div>
                <span className="font-heading text-2xl md:text-3xl font-black text-foreground">{value}</span>
                <span className="text-xs text-muted-foreground mt-1">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How credits work ──────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">The Model</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black">
              How the <span className="text-gradient">Credit System</span> Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Credits are your wholesale inventory. Each credit activates one month of service for one client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                { icon: Package,  label: "Buy Credits",         desc: "Purchase a credit pack at wholesale price. Credits are loaded instantly to your panel and never expire." },
                { icon: Crown,    label: "Set Your Own Prices", desc: "There is no fixed selling price. Sell 1-month, 3-month, or 12-month plans at whatever price you choose." },
                { icon: Users,    label: "Activate Clients",    desc: "Use your panel to create client accounts. 1-month = 1 credit · 3-month = 3 credits · 12-month = 12 credits." },
                { icon: DollarSign, label: "Keep the Profit",   desc: "The difference between your selling price and credit cost is pure profit. Most resellers earn 80–90% margins." },
              ].map(({ icon: Icon, label, desc }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
              <div className="px-5 py-3.5 bg-secondary/50 border-b border-border/50">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Credit Usage Chart</p>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { duration: "1 Month",  credits: 1,  label: "1 credit per client" },
                  { duration: "3 Months", credits: 3,  label: "3 credits per client" },
                  { duration: "6 Months", credits: 6,  label: "6 credits per client" },
                  { duration: "1 Year",   credits: 12, label: "12 credits per client" },
                ].map(({ duration, credits, label }) => (
                  <div key={duration} className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground w-20 shrink-0">{duration}</span>
                    <div className="flex-1 h-7 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${(credits / 12) * 100}%` }}
                        viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-heading font-bold text-foreground text-sm">{credits}</span>
                      <span className="text-xs text-muted-foreground ml-1">cr.</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="rounded-xl bg-primary/5 border border-primary/15 p-4">
                  <p className="text-xs text-primary font-semibold mb-1">Example</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Buy Business plan (240 credits) → Sell 20 clients on 1-year plans (20×12=240 credits used) → Cost: <strong className="text-foreground">$349</strong> · Revenue at $20/mo each: <strong className="text-foreground">$4,800/yr</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pricing plans ─────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Credit Packs</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black">
              Choose Your <span className="text-gradient">Reseller Plan</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              All packs include the full panel with every feature. Credits never expire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Starter",        credits: 120,  price: 199,  perCredit: "1.66",
                profitExample: "$1,800+", popular: false,
                badge: null,
              },
              {
                name: "Business",       credits: 240,  price: 349,  perCredit: "1.45",
                profitExample: "$3,600+", popular: true,
                badge: "🏆 Most Popular",
              },
              {
                name: "Pro",            credits: 600,  price: 799,  perCredit: "1.33",
                profitExample: "$9,000+", popular: false,
                badge: "Best Value / Credit",
              },
            ].map((plan, i) => (
              <motion.div key={plan.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl flex flex-col ${plan.popular ? "p-px" : ""}`}
                style={plan.popular ? { background: "var(--gradient-primary)" } : {}}
              >
                <div className={`rounded-2xl flex flex-col flex-1 p-6 sm:p-7 h-full ${
                  plan.popular ? "bg-[#0F0F1E]" : "border border-border bg-card"
                }`}>
                  {plan.badge && (
                    <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap ${
                      plan.popular ? "bg-gradient-primary text-white shadow-glow" : "bg-secondary border border-primary/30 text-primary"
                    }`}>
                      {plan.badge}
                    </span>
                  )}

                  <div className={plan.badge ? "mt-3" : ""}>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{plan.name}</p>
                    <h3 className="font-heading text-3xl font-black mb-0.5">
                      <span className={plan.popular ? "text-gradient" : "text-foreground"}>${plan.price}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">{plan.credits} credits</p>
                    <p className="text-xs text-primary font-semibold mb-5">${plan.perCredit} per credit</p>
                  </div>

                  <div className="rounded-xl bg-emerald-500/8 border border-emerald-500/20 p-3 mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-0.5">Profit potential</p>
                    <p className="font-heading text-lg font-bold text-emerald-400">{plan.profitExample} / month</p>
                    <p className="text-[10px] text-muted-foreground">based on $15 avg sell price</p>
                  </div>

                  <ul className="space-y-2 mb-7 flex-1">
                    {[
                      "Full reseller panel access",
                      "Create sub-resellers",
                      "Unlimited free trials / day",
                      "Credits never expire",
                      "22,000+ live channels",
                      "95,000+ VOD library",
                      "4K & Full HD quality",
                      "Anti-buffering servers",
                      "EPG & catch-up TV",
                      "24/7 priority support",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Check size={13} className="text-primary shrink-0" />{f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => setContactPlan({ name: plan.name, price: plan.price, credits: plan.credits })}
                    className={`w-full font-bold py-5 ${
                      plan.popular
                        ? "bg-gradient-primary text-white hover:opacity-90 shadow-glow"
                        : "bg-secondary text-foreground hover:bg-secondary/70 border border-border"
                    }`}
                  >
                    Get {plan.name} Plan
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Panel features ────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Your Control Center</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black">
              Everything in Your <span className="text-gradient">Reseller Panel</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Shield,    title: "Private Reseller Panel",   desc: "Your own branded panel with complete client management. Your customers never see InfinityTV — it's your business." },
              { icon: Crown,     title: "Set Your Own Prices",      desc: "Sell at $10, $20, or $50/month — your choice. No restrictions on pricing or profit margins." },
              { icon: Users,     title: "Create Sub-Resellers",     desc: "Build a network below you. Create resellers who buy credits from you and manage their own clients." },
              { icon: Play,      title: "Unlimited Free Trials",    desc: "Issue as many free trial accounts as you want, every single day. Convert prospects effortlessly." },
              { icon: RefreshCw, title: "Credits Never Expire",     desc: "No rush to use your credits. Stock up during promotions and use them whenever your business needs them." },
              { icon: Headphones,title: "Dedicated Reseller Support",desc: "Priority support via WhatsApp. Setup guides, tutorials, and marketing tips provided on day one." },
              { icon: Settings,  title: "Full Account Control",     desc: "Suspend, renew, delete, or modify any client account at any time directly from your panel." },
              { icon: BarChart3, title: "Real-Time Analytics",      desc: "Track active subscriptions, expiring accounts, and revenue in your dashboard — always up to date." },
              { icon: Globe,     title: "22,000+ Channels",         desc: "Your clients get the same premium content: live TV, sports, PPV, 4K movies, and series from 190+ countries." },
            ].map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-glow transition-all duration-300 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  <f.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground mb-1.5">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Profit Calculator ─────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Profit Calculator</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black">
              How Much Could <span className="text-gradient">Your Business Earn</span>?
            </h2>
          </div>
          <ProfitCalculator />
        </div>
      </section>

      {/* ── How to start ──────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-4xl text-center">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Getting Started</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black mb-12">
            Your Business Launches in <span className="text-gradient">3 Steps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-11 left-[calc(16.66%+36px)] right-[calc(16.66%+36px)] h-px border-t border-dashed border-primary/25" />
            {[
              { n: "01", icon: Package,    title: "Choose a Credit Pack",  desc: "Select the plan that fits your starting goals. Contact us on WhatsApp and we set up your panel within minutes." },
              { n: "02", icon: Settings,   title: "Configure Your Panel",  desc: "Log into your reseller dashboard. Set your branding, pricing, and create your first client accounts." },
              { n: "03", icon: Building2,  title: "Grow Your Business",    desc: "Start selling — social media, word of mouth, or build a reseller network. Scale at your own pace." },
            ].map(({ n, icon: Icon, title, desc }, i) => (
              <motion.div key={n}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative">
                <div className="relative mb-5 z-10">
                  <div className="w-24 h-24 rounded-2xl border border-primary/20 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, hsl(240 11% 11%) 0%, hsl(263 89% 66% / 0.1) 100%)", boxShadow: "0 0 30px rgba(139,92,246,0.12)" }}>
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-black text-white shadow-glow">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black">
              Reseller <span className="text-gradient">FAQ</span>
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "What exactly is a credit?", a: "One credit activates one month of IPTV service for one client. A 1-month subscription uses 1 credit, a 3-month uses 3 credits, a 6-month uses 6, and a 1-year uses 12. Credits are loaded to your panel and used when you create or renew client accounts." },
              { q: "Do the credits expire?", a: "No. Your credits never expire and carry over indefinitely. You can buy a large pack during a promotion and use the credits over 6–12 months without any pressure." },
              { q: "Can I create sub-resellers?", a: "Yes — you can create resellers under your account who use your credits. You sell credits to them at your own markup and they manage their own clients independently through their own sub-panel." },
              { q: "Can I offer free trials to my customers?", a: "Absolutely. You can generate unlimited free trial accounts every day directly from your panel. Trials are typically 24–48 hours and are a great conversion tool. Trial accounts don't consume credits." },
              { q: "How quickly do I get access to my panel?", a: "After purchase confirmation (usually within minutes of payment), you receive your panel login credentials and a full setup tutorial. Most resellers are operational within 30 minutes." },
              { q: "Do I need any technical skills to be a reseller?", a: "No technical skills required. The panel is designed to be simple and intuitive. We also provide a full tutorial and ongoing WhatsApp support to help you with anything you need." },
              { q: "Can I use my own brand name?", a: "Yes. Your clients interact with your brand — they never see InfinityTV. You name your service whatever you like, set your own pricing, and operate as a fully independent business." },
            ].map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-6">
              <Building2 size={28} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black mb-4">
              Start Your <span className="text-gradient">IPTV Business</span> Today
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-3 leading-relaxed">
              Panel ready in minutes. Credits never expire. 90%+ profit margins from day one.
            </p>
            <p className="text-muted-foreground text-sm mb-10">
              Trusted by <strong className="text-foreground">500+ resellers</strong> worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={() => setContactPlan({ name: "Starter", price: 199, credits: 120 })}
                className="bg-gradient-primary text-white font-bold px-8 sm:px-10 py-6 text-base shadow-glow hover:opacity-90 w-full sm:w-auto">
                Get My Reseller Panel <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={() => setContactPlan({ name: "Starter", price: 199, credits: 120 })}
                className="border-border px-8 sm:px-10 py-6 text-base font-semibold hover:bg-secondary w-full sm:w-auto">
                Ask a Question
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-8">
              {[
                { icon: Zap,       label: "Instant panel setup" },
                { icon: RefreshCw, label: "Credits never expire" },
                { icon: Shield,    label: "Private & secure" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon size={12} className="text-primary" />{label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Popup ─────────────────────────────────────────── */}
      {contactPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setContactPlan(null)} />
          <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <button onClick={() => setContactPlan(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-lg leading-none">✕</button>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-foreground">Get the {contactPlan.name} Plan</h3>
              <p className="text-sm text-muted-foreground mt-1">Choose how to reach us — we respond within minutes.</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 mb-5 text-sm text-primary font-medium">
              📦 {contactPlan.name} · {contactPlan.credits} credits · ${contactPlan.price}
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/14702642482?text=${encodeURIComponent(`Hi! I want to order the ${contactPlan.name} Reseller Plan (${contactPlan.credits} credits) on InfinityTV. Can you help me get started?`)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1fbe5c] text-white font-semibold text-sm transition-colors"
              >
                💬 WhatsApp
              </a>
              <a
                href={`https://t.me/infinitytvreseller?text=${encodeURIComponent(`Hi! I want the ${contactPlan.name} Reseller Plan (${contactPlan.credits} credits / $${contactPlan.price}) on InfinityTV.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#229ED9] hover:bg-[#1a8bbf] text-white font-semibold text-sm transition-colors"
              >
                ✈️ Telegram
              </a>
              <a
                href={`mailto:contact@infinitytv.io?subject=${encodeURIComponent(`Reseller — ${contactPlan.name} Plan`)}&body=${encodeURIComponent(`Hi,\n\nI want the ${contactPlan.name} Plan (${contactPlan.credits} credits / $${contactPlan.price}).\n\nPlease send payment details.\n\nThank you.`)}`}
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-primary hover:opacity-90 text-white font-semibold text-sm transition-colors"
              >
                ✉️ Email
              </a>
            </div>
            <p className="text-center text-[11px] text-muted-foreground mt-4">Average response time: under 10 minutes</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}