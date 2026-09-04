import "./ContactStyles.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-heading">
        <h2>Get in Touch</h2>
        <p>
          Have questions or ready to plan your next adventure? Our team is here
          to help you choose the perfect tour package and make your journey
          across Pakistan unforgettable.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>

          <form>
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="tel" placeholder="Phone Number" />

            <input type="text" placeholder="Subject" required />

            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-box">
            <h4>
              <i className="fa-solid fa-location-dot"></i>
              Address
            </h4>
            <p>Islamabad, Pakistan</p>
          </div>

          <div className="info-box">
            <h4>
              <i class="fa-solid fa-phone"></i>
              Phone
            </h4>
            <p>+92 300 1234567</p>
          </div>

          <div className="info-box">
            <h4>
              <i class="fa-solid fa-envelope"></i>
              Email
            </h4>
            <p>info@voyorapakistan.com</p>
          </div>

          <div className="info-box">
            <h4>
              <i class="fa-solid fa-business-time"></i>
              Office Hours
            </h4>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-section">
        <h3>Find Us</h3>

        <iframe
          title="Voyora Pakistan Location"
          src="https://www.google.com/maps?q=Islamabad,Pakistan&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactSection;
