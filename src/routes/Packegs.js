import Hero from "../components/Hero";
import PackageSection from "../components/PackageSection";
import Navbar from "../components/Navbar";
import PackegsImg from "../assets/packaghero.png";
import Footer from "../components/Footer";

function Packegs() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={PackegsImg}
        title="Explore Our Tour Packages"
        text="Choose the perfect adventure for your next unforgettable journey across Pakistan."
        btnclass="hide"
      />
      <PackageSection />
      <Footer />
    </>
  );
}

export default Packegs;
