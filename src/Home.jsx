import React from "react";
import Benifits from "./components/benifitsSection/Benifits";
import FeaturedProductsSection from "./components/featuredProducts/FeaturedProductSection";
import FeaturedProductSectionSmallScreen from "./components/featuredProducts/FeaturedProductSectionSmallScreen";
import FirstFooter from "./components/footer/FirstFooter";
import SecondFooter from "./components/footer/SecondFooter";
import FirstHeader from "./components/Headers/FirstHeader";
import SecondHeader from "./components/Headers/SecondHeader";
import HeroSection from "./components/heroSection/HeroSection";
import Sidebar from "./components/sidebar/Sidebar";
import SubscribeAndEmailSection from "./components/subscribeAndEmailSection/SubscribeAndEmailSection";

const Home = () => {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <HeroSection />
      <Sidebar />
      <Benifits />
      <FeaturedProductsSection />
      <FeaturedProductSectionSmallScreen />
      <SubscribeAndEmailSection />
      <FirstFooter />
      <SecondFooter />
    </>
  );
};

export default Home;
