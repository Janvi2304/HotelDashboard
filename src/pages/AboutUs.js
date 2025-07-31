import React from "react";
import "../pages/AboutUs.css";
import aboutImg from "../assets/hotel tuli.jpeg";

const AboutUs = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImg} alt="Hotel Tuli" />
        </div>
        <div className="about-text">
          <div className="about-title">
            <h2>About Us</h2>
            <hr className="aboutus-hr" />
          </div>
          <p>
            Welcome to <strong>Tuli International Hotel</strong>, where elegance
            meets tradition in the heart of Nagpur. With a legacy of world-class
            hospitality, our hotel is designed to offer both luxury and comfort
            to travelers seeking an unforgettable stay.
          </p>
          <p>
            Conveniently located near key landmarks and business hubs, our
            property provides guests with well-appointed rooms, fine dining
            experiences, modern amenities, and personalized service. Whether you
            are here for business, leisure, or celebration, Hotel Tuli is your
            perfect destination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
