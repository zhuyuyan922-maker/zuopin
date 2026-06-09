import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "作品集",
  description: "摄影作品与抖音运营案例",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
