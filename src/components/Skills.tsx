import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="flex relative flex-col text-center md:text-left 
                            xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
                            justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3
        className="absolute top-14 uppercase tracking-[20px] text-[#fee2e2]
                         text-2xl mb-10 z-50"
      >
        Skills
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-36">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
