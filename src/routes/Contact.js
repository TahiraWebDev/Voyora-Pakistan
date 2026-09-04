import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/site2.png";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={ContactImg}
        title="Contact Us"
        text="We'd love to help you plan your next adventure across Pakistan."
        btnclass="hide"
      />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Contact;
