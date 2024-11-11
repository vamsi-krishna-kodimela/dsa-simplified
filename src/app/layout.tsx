import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MainMenu } from "@/components/ui/custom/main-menu";
import { Header } from "@/components/ui/custom/header";

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
      <body>
        <SidebarProvider className="w-full flex" defaultOpen={true}>
          <MainMenu />
          <div className="flex-1">
            <Header />
            <main className="p-8">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
