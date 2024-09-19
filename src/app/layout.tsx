import type { Metadata } from "next";
import "./globals.scss";
import { Inter } from 'next/font/google'


const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300','400','500','600']})


export const metadata: Metadata = {
  title: "Alysson Santos",
  description: "Alysson Santos is a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
