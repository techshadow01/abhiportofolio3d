"use client";
import Image from "next/image";
import { Skill, tool, skilltype } from "./skills";

const Page = () => {
  return (
    <div id="skills" className=" text-white">
      <div>
        <h2 className="bg-clip-text text-6xl font-bold text-center text-transparent md:text-7xl pt-16 bg-gradient-to-b from-black/80 to-black/50 dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-16">
          Skills
        </h2>
      </div>
      <div className=" mx-auto max-lg:mx-2 max-w-[77rem]">
        {Skill.map((item: skilltype, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-4 mt-4">
              <div className="text-3xl text-white">{item.name}</div>
              <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-2">
                {item.src.map((item1: tool, index1: number) => {
                  return (
                    <div
                      key={index1}
                      className="flex items-center rounded-lg bg-white/10 backdrop-blur-2xl p-3 gap-3 text-xl"
                    >
                      <div
                        className={`p-2 items-center justify-center rounded-lg ${item1.color}`}
                      >
                        <Image className="size-8" src={item1.img} alt="hello"   width={10} />
                      </div>
                      <div>{item1.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
