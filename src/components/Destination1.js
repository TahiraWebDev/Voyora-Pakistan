import "./Destination1Styles.css";
import destination1 from "../assets/dpn1.jpg";
import destination2 from "../assets/dpn2.jpg";
import destination3 from "../assets/tdv1.jpg";
import destination4 from "../assets/tdv2.jpg";
import destination5 from "../assets/btv1.jpg";
import destination6 from "../assets/btv2.jpg";
import destination7 from "../assets/rep1.jpg";
import destination8 from "../assets/rep2.jpg";

import Destination1Data from "./Destination1Data";

function Destination1() {
  return (
    <>
      <Destination1Data
        className="destination-container"
        dheading="Discover Pakistan's Natural Wonders"
        dtext="Pakistan is blessed with breathtaking natural beauty that attracts travelers from around the world. From the towering peaks of the Karakoram and Himalayan ranges to the crystal-clear lakes of Hunza and Skardu, every region offers something unique. Visitors can experience peaceful valleys, lush green meadows, flowing rivers, and rich cultural heritage all in one journey. Whether you enjoy hiking, photography, sightseeing, or simply relaxing in nature, Pakistan provides unforgettable experiences that create memories to last a lifetime."
        img1={destination2}
        img2={destination3}
      />
      <Destination1Data
        className="destination-container reverse"
        dheading="Top Destinations to Visit"
        dtext="Discover Pakistan's most popular travel destinations, carefully selected to give you the perfect blend of adventure, culture, and natural beauty. Explore the stunning Attabad Lake, the scenic valleys of Hunza, the breathtaking landscapes of Fairy Meadows, the peaceful plains of Deosai National Park, and the snow-covered mountains of Skardu. Every destination offers unique attractions, exciting outdoor activities, delicious local cuisine, and incredible opportunities to capture unforgettable travel moments."
        img1={destination3}
        img2={destination4}
      />

      <Destination1Data
        className="destination-container"
        dheading="Best Time to Visit"
        dtext="Pakistan is a year-round travel destination, with every season offering something special. Spring fills the valleys with colorful blossoms and pleasant weather, making it ideal for sightseeing. Summer is perfect for exploring the cool northern mountains and lakes, while autumn transforms forests and valleys into stunning shades of gold and orange. During winter, many northern areas become magical snowy landscapes, providing unforgettable experiences for travelers who love winter adventures and breathtaking mountain scenery."
        img1={destination5}
        img2={destination6}
      />

      <Destination1Data
        className="destination-container reverse"
        dheading="Ready to Explore Pakistan?"
        dtext="Your next unforgettable journey begins with Voyora Pakistan. Whether you're planning a family vacation, a honeymoon, an adventure with friends, or a solo escape into nature, our carefully designed travel experiences ensure comfort, safety, and lasting memories. Let our experienced team help you discover Pakistan's hidden gems, breathtaking landscapes, and rich cultural heritage while creating moments that you'll treasure for years to come."
        img1={destination7}
        img2={destination8}
      />
    </>
  );
}

export default Destination1;
