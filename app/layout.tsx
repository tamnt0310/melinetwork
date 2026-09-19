import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import { content } from "@/lib/content";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-bvp",
});

// Bản chính của website. Domain gốc melinetwork.vn được Vercel 308-redirect về đây,
// nên mọi URL tuyệt đối (sitemap, robots, ảnh OG) đều phải trỏ tới bản www này.
const SITE_URL = "https://www.melinetwork.vn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: content.vi.meta.title,
  description: content.vi.meta.description,
  keywords: [
    "Meli Network",
    "MCN Việt Nam",
    "mạng đa kênh",
    "agency truyền thông",
    "booking KOL KOC",
    "TikTok Shop",
    "affiliate marketing",
  ],
  // Báo cho Google biết đâu là địa chỉ chính thức của trang, tránh bị coi là
  // nội dung trùng lặp giữa bản có www và không www.
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Meli Network",
    title: content.vi.meta.title,
    description: content.vi.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: content.vi.meta.title,
    description: content.vi.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
