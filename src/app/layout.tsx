import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { openSansFont, robotoSerifFont } from "@/fonts";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./layout.module.css";

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
        className={`${openSansFont.variable} ${robotoSerifFont.variable} ${styles["body"]}`}
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
