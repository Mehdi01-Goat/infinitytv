"use client";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "14702642482";
const SUPPORT_EMAIL = "contact@infinitytv.io";

const ContactSection = () => {
  const { t } = useTranslation();
  const channels = [
    { icon: MessageCircle, titleKey: "contact_wa_title", descKey: "contact_wa_desc", ctaKey: "contact_wa_cta", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I need help with InfinityTV.")}`, highlight: true },
    { icon: Mail, titleKey: "contact_email_title", descKey: "contact_email_desc", ctaKey: "contact_email_cta", href: `mailto:${SUPPORT_EMAIL}`, highlight: false },
  ];
  return (
    <section id="contact" className="py-10 md:py-20 border-t border-border">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("contact_eyebrow")}</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("contact_title_1")} <span className="text-gradient">{t("contact_title_gradient")}</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">{t("contact_sub")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map(({ icon: Icon, titleKey, descKey, ctaKey, href, highlight }) => (
            <div key={titleKey} className={`rounded-xl border p-5 sm:p-8 flex flex-col items-center text-center gap-4 ${highlight ? "border-primary/30 bg-gradient-to-br from-primary/5 to-card shadow-glow" : "border-border bg-card"}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${highlight ? "bg-primary/15 border border-primary/20" : "bg-secondary"}`}>
                <Icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold mb-1">{t(titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(descKey)}</p>
              </div>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                <Button className={highlight ? "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow" : ""} variant={highlight ? "default" : "outline"}>{t(ctaKey)}</Button>
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
          <Clock size={14} className="text-primary" /><span>{t("contact_availability")}</span>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
