import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      id="/"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex-between">
        <a href="#hero" className="logo">
          <img src={Logo} alt="" />
        </a>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#how">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="btn">Sign Up</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
