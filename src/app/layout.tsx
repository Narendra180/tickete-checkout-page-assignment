import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { openSansFont, robotoSerifFont } from "@/fonts";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Checkout | Tickete",
  description: "Tickete checkout page",
};

const theme = createTheme({
  colors: {
    'black': ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
  },
  primaryColor: 'black',
  primaryShade: 7
});

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
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
