import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DSA Simplified",
  description: "Data Structured and Algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
