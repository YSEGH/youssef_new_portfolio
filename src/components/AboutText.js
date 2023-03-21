import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutText({ text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="component__about-text"
    >
      <h4>{text.title}</h4>
      <p>{text.text}</p>
    </motion.div>
  );
}
