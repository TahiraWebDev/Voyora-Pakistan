import "./ExperiencesStyles.css";

import experience1 from "../assets/experience1.jpg";
import texperience2 from "../assets/texperience2.jpg";
import experience3 from "../assets/experience3.jpg";
import texperience4 from "../assets/texperience4.jpg";
import experience5 from "../assets/experience5.jpg";
import experience6 from "../assets/experience6.jpg";

import ExperiencesData from "./ExperiencesData";

function ExperienceSection() {
  return (
    <section className="experiences-section">
      <h2>Unforgettable Travel Experiences</h2>

      <p>
        Every journey is more than just visiting a destination—it's about
        creating unforgettable memories. From thrilling mountain adventures to
        peaceful lakeside escapes, our carefully planned experiences let you
        discover the true beauty, culture, and excitement of Pakistan.
      </p>

      <div className="experience-grid">
        <ExperiencesData
          id="camping"
          image={experience1}
          title="Camping Under the Stars"
          description="Spend unforgettable nights surrounded by majestic mountains, fresh air, and a sky full of stars while enjoying a peaceful camping experience."
        />

        <ExperiencesData
          id="hiking"
          image={texperience2}
          title="Mountain Hiking"
          description="Explore scenic hiking trails through breathtaking valleys and enjoy spectacular views of Pakistan's beautiful northern landscapes."
        />

        <ExperiencesData
          id="jeep-safari"
          image={experience3}
          title="Jeep Safari Adventure"
          description="Experience exciting off-road journeys across rugged mountain roads and discover hidden gems that few travelers get to see."
        />

        <ExperiencesData
          id="bonfire"
          image={texperience4}
          title="Bonfire Evenings"
          description="Relax around a warm bonfire with delicious food, music, and unforgettable conversations beneath the clear mountain sky."
        />

        <ExperiencesData
          id="boating"
          image={experience5}
          title="Boating on Crystal Lakes"
          description="Enjoy peaceful boat rides across Pakistan's stunning lakes while taking in the surrounding mountains and breathtaking scenery."
        />

        <ExperiencesData
          id="photography"
          image={experience6}
          title="Photography Tours"
          description="Capture unforgettable moments with guided photography tours featuring breathtaking landscapes, wildlife, and cultural attractions."
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
