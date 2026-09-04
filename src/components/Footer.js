import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>🌍 Voyora Pakistan</h1>
          <p>
            Discover the beauty of Pakistan through unforgettable journeys,
            breathtaking destinations, and carefully crafted travel experiences.
            At Voyora Pakistan, we're dedicated to making every adventure
            memorable, comfortable, and inspiring.
          </p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-youtube-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Quick Links </h4>
          <a href="/">Home</a>
          <a href="/">Destinations</a>
          <a href="/">Packages</a>
          <a href="/">Experiences </a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        <div>
          <h4> Contact Us </h4>
          <a href="/">Email </a>
          <a href="/">Phone</a>
          <a href="/">Address </a>
        </div>

        <div>
          <h4>Popular Destinations</h4>
          <a href="/"> Hunza Valley</a>
          <a href="/">Skardu</a>
          <a href="/">Fairy Meadows</a>
          <a href="/"> Naran Kaghan</a>
          <a href="/"> Swat Valley</a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2026 Voyora Pakistan. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
