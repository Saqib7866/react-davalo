import React from 'react'
import Footer from '../components/Footer/Footer'
import FeatureProduct from '../components/Homepage/FeatureProduct'
import HerbalProduct from '../components/Homepage/HerbalProduct'
import HeroMain from '../components/Homepage/HeroMain'
import HowItWorks from '../components/Homepage/HowItWorks'
import TopBrand from '../components/Homepage/TopBrand'

const Home = () => {
  return (
    <>
    {/* HERO BANNER  */}
      <HeroMain/>
    {/* TOP BRANDS */}
      <TopBrand/>
    {/* Herbal Product */}
    <HerbalProduct/>
    {/* Feature Products */}
    <FeatureProduct/>
    {/* How it Works */}
    <HowItWorks/>
    {/* Footer */}
      <Footer/>
    </>
  )
}

export default Home