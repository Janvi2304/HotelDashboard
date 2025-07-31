import React from "react";
import "../pages/ContactUs.css";
import contact from "../assets/tuli6.jpeg";

const ContactUs = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-heading">
        <img src={contact} alt="contact us image" />
        Contact Us
      </h2>
      <hr className="contactus-hr" />
      <div className="contact-wrapper">
        <div className="contact-form">
          <form>
            <div className="contact-para">
              <h1>Tuli International Hotel</h1>
              <p>
                Located in the heart of Nagpur, offers a perfect blend of
                luxury, comfort, and hospitality. Whether you're visiting for
                business or leisure, our centrally located property provides
                easy access to major landmarks, shopping areas, and transport
                hubs. At Tuli, we pride ourselves on delivering exceptional
                service, well-appointed rooms, and a warm, welcoming atmosphere.
                Reach out to us for bookings, inquiries, or assistance — our
                team is always here to help make your stay truly memorable.
              </p>
            </div>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-details">
          <h1>« Contact Information »</h1>
          <p>
            Residency Rd, beside Liberty Cinema, Liberty Chowk, <br />
            Sadar, Nagpur, Maharashtra 440001
          </p>
          <p> 9876543276</p>
          <p>hoteltuli@gmail.com</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.852673143915!2d79.07719827503527!3d21.158260580523628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1e52110e0ff%3A0x83c0c1f2e464cf56!2sHotel%20Tuli%20International%2CNagpur!5e0!3m2!1sen!2sin!4v1749042564775!5m2!1sen!2sin"
              width={520}
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
