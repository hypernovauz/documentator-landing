import React from "react";
import { motion } from "framer-motion";
import { AddIcon, SendIcon, SubscribeIcon, TemplateIcon } from "../assets/icons";

const steps = [
  { title: "Buy a subscription", icon: <SubscribeIcon />, number: "1" },
  { title: "Create your templates", icon: <TemplateIcon/>, number: "2" },
  { title: "Add your files", icon: <AddIcon />, number: "3" },
  { title: "Send to sign", icon: <SendIcon />, number: "4" },
];

const HowItWorks = () => (
  <section id="how" className="container">
    <h2>How It Works</h2>
    <div className="how-structure">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className={`how-step step-${step.number}`}

        >
          <span>{step.icon}</span>
          <p>{step.title}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
