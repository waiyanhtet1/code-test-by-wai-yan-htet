import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "安比塗漆器工房 | 商品詳細",
  description: "Responsive lacquerware product detail page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
