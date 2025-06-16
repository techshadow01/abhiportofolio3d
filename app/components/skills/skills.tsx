"use client";

export interface tool {
  name: string;
  color: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
}

// framework
import next from "./assets/framework/next.svg";
import react from "./assets/framework/react.svg";
import node from "./assets/framework/node.svg";
import express from "./assets/framework/express.svg";
import vite from "./assets/framework/vite.svg";

export const Frame: tool[] = [
  { name: "ReactJS", color: "bg-[#b3ecff33]", img: react }, // lighter blue
  { name: "NextJS", color: "bg-[#f0f0f033]", img: next }, // lighter gray
  { name: "nodeJS", color: "bg-[#b4e68533]", img: node }, // lighter green
  { name: "expressJS", color: "bg-[#f0f0f033]", img: express },
  { name: "viteJS", color: "bg-[#d49aff33]", img: vite }, // lighter purple
];

//library
import tailwind from "./assets/library/tailwind.svg";
import mui from "./assets/library/mui.svg";
import bootstrap from "./assets/library/bootstrap.svg";
import motion1 from "./assets/library/motion.svg";
import redux from "./assets/library/redux.svg";

export const Library: tool[] = [
  { name: "tailwind", color: "bg-[#a6fcfc33]", img: tailwind }, // lighter cyan
  { name: "mui", color: "bg-[#66d3ff33]", img: mui }, // lighter blue
  { name: "bootstrap", color: "bg-[#bfa3d633]", img: bootstrap }, // lighter purple
  { name: "motion", color: "bg-[#dda0c033]", img: motion1 }, // lighter pink
  { name: "redux", color: "bg-[#bfa3d633]", img: redux },
];

//languages
import C from "./assets/language/C.svg";
import cplus from "./assets/language/c++.svg";
import java from "./assets/language/java.svg";
import python from "./assets/language/python.svg";
import html from "./assets/language/html.svg";
import css from "./assets/language/css.svg";
import javascript from "./assets/language/javascript.svg";
import typescript from "./assets/language/typescript.svg";

export const Languages: tool[] = [
  { name: "c", color: "bg-[#a3ccee33]", img: C },
  { name: "c++", color: "bg-[#a3ccee33]", img: cplus },
  { name: "java", color: "bg-[#f5a36633]", img: java }, // lighter orange
  { name: "python", color: "bg-[#ffe68033]", img: python }, // lighter yellow
  { name: "html", color: "bg-[#f5a36633]", img: html },
  { name: "css", color: "bg-[#a3ccee33]", img: css },
  { name: "javascript", color: "bg-[#ffe68033]", img: javascript },
  { name: "typescript", color: "bg-[#a3ccee33]", img: typescript },
];

//database
import sql from "./assets/database/sql.svg";
import mysql from "./assets/database/mysql.svg";
import mongodb from "./assets/database/mongodb.svg";

export const Database: tool[] = [
  { name: "sql", color: "bg-[#66d9ff33]", img: sql }, // lighter cyan
  { name: "mysql", color: "bg-[#66d9ff33]", img: mysql },
  { name: "mongodb", color: "bg-[#8cd48a33]", img: mongodb }, // lighter green
];

//other
import dsa from "./assets/other/dsa.svg";
import git from "./assets/other/git.svg";
import github from "./assets/other/github.svg";
import postman from "./assets/other/postman.svg";
import prompt from "./assets/other/prompt.svg";
import vscode from "./assets/other/vscode.svg";
import figma from "./assets/other/figma.svg";

export const Other: tool[] = [
  { name: "figma", color: "bg-[#dda0c033]", img: figma },
  { name: "dsa", color: "bg-[#a3ccee33]", img: dsa },
  { name: "git", color: "bg-[#f5a36633]", img: git },
  { name: "github", color: "bg-[#f0f0f033]", img: github },
  { name: "postman", color: "bg-[#f5a36633]", img: postman },
  { name: "prompt", color: "bg-[#f0f0f033]", img: prompt },
  { name: "vscode", color: "bg-[#a3ccee33]", img: vscode },
];

export interface skilltype {
  name: string;
  src: tool[];
}

export const Skill: skilltype[] = [
  {
    name: "Framework",
    src: Frame,
  },
  {
    name: "Languages",
    src: Languages,
  },
  {
    name: "Library",
    src: Library,
  },
  {
    name: "Database",
    src: Database,
  },
  {
    name: "Tools",
    src: Other,
  },
];
