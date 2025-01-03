import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/Navbar';

const notoSans = Noto_Sans({
   subsets: ['latin'],
   variable: '--font-noto-sans',
});

const josefinSans = Josefin_Sans({
   subsets: ['latin'],
   variable: '--font-josefin-sans',
});

export const metadata: Metadata = {
   title: 'Blabber',
   description: 'Minimalistic and simple blog platform.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${josefinSans.variable} ${notoSans.variable} antialiased lg:px-60 w-screen relative`}
         >
            <Navbar />
            <main>{children}</main>
         </body>
      </html>
   );
}
