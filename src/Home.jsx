import React from "react";
import Benifits from "./components/benifitsSection/Benifits";
import FeaturedProductsSection from "./components/featuredProducts/FeaturedProductSection";
import FeaturedProductSectionSmallScreen from "./components/featuredProducts/FeaturedProductSectionSmallScreen";
import HeroSection from "./components/heroSection/HeroSection";
import Sidebar from "./components/sidebar/Sidebar";
import SubscribeAndEmailSection from "./components/subscribeAndEmailSection/SubscribeAndEmailSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Sidebar />
      <Benifits />
      <FeaturedProductsSection />
      <FeaturedProductsSection title="Big Deals" />
      <FeaturedProductSectionSmallScreen />
      <SubscribeAndEmailSection />
    </>
  );
};

export default Home;
