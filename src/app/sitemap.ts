import type { MetadataRoute } from "next";

const blogSlugs = [
  "best-iptv-service-france-2025",
  "watch-bundesliga-online-iptv",
  "iptv-setup-firestick-smart-tv",
  "iptv-vs-cable-tv-comparison",
  "best-iptv-germany-2025",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.infinitytv.io";
  return [
    { url: `${base}/infinitytv-iptv`, lastModified: "2026-05-30", changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/blog`, lastModified: "2026-05-30", changeFrequency: "weekly", priority: 0.9 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: "2026-05-30",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/channel-list`, lastModified: "2026-05-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iptv-reseller`, lastModified: "2026-05-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/affiliation`, lastModified: "2026-05-19", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/installation-tutorial`, lastModified: "2026-05-19", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: "2026-05-19", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified: "2026-05-19", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: "2026-05-19", changeFrequency: "yearly", priority: 0.3 },
  ];
}
