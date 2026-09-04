import "./ExperiencesStyles.css";
import { Link } from "react-router-dom";

function ExperiencesData(props) {
  return (
    <div className="experience-card">
      <div className="experience-image">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="experience-content">
        <h3>{props.title}</h3>

        <p className="experience-description">{props.description}</p>

        <Link to={`/experiences/${props.id}`} className="experience-btn">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ExperiencesData;
