import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
                md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3
        className="absolute top-24 uppercase tracking-[12px] md:tracking-[20px]
                     text-[#fee2e2] text-xl z-30 justify-center"
      >
        React Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
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
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className="object-cover max-h-screen sd:w-40 sd:h-40 md:w-48 lg:w-96 lg:h-96 rounded-md"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semifold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case {i + 1} of {projects.length}
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project.technology?.map((technology) => (
                  <img
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt="technology-image"
                  />
                ))}
              </div>

              <p className="text-sm md:text-base text-center md:text-left mb-4">
                {project.summary}
              </p>
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
