import React from "react";
import { IoIosNotifications } from "react-icons/io";
import profile from "/profile.jpeg";

export default function Header() {
  return (
    <header className="bg-white md:bg-gray-100 gap-4 h-[70px] flex justify-end items-center p-3 top-0 sticky">
      <IoIosNotifications
        size={30}
        className="text-gray-600 hover:text-blue-500 hover:scale-110 transition-transform duration-200 cursor-pointer"
      />
      <img
        src={profile}
        alt=""
        className="h-12 w-12 object-cover rounded-full cursor-pointer"
      />
    </header>
  );
}
