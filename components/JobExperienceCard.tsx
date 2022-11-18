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
    <article className="flex flex-col mt-[100px] rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-start bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" rounded-full xl:w-[150px] xl:h-[150px] lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="px-0 py-0 md:px-10 overflow-y-scroll max-h-64">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 ">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
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
        <p className="uppercase py-5 text-gray-300">
          {<Moment format="MMM YYYY">{experience?.dateStarted}</Moment>} -{" "}
          {experience?.isCurrentlyWorkingHere ? (
            "Present"
          ) : (
            <Moment format="MMM YYYY">{experience?.dateEnded}</Moment>
          )}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          {experience?.points?.map((point, i) => {
            return <li key={i + 1}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default JobExperienceCard;
