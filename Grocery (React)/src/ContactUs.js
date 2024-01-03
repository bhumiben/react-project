import React, { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import "./ContactUs.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);
  };

  return (
    <div className="contact-page">
      <h1 style={{ color: "#FF5722" }}>Contact Us</h1>

      {/* Introduction */}
      <div className="introduction">
        <p>Welcome to our MiniMart Grocery! We'd love to hear from you.</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Location */}
      <div
        className="location"
        style={{ backgroundColor: "#FCE4EC", color: "#333" }}
      >
        <h2>Visit Us</h2>
        <p>Address: 965 York Mill, Ontario</p>
        <p>Open hours: Mon-Sat, 10:00 AM - 10:00 PM</p>
        {/* Use a button to open the Google Maps */}
        <button
          className="get-directions-button"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d-71.1234567!3d42.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzU0LjIiTiA3McKwMjAnMTUuOCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            )
          }
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Get Directions
        </button>
      </div>

      {/* Google Maps */}
      <div className="google-map" id="google-map">
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d-71.1234567!3d42.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzU0LjIiTiA3McKwMjAnMTUuOCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="400"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Additional Information */}
      <div
        className="additional-info"
        style={{ backgroundColor: "#FFD700", color: "#333" }}
      >
        <h2>Additional Information</h2>
        <p>For reservations, call: (964) 456-7890</p>
        <p>Email: minimart@gmail.com</p>
        <button
          className="contact-button"
          style={{ backgroundColor: "#FF5722", color: "white" }}
        >
          Contact Us
        </button>
      </div>

      {/* Special Offers */}
      <div
        className="special-offers"
        style={{ backgroundColor: "#64B5F6", color: "white" }}
      >
        <h2>Special Offers</h2>
        <p>Enjoy 10% off on your first visit!</p>
        <p>Join our loyalty program for exclusive discounts.</p>
        <button
          className="offers-button"
          style={{ backgroundColor: "#1976D2", color: "white" }}
        >
          Learn More
        </button>
      </div>

      {/* Customer Reviews */}
      <div
        className="customer-reviews"
        style={{ backgroundColor: "#C8E6C9", color: "#333" }}
      >
        <h2>Customer Reviews</h2>
        <p>"The products are really fresh and good! Will visit again."</p>
        <p>"Affordable and reliable!!!"</p>
        <button
          className="reviews-button"
          style={{ backgroundColor: "#4CAF50", color: "white" }}
        >
          Read More
        </button>
      </div>

      {/* Events and Entertainment */}
      <div
        className="events"
        style={{ backgroundColor: "silver", color: "#333" }}
      >
        <h2>Upcoming Events</h2>
        <p>
          We provide some pre-cooked different varities of food on special days
        </p>
        <p>For you to join the event next month - reserve your spot now.</p>
        <button
          className="events-button"
          style={{ backgroundColor: "red", color: "white" }}
        >
          See All Events
        </button>
      </div>

      {/* Newsletter Subscription */}
      <div
        className="newsletter"
        style={{ backgroundColor: "violet", color: "#333" }}
      >
        <h2>Membership</h2>
        <p>
          Join as our member at minimart and get additional exclusive offers!!!
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button
          className="subscribe-button"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Subscribe
        </button>
      </div>

      {/* Contact Details */}
      <div
        className="contact-details"
        style={{ backgroundColor: "yellow", color: "#333" }}
      >
        <h2>Contact Details</h2>
        <p>Phone: (964) 456-7890, (123) 456-7890</p>
        <p>Email: minimart@gmail.com</p>
        <p>Follow us on social media for updates and promotions!</p>
        <button
          className="follow-button"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Follow Us
        </button>
      </div>

      {/* Social Media Links */}
      <div className="social-icons">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={32} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={32} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
