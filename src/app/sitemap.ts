import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.infinitytv.io";
  return [
    { url: `${base}/infinitytv-iptv`, lastModified: "2026-05-19", changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/channel-list`, lastModified: "2026-05-19", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-reseller`, lastModified: "2026-05-19", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/affiliation`, lastModified: "2026-05-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/installation-tutorial`, lastModified: "2026-05-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: "2026-05-19", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified: "2026-05-19", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: "2026-05-19", changeFrequency: "yearly", priority: 0.3 },
  ];
}
