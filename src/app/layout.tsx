import type { Metadata } from "next";
import { Manrope, Merriweather } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { manrope } from "./helpers/fonts";

export const metadata: Metadata = {
  title: "Akshit Singla | Aktindo",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={manrope.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
