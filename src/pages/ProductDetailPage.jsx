import React from "react";
import ProductDetailSection1 from "../components/productDetail/ProductDetailSection1";
import ProductDetailSection2 from "../components/productDetail/ProductDetailSection2";
import ProductDetailDescryption from "../components/productDetail/ProductDetailDescryption";
import FeaturedProductsSection from "../components/featuredProducts/FeaturedProductSection";

const ProductDetailPage = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] flex flex-col justify-center">
        <ProductDetailSection1/>
        <ProductDetailSection2 />
        <ProductDetailDescryption/>
        <FeaturedProductsSection title="You May Like" />
      </div>
    </section>
  );
};

export default ProductDetailPage;
