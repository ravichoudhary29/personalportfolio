import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
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
          src="https://media.licdn.com/dms/image/C5622AQE0DwocsYZKCg/feedshare-shrink_2048_1536/0/1678448805129?e=1681344000&v=beta&t=XAYWln1MHQ6Hoe2RnPuvNqIyGROOK-eiRqpmL_l5CFQ"
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">CEO OF PAPAFAM</h4>
          <p className="font-bold text-2xl mt-1">PAPAFAM</p>
          <div className="flex space-x-2 my-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://img.freepik.com/free-icon/html-5_318-674234.jpg?w=2000"
              alt="logo"
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://img.freepik.com/free-icon/html-5_318-674234.jpg?w=2000"
              alt="logo"
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://img.freepik.com/free-icon/html-5_318-674234.jpg?w=2000"
              alt="logo"
            />
          </div>
          <p className="uppercase py-5 text-gray-300">
            Started working... ended working...
          </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>
              Summary Points Summary Points Summary Points Summary Points
              Summary Points
            </li>
            <li>
              Summary Points Summary Points Summary Points Summary Points
              Summary Points
            </li>
            <li>
              Summary Points Summary Points Summary Points Summary Points
              Summary Points
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default ExperienceCard;
