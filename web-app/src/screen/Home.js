import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import FeatureProduct from "../components/Homepage/FeatureProduct";
import HerbalProduct from "../components/Homepage/HerbalProduct";
import HeroMain from "../components/Homepage/HeroMain";
import HowItWorks from "../components/Homepage/HowItWorks";
import TopBrand from "../components/Homepage/TopBrand";
import { api } from "../components/Services/ApiService";

const Home = () => {
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topBrands, setTopBrands] = useState([]);

  useEffect(() => {
    getFeaturedProducts();
    getTopBrands();
  }, []);

  const getFeaturedProducts = async () => {
    const response = await api.get("/products/featured-product");
    if (response && response.ok) {
      setFeaturedProduct(response.data);
    }
  };

  const getTopBrands = async () => {
    const response = await api.get("/brands/top");
    if (response && response.ok) {
      setTopBrands(response.data.list);
    }
  };

  return (
    <>
      {/* HERO BANNER  */}
      <HeroMain />
      {/* TOP BRANDS */}
      <TopBrand topBrands={topBrands} />
      {/* Herbal Product */}
      <HerbalProduct />
      {/* Feature Products */}
      <FeatureProduct products={featuredProduct} />
      {/* How it Works */}
      <HowItWorks />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
