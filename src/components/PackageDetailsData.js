import { useParams, Link } from "react-router-dom";
import packagesDatabase from "../data/packagesDatabase";
import "./PackageDetailsStyle.css";

function PackageDetailsData() {
  const { id } = useParams();

  const packageData = packagesDatabase.find((item) => item.id === id);

  if (!packageData) {
    return (
      <div className="package-not-found">
        <h2>Package Not Found</h2>
        <p>Sorry, the requested package does not exist.</p>
      </div>
    );
  }

  return (
    <section className="package-details">
      <div className="package-details-container">
        <img
          src={packageData.image}
          alt={packageData.title}
          className="package-image"
        />

        <h1>{packageData.title}</h1>

        <div className="package-meta">
          <span>{packageData.duration}</span>
          <span>{packageData.price}</span>
        </div>

        <div className="package-section">
          <h2>Tour Overview</h2>
          <p>{packageData.overview}</p>
        </div>

        <div className="package-section">
          <h2>Tour Itinerary</h2>
          <ul>
            {packageData.itinerary?.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
        </div>

        <div className="package-lists">
          <div className="included">
            <h2>What's Included</h2>
            <ul>
              {packageData.included?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="excluded">
            <h2>What's Not Included</h2>
            <ul>
              {packageData.excluded?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link to="/booking" className="book-btn">
          Book Now
        </Link>
      </div>
    </section>
  );
}

export default PackageDetailsData;
