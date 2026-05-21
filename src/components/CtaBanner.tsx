"use client";
import { Button } from "@/components/ui/button";
import { Shield, Zap, RotateCcw } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const CtaBanner = () => {
  const { t } = useTranslation();
  const badges = [
    { icon: Zap, labelKey: "cta_badge_1" },
    { icon: Shield, labelKey: "cta_badge_2" },
    { icon: RotateCcw, labelKey: "cta_badge_3" },
  ];
  return (
    <section className="py-10 sm:py-16 md:py-24 border-t border-border" style={{ background: "var(--gradient-hero)" }}>
      <div className="container text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">{t("cta_eyebrow")}</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          {t("cta_title_1")} <span className="text-gradient">{t("cta_title_gradient")}</span>?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm sm:text-base">{t("cta_sub")}</p>
        <a href="/infinitytv-iptv#pricing">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 hover:opacity-90 shadow-glow">{t("cta_button")}</Button>
        </a>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          {badges.map(({ icon: Icon, labelKey }) => (
            <div key={labelKey} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Icon size={13} className="text-primary shrink-0" /><span>{t(labelKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
