import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Clinica Familiei Dr. Panfil",
  description: "Îngrijire dentară completă, fără stres, pentru pacienți de toate vârstele.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${jakarta.variable} ${inter.variable} antialiased scroll-smooth`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero-mobile.webp"
          type="image/webp"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          href="/hero.webp"
          type="image/webp"
          media="(min-width: 768px)"
        />
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://static.cdninstagram.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
