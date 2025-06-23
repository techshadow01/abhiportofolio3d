"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { usePreloader } from "./Index";

const steps = [
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];

export default function Index() {
  const { loadingPercent } = usePreloader(); // Removed isLoading since unused
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === steps.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);
  }, [index]);

  const percent = (loadingPercent - (loadingPercent % 5)).toFixed(0);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="pr-[30px] font-bold"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            {percent} %
          </motion.p>
          <div className="fixed top-0 h-[20px] w-screen rounded-r-2xl">
            <div
              className={`absolute h-full bg-white rounded-r-2xl duration-700 ${
                percent === "100" ? "opacity-0" : ""
              }`}
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </>
      )}
    </motion.div>
  );
}
