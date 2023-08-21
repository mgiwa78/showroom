import Contact from "@/components/main/Contact";
import Features from "@/components/main/Features";
import MainFooter from "@/components/main/Footer";
import HeroSection from "@/components/main/HeroSection";
import MainMobileNavigation from "@/components/main/MobileNavigation";
import MainNavigationBar from "@/components/main/Navigation";
import Register from "@/components/main/Register";
import WhatIsShowroom from "@/components/main/WhatIsShowroom";

export default function Home() {
  return (
    <>
      <MainNavigationBar />
      <HeroSection />
      <WhatIsShowroom />
      <Features />
      <Register />
      <Contact />
      <MainFooter />
      <MainMobileNavigation />
    </>
  );
}
