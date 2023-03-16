import { MotionConfig } from "framer-motion";

import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
// import aboutImage from "../public/images/photo1.jpeg";

type Props = {};

function About({}: Props) {
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
      className="flex flex-col relative  h-screen text-center md:text-left md:flex-row
                    max-w-7xl px-10 justify-evenly mx-auto 
                    items-center"
    >
      <h3
        className=" top-50 uppercase tracking-[20px]
                     text-[#fee2e2] text-2xl z-10 mt-10 lg:px-0 xl:px-0 "
      >
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={
          {
            //   once: true,
          }
        }
        src="https://media.licdn.com/dms/image/C4D22AQE9e0s6euQ7ow/feedshare-shrink_1280/0/1675246611068?e=1681344000&v=beta&t=P0LX5Muock9GWScVhiJRm5KJEFcVjooH9KcpjhpmsoA"
        alt="about-image"
        className="-mb-10 md:mb-0 flex-shrink-0 w-56 h-62 rounded-full 
        object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]  "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hey! I am Ravi. A Mumbai based Frontend Developer specialised in
          React.js and Next.js. I am quite ethusiastic in exploring the field of
          UI/UX design. I love coding and in my free time I love to make clones
          of the famous applications of the world. I love when my coding leads
          to a beautufully looking website. I feel an adranaline rush spreading
          in my body. I love doing photography and want to explore the world
          travelling and simultaneously capturing the beauty in my DSLR. I am a
          fitness enthusiast and in my free time love to do Yoga and exercise
          along with meditation.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
