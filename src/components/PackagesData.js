
import "./PackagesStyles1.css";
import { Link } from "react-router-dom";

function PackagesData(props) {
  return (
    <div className="package-card">
      <div className="package-image">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="package-content">
        <h3>{props.title}</h3>

        <div className="package-info">
          <p className="duration">{props.duration}</p>
          <p className="price">{props.price}</p>
        </div>

        <p className="description">{props.description}</p>
        <Link to={`/packages/${props.id}`} className="package-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PackagesData;
