import React from "react";
import Header from "./Header";
import Content from "./Content";

export default function Main({ navItem }) {
  return (
    <div className="flex-[1] bg-gray-100 overflow-y-scroll no-scrollbar">
      <Header />
      <Content navItem={navItem} />
    </div>
  );
}
