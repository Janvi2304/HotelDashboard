import React from "react";
import "../pages/Location.css";
import { FaLocationDot } from "react-icons/fa6";
const Location = () => {
  return (
    <div className="location-container">
      <h2 className="location-heading">Location</h2>
      <div className="location-details">
        <form>
          <p>
            <FaLocationDot />
            <span className="location-add">
              Residency Rd, beside Liberty Cinema, Liberty Chowk, Sadar, Nagpur,
              Maharashtra 440001
            </span>
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.852673143915!2d79.07719827503527!3d21.158260580523628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1e52110e0ff%3A0x83c0c1f2e464cf56!2sHotel%20Tuli%20International%2CNagpur!5e0!3m2!1sen!2sin!4v1749042564775!5m2!1sen!2sin"
              width={1540}
              height={550}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Location;
