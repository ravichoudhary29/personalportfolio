import React, { useState, useEffect, UIEvent } from "react";
import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollLeft = target.scrollLeft;
    const clientWidth = target.clientWidth;

    if (scrollLeft === 0) {
      setCurrentIndex(0);
    } else if (scrollLeft + clientWidth === target.scrollWidth) {
      setCurrentIndex(projects.length - 1);
    } else {
      const newIndex = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(newIndex);
    }
  };
  useEffect(() => {
    const projectsDiv = document.getElementById("projects-div");
    if (projectsDiv) {
      projectsDiv.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (projectsDiv) {
        projectsDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
                md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-y-scroll"
    >
      <h3
        className="absolute top-24 uppercase tracking-[12px] md:tracking-[20px]
                     text-[#fee2e2] text-2xl z-30 justify-center"
      >
        React Projects
      </h3>
      {currentIndex > 0 && (
        <ChevronDoubleLeftIcon className="absolute top-[40%] left-2 z-10 h-12 w-12 text-[#F7AB0A] cursor-pointer" />
      )}
      {currentIndex < projects.length - 1 && (
        <ChevronDoubleRightIcon className="absolute top-[40%] right-2 z-10 h-12 w-12 text-[#F7AB0A] cursor-pointer" />
      )}
      <div
        id="projects-div"
        className="relative w-full flex overflow-x-scroll overflow-y-scroll
                   snap-x snap-mandatory z-20  scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-20"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col
                            space-y-5 items-center justify-content p-10
                            md:p-44 h-screen object-contain object-center "
          >
            <motion.img
              className="object-cover w-full max-h-screen md:w-52 md:h-52 lg:w-96 lg:h-96 xl:w-[30vw] xl:h-[30vw] rounded-md"
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semifold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case {i + 1} of {projects.length}
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-4 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-6 w-6 md:h-8 md:w-8"
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt="technology-image"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base text-center md:text-left mb-4">
                {project.summary}
              </p>
              <div className="flex justify-center mt-10 cursor-pointer">
                <a
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className=" text-sm bg-[#333] rounded-lg text-white px-4 py-2 hover:bg-[#111] transition-colors">
                    <span className="underline">Link to</span>
                    {":"}
                    {project?.title}
                  </h4>
                </a>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className=" text-sm bg-[#333] rounded-lg text-white px-4 py-2 hover:bg-[#111] transition-colors ml-5">
                    <span>GitHub Repo</span>
                  </h4>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0
                    h-[500px] -skew-y-12"
      />
    </motion.div>
  );
}

export default Projects;
