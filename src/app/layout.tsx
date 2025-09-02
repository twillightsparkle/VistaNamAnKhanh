import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khu Đô Thị Nam An Khánh - Sudico | Biệt thự, Shophouse, Liền kề",
  description: "Khu đô thị Nam An Khánh - Miền đất xanh giữa lòng phố thị. Biệt thự, shophouse, liền kề cao cấp tại cửa ngõ phía Tây Hà Nội. Hotline: 0942.993.886",
  keywords: "nam an khanh, sudico, biet thu, shophouse, lien ke, ha noi, bds",
  openGraph: {
    title: "Khu Đô Thị Nam An Khánh - Sudico",
    description: "Miền đất xanh giữa lòng phố thị - Biệt thự, shophouse, liền kề cao cấp",
    images: ["https://bietthulienke.info/pl/img/59/tong-the-du-an-nam-an-khanh.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
