import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <main className="h-full w-full flex flex-col md:flex-row bg-[#F8FAFF]">
      <div className="flex-[0.5] bg-[#605BFF] p-4 h-screen min-h-[70px] flex flex-col md:justify-between md:items-center md:shape">
        <div className="relative md:left-2 md:top-2 flex w-full">
          <img
            src="/login.svg"
            alt="login"
            className="md:h-16 md:w-16 h-6 w-6 mr-1"
          />
          <p className="text-white md:hidden">Base</p>
        </div>
        <h2 className="hidden md:inline-block text-7xl text-white font-semibold">
          BASE
        </h2>
        <div className="md:flex gap-5 text-white hidden mb-10">
          <FaGithub size={40} className="cursor-pointer" />
          <AiFillTwitterCircle size={40} className="cursor-pointer" />
          <FaLinkedin size={40} className="cursor-pointer" />
          <IoLogoDiscord size={40} className="cursor-pointer" />
        </div>
      </div>

      {/* right */}
      <div className="flex-[0.5] mt-2 p-0 md:p-2 h-screen flex flex-col gap-5 justify-center">
        <div className="w-full h-screen bg-[#F8FAFF] flex justify-center items-center">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
