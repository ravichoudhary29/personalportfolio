import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgrondCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The name's Ravi Kumar`,
      "Guy-who-loves-photography.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-38 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile-picture"
      />
      <div className="z-20">
        <h2 className="text-xs uppercase md:text-lg text-red-300 pb-2 tracking-[15px] italic hover:not-italic font-sans">
          {pageInfo?.role}
        </h2>
        <h2 className="text-3xl lg:text-6xl md:text-5xl font-semibold px-10 text-[#b4ead8]">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h2>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
