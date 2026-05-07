"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, X, TrendingUp, Zap, Users, Headphones,
  Banknote, CreditCard, ChevronDown, Star, Clock, Shield,
  Link2, BarChart3, DollarSign, Sparkles, Globe, Copy, CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Constants ────────────────────────────────────────────────────────────────
const RATE = 0.35;
const AVG_SALE = 58.98;
const PER_SALE = +(AVG_SALE * RATE).toFixed(2); // $20.64

function getTier(n: number) {
  if (n <= 10) return { label: "Side Hustle", sub: "Perfect for beginners", color: "text-muted-foreground", bar: "from-border to-border" };
  if (n <= 30) return { label: "Part-Time Income", sub: "Growing affiliate", color: "text-blue-400", bar: "from-blue-600 to-blue-400" };
  if (n <= 60) return { label: "Full-Time Potential", sub: "Serious earner", color: "text-emerald-400", bar: "from-emerald-600 to-emerald-400" };
  return { label: "Elite Earner", sub: "Top affiliate", color: "text-amber-400", bar: "from-amber-600 to-amber-400" };
}

// ─── Mock dashboard (hero visual) ─────────────────────────────────────────────
function AffiliDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-[360px] mx-auto rounded-2xl border border-border/60 bg-card shadow-2xl overflow-hidden"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-secondary/60 border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-foreground tracking-wide">Affiliate Dashboard</span>
        </div>
        <span className="text-[10px] text-muted-foreground">Live</span>
      </div>

      {/* Monthly total */}
      <div className="px-5 pt-5 pb-4 border-b border-border/30">
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-2">This Month's Earnings</p>
        <div className="flex items-end gap-2.5">
          <span className="font-heading text-4xl font-black text-foreground">$412.50</span>
          <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold pb-1">
            <TrendingUp size={13} />
            +23%
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground mt-1">20 confirmed sales · $20.64 avg commission</p>
      </div>

      {/* Two stats */}
      <div className="grid grid-cols-2 gap-3 px-5 py-4 border-b border-border/30">
        <div className="rounded-xl bg-secondary/50 p-3.5">
          <p className="text-[10px] text-muted-foreground mb-1">Today</p>
          <p className="font-heading text-xl font-bold text-foreground">3 sales</p>
          <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">+$61.92</p>
        </div>
        <div className="rounded-xl bg-secondary/50 p-3.5">
          <p className="text-[10px] text-muted-foreground mb-1">Link Clicks</p>
          <p className="font-heading text-xl font-bold text-foreground">47</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">6.4% conv. rate</p>
        </div>
      </div>

      {/* Recent payouts */}
      <div className="px-5 py-4">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Recent Payouts</p>
        {[
          { amount: "$61.92", label: "3 sales", time: "Just now", dot: "bg-emerald-400" },
          { amount: "$20.64", label: "1 sale", time: "2h ago", dot: "bg-primary" },
          { amount: "$41.28", label: "2 sales", time: "Yesterday", dot: "bg-primary/50" },
        ].map(({ amount, label, time, dot }) => (
          <div key={time} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
            <div className="flex items-center gap-2.5">
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
              <span className="text-sm font-bold text-foreground">{amount}</span>
              <span className="text-[11px] text-muted-foreground">{label}</span>
            </div>
            <span className="text-[11px] text-muted-foreground">{time}</span>
          </div>
        ))}
      </div>

      {/* Withdraw CTA */}
      <div className="px-5 pb-5">
        <button className="w-full py-3 rounded-xl bg-gradient-primary text-white text-sm font-bold flex items-center justify-center gap-2 shadow-glow">
          Withdraw $412.50 <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Testimonial card ─────────────────────────────────────────────────────────
function TestimonialCard({
  name, handle, avatar, text, earnings, delay,
}: {
  name: string; handle: string; avatar: string; text: string; earnings: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 shadow-card hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-base shrink-0">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-muted-foreground text-xs">{handle}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{text}&rdquo;</p>
      <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">Earned last month</span>
        <span className="font-heading text-lg font-bold text-gradient">{earnings}</span>
      </div>
    </motion.div>
  );
}

