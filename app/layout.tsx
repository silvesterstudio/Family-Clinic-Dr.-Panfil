import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
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
      <body>{children}</body>
    </html>
  );
}
