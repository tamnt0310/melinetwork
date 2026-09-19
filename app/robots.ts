import type { MetadataRoute } from "next";

// ⚠️ Đổi sang tên miền thật sau khi deploy.
const SITE_URL = "https://melinetwork.vn";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
