import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Money Keeper",
  description: "Money Keeper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/variable/woff2/SUITE-Variable.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
