import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mailmeonravikumar@gmail.com?subject=${formData.subject} &body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div
      id="contact"
      className="h-screen relative flex overflow-hidden flex-col text-center
                md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px]
                     text-[#fee2e2] text-base md:text-2xl"
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-0 text-center m-auto mt-56">
        <h5 className="text-xl md:text-3xl font-semibold text-center italic justify-center">
          I have got just what you need.
        </h5>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center mt-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91-9088099081</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Ranchi(JH), India</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-base md:text-xl">mailmeonravikumar@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit md:w-fit mx-10 md:mx-0 sm:pl-10 mb-5 md:mb-0 m-auto"
        >
          <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
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
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold align-middle justify-center"
          >
            Submit
          </button>
        </form>
      </div>
      <div
        className="w-full absolute top-[15%] bg-[#F29090]/5 left-0
                    h-[500px] -skew-y-12 -z-20"
      />
    </div>
  );
}

export default ContactMe;
