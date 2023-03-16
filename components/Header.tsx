import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5  flex items-start 
                        justify-between max-w-7xl mx-auto
                        z-20 xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.instagram.com/vegan.ravi/"
          fgColor="#f87171"
          bgColor="transparent"
          className="scale-100 hover:scale-125 ease-in duration-100"
        />
        <SocialIcon
          url="https://twitter.com/thenomad_Ravi"
          fgColor="#f87171"
          bgColor="transparent"
          className="scale-100 hover:scale-125 ease-in duration-100"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ravi-kumar-304875a5/"
          fgColor="#f87171"
          bgColor="transparent"
          className="scale-100 hover:scale-125 ease-in duration-100"
        />
        <SocialIcon
          url="https://www.facebook.com/ravi12rocks"
          fgColor="#f87171"
          bgColor="transparent"
          className="scale-100 hover:scale-125 ease-in duration-100"
        />
        <SocialIcon
          url="https://github.com/ravichoudhary29"
          fgColor="#f87171"
          bgColor="transparent"
          className="scale-100 hover:scale-125 ease-in duration-100"
        />
        <SocialIcon
          url="https://wa.me/9088099081"
          fgColor="#f87171"
          bgColor="transparent"
          network="whatsapp"
          className="scale-100 hover:scale-125 ease-in duration-100"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center text-grey-300 cursor-pointer
         "
      >
        <SocialIcon
          url="#contact"
          className="cursor-pointer scale-100 hover:scale-125 ease-in duration-100"
          network="email"
          fgColor="#f87171"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-red-400 scale-100 hover:scale-125 ease-in duration-100 italic">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}