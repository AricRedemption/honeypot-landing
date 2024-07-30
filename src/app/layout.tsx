import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HoneyPot Finance",
  description: "first defi-hub on berachain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
