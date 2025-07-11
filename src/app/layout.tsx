import React from "react";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import '@/styles/globals.css'
import RootLayoutClient from "./layout.client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikel Store",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.ico" sizes="any"/>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <RootLayoutClient>{children}</RootLayoutClient>
    </body>
    </html>
  );
}
