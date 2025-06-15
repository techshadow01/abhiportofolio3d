type tool = {
  name: string;
  color: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
};

// framework
import email from "./assets/gmail.svg";
import github from "./assets/github.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";

export const Contact: tool[] = [
  { name: "E-mail", color: "bg-[#b3ecff33]", img: email },
  { name: "Github", color: "bg-[#f0f0f033]", img: github },
  { name: "Linkedin", color: "bg-[#b4e68533]", img: twitter },
  { name: "Twitter", color: "bg-[#f0f0f033]", img: linkedin },
];

export const projects = [
  {
    title: email,
    link: "mailto:abhishekjangid.3224@gmail.com",
  },
  {
    title: github,
    link: "https://github.com/techshadow01",
  },
  {
    title: twitter,
    link: "https://x.com/AbhishekJa94069?t=T_vVqs7Bbcj1GjLx0tei4g&s=08",
  },
  {
    title: linkedin,
    link: "https://www.linkedin.com/in/abhishek-jangid-079b9726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
