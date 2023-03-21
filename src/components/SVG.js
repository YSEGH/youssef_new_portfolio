import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SVG({ index, icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "scale(1)" : "scale(0)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${
          index * 0.15
        }s`,
      }}
    >
      {icon}
    </motion.div>
  );
}
