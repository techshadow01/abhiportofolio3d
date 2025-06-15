import { Timeline } from "../animate/Timeline";

import React from "react";

const data = [
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-8 text-5xl font-normal bg-gradient-to-r from-[#E2CBFF] via-[#393BB2] to-[#E2CBFF] inline-block text-transparent bg-clip-text">
          Full Stack Developer Intern
        </p>
        <p className="mb-8 text-4xl font-normal text-white">
          &#40; Learn and Build &#41;
        </p>
        <p className="flex gap-3">
          <div className="bg-white rounded-full size-2 mt-3"></div>
          <p className="mb-8 text-lg font-normal text-white">
            Collaborated with team of 5 developers to design and implement
            responsive web applications using Reactjs, improving user experience
            &#40;UX&#41; and front-end functionality
          </p>
        </p>
        <p className="flex gap-3">
          <div className="bg-white rounded-full size-2 mt-3"></div>
          <p className="mb-8 text-lg font-normal text-white">
            Developed and optimized front-end interfaces with React, ensuring
            cross - browser compatibility and enhancing user experience
            &#40;UX&#41;
          </p>
        </p>
        <p className="flex gap-3">
          <div className="bg-white rounded-full size-2 mt-3"></div>
          <p className="mb-8 text-lg font-normal text-white">
            Integrated relational databases like SQL and MongoDB, designing
            efficient database schemas, writing over 50 complex SQL queries, and
            improving database performance
          </p>
        </p>
        <p className="flex gap-3">
          <div className="bg-white rounded-full size-2 mt-3"></div>
          <p className="mb-8 text-lg font-normal text-white">
            Gained hands-on experience with Node.js and RESTful APIs,
            contributing to the development of 3 major web features, enhancing
            API communication and backend integration.
          </p>
        </p>
        {/* <img
          src="/cert.png"
          alt="startup template"
          width={400}
          className=" rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 aspect-video"
        /> */}
      </div>
    ),
  },
];

const Page = () => {
  return (
    <div>
      <h2
        id="experience"
        className="bg-clip-text text-6xl font-bold text-center text-transparent md:text-7xl pt-16 bg-gradient-to-b from-black/80 to-black/50 dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-16"
      >
        Experince
      </h2>
      <Timeline data={data} />
    </div>
  );
};

export default Page;