// ─── FAQ item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border bg-card overflow-hidden transition-colors duration-200 ${open ? "border-primary/30" : "border-border"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-semibold text-foreground text-sm pr-4">{q}</span>
        <ChevronDown size={16} className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">{a}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Affiliation() {
  const [sales, setSales] = useState(20);
  const monthly = +(sales * PER_SALE).toFixed(2);
  const yearly = +(monthly * 12).toFixed(2);
  const tier = getTier(sales);

  const openWhatsApp = () => window.open("https://wa.me/", "_blank");

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-20 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 65%)" }} />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5 mb-6">
                <Sparkles size={13} className="text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Affiliate Program · Free to Join</span>
              </div>

              <h1 className="font-heading font-black leading-[1.05] mb-6" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}>
                Earn <span className="text-gradient">${PER_SALE}</span> for Every
                <br />Subscription You Refer
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Share your unique link. When someone subscribes through it, you earn{" "}
                <strong className="text-foreground">35% commission instantly</strong> — no waiting, no minimum, no cap.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Zap, label: "Instant Payouts", color: "text-primary" },
                  { icon: Link2, label: "Lifetime Cookies", color: "text-emerald-400" },
                  { icon: Shield, label: "No Minimum Withdrawal", color: "text-blue-400" },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2 bg-secondary/60 border border-border rounded-full px-4 py-2 text-sm">
                    <Icon size={13} className={color} />
                    <span className="font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={openWhatsApp}
                  className="bg-gradient-primary text-white font-bold px-8 py-6 text-base shadow-glow hover:opacity-90 transition-opacity"
                >
                  Join Free — Start Earning <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-border px-8 py-6 text-base font-semibold hover:bg-secondary"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See How It Works
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-5 flex items-center gap-1.5">
                <Users size={12} className="text-primary" />
                Joined by <strong className="text-foreground">500+ active affiliates</strong> worldwide
              </p>
            </motion.div>

            {/* Right — mock dashboard */}
            <div className="hidden lg:flex justify-center items-center">
              <AffiliDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="py-8 border-b border-border bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border max-w-4xl mx-auto">
            {[
              { value: "35%", label: "Commission per sale", icon: DollarSign },
              { value: "$20.64", label: "Average per referral", icon: Banknote },
              { value: "Instant", label: "Payout speed", icon: Zap },
              { value: "∞", label: "Cookie duration", icon: Link2 },
            ].map(({ value, label, icon: Icon }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center px-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  <Icon size={17} className="text-primary" />
                </div>
                <span className="font-heading text-2xl md:text-3xl font-black text-foreground">{value}</span>
                <span className="text-xs text-muted-foreground mt-1 max-w-[100px] leading-snug">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The math ──────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">The Numbers</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black">
              Exactly How Much <span className="text-gradient">You Earn</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Every subscription purchased through your link earns you 35%. Here's what that looks like in practice.
            </p>
          </div>

          {/* Math breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { plan: "1 Month", price: "$14.99", commission: "$5.25", highlight: false },
              { plan: "3 Months", price: "$24.99", commission: "$8.75", highlight: false },
              { plan: "12 Months", price: "$59.99", commission: "$21.00", highlight: true },
            ].map(({ plan, price, commission, highlight }) => (
              <motion.div key={plan}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border p-6 text-center relative overflow-hidden ${
                  highlight ? "border-primary/40 bg-gradient-to-br from-primary/10 to-card" : "border-border bg-card"
                }`}>
                {highlight && (
                  <div className="absolute top-3 right-3 bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <p className="text-muted-foreground text-sm mb-1">{plan} Plan</p>
                <p className="font-heading text-2xl font-bold text-foreground mb-3">{price}</p>
                <div className="w-full h-px bg-border mb-3" />
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Your commission</p>
                <p className={`font-heading text-3xl font-black ${highlight ? "text-gradient" : "text-foreground"}`}>{commission}</p>
              </motion.div>
            ))}
          </div>

          {/* Earnings scale */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-5">
              Monthly earnings by referral volume (based on avg. sale)
            </p>
            <div className="space-y-3">
              {[
                { sales: 5, label: "5 sales/mo", monthly: (5 * PER_SALE).toFixed(2), width: "10%" },
                { sales: 20, label: "20 sales/mo", monthly: (20 * PER_SALE).toFixed(2), width: "40%" },
                { sales: 50, label: "50 sales/mo", monthly: (50 * PER_SALE).toFixed(2), width: "65%" },
                { sales: 100, label: "100 sales/mo", monthly: (100 * PER_SALE).toFixed(2), width: "100%" },
              ].map(({ label, monthly, width }, i) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground w-24 shrink-0">{label}</span>
                  <div className="flex-1 h-7 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-primary flex items-center justify-end pr-3"
                    />
                  </div>
                  <span className="font-heading font-bold text-foreground text-sm w-16 shrink-0 text-right">${monthly}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 border-b border-border">
        <div className="container text-center max-w-4xl mx-auto">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-12">
            Three Steps to <span className="text-gradient">Your First Commission</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-px border-t border-dashed border-primary/25" />
            {[
              {
                n: "01", icon: Users, title: "Sign Up Free",
                desc: "Contact us on WhatsApp and get your unique affiliate referral link within minutes. No paperwork, no approval wait.",
              },
              {
                n: "02", icon: Link2, title: "Share Your Link",
                desc: "Post it on social media, YouTube, a blog, a forum, or send it directly to friends. Every click is tracked forever.",
              },
              {
                n: "03", icon: Banknote, title: "Get Paid Instantly",
                desc: "Every confirmed subscription earns you 35% — sent to your PayPal or bank account the moment it's confirmed.",
              },
            ].map(({ n, icon: Icon, title, desc }, i) => (
              <motion.div key={n}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative">
                <div className="relative mb-5 z-10">
                  <div className="w-24 h-24 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-card flex items-center justify-center"
                    style={{ boxShadow: "0 0 30px rgba(139,92,246,0.12)" }}>
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-black text-white shadow-glow">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Earnings Calculator ───────────────────────────────────────────── */}
      <section className="py-20 border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Calculator</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black">
              How Much Could <span className="text-gradient">You Earn?</span>
            </h2>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur p-8 md:p-10 shadow-card">
            {/* Tier badge */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className={`font-heading text-xl font-black ${tier.color}`}>{tier.label}</p>
                <p className="text-xs text-muted-foreground">{tier.sub}</p>
              </div>
              <BarChart3 size={24} className="text-primary" />
            </div>

            <p className="text-sm text-muted-foreground mb-2">Sales per month</p>
            <div className="flex items-center gap-5 mb-2">
              <Slider
                value={[sales]}
                onValueChange={(v) => setSales(v[0])}
                min={1} max={100} step={1}
                className="flex-1"
              />
              <span className="font-heading text-2xl font-black text-primary w-12 text-right shrink-0">{sales}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-8">
              Based on ${AVG_SALE} avg. sale × 35% = <span className="text-foreground font-semibold">${PER_SALE} per sale</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1 rounded-xl bg-secondary p-5 text-center">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Monthly</p>
                <p className="font-heading text-3xl font-black text-gradient">${monthly.toFixed(2)}</p>
              </div>
              <div className="sm:col-span-1 rounded-xl bg-secondary p-5 text-center">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Yearly</p>
                <p className="font-heading text-3xl font-black text-gradient">${yearly.toLocaleString()}</p>
              </div>
              <div className="sm:col-span-1 rounded-xl border border-primary/25 bg-primary/5 p-5 text-center">
                <p className="text-[11px] uppercase tracking-widest text-primary/70 mb-1">Per Sale</p>
                <p className="font-heading text-3xl font-black text-foreground">${PER_SALE}</p>
              </div>
            </div>

            <div className="mt-8">
              <Button onClick={openWhatsApp}
                className="w-full bg-gradient-primary text-white font-bold py-6 text-base shadow-glow hover:opacity-90">
                Start Earning ${monthly.toFixed(2)}/mo — Join Free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Real Affiliates</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black">
              People Already <span className="text-gradient">Getting Paid</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TestimonialCard
              name="James R."
              handle="Tech YouTuber · 42K subscribers"
              avatar="J"
              text="I added the link in my IPTV setup video description 4 months ago. It now generates passive income every single day — I don't have to do anything extra."
              earnings="$847 / mo"
              delay={0}
            />
            <TestimonialCard
              name="Sofia K."
              handle="Facebook Group Admin · 18K members"
              avatar="S"
              text="I post about streaming deals in my group. Mentioned InfinityTV once with my link — within a week I had 15 signups. The instant payout was a very nice surprise."
              earnings="$309 / mo"
              delay={0.1}
            />
            <TestimonialCard
              name="Omar B."
              handle="IPTV Reseller & Consultant"
              avatar="O"
              text="I was already recommending InfinityTV to my clients for free. Now I get 35% on every one of them. It took 10 minutes to set up and has changed my income significantly."
              earnings="$1,238 / mo"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black">
              InfinityTV vs <span className="text-gradient">Industry Average</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">
              Most IPTV affiliate programs pay 10–20% with monthly payouts and expiring cookies. We do things differently.
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-border">
              <div className="px-5 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Feature</div>
              <div className="px-5 py-4 text-center bg-primary/8 border-x border-primary/20">
                <span className="text-xs font-black text-primary uppercase tracking-wider">InfinityTV</span>
              </div>
              <div className="px-5 py-4 text-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Others</span>
              </div>
            </div>

            {[
              { feature: "Commission Rate", ours: "35%", theirs: "10–20%", oursBold: true },
              { feature: "Cookie Duration", ours: "Lifetime", theirs: "30 days" },
              { feature: "Payout Speed", ours: "Instant", theirs: "Monthly" },
              { feature: "Minimum Payout", ours: "$0", theirs: "$50+" },
              { feature: "Commission on Renewals", ours: "Yes", theirs: "No" },
              { feature: "Dedicated Affiliate Support", ours: "Yes", theirs: "No" },
              { feature: "Join Fee", ours: "Free", theirs: "Free" },
            ].map(({ feature, ours, theirs, oursBold }, i) => (
              <div key={feature} className={`grid grid-cols-3 border-b border-border/50 last:border-0 ${i % 2 === 0 ? "" : "bg-secondary/20"}`}>
                <div className="px-5 py-4 text-sm text-muted-foreground">{feature}</div>
                <div className="px-5 py-4 text-center bg-primary/5 border-x border-primary/15 flex items-center justify-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span className={`text-sm ${oursBold ? "font-black text-gradient" : "font-semibold text-foreground"}`}>{ours}</span>
                </div>
                <div className="px-5 py-4 text-center flex items-center justify-center gap-2">
                  {theirs === "Free" ? (
                    <><Check size={14} className="text-emerald-400 shrink-0" /><span className="text-sm text-muted-foreground">{theirs}</span></>
                  ) : (
                    <><X size={14} className="text-red-400/70 shrink-0" /><span className="text-sm text-muted-foreground">{theirs}</span></>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Payment methods ──────────────────────────────────────────────── */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/8 to-card p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-4">
                <Zap size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-black mb-2">Instant Payout</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The moment a subscription is confirmed through your link, your commission is sent immediately.
                No end-of-month batching. No waiting. Your money, right away.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center text-center">
              <h3 className="font-heading text-xl font-black mb-6">Payment Methods</h3>
              <div className="flex items-center justify-center gap-8 w-full">
                {[
                  { icon: Banknote, label: "Bank Transfer" },
                  { icon: CreditCard, label: "PayPal" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-6">No minimum balance required to withdraw</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Is there a cost to join the affiliate program?",
                a: "None at all. Joining is completely free. Contact us on WhatsApp, we set up your link in minutes, and you start earning immediately.",
              },
              {
                q: "How exactly does the 35% commission work?",
                a: `When someone clicks your link and buys any InfinityTV subscription, you earn 35% of the sale price. For example, a $59.99 annual plan earns you $21.00 — paid instantly. The commission applies to every plan at every price point.`,
              },
              {
                q: "What does 'lifetime cookies' mean?",
                a: "When someone clicks your affiliate link, their browser is tagged with your referral. If they close the page and come back to buy 3 months later, you still get the commission. Unlike other programs that expire after 30 days, your cookie never expires.",
              },
              {
                q: "Do I earn commission on subscription renewals?",
                a: "Yes — when a customer you referred renews their subscription, you earn commission on that renewal too. This creates compounding, recurring income from your existing referrals.",
              },
              {
                q: "How do I track my clicks and sales?",
                a: "You receive a unique affiliate link with real-time tracking. Contact us anytime for a performance report showing clicks, conversions, and pending earnings.",
              },
              {
                q: "Is there a limit to how much I can earn?",
                a: "No limit whatsoever. Whether you refer 1 customer or 1,000, you earn 35% on every single sale. Our top affiliates earn thousands of dollars per month.",
              },
              {
                q: "What kind of content works best for promoting InfinityTV?",
                a: "IPTV setup tutorials, streaming app reviews, cord-cutting guides, and 'best IPTV service' comparison posts all perform very well. We can provide marketing materials, screenshots, and talking points to help you convert.",
              },
            ].map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-6">
              <DollarSign size={28} className="text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-4">
              Ready to Start <span className="text-gradient">Getting Paid</span>?
            </h2>
            <p className="text-muted-foreground text-base mb-3 leading-relaxed">
              Join free in minutes. No approval required. No technical setup.
              Your link is ready the same day.
            </p>
            <p className="text-muted-foreground text-sm mb-10">
              Average first commission within <strong className="text-foreground">24 hours</strong> of sharing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={openWhatsApp}
                className="bg-gradient-primary text-white font-bold px-10 py-6 text-base shadow-glow hover:opacity-90 w-full sm:w-auto">
                Get My Affiliate Link <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={openWhatsApp}
                className="border-border px-10 py-6 text-base font-semibold hover:bg-secondary w-full sm:w-auto">
                Ask a Question
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-8">
              {[
                { icon: Shield, label: "No commitment" },
                { icon: Zap, label: "Instant activation" },
                { icon: Globe, label: "Promote from anywhere" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon size={12} className="text-primary" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
