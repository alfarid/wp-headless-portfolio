import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Malfa | WordPress Developer",
  description:
    "Portofolio WordPress Developer spesialisasi Custom Themes, Plugin Development kustom, dan Elementor Page Builder.",
  keywords: [
    "wordpress developer",
    "headless wordpress",
    "custom themes wordpress",
    "custom plugin wordpress",
    "elementor builder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} ${inter.variable}`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
