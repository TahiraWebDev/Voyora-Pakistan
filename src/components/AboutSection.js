import "./AboutStyles.css";
import aboutImg from "../assets/lakecard.jpg";

import AboutData from "./AboutData";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-heading">
        <h2>Our Story</h2>
        <p>
          Voyora Pakistan was created with a passion for showcasing the
          breathtaking beauty, rich culture, and unforgettable adventures that
          Pakistan has to offer. Our mission is to make every journey safe,
          comfortable, and memorable by providing carefully planned travel
          experiences for families, friends, couples, and adventure seekers.
        </p>
      </div>

      <div className="about-story">
        <div className="about-text">
          <h3>Travel Beyond Expectations</h3>
          <p>
            We believe that traveling is more than simply visiting new places.
            It is about discovering hidden gems, connecting with local cultures,
            creating lifelong memories, and experiencing the true spirit of
            Pakistan. From the majestic mountains of Hunza and Skardu to the
            peaceful lakes, green valleys, and historic landmarks, every tour is
            thoughtfully designed to give our travelers an unforgettable
            experience.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="About Voyora Pakistan" />
        </div>
      </div>

      <div className="about-cards">
        <AboutData
          title="Our Mission"
          description="To provide exceptional travel experiences by offering safe, comfortable, and well-planned tours that allow travelers to explore the incredible beauty and culture of Pakistan with confidence."
        />

        <AboutData
          title="Our Vision"
          description="To become one of Pakistan's most trusted travel companies, inspiring people from around the world to discover the country's breathtaking landscapes, heritage, and warm hospitality."
        />

        <AboutData
          title="Our Values"
          description="We are committed to honesty, customer satisfaction, quality service, sustainable tourism, and creating unforgettable memories for every traveler who chooses Voyora Pakistan."
        />
      </div>
    </section>
  );
}

export default AboutSection;
