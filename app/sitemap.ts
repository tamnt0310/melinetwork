import type { MetadataRoute } from "next";

// ⚠️ Đổi sang tên miền thật sau khi deploy.
const SITE_URL = "https://melinetwork.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
