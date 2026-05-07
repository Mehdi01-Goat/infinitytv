"use client";

import { motion } from "framer-motion";
import { Users, Globe, Tv, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Active Subscribers" },
  { icon: Globe, value: "190+", label: "Countries Covered" },
  { icon: Tv, value: "22,000+", label: "Live Channels" },
  { icon: Zap, value: "99.9%", label: "Server Uptime" },
];

const StatsBar = () => (
  <section className="py-10 border-y border-border bg-secondary/60">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
              <Icon size={18} className="text-primary" />
            </div>
            <span className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-none">{value}</span>
            <span className="text-xs text-muted-foreground mt-1.5">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
