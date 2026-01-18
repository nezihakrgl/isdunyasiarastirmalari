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
  metadataBase: new URL("https://isdunyasiarastirmalari.com"),
  title: {
    default: "İş Dünyası Araştırmaları | Başarı ve Güven Endeksi",
    template: "%s | İş Dünyası Araştırmaları",
  },
  description:
    "İş Dünyası Araştırmaları Topluluğu; işletmeler ve iş insanları için başarı, güven ve itibar odaklı bağımsız değerlendirme ve endeks çalışmaları yürütür.",
  alternates: {
    canonical: "https://isdunyasiarastirmalari.com/",
  },
  openGraph: {
    title: "İş Dünyası Araştırmaları | Başarı ve Güven Endeksi",
    description:
      "İşletmeler ve iş insanları için başarı ve güven odaklı bağımsız değerlendirme ve endeks yaklaşımı.",
    url: "https://isdunyasiarastirmalari.com/",
    siteName: "İş Dünyası Araştırmaları",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
