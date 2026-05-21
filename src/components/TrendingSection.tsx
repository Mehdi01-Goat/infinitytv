"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const movies = [
  { title: "Dune: Part Two", year: 2024, rating: 8.4, genre: "Sci-Fi", poster: "https://image.tmdb.org/t/p/w300/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" },
  { title: "Oppenheimer", year: 2023, rating: 8.3, genre: "Drama", poster: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
  { title: "Deadpool & Wolverine", year: 2024, rating: 7.8, genre: "Action", poster: "https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
  { title: "Inside Out 2", year: 2024, rating: 7.7, genre: "Animation", poster: "https://image.tmdb.org/t/p/w300/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" },
  { title: "Alien: Romulus", year: 2024, rating: 7.2, genre: "Horror", poster: "https://image.tmdb.org/t/p/w300/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg" },
  { title: "Godzilla x Kong", year: 2024, rating: 6.8, genre: "Action", poster: "https://image.tmdb.org/t/p/w300/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg" },
  { title: "Kingdom of the Apes", year: 2024, rating: 7.1, genre: "Sci-Fi", poster: "https://image.tmdb.org/t/p/w300/gKkl37BQuKTanygYQG1pyYgLVgf.jpg" },
  { title: "Furiosa", year: 2024, rating: 7.8, genre: "Action", poster: "https://image.tmdb.org/t/p/w300/iADOJ8Zymht2JPMoy3R7xceZprc.jpg" },
];
const BASE = "https://images.unsplash.com/photo-";
const UQ = "?w=400&h=600&fit=crop&q=80";
const sports = [
  { title: "Formula 1: Drive to Survive", year: 2019, rating: 8.1, genre: "F1", poster: `${BASE}1558618666-fcd25c85cd64${UQ}` },
  { title: "The Last Dance", year: 2020, rating: 9.1, genre: "Basketball", poster: `${BASE}1504450758481-7338eba7524a${UQ}` },
  { title: "Welcome to Wrexham", year: 2022, rating: 8.3, genre: "Soccer", poster: `${BASE}1556056504-5c7696c4c28d${UQ}` },
  { title: "Full Swing", year: 2023, rating: 7.8, genre: "Golf", poster: `${BASE}1487466365202-1afdb86c764e${UQ}` },
  { title: "Break Point", year: 2023, rating: 7.4, genre: "Tennis", poster: `${BASE}1551698618-1dfe5d97d256${UQ}` },
  { title: "Quarterback", year: 2023, rating: 7.6, genre: "NFL", poster: `${BASE}1542621334-a254cf47733d${UQ}` },
  { title: "Tour de France: Unchained", year: 2023, rating: 8.0, genre: "Cycling", poster: `${BASE}1461896836934-ffe607ba8211${UQ}` },
  { title: "Starting 5", year: 2024, rating: 7.9, genre: "NBA", poster: `${BASE}1574629810360-7efbbe195018${UQ}` },
];
type Item = typeof movies[number];
const PosterCard = ({ item }: { item: Item }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="relative w-[130px] sm:w-[155px] md:w-[190px] shrink-0 rounded-xl overflow-hidden group cursor-pointer shadow-card hover:shadow-glow transition-shadow duration-300">
      {!imgError ? (
        <img src={item.poster} alt={item.title} loading="lazy" width={190} height={285} onError={() => setImgError(true)}
          className="w-full h-[195px] sm:h-[232px] md:h-[285px] object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="w-full h-[255px] md:h-[285px] flex items-end p-4" style={{ background: "var(--gradient-primary)" }}>
          <span className="text-white font-heading font-bold text-sm leading-tight">{item.title}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="inline-block bg-primary/80 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2">{item.genre}</span>
        <p className="text-white font-heading font-bold text-sm leading-tight mb-1.5 line-clamp-2">{item.title}</p>
        <div className="flex items-center gap-2 text-xs text-white/80">
          <div className="flex items-center gap-1"><Star size={10} className="fill-amber-400 text-amber-400" /><span className="font-semibold text-amber-400">{item.rating}</span></div>
          <span className="text-white/40">·</span><span>{item.year}</span>
        </div>
      </div>
    </div>
  );
};
const ScrollRow = ({ items, direction }: { items: Item[]; direction: "left" | "right" }) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className={`flex gap-4 w-max ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}>
        {doubled.map((item, i) => <PosterCard key={`${item.title}-${i}`} item={item} />)}
      </div>
      <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
};
const TrendingSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 md:py-20 border-t border-border overflow-hidden">
      <div className="container mb-10">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("trending_eyebrow")}</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">
          {t("trending_title_1")} <span className="text-gradient">{t("trending_title_gradient")}</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-3 max-w-md">{t("trending_sub")}</p>
      </div>
      <div className="flex flex-col gap-5">
        <ScrollRow items={movies} direction="left" />
        <ScrollRow items={sports} direction="right" />
      </div>
    </section>
  );
};
export default TrendingSection;
