import { MotionConfig } from "framer-motion";

import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";
// import Image from "next/image";
// import aboutImage from "../public/images/photo1.jpeg";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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
        className=" top-55 uppercase tracking-[20px]
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
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
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
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
      <div
        className="w-full absolute top-[25%] bg-[#F7AB0A]/5 left-0
                    h-[600px] -skew-y-12"
      />
    </motion.div>
  );
}

export default About;
