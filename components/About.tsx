import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="/61531844.jpeg"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="-mb-20 mt-40 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is little background</h4>

        <p className="text-base">
          I’m a frontend developer with 2+ years of experience in
          Typescript/React, HTML/CSS, and I am exploring Node.js, I have been
          working as a consultant to Microsoft teams on the design and
          development of team collaboration applications (Microsoft Teams) and
          cyber security based applications (Azure Active Directory). I’m
          excited to bring my passion for clean, responsive design to new
          clients located worldwide.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
