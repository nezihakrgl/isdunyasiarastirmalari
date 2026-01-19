import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.isdunyasiarastirmalari.com"),

  title: {
    default: "İş Dünyası Araştırmaları | Başarı ve Güven Endeksi",
    template: "%s | İş Dünyası Araştırmaları",
  },

  description:
    "İş Dünyası Araştırmaları; işletmeler ve iş insanları için başarı ve güven odaklı, veri temelli bağımsız endeks ve değerlendirme çalışmaları yürütür.",

  keywords: [
    "iş dünyası araştırmaları",
    "başarı ve güven endeksi",
    "iş insanları",
    "işletme endeksi",
    "kurumsal itibar",
    "güven endeksi",
    "iş dünyası analizleri",
  ],

  authors: [{ name: "İş Dünyası Araştırmaları Topluluğu" }],
  creator: "İş Dünyası Araştırmaları Topluluğu",
  publisher: "İş Dünyası Araştırmaları Topluluğu",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.isdunyasiarastirmalari.com",
  },

  openGraph: {
    title: "İş Dünyası Araştırmaları | Başarı ve Güven Endeksi",
    description:
      "İş insanları ve işletmeler için başarı ve güven odaklı, veri temelli endeks ve değerlendirme çalışmaları.",
    url: "https://www.isdunyasiarastirmalari.com",
    siteName: "İş Dünyası Araştırmaları",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
