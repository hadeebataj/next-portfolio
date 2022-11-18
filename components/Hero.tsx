import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi! I'm Hadeeba.`,
      "UI/UX Designer & Developer",
      "Making designs simple.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  console.log(pageInfo);

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-[url('/casey-horner-RmoWqDCqN2E-unsplash.jpg')] bg-cover bg-opacity-15">
      {/* <BackgroundCircles /> */}
      {/* <Image
        src="https://cdn.sanity.io/images/j1xooykw/production/b5d51b77d7c0ae61b591e21e1827d2d8e9650f86-460x460.jpg"
        // src={urlFor(pageInfo?.heroImage).url()}
        height={32}
        width={32}
        className="relative rounded-full mx-auto object-cover"
        alt=""
      /> */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto"
        src="https://cdn.sanity.io/images/j1xooykw/production/b5d51b77d7c0ae61b591e21e1827d2d8e9650f86-460x460.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase tracking-[8px] text-gray-300 pb-2">
          Frontend Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 ">
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
};

export default Hero;
