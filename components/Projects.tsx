import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full overflow-x-scroll snap-x snap-mandatory flex z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center items-center flex xs:flex-col sm:flex-col lg:flex-row xs:space-y-1 space-y-3 justify-center xs:px-8 sm:px-12 lg:px-20 xl:px-20 md:px-10 py-20 md:p-44 h-screen "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              className="xl:h-full xl:w-auto md:pt-8 xs:pt-24 lg:h-80 lg:w-auto md:h-80 md:w-auto sm:h-64 sm:w-auto mx-auto justify-center"
              alt=""
            />

            <div className="space-y-10 xs:space-y-4 sm:space-y-4 md:px-10 px-0 max-w-6xl">
              <h4 className="md:text-4xl font-semibold text-center sm:text-base">
                {project.title}
              </h4>
              <p className="md:text-lg text-center sm:text-sm">
                {project.summary}
              </p>
              <div className="pt-5 space-x-4 space-y-2 text-center">
                <Link href={project.linkToBuild}>
                  <button className="heroButton">View Design</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#213139]/50 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
