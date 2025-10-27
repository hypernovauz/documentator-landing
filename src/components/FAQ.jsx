import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "Is it free to use?", a: "Yes, personal accounts are free forever." },
  { q: "Can I cancel anytime?", a: "Absolutely! Cancel or downgrade anytime." },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit cards and PayPal.",
  },
  {
    q: "Is my data secure?",
    a: "Yes, we use industry-standard security measures to protect your data.",
  },
  {
    q: "Do you offer customer support?",
    a: "Yes, we offer 24/7 customer support via chat and email.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade your plan at any time from your account settings.",
  }
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqs.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            key={i}
            className="faq-item"
            onClick={() => setActive(active === i ? null : i)}
          >
            <div className="faq-item-header">
            <strong>{item.q}</strong>
            <span>{active === i ? "-" : "+"}</span>
            </div>
            {active === i && <p>{item.a}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
