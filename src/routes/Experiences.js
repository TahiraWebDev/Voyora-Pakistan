import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ExperiencesImg from "../assets/experiencehero.png";
import Footer from "../components/Footer";
import ExperienceSection from "../components/ExperienceSection";

function Experiences() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={ExperiencesImg}
        title=" Create Unforgettable Travel Experiences"
        text="From thrilling adventures to peaceful escapes, discover moments that stay with you forever."
        btnclass="hide"
      />
      <ExperienceSection />
      <Footer />
    </>
  );
}

export default Experiences;
