import React from "react";
// import Spline from "@splinetool/react-spline";
import { HoverEffect } from "../animate/contacttile";
import { projects } from "./contactdata";

const Page = () => {
  return (
    <div id="contact" className="text-white">
      <h2 className="bg-clip-text text-6xl font-bold text-center text-transparent md:text-7xl pt-16 bg-gradient-to-b from-black/80 to-black/50 dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-16 max-sm:mb-0">
        Get in touch
      </h2>
      <div className="flex max-sm:flex-col items-center justify-around">
        <div className="relative overflow-hidden w-full max-w-[800px] aspect-square">
          {/* <Spline
            className="absolute w-full aspect-square top-[6%] max-sm:top-[12%]"
            scene="https://prod.spline.design/dgCbMiYRPgcOqPwm/scene.splinecode"
          /> */}
        </div>
        {/* <div className="flex flex-col gap-6"> */}
        <HoverEffect items={projects} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Page;
