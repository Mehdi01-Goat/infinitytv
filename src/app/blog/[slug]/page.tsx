import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/app/blog/page";

const postContent: Record<string, { body: string }> = {
  "best-iptv-service-france-2025": {
    body: `
## What Makes a Good IPTV Service in France?

When choosing an IPTV service in France, the most important factors are channel availability (especially French channels like TF1, M6, Canal+, beIN Sports), streaming stability, and price.

## Top Features to Look For

**French Channel Coverage:** Any serious IPTV service for France must include TF1, France 2, France 3, M6, Canal+, and sports channels like beIN Sports and RMC Sport.

**Streaming Stability:** Look for services that use anti-buffering technology. During live sports especially, a stable connection makes all the difference.

**Device Compatibility:** The best IPTV services work on Smart TVs, Firestick, smartphones, and computers — so you can watch anywhere.

**Price:** Quality IPTV in France typically ranges from €5 to €15 per month depending on the plan duration. Annual plans offer the best value.

## Why InfinityTV Works for French Viewers

InfinityTV includes 22,000+ channels including a full French channel package. With plans starting from €4.91/month on the annual plan, it's one of the most competitive options available. The service uses anti-buffering technology and activates within 30 minutes of ordering.

A 24-hour free trial is available — just contact support via WhatsApp to request it before committing.

## Getting Started

1. Choose your plan (1 month to 12 months)
2. Submit your order with your preferred payment method
3. Receive your credentials and setup guide within 30 minutes
4. Install on your preferred device and start watching

[Start your free trial →](/infinitytv-iptv)
    `,
  },
  "watch-bundesliga-online-iptv": {
    body: `
## Watching Bundesliga Online in 2025

The Bundesliga is one of the most-watched football leagues in the world, but traditional broadcast rights are fragmented across platforms — DAZN, Sky Sport, and others — making it expensive to catch every match.

## Your Options for Bundesliga Streaming

**DAZN Germany:** Holds rights to Bundesliga in Germany. Monthly subscription required.

**Sky Sport:** Traditional option with most Bundesliga coverage in Germany.

**IPTV Services:** The most cost-effective solution for watching Bundesliga and hundreds of other sports channels from a single subscription.

## Why IPTV is the Best Value for Bundesliga Fans

With an IPTV service like InfinityTV, you get access to Bundesliga matches along with 22,000+ other channels — sports from around the world, including NFL, NBA, UFC, and Premier League — all for a single monthly price starting from €4.91/month.

This beats paying separately for multiple streaming services.

## Setting Up IPTV for Bundesliga

1. Subscribe to InfinityTV
2. Install the IPTV app on your Smart TV, Firestick, or phone
3. Enter your credentials
4. Find the Bundesliga channel in the sports section
5. Watch live in HD or 4K

[Get started from €4.91/month →](/infinitytv-iptv)
    `,
  },
  "iptv-setup-firestick-smart-tv": {
    body: `
## Setting Up IPTV on Firestick (Step-by-Step)

Amazon Firestick is one of the most popular devices for IPTV. Here's how to get set up in under 10 minutes.

### Step 1: Enable Unknown Sources
Go to Settings → My Fire TV → Developer Options → Apps from Unknown Sources → Turn On.

### Step 2: Install Downloader App
Search for "Downloader" in the Amazon App Store and install it.

### Step 3: Download Your IPTV App
Open Downloader and enter the URL for your preferred IPTV player (IPTV Smarters, TiviMate, or GSE IPTV are popular choices).

### Step 4: Enter Your Credentials
Open the IPTV app, choose "M3U URL" or "Xtream Codes" (depending on your provider), and enter the credentials InfinityTV sent you.

### Step 5: Start Watching
Your channel list will load automatically. Browse by category or use the EPG guide.

---

## Setting Up IPTV on Samsung Smart TV

### Option 1: Using Smart IPTV App
1. Install "Smart IPTV" from the Samsung App Store
2. Note your TV's MAC address shown in the app
3. Register your MAC address on the Smart IPTV website
4. Upload your M3U playlist URL

### Option 2: Using SS IPTV
1. Install "SS IPTV" from the Samsung App Store
2. Go to Settings → Playlist → Add your M3U URL
3. Save and reload

---

## Setting Up IPTV on LG Smart TV

1. Install "SS IPTV" or "Smart IPTV" from LG Content Store
2. Add your M3U URL in the app settings
3. Channels load automatically

---

## Getting Your IPTV Credentials

[Order InfinityTV here →](/infinitytv-iptv) and receive your M3U URL and Xtream Codes credentials within 30 minutes. Support is available via WhatsApp for help with any setup step.
    `,
  },
  "iptv-vs-cable-tv-comparison": {
    body: `
## IPTV vs Cable TV: The Full Comparison

Millions of households are cutting the cord and switching to IPTV. Here's an honest comparison of both options.

## Price

**Cable TV:** Typically €30–€80/month depending on your package and provider.

**IPTV:** Premium services like InfinityTV start from €4.91/month. Even the monthly plan at €11.98 is a fraction of cable costs.

**Winner: IPTV** — significantly cheaper for the same or more channels.

## Channel Selection

**Cable TV:** Limited to what your provider offers in your country. Typically 100–300 channels.

**IPTV:** InfinityTV offers 22,000+ channels from around the world, including international sports, foreign language channels, PPV events, and more.

**Winner: IPTV** — massively more content.

## Reliability

**Cable TV:** Very stable, no internet dependency.

**IPTV:** Depends on your internet connection. With a stable connection (25 Mbps+ recommended), modern anti-buffering IPTV services are very reliable.

**Winner: Tie** — cable has a slight edge on raw stability, but IPTV with a good connection is comparable.

## Device Flexibility

**Cable TV:** Limited to TV sets with a cable box.

**IPTV:** Watch on Smart TV, phone, tablet, computer, Firestick — anywhere, anytime.

**Winner: IPTV** — watch on any screen.

## Conclusion

For most users in 2025, IPTV offers better value, more content, and more flexibility than cable TV. The only reason to keep cable is if your internet connection is unreliable.

[Try InfinityTV free for 24 hours →](/infinitytv-iptv)
    `,
  },
  "best-iptv-germany-2025": {
    body: `
## Best IPTV Service in Germany 2025

Germany has strong demand for IPTV, particularly for Bundesliga, Champions League, and German-language channels. Here's what to look for.

## Must-Have German Channels

A quality IPTV service for Germany should include:
- **Free-to-air:** ARD, ZDF, RTL, Sat.1, ProSieben, VOX, kabel eins
- **Sports:** Sky Sport Bundesliga, DAZN, Sport1, Eurosport
- **International:** Channels in English, French, Turkish, Arabic, and other languages popular in Germany

## Key Factors for German IPTV Users

**Streaming Quality:** 4K and Full HD for Bundesliga matches is essential. Look for services with anti-buffering technology.

**EPG (Electronic Programme Guide):** A working EPG makes it easy to find what's on and set reminders.

**Multi-device Support:** Germans commonly watch on Smart TVs and Android devices.

## Why InfinityTV Is a Strong Choice for Germany

InfinityTV includes all major German channels plus 22,000+ international channels. Plans start at €4.91/month (annual plan) with support available in German, English, French, Spanish, and Dutch.

The service activates within 30 minutes and includes a 7-day money-back guarantee — so there's no risk in trying it.

**Free 24-hour trial:** Contact InfinityTV via WhatsApp before ordering to get a free trial on your device.

[View InfinityTV plans →](/infinitytv-iptv)
    `,
  },
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | InfinityTV Blog`,
    description: post.description,
    alternates: { canonical: `https://www.infinitytv.io/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

function renderMarkdown(text: string) {
  const lines = text.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="font-heading text-xl sm:text-2xl font-bold mt-10 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="font-heading text-lg font-bold mt-7 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={key++} className="font-semibold text-foreground mt-4 mb-1">{line.slice(2, -2)}</p>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={key++} className="ml-5 text-muted-foreground text-sm leading-relaxed list-disc">{line.slice(2)}</li>);
    } else if (line.startsWith("[") && line.includes("→](")) {
      const label = line.match(/\[(.+?)\]/)?.[1] ?? "";
      const href = line.match(/\((.+?)\)/)?.[1] ?? "/";
      elements.push(
        <div key={key++} className="mt-6">
          <Link href={href} className="inline-flex items-center gap-2 bg-gradient-primary text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
            {label}
          </Link>
        </div>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={key++} className="border-border my-8" />);
    } else if (line.trim() !== "") {
      const parts = line.split(/\*\*(.+?)\*\*/g);
      elements.push(
        <p key={key++} className="text-muted-foreground text-sm leading-relaxed mb-3">
          {parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }
  }
  return elements;
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const content = postContent[slug];
  if (!post || !content) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "@id": "https://www.infinitytv.io/#organization",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.infinitytv.io/#organization",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.infinitytv.io/blog/${slug}`,
    },
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors mb-8 inline-block">
            ← Back to Blog
          </Link>

          <div className="mb-8">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">{post.category}</span>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 leading-snug">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-8 border-l-2 border-primary pl-4 italic">
            {post.description}
          </p>

          <div className="prose-sm">{renderMarkdown(content.body)}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
