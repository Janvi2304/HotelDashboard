import React from "react";
import "./Footer.css";
import icon from "../src/assets/hotel tuli.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

import { BiLogoTelegram } from "react-icons/bi";

import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandWhatsappFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main-footer">
        <div className="row">
          <div className="col">
            <div className="footer-class">
              <img src={icon} alt="Hotel Tuli Logo" className="hotel-icon" />
              Tuli International
            </div>
            <p>
              A harmonious blend of regal heritage and contemporary elegance,
              our centrally located haven in Nagpur invites you to experience
              opulence like never before.
            </p>
          </div>
          <div className="col">
            <h4>QUICK LINK</h4>
            <hr />
            <div className="footer-links">
              <div className="row2">
                <div className="col2">
                  <ul>
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/menu">Menu</a>
                    </li>
                  </ul>
                </div>
                <div className="col2">
                  <ul>
                    <li>
                      <a href="/login">Rooms</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/login">Location</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h4>CONTACT US</h4>
            <hr />
            <div className="contact-info">
              <ul>
                <li>
                  <FaLocationDot />
                  <span className="location-span">
                    Residency Rd, beside Liberty Cinema, Liberty
                  </span>
                  <p className="location-para">
                    Chowk, Sadar, Nagpur, Maharashtra 440001
                  </p>
                </li>
                <li>
                  <FaPhone />
                  <span className="phone-span">9876543276</span>
                </li>
                <li>
                  <MdEmail />
                  <span className="email-span">hoteltuli@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <a href="https://telegram.org/">
                <BiLogoTelegram size="30px" color="white" />
              </a>
              <a href="https://x.com/?lang=en">
                <RiTwitterXLine size="30px" color="white" />
              </a>
              <a href="https://www.facebook.com/">
                <RiFacebookFill size="30px" color="white" />
              </a>
              <a href="https://www.instagram.com/accounts/login/?hl=en">
                <RiInstagramFill size="30px" color="white" />
              </a>
              <a href="https://web.whatsapp.com/">
                <TbBrandWhatsappFilled size="30px" color="white" />
              </a>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>
            © 2025 | All rights reserved by <b>Janvi Nakhate</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
