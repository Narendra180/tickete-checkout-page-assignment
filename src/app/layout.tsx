import type { Metadata } from "next";
import "./globals.css";
import { openSansFont } from "@/fonts";

export const metadata: Metadata = {
  title: "Checkout | Tickete",
  description: "Tickete checkout page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={openSansFont.className}
      >
        {children}
      </body>
    </html>
  );
}
