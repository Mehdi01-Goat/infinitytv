import Link from "next/link";
import { MessageCircle, Send, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "14702642482";
const TELEGRAM_USERNAME = "InfinityTVSupport";
const SUPPORT_EMAIL = "contact@infinitytv.io";

// TODO: replace # with actual profile URLs
const TIKTOK_URL = "#";
const INSTAGRAM_URL = "#";
const FACEBOOK_URL = "#";

const navColumns = [
  {
    title: "Service",
    links: [
      { label: "Home", href: "/" },
      { label: "Channel List", href: "/channel-list" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Installation Guide", href: "/installation-tutorial" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "IPTV Reseller", href: "/iptv-reseller" },
      { label: "Affiliation Program", href: "/affiliation" },
      {
        label: "Free Trial",
        href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like a free trial.")}`,
      },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/#contact" },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

const socials = [
  { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${WHATSAPP_NUMBER}`, color: "#25D366" },
  { label: "Telegram", icon: Send, href: `https://t.me/${TELEGRAM_USERNAME}`, color: "#2CA5E0" },
  { label: "Email", icon: Mail, href: `mailto:${SUPPORT_EMAIL}`, color: "hsl(var(--primary))" },
];

const socialsSvg = [
  {
    label: "TikTok",
    href: TIKTOK_URL,
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.2 8.2 0 004.79 1.53V6.83a4.85 4.85 0 01-1.02-.14z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    color: "#E1306C",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: FACEBOOK_URL,
    color: "#1877F2",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="border-t border-border bg-secondary/20">
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <Link href="/" aria-label="InfinityTV home" className="flex items-center gap-2.5 mb-4 w-fit">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md bg-background">
              <img src="/assets/logo-mark.png" alt="" className="h-full w-full object-cover mix-blend-screen" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black tracking-tight leading-none" style={{ fontSize: "20px", fontFamily: "var(--font-heading), Poppins, sans-serif" }}>TV</span>
              <span className="text-white/65 font-semibold leading-none mt-px" style={{ fontSize: "7px", letterSpacing: "0.22em" }}>INFINITY</span>
              <span className="text-white/35 leading-none mt-px" style={{ fontSize: "6px", letterSpacing: "0.28em" }}>TECHNOLOGY</span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Premium IPTV service with 22,000+ live channels and 95,000+ VODs. Anti-buffering technology for seamless streaming on all devices.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {socials.map(({ label, icon: Icon, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:scale-110 transition-transform">
                <Icon size={16} style={{ color }} />
              </a>
            ))}
            {socialsSvg.map(({ label, href, color, svg }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:scale-110 transition-transform"
                style={{ color }}>
                {svg}
              </a>
            ))}
          </div>
        </div>

        {navColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-bold text-sm text-foreground uppercase tracking-widest mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} InfinityTV. All rights reserved.</span>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5">
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <Link href="/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
