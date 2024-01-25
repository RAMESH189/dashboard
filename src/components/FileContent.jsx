import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function FileContent({ rowData }) {
  const [value, setValue] = useState("");
  const [values, setValues] = useState([]);
  // console.log("rowdata", rowData);

  //data for table
  const row = rowData.split(",");

  // console.log("row", row);
  // data for the dropdown

  const lastStringInQuotes = row.slice(3);
  lastStringInQuotes[0] = "Technology";
  lastStringInQuotes[lastStringInQuotes.length - 2] = "Finance";
  lastStringInQuotes.pop();

  // console.log("lastStringInQuotes", lastStringInQuotes);

  const handleChnage = (e) => {
    setValue(e.target.value);
  };

  const removeItem = (e, item) => {
    e.preventDefault()
    const updatedValues = values.filter((value) => item !== value);
    setValues(updatedValues);
  };

  useEffect(() => {
    if (value) {
      setValues((values) => [...values, value]);
    }
  }, [value]);

  return (
    <div className="w-full bg-white p-4 rounded-md flex items-center justify-around mb-2">
      <p className="flex-[0.2]">{row[0]}</p>
      <p className="flex-[0.2] text-blue-500 text-sm ">
        <a href={row[1]}>{row[1]}</a>
      </p>
      <p className="flex-[0.2]">{row[2]}</p>
      <div className="flex-[0.2] w-full">
        <select
          name="select"
          id="select"
          onChange={handleChnage}
          className="w-[50%] p-1  border border-gray-200"
        >
          <option className="" value="">
            choose
          </option>
          {lastStringInQuotes.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-[0.2]">
        <div
          className={`grid grid-cols-2 gap-1   ${
            value.length > 0 ? "grid" : "hidden"
          }`}
        >
          {values.length > 0 &&
            values.map((value, index) => (
              <div
                onClick={(e) => removeItem(e, value)}
                className="btn "
                key={index}
              >
                {value.length > 6 ? value.substring(0, 6) + ".." : value}
                <IoMdClose
                  size={18}
                  className="border border-white  rounded-full"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
