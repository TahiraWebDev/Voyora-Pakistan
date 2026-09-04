import destination1 from "../assets/populardestination1.jpg";
import destination2 from "../assets/populardestination2.jpg";
import destination3 from "../assets/featuretp1.jpg";
import destination4 from "../assets/featuretp2.jpg";
import HomeData from "./HomeData";
import "./HomeStyles.css";

const HomeSection = () => {
  return (
    <>
      <section className="choose">
        <h1>Why Choose Voyora Pakistan?</h1>
        <p>
          Discover Pakistan's breathtaking landscapes with carefully crafted
          tours, trusted guides, and unforgettable travel experiences. At Voyora
          Pakistan, every journey is designed to be safe, comfortable, and full
          of lasting memories.
        </p>

        <HomeData
          className="first-des"
          heading="Popular Destinations"
          text="Discover Pakistan's most breathtaking destinations, from towering mountains and crystal-clear lakes to lush valleys and historic landmarks. Whether you're looking for adventure, relaxation, or cultural exploration, our handpicked destinations promise unforgettable memories."
          img1={destination1}
          img2={destination2}
        />

        <HomeData
          className="first-des-reverse"
          heading="Featured Tour Packages"
          text="Explore our carefully crafted tour packages designed for every kind of traveler. From family vacations and romantic honeymoons to thrilling adventures and group tours, each package includes comfortable travel, memorable experiences, and the opportunity to discover Pakistan's natural beauty with ease."
          img1={destination3}
          img2={destination4}
        />
      </section>

      <section className="HomeData"></section>
    </>
  );
};

export default HomeSection;
