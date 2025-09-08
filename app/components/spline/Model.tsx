"use client";
import React from "react";
import Image from "next/image";
import Robot from "../../assets/robot.png";
import Spline from "@splinetool/react-spline";

const Model = () => {
  return (
    <div className="relative overflow-hidden w-full aspect-square ">
      <Spline
        className="absolute w-full  aspect-square left-[20%] max-sm:left-4 -top-[4%] max-sm:top-0 max-sm:scale-[1.90] max-sm:hidden"
        scene="https://prod.spline.design/tr1jyx882bfTUyLC/scene.splinecode"
      />
      <Image
        className="absolute w-full aspect-square -left-3 sm:hidden"
        src={Robot}
        alt="robot"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Model;
