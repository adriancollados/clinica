"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative w-full h-2">
      <motion.div
        className="absolute inset-0 h-1 bg-primary origin-left"
        style={{ scaleX }}
      />
      <div className="absolute inset-0 h-1 bg-primary/20" />
    </div>
  );
}
