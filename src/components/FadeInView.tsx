"use client";
import React from "react";
import { motion } from "framer-motion";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInView: React.FC<FadeInViewProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = "w-full flex items-center justify-center"
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;