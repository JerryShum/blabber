import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Providers from "./Providers";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Blabber",
  description: "Minimalistic and simple blog platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${notoSans.variable} flex min-h-screen flex-col antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <div className="mx-auto w-full max-w-[2000px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
              <Navbar />
              <Toaster />
              <main className="flex-grow py-4 sm:py-6 md:py-8">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
