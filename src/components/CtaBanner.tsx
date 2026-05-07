"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap, RotateCcw } from "lucide-react";

const badges = [
  { icon: Zap, label: "Instant Activation" },
  { icon: Shield, label: "7-Day Money-Back" },
  { icon: RotateCcw, label: "Cancel Anytime" },
];

const CtaBanner = () => (
  <section className="py-16 sm:py-24 border-t border-border" style={{ background: "var(--gradient-hero)" }}>
    <div className="container text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Start Today</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Ready to Start <span className="text-gradient">Streaming</span>?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm sm:text-base">Join 10,000+ satisfied subscribers. No contracts, no dish, no hassle.</p>
        <a href="#pricing">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 hover:opacity-90 shadow-glow">
            Unlock Full Entertainment
          </Button>
        </a>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Icon size={13} className="text-primary shrink-0" /><span>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
