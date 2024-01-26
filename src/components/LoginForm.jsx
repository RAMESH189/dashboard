import React, { useEffect, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    alert("password recovary in progress");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email.length !== 0 && values.password.length !== 0) {
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
    <section className="w-full md:w-[523px] h-fit md:h-[690px] bg-[#F8FAFF] p-4 md:p-2">
      <div className="bg-[#F8FAFF] w-full min-h-screen md:h-[410px] flex flex-col gap-10">
        <div className="">
          <h2 className="text-2xl md:text-3xl py-2 font-bold">Sign In</h2>
          <p className="text-sm font-semibold py-1">Sign in to your account</p>
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center gap-2 bg-white shadow-md p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src="/google.png" alt="google" className="h-4" />
            <p className="text-sm text-gray-400">Sign in with Google</p>
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
          <span className="cursor-pointer text-blue-500" onClick={handleClick}>
            Forgot Password?
          </span>
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Sign in
          </button>
        </form>
        <span className="flex gap-2 flex-col md:flex-row items-center justify-center p-2">
          <p className="text-gray-500">Don't have an account?</p>{" "}
          <p className="text-blue-500 hover:border-b-2 border-blue-500">
            <Link to="/register">Register here</Link>
          </p>
        </span>
        <div className="flex gap-5 text-gray-400 md:hidden p-4 m-2 items-center justify-center bottom-0">
          <FaGithub size={30} className="cursor-pointer" />
          <AiFillTwitterCircle size={30} className="cursor-pointer" />
          <FaLinkedin size={30} className="cursor-pointer" />
          <IoLogoDiscord size={30} className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
