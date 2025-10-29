import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex-between">
        <a href="#hero" className="logo">
          <img src={Logo} alt="logo" />
        </a>

        {/* Desktop links */}
        <div className="links">
          <a href="#features">Features</a>
          <a href="#how">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* Sign Up button always visible */}
        <div className="navbar-right">
          <button className="btn">Sign Up</button>

          {/* Burger icon (mobile only) */}
          <div
            className="burger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#features" onClick={() => setOpen(false)}>
              Features
            </a>
            <a href="#how" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#pricing" onClick={() => setOpen(false)}>
              Pricing
            </a>
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
