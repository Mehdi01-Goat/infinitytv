"use client";
import { Tv, Film, Monitor, Zap, Shield, Headphones } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const FeaturesGrid = () => {
  const { t } = useTranslation();
  const bigCards = [
    { icon: Tv, number: "22,000", unit: "+", titleKey: "features_channels_title", descKey: "features_channels_desc", accent: true },
    { icon: Film, number: "95,000", unit: "+", titleKey: "features_vod_title", descKey: "features_vod_desc", accent: false },
    { icon: Shield, number: "99.9", unit: "%", titleKey: "features_uptime_title", descKey: "features_uptime_desc", accent: false },
  ];
  const smallCards = [
    { icon: Zap, titleKey: "features_activation_title", descKey: "features_activation_desc" },
    { icon: Monitor, titleKey: "features_devices_title", descKey: "features_devices_desc" },
    { icon: Headphones, titleKey: "features_support_title", descKey: "features_support_desc" },
  ];
  return (
    <section className="py-12 md:py-24 border-t border-border">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("features_eyebrow")}</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">
            {t("features_title_1")} <span className="text-gradient">{t("features_title_gradient")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("features_sub")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bigCards.map(({ icon: Icon, number, unit, titleKey, descKey, accent }) => (
            <div key={titleKey} className={`group relative rounded-2xl border p-7 overflow-hidden flex flex-col gap-4 shadow-card hover:shadow-glow transition-all duration-300 ${accent ? "border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card" : "border-border glass-card hover:border-primary/30"}`}>
              {accent && <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-2xl pointer-events-none" />}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${accent ? "bg-primary/20 border-primary/30" : "bg-primary/10 border-primary/20"}`}>
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-heading font-bold text-foreground" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>{number}</span>
                  <span className="text-primary font-bold text-lg">{unit}</span>
                </div>
                <p className="font-heading font-bold text-foreground text-base mb-1.5">{t(titleKey)}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
              </div>
            </div>
          ))}
          {smallCards.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="group rounded-2xl border border-border glass-card p-6 hover:border-primary/30 hover:shadow-glow transition-all duration-300 shadow-card flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm mb-1.5">{t(titleKey)}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesGrid;
