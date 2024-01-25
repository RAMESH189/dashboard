import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function FileContent({ rowData }) {
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(false);
  console.log(rowData);
  return (
    <div className="w-full bg-white p-4 rounded-md flex items-center justify-around mb-2">
      <p className="flex-[0.2]">1</p>
      <p className="flex-[0.2]">
        <a href="#">link</a>
      </p>
      <p className="flex-[0.2]">prefix</p>
      <div className="flex-[0.2] w-full">
        <select
          name="select"
          id="select"
          onChange={(e) => setValue(e.target.value)}
          className="w-[50%] p-1  border border-gray-200"
        >
          <option className="" value="">
            choose
          </option>
          <option value="item 1">item 1</option>
          <option value="item 2">item 2</option>
          <option value="item 3">item 3</option>
          <option value="item 4">item 4</option>
          <option value="item 5">item 5</option>
          <option value="item 6">item 6</option>
        </select>
      </div>
      <div className="flex-[0.2]">
        <div
          className={`grid grid-cols-2 gap-2  ${
            value.length > 0 ? "grid" : "hidden"
          }`}
        >
          <div className="btn">
            {value}
            <IoMdClose
              size={18}
              className="border border-white  rounded-full"
            />
          </div>
          <div className="btn">
            {value}
            <IoMdClose
              size={18}
              className="border border-white  rounded-full"
            />
          </div>
          <div className="btn">
            {value}
            <IoMdClose
              size={18}
              className="border border-white  rounded-full"
            />
          </div>
          <div className="btn">
            {value}
            <IoMdClose
              size={18}
              className="border border-white  rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
