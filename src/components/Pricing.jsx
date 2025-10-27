import React from "react";
import { motion } from "framer-motion";

const plans = [
  { name: "Permanent", price: "$1000", features: ["1 user", "Basic signing"] },
  { name: "Yearly", price: "$250", features: ["10 users", "Advanced tools"] },
  {
    name: "Monthly",
    price: "$25",
    features: ["Unlimited", "AI Drafting", "API Access"],
  },
];

const Pricing = () => (
  <section id="pricing" className="container">
    <h2>Pricing</h2>
    <div className="plan-grid">
      {plans.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="plan-card"
        >
          <h3>{p.name}</h3>
          <p>
            Grow your business with us. Explore our traffic management panel and
            try it free for 30 days.
          </p>
          <div className="plan-card-price">{p.price}</div>
          <ul>
            {p.features.map((f, i2) => (
              <li key={i2}>{f}</li>
            ))}
          </ul>
          <button className="btn-outline">Start free trial</button>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Pricing;
