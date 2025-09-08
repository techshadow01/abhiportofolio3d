"use client";
import { Spotlight } from "../animate/spotlight";
import ScrollDownIcon from "../animate/scroll-down-icon";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { ChevronRight, File } from "lucide-react";
import { BlurIn, BoxReveal, Sleath } from "../animate/homereveal";
import { AnimatedGradientText } from "../animate/shinytextmagic";
import Model from "../spline/Model";
import { motion, useScroll, useTransform } from "motion/react";

const Page = () => {
  const { scrollY } = useScroll();

  const yOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const yScroll = useTransform(scrollY, [0, 1000], [0, 300]);
  return (
    <motion.div
      id="mhome"
      className="flex max-sm:flex-col-reverse  items-center justify-between max-sm:justify-center max-sm:gap-5 h-[calc(100vh-50px)] "
      style={{ y: yScroll, opacity: yOpacity }}
    >
      <div className="flex flex-col ml-[10%] max-sm:ml-0 max-sm:w-[90%] gap-6">
        <Sleath
          duration={1}
          delay={5}
          x={-20}
          className="group relative w-fit flex items-center justify-center rounded-full px-6 py-2.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] "
        >
          <span
            className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#E2CBFF]/50 via-[#9c40ff]/50 to-[#E2CBFF]/50 bg-[length:300%_100%] p-[1px]"
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🧑‍💻 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText
            // colorFrom="#E2CBFF"
            className="text-sm font-medium"
          >
            FULL STACK DEVELOPER
          </AnimatedGradientText>
          <ChevronRight
            className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </Sleath>
        <div className="text-white max-sm:text-[10vw] max-sm:flex-row max-sm:justify-center text-8xl uppercase flex flex-col gap-4">
          <BlurIn delay={3.5}> Abhishek</BlurIn>
          <BlurIn delay={3.5}> jangid</BlurIn>
        </div>
        <BlurIn
          delay={4.5}
          className="text-slate-300 max-sm:text-sm  max-sm:text-center max-w-[400px]"
        >
          fullstack developer with hands-on experience in React.js, Node.js, and
          MongoDB.
        </BlurIn>
        <div className="flex gap-2 w-full max-sm:mx-auto">
          <Sleath
            className="relative inline-flex h-12 overflow-hidden rounded-full w-full p-[1px]"
            duration={1}
            delay={5}
          >
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <Link
              href="#contact"
              className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1  text-white backdrop-blur-3xl"
            >
              Get in touch
            </Link>
          </Sleath>
          <BoxReveal delay={4} width="100%" className="glow rounded-full">
            <a className="group gap-2 bg-white h-12 rounded-full relative z-40 max-sm:z-0 cursor-pointer flex items-center justify-center px-4">
              <div className="group-hover:-translate-x-3 duration-500 text-black">
                Resume
              </div>
              <File className="text-black size-5 right-[65px] top-4 ml-2 absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 duration-500 ease-in-out" />
            </a>
          </BoxReveal>
        </div>
      </div>
      <Model />
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        <Spotlight
          className="absolute top-14 z-30 right-0 rotate-90"
          fill={"#cccccc"}
        />
      </div>
      <ScrollDownIcon />
      <Sidebar />
    </motion.div>
  );
};

export default Page;
