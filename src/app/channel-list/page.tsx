"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search, Tv, Film, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { channelData } from "@/data/channelData";
import { motion } from "framer-motion";

// ─── Clean & deduplicate channel names ───────────────────────────────────────
function cleanChannels(raw: string[]): string[] {
  const step1 = raw
    .map(ch =>
      ch
        // Strip "|HD" / "|UHD" / "|SD" quality markers
        .replace(/\s*\|\s*(UHD\+?|4K|FHD|HD|SD)\s*/gi, "")
        // Strip trailing quality without pipe
        .replace(/\s+(UHD\+?|HD|SD)$/gi, "")
        // Strip (East) / (West) / (North) / (South) region variants
        .replace(/\s*\((East|West|North|South)\)\s*/gi, "")
        // Strip leading gender markers like "(M) " or "(W) "
        .replace(/^\([A-Z]\)\s+/, "")
        // Strip country prefixes: "US - ", "CA-", "MX - ", "PPV:", "CAR - ", etc.
        .replace(/^[A-Z]{2,5}\s*[-–:]\s*/g, "")
        // Strip trailing 2-digit numbers (like "01", "57") — collapses numbered feeds
        .replace(/\s+\d{2}$/, "")
        .trim()
    )
    .filter(Boolean);

  // Deduplicate exact matches
  const deduped = [...new Set(step1)];

  // Remove "NAME 2" / "NAME 3" (single-digit variants) when base "NAME" already exists
  const baseSet = new Set(deduped);
  return deduped.filter(ch => {
    const withoutDigit = ch.replace(/\s+\d$/, "").trim();
    return withoutDigit === ch || !baseSet.has(withoutDigit);
  });
}

