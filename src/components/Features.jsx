import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaFileSignature, FaShieldAlt } from "react-icons/fa";
import Partner1 from "../assets/images/partner1.png";
import Partner2 from "../assets/images/partner2.png";
import Partner3 from "../assets/images/partner3.png";
import Partner4 from "../assets/images/partner4.png";
const features = [
  { title: "View solutions" },
  {
    title: "AI-Powered Analysis",
  },
  {
    title: "Electronic Signatures",
  },
  {
    title: "Automated Workflows",
  },
  {
    title: "Secure Storage",
  },
  {
    title: "Real-Time Collaboration",
  },
];
const clients = [
  {
    name: "Hawke consulting",
    logo: Partner1,
  },
  {
    name: "Hypernova",
    logo: Partner2,
  },
  {
    name: "Sun ELD",
    logo: Partner3,
  },
  {
    name: "Udevs",
    logo: Partner4,
  }
];

const Features = () => {
  return (
    <section id="features" className="container">
      <h2>AI-Powered Agreement Management</h2>
      <p>
        Analyze agreements with AI, sign documents electronically, and automate
        workflows with the Intelligent Agreement Management (IAM) platform.
      </p>

      <div className="feature-grid">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h4>{f.title}</h4>
          </motion.div>
        ))}
      </div>
      <h2>Our clients</h2>
      <p>
        Trusted by leading companies worldwide for efficient agreement
        management.
      </p>
      <div className="client-grid">
        {clients.map((c, i) => (
          <motion.div
          key={i}
            className="client-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={c.logo} alt="partner" />
            <h4>{c.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
