import HomeSection from "../components/HomeSection";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/h1.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg={HomeImg}
        title="Explore The Hidden Beauty Of Pakistan"
        text="Discover breathtaking landscapes, unforgettable adventures, and cultural experiences with Voyora Pakistan."
        buttonText="Explore Tours"
        url="/"
        btnclass="show"
      />
      <HomeSection />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
