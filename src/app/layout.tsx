import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppContext } from "./contexts";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Luis",
  description: "Meu Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={
        (cn("relative h-full font-sans antialiased scroll-smooth"), inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <AppContext>
            <Navbar/>
            {children}
          </AppContext>
        </main>
      </body>
    </html>
  );
}
