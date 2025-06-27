// "use client";
import Spline from "@splinetool/react-spline/next";
import { Spotlight } from "../animate/spotlight";
import ScrollDownIcon from "../animate/scroll-down-icon";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import Robot from "../../assets/robot.png";
import {  File } from "lucide-react";

const Page = () => {
  return (
  <div id="mhome" className="flex max-sm:flex-col-reverse  items-center justify-between max-sm:justify-center max-sm:gap-5 h-[calc(100vh-50px)] ">
      <div className="flex flex-col justify-center  ml-[10%] max-sm:mx-auto max-sm:ml-0 gap-6">
        <span className="relative whitespace-nowrap inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full max-sm:w-[90%] max-sm:mx-auto">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            FULL STACK DEVELOPER
          </span>
        </span>
        <div className="text-white max-sm:text-[10vw] max-sm:flex-row max-sm:justify-center text-8xl uppercase flex flex-col gap-4">
          <div> Abhishek</div>
          <div> jangid</div>
        </div>
        <div className="text-slate-300 max-sm:text-sm max-sm:max-w-[96%] max-sm:text-center max-w-[400px]">
          fullstack developer with hands-on experience in React.js, Node.js, and
          MongoDB.
        </div>
        <div className="flex gap-2 w-full max-sm:w-[90%] max-sm:mx-auto">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full w-full p-[1px]">
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <Link
              href="#contact"
              className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1  text-white backdrop-blur-3xl"
            >
              Get in touch
            </Link>
          </button>
          <a className="group gap-2 bg-white h-12 rounded-full relative z-40 max-sm:z-0 cursor-pointer flex items-center justify-center px-4">
              <div className="group-hover:-translate-x-3 duration-500 text-black">
                Resume
              </div>
              <File className="text-black size-5 right-[65px] top-4 ml-2 absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 duration-500 ease-in-out" />
            </a>
        </div>
      </div>
      <div className="relative overflow-hidden w-full aspect-square ">
        <Spline
          className="absolute w-full aspect-square left-[20%] max-sm:left-4 -top-[4%] max-sm:top-0 max-sm:scale-[1.90] max-sm:hidden"
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        <Spotlight
          className="absolute top-14 z-30 right-0 rotate-90"
          fill={"#cccccc"}
        />
      </div>
      <ScrollDownIcon />
      <Sidebar />
    </div>
  );
};

export default Page;
