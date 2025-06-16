"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const dropdownVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  visible: {
    height: "250px", // adjust height as needed
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const data = ["home", "experience", "skills", "projects", "contact"];

const Mnavbar = () => {
  const [click, setClick] = useState(true);

  return (
    <div className="sm:hidden">
      <button
        className="fixed top-4 left-5 z-50 group cursor-pointer"
        onClick={() => setClick(!click)}
      >
        <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md">
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] origin-center transform transition-all duration-300 ${
              click ? "rotate-0" : "-rotate-45"
            }`}
          >
            <div
              className={`bg-white h-[2px] w-1/2 rounded origin-right transform transition-all duration-300 delay-75 ${
                click
                  ? "translate-y-0 rotate-0"
                  : "-translate-y-[1px] h-[1px] -rotate-90"
              }`}
            ></div>
            <div className="bg-white h-[1px] rounded"></div>
            <div
              className={`bg-white h-[2px] w-1/2 rounded self-end origin-left transform transition-all duration-300 delay-75 ${
                click
                  ? "translate-y-0 rotate-0"
                  : "translate-y-[1px] h-[1px] -rotate-90"
              }`}
            ></div>
          </div>
        </div>
      </button>
      <div className="fixed text-white text-xl  z-20 top-0 h-[70px] w-screen">
        <div className="absolute w-full h-full bg-black/40 backdrop-blur-2xl z-10"></div>
        <AnimatePresence>
          {!click && (
            <motion.div
              className="absolute top-full w-full bg-black/40 overflow-hidden backdrop-blur-2xl flex flex-col gap-6 pl-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              style={{ zIndex: 99999 }}
            >
              {data.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`#${item}`}
                    className="hover:text-slate-300 uppercase"
                  >
                    {item}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Mnavbar;
