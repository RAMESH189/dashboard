import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function FileContent({ data }) {
  const [hidden, setHidden] = useState(false)
  
  return (
    <div className="w-full bg-white p-4 rounded-md flex items-center justify-around mb-2">
      <p className="flex-[0.2]">1</p>
      <p className="flex-[0.2]">
        <a href="#">link</a>
      </p>
      <p className="flex-[0.2]">prefix</p>
      <div className="flex-[0.2] w-full">
        <select name="select" id="select" className="w-[50%] p-1  border border-gray-200">
          <option className="" value="">choose</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-2 flex-[0.2]">
        <div className="btn">
          tag{" "}
          <IoMdClose size={18} className="border border-white  rounded-full" />
        </div>
        <div className="btn">
          tag{" "}
          <IoMdClose size={18} className="border border-white  rounded-full" />
        </div>
        <div className="btn">
          tag{" "}
          <IoMdClose size={18} className="border border-white  rounded-full" />
        </div>
        <div className="btn">
          tag{" "}
          <IoMdClose size={18} className="border border-white  rounded-full" />
        </div>
      </div>
    </div>
  );
}
