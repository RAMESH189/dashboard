import React from "react";

export default function MenuItem({ Icon, item, handleSelect, selected }) {
  return (
    <div
      onClick={() => handleSelect(item)}
      className={`flex gap-2 items-center font-semibold ${
        selected ? "text-blue-500" : "text-gray-500"
      } py-2 hover:text-blue-700 hover:scale-110 transition-transform duration-200`}
    >
      <Icon size={25} />
      <p>{item}</p>
    </div>
  );
}
