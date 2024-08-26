import { Inter } from "next/font/google";
import Haeder from "./components/header.js";
import Banner from "./components/banner.js";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ryu's Portfolio",
  description: "류성현 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Haeder />
        <Banner/>
        {children}
      </body>
    </html>
  );
}