// ─── Country flags ────────────────────────────────────────────────────────────
const countryFlags: Record<string, string> = {
  "PPV UFC": "🥊", "PPV BOXING": "🥊", "PPV BELLATOR": "🥊", "PPV MMA": "🥊",
  "PPV WRESTLING": "🤼", "PPV EVENTS": "🎯", "ESPN PLUS": "📺",
  "MLB GAME PASS": "⚾", "NFL GAME PASS": "🏈", "NFL TEAMS": "🏈",
  "NBA LEAGUE PASS": "🏀", "NBA TEAMS": "🏀", "NHL GAME": "🏒",
  "NCAAB NCAAF": "🏟️", "MOTORSPORT": "🏎️", "MLS SOCCER": "⚽",
  "USA": "🇺🇸", "CANADA": "🇨🇦", "CANADA FR": "🇨🇦", "CARIBBEAN": "🌴",
  "MEXICO": "🇲🇽", "BRAZIL": "🇧🇷", "LATINO": "🌎", "ARGENTINA": "🇦🇷",
  "COLOMBIA": "🇨🇴", "CHILE": "🇨🇱", "UNITED KINGDOM": "🇬🇧", "FRANCE": "🇫🇷",
  "GERMANY": "🇩🇪", "SPAIN": "🇪🇸", "ITALY": "🇮🇹", "PORTUGAL": "🇵🇹",
  "NETHERLANDS": "🇳🇱", "BELGIUM": "🇧🇪", "SWEDEN": "🇸🇪", "TURKEY": "🇹🇷",
  "ARABIC": "🌍", "ISRAEL": "🇮🇱", "IRAN": "🇮🇷", "INDIA": "🇮🇳",
  "PAKISTAN": "🇵🇰", "JAPAN": "🇯🇵", "KOREA": "🇰🇷", "AUSTRALIA": "🇦🇺",
  "PHILIPPINES": "🇵🇭", "SOUTH AFRICA": "🇿🇦", "NIGERIA": "🇳🇬",
  "KENYA": "🇰🇪", "GHANA": "🇬🇭",
};

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, count, label, desc }: {
  icon: React.ElementType; count: string; label: string; desc: string;
}) {
  return (
    <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/8 to-card p-6 text-center flex flex-col items-center gap-2 shadow-card">
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-1">
        <Icon size={22} className="text-primary" />
      </div>
      <span className="text-3xl font-black text-gradient font-heading">{count}</span>
      <h3 className="font-heading font-bold text-foreground text-base">{label}</h3>
      <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

// ─── Country accordion ────────────────────────────────────────────────────────
function CountryAccordion({ country }: { country: { name: string; channels: string[] } }) {
  const [open, setOpen] = useState(false);
  const flag = countryFlags[country.name] || "📺";
  const channels = useMemo(() => cleanChannels(country.channels), [country.channels]);

  return (
    <div className={`rounded-xl overflow-hidden border transition-colors duration-200 ${open ? "border-primary/30" : "border-border/50"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-card hover:bg-secondary/50 transition-colors duration-200 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xl shrink-0">{flag}</span>
          <span className="font-heading font-bold text-sm tracking-wide uppercase text-foreground truncate">
            {country.name}
          </span>
          <span className="shrink-0 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            {channels.length} ch
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-muted-foreground shrink-0 ml-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Animated content */}
      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-5 pt-1 pb-5 bg-card/50 border-t border-border/30">
            <div className="flex flex-wrap gap-1.5 pt-3">
              {channels.map((ch, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary border border-border text-foreground/80 hover:border-primary/40 hover:text-foreground hover:bg-primary/5 transition-colors cursor-default"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ChannelList() {
  const [search, setSearch] = useState("");

  const { totalChannels, totalCountries } = useMemo(() => ({
    totalChannels: channelData.reduce((acc, r) => acc + r.countries.reduce((a, c) => a + cleanChannels(c.channels).length, 0), 0),
    totalCountries: channelData.reduce((acc, r) => acc + r.countries.length, 0),
  }), []);

  const filteredData = useMemo(() => {
    if (!search.trim()) return channelData;
    const q = search.toLowerCase();
    return channelData
      .map(region => ({
        ...region,
        countries: region.countries
          .map(country => ({
            ...country,
            channels: country.channels.filter(ch =>
              ch.toLowerCase().includes(q) || country.name.toLowerCase().includes(q)
            ),
          }))
          .filter(c => c.channels.length > 0 || c.name.toLowerCase().includes(q)),
      }))
      .filter(r => r.countries.length > 0);
  }, [search]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-14 pb-12 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] pointer-events-none" />
        <div className="container relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Complete Lineup</p>
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              InfinityTV <span className="text-gradient">Channel List</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Browse our full lineup of <span className="text-foreground font-semibold">{totalChannels.toLocaleString()}+</span> live channels
              across <span className="text-foreground font-semibold">{totalCountries}</span> countries — all in HD & 4K.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="pt-12 pb-16">
        <div className="container max-w-6xl">

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <StatCard icon={Trophy} count="5,000+" label="Live Sports" desc="NHL, NFL, NBA, MLB, Premier League, UFC & all PPV events" />
            <StatCard icon={Film}   count="55,000+" label="Movies & VOD" desc="Hollywood, Bollywood, Netflix originals — updated daily" />
            <StatCard icon={Tv}     count="22,000+" label="Live TV Channels" desc="News, entertainment, kids, music, documentaries worldwide" />
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-14 relative">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              placeholder="Search by country or channel name…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 h-12 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
          </div>

          {/* Regions */}
          <div className="space-y-14">
            {filteredData.map((region, ri) => (
              <motion.section
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ri * 0.05 }}
              >
                {/* Region header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                  <h2 className="font-heading text-xs font-black uppercase tracking-[0.2em] text-muted-foreground px-2">
                    {region.name}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {region.countries.map(country => (
                    <CountryAccordion key={country.name} country={country} />
                  ))}
                </div>
              </motion.section>
            ))}

            {filteredData.length === 0 && (
              <div className="text-center py-20">
                <Search size={44} className="mx-auto text-muted-foreground/20 mb-4" />
                <p className="text-muted-foreground">
                  No results for <span className="text-foreground font-semibold">&ldquo;{search}&rdquo;</span>
                </p>
              </div>
            )}
          </div>

          {/* SEO text */}
          <div className="mt-20 max-w-4xl mx-auto space-y-4 border-t border-border pt-12">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground">
              IPTV — Complete Channel List by Country
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              InfinityTV delivers one of the most comprehensive IPTV channel catalogs available worldwide. With{" "}
              <strong className="text-foreground">{totalChannels.toLocaleString()}+</strong> live TV channels across{" "}
              <strong className="text-foreground">{totalCountries}+</strong> countries, our service covers sports, movies, news,
              kids programming, and international entertainment in every major language — including English, French, Arabic, Hindi,
              Spanish, Portuguese, German, Turkish, Persian, and many more.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Every subscription includes access to all channels from every country with no add-ons or hidden fees.
              PPV events, UFC, NFL, NBA, NHL, Premier League, and Champions League are all included. Streams in
              Full HD and 4K with our anti-buffering technology.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
