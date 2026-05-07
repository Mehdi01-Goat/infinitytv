"use client";

import { motion } from "framer-motion";
import { Tv, Film, Monitor, Zap, Shield, Headphones } from "lucide-react";

const HeroBigCard = ({ icon: Icon, number, unit, title, desc, delay, accent = false }: {
  icon: React.ElementType; number: string; unit: string; title: string; desc: string; delay: number; accent?: boolean;
}) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }}
    className={`group relative rounded-2xl border p-7 overflow-hidden flex flex-col gap-4 shadow-card hover:shadow-glow transition-all duration-300 ${
      accent ? "border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card" : "border-border glass-card hover:border-primary/30"
    }`}>
    {accent && <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-2xl pointer-events-none" />}
    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${accent ? "bg-primary/20 border-primary/30" : "bg-primary/10 border-primary/20"}`}>
      <Icon size={22} className="text-primary" />
    </div>
    <div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-heading font-bold text-foreground" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>{number}</span>
        <span className="text-primary font-bold text-lg">{unit}</span>
      </div>
      <p className="font-heading font-bold text-foreground text-base mb-1.5">{title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const SmallCard = ({ icon: Icon, title, desc, delay }: { icon: React.ElementType; title: string; desc: string; delay: number }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }}
    className="group rounded-2xl border border-border glass-card p-6 hover:border-primary/30 hover:shadow-glow transition-all duration-300 shadow-card flex gap-4 items-start">
    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      <Icon size={20} className="text-primary" />
    </div>
    <div>
      <p className="font-heading font-bold text-foreground text-sm mb-1.5">{title}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const FeaturesGrid = () => (
  <section className="py-24 border-t border-border">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why InfinityTV</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">
          Everything You Need, <span className="text-gradient">Nothing You Don't</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Premium infrastructure, no buffering, and real 24/7 support — built for serious streamers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <HeroBigCard icon={Tv} number="22,000" unit="+" title="Live Channels" desc="USA, UK, Canada & 190+ countries in HD and 4K. Sports, news, movies, kids — all included." delay={0} accent />
        <HeroBigCard icon={Film} number="95,000" unit="+" title="Movies & Series" desc="The latest releases and timeless classics updated daily. On-demand, whenever you want." delay={0.08} />
        <HeroBigCard icon={Shield} number="99.9" unit="%" title="Server Uptime" desc="Anti-freeze technology with redundant servers ensures zero buffering, even during peak sports events." delay={0.16} />
        <SmallCard icon={Zap} title="Instant Activation" desc="Your subscription goes live within minutes of payment. No waiting, no delays." delay={0.24} />
        <SmallCard icon={Monitor} title="All Devices Supported" desc="Smart TV, Firestick, Android, iOS, Apple TV, PC, MAG Box — one subscription, all screens." delay={0.3} />
        <SmallCard icon={Headphones} title="24/7 Live Support" desc="Real agents on WhatsApp and email around the clock. Average response under 5 minutes." delay={0.36} />
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
