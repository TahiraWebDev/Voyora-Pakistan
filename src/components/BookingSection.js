import { useState } from "react";
import "./BookingStyle.css";

function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
        <h1>Book Your Trip</h1>
        <p>Plan your unforgettable journey with Voyora Pakistan.</p>

        {submitted ? (
          <div className="booking-success">
            <h2>Booking Request Submitted! ✅</h2>
            <p>
              Thank you for choosing Voyora Pakistan. We will contact you
              shortly to confirm your trip.
            </p>

            <button className="booking-btn" onClick={() => setSubmitted(false)}>
              Make Another Booking
            </button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Select Destination</label>
              <select required>
                <option value="">Choose a destination</option>
                <option value="hunza">Hunza Valley</option>
                <option value="skardu">Skardu</option>
                <option value="fairy-meadows">Fairy Meadows</option>
                <option value="swat">Swat Valley</option>
                <option value="neelum">Neelum Valley</option>
                <option value="naran-kaghan">Naran Kaghan</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Travel Date</label>
                <input type="date" required />
              </div>

              <div className="form-group">
                <label>Number of Travelers</label>
                <input type="number" min="1" placeholder="2" required />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Any special request?"></textarea>
            </div>

            <button type="submit" className="booking-btn">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default BookingSection;
