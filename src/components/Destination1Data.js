import { Component } from "react";
import "./Destination1Styles.css";

class Destination1Data extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="text-container">
          <h2>{this.props.dheading}</h2>
          <p>{this.props.dtext}</p>
        </div>

        <div className="image">
          <img alt="Hunza Valley" src={this.props.img1} />
          <img alt="Attabad Lake" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default Destination1Data;
