import { useParams, Link } from "react-router-dom";
import "./ExperienceDetailsStyle.css";

const experiencesDatabase = {
  camping: {
    title: "Camping Under the Stars",
    image: require("../assets/experience1.jpg"),
    description:
      "Spend unforgettable nights surrounded by majestic mountains, fresh air, and a sky full of stars while enjoying a peaceful camping experience.",
    overview:
      "Experience the peaceful beauty of Pakistan's mountains with a memorable night under the stars. Enjoy nature, fresh mountain air, a warm bonfire, and breathtaking views.",
  },

  hiking: {
    title: "Mountain Hiking",
    image: require("../assets/texperience2.jpg"),
    description:
      "Explore scenic hiking trails through breathtaking valleys and enjoy spectacular views of Pakistan's beautiful northern landscapes.",
    overview:
      "Discover beautiful mountain trails and experience the natural beauty of Pakistan while enjoying an exciting and refreshing hiking adventure.",
  },

  "jeep-safari": {
    title: "Jeep Safari Adventure",
    image: require("../assets/experience3.jpg"),
    description:
      "Experience exciting off-road journeys across rugged mountain roads and discover hidden gems that few travelers get to see.",
    overview:
      "Enjoy an exciting off-road adventure through rugged mountain roads, valleys, and remote areas while discovering hidden landscapes.",
  },

  bonfire: {
    title: "Bonfire Evenings",
    image: require("../assets/texperience4.jpg"),
    description:
      "Relax around a warm bonfire with delicious food, music, and unforgettable conversations beneath the clear mountain sky.",
    overview:
      "Spend a relaxing evening around a warm bonfire surrounded by mountains, delicious food, music, and great company.",
  },

  boating: {
    title: "Boating on Crystal Lakes",
    image: require("../assets/experience5.jpg"),
    description:
      "Enjoy peaceful boat rides across Pakistan's stunning lakes while taking in the surrounding mountains and breathtaking scenery.",
    overview:
      "Enjoy a peaceful boating experience on Pakistan's beautiful crystal-clear lakes while surrounded by breathtaking mountain scenery.",
  },

  photography: {
    title: "Photography Tours",
    image: require("../assets/experience6.jpg"),
    description:
      "Capture unforgettable moments with guided photography tours featuring breathtaking landscapes, wildlife, and cultural attractions.",
    overview:
      "Capture the beauty of Pakistan through guided photography tours featuring spectacular landscapes, wildlife, cultural sites, and local life.",
  },
};

function ExperienceDetails() {
  const { id } = useParams();

  const experience = experiencesDatabase[id];

  if (!experience) {
    return (
      <div className="experience-not-found">
        <h2>Experience Not Found</h2>
        <p>Sorry, the requested experience does not exist.</p>
        <Link to="/experiences">Back to Experiences</Link>
      </div>
    );
  }

  return (
    <section className="experience-details">
      <div className="experience-details-container">
        <img
          src={experience.image}
          alt={experience.title}
          className="experience-details-image"
        />

        <h1>{experience.title}</h1>

        <div className="experience-details-section">
          <h2>Experience Overview</h2>
          <p>{experience.overview}</p>
        </div>

        <div className="experience-details-section">
          <h2>About This Experience</h2>
          <p>{experience.description}</p>
        </div>

        <Link to="/booking" className="experience-book-btn">
          Book Now
        </Link>
      </div>
    </section>
  );
}

export default ExperienceDetails;
