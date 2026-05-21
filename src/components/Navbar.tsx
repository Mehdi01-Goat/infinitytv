"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";
import { LOCALES, type Locale } from "@/lib/translations";

function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="InfinityTV home">
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-md bg-background">
        <img
          src="/assets/logo-mark.png"
          alt=""
          className="h-full w-full object-cover mix-blend-screen"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="text-white font-black tracking-tight leading-none"
          style={{ fontSize: "22px", fontFamily: "var(--font-heading), Poppins, sans-serif" }}
        >
          TV
        </span>
        <span className="text-white/65 font-semibold leading-none mt-px" style={{ fontSize: "7.5px", letterSpacing: "0.22em" }}>
          INFINITY
        </span>
        <span className="text-white/35 leading-none mt-px" style={{ fontSize: "6.5px", letterSpacing: "0.28em" }}>
          TECHNOLOGY
        </span>
      </div>
    </Link>
  );
}

function LangSelector() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LOCALES.find(l => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/60 bg-secondary/50 hover:bg-secondary text-sm font-medium text-foreground transition-colors"
      >
        <span>{current.flag}</span>
        <span className="text-xs font-bold text-muted-foreground uppercase">{current.code}</span>
        <ChevronDown size={11} className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-40 rounded-xl border border-border bg-card shadow-lg z-50 overflow-hidden">
          {LOCALES.map(l => (
            <button
              key={l.code}
              onClick={() => { setLocale(l.code as Locale); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left ${
                l.code === locale
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  const navLinks = [
    { labelKey: "nav_home",     href: "/infinitytv-iptv" },
    { labelKey: "nav_channels", href: "/channel-list" },
    { labelKey: "nav_install",  href: "/installation-tutorial" },
    { labelKey: "nav_reseller", href: "/iptv-reseller" },
    { labelKey: "nav_affiliate",href: "/affiliation" },
    { labelKey: "nav_pricing",  href: "/infinitytv-iptv#pricing" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-border/60 bg-background">
      <div className="container flex h-16 items-center justify-between">
        <NavLogo />

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.labelKey}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <LangSelector />
          <Link href="/infinitytv-iptv#pricing">
            <Button size="sm" className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 shadow-glow">
              {t("nav_subscribe")}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangSelector />
          <button className="text-foreground p-1" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.labelKey}
              href={link.href}
              className={`block text-sm py-2 transition-colors ${
                isActive(link.href)
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setOpen(false)}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <div className="py-1">
            <LangSelector />
          </div>
          <Link href="/infinitytv-iptv#pricing" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full bg-gradient-primary text-primary-foreground font-semibold">
              {t("nav_subscribe")}
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
