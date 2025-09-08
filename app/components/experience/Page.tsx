import { Timeline } from "../animate/Timeline";

import React from "react";

const data = [
  {
    title: "2023",
    content: (
      <div>
         <div className="mb-8 text-5xl max-sm:text-4xl font-semibold bg-gradient-to-r from-[#E2CBFF] via-[#393BB2] to-[#E2CBFF] inline-block text-transparent bg-clip-text">
          Full Stack Developer Intern
        </div>
        <div className="mb-8 text-4xl max-sm:text-2xl font-normal text-gray-400">
          &#40; Learn and Build &#41;
        </div>
        <p className="flex gap-3">
          <div className="bg-white rounded-full size-2 mt-3"></div>
          <p className="mb-8 text-lg max-sm:text-base font-normal text-white">
            Collaborated with team of 5 developers to design and implement
            responsive web applications using Reactjs, improving user experience
            &#40;UX&#41; and front-end functionality
          </p>
        </p>
        <p className="flex gap-3">
          <div className="bg-white rounded-full size-2 mt-3"></div>
          <p className="mb-8 text-lg max-sm:text-base font-normal text-white">
            Developed and optimized front-end interfaces with React, ensuring
            cross - browser compatibility and enhancing user experience
            &#40;UX&#41;
          </p>
        </p>
        <p className="flex gap-3">
          <div className="bg-white rounded-full size-2 mt-3"></div>
          <p className="mb-8 text-lg max-sm:text-base font-normal text-white">
            Integrated relational databases like SQL and MongoDB, designing
            efficient database schemas, writing over 50 complex SQL queries, and
            improving database performance
          </p>
        </p>
        <p className="flex gap-3">
          <div className="bg-white rounded-full size-2 mt-3"></div>
          <p className="mb-8 text-lg max-sm:text-base font-normal text-white">
            Gained hands-on experience with Node.js and RESTful APIs,
            contributing to the development of 3 major web features, enhancing
            API communication and backend integration.
          </p>
        </p>
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

