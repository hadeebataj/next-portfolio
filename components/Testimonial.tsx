import { motion } from "framer-motion";
import React from "react";

function Testimonial() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left  max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Testimonial
      </h3>
      <article className="flex flex-col mt-[100px] rounded-lg items-center space-y-7 xs:space-y-2 flex-shrink w-[500px] md:w-[600px] xl:w-[900px] xs:w-[380px] snap-start bg-[#292929] xs:py-4 xs:px-10 p-10 overflow-hidden font-light">
        <p className="text-center">
          &quot;As Hadeeba’s manager and colleague, I can best discuss the
          qualities and accomplishments that Hadeeba brought to our company.
          Hadeeba was a self-starter who required little supervision and a good
          team player where she is a good colleague to her team and always
          shared tips and ideas to help others manage IT departments, too.
        </p>
        <p className="text-center">
          If it’s not obvious already, I highly recommend Hadeeba to an
          employer. We are sorry to lose her and her contributions in our
          workplace over the years have been substantial. She is absolutely the
          best asset we ever had in our company.&quot;
        </p>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" rounded-full xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[50px] sm:h-[50px] xs:w-[50px] xs:h-[50px] object-cover object-center"
          src="/1599464187098.jpeg"
        />
        <div className="text-xl text-gray-400 opacity-80 text-center px-0">
          <p>Fahad Sharif Shaikh</p>
          <p className="font-thin">CEO, Kloudynet Technologies Sdn. Bhd.</p>
        </div>
      </article>
    </motion.div>
  );
}

export default Testimonial;
