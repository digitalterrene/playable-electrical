"use client";
import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import BannerOne from "./components/Banner/BannerOne";
import HeroOne from "./components/Hero/HeroOne";
import FooterCTA from "./components/FooterCTA";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Playable Electrical",
  description: "Reliable Electrical Solutions in Johannesburg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <BannerOne />
        <div className="bg-gradient-to-tr from-[#ff80b5]/10 to-[#9089fc]/10 ">
          <Navbar />
          {pathname !== "/contact-us" && <HeroOne />}
        </div>
        {children}
        <FooterCTA />
        <Footer />
      </body>
    </html>
  );
}
