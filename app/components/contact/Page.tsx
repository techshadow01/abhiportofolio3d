import React from "react";
import { HoverEffect } from "../animate/contacttile";
import { projects } from "./contactdata";
import { BoxReveal } from "../animate/boxreveal";
import Image from "next/image";
import Wave from "../../assets/wave.svg";
import { Particles } from "../animate/particles";

const Page = () => {
  return (
    <div id="contact" className="text-white">
      <h2 className="bg-clip-text text-6xl font-bold text-center text-transparent md:text-7xl pt-16 bg-gradient-to-b from-black/80 to-black/50 dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-16 max-sm:mb-0">
        Get in touch
      </h2>
      <div className="sticky top-0 flex max-sm:flex-col items-center justify-around max-sm:justify-center max-sm:h-full max-sm:h-screen mix-blend-difference">
        <div className="relative overflow-hidden w-full max-sm:w-fit max-w-[800px] aspect-square max-sm:aspect-auto flex flex-col items-center justify-center gap-3">
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
        <HoverEffect items={projects} className="max-sm:w-[300px]" />
      </div>
       <Image className=" w-full h-full" src={Wave} alt="" />
      <div className=" w-full h-screen bg-white overflow-hidden">
        <Particles color={"#000000"} quantity={150} />
      </div>
    </div>
  );
};

export default Page;




