import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/lib/context";
import { Toaster } from "react-hot-toast";
import CartDrawer from "@/components/CartDrawer";

const inter = localFont({
  src: "./fonts/inter.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amazon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased`}>
        <StoreProvider>
          <Navbar />
          <CartDrawer />
          <Toaster position="bottom-center" />
          <main className="mt-32 px-3">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
