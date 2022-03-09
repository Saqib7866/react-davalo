import FeaturedProducts from "../components/dashboardComponents/FeaturedProducts";
import HerbalProducts from "../components/dashboardComponents/HerbalProducts";
import Brands from "../components/dashboardComponents/Brands";
import MainCarousel from "../components/dashboardComponents/MainCarousel";
import OrderMethod from "../components/dashboardComponents/OrderMethod";
function Dashboard() {
  return (
    <div>
      {/* HERO SLIDER START */}
      <MainCarousel />
      {/* HERO SLIDER END */}
      {/* Section TOP BRANDS START */}
      <Brands />
      {/* Section TOP BRANDS END */}
      {/* Section Products Herbal Start */}
      <HerbalProducts />
      {/* Section Products Herbal End */}
      {/* Section Products Herbal Start */}
      <FeaturedProducts />
      {/* Section Products Herbal End */}
      <OrderMethod />
    </div>
  );
}

export default Dashboard;
