import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DestinationsImg from "../assets/Destinationhero.png";
import Footer from "../components/Footer";
import Destination1 from "../components/Destination1";

function Destinstion() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={DestinationsImg}
        title="Discover Pakistan's Top Destinations"
        btnclass="hide"
      />
      <Destination1 />
      <Footer />
    </>
  );
}

export default Destinstion;
