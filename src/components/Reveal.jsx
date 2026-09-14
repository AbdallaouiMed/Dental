import { motion, useReducedMotion } from "motion/react";

// Shared scroll-reveal wrapper for grid items — spring-based per the Apple
// motion skill (never a fixed-duration CSS keyframe), reduced-motion aware.
export default function Reveal({ delay = 0, bounce = 0, className = "", children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: bounce ? 0.92 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", bounce, duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
