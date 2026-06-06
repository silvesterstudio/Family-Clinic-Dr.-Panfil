$css = @'
@import "tailwindcss";

@theme inline {
  --color-brand-teal: #7A9A8A;
  --color-brand-black: #000000;
  --color-brand-grey: #F5F5F5;
  --color-brand-white: #FFFFFF;
  --color-brand-muted: #E0E0E0;

  --font-primary: var(--font-montserrat), sans-serif;
  --font-secondary: var(--font-open-sans), sans-serif;
}

:root {
  --background: #FFFFFF;
  --foreground: #000000;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-secondary);
  scroll-behavior: smooth;
}
'@
Set-Content -Path 'app/globals.css' -Value $css -Encoding UTF8

$layout = @'
import type { Metadata } from "next";
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
    <html lang="ro" className={${montserrat.variable}  antialiased scroll-smooth}>
      <body>{children}</body>
    </html>
  );
}
'@
Set-Content -Path 'app/layout.tsx' -Value $layout -Encoding UTF8
