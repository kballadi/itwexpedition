"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./page";
import Footer from "./Footer";
import ContactModal from "./components/ContactModal";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { ReactPlugin } from "@stagewise-plugins/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setContactOpen(false); }, [pathname]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
        <Navbar onContactClick={() => setContactOpen(true)} />
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
        <div className="pt-20">
          {children}
        </div>
        <Footer onContactClick={() => setContactOpen(true)}/>
      </body>
    </html>
  );
}
