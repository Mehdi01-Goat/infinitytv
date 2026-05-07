"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tv, Smartphone, Laptop, Zap, Cpu, Play, Monitor, Tablet, CheckCircle } from "lucide-react";

const devices = [
  {
    Icon: Tv,
    name: "Smart TV",
    sub: "Samsung, LG, Sony, Hisense, Philips",
    tags: ["Android TV", "webOS", "Tizen"],
    from: "#7C3AED",
    to: "#4F46E5",
  },
  {
    Icon: Smartphone,
    name: "iPhone & iPad",
    sub: "All iOS & iPadOS devices supported",
    tags: ["iOS App", "AirPlay 2"],
    from: "#2563EB",
    to: "#1D4ED8",
  },
  {
    Icon: Smartphone,
    name: "Android Phone",
    sub: "All Android smartphones & tablets",
    tags: ["Google Play", "APK Sideload"],
    from: "#059669",
    to: "#047857",
  },
  {
    Icon: Laptop,
    name: "PC & Mac",
    sub: "Windows, macOS, Linux — any browser",
    tags: ["Browser", "Windows App", "macOS"],
    from: "#4F46E5",
    to: "#3730A3",
  },
  {
    Icon: Zap,
    name: "Amazon Fire TV",
    sub: "Fire TV Stick 4K, Fire TV Cube",
    tags: ["Fire TV", "Fire Stick", "Alexa"],
    from: "#D97706",
    to: "#B45309",
  },
  {
    Icon: Cpu,
    name: "Android Box",
    sub: "MAG, Formuler, Nvidia Shield, IPTV Box",
    tags: ["MAG Box", "Formuler", "Shield"],
    from: "#0D9488",
    to: "#0F766E",
  },
  {
    Icon: Play,
    name: "Kodi",
    sub: "Kodi add-on on any compatible device",
    tags: ["XBMC", "Kodi Add-on"],
    from: "#0284C7",
    to: "#0369A1",
  },
  {
    Icon: Monitor,
    name: "Apple TV",
    sub: "Apple TV 4K and Apple TV HD",
    tags: ["tvOS", "AirPlay"],
    from: "#475569",
    to: "#1E293B",
  },
];

const perks = [
  "25+ supported device types",
  "No extra cost per device",
  "Works worldwide, any network",
];

const DevicesSection = () => (
  <section id="devices" className="py-24 border-t border-border overflow-hidden">
    <div className="container">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Compatible Devices
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Works on Every <span className="text-gradient">Screen You Own</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
          One subscription. Every device in your home. No extra fees, no extra apps.
        </p>
      </motion.div>

      {/* Device card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {devices.map(({ Icon, name, sub, tags, from, to }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
            className="relative rounded-2xl overflow-hidden group cursor-default select-none hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(140deg, ${from}, ${to})` }}
            />

            {/* Subtle grid dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />

            {/* Large faint background icon */}
            <Icon
              size={110}
              className="absolute -right-5 -bottom-5 text-white/[0.08]"
              strokeWidth={1}
            />

            {/* Card content */}
            <div className="relative p-4 sm:p-5 flex flex-col gap-3 min-h-[180px]">
              {/* Foreground icon */}
              <div className="w-11 h-11 rounded-xl bg-white/[0.18] backdrop-blur-sm flex items-center justify-center">
                <Icon size={22} className="text-white" />
              </div>

              {/* Name + sub */}
              <div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-white leading-tight">
                  {name}
                </h3>
                <p className="text-[11px] text-white/55 mt-0.5 leading-snug hidden sm:block">
                  {sub}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-auto">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-white/[0.15] text-white/90 px-2 py-0.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-border bg-card px-6 sm:px-10 py-6"
      >
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle size={14} className="text-primary shrink-0" />
              <span>{p}</span>
            </div>
          ))}
        </div>
        <Link href="/installation-tutorial" className="shrink-0">
          <Button className="bg-gradient-primary text-white font-semibold hover:opacity-90 shadow-glow px-6 rounded-full">
            Setup Guides →
          </Button>
        </Link>
      </motion.div>

    </div>
  </section>
);

export default DevicesSection;
