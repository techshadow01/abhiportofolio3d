import React from "react";
// import Spline from "@splinetool/react-spline";
import { HoverEffect } from "../animate/contacttile";
import { projects } from "./contactdata";
// import Blob from "../../assets/blob.png";
// import Image from "next/image";
// import { SparklesCore } from "../animate/sparkles";
import { BoxReveal } from "../animate/boxreveal";

const Page = () => {
  return (
    <div id="contact" className="text-white max-sm:h-screen">
      <h2 className="bg-clip-text text-6xl font-bold text-center text-transparent md:text-7xl pt-16 bg-gradient-to-b from-black/80 to-black/50 dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-16 max-sm:mb-0">
        Get in touch
      </h2>
      <div className="flex max-sm:flex-col items-center justify-around max-sm:justify-center max-sm:h-full">
        <div className="relative overflow-hidden w-full max-sm:w-fit max-w-[800px] aspect-square max-sm:aspect-auto flex flex-col items-center justify-center gap-3">
          {/* <Spline
            className="absolute w-full scale-90 max-sm:scale-50 aspect-square top-[6%] max-sm:top-[12%]"
            scene="https://prod.spline.design/gXUWzwMKj4N52IqB/scene.splinecode"
          /> */}
          {/* <Image
            className="absolute aspect-auto"
            src={Blob}
            alt=""
            width={800}
            height={800}
          /> */}
          <BoxReveal
            className="text-9xl max-sm:text-[12vw]"
            boxColor={"#FFFFFF"}
            duration={0.7}
          >
            <div>ABHISHEK</div>
          </BoxReveal>
          <div className="h-[1px] w-64 max-sm:w-40 bg-white"></div>
          <BoxReveal
            className=" max-sm:text-[3vw] left-[calc(50%-128px)] "
            boxColor={"#FFFFFF"}
            duration={0.7}
          >
            abhishekjangid.3224@gmail.com
          </BoxReveal>
        </div>
        {/* <div className="flex flex-col gap-6"> */}
        <HoverEffect items={projects} className="max-sm:w-[300px]" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Page;
