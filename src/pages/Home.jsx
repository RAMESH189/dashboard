import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Main from "../components/Main";

export default function Home() {
  const [navItem, setNavItem] = useState("Upload");
  return (
    <div className="flex h-screen w-[100%]">
      <SideNav setNavItem={setNavItem} />
      <Main navItem={navItem} />
    </div>
  );
}
