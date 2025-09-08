"use client";
import Image from "next/image";
import React from "react";
import { useModal } from "../animate/AniModal";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../animate/AniModal";
import { FloatingDock } from "../animate/FloatingDock";
import Link from "next/link";

import SmoothScroll from "../animate/smooth-scroll";
import projects, { Project } from "./Projects";
import { ArrowRight } from "lucide-react";

const TBox = () => {
  return (
    <div className="absolute w-4 aspect-square -top-4 left-0 bg-transparent  shadow-[-5px_5px_black] rounded-bl-2xl "></div>
  );
};

const BBox = () => {
  return (
    <div className="absolute w-4 aspect-square -right-4 bottom-0 bg-transparent  shadow-[-5px_5px_black] rounded-bl-2xl "></div>
  );
};

const MoreButton = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:z-10 -z-10 duration-300 scale-50 group-hover:scale-100">
      <div className="rounded-full bg-white text-black p-2 flex gap-1">
        View Details
        <ArrowRight />
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto">
       <div>
        <h2 className=" bg-clip-text text-6xl font-bold text-center text-transparent md:text-7xl pt-16 bg-gradient-to-b from-black/80 to-black/50 dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-16">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
        {projects.map((project) => (
          <Modall key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

//  bg-gradient-to-t from-black via-black/85 to-transparent

const Modall = ({ project }: { project: Project; }) => {
  return (
    <div  className={`flex items-center justify-center`}>
      <Modal>
         <ModalTrigger className="bg-transparent flex justify-center group/modal-btn cursor-pointer group">
          <div className="relative w-[400px] h-auto rounded-lg overflow-hidden aspect-[17/10]">
            <Image
              className="absolute w-full h-full top-0 left-0 duration-500 group-hover:blur-xs"
              src={project.src}
              alt={project.title}
              width={300}
              height={200}
            />
            <MoreButton />
            <div className="absolute w-full h-1/2 bottom-0 left-0 pointer-events-none">
              <div className="absolute left-0 bottom-0 rounded-tr-2xl w-fit inline-flex flex-col items-start justify-end white bg-black px-2 ">
                <TBox />
                <BBox />
                <div className="text-lg text-left">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalInner project={project} />
          </SmoothScroll>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ModalInner = ({ project }: { project: Project }) => {
  const { setOpen } = useModal();

  return (
    <>
      <ModalContent>
        <ProjectContents project={project} />
      </ModalContent>
      <ModalFooter className="gap-4">
        <button
          className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
        {project.live && (
          <Link href={project.live} target="_blank">
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 cursor-pointer">
              Visit
            </button>
          </Link>
        )}
      </ModalFooter>
    </>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="text-white">
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {project.content}
    </div>
  );
};










