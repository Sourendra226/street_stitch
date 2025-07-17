import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ShopCategories from "../components/ShopCategories";
import NewArrival from "../components/NewArrival";
import SeasonalSale from "../components/SeasonalSale";
import BestSeller from "../components/BestSeller";
import Newsletter from "../components/Newsletter";
import LookBook from "../components/LookBook";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import InstagramSection from "../components/InstagramSection";

function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <ShopCategories />
      <NewArrival />
      <SeasonalSale />
      <BestSeller />
      <Newsletter />
      <LookBook />
      <Testimonial />
      <Blog />
      <InstagramSection />
      <Footer />
    </main>
  );
}

export default Home;
