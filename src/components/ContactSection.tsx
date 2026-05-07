"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "14702642482";
const SUPPORT_EMAIL = "contact@infinitytv.io";

const channels = [
  { icon: MessageCircle, title: "WhatsApp Support", desc: "Get instant help from our team. Average response under 5 minutes.", action: "Chat on WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I need help with InfinityTV.")}`, highlight: true },
  { icon: Mail, title: "Email Support", desc: "Send us a detailed message and we'll reply within a few hours.", action: "Send an Email", href: `mailto:${SUPPORT_EMAIL}`, highlight: false },
];

const ContactSection = () => (
  <section id="contact" className="py-20 border-t border-border">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">24/7 Support</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">We're Here to <span className="text-gradient">Help You</span></h2>
        <p className="text-muted-foreground max-w-md mx-auto">Our support team is always online. Reach us anytime via WhatsApp or email.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {channels.map(({ icon: Icon, title, desc, action, href, highlight }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`rounded-xl border p-5 sm:p-8 flex flex-col items-center text-center gap-4 ${highlight ? "border-primary/30 bg-gradient-to-br from-primary/5 to-card shadow-glow" : "border-border bg-card"}`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${highlight ? "bg-primary/15 border border-primary/20" : "bg-secondary"}`}>
              <Icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <Button className={highlight ? "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow" : ""} variant={highlight ? "default" : "outline"}>
                {action}
              </Button>
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
        <Clock size={14} className="text-primary" />
        <span>Support available 24 hours a day, 7 days a week</span>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
