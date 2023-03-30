import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <div>
      <article
        className="flex flex-col rounded-lg items-center space-y-7 
                            flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
                            snap-center bg-[#292929] p-10 hover:opacity-100
                            opacity-40 cursor-pointer transition-opacity duration-200
                            overflow-hidden "
      >
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="w-32 h-32 rounded-full xl:[200px] object-cover
                        object-center"
          src={urlFor(experience?.companyImage).url()}
        />
        <div className="px-0 md:px-10">
          <h4 className="text-xl md:text-4xl font-light">
            {experience?.company}
          </h4>
          <p className="font-bold text-sm md:text-2xl mt-1">
            {experience?.jobTitle}
          </p>
          <div className="flex md:space-x-2 my-2">
            {experience.technologies.map((technology) => (
              <img
                key={technology._id}
                className="h-10 w-10 rounded-full"
                src={urlFor(technology.image).url()}
              />
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>

          <ul className="list-disc space-y-4 ml-0 text-xs md:text-lg max-h-auto  overflow-y-scroll  scrollbar-thin  scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default ExperienceCard;
