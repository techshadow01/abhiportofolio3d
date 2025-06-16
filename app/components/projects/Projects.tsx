"use client";
import AceTernityLogo from "../animate/aceternity";
import SlideShow from "../animate/slide-show";
import { Button } from "../animate/button";
import { TypographyH3, TypographyP } from "../animate/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiMongoosedotws,
  SiJsonwebtokens,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import Alicet from "./assets/Alice.png";
import Crowdt from "./assets/swing.png";
import Portofoliot from "./assets/portofolio.png";
import Spotifyt from "./assets/spotify.png";
import Tourwebt from "./assets/tourweb.png";

import {
  Swing,
  Portofolio,
  NPortofolio,
  Tour,
  Chat,
  Alice,
  Spotify,
} from "./Projectimgdata";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  mui: {
    title: "Mui",
    bg: "black",
    fg: "white",
    icon: <SiMui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  mongoose: {
    title: "Mongoose",
    bg: "black",
    fg: "white",
    icon: <SiMongoosedotws />,
  },
  jwt: {
    title: "jsonwebtokens",
    bg: "black",
    fg: "white",
    icon: <SiJsonwebtokens />,
  },
  html: {
    title: "Html",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  css: {
    title: "Css",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};

type image = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: image;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "swing",
    category: "Crowd funding",
    title: "Swing",
    src: Crowdt,
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    github: "https://github.com/techshadow01/swing",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.mui,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongoose,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Swing is your all-in-one platform for powering passion projects
            through community support. Whether you&#39;re launching your dream
            idea or backing a cause you believe in, Swing makes it simple,
            social, and seriously rewarding. No gatekeepers, no hassle &mdash;
            just real people helping real visions take flight.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 ">Home Page</TypographyH3>
          <p className="font-mono mb-2">
            Explore a world of projects, each filled with unique rewards and
            powerful stories. It&#8217;s like having a front-row seat to the
            future &mdash; and a chance to help shape it.
          </p>
          <SlideShow
            images={[
              Swing[0],
              Swing[1],
              Swing[2],
              Swing[3],
              Swing[4],
              Swing[5],
              Swing[6],
            ]}
          />
          <TypographyH3 className="my-4 ">Light Mode</TypographyH3>
          <p className="font-mono mb-2">
            Each one offers unique rewards and meaningful stories. Be part of
            what&#8217;s next &mdash; and help bring it to life.
          </p>
          <SlideShow images={[Swing[7], Swing[8], Swing[9], Swing[10]]} />
          <TypographyH3 className="my-4 mt-8">Dark Mode</TypographyH3>

          <p className="font-mono mb-2">
            Discover bold ideas, powerful stories, and exclusive rewards &mdash;
            all in one place. Back the projects that move you and help shape
            what&#8217;s next.
          </p>
          <SlideShow images={[Swing[11], Swing[12], Swing[13], Swing[14]]} />
        </div>
      );
    },
  },
  {
    id: "Portofolio",
    category: "Portofolio",
    title: "My Portofolio",
    src: Portofoliot,
    screenshots: ["1.png"],
    live: "https://abhi-profile.vercel.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.mui,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to My Portfolio &mdash; a creative space built to showcase
            bold ideas, thoughtful design, and meaningful work. Whether
            you&#39;re here to explore past projects, collaborate on something
            new, or just get inspired, this site is your open door. No fluff, no
            pretense &mdash; just a collection of real work by someone who loves
            bringing ideas to life.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 ">Portofolio 1</TypographyH3>
          <SlideShow images={Portofolio} />
          <TypographyH3 className="my-4 ">Portofolio 2</TypographyH3>
          <SlideShow images={NPortofolio} />
        </div>
      );
    },
  },
  {
    id: "tourweb",
    category: "Travel",
    title: "Travel world",
    src: Tourwebt,
    screenshots: ["1.png"],
    github: "https://github.com/techshadow01/tourweb",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.mongoose,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Travel World was a revolutionary platform designed to simplify and
            enhance the experience of planning and managing travel adventures.
            It served as a powerful bridge between travelers and tour operators,
            offering a suite of features that made trip planning smarter,
            smoother, and more enjoyable.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={Tour} />
          <TypographyH3 className="my-4 mt-8">
            Seamless Tour Planning
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Plan your entire trip effortlessly with a user-friendly interface
              that centralizes bookings, itineraries, and travel documents.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Personalized Itinerary Builder
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Create day-by-day travel plans tailored to your interests,
              including hotel stays, activities, and transport options.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Real-Time Notifications
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Stay updated with instant alerts for booking confirmations,
              schedule changes, and travel advisories.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "aliceai",
    category: "Image Generator",
    title: "Alice Ai",
    src: Alicet,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.mongoose,
      ],
    },
    live: "https://alice-ai-ten.vercel.app/",
    github: "https://github.com/techshadow01/AliceAI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Alice Image Generator creates stunning, high-quality images from
            simple text prompts. It uses advanced AI to bring your ideas to life
            with vivid details and artistic styles. Perfect for designers,
            creators, and storytellers looking to visualize concepts quickly and
            effortlessly. Easy, fast, and incredibly creative!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={Alice} />
        </div>
      );
    },
  },
  {
    id: "chatbot",
    category: "Ai chat",
    title: "Chatbot",
    src: Chat[0],
    screenshots: ["1.png"],
    live: "https://chat-bot-delta-six.vercel.app/",
    github: "https://github.com/techshadow01/chat_bot",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Chatbot is an intelligent virtual assistant that understands and
            responds to natural language. It helps with tasks, answers
            questions, and engages in seamless conversations. Powered by
            advanced AI, it offers personalized, quick, and accurate
            interactions for customer support, education, or everyday use.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={Chat} />
        </div>
      );
    },
  },
  {
    id: "spotify",
    category: "Music",
    title: "Spotify Clone",
    src: Spotifyt,
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://abhiproject.freewebhostmost.com/",
    github: "https://github.com/techshadow01/spotify",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Spotify is a vibrant platform for discovering, streaming, and
            sharing music. It offers curated playlists, artist profiles, and
            personalized recommendations powered by AI. Whether you&#8217;re a
            casual listener or a music lover, enjoy seamless access to your
            favorite tunes and new sounds anytime, anywhere.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={Spotify} />
        </div>
      );
    },
  },
];
export default projects;
