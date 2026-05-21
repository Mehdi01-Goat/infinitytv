"use client";
import Link from "next/link";
import { MousePointerClick, Zap, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";

const SetupSteps = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: MousePointerClick, number: "01", titleKey: "setup_step1_title", descKey: "setup_step1_desc" },
    { icon: Zap, number: "02", titleKey: "setup_step2_title", descKey: "setup_step2_desc" },
    { icon: Tv, number: "03", titleKey: "setup_step3_title", descKey: "setup_step3_desc" },
  ];
  return (
    <section className="py-12 md:py-24 border-t border-border">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("setup_eyebrow")}</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">
            {t("setup_title_1")} <span className="text-gradient">{t("setup_title_gradient")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">{t("setup_sub")}</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(263 89% 66% / 0.4) 20%, hsl(263 89% 66% / 0.4) 80%, transparent)" }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, number, titleKey, descKey }, i) => (
              <div key={titleKey} className="flex flex-col items-center text-center">
                <div className="relative mb-6 z-10">
                  <div className="w-20 h-20 sm:w-[104px] sm:h-[104px] rounded-2xl flex items-center justify-center border border-primary/20 relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, hsl(240 11% 11%) 0%, hsl(263 89% 66% / 0.08) 100%)", boxShadow: "0 0 30px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>{i + 1}</div>
                </div>
                <span className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-2">{number}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t(titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/infinitytv-iptv#pricing">
            <Button className="bg-gradient-primary text-white font-bold hover:opacity-90 shadow-glow px-8 py-6 text-base rounded-full">{t("setup_cta")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SetupSteps;
