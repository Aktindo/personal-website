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
        <Providers>
          <a href="https://fiverr.com/aktindo" target="_blank">
            {" "}
            <div className="relative mb-5 p-2 text-center top-0 w-full bg-success bg-opacity-60">
              ⚡New! I am now accepting commissions on Fiverr!
            </div>
          </a>

          {children}
        </Providers>
      </body>
    </html>
  );
}
