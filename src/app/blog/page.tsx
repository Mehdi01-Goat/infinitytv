import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "InfinityTV Blog — IPTV Guides, Tips & Streaming News",
  description: "Expert guides on IPTV streaming, device setup, channel comparisons, and tips to get the best out of your InfinityTV subscription.",
  alternates: { canonical: "https://www.infinitytv.io/blog" },
};

export const posts = [
  {
    slug: "best-iptv-service-france-2025",
    title: "Best IPTV Service in France 2025: Complete Guide",
    description: "Looking for the best IPTV service in France? We compare the top providers, pricing, channel lists, and what to look for before buying.",
    date: "2025-05-20",
    readTime: "6 min read",
    category: "Guides",
  },
  {
    slug: "watch-bundesliga-online-iptv",
    title: "How to Watch Bundesliga Online Without Cable in 2025",
    description: "Stream every Bundesliga match live in HD. Learn the best legal and IPTV options to watch German football from anywhere in the world.",
    date: "2025-05-15",
    readTime: "5 min read",
    category: "Sports",
  },
  {
    slug: "iptv-setup-firestick-smart-tv",
    title: "How to Set Up IPTV on Firestick and Smart TV (Step-by-Step)",
    description: "Complete setup guide for installing and using IPTV on Amazon Firestick, Samsung Smart TV, LG TV, and Android TV in under 10 minutes.",
    date: "2025-05-10",
    readTime: "7 min read",
    category: "Setup",
  },
  {
    slug: "iptv-vs-cable-tv-comparison",
    title: "IPTV vs Cable TV in 2025: Which Is Worth It?",
    description: "A detailed comparison of IPTV and traditional cable TV — pricing, channel selection, picture quality, reliability, and which is right for you.",
    date: "2025-05-05",
    readTime: "5 min read",
    category: "Guides",
  },
  {
    slug: "best-iptv-germany-2025",
    title: "Best IPTV Service in Germany 2025: Full Review",
    description: "Find the best IPTV service in Germany with German channels, Bundesliga, and international content. Full pricing and feature comparison.",
    date: "2025-04-28",
    readTime: "6 min read",
    category: "Guides",
  },
];

const categoryColors: Record<string, string> = {
  Guides: "bg-primary/10 text-primary",
  Sports: "bg-emerald-500/10 text-emerald-400",
  Setup: "bg-amber-500/10 text-amber-400",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Blog</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            IPTV Guides &amp; Tips
          </h1>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about streaming, setup, and getting the most out of your service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 hover:border-primary/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-secondary text-muted-foreground"}`}>
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <h2 className="font-heading font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.description}
              </p>
              <span className="text-xs text-muted-foreground/60">
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
