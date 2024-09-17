import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.scss";

const inter = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

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
