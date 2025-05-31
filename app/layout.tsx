import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visionlyft",
  description: "The ultimate branded link & landing page platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body
        suppressHydrationWarning
        className="flex flex-col min-h-screen bg-white text-black"
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
