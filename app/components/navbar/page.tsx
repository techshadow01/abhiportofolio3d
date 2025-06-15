"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const page = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-sm:hidden sticky z-40 top-5 flex items-center justify-center w-full text-white">
      <button
        className={`relative inline-flex h-12 overflow-hidden rounded-full p-[4px] px-4 backdrop-blur-2xl ${
          isScrolled && "border"
        } border-gray-600`}
      >
        <div className="flex justify-center items-center gap-9">
          <Link href="#home" className="hover:text-slate-300">
            HOME
          </Link>
          <Link href="#experience" className="hover:text-slate-300">
            EXPERIENCE
          </Link>
          <Link href="#skills" className="hover:text-slate-300">
            SKILLS
          </Link>
          <Link href="#projects" className="hover:text-slate-300">
            PROJECTS
          </Link>
          <Link href="#contact" className="hover:text-slate-300">
            CONTACT
          </Link>
        </div>
        {/* </span> */}
      </button>
    </div>
  );
};

export default page;
