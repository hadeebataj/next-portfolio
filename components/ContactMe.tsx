import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto: hadeebataj@gmail.com?subject=${formData.subject}&body=Hi, ${formData.message} ${formData.name}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase xs:tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="mt-40">
        <h4 className="md:text-4xl xs:text-xl sm:text-2xl font-semibold text-center">
          I have what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let us talk</span>
        </h4>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#F7AB0A] animate-pulse sm:h-6 sm:w-6 xs:h-4 xs:w-4" />
          <p className="sm:text-2xl xs:text-lg">+44 7456504990</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] animate-pulse sm:h-6 sm:w-6 xs:h-4 xs:w-4" />
          <p className="sm:text-2xl xs:text-lg">hadeebataj@gmail.com</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#F7AB0A] animate-pulse sm:h-6 sm:w-6 xs:h-4 xs:w-4" />
          <p className="sm:text-2xl xs:text-lg">Oakeshott Avenue, London</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2 xs:flex-col xs:space-y-2 xs:space-x-0 sm:flex-row ">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        ></textarea>
        <button
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
