import React, { useEffect, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPass) {
      alert("passwords does not match");
      return;
    }
    if (
      values.email.length !== 0 &&
      values.password.length !== 0 &&
      values.password === values.confirmPass
    ) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);

  return (
    <div className="w-full md:w-[523px] h-fit md:h-[690px] bg-[#F8FAFF] p-4 md:p-2">
      <div className="bg-[#F8FAFF] w-full min-h-screen md:h-[410px] flex flex-col gap-10">
        <div className="">
          <h2 className="text-2xl md:text-3xl py-2 font-bold">Register</h2>
          <p className="text-sm font-semibold py-1">Register your account</p>
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center gap-2 bg-white shadow-md p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src="/google.png" alt="google" className="h-4" />
            <p className="text-sm text-gray-400">Sign in with Gmail</p>
          </div>
          <div className="flex items-center gap-2 bg-white shadow-md p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src="/apple.png" alt="apple" className="h-4" />
            <p className="text-sm text-gray-400">Sign in with Apple</p>
          </div>
        </div>
        {/* login form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full m:min-w-[423px] min-h-[350px] md:h-[400px] shadow-md rounded-lg flex flex-col justify-around p-5"
        >
          <label>Email address</label>
          <input
            type="email"
            required
            name="email"
            value={values.email}
            onChange={handleChange}
            className="p-2 bg-[#F5F5F5] rounded-md border-none focus:outline-none focus:ring-0"
          />
          <label>Password</label>
          <input
            type="password"
            required
            name="password"
            value={values.password}
            onChange={handleChange}
            className="p-2 bg-[#F5F5F5] rounded-md border-none focus:outline-none focus:ring-0"
          />
          <label>confirm Password</label>
          <input
            type="password"
            required
            name="confirmPass"
            value={values.confirmPass}
            onChange={handleChange}
            className="p-2 bg-[#F5F5F5] rounded-md border-none focus:outline-none focus:ring-0"
          />

          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Register
          </button>
        </form>
        <span className="flex gap-2 flex-col md:flex-row items-center justify-center p-2">
          <p className="text-gray-500">Already have an account?</p>{" "}
          <p className="text-blue-500 hover:border-b-2 border-blue-500">
            <Link to="/">Sign in</Link>
          </p>
        </span>
        <div className="flex gap-5 text-gray-400 md:hidden p-4 m-2 items-center justify-center bottom-0">
          <FaGithub size={30} className="cursor-pointer" />
          <AiFillTwitterCircle size={30} className="cursor-pointer" />
          <FaLinkedin size={30} className="cursor-pointer" />
          <IoLogoDiscord size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
