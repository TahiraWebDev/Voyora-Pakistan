import "./AboutStyles.css";

function AboutData(props) {
  return (
    <div className="about-card">
      <h3>{props.title}</h3>

      <p>{props.description}</p>
    </div>
  );
}

export default AboutData;
