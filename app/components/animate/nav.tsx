"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type SlideTabsProps = {
  labels: string[];
  className?: string;
};

type Position = { left: number; width: number; opacity: number };

interface TabsProps {
  children: ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

export const SlideTabs: React.FC<SlideTabsProps> = ({ className, labels }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative mx-auto flex  w-fit rounded-full p-1  backdrop-blur-2xl ${
        isScrolled && "border"
      } border-gray-600`}
    >
      {labels.map((item, index) => {
        return (
          <Tab key={index} setPosition={setPosition}>
            <a href={`#${item}`} className={className}>
              {item}
            </a>
          </Tab>
        );
      })}

      <Cursor position={position} />
    </ul>
  );
};

const Tab: React.FC<TabsProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

type CursorProps = {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};
