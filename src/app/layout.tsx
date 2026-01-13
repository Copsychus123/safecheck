import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_TC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFF9F0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "平安簽 SafeCheck | 給那份不安，一個確定的答案",
  description: "獨居父母的平安，是我們最深的牽掛。平安簽提供最簡單的語音報平安與社區關懷網絡，為您的家人建立不打擾的守護。",
  keywords: ["獨居老人", "長照", "平安簽", "SafeCheck", "社區關懷", "緊急救援", "老人照護"],
  openGraph: {
    title: "平安簽 SafeCheck | 給那份不安，一個確定的答案",
    description: "當「已讀不回」的不是訊息，而是牽掛。平安簽為獨居父母建立24小時的溫暖守護網。",
    url: "https://safecheck.rubix.com",
    siteName: "平安簽 SafeCheck",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "平安簽 SafeCheck",
    description: "給那份不安，一個確定的答案。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "平安簽 SafeCheck",
    "image": "https://safecheck.rubix.com/logo.png",
    "description": "專為獨居長者設計的語音簽到與社區關懷系統",
    "brand": {
      "@type": "Brand",
      "name": "Rubix"
    },
    "offers": {
      "@type": "Offer",
      "price": "30",
      "priceCurrency": "TWD",
      "description": "每日不到一杯豆漿的價格"
    }
  };

  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased font-sans bg-base text-text selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
