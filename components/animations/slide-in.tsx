"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}: SlideInProps) {
  const directionMap = {
    left: { x: -50 },
    right: { x: 50 },
    up: { y: 50 },
    down: { y: -50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
