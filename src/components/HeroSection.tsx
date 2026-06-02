"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Play, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";
import TrialDialog from "@/components/TrialDialog";

const POSTERS = [
  "https://image.tmdb.org/t/p/w300/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  "https://image.tmdb.org/t/p/w300/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  "https://image.tmdb.org/t/p/w300/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
  "https://image.tmdb.org/t/p/w300/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
  "https://image.tmdb.org/t/p/w300/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  "https://image.tmdb.org/t/p/w300/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop&q=60",
  "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=300&h=450&fit=crop&q=60",
  "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=300&h=450&fit=crop&q=60",
  "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?w=300&h=450&fit=crop&q=60",
  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=450&fit=crop&q=60",
  "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=300&h=450&fit=crop&q=60",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=450&fit=crop&q=60",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=450&fit=crop&q=60",
];

const ROW_CONFIGS = [
  { offset: 0,  dir: "L" as const, secs: 40 },
  { offset: 6,  dir: "R" as const, secs: 56 },
  { offset: 11, dir: "L" as const, secs: 34 },
  { offset: 4,  dir: "R" as const, secs: 48 },
];

function PosterRow({ offset, dir, secs }: { offset: number; dir: "L" | "R"; secs: number }) {
  const rotated = [...POSTERS.slice(offset), ...POSTERS.slice(0, offset)];
  const doubled = [...rotated, ...rotated];
  return (
    <div className="flex-1 min-h-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          gap: "8px",
          animation: `heroScroll${dir} ${secs}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((url, i) => (
          <img
            key={i}
            src={url}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full shrink-0 rounded-xl object-cover"
            style={{ width: "130px" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.visibility = "hidden";
            }}
          />
        ))}
      </div>
    </div>
  );
}

const HeroSection = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [trialOpen, setTrialOpen] = useState(false);
  const { t, tArr } = useTranslation();
  const words = tArr("hero_words");

  useEffect(() => {
    setWordIdx(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words[0]]);

  useEffect(() => {
    const timer = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes heroScrollL {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes heroScrollR {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {/* Poster grid background */}
      <div className="absolute inset-0 flex flex-col gap-2 py-1">
        {ROW_CONFIGS.map((cfg, i) => (
          <PosterRow key={i} {...cfg} />
        ))}
      </div>

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/58" />

      {/* Centre radial deepening */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(0,0,0,0.50) 0%, transparent 100%)",
        }}
      />

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />

      {/* Purple glow orb */}
      <div
        className="absolute w-[800px] h-[560px] rounded-full blur-[120px] opacity-18 pointer-events-none"
        style={{ background: "var(--gradient-primary)" }}
      />

      {/* Hero content — rendered immediately, no opacity:0 stagger so LCP is instant */}
      <div className="relative z-10 container flex flex-col items-center text-center gap-7 py-32 sm:py-36">

        {/* Rating pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 backdrop-blur-sm">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-white/85">
            {t("hero_rating")}
          </span>
        </div>

        {/* Headline — immediately visible (LCP element) */}
        <h1
          className="font-heading font-bold leading-[1.06] max-w-5xl"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.6rem)" }}
        >
          {t("hero_headline_prefix")}{" "}
          <span className="relative inline-flex items-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={`${wordIdx}-${words[wordIdx]}`}
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(12px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-gradient inline-block"
              >
                {words[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br className="hidden sm:block" />
          <span className="text-white/90"> {t("hero_headline_suffix")}</span>
        </h1>

        {/* Sub-copy */}
        <p className="text-base sm:text-lg text-white/52 max-w-xl leading-relaxed">
          <span dangerouslySetInnerHTML={{
            __html: t("hero_sub")
              .replace(/<b>/g, '<span class="font-semibold text-white">')
              .replace(/<\/b>/g, "</span>")
          }} />{" "}
          <span className="font-bold text-primary">{t("hero_sub_price")}</span>
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1.5 text-xs sm:text-sm font-medium text-white/65 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
            {t("hero_chip_channels")}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1.5 text-xs sm:text-sm font-medium text-white/65 backdrop-blur-sm">
            <Play size={10} className="fill-primary text-primary" />
            {t("hero_chip_vod")}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1.5 text-xs sm:text-sm font-medium text-white/65 backdrop-blur-sm">
            <Zap size={11} className="text-amber-400" />
            {t("hero_chip_quality")}
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#pricing">
            <Button
              size="lg"
              className="rounded-full bg-gradient-primary px-8 py-6 text-base font-bold text-white shadow-glow hover:opacity-90 sm:px-10 sm:text-lg"
            >
              {t("hero_cta_primary")}
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setTrialOpen(true)}
            className="gap-2.5 rounded-full border-white/20 bg-white/[0.06] px-8 py-6 text-base text-white backdrop-blur-sm hover:bg-white/[0.12]"
          >
            <Play size={14} className="fill-white text-white" />
            {t("hero_cta_trial")}
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {(["hero_trust_1", "hero_trust_2", "hero_trust_3"] as const).map((key) => (
            <div key={key} className="flex items-center gap-1.5 text-xs sm:text-sm text-white/40">
              <CheckCircle size={13} className="shrink-0 text-emerald-400" />
              <span>{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
      <TrialDialog open={trialOpen} onOpenChange={setTrialOpen} />
  );
};

export default HeroSection;

