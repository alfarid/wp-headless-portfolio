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
  title: "WP.dev | Headless WordPress & Next.js Developer",
  description: "Portofolio WordPress Developer spesialisasi Headless CMS (WPGraphQL), Custom Themes, dan Plugin Development kustom.",
  keywords: ["wordpress developer", "headless wordpress", "nextjs developer", "custom plugin wordpress", "gutenberg blocks"],
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


