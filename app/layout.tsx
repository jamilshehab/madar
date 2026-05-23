import type { Metadata } from "next";
import { Cairo, Oswald } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "مدار - نظافة راقية لعناية تدوم",
  description:
    "اكتشف عالم مدار، حيث تلتقي الجودة بالابتكار في منظفات الملابس ومعطرات الأقمشة. نقدم لك منتجات عالية الأداء مصممة لتلبية احتياجاتك اليومية، مع التركيز على الاستدامة والعناية الفائقة بأقمشتك. انضم إلينا في رحلتنا نحو نظافة راقية وعناية تدوم.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${oswald.variable}`}
    >
      <body className="min-h-screen flex flex-col   antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
