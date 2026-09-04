import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/site1.jpg";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="About Voyora Pakistan"
        text="Discover our passion for showcasing the breathtaking beauty and rich culture of Pakistan through unforgettable travel experiences."
        btnclass="hide"
      />
      <AboutSection />
      <Footer />
    </>
  );
}

export default About;
