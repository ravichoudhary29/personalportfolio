import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgrondCircles";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's Ravi Kumar",
      "Guy-who-loves-photography.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/C5622AQEVYZioxKBGmQ/feedshare-shrink_1280/0/1678448806092?e=1681344000&v=beta&t=KP3GwoUvj5Cirxx4pRGrubajrfoBbAefY98V5VHeuyU"
        alt="profile-picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-red-300 pb-2 tracking-[15px] italic hover:not-italic font-sans">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-[#b4ead8]">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
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
