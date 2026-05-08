import Link from "next/link";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "14702642482";
const TELEGRAM_USERNAME = "InfinityTVSupport";

// TODO: replace # with actual profile URLs
const TIKTOK_URL = "#";
const INSTAGRAM_URL = "#";
const FACEBOOK_URL = "#";
const PINTEREST_URL = "#";

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
      { label: "Contact Us", href: "/#contact" },
    ],
  },
];

const socials = [
  {
    label: "Telegram",
    href: `https://t.me/${TELEGRAM_USERNAME}`,
    color: "#2CA5E0",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
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
  {
    label: "Pinterest",
    href: PINTEREST_URL,
    color: "#E60023",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
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
            {socials.map(({ label, href, color, svg }) => (
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
