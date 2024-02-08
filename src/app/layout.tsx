import type { Metadata } from "next";
import { openSansFont } from "@/fonts";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import "./globals.css";
import '@mantine/core/styles.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <head>
        <ColorSchemeScript />
      </head>
      <body 
        className={openSansFont.className}
      >
        <MantineProvider>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
