"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tv, Zap, Shield } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "14702642482";
const TELEGRAM_USERNAME = "InfinityTVSupport";
const TIKTOK_URL = "https://www.tiktok.com/@infinitytv.io1";
const INSTAGRAM_URL = "https://www.instagram.com/infinitytvoriginal";

const socials = [
  { label: "Telegram", href: `https://t.me/${TELEGRAM_USERNAME}`, hoverColor: "#2CA5E0", svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg> },
  { label: "TikTok", href: TIKTOK_URL, hoverColor: "#010101", svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.2 8.2 0 004.79 1.53V6.83a4.85 4.85 0 01-1.02-.14z" /></svg> },
  { label: "Instagram", href: INSTAGRAM_URL, hoverColor: "#E1306C", svg: <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
];

const stats = [
  { icon: Tv, labelKey: "feat_stat_channels" },
  { icon: Zap, labelKey: "feat_stat_quality" },
  { icon: Shield, labelKey: "feat_stat_guarantee" },
];

const Footer = () => {
  const { t } = useTranslation();
  const navColumns = [
    {
      titleKey: "footer_col_service",
      links: [
        { labelKey: "footer_link_home", href: "/infinitytv-iptv" },
        { labelKey: "footer_link_channels", href: "/channel-list" },
        { labelKey: "footer_link_pricing", href: "/infinitytv-iptv#pricing" },
        { labelKey: "footer_link_install", href: "/installation-tutorial" },
      ],
    },
    {
      titleKey: "footer_col_business",
      links: [
        { labelKey: "footer_link_reseller", href: "/iptv-reseller" },
        { labelKey: "footer_link_affiliate", href: "/affiliation" },
        { labelKey: "footer_link_trial", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like a free trial.")}` },
        { labelKey: "footer_link_contact", href: "/infinitytv-iptv#contact" },
      ],
    },
  ];
  return (
    <footer className="border-t border-border">
      <div className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 100% at 0% 50%, hsl(var(--primary)/0.12) 0%, transparent 70%)" }} />
        <div className="container relative py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-heading font-bold text-foreground">{t("footer_cta_title")}</p>
            <p className="text-sm text-muted-foreground mt-1">{t("footer_cta_sub")}</p>
          </div>
          <a href="/infinitytv-iptv#pricing" className="shrink-0">
            <Button className="bg-gradient-primary text-white font-bold px-8 py-5 rounded-xl shadow-glow hover:opacity-90 text-sm">{t("footer_cta_button")}</Button>
          </a>
        </div>
      </div>
      <div className="bg-secondary/10">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
            <div className="md:col-span-5 flex flex-col gap-6">
              <Link href="/infinitytv-iptv" aria-label="InfinityTV home" className="flex items-center gap-2.5 w-fit">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md bg-background">
                  <img src="/assets/logo-mark.png" alt="" className="h-full w-full object-cover mix-blend-screen" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-black tracking-tight leading-none" style={{ fontSize: "20px", fontFamily: "var(--font-heading), Poppins, sans-serif" }}>TV</span>
                  <span className="text-white/65 font-semibold leading-none mt-px" style={{ fontSize: "7px", letterSpacing: "0.22em" }}>INFINITY</span>
                  <span className="text-white/35 leading-none mt-px" style={{ fontSize: "6px", letterSpacing: "0.28em" }}>TECHNOLOGY</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{t("footer_tagline")}</p>
              <div className="flex flex-wrap gap-2">
                {[["Tv", "22,000+ Channels"], ["Zap", "4K · Zero Buffer"], ["Shield", "7-Day Guarantee"]].map(([, label]) => (
                  <div key={label} className="flex items-center gap-1.5 bg-secondary border border-border rounded-full px-3 py-1.5 text-xs text-muted-foreground">
                    {label === "22,000+ Channels" && <Tv size={11} className="text-primary shrink-0" />}
                    {label === "4K · Zero Buffer" && <Zap size={11} className="text-primary shrink-0" />}
                    {label === "7-Day Guarantee" && <Shield size={11} className="text-primary shrink-0" />}
                    {label}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {socials.map(({ label, href, hoverColor, svg }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-110"
                    style={{ backgroundColor: hoverColor, color: "#fff" }}>{svg}</a>
                ))}
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-8">
              {navColumns.map((col) => (
                <div key={col.titleKey}>
                  <h4 className="font-heading font-bold text-xs text-foreground uppercase tracking-widest mb-5">{t(col.titleKey)}</h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.labelKey}>
                        <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all inline-block">{t(link.labelKey)}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} InfinityTV. All rights reserved.</span>
            <div className="flex items-center gap-1">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors px-2 py-1">Privacy Policy</Link>
              <span className="text-border">·</span>
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors px-2 py-1">Terms of Service</Link>
              <span className="text-border">·</span>
              <Link href="/refund-policy" className="hover:text-foreground transition-colors px-2 py-1">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
