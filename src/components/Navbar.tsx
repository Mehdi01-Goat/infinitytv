"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/infinitytv-iptv" },
  { label: "Channel List", href: "/channel-list" },
  { label: "Installation Tutorial", href: "/installation-tutorial" },
  { label: "IPTV Reseller", href: "/iptv-reseller" },
  { label: "Affiliation", href: "/affiliation" },
  { label: "Pricing", href: "/infinitytv-iptv#pricing" },
];

const LANGS = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "de", flag: "🇩🇪", label: "DE" },
];

function LanguageSwitcher() {
  const switchLang = (lang: string) => {
    const hostname = window.location.hostname;
    if (lang === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname}`;
    } else {
      document.cookie = `googtrans=/en/${lang}; path=/`;
      document.cookie = `googtrans=/en/${lang}; path=/; domain=.${hostname}`;
    }
    window.location.reload();
  };

  const current =
    typeof document !== "undefined"
      ? (document.cookie.match(/googtrans=\/en\/(\w+)/) || [])[1] || "en"
      : "en";

  return (
    <div className="flex items-center gap-0.5 border border-border rounded-lg p-0.5">
      {LANGS.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => switchLang(code)}
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all ${
            current === code
              ? "bg-primary/20 text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span>{flag}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

function NavLogo() {
  return (
    <Link href="/infinitytv-iptv" className="flex items-center gap-2.5 shrink-0" aria-label="InfinityTV home">
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-md bg-background">
        <img src="/assets/logo-mark.png" alt="" className="h-full w-full object-cover mix-blend-screen" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white font-black tracking-tight leading-none" style={{ fontSize: "22px", fontFamily: "var(--font-heading), Poppins, sans-serif" }}>TV</span>
        <span className="text-white/65 font-semibold leading-none mt-px" style={{ fontSize: "7.5px", letterSpacing: "0.22em" }}>INFINITY</span>
        <span className="text-white/35 leading-none mt-px" style={{ fontSize: "6.5px", letterSpacing: "0.28em" }}>TECHNOLOGY</span>
      </div>
    </Link>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/infinitytv-iptv") return pathname === "/infinitytv-iptv";
    if (href.startsWith("/infinitytv-iptv#")) return pathname === "/infinitytv-iptv";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-border/60 bg-background">
      <div className="container flex h-16 items-center justify-between">
        <NavLogo />

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link.href) ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link href="/infinitytv-iptv#pricing">
            <Button size="sm" className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 shadow-glow">
              Subscribe Now
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`block text-sm py-2 transition-colors ${
                isActive(link.href) ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-1">
            <LanguageSwitcher />
          </div>
          <Link href="/infinitytv-iptv#pricing" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full bg-gradient-primary text-primary-foreground font-semibold">
              Subscribe Now
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
