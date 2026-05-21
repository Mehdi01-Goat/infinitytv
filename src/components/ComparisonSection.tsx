"use client";

import Link from "next/link";
import { Check, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";

const rows = [
  { feature: "Live Channels", cable: "150 – 300", prime: "22,000+", others: "5,000 – 10,000", primeGood: true, cableGood: false, othersGood: false },
  { feature: "VOD Library", cable: "Limited / PPV", prime: "95,000+ Movies & Series", others: "Rarely Updated", primeGood: true, cableGood: false, othersGood: false },
  { feature: "Anti-Freeze Server", cable: "N/A", prime: "Yes — 99.9% Uptime", others: "No — Frequent Buffering", primeGood: true, cableGood: false, othersGood: false },
  { feature: "Catch-Up TV", cable: "Requires DVR", prime: "Yes — 7-Day Replay", others: "Usually Broken", primeGood: true, cableGood: false, othersGood: false },
  { feature: "Monthly Cost", cable: "$80 – $120 / mo", prime: "$4.91 – $11.98 / mo", others: "~$5 / mo", primeGood: true, cableGood: false, othersGood: null },
  { feature: "Setup Time", cable: "Requires Technician", prime: "Instant — 2 Minutes", others: "Complex / Unsafe", primeGood: true, cableGood: false, othersGood: false },
];

type Verdict = boolean | null;

const Cell = ({ text, good }: { text: string; good: Verdict }) => (
  <div className="p-2 md:p-4 text-center flex flex-col items-center justify-center gap-1">
    {good === true && <Check size={13} className="text-emerald-500 shrink-0" />}
    {good === false && <X size={13} className="text-destructive/60 shrink-0" />}
    <span className={`text-xs md:text-sm leading-snug ${good === true ? "text-foreground font-medium" : "text-muted-foreground"}`}>{text}</span>
  </div>
);

const ComparisonSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-20 border-t border-border">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("comparison_eyebrow")}</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-gradient">InfinityTV</span> {t("comparison_title_main")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            {t("comparison_sub")}
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border shadow-card">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-4 bg-secondary text-xs font-bold uppercase tracking-wide text-secondary-foreground">
              <div className="p-3 md:p-4">Feature</div>
              <div className="p-3 md:p-4 text-center bg-primary/10 border-x border-primary/20">
                <div className="flex items-center justify-center gap-1.5 text-primary"><Trophy size={14} /> InfinityTV</div>
              </div>
              <div className="p-3 md:p-4 text-center">Standard Cable</div>
              <div className="p-3 md:p-4 text-center">Cheap IPTV</div>
            </div>
            {rows.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-4 border-t border-border text-sm ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}>
                <div className="p-3 md:p-4 flex items-center font-medium text-foreground text-xs md:text-sm">{row.feature}</div>
                <div className="bg-primary/5 border-x border-primary/10"><Cell text={row.prime} good={row.primeGood} /></div>
                <Cell text={row.cable} good={row.cableGood} />
                <Cell text={row.others} good={row.othersGood} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-10 text-center">
          <p
            className="text-muted-foreground text-sm mb-4"
            dangerouslySetInnerHTML={{
              __html: t("comparison_cta_sub")
                .replace(/<b>/g, '<strong class="text-foreground">')
                .replace(/<\/b>/g, "</strong>")
            }}
          />
          <Link href="/#pricing">
            <Button className="bg-gradient-primary text-white font-bold hover:opacity-90 shadow-glow px-8 rounded-full">
              {t("comparison_cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
