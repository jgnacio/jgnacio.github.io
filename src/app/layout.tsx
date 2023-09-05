import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/utils/Provider";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const imb_plex_mono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "jgnacio portfolio",
  description: "Ignacio Gómez portfolio website",
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${imb_plex_mono.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
