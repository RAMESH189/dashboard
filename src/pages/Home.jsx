import React from "react";
import SideNav from "../components/SideNav";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="flex h-screen w-[100%]">
      <SideNav />
      <Main />
    </div>
  );
}
