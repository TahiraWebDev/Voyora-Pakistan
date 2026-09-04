import "./PackagesStyles1.css";

import package1 from "../assets/package1.jpg";
import package2 from "../assets/package2.jpg";
import package3 from "../assets/package3.jpg";
import package4 from "../assets/package4.jpg";
import package5 from "../assets/package5.jpg";
import package6 from "../assets/package6.jpg";

import PackagesData from "./PackagesData";

function PackageSection() {
  return (
    <section className="packages-section">
      <h2>Our Popular Tour Packages</h2>

      <p>
        Discover our carefully designed tour packages that combine breathtaking
        destinations, comfortable accommodation, and unforgettable adventures.
        Whether you're planning a family vacation, honeymoon, or an exciting
        trip with friends, we have the perfect package for every traveler.
      </p>

      <div className="package-grid">
        <PackagesData
          id="hunza"
          image={package1}
          title="Hunza Valley Tour"
          duration="5 Days / 4 Nights"
          price="Starting from PKR 45,000"
          description="Experience the breathtaking beauty of Hunza Valley, Attabad Lake, Baltit Fort, and Eagle's Nest while enjoying a comfortable and memorable journey."
        />

        <PackagesData
          id="skardu"
          image={package2}
          title="Skardu Adventure"
          duration="6 Days / 5 Nights"
          price="Starting from PKR 52,000"
          description="Explore Skardu's stunning lakes, Deosai National Park, Shangrila Resort, and breathtaking mountain landscapes with our premium tour package."
        />

        <PackagesData
          id="fairy-meadows"
          image={package3}
          title="Fairy Meadows Escape"
          duration="4 Days / 3 Nights"
          price="Starting from PKR 40,000"
          description="Enjoy spectacular views of Nanga Parbat, peaceful camping, exciting hiking trails, and unforgettable moments surrounded by nature."
        />

        <PackagesData
          id="swat"
          image={package4}
          title="Swat Valley Tour"
          duration="4 Days / 3 Nights"
          price="Starting from PKR 35,000"
          description="Visit the Switzerland of Pakistan and discover beautiful valleys, rivers, waterfalls, and rich local culture in one amazing trip."
        />

        <PackagesData
          id="neelum"
          image={package5}
          title="Neelum Valley Tour"
          duration="5 Days / 4 Nights"
          price="Starting from PKR 42,000"
          description="Explore lush green forests, crystal-clear rivers, charming villages, and breathtaking mountain views in the heart of Azad Kashmir."
        />

        <PackagesData
          id="naran-kaghan"
          image={package6}
          title="Naran Kaghan Tour"
          duration="5 Days / 4 Nights"
          price="Starting from PKR 38,000"
          description="Discover the beauty of Saif-ul-Malook Lake, Babusar Top, and the magnificent Kaghan Valley with a well-planned travel experience."
        />
      </div>
    </section>
  );
}

export default PackageSection;
