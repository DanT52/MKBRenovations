import Hero from '../components/Hero';
import Services from '../components/Services';
import ImageCarousel from '../components/ImageCarousel';
import Reviews from '../components/ReviewsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ImageCarousel />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
