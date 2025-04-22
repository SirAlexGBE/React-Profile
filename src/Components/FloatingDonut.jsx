import React from "react";
import {motion} from "framer-motion";
const FloatingDonut = ({size, color, duration, style}) => {
  return (
    <motion.div
      initial={{y: 0, x: 0, rotate: 0, scale: 1}}
      animate={{
        // Inside animate prop:
        y: Array.from({length: 5}, () => Math.random() * 100 - 50),
        x: Array.from({length: 5}, () => Math.random() * 100 - 50),
        z: [0, -100, 50, -80, 0],
        rotate: [0, 360],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 13, // Faster cycle
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        borderRadius: "50%",
        background: `radial-gradient(circle, transparent 40%, ${color} 60%)`,
        filter: "blur(1px)",
        opacity: 0.2,
        pointerEvents: "none",
        ...style,
        width: size,
        height: size,
      }}
    />
  );
};
export default FloatingDonut;
