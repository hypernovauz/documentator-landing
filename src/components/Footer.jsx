import React from "react";
import Logo from "../assets/images/logo.png";
const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-top-left">
        <img src={Logo} alt="" />
        <p>
          Doxium is your trusted partner for secure and efficient document management solutions.
        </p>
      </div>
      <div className="footer-top-right">
        <h3>Support</h3>
        <div>
          <a href="mailto:support@doxium.com">Help Center</a>
          <a href="mailto:support@doxium.com">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
      <div className="footer-top-right">
        <h3>Get in touch</h3>
        <div>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Doxium. All rights reserved.</p>
      <p>Created by <a href="https://hypernova.uz">HYPERNOVA</a></p>
    </div>
  </footer>
);

export default Footer;
