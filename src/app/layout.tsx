import type { Metadata } from "next";
import "./globals.scss";


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
