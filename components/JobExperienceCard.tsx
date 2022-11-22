import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Moment from "react-moment";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const JobExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col h-96 rounded-lg items-left space-y-7 xs:overflow-y-scroll xs:max-h-96 sm:overflow-y-scroll sm:max-h-96 md:overflow-y-scroll md:max-h-96 flex-shrink-0 w-[500px] xs:w-[350px] md:w-[600px] xl:w-[900px] snap-start bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      {/* <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full ml-10 mt-4 xl:w-[100px] xl:h-[100px] lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px] sm:w-[50px] sm:h-[50px] xs:w-[50px] xs:h-[50px] object-cover object-center "
        src={urlFor(experience?.companyImage).url()}
      /> */}

      <div className="flex gap-4 lg:flex-row xs:flex-col sm:flex-col md:flex-col p-10 ">
        <div className="lg:w-2/5">
          <h4 className="text-4xl xs:text-xl font-light">
            {experience?.jobTitle}
          </h4>
          <p className="font-bold text-2xl xs:text-base mt-1 ">
            {experience?.company}
          </p>
          <div className="flex space-x-2 my-2 ">
            {experience?.technologies?.map((technology) => {
              return (
                <img
                  key={technology._id}
                  className="h-10 w-10 rounded-full "
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              );
            })}
          </div>
          <p className="uppercase xs:py-2 py-5 text-gray-300">
            {<Moment format="MMM YYYY">{experience?.dateStarted}</Moment>} -{" "}
            {experience?.isCurrentlyWorkingHere ? (
              "Present"
            ) : (
              <Moment format="MMM YYYY">{experience?.dateEnded}</Moment>
            )}
          </p>
        </div>
        <div className="lg:w-3/5 lg:overflow-y-scroll ">
          <ul className="list-disc space-y-4 ml-5 text-lg xs:space-y-2 xs:text-sm">
            {experience?.points?.map((point, i) => {
              return <li key={i + 1}>{point}</li>;
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default JobExperienceCard;
