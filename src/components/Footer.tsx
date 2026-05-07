import Link from "next/link";
import { MessageCircle, Send, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "14702642482";
const TELEGRAM_USERNAME = "InfinityTVSupport";
const SUPPORT_EMAIL = "contact@infinitytv.io";

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
          <div className="flex items-center gap-3">
            {socials.map(({ label, icon: Icon, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:scale-110 transition-transform">
                <Icon size={16} style={{ color }} />
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
