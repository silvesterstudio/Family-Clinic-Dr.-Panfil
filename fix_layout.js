const fs = require('fs');

const layout = \import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clinica Familiei Dr. Panfil",
  description: "Ingrijire dentara completa, fara stres, pentru pacien?i de toate varstele.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={\\\\ \ antialiased scroll-smooth\\\}>
      <body>{children}</body>
    </html>
  );
}\;

fs.writeFileSync('app/layout.tsx', layout);
