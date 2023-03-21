import React from "react";
import { motion } from "framer-motion";
import SVG from "./SVG";

export default function AboutSVG({ icons }) {
  return (
    <motion.div className="component__about-icon">
      {icons.map((icon, i) => (
        <SVG key={i} index={i} icon={icon} />
      ))}
    </motion.div>
  );
}
