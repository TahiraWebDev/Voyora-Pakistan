import "./TripStyles.css";
import TripData from "./TripData";
import Tripe1 from "../assets/mountaincard.jpg";
import Tripe2 from "../assets/culturecard.jpg";
import Tripe3 from "../assets/lakecard.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Unforgettable Travel Experiences</h1>
      <p>
        Every journey with Voyora Pakistan is more than just a trip—it's an
        unforgettable experience. From thrilling adventures and breathtaking
        landscapes to rich local culture and peaceful escapes, we create moments
        that you'll cherish for a lifetime.
      </p>
      <div className="tripcard">
        <TripData
          img={Tripe1}
          heading="Mountain Adventures"
          text="Hike scenic trails, explore majestic peaks, and experience the thrill of Pakistan's breathtaking mountain landscapes."
        />

        <TripData
          img={Tripe2}
          heading="Culture & Camping"
          text="Experience local traditions, delicious cuisine, cozy campfires, and unforgettable nights under the stars."
        />

        <TripData
          img={Tripe3}
          heading="Lakes & Valleys"
          text="Relax beside crystal-clear lakes and discover peaceful valleys surrounded by nature's most spectacular views.
        "
        />
      </div>
    </div>
  );
}
export default Trip;
