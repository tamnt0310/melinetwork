import type { MetadataRoute } from "next";

// Bản chính của website. Domain gốc melinetwork.vn được Vercel 308-redirect về đây,
// nên mọi URL tuyệt đối (sitemap, robots, ảnh OG) đều phải trỏ tới bản www này.
const SITE_URL = "https://www.melinetwork.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
