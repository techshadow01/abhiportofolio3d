"use client";
import { useEffect, useState } from "react";
import { SlideTabs } from "../animate/nav";
const words = ["home", "experience", "skills", "projects", "contact"];

const Page = () => {
  //last section
  const [isLastSection, setIsLastSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsLastSection(window.scrollY > 6400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`max-sm:hidden sticky z-40 top-5 flex items-center justify-center w-full text-white ${
        isLastSection && "mix-blend-difference"
      }`}
    >
      <SlideTabs className="uppercase " labels={words} />
    </div>
  );
};

export default Page;
