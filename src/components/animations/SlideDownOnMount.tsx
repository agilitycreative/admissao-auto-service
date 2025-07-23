"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SlideDownOnMountProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

const SlideDownOnMount: React.FC<SlideDownOnMountProps> = ({
  children,
  duration = 0.6,
  delay = 0,
  className = "w-full flex items-center justify-center",
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Espera o componente montar no client
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -100 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideDownOnMount;
