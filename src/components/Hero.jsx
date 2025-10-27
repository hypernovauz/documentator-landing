import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero container" id="hero" >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Everything You Need To Agree
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ marginTop: 15, color: "#555" }}
      >
        Send, Sign, and Manage All Your Agreements for Free.
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ marginTop: 30 }}
      >
        <button className="btn">Get in touch</button>
        <button className="btn-outline">Get started</button>
      </motion.div>
    </section>
  );
};

export default Hero;
