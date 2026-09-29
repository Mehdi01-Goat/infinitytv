import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/go/"],
      },
    ],
    sitemap: "https://www.infinitytv.io/sitemap.xml",
    host: "https://www.infinitytv.io",
  };
}
