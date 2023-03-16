import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col
                            text-left md:flex-row max-w-full px-10
                            justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-12 uppercase tracking-[20px]
                     text-[#fee2e2] text-2xl pt-5 z-20"
      >
        Workexperience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 
                            snap-x snap-mandatorty
                             scroll-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
