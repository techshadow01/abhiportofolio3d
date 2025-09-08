"use client";

import { motion, useAnimation, useInView } from "framer-motion";

import { cn } from "../../utils/clsx";
import React, { ReactNode, useEffect, useRef } from "react";

interface BlurIntProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
export const BlurIn = ({
  children,
  className,
  variant,
  delay = 0,
  duration = 1,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={combinedVariants}
      className={cn(
        className
        // "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      )}
    >
      {children}
    </motion.h1>
  );
};

interface BoxRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}
export const BoxReveal = ({
  children,
  className,
  width = "fit-content",
  boxColor,
  duration,
  delay,
  once = true,
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: duration ? duration : 0.5,
          ease: "easeIn",
          delay,
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor ? boxColor : "#ffffff00",
        }}
      />
    </div>
  );
};

export const WidthSide = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{
        duration: duration,
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Sleath = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  x = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  x?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: duration,
        ease: "linear",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

